// components/integrations/FeaturedIntegrations.jsx
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/buttons';
import { Zap, Slack, CreditCard } from 'lucide-react';

const featured = [
    {
        name: 'Zapier',
        description: 'Connect with thousands of apps and automate workflows.',
        icon: <Zap className="h-6 w-6 text-orange-500" />,
        tags: ['Official', 'Premium'],
    },
    {
        name: 'Slack',
        description: 'Get campaign alerts and collaborate with your team.',
        icon: <Slack className="h-6 w-6 text-blue-500" />,
        tags: ['Official'],
    },
    {
        name: 'Stripe',
        description: 'Track payments and conversion from email campaigns.',
        icon: <CreditCard className="h-6 w-6 text-purple-500" />,
        tags: ['Beta', 'Premium'],
    },
];

export default function FeaturedIntegrations() {
    return (
        <Card className="bg-white dark:bg-[#0F044C] text-black dark:text-white p-6 mb-6 shadow-sm rounded-xl">
            <h2 className="text-lg font-semibold mb-4">🌟 Featured Integrations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {featured.map((item, index) => (
                    <Card key={index} className="p-4 rounded-lg shadow border bg-white dark:bg-[#1c1c2d]">
                        <div className="flex items-center gap-3 mb-2">
                            {item.icon}
                            <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {item.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Button className="mt-4 w-full">Connect</Button>
                    </Card>
                ))}
            </div>
        </Card>
    );
}
