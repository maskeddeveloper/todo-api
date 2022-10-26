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
            const newTodo = await Pool.query(
                'INSERT INTO todo (title) values ($1) RETURNING *',
                [title]
            );
            res.json(newTodo.rows[0]);
        } catch (error) {
            console.log(error.message);
        }
    });
};
