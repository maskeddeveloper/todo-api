const pool = require('../configs/db');

module.exports = function (app) {
    app.post('/createTodo', async (req, res) => {
        try {
            const { title } = req.body;
            const { completed } = req.body;
            const newTodo = await pool.query(
                'INSERT INTO todo (title,completed) values ($1,$2) RETURNING *',
                [title, completed]
            );
            res.json(newTodo.rows[0]);
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    });
};
