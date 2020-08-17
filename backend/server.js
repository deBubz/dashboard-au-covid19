const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

// express server config
const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../frontend", "build")))

// routing config
const dataRouter = require('./data/data.route');
app.use('/api', dataRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
})

// start server
app.listen(port, () => {
    console.log(`server starting on port ${port}`);
});