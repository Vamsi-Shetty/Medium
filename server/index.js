const express = require('express');

const app = express();

const PORT = 3000;

app.get('/api/v1/', (req, res) => {
    res.send("Welcome to Home Page")
});

app.post('/api/v1/signup', (req, res) => {
    const [userName, password] = req.body;
    
})

app.use((err, req, res, next) => {
    res.json({
        message: "Oops, something unexpected happened!"
    })
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})