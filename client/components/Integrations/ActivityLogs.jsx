// components/integrations/ActivityLogs.jsx
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const dummyLogs = [
    { timestamp: '2025-07-22 10:34', event: 'Contact sync initiated', status: 'success' },
    { timestamp: '2025-07-22 10:36', event: 'CRM data sync failed', status: 'failure' },
    { timestamp: '2025-07-21 19:10', event: 'Webhook triggered for new email', status: 'success' },
    { timestamp: '2025-07-20 14:02', event: 'Permissions updated by Admin', status: 'success' },
    { timestamp: '2025-07-19 17:45', event: 'OAuth token expired', status: 'failure' },
];

export default function ActivityLogs() {
    return (
        <Card className="bg-white dark:bg-[#0F044C] text-black dark:text-white p-6 shadow-sm rounded-xl">
            <h2 className="text-lg font-semibold mb-4">🧾 Integration Activity Logs</h2>

            <div className="overflow-auto">
                <table className="min-w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg">
                    <thead className="bg-gray-100 dark:bg-[#1a1a2c]">
                        <tr>
                            <th className="px-4 py-2 border-r border-gray-200 dark:border-gray-700">Timestamp</th>
                            <th className="px-4 py-2 border-r border-gray-200 dark:border-gray-700">Event</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyLogs.map((log, idx) => (
                            <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                                <td className="px-4 py-2">{log.timestamp}</td>
                                <td className="px-4 py-2">{log.event}</td>
                                <td className="px-4 py-2">
                                    <Badge
                                        variant={log.status === 'success' ? 'success' : 'destructive'}
                                        className="text-xs"
                                    >
                                        {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
