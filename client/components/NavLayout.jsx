import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function NavLayout({ children }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState) {
            setIsCollapsed(JSON.parse(savedState));
        }
    }, []);

    const toggleSidebar = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
    };

    return (
        <div className="min-h-screen transition-colors duration-300">
            <Sidebar isCollapsed={isCollapsed} />
            <Header isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <main
                className={`transition-all duration-300 pt-20 ${isCollapsed ? 'ml-16' : 'ml-64'} p-6`}
            >
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
