import { X, Mail, Phone, Building2, Edit2 } from 'lucide-react';

export default function ContactDetailDrawer({ isOpen, onClose, contact }) {
    if (!isOpen || !contact) return null;

    const tagColors = {
        VIP: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        Enterprise: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        Startup: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'Hot Lead': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        Agency: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
        Recurring: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            <div className="bg-white dark:bg-gray-800 w-full max-w-md h-full overflow-y-auto">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Details</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                            {contact.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{contact.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{contact.company}</p>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            {contact.tags.map(tag => (
                                <span
                                    key={tag}
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${tagColors[tag]}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <Mail className="w-5 h-5" />
                            <span>{contact.email}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <Phone className="w-5 h-5" />
                            <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <Building2 className="w-5 h-5" />
                            <span>{contact.company}</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Activity Timeline</h4>
                        <div className="space-y-3">
                            {contact.activity.map((activity, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                        {activity.type === 'email' ? (
                                            <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                        ) : (
                                            <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-900 dark:text-white">{activity.description}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Notes</h4>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <p className="text-sm text-gray-700 dark:text-gray-300">{contact.notes}</p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3">
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>Send Email</span>
                        </button>
                        <button className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center space-x-2">
                            <Edit2 className="w-4 h-4" />
                            <span>Edit Contact</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
