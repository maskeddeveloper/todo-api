const pool = require('../configs/db');

module.exports = function (app) {
    app.delete('/deleteTodo/:id', async (req, res) => {
        try {
            const { id } = req.params;
            await pool.query('DELETE FROM todo WHERE id = $1', [id]);
            res.json('Todo was deleted!');
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    });
};
