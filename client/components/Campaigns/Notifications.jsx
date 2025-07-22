import React, { useState } from 'react';
import { Bell, Trash2, Check } from 'lucide-react';

const dummyNotifications = [
    {
        id: 1,
        type: 'success',
        message: 'Campaign "Promo Blast" was sent successfully.',
        time: '2 hours ago',
        read: false,
    },
    {
        id: 2,
        type: 'warning',
        message: 'Bounce alert: 3 emails failed in "Newsletter Weekly".',
        time: '4 hours ago',
        read: false,
    },
    {
        id: 3,
        type: 'error',
        message: 'Schedule conflict detected for "Holiday Sale".',
        time: 'Yesterday',
        read: true,
    },
];

const typeColor = {
    success: 'bg-green-100 text-green-800 dark:bg-green-700/30 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700/30 dark:text-yellow-300',
    error: 'bg-red-100 text-red-800 dark:bg-red-700/30 dark:text-red-300',
};

const Notifications = () => {
    const [notifications, setNotifications] = useState(dummyNotifications);

    const markAsRead = (id) =>
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );

    const deleteNotification = (id) =>
        setNotifications((prev) => prev.filter((n) => n.id !== id));

    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black dark:text-white">Notifications</h2>
                    <div className="relative">
                        <Bell className="text-black dark:text-white" size={24} />
                        {unreadCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                                {unreadCount}
                            </span>
                        )}
                    </div>
                </div>

                {notifications.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-300">No notifications to display.</p>
                ) : (
                    <div className="space-y-4">
                        {notifications.map((notif) => (
                            <div
                                key={notif.id}
                                className={`flex items-start justify-between p-4 rounded-xl shadow-sm border ${typeColor[notif.type]
                                    } ${notif.read ? 'opacity-70' : ''}`}
                            >
                                <div>
                                    <p className="font-medium">{notif.message}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{notif.time}</p>
                                </div>
                                <div className="flex items-center gap-2 mt-1 sm:mt-0">
                                    {!notif.read && (
                                        <button
                                            onClick={() => markAsRead(notif.id)}
                                            className="text-green-600 hover:text-green-800"
                                            title="Mark as read"
                                        >
                                            <Check size={16} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteNotification(notif.id)}
                                        className="text-red-600 hover:text-red-800"
                                        title="Delete"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Notifications;
