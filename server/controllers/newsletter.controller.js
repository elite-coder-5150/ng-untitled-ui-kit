export const createNewsletter = (req, res) => {
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

export const getAllNewsletters = (req, res) => {
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

export const getNewsletterById = (req, res) => {
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

export const updateNewsletterById = (req, res) => {
    const newsletterId = req.params.id;
    const { title, content } = req.body;

    const sql = `
        UPDATE newsnetter set title= ?, conents = ? where id=?
    `;

    db.query(sql, [title, conent, newsletterId], (error) => {
        if (error) {
            console.error('error updating newsnetter', error);
            res.status(500).json({ error: 'failed to updat newsnetter' });
        } else {
            res.status(200).json({ message: 'newsletter updated successfully'})
        }
    })
}