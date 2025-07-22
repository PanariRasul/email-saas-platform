import { Users, Target, CheckCircle, Clock } from 'lucide-react';

export default function StatsCards({ stats }) {
    const cards = [
        {
            title: 'Total Contacts',
            value: stats.totalContacts,
            icon: Users,
            color: 'blue'
        },
        {
            title: 'Active Deals',
            value: stats.activeDeals,
            icon: Target,
            color: 'orange'
        },
        {
            title: 'Converted Leads',
            value: stats.convertedLeads,
            icon: CheckCircle,
            color: 'green'
        },
        {
            title: 'Follow-Ups',
            value: stats.followUps,
            icon: Clock,
            color: 'purple'
        }
    ];

    const colorClasses = {
        blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
        orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
        green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
        purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{card.title}</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</p>
                            </div>
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[card.color]}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}