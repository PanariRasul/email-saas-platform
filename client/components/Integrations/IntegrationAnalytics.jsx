// components/integrations/IntegrationAnalytics.jsx
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyStats = [
    { date: 'Jul 1', syncs: 24 },
    { date: 'Jul 2', syncs: 18 },
    { date: 'Jul 3', syncs: 32 },
    { date: 'Jul 4', syncs: 12 },
    { date: 'Jul 5', syncs: 28 },
    { date: 'Jul 6', syncs: 35 },
];

export default function IntegrationAnalytics() {
    return (
        <Card className="bg-white dark:bg-[#0F044C] text-black dark:text-white shadow-sm rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">📊 Integration Analytics</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Syncs</p>
                    <p className="text-2xl font-bold">149</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Errors</p>
                    <p className="text-2xl font-bold text-red-500">3</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Last Sync</p>
                    <p className="text-2xl font-bold">Jul 6, 2025</p>
                </div>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dummyStats}>
                        <XAxis dataKey="date" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="syncs" fill="#7F27FF" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
