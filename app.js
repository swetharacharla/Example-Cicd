
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Swetha!');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});