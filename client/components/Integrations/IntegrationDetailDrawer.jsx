// components/integrations/IntegrationDetailDrawer.jsx
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from '@/components/ui/drawer';
import { Button } from '@/components/ui/buttons';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switchs';

export default function IntegrationDetailDrawer({ open, onClose, data }) {
    if (!data) return null;

    const { name, oauthStatus, scopes, lastConnected } = data;

    return (
        <Drawer open={open} onOpenChange={onClose}>
            <DrawerContent className="bg-white dark:bg-[#0F044C] text-black dark:text-white p-6 max-w-xl mx-auto rounded-t-xl">
                <DrawerHeader>
                    <DrawerTitle className="text-xl font-bold">{name} Settings</DrawerTitle>
                    <DrawerDescription className="text-gray-600 dark:text-gray-300">
                        Manage connection, permissions, and sync settings.
                    </DrawerDescription>
                </DrawerHeader>

                <div className="space-y-6 mt-4">
                    <div>
                        <h4 className="font-semibold">OAuth Status</h4>
                        <Badge className={`mt-2 ${oauthStatus === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}>
                            {oauthStatus}
                        </Badge>
                        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">Last connected: {lastConnected}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Permissions (Scopes)</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            {scopes.map((scope, i) => (
                                <li key={i}>{scope}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="font-medium">Real-time Webhooks</span>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex gap-4">
                        <Button variant="outline" onClick={() => alert('Reconnecting...')}>
                            Reconnect
                        </Button>
                        <Button variant="destructive" onClick={() => alert('Revoked')}>
                            Revoke Access
                        </Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
