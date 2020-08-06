import express from 'express';

const app = express()

app.get('/users', (req, res) => {
  return res.json("hi")
})

app.listen(3333);