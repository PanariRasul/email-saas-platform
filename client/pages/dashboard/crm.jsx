import { useState } from 'react';
import {
    Plus, Search, Filter, Upload, Download, Users
} from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';
import CRMHeader from '../../components/CRM/CRMHeader';
import StatsCards from '../../components/CRM/StatsCards';
import ChartsSection from '../../components/CRM/ChartsSection';
import ContactsTable from '../../components/CRM/ContactsTable';
import PipelineBoard from '../../components/CRM/PipelineBoard';
import ActivityTimeline from '../../components/CRM/ActivityTimeline';
import ContactModal from '../../components/CRM/ContactModal';
import ContactDetailDrawer from '../../components/CRM/ContactDetailDrawer';

export default function CRMPage() {
    const [activeView, setActiveView] = useState('dashboard');
    const [showAddModal, setShowAddModal] = useState(false);
    const [showContactDetail, setShowContactDetail] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStage, setSelectedStage] = useState('all');
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    // Sample data
    const [contacts, setContacts] = useState([
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    phone: '+1-555-0123',
    company: 'TechCorp Inc',
    tags: ['VIP', 'Enterprise'],
    stage: 'proposal',
    lastContacted: '2025-07-20',
    notes: 'Interested in enterprise plan',
    value: 15000,
    daysInStage: 3,
    activity: [
      { type: 'email', date: '2025-07-20', description: 'Sent proposal document' },
      { type: 'call', date: '2025-07-18', description: 'Discovery call completed' }
    ]
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike@startup.io',
    phone: '+1-555-0456',
    company: 'Startup.io',
    tags: ['Startup', 'Hot Lead'],
    stage: 'contacted',
    lastContacted: '2025-07-19',
    notes: 'Looking for growth plan',
    value: 5000,
    daysInStage: 5,
    activity: [
      { type: 'email', date: '2025-07-19', description: 'Follow-up email sent' }
    ]
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    email: 'emma@agency.com',
    phone: '+1-555-0789',
    company: 'Creative Agency',
    tags: ['Agency', 'Recurring'],
    stage: 'negotiation',
    lastContacted: '2025-07-21',
    notes: 'Negotiating contract terms',
    value: 8500,
    daysInStage: 7,
    activity: []
  },
  {
    id: 4,
    name: 'Alex Green',
    email: 'alex@freshstart.com',
    phone: '+1-555-1010',
    company: 'FreshStart LLC',
    tags: ['Startup'],
    stage: 'new',
    lastContacted: '2025-07-18',
    notes: 'Wants initial demo',
    value: 2000,
    daysInStage: 1,
    activity: []
  },
  {
    id: 5,
    name: 'Lina Zhao',
    email: 'lina@wintech.com',
    phone: '+1-555-2020',
    company: 'WinTech',
    tags: ['Enterprise'],
    stage: 'won',
    lastContacted: '2025-07-17',
    notes: 'Closed deal successfully',
    value: 12000,
    daysInStage: 0,
    activity: [
      { type: 'email', date: '2025-07-17', description: 'Contract signed' }
    ]
  },
  {
    id: 6,
    name: 'Carlos Rivera',
    email: 'carlos@lostco.com',
    phone: '+1-555-3030',
    company: 'LostCo',
    tags: ['Agency'],
    stage: 'lost',
    lastContacted: '2025-07-16',
    notes: 'Lost to competitor',
    value: 0,
    daysInStage: 2,
    activity: []
  }
]);


    const pipelineStages = [
        { id: 'new', title: 'New Lead', color: 'bg-blue-500' },
        { id: 'contacted', title: 'Contacted', color: 'bg-yellow-500' },
        { id: 'proposal', title: 'Proposal Sent', color: 'bg-orange-500' },
        { id: 'negotiation', title: 'Negotiation', color: 'bg-purple-500' },
        { id: 'won', title: 'Won', color: 'bg-green-500' },
        { id: 'lost', title: 'Lost', color: 'bg-red-500' }
    ];

    const stats = {
        totalContacts: contacts.length,
        activeDeals: contacts.filter(c => ['contacted', 'proposal', 'negotiation'].includes(c.stage)).length,
        convertedLeads: contacts.filter(c => c.stage === 'won').length,
        followUps: 12
    };

    const filteredContacts = contacts.filter(contact => {
        const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStage = selectedStage === 'all' || contact.stage === selectedStage;
        return matchesSearch && matchesStage;
    });

    const handleViewContact = (contact) => {
        setSelectedContact(contact);
        setShowContactDetail(true);
    };

    const handleAddContact = () => {
        setShowAddModal(true);
    };

    const handleSaveContact = (contactData) => {
        // Add new contact logic here
        setShowAddModal(false);
    };

    return (
        <DashboardLayout>
            <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 mt-[5%] w-full ${darkMode ? 'dark' : ''}`}>
            <CRMHeader
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                activeView={activeView}
                setActiveView={setActiveView}
                onAddContact={handleAddContact}
            />

            <div className="p-6">
                {/* Dashboard View */}
                {activeView === 'dashboard' && (
                    <div className="space-y-6">
                        <StatsCards stats={stats} />
                        <ChartsSection />
                    </div>
                )}

                {/* Contacts View */}
                {activeView === 'contacts' && (
                    <ContactsTable
                        contacts={filteredContacts}
                        pipelineStages={pipelineStages}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedStage={selectedStage}
                        setSelectedStage={setSelectedStage}
                        onViewContact={handleViewContact}
                    />
                )}

                {/* Pipeline View */}
                {activeView === 'pipeline' && (
                    <PipelineBoard
                        contacts={contacts}
                        pipelineStages={pipelineStages}
                    />
                )}

                {/* Activity View */}
                {activeView === 'activity' && (
                    <ActivityTimeline />
                )}
            </div>

            {/* Modals */}
            {showAddModal && (
                <ContactModal
                    isOpen={showAddModal}
                    onClose={() => setShowAddModal(false)}
                    onSave={handleSaveContact}
                    pipelineStages={pipelineStages}
                />
            )}

            {showContactDetail && selectedContact && (
                <ContactDetailDrawer
                    isOpen={showContactDetail}
                    onClose={() => setShowContactDetail(false)}
                    contact={selectedContact}
                />
            )}

            {/* Mobile FAB */}
            <button
                onClick={handleAddContact}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center lg:hidden z-40"
            >
                <Plus className="w-6 h-6" />
            </button>
        </div>
        </DashboardLayout>
    );
}