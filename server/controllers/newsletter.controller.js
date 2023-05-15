const createNewsletter = (req, res) => {
    const { title, content } = req.body;

    db.query('insert into newsletter (title, content) values (:title, :content)', [title, conent], (error, results) => {
        if (error) {
            console.error('error creating newsletter');
            res.status(500).json({ error: 'failed to create newsletter' });
        } else {
            res.status(201).json({ message: 'Newsletter created successfully', newsletterId: results.insertId });
        }
    })
};

const getAllNewsletters = (req, res) => {
    const sql = `
        select * from newsletters 
    `;

    db.query(sql, (error, results) => {
        if (error) {
            console.error('error fetching newsletter', error);
            res.status(500).json({ error: 'Couldn\'t fetch newsletter' });
        } else {
            res.status(200).json(results);
        }
    })
};

const getNewsletterById = (req, res) => {
    const newsletterId = req.params.id;

    const sql = `
        select * from newsletters where id=?
    `;

    db.query(sql, [newsletterId], (error, results) => {
        if (error) {
            console.error('error fetching newsletter', error);
            res.status(500).json({ error: 'error fetching newsletter' });
        } else if (results.length === 0) {
            res.status(404).json({ erorr: 'Newsletter not found' });
        } else {
            results.status(200).json(results[0]);
        }
    });
};