// components/integrations/ComingSoon.jsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/buttons';
import { BadgeCheck } from 'lucide-react';

const comingSoonIntegrations = [
    {
        name: 'HubSpot',
        description: 'Powerful CRM and marketing automation platform.',
    },
    {
        name: 'Zoom',
        description: 'Video conferencing integration for webinars and meetings.',
    },
    {
        name: 'Notion',
        description: 'Sync notes and project workflows.',
    },
];

export default function ComingSoon() {
    return (
        <Card className="bg-white dark:bg-[#0F044C] text-black dark:text-white p-6 shadow-sm rounded-xl mt-8">
            <h2 className="text-lg font-semibold mb-4">🧪 Coming Soon Integrations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {comingSoonIntegrations.map((integration, idx) => (
                    <Card key={idx} className="border border-dashed bg-gray-50 dark:bg-[#1a1a2c] p-4 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <h3 className="text-md font-medium">{integration.name}</h3>
                            <span className="text-xs text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded-full">
                                Coming Soon
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{integration.description}</p>
                        <Button variant="outline" className="mt-4 w-full">
                            Join Waitlist
                        </Button>
                    </Card>
                ))}
            </div>
        </Card>
    );
}
