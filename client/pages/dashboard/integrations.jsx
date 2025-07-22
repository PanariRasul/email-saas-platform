// pages/integrations.jsx
import Head from 'next/head';
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Input } from '@/components/ui/inputs';
import { Button } from '@/components/ui/buttons';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IntegrationCard from '@/components/integrations/IntegrationCard';
import IntegrationDetailDrawer from '@/components/integrations/IntegrationDetailDrawer';
import SyncSettings from '@/components/integrations/SyncSettings';
import IntegrationAnalytics from '@/components/integrations/IntegrationAnalytics';
import ApiTokenManager from '@/components/integrations/ApiTokenManager';
import ActivityLogs from '@/components/integrations/ActivityLogs';
import NotificationSettings from '@/components/integrations/NotificationSettings';
import ComingSoonIntegrations from '@/components/integrations/ComingSoon';
import AccessControlAudit from '@/components/integrations/AccessControl';
import FeaturedIntegrations from '@/components/integrations/FeaturedIntegrations';

const dummyIntegrations = [
    {
        id: 'zapier',
        name: 'Zapier',
        description: 'Automate your workflows between apps.',
        category: 'Automation',
        status: 'Connected',
    },
    {
        id: 'slack',
        name: 'Slack',
        description: 'Send campaign notifications to your team.',
        category: 'Communication',
        status: 'Not Connected',
    },
    {
        id: 'stripe',
        name: 'Stripe',
        description: 'Track revenue and customer data.',
        category: 'Payments',
        status: 'Connected',
    },
    // Add more...
];

export default function IntegrationsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIntegration, setSelectedIntegration] = useState(null);

    const filteredIntegrations = dummyIntegrations.filter(
        (integration) =>
            (selectedCategory === 'All' || integration.category === selectedCategory) &&
            integration.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <DashboardLayout>
            <Head><title>Integrations - EmailAI Pro</title></Head>
            <div className="p-6 text-black dark:text-white">
                <h1 className="text-2xl font-bold mb-2">🔌 Integrations</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Manage and connect third-party services to automate and enhance your email marketing.
                </p>

                {/* 🔍 Search & Filter */}
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <Input
                        placeholder="Search integrations..."
                        className="max-w-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
                        <TabsList className="bg-gray-100 dark:bg-[#0F044C] p-1 rounded-lg shadow-sm">
                            {['All', 'CRM', 'Payments', 'Communication', 'Automation', 'Analytics'].map((cat) => (
                                <TabsTrigger key={cat} value={cat} className="text-sm px-3 py-1">
                                    {cat}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                {/* 🌟 Featured Integrations */}
                <FeaturedIntegrations />

                {/* 🧱 Integrations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIntegrations.map((integration) => (
                        <IntegrationCard
                            key={integration.id}
                            data={integration}
                            onSettingsClick={() => setSelectedIntegration(integration)}
                        />
                    ))}
                </div>

                {/* ⚙️ Integration Detail Drawer */}
                {selectedIntegration && (
                    <IntegrationDetailDrawer
                        integration={selectedIntegration}
                        onClose={() => setSelectedIntegration(null)}
                    />
                )}

                {/* 🔄 Sync Configuration */}
                <div className="mt-12">
                    <SyncSettings />
                </div>

                {/* 📊 Analytics */}
                <div className="mt-12">
                    <IntegrationAnalytics />
                </div>

                {/* 🪪 API Token */}
                <div className="mt-12">
                    <ApiTokenManager />
                </div>

                {/* 🧾 Logs */}
                <div className="mt-12">
                    <ActivityLogs />
                </div>

                {/* 🔔 Notifications */}
                <div className="mt-12">
                    <NotificationSettings />
                </div>

                {/* 🧪 Coming Soon */}
                <div className="mt-12">
                    <ComingSoonIntegrations />
                </div>

                {/* 🛡 Admin Only */}
                <div className="mt-12">
                    <AccessControlAudit />
                </div>
            </div>
        </DashboardLayout>
    );
}
