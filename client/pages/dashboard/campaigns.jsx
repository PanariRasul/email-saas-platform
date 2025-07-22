import Head from 'next/head';
import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import AllCampaigns from '../../components/campaigns/AllCampaigns';
import CreateCampaign from '../../components/campaigns/CreateCampaign';
import CampaignReports from '../../components/campaigns/CampaignReports';
import Templates from '../../components/campaigns/Templates';
import Schedules from '../../components/campaigns/Schedules';
import Notifications from '../../components/campaigns/Notifications';

export default function CampaignsPage() {
    const [activeTab, setActiveTab] = useState('all');

    const renderContent = () => {
        switch (activeTab) {
            case 'all': return <AllCampaigns />;
            case 'create': return <CreateCampaign />;
            case 'reports': return <CampaignReports />;
            case 'templates': return <Templates />;
            case 'schedules': return <Schedules />;
            case 'notifications': return <Notifications />;
            default: return <AllCampaigns />;
        }
    };

    return (
        <DashboardLayout>
            <Head><title>Campaigns - EmailAI Pro</title></Head>

            {/* Tab Navigation */}
            <div className="p-6 w-full mt-[5%]">
                <h1 className="text-2xl font-bold mb-4">📢 Campaigns</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Manage, create, and analyze your email campaigns.</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    <button onClick={() => setActiveTab('all')} className={getTabClass(activeTab === 'all')}>All</button>
                    <button onClick={() => setActiveTab('create')} className={getTabClass(activeTab === 'create')}>Create</button>
                    <button onClick={() => setActiveTab('reports')} className={getTabClass(activeTab === 'reports')}>Reports</button>
                    <button onClick={() => setActiveTab('templates')} className={getTabClass(activeTab === 'templates')}>Templates</button>
                    <button onClick={() => setActiveTab('schedules')} className={getTabClass(activeTab === 'schedules')}>Schedules</button>
                    <button onClick={() => setActiveTab('notifications')} className={getTabClass(activeTab === 'notifications')}>Notifications</button>
                </div>

                {/* Render selected subcomponent */}
                <div className="bg-white dark:bg-[#0F044C] rounded-xl p-4 shadow-sm">
                    {renderContent()}
                </div>
            </div>
        </DashboardLayout>
    );
}

// Tailwind button styling for active/inactive tabs
function getTabClass(active) {
    return `px-4 py-2 rounded-lg text-sm font-semibold ${active
            ? 'bg-[#7F27FF] text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white'
        } hover:bg-[#4300FF] hover:text-white transition`;
}
