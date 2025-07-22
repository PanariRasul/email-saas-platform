import React, { useState } from 'react';
import { Eye, Edit, Trash2, Search, Filter, ArrowUpDown } from 'lucide-react';
const campaigns = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Campaign ${i + 1}`,
    status: i % 2 === 0 ? 'Sent' : 'Draft',
    type: i % 3 === 0 ? 'Promo' : 'Newsletter',
    sentDate: '2025-07-20',
    openRate: `${40 + i}%`,
    clickRate: `${20 + i}%`,
    revenue: `$${(i + 1) * 50}`,
}));

const AllCampaigns = () => {
    const [search, setSearch] = useState('');

    return (
        
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black dark:text-white">All Campaigns</h2>
                    <button className="bg-[#7F27FF] text-white px-4 py-2 rounded-xl hover:bg-[#6528F7]">
                        + Create Campaign
                    </button>
                </div>

                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center w-full max-w-sm bg-white dark:bg-[#0F044C] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2">
                        <Search className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search campaigns..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-transparent outline-none text-black dark:text-white w-full"
                        />
                    </div>

                    <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#0F044C] px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#892CDC] text-black dark:text-white">
                        <Filter size={16} /> Filter
                    </button>
                </div>

                <div className="overflow-auto rounded-xl shadow-sm">
                    <table className="min-w-full bg-white dark:bg-[#0F044C]">
                        <thead className="bg-gray-100 dark:bg-[#4300FF] text-black dark:text-white">
                            <tr>
                                {['Name', 'Status', 'Type', 'Sent Date', 'Open Rate', 'Click Rate', 'Revenue', 'Actions'].map((col) => (
                                    <th key={col} className="text-left px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            {col} <ArrowUpDown size={14} className="text-gray-400" />
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {campaigns
                                .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
                                .map((c) => (
                                    <tr key={c.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#6528F7]">
                                        <td className="px-4 py-3">{c.name}</td>
                                        <td className="px-4 py-3">{c.status}</td>
                                        <td className="px-4 py-3">{c.type}</td>
                                        <td className="px-4 py-3">{c.sentDate}</td>
                                        <td className="px-4 py-3">{c.openRate}</td>
                                        <td className="px-4 py-3">{c.clickRate}</td>
                                        <td className="px-4 py-3">{c.revenue}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex gap-2">
                                                <button className="text-blue-600 hover:text-blue-800">
                                                    <Eye size={16} />
                                                </button>
                                                <button className="text-green-600 hover:text-green-800">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="text-red-600 hover:text-red-800">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination placeholder */}
                <div className="flex justify-end mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Showing 1-10 of 10 campaigns</p>
                </div>
            </div>
    );
};

export default AllCampaigns;
