// components/integrations/IntegrationCard.jsx
// import { FaSlack, FaZap, FaStripe } from 'react-icons/fa';
import { FaSlack, FaStripe} from "react-icons/fa"

import { Button } from '@/components/ui/buttons';
import { Badge } from '@/components/ui/badge';
import { SiZap } from "react-icons/si";
const integrationIcons = {
    zapier: <SiZap className="text-orange-500 text-2xl" />,
    slack: <FaSlack className="text-blue-500 text-2xl" />,
    stripe: <FaStripe className="text-purple-500 text-2xl" />,
};

export default function IntegrationCard({ data, onSettingsClick }) {
    const { id, name, description, status } = data;

    return (
        <div className="bg-white dark:bg-[#0F044C] border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#892CDC]">
                    {integrationIcons[id] || <span className="text-lg font-bold">{name[0]}</span>}
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-4">
                <Badge
                    className={`text-xs px-2 py-1 rounded-full ${status === 'Connected'
                            ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white'
                        }`}
                >
                    {status}
                </Badge>
                <div className="flex gap-2">
                    {status === 'Connected' ? (
                        <>
                            <Button size="sm" variant="outline" onClick={onSettingsClick}>
                                Settings
                            </Button>
                            <Button size="sm" variant="destructive">
                                Disconnect
                            </Button>
                        </>
                    ) : (
                        <Button size="sm" onClick={() => alert('Connecting...')}>
                            Connect
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
