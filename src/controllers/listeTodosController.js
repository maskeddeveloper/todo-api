const pool = require('../configs/db');
module.exports = function (app) {
    app.get('/listTodos', async (req, res) => {
        try {
            const listTodos = await pool.query('SELECT * FROM todo');
            if (listTodos.length === 0) {
                res.status(200).send({
                    message: 'No data'
                });
            } else {
                res.json(listTodos.rows);
            }
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    });
};
