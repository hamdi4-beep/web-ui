import express from 'express'

const app = express()
app.listen(3000, () => console.log('Listening in on port', 3000))

app.post('/ask', (req, res) => {
    console.log(req)
})