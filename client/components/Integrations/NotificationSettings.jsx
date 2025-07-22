// components/integrations/NotificationSettings.jsx
import { useState } from 'react';
import { Switch } from '@/components/ui/switchs';
import { Card, CardContent } from '@/components/ui/card';

export default function NotificationSettings() {
    const [failureAlerts, setFailureAlerts] = useState(true);
    const [weeklySummary, setWeeklySummary] = useState(false);

    return (
        <Card className="bg-white dark:bg-[#0F044C] text-black dark:text-white p-6 shadow-sm rounded-xl">
            <h2 className="text-lg font-semibold mb-4">🔔 Notification Settings</h2>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span>Email alerts on failure/disconnect</span>
                    <Switch
                        checked={failureAlerts}
                        onCheckedChange={setFailureAlerts}
                        className="bg-gray-200 dark:bg-gray-700"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <span>Weekly sync summary</span>
                    <Switch
                        checked={weeklySummary}
                        onCheckedChange={setWeeklySummary}
                        className="bg-gray-200 dark:bg-gray-700"
                    />
                </div>
            </div>
        </Card>
    );
}
