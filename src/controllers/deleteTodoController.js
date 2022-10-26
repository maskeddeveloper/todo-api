const { Pool } = require('pg');

module.exports = function (app) {
    app.get('deleteTodo/:id', async (req, res) => {
        try {
            const { id } = req.params;
            await Pool.query('DELETE FROM todo WHERE id = $1', [id]);
            res.json('Todo was deleted!');
        } catch (error) {
            console.log(error.message);
        }
    });
};
