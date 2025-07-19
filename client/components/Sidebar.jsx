import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    LayoutDashboard,
    Mail,
    Zap,
    Users,
    FileText,
    BarChart3,
    Puzzle,
    Settings,
    HelpCircle
} from 'lucide-react';

const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Campaigns', path: '/dashboard/campaigns', icon: Mail },
    { name: 'Automations', path: '/dashboard/automations', icon: Zap },
    { name: 'CRM', path: '/dashboard/crm', icon: Users },
    { name: 'Forms', path: '/dashboard/forms', icon: FileText },
    { name: 'Analytics', path: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Integrations', path: '/dashboard/integrations', icon: Puzzle },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
    { name: 'Help', path: '/dashboard/help', icon: HelpCircle },
];

export default function Sidebar({ isCollapsed }) {
    const router = useRouter();

    return (
        <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-[#0F044C] h-screen p-4 border-r border-gray-200 dark:border-[#892CDC] fixed transition-all duration-300 ease-in-out z-40`}>
            <div className={`mb-8 ${isCollapsed ? 'text-center' : ''}`}>
                {!isCollapsed && (
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                        EmailAI Pro
                    </h2>
                )}
                {isCollapsed && (
                    <div className="w-8 h-8 bg-[#7F27FF] rounded-lg flex items-center justify-center mx-auto">
                        <span className="text-white font-bold text-sm">E</span>
                    </div>
                )}
            </div>

            <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                    const IconComponent = link.icon;
                    const isActive = router.pathname === link.path;

                    return (
                        <Link key={link.path} href={link.path}>
                            <div
                                className={`group relative flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer
                                    ${isActive 
                                        ? 'bg-blue-100 dark:bg-[#AD49E1]/30 text-blue-700 dark:text-[#AD49E1] font-medium' 
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#AD49E1]/10'
                                    }
                                    ${isCollapsed ? 'justify-center' : ''}
                                `}
                                title={isCollapsed ? link.name : ''}
                            >
                                <IconComponent 
                                    size={10} 
                                    className={`flex-shrink-0 ${isActive ? 'text-[#6528F7] dark:text-[#AD49E1]' : ''}`} 
                                />
                                {!isCollapsed && (
                                    <span className="text-sm font-medium whitespace-nowrap">
                                        {link.name}
                                    </span>
                                )}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                                        {link.name}
                                    </div>
                                )}
                                {isActive && (
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#6528F7] dark:bg-[#AD49E1] rounded-l-full"></div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
