import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Calendar, TrendingUp, Mail, CheckCircle, XCircle, AlertTriangle, Users, Activity, Download, Filter, RefreshCw } from 'lucide-react';
import DashboardLayout from "../../components/DashboardLayout";
 

const analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('all');

  // Sample data - in real app, this would come from API
  const verificationData = [
    { date: '2024-07-15', total: 1200, valid: 980, invalid: 180, risky: 40 },
    { date: '2024-07-16', total: 1350, valid: 1100, invalid: 200, risky: 50 },
    { date: '2024-07-17', total: 1100, valid: 890, invalid: 160, risky: 50 },
    { date: '2024-07-18', total: 1450, valid: 1200, invalid: 200, risky: 50 },
    { date: '2024-07-19', total: 1300, valid: 1050, invalid: 190, risky: 60 },
    { date: '2024-07-20', total: 1600, valid: 1300, invalid: 240, risky: 60 },
    { date: '2024-07-21', total: 1750, valid: 1400, invalid: 280, risky: 70 }
  ];

  const pieData = [
    { name: 'Valid', value: 7920, color: '#10B981' },
    { name: 'Invalid', value: 1450, color: '#EF4444' },
    { name: 'Risky', value: 380, color: '#F59E0B' }
  ];

  const domainData = [
    { domain: 'gmail.com', count: 3200, percentage: 32 },
    { domain: 'yahoo.com', count: 1800, percentage: 18 },
    { domain: 'outlook.com', count: 1500, percentage: 15 },
    { domain: 'hotmail.com', count: 1200, percentage: 12 },
    { domain: 'aol.com', count: 800, percentage: 8 },
    { domain: 'others', count: 1500, percentage: 15 }
  ];

  const hourlyData = [
    { hour: '00:00', verifications: 45 },
    { hour: '04:00', verifications: 23 },
    { hour: '08:00', verifications: 156 },
    { hour: '12:00', verifications: 234 },
    { hour: '16:00', verifications: 189 },
    { hour: '20:00', verifications: 98 }
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const StatCard = ({ title, value, change, icon: Icon, color = "blue" }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md dark:hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          {change && (
            <p className={`text-sm mt-1 flex items-center ${change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {change > 0 ? '+' : ''}{change}% vs last period
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${
          color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
          color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
          color === 'red' ? 'bg-red-100 dark:bg-red-900/30' :
          color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
          'bg-gray-100 dark:bg-gray-700'
        }`}>
          <Icon className={`w-6 h-6 ${
            color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
            color === 'green' ? 'text-green-600 dark:text-green-400' :
            color === 'red' ? 'text-red-600 dark:text-red-400' :
            color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
            'text-gray-600 dark:text-gray-400'
          }`} />
        </div>
      </div>
    </div>
  );

  // Custom tooltip for dark mode compatibility
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
          <p className="text-gray-900 dark:text-white font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Email Verification Analytics</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor and analyze your email verification performance</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleRefresh}
                  className={`flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors ${isLoading ? 'opacity-50' : ''}`}
                  disabled={isLoading}
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <select 
                  value={selectedPeriod} 
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="24h">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <select 
                  value={selectedMetric} 
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Metrics</option>
                  <option value="valid">Valid Only</option>
                  <option value="invalid">Invalid Only</option>
                  <option value="risky">Risky Only</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Verifications"
              value="9,750"
              change={12.5}
              icon={Mail}
              color="blue"
            />
            <StatCard
              title="Valid Emails"
              value="7,920"
              change={8.3}
              icon={CheckCircle}
              color="green"
            />
            <StatCard
              title="Invalid Emails"
              value="1,450"
              change={-5.2}
              icon={XCircle}
              color="red"
            />
            <StatCard
              title="Risky Emails"
              value="380"
              change={15.7}
              icon={AlertTriangle}
              color="yellow"
            />
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Verification Trend */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Verification Trends</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Valid</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Invalid</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">Risky</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={verificationData}>
                  <defs>
                    <linearGradient id="validGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="invalidGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="valid" stackId="1" stroke="#10B981" fill="url(#validGradient)" />
                  <Area type="monotone" dataKey="invalid" stackId="1" stroke="#EF4444" fill="url(#invalidGradient)" />
                  <Area type="monotone" dataKey="risky" stackId="1" stroke="#F59E0B" fill="#FEF3C7" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Verification Status Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Status Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Top Domains */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Top Email Domains</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={domainData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                  <YAxis type="category" dataKey="domain" stroke="#9CA3AF" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" fill="#3B82F6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Hourly Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Hourly Verification Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="verifications" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Performance Metrics Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Performance Metrics</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-600">
                    <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Metric</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Current</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Previous</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Change</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600 dark:text-gray-400">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-900 dark:text-white">Success Rate</td>
                    <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">81.2%</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">78.9%</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400">+2.3%</td>
                    <td className="py-3 px-4">
                      <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-900 dark:text-white">Average Response Time</td>
                    <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">1.2s</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">1.5s</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400">-0.3s</td>
                    <td className="py-3 px-4">
                      <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-3 px-4 text-gray-900 dark:text-white">Daily Volume</td>
                    <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">1,393</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">1,245</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400">+11.9%</td>
                    <td className="py-3 px-4">
                      <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </DashboardLayout>
  );
};

export default analytics;
