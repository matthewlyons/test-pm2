require('dotenv').config();
const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.json({
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
    });
});

let port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App Running on port ${port}`)
})