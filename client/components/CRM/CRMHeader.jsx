import { Plus, Filter, Upload, Download, Users } from 'lucide-react';

export default function CRMHeader({ darkMode, setDarkMode, activeView, setActiveView, onAddContact }) {
    return (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                        <Users className="w-8 h-8 text-purple-600" />
                        <span>CRM</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">Track leads, manage contacts, and organize pipelines.</p>
                </div>

                <div className="flex items-center space-x-3">
                    {/* <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                        {darkMode ? '🌞' : '🌙'}
                    </button> */}
                    <button className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                    <button className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                        <Upload className="w-4 h-4" />
                        <span>Import</span>
                    </button>
                    <button className="px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Export</span>
                    </button>
                    <button
                        onClick={onAddContact}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 flex items-center space-x-2"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Contact</span>
                    </button>
                </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4 mt-4">
                {['dashboard', 'contacts', 'pipeline', 'activity'].map(view => (
                    <button
                        key={view}
                        onClick={() => setActiveView(view)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeView === view
                                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                    >
                        {view.charAt(0).toUpperCase() + view.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}