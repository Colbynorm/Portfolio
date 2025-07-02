// index.js
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 3001
const API_KEY = 'f2e9890bd023449388029f4c97dc96af'

app.use(cors())

app.get('/tournaments', async (req, res) => {
  try {
    // Step 1: Get the current season
    const currentSeasonRes = await axios.get(
      'https://api.sportsdata.io/golf/v2/json/CurrentSeason',
      {
        headers: {
          'Ocp-Apim-Subscription-Key': API_KEY,
        },
      },
    )

    const season = currentSeasonRes.data.Season

    // Step 2: Get tournaments for that season
    const tournamentsRes = await axios.get(
      `https://api.sportsdata.io/golf/v2/json/TournamentsBySeason/${season}`,
      {
        headers: {
          'Ocp-Apim-Subscription-Key': API_KEY,
        },
      },
    )

    // Step 3: Filter out tournaments that are already finished
    const today = new Date()
    const filtered = tournamentsRes.data.filter((t) => {
      const endDate = new Date(t.EndDate)
      return !t.IsOver || endDate >= today
    })

    // Optional: Sort by start date (soonest first)
    filtered.sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate))

    res.json(filtered)
  } catch (error) {
    console.error('Error fetching filtered tournaments:', error.message)
    res.status(500).json({ error: 'Failed to fetch tournaments' })
  }
})

app.listen(PORT, () => {
  console.log(`⛳ Golf proxy running on http://localhost:${PORT}`)
})
