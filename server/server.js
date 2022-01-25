const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors({
    // you have to add the origin that will access, but if anyone can access
    // it's impossible to add every origin. So I guess this is not for web, but
    // for purposes when you want to restrict who can access this server?
    origin: 'http://127.0.0.1:5500',
}))

app.get('/data', (req, res) => {
    res.json({ 'name': 'kyle', favoriteFood: 'rice' })
})

app.listen(3000)