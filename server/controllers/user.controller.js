export const createUser = (req, res) => {
    const { name, email, password } = req.body;

    const sql = `
        insert into users (name, email, password) values(?, ?, ?)
    `;

    db.query(sql, [name, email, password], (error, results) => {
        if (error) {
            console.error('error createing user', error);
            res.status(500).json({ error: 'failed to create user'})
        } else {
            res.status(200).json({ message: 'user creatd', userId: results.insertId})
        }
    })
};

export const getAllUsers = (req, res) => {
    const sql = `
        select * from users
    `;

    db.query(sql, (error, results) => {
        if (error) {
            console.error('error fetching users', error);
            res.status(500).json({error: 'failed to fetch users'});
        } else {
            res.status(200).json(results);
        }
    })
};