import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Moon, Sun } from 'lucide-react';

const GrowthPerformanceChart = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const data = [
        { year: 2010, customers: 5000, successRate: 20 },
        { year: 2011, customers: 8000, successRate: 28 },
        { year: 2012, customers: 12000, successRate: 35 },
        { year: 2013, customers: 15000, successRate: 42 },
        { year: 2014, customers: 18000, successRate: 48 },
        { year: 2015, customers: 14000, successRate: 55 },
        { year: 2016, customers: 12000, successRate: 65 },
        { year: 2017, customers: 28000, successRate: 75 },
        { year: 2018, customers: 32000, successRate: 88 },
        { year: 2019, customers: 38000, successRate: 95 },
        { year: 2020, customers: 42000, successRate: 108 },
        { year: 2021, customers: 78000, successRate: 120 },
        { year: 2022, customers: 95000, successRate: 135 },
        { year: 2023, customers: 88000, successRate: 142 },
        { year: 2024, customers: 92000, successRate: 160 }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={`p-4 rounded-lg shadow-lg border ${isDarkMode
                        ? 'bg-gray-800 border-gray-600 text-white'
                        : 'bg-white border-gray-200 text-gray-900'
                    }`}>
                    <p className="font-semibold mb-2">{`Year: ${label}`}</p>
                    {payload.map((entry, index) => (
                        <p key={index} style={{ color: entry.color }} className="text-sm">
                            {entry.name === 'customers' ? 'Customers' : 'Success Rate'}: {
                                entry.name === 'customers'
                                    ? entry.value.toLocaleString()
                                    : `${entry.value}%`
                            }
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    const CustomLegend = ({ payload }) => {
        return (
            <div className="flex justify-center gap-8 mt-4">
                {payload.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            {entry.value === 'customers' ? 'customers' : 'successRate'}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const themeClasses = isDarkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-gray-900";

    const cardClasses = isDarkMode
        ? "bg-gray-800 border-gray-700"
        : "bg-white border-gray-200";

    return (
        <div className={`min-h-screen transition-colors duration-300 dark:bg-[#180759] ${themeClasses}`}>
            {/* Theme Toggle */}
            

            <div className="container mx-auto px-6 py-16 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight dark:text-white">
                        Growth & Performance
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our platform has consistently helped businesses scale year over year.
                    </p>
                </div>

                {/* Chart Container */}
                <div className={`p-8 rounded-2xl border transition-all duration-300 ${cardClasses}shadow-lg hover:shadow-xl dark:bg-[#0f044d]`}>
                    <div className="h-96 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 60,
                                }}
                            >
                                <CartesianGrid
                                    strokeDasharray="0 1"
                                    stroke={isDarkMode ? '#374151' : '#e5e7eb'}
                                />
                                <XAxis
                                    dataKey="year"
                                    stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                                    fontSize={12}
                                />
                                <YAxis
                                    yAxisId="left"
                                    orientation="left"
                                    stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                                    fontSize={12}
                                    domain={[0, 100000]}
                                    tickFormatter={(value) => `${value / 1000}k`}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    stroke={isDarkMode ? '#9ca3af' : '#6b7280'}
                                    fontSize={12}
                                    domain={[0, 180]}
                                    tickFormatter={(value) => `${value}%`}
                                />
                                <Tooltip
                                    content={<CustomTooltip />}
                                    cursor={{ strokeDasharray: '3 3' }}
                                />
                                <Legend
                                    content={<CustomLegend />}
                                />
                                <Line
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="customers"
                                    stroke="#8b5cf6"
                                    strokeWidth={3}
                                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                                    activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
                                    name="customers"
                                />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="successRate"
                                    stroke="#10b981"
                                    strokeWidth={3}
                                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                                    activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                                    name="successRate"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Data Point Highlight */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-green-500/10 rounded-xl">
                        <div className="flex flex-col md:flex-row justify-around items-center">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">2020</div>
                                <div className="text-sm text-green-600 dark:text-green-600">Featured Year</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">54,000</div>
                                <div className="text-sm text-purple-600">customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">110%</div>
                                <div className="text-sm text-green-600">successRate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <div className={`p-6 rounded-xl ${cardClasses} text-center dark:bg-[#7C00FE] border border-[#ad49e1] dark:border-[#ad49e1] dark:shadow-[0_0_12px_2px_#AD49E1]`}>
                        <div className="text-3xl font-bold text-purple-600 mb-2 dark:text-[#00FF9C]">95K+</div>
                        <div className="text-gray-600 dark:text-gray-300">Peak Customers</div>
                    </div>
                    <div className={`p-6 rounded-xl ${cardClasses} text-center dark:bg-[#7C00FE] border border-[#16FF00] dark:border-[#16FF00] dark:shadow-[0_0_12px_2px_#AD49E1]`}>
                        <div className="text-3xl font-bold text-green-600 mb-2 dark:text-[#16FF00]">160%</div>
                        <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
                    </div>
                    <div className={`p-6 rounded-xl ${cardClasses} text-center dark:bg-[#7C00FE] border border-[#4300FF] dark:border-[#F9FF21] dark:shadow-[0_0_12px_2px_#AD49E1]`}>
                        <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-[#F9FF21]">14+</div>
                        <div className="text-gray-600 dark:text-gray-300">Years Growth</div>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
            </div>
        </div>
    );
};

export default GrowthPerformanceChart;