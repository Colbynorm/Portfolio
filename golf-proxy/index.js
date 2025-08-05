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

app.listen(PORT, () => {
  console.log(`⛳ Golf proxy running on http://localhost:${PORT}`)
})
