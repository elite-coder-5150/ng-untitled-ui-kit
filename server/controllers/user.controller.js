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

export const getUserById = (req, res) => {
    const userId = req.params.id;

    const sql = `
        select * from users where id=?
    `;

    db.query(sql, [userId], (error, results) => {
        if (error) {
            console.error('error fetching user', error);
            res.status(500).json({ error: 'failed to fetch user' });
        } else if (results.length == 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.stauts(200).json(results[0])
        }
    });
};

