const express = require('express');
const cors = require('cors');

const {PORT} = require('./config/config');


const app = express();


require('./config/mongoose')();

app.use(cors());
app.use(express.json());

app.listen(PORT, console.log(`Listening on port http://localhost:${PORT}/ ! Now its up to you...`));