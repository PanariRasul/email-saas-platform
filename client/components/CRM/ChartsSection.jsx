import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function ChartsSection() {
    const timelineData = [
        { date: '2025-07-15', leads: 5 },
        { date: '2025-07-16', leads: 8 },
        { date: '2025-07-17', leads: 12 },
        { date: '2025-07-18', leads: 7 },
        { date: '2025-07-19', leads: 15 },
        { date: '2025-07-20', leads: 10 },
        { date: '2025-07-21', leads: 18 }
    ];

    const conversionData = [
        { name: 'New Lead', value: 100, fill: '#3B82F6' },
        { name: 'Contacted', value: 75, fill: '#EAB308' },
        { name: 'Proposal', value: 50, fill: '#F97316' },
        { name: 'Negotiation', value: 30, fill: '#8B5CF6' },
        { name: 'Won', value: 20, fill: '#10B981' }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">New Leads Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={timelineData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis
                            dataKey="date"
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            axisLine={{ stroke: '#374151' }}
                        />
                        <YAxis
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            axisLine={{ stroke: '#374151' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1F2937',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#F9FAFB'
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="leads"
                            stroke="#8B5CF6"
                            strokeWidth={3}
                            dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversion Funnel</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={conversionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis
                            dataKey="name"
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            axisLine={{ stroke: '#374151' }}
                        />
                        <YAxis
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            axisLine={{ stroke: '#374151' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1F2937',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#F9FAFB'
                            }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}