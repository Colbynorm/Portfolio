// index.js
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 3001
const API_KEY = 'f2e9890bd023449388029f4c97dc96af'

app.use(cors())

// Helper for API calls with consistent error handling
async function safeGet(url) {
  try {
    return await axios.get(url, {
      headers: { 'Ocp-Apim-Subscription-Key': API_KEY },
    })
  } catch (err) {
    if (err.response) {
      const { status, data } = err.response
      const msg = `Upstream ${url} returned ${status} - ${JSON.stringify(data).slice(0, 200)}`
      const error = new Error(msg)
      error.status = status
      throw error
    }
    throw err
  }
}

// Fetch all tournaments and filter
async function fetchFilteredTournaments() {
  const today = new Date()
  const res = await safeGet('https://api.sportsdata.io/golf/v2/json/Tournaments')

  return (res.data || [])
    .filter((t) => {
      if (!t.StartDate) return false
      const start = new Date(t.StartDate)
      const end = t.EndDate ? new Date(t.EndDate) : null
      const isFuture = start >= today
      const isActive = start <= today && end && end >= today
      return isFuture || isActive
    })
    .sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate))
}

// GET /tournaments — all active or upcoming tournaments
app.get('/tournaments', async (req, res) => {
  try {
    const tournaments = await fetchFilteredTournaments()
    res.json(tournaments)
  } catch (err) {
    console.error('Error fetching tournaments:', err.message)
    res.status(500).json({ error: 'Failed to fetch tournaments' })
  }
})

// GET /tournament/:id — find tournament by ID
app.get('/tournament/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid tournament id' })

  try {
    const response = await safeGet('https://api.sportsdata.io/golf/v2/json/Tournaments')
    const found = (response.data || []).find((t) => Number(t.TournamentID) === id)
    if (!found) return res.status(404).json({ error: 'Tournament not found' })
    res.json(found) // <-- Express res here, no conflict
  } catch (err) {
    console.error('Error fetching tournament by ID:', err.message)
    res.status(500).json({ error: 'Failed to fetch tournament' })
  }
})

// GET /leaderboard/:id - find leaderboard for selected tournament
app.get('/leaderboard/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid tournament id' })

  const headers = { headers: { 'Ocp-Apim-Subscription-Key': API_KEY } }

  try {
    const response = await axios.get(
      `https://api.sportsdata.io/golf/v2/json/LeaderboardBasic/${id}`,
      headers,
    )
    res.json(response.data)
  } catch (error) {
    console.error('Error fetching leaderboard:', error.message)
    res.status(500).json({ error: 'Failed to fetch leaderboard' })
  }
})

app.listen(PORT, () => {
  console.log(`⛳ Golf proxy running on http://localhost:${PORT}`)
})
