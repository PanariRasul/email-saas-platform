import React from 'react';
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { FileDown, FileText } from 'lucide-react';

const stats = [
    { name: 'Open Rate', value: 68 },
    { name: 'Click Rate', value: 32 },
    { name: 'Bounce', value: 4 },
    { name: 'Spam', value: 1 },
    { name: 'Unsubscribed', value: 2 },
];

const opensOverTime = [
    { time: '8 AM', opens: 200 },
    { time: '10 AM', opens: 500 },
    { time: '12 PM', opens: 800 },
    { time: '2 PM', opens: 300 },
    { time: '4 PM', opens: 100 },
];

const deviceData = [
    { name: 'Mobile', value: 60 },
    { name: 'Desktop', value: 30 },
    { name: 'Tablet', value: 10 },
];

const COLORS = ['#7F27FF', '#4300FF', '#AD49E1'];

const CampaignReports = () => {
    return (
        <>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black dark:text-white">Campaign Report</h2>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-1 bg-gray-200 dark:bg-[#0F044C] text-black dark:text-white px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#6528F7]">
                            <FileText size={16} /> Export CSV
                        </button>
                        <button className="flex items-center gap-1 bg-gray-200 dark:bg-[#0F044C] text-black dark:text-white px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#6528F7]">
                            <FileDown size={16} /> Export PDF
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Engagement Bar Chart */}
                    <div className="bg-white dark:bg-[#0F044C] p-4 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Engagement Metrics</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={stats}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#7F27FF" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Opens Over Time */}
                    <div className="bg-white dark:bg-[#0F044C] p-4 rounded-xl shadow">
                        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Opens Over Time</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={opensOverTime}>
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="opens" stroke="#4300FF" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Device Usage Pie Chart */}
                    <div className="bg-white dark:bg-[#0F044C] p-4 rounded-xl shadow col-span-1 lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Device Breakdown</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={deviceData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {deviceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CampaignReports;
