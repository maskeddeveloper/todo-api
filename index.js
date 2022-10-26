const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const createTodoController = require('./controllers/createTodoController.js');
const deleteTodoController = require('./controllers/deleteTodoController.js');
const listeTodosController = require('./controllers/listeTodosController.js');
const markTodoCompletedController = require('./controllers/markTodoCompletedController.js');
const markTodoUncompletedController = require('./controllers/markTodoUncompletedController.js');
app.use(cors());
app.use(express.json());
createTodoController(app);
deleteTodoController(app);
listeTodosController(app);
markTodoCompletedController(app);
markTodoUncompletedController(app);

app.listen(process.env.PORT, () => {
    console.log('server is running');
});
