import React, { useState } from 'react';
import { 
  Zap, 
  Mail, 
  Users, 
  Shield, 
  Target, 
  Workflow, 
  Play, 
  Pause, 
  Settings, 
  Plus, 
  Edit3, 
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Database,
  Filter,
  Send,
  UserCheck,
  Bell,
  Calendar,
  BarChart3,
  FileText,
  Globe,
  Smartphone
} from 'lucide-react';
import DashboardLayout from "../../components/DashboardLayout";


const Automations = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAutomation, setSelectedAutomation] = useState(null);

  // Sample automation data
  const automations = [
    {
      id: 1,
      name: 'Real-time Form Validation',
      description: 'Validate emails as users type in registration forms',
      status: 'active',
      trigger: 'Form Input',
      actions: ['Validate Email', 'Show Status'],
      verifications: 1250,
      successRate: 94,
      category: 'validation',
      icon: Shield,
      color: 'green'
    },
    {
      id: 2,
      name: 'Newsletter Cleanup',
      description: 'Weekly cleanup of invalid emails from mailing lists',
      status: 'active',
      trigger: 'Schedule',
      actions: ['Verify List', 'Remove Invalid', 'Generate Report'],
      verifications: 15000,
      successRate: 87,
      category: 'cleanup',
      icon: Mail,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Lead Scoring Enhancement',
      description: 'Boost lead scores for validated email addresses',
      status: 'paused',
      trigger: 'New Lead',
      actions: ['Verify Email', 'Update Score', 'Notify Sales'],
      verifications: 890,
      successRate: 91,
      category: 'crm',
      icon: Target,
      color: 'purple'
    },
    {
      id: 4,
      name: 'E-commerce Fraud Detection',
      description: 'Flag suspicious orders based on email validation',
      status: 'active',
      trigger: 'Order Created',
      actions: ['Verify Email', 'Risk Assessment', 'Flag Order'],
      verifications: 3200,
      successRate: 96,
      category: 'security',
      icon: AlertCircle,
      color: 'red'
    }
  ];

  const useCases = [
    {
      title: 'Real-time Form Validation',
      description: 'Validate emails instantly as users type, improving user experience and data quality',
      icon: Shield,
      benefits: ['Reduce bounces', 'Better UX', 'Clean data'],
      color: 'green'
    },
    {
      title: 'Marketing Automation',
      description: 'Integrate with marketing platforms to ensure campaign deliverability',
      icon: Send,
      benefits: ['Higher open rates', 'Cost savings', 'Better ROI'],
      color: 'blue'
    },
    {
      title: 'CRM Integration',
      description: 'Automatically verify and score leads based on email validity',
      icon: UserCheck,
      benefits: ['Better leads', 'Sales efficiency', 'Data quality'],
      color: 'purple'
    },
    {
      title: 'Database Maintenance',
      description: 'Schedule regular cleanups of your email databases',
      icon: Database,
      benefits: ['Clean lists', 'Cost reduction', 'Compliance'],
      color: 'orange'
    },
    {
      title: 'Fraud Prevention',
      description: 'Detect suspicious activities using email validation patterns',
      icon: Shield,
      benefits: ['Security', 'Risk reduction', 'Trust'],
      color: 'red'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Automated insights and reports on email verification metrics',
      icon: BarChart3,
      benefits: ['Insights', 'Automation', 'Decisions'],
      color: 'indigo'
    }
  ];

  const AutomationCard = ({ automation }) => {
    const IconComponent = automation.icon;
    const isActive = automation.status === 'active';
    
    return (
   
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 transition-all duration-200 hover:shadow-lg cursor-pointer ${
        isActive ? 'border-green-200 dark:border-green-700' : 'border-gray-100 dark:border-gray-700'
      }`}>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-xl bg-${automation.color}-100 dark:bg-${automation.color}-900/30`}>
                <IconComponent className={`w-6 h-6 text-${automation.color}-600 dark:text-${automation.color}-400`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{automation.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{automation.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                isActive 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400'
              }`}>
                {automation.status}
              </span>
              <button className={`p-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400'
                  : 'bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 text-green-600 dark:text-green-400'
              }`}>
                {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{automation.verifications.toLocaleString()}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Verifications</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{automation.successRate}%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{automation.actions.length}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Actions</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Trigger: {automation.trigger}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit3 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const UseCaseCard = ({ useCase }) => {
    const IconComponent = useCase.icon;
    
    return (
         
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-200 group">
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-xl bg-${useCase.color}-100 dark:bg-${useCase.color}-900/30 group-hover:scale-110 transition-transform`}>
            <IconComponent className={`w-6 h-6 text-${useCase.color}-600 dark:text-${useCase.color}-400`} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{useCase.description}</p>
            <div className="flex flex-wrap gap-2">
              {useCase.benefits.map((benefit, index) => (
                <span 
                  key={index}
                  className={`px-2 py-1 text-xs font-medium rounded-full bg-${useCase.color}-50 dark:bg-${useCase.color}-900/20 text-${useCase.color}-700 dark:text-${useCase.color}-400`}
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
   <DashboardLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                  Email Verification Automations
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Streamline your email verification processes with intelligent automation workflows
                </p>
              </div>
              <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Plus className="w-5 h-5 mr-2" />
                Create Automation
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Automations</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                  </div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <Workflow className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Verifications</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">45.2K</p>
                  </div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">92%</p>
                  </div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Time Saved</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">156hrs</p>
                  </div>
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                    <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'active', label: 'Active Automations', icon: Zap },
                { id: 'templates', label: 'Use Cases', icon: FileText }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-3 py-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Automation Performance */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Newsletter Cleanup', time: '2 minutes ago', status: 'completed', count: 1250 },
                    { name: 'Form Validation', time: '5 minutes ago', status: 'running', count: 45 },
                    { name: 'Lead Scoring', time: '1 hour ago', status: 'completed', count: 89 },
                    { name: 'Fraud Detection', time: '2 hours ago', status: 'completed', count: 156 }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.status === 'running' ? 'bg-blue-500 animate-pulse' : 'bg-green-500'
                        }`} />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{activity.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.count} emails
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Integrations */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Popular Integrations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Mailchimp', icon: Mail, color: 'yellow' },
                    { name: 'Salesforce', icon: Users, color: 'blue' },
                    { name: 'HubSpot', icon: Target, color: 'orange' },
                    { name: 'Zapier', icon: Zap, color: 'orange' },
                    { name: 'Webhook', icon: Globe, color: 'green' },
                    { name: 'API', icon: Smartphone, color: 'purple' }
                  ].map((integration, index) => {
                    const IconComponent = integration.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">
                        <div className={`p-2 bg-${integration.color}-100 dark:bg-${integration.color}-900/30 rounded-lg`}>
                          <IconComponent className={`w-5 h-5 text-${integration.color}-600 dark:text-${integration.color}-400`} />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{integration.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'active' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {automations.map((automation) => (
                <AutomationCard key={automation.id} automation={automation} />
              ))}
            </div>
          )}

          {activeTab === 'templates' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Verification Use Cases</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore popular automation scenarios and their benefits for your business
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <UseCaseCard key={index} useCase={useCase} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      </DashboardLayout>
    
  );
};

export default Automations;
