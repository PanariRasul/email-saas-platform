import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Sun, Moon, Settings } from 'lucide-react';

export default function Header({ isCollapsed, toggleSidebar }) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light';
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <header className={`flex items-center justify-between px-6 py-4 bg-white dark:bg-[#0F044C] border-b border-gray-200 dark:border-[#892CDC] transition-all duration-300 fixed top-0 z-30 ${isCollapsed ? 'ml-14' : 'ml-64'
            } w-[calc(100%-3.5rem)] ${!isCollapsed ? 'w-[calc(100%-16%)]' : ''}`}>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#AD49E1]/20 transition-colors duration-200"
                    title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    <Menu
                        size={20}
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    />
                </button>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    EmailAI Pro
                </h1>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#AD49E1]/20 transition-colors duration-200"
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? (
                        <>
                            <Sun size={16} />
                            <span className="hidden sm:inline">Light</span>
                        </>
                    ) : (
                        <>
                            <Moon size={16} />
                            <span className="hidden sm:inline">Dark</span>
                        </>
                    )}
                </button>

                <Link href="/dashboard/settings">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-[#6528F7] dark:text-[#AD49E1] hover:bg-blue-50 dark:hover:bg-[#AD49E1]/20 transition-colors duration-200 cursor-pointer">
                        <Settings size={16} />
                        <span className="hidden sm:inline">Settings</span>
                    </div>
                </Link>
            </div>
        </header>
    );
}
