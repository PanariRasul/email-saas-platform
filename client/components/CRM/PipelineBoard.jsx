import { GripVertical } from 'lucide-react';

export default function PipelineBoard({ contacts, pipelineStages }) {
    const tagColors = {
        VIP: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        Enterprise: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        Startup: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        'Hot Lead': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        Agency: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
        Recurring: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    };

    const contactsByStage = pipelineStages.reduce((acc, stage) => {
        acc[stage.id] = contacts.filter((contact) => contact.stage === stage.id);
        return acc;
    }, {});

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {pipelineStages.map((stage) => (
                <div key={stage.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{stage.title}</h3>
                        <span className={`w-3 h-3 rounded-full ${stage.color}`}></span>
                    </div>
                    <div className="space-y-3">
                        {contactsByStage[stage.id]?.map((contact) => (
                            <div
                                key={contact.id}
                                className="bg-white dark:bg-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600 cursor-move hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">{contact.name}</h4>
                                    <GripVertical className="w-4 h-4 text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{contact.company}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {contact.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className={`px-1 py-0.5 rounded text-xs ${tagColors[tag]}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
                                    <span>{contact.daysInStage}d in stage</span>
                                    <span>${contact.value?.toLocaleString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
