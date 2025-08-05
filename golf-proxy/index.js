// index.js
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 3001
const API_KEY = 'f2e9890bd023449388029f4c97dc96af'

app.use(cors())

async function safeGet(url, config = {}) {
  try {
    return await axios.get(url, config)
  } catch (err) {
    // Normalize error info for easier debugging
    if (err.response) {
      // server responded with non-2xx
      const { status, data } = err.response
      const message = `Upstream ${url} returned ${status} - ${JSON.stringify(data).slice(0, 200)}`
      const error = new Error(message)
      error.status = status
      throw error
    } else {
      // network/other error
      throw err
    }
  }
}

app.get('/tournaments', async (req, res) => {
  try {
    const headers = { headers: { 'Ocp-Apim-Subscription-Key': API_KEY } }

    // Try primary flow first
    try {
      const currentSeasonRes = await axios.get(
        'https://api.sportsdata.io/golf/v2/json/CurrentSeason',
        headers,
      )

      const season = currentSeasonRes.data && currentSeasonRes.data.Season
      if (!season) throw new Error('No season returned')

      const tournamentsRes = await axios.get(
        `https://api.sportsdata.io/golf/v2/json/TournamentsBySeason/${season}`,
        headers,
      )

      const today = new Date()
      const filtered = (tournamentsRes.data || []).filter((t) => {
        const start = t.StartDate ? new Date(t.StartDate) : null
        const end = t.EndDate ? new Date(t.EndDate) : null
        return (
          (start && start >= today) || // future events
          (start && end && start <= today && end >= today) // currently active
        )
      })

      filtered.sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate))
      return res.json(filtered)
    } catch (err) {
      console.warn(
        'Primary season flow failed — falling back to /Tournaments. Reason:',
        err.message,
      )
    }

    // Fallback flow — only upcoming or currently active events
    try {
      const tournamentsRes = await axios.get(
        'https://api.sportsdata.io/golf/v2/json/Tournaments',
        headers,
      )

      const today = new Date()
      const filtered = (tournamentsRes.data || []).filter((t) => {
        const start = t.StartDate ? new Date(t.StartDate) : null
        const end = t.EndDate ? new Date(t.EndDate) : null
        return (
          (start && start >= today) || // future events
          (start && end && start <= today && end >= today) // currently active
        )
      })

      filtered.sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate))
      return res.json(filtered)
    } catch (err) {
      console.error('Fallback /Tournaments call failed:', err.message)
      return res.status(500).json({ error: 'Failed to fetch tournaments' })
    }
  } catch (err) {
    console.error('Error in /tournaments route:', err.message)
    return res.status(500).json({ error: 'Failed to fetch tournaments' })
  }
})

// add below your existing /tournaments route in index.js
app.get('/tournament/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid tournament id' })

  const headers = { headers: { 'Ocp-Apim-Subscription-Key': API_KEY } }

  try {
    // Try CurrentSeason -> TournamentsBySeason first (if available)
    try {
      const currentSeasonRes = await axios.get(
        'https://api.sportsdata.io/golf/v2/json/CurrentSeason',
        headers,
      )
      const season = currentSeasonRes.data && currentSeasonRes.data.Season
      if (season) {
        const seasonTournamentsRes = await axios.get(
          `https://api.sportsdata.io/golf/v2/json/TournamentsBySeason/${season}`,
          headers,
        )
        const found = (seasonTournamentsRes.data || []).find((t) => Number(t.TournamentID) === id)
        if (found) return res.json(found)
      }
    } catch (err) {
      // ignore and fallback below; keep log for debugging
      console.warn('/tournament primary flow failed:', err.message || err)
    }

    // Fallback: search the general Tournaments feed
    try {
      const allTournamentsRes = await axios.get(
        'https://api.sportsdata.io/golf/v2/json/Tournaments',
        headers,
      )
      const found = (allTournamentsRes.data || []).find((t) => Number(t.TournamentID) === id)
      if (found) return res.json(found)

      // not found
      return res.status(404).json({ error: 'Tournament not found' })
    } catch (err) {
      console.error('Fallback tournaments call failed:', err.message || err)
      return res.status(500).json({ error: 'Failed to fetch tournament' })
    }
  } catch (err) {
    console.error('Error in /tournament/:id route:', err.message || err)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`⛳ Golf proxy running on http://localhost:${PORT}`)
})
