// components/integrations/AccessControl.jsx
import { Card } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

const auditLog = [
    {
        id: 1,
        action: 'Connected Stripe integration',
        user: 'Alice (Admin)',
        timestamp: '2025-07-20 14:32',
    },
    {
        id: 2,
        action: 'Revoked Slack permissions',
        user: 'Bob (Admin)',
        timestamp: '2025-07-19 09:15',
    },
    {
        id: 3,
        action: 'Scheduled sync with CRM',
        user: 'Charlie (Admin)',
        timestamp: '2025-07-18 17:45',
    },
];

export default function AccessControl() {
    return (
        <Card className="bg-white dark:bg-[#0F044C] text-black dark:text-white p-6 rounded-xl shadow-sm mt-8">
            <div className="flex items-center gap-2 mb-4">
                <ShieldAlert className="text-red-500 h-5 w-5" />
                <h2 className="text-lg font-semibold">🛡 Access Control & Audit Logs</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Only <strong>Admins</strong> can manage integrations. All changes are logged below.
            </p>
            <div className="space-y-3 text-sm">
                {auditLog.map((entry) => (
                    <div
                        key={entry.id}
                        className="border-b pb-2 border-gray-200 dark:border-gray-700 flex justify-between"
                    >
                        <span className="text-gray-800 dark:text-gray-200">
                            {entry.action} by <strong>{entry.user}</strong>
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">{entry.timestamp}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
