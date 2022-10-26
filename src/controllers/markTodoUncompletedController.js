const pool = require('../configs/db');

module.exports = function (app) {
    app.put('/markTodoUncompleted/:id', async (req, res) => {
        try {
            const { id } = req.params;
            await pool.query(
                'UPDATE todo SET completed = false WHERE id = $1',
                [id]
            );
            res.json('Todo was marked as Uncompleted!');
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    });
};
