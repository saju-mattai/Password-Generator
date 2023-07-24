const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('static'));

app.get("/", (req, res) => {
    return res.sendFile(`${__dirname}/public/index.html`);
});
// Listening to the PORT
app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}/`);
});