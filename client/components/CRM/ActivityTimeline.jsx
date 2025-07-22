import { Users, Mail, TrendingUp, FileText, Calendar, AlertCircle, Bell } from 'lucide-react';

export default function ActivityTimeline() {
    const activities = [
        { type: 'contact_added', user: 'Sarah Johnson', action: 'was added to CRM', time: '2 hours ago', icon: Users },
        { type: 'email_sent', user: 'Mike Chen', action: 'was sent a follow-up email', time: '4 hours ago', icon: Mail },
        { type: 'stage_moved', user: 'Emma Rodriguez', action: 'moved to Negotiation stage', time: '1 day ago', icon: TrendingUp },
        { type: 'note_added', user: 'John Smith', action: 'had a note added', time: '2 days ago', icon: FileText },
        { type: 'call_scheduled', user: 'Lisa Wang', action: 'has a call scheduled', time: '3 days ago', icon: Calendar }
    ];

    const notes = [
        { contact: 'Sarah Johnson', note: 'Follow up on enterprise pricing next week', urgent: false },
        { contact: 'Mike Chen', note: 'Interested in API integration - send technical docs', urgent: true },
        { contact: 'Emma Rodriguez', note: 'Contract review in progress', urgent: false }
    ];

    const reminders = [
        { contact: 'Sarah Johnson', task: 'Send proposal follow-up', due: 'Today, 2:00 PM', priority: 'high' },
        { contact: 'Mike Chen', task: 'Schedule demo call', due: 'Tomorrow, 10:00 AM', priority: 'medium' },
        { contact: 'Emma Rodriguez', task: 'Review contract terms', due: 'Friday, 3:00 PM', priority: 'low' }
    ];

    const sources = [
        { name: 'Website Contact Form', leads: 45, active: true },
        { name: 'Newsletter Signup', leads: 78, active: true },
        { name: 'Demo Request Form', leads: 23, active: false }
    ];

    return (
        <div className="space-y-6">
            {/* Timeline */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Activity Timeline</h2>
                <div className="space-y-6">
                    {activities.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900 dark:text-white">
                                        <span className="font-medium">{activity.user}</span> {activity.action}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Notes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Notes</h3>
                    <div className="space-y-3">
                        {notes.map((note, index) => (
                            <div
                                key={index}
                                className={`p-3 rounded-lg border-l-4 ${note.urgent ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{note.contact}</span>
                                    {note.urgent && <AlertCircle className="w-4 h-4 text-red-500" />}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{note.note}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reminders */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Reminders</h3>
                    <div className="space-y-3">
                        {reminders.map((reminder, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{reminder.task}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{reminder.contact} • {reminder.due}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span
                                        className={`w-2 h-2 rounded-full ${reminder.priority === 'high'
                                                ? 'bg-red-500'
                                                : reminder.priority === 'medium'
                                                    ? 'bg-yellow-500'
                                                    : 'bg-green-500'
                                            }`}
                                    />
                                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                        <Bell className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Data Management */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Import Contacts</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Upload CSV file with contact information</p>
                        <div className="flex items-center space-x-3">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>Choose File</span>
                            </button>
                            <span className="text-sm text-gray-500 dark:text-gray-400">No file selected</span>
                        </div>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Export Data</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Download your contact data</p>
                        <div className="flex items-center space-x-2">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>CSV</span>
                            </button>
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>JSON</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lead Sources */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Lead Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sources.map((source, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-gray-900 dark:text-white">{source.name}</h4>
                                <span
                                    className={`w-2 h-2 rounded-full ${source.active ? 'bg-green-500' : 'bg-gray-400'}`}
                                />
                            </div>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">{source.leads}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">leads this month</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
