const express = require('express')
const app = express()
const port = 3000
const app_key = ''
const app_id = ''
const url = `https://api.tfl.gov.uk/StopPoint/910GHACKNYW/Arrivals?stress-wick={{${app_id}}}&f23083928468424291f29db725daaa0b={{${app_key}}}`

app.get('/', (req, res) => {
  res.send('Coucou!')
})

app.get('/trains', async (req, res) => {
  try {
    const response = await fetch(url, {method: 'GET', headers: {
      'Content-Type': 'application/json'
    }})
    const responseData = await response.json()
    console.log(responseData)
    res.send(responseData)
  } catch (e) {
    console.log(e)
    res.send(e)
  }

 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})