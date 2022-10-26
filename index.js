const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const createTodoController = require('./src/controllers/createTodoController.js');
const deleteTodoController = require('./src/controllers/deleteTodoController.js');
const listeTodosController = require('./src/controllers/listeTodosController.js');
const markTodoCompletedController = require('./src/controllers/markTodoCompletedController.js');
const markTodoUncompletedController = require('./src/controllers/markTodoUncompletedController.js');
app.use(cors());
app.use(express.json());
createTodoController(app);
deleteTodoController(app);
listeTodosController(app);
markTodoCompletedController(app);
markTodoUncompletedController(app);
app.get('/', (req, res) => {
    res.send('Nothing to show :)');
});
app.listen(process.env.PORT, () => {
    console.log('server is running');
});
