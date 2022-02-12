const express = require('express');
const cors = require('cors');

const {PORT} = require('./config/config');
const routes = require('./routes');


const app = express();


require('./config/mongoose')();

app.use(cors());
app.use(express.json());


app.use('/api', routes);

app.listen(PORT, console.log(`Listening on port http://localhost:${PORT}/ ! Now its up to you...`));