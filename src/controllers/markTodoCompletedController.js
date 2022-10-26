const { Pool } = require('pg');

module.exports = function (app) {
    //     createTodo(title)
    // markTodoCompleted(id)
    // markTodoUncompleted(id)
    // deleteTodo(id)
    // listTodos

    app.put('markTodoCompleted/:id', async (req, res) => {
        try {
            const { id } = req.params;
            await Pool.query('UPDATE todo SET completed = true WHERE id = $1', [
                id
            ]);
            res.json('Todo was marked as completed!');
        } catch (error) {
            console.log(error.message);
        }
    });
};
