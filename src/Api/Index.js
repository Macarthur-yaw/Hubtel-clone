const express = require('express');
const router = require('./Routes');
const app = express();
require('dotenv').config();
const cors=require('cors')

app.use(cors())
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});