const express = require('express');
const router = express.Router();
import {
    getNotificationsByCategory,
    markAsRead,
    getAllNotifications,
    disableNotifications
} from '../controllers/';

router.get('/api/notifications/category/:category', getNotificationsByCategory); 
router.put('/api/notifications/:id/mark-read', markAsRead);
router.get('/api/notifications', getAllNotifications);
router.put('/api/notifications/:id/disable', disableNotifications);