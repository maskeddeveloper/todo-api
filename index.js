const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
var todoController = require('./controllers/todoController.js');

app.use(cors());
app.use(express.json());
todoController(app);

app.listen(process.env.PORT, () => {
    console.log('server is running');
});
