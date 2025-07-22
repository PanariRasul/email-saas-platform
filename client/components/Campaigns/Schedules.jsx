import React, { useState } from 'react';
import { CalendarDays, List, Edit, Trash2 } from 'lucide-react';

const scheduledCampaigns = [
    {
        id: 1,
        name: 'Promo Blast',
        date: '2025-07-25T10:00',
        type: 'Promo',
        status: 'Scheduled',
    },
    {
        id: 2,
        name: 'Weekly Newsletter',
        date: '2025-07-27T09:00',
        type: 'Newsletter',
        status: 'Scheduled',
    },
    {
        id: 3,
        name: 'Flash Sale',
        date: '2025-08-01T15:30',
        type: 'Promo',
        status: 'Scheduled',
    },
];

const Schedules = () => {
    const [view, setView] = useState('table');

    return (
        <>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black dark:text-white">Scheduled Campaigns</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setView('table')}
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg ${view === 'table'
                                    ? 'bg-[#7F27FF] text-white'
                                    : 'bg-gray-100 dark:bg-[#0F044C] text-black dark:text-white'
                                }`}
                        >
                            <List size={16} /> Table View
                        </button>
                        <button
                            onClick={() => setView('calendar')}
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg ${view === 'calendar'
                                    ? 'bg-[#7F27FF] text-white'
                                    : 'bg-gray-100 dark:bg-[#0F044C] text-black dark:text-white'
                                }`}
                        >
                            <CalendarDays size={16} /> Calendar View
                        </button>
                    </div>
                </div>

                {view === 'table' ? (
                    <div className="overflow-x-auto rounded-xl shadow">
                        <table className="min-w-full bg-white dark:bg-[#0F044C]">
                            <thead className="bg-gray-100 dark:bg-[#4300FF] text-black dark:text-white">
                                <tr>
                                    <th className="text-left px-4 py-3">Name</th>
                                    <th className="text-left px-4 py-3">Type</th>
                                    <th className="text-left px-4 py-3">Scheduled Time</th>
                                    <th className="text-left px-4 py-3">Status</th>
                                    <th className="text-left px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduledCampaigns.map((c) => (
                                    <tr key={c.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#6528F7]">
                                        <td className="px-4 py-3">{c.name}</td>
                                        <td className="px-4 py-3">{c.type}</td>
                                        <td className="px-4 py-3">
                                            {new Date(c.date).toLocaleString()}
                                        </td>
                                        <td className="px-4 py-3">{c.status}</td>
                                        <td className="px-4 py-3 flex gap-2">
                                            <button className="text-green-600 hover:text-green-800">
                                                <Edit size={16} />
                                            </button>
                                            <button className="text-red-600 hover:text-red-800">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-[#0F044C] p-6 rounded-xl shadow">
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                            📅 Calendar View is a preview. You can integrate FullCalendar or React Big Calendar here.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {scheduledCampaigns.map((c) => (
                                <div key={c.id} className="border p-4 rounded-xl bg-gray-50 dark:bg-[#4300FF]">
                                    <h4 className="font-bold text-black dark:text-white">{c.name}</h4>
                                    <p className="text-sm text-black dark:text-gray-100">
                                        {new Date(c.date).toLocaleDateString()} @{' '}
                                        {new Date(c.date).toLocaleTimeString()}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-200">{c.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Schedules;
