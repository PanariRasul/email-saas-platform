// components/integrations/TokenManagement.jsx
import { useState } from 'react';
import { Button } from '@/components/ui/buttons';
import { Input } from '@/components/ui/inputs';
import { Copy, RotateCw, Trash2 } from 'lucide-react';

export default function TokenManagement() {
    const [apiToken, setApiToken] = useState('sk-test-3A7nfdJZyN54RkQxQmT91Gm0v');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(apiToken);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleRegenerate = () => {
        // Dummy regenerate logic
        setApiToken('sk-test-' + Math.random().toString(36).substring(2, 18));
    };

    const handleDelete = () => {
        setApiToken('');
    };

    return (
        <div className="bg-white dark:bg-[#0F044C] border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">🪪 API Token Management</h2>

            <div className="flex flex-col md:flex-row items-center gap-4">
                <Input
                    type="text"
                    value={apiToken}
                    readOnly
                    className="w-full md:w-[60%] truncate font-mono"
                />
                <div className="flex gap-2">
                    <Button variant="outline" onClick={handleCopy}>
                        <Copy className="h-4 w-4 mr-2" />
                        {copied ? 'Copied!' : 'Copy'}
                    </Button>
                    <Button variant="outline" onClick={handleRegenerate}>
                        <RotateCw className="h-4 w-4 mr-2" />
                        Regenerate
                    </Button>
                    <Button variant="destructive" onClick={handleDelete}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}
