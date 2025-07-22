import React, { useState } from 'react';
import { Eye, Edit, Trash2, Plus } from 'lucide-react';

const dummyTemplates = [
    {
        id: 1,
        name: 'Summer Promo',
        category: 'Promo',
        previewImg: '/templates/summer-promo.png',
    },
    {
        id: 2,
        name: 'Newsletter Weekly',
        category: 'Newsletter',
        previewImg: '/templates/newsletter-weekly.png',
    },
    {
        id: 3,
        name: 'Transactional Update',
        category: 'Transactional',
        previewImg: '/templates/transactional-update.png',
    },
    {
        id: 4,
        name: 'Winter Sale',
        category: 'Promo',
        previewImg: '/templates/winter-sale.png',
    },
];

const categories = ['All', 'Promo', 'Newsletter', 'Transactional'];

const Templates = () => {
    const [filter, setFilter] = useState('All');

    const filteredTemplates =
        filter === 'All'
            ? dummyTemplates
            : dummyTemplates.filter((t) => t.category === filter);

    return (
        <>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-black dark:text-white">Email Templates</h2>
                    <button className="flex items-center gap-2 bg-[#7F27FF] text-white px-4 py-2 rounded-lg hover:bg-[#6528F7]">
                        <Plus size={18} /> Create New Template
                    </button>
                </div>

                {/* Filters */}
                <div className="mb-6 flex gap-2 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border ${filter === cat
                                    ? 'bg-[#4300FF] text-white'
                                    : 'bg-gray-100 dark:bg-[#0F044C] text-black dark:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Template Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTemplates.map((template) => (
                        <div
                            key={template.id}
                            className="bg-white dark:bg-[#0F044C] rounded-xl shadow hover:shadow-lg transition"
                        >
                            <img
                                src={template.previewImg}
                                alt={template.name}
                                className="w-full h-40 object-cover rounded-t-xl"
                            />
                            <div className="p-4">
                                <h3 className="text-md font-semibold text-black dark:text-white mb-2">
                                    {template.name}
                                </h3>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Templates;
