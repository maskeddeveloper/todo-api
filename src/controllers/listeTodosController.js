const { Pool } = require('pg');

module.exports = function (app) {
    //     createTodo(title)
    // markTodoCompleted(id)
    // markTodoUncompleted(id)
    // deleteTodo(id)
    // listTodos

    app.get('listTodos', async (req, res) => {
        try {
            const listTodos = await Pool.query('SELECT * FROM todo');
            res.json(listTodos.rows());
        } catch (error) {
            console.log(error.message);
        }
    });
};
