import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from "../styles/dashNav.module.css";

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
        <div className={`flex min-h-screen transition-colors duration-300  ${isCollapsed ? 'w-[5%]' : 'w-[18%]'} ${styles.dashNav}`}>
            {/* Sidebar */}
            <div className={`transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
                <Sidebar isCollapsed={isCollapsed} />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <Header isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
                <main className={`transition-all duration-300 p-6  ${styles.navMain}`}>
                    <div className="w-full mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
