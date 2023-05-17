export const createNotification = (req, res) => {
    const { title, type, username, message, date } = req.body;

    const sql = `
        insert into notifications (title, type, username, message, date) values (:title, :type, :username, :message, now())
    `;

    db.query(sql, [title, type, username, message, date], (error, results) => {
        if (error) {
            console.error('error createing notification');
            res.status(500).json({ error: 'failed to create notification' });
        } else {
            res.status(201).json({ message: 'notification successfully created' })
        }
    });
};

export const markAsRead = (req, res) => {
    const nofiticationId = req.params.id;

    const sql = `
        update notifcations set isRead=true where id=?
    `;

    db.query(sql, [notificationId], (error, resuts) => {
        if (error) {
            console.error('error marking notification as read: ', error);
            res.status(500).json({ error: 'failed to mark notification as read.'})
        } else {
            resuts.status(200).json({message: 'notification marked as read'})
        }
    });
};

export const getAllNotifications = (req, res) => {
    const { id } = req.params;

    const sql = `
        select * from notifications where id = ?
    `;

    db.query(sql, [id], (error, results) => {
        if (error) {
            console.error('error fetching notifications', error)
            res.statu(500).json({ error: 'error fetching notifications'});
        } else {
            res.status(200).json(results[0]);
        }
    })
};

export const getNotificationsByCategory = (req, res) => {
    const { category } = req.params;
    let fromDate = null;
    let toDate = null;
  
    if (category === 'today') {
      fromDate = new Date();
      fromDate.setHours(0, 0, 0, 0);
      toDate = new Date();
      toDate.setHours(23, 59, 59, 999);
    } else if (category === 'yesterday') {
      fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - 1);
      fromDate.setHours(0, 0, 0, 0);
      toDate = new Date();
      toDate.setDate(toDate.getDate() - 1);
      toDate.setHours(23, 59, 59, 999);
    } else if (category === 'week') {
      fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - 7);
      fromDate.setHours(0, 0, 0, 0);
      toDate = new Date();
      toDate.setHours(23, 59, 59, 999);
    }
  
    const sql = `
      SELECT * FROM notifications WHERE date >= ? AND date <= ?
    `;
  
    db.query(sql, [fromDate, toDate], (error, results) => {
      if (error) {
        console.error('Error fetching notifications by category:', error);
        res.status(500).json({ error: 'Failed to fetch notifications' });
      } else {
        res.status(200).json(results);
      }
    });
  };

  export const disableNotification = (req, res) => {
    const notificationId = req.params.id;

    const sql = `
        update notifications set isEnabled=false where id=?
    `;

    db.query(sql, [notificationId], (error, results) => {
        if (error) {
            console.error('error disabling notification: ', error);
            res.status(500).json({ error: 'failed to disable notification'})
        } else {
            res.status(200).json({ message: 'notification disabled'});
        }
    })
  }
