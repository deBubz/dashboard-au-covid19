const express = require('express');
const cors = require('cors');

require('dotenv').config();

// express server config
const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());

// routing config
const dataRouter = require('./data/data.route');
app.use('/api', dataRouter);

// start server
app.listen(port, () => {
    console.log(`server starting on port ${port}`);
});