const { Pool } = require('pg');

module.exports = function (app) {
    app.put('markTodoUncompleted/:id', async (req, res) => {
        try {
            const { id } = req.params;
            await Pool.query('UPDATE todo SET completed = false WHERE id = $1', [
                id
            ]);
            res.json('Todo was marked as Uncompleted!');
        } catch (error) {
            console.log(error.message);
        }
    });
};
