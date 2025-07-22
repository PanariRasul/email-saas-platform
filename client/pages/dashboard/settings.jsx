import Head from 'next/head';
import DashboardLayout from '@/components/DashboardLayout';
import { Input } from '@/components/ui/inputs';
import { Button } from '@/components/ui/buttons';
import { Switch } from '@/components/ui/switchs';
// import { Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import { Card} from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import  Separator from '@/components/ui/separator';
import { Copy, Trash2, RefreshCcw } from 'lucide-react';

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <Head>
                <title>Settings - EmailAI Pro</title>
            </Head>
            <div className="p-6 space-y-8 text-gray-900 w-full mt-[5%] dark:text-white">
                <h1 className="text-3xl font-bold text-[#7F27FF] dark:text-[#892CDC]">Settings</h1>

                {/* Profile Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label>Full Name</Label>
                            <Input placeholder="John Doe" />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                        </div>
                        <div>
                            <Label>Timezone</Label>
                            <Input placeholder="UTC +0" />
                        </div>
                        <div>
                            <Label>Language</Label>
                            <Input placeholder="English" />
                        </div>
                        <div className="col-span-full text-right">
                            <Button>Save Changes</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Plan & Billing */}
                <Card>
                    <CardHeader>
                        <CardTitle>Plan & Billing</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <p>Current Plan: <span className="font-semibold">Pro</span></p>
                            <div className="space-x-2">
                                <Button variant="secondary">Downgrade</Button>
                                <Button>Upgrade</Button>
                            </div>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="font-semibold mb-2">Billing History</h3>
                            <div className="overflow-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr>
                                            <th className="text-left">Date</th>
                                            <th className="text-left">Amount</th>
                                            <th className="text-left">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2024-06-01</td>
                                            <td>$29.00</td>
                                            <td>Paid</td>
                                        </tr>
                                        <tr>
                                            <td>2024-05-01</td>
                                            <td>$29.00</td>
                                            <td>Paid</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Payment Method</h3>
                            <p>Visa ending in 4242</p>
                        </div>
                    </CardContent>
                </Card>

                {/* API Key Management */}
                <Card>
                    <CardHeader>
                        <CardTitle>API Key Management</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Input value="sk_live_1234567890" readOnly className="w-2/3" />
                            <div className="flex gap-2">
                                <Button variant="outline"><Copy size={16} /></Button>
                                <Button variant="outline"><RefreshCcw size={16} /></Button>
                                <Button variant="destructive"><Trash2 size={16} /></Button>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">Requests used: 1,234 / 10,000</p>
                    </CardContent>
                </Card>

                {/* Notification Preferences */}
                <Card>
                    <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <Label>Email Alerts</Label>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex justify-between items-center">
                            <Label>Weekly Summary</Label>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>

                {/* Security Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label>Change Password</Label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                <Input placeholder="Current Password" type="password" />
                                <Input placeholder="New Password" type="password" />
                                <Input placeholder="Confirm Password" type="password" />
                            </div>
                            <Button className="mt-2">Update Password</Button>
                        </div>
                        <div className="flex justify-between items-center">
                            <Label>Two-Factor Authentication</Label>
                            <Switch />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Active Sessions</h3>
                            <ul className="text-sm space-y-1">
                                <li>192.168.0.101 — Last seen: 2 hours ago</li>
                                <li>10.0.0.15 — Last seen: Yesterday</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="border-red-500 dark:border-red-600">
                    <CardHeader>
                        <CardTitle className="text-red-600 dark:text-red-500">Danger Zone</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button variant="destructive">Delete My Account</Button>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
