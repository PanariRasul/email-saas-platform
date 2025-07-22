// components/integrations/SyncSettings.jsx

import { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switchs';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';

export default function SyncSettings({ config, onChange }) {
    const defaultConfig = {
        contacts: false,
        crm: false,
        email: false,
        frequency: 'Daily',
        webhooks: false,
    };

    const [safeConfig, setSafeConfig] = useState({ ...defaultConfig, ...config });

    useEffect(() => {
        setSafeConfig({ ...defaultConfig, ...config });
    }, [config]);

    const handleChange = (updatedFields) => {
        const updated = { ...safeConfig, ...updatedFields };
        setSafeConfig(updated);
        if (onChange) onChange(updated);
    };

    return (
        <div className="bg-white dark:bg-[#0F044C] border border-gray-200 dark:border-gray-700 p-6 rounded-xl space-y-6 shadow-sm">
            <h2 className="text-lg font-semibold">🔄 Sync Configuration</h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="contacts-sync">Sync Contacts</Label>
                    <Switch
                        id="contacts-sync"
                        checked={safeConfig.contacts}
                        onCheckedChange={(val) => handleChange({ contacts: val })}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Label htmlFor="crm-sync">Sync CRM Data</Label>
                    <Switch
                        id="crm-sync"
                        checked={safeConfig.crm}
                        onCheckedChange={(val) => handleChange({ crm: val })}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Label htmlFor="email-sync">Sync Email Activity</Label>
                    <Switch
                        id="email-sync"
                        checked={safeConfig.email}
                        onCheckedChange={(val) => handleChange({ email: val })}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="frequency">Sync Frequency</Label>
                    <Select
                        value={safeConfig.frequency}
                        onValueChange={(val) => handleChange({ frequency: val })}
                    >
                        <SelectTrigger className="w-48">
                            {safeConfig.frequency}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Hourly">Hourly</SelectItem>
                            <SelectItem value="Daily">Daily</SelectItem>
                            <SelectItem value="Realtime">Realtime</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center justify-between">
                    <Label htmlFor="webhooks">Enable Real-time Webhooks</Label>
                    <Switch
                        id="webhooks"
                        checked={safeConfig.webhooks}
                        onCheckedChange={(val) => handleChange({ webhooks: val })}
                    />
                </div>
            </div>
        </div>
    );
}
