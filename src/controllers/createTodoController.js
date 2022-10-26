const { Pool } = require('pg');

module.exports = function (app) {
    //     createTodo(title)
    // markTodoCompleted(id)
    // markTodoUncompleted(id)
    // deleteTodo(id)
    // listTodos

    app.post('createTodo', async (req, res) => {
        try {
            const { title } = req.body;
            const { completed } = req.body;
            const newTodo = await Pool.query(
                'INSERT INTO todo (title,completed) values ($1,$2) RETURNING *',
                [title, completed]
            );
            res.json(newTodo.rows[0]);
        } catch (error) {
            console.log(error.message);
        }
    });
};
