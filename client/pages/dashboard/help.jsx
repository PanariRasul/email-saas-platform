import Head from 'next/head';
import DashboardLayout from '../../components/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/inputs';
import { Button } from '@/components/ui/buttons';
import  Separator  from '@/components/ui/separator';

export default function HelpCenterPage() {
    return (
        <DashboardLayout>
            <Head><title>Help Center - EmailAI Pro</title></Head>
            <div className="p-6 space-y-8 text-gray-900 dark:text-white">
                <h1 className="text-3xl font-bold text-[#7F27FF] dark:text-[#892CDC] mb-2">❓ Help Center</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Find answers, documentation, and contact support if you need help.</p>

                {/* 🔍 Search Bar */}
                <div className="max-w-2xl">
                    <Input placeholder="Search help articles..." />
                </div>

                <Separator />

                {/* 🧠 Popular Help Topics */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader><CardTitle>🚀 Getting Started</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">Learn how to set up and launch your first campaign in minutes.</p>
                            <Button variant="link">Read Article</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>📧 Sending Campaigns</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">How to design, schedule, and track email campaigns.</p>
                            <Button variant="link">View Guide</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>🔑 API & Integrations</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">Integrate EmailAI Pro with your platform using our API.</p>
                            <Button variant="link">Read Docs</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>💳 Billing & Plans</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">Understand your billing cycle and upgrade or cancel plans.</p>
                            <Button variant="link">Manage Billing</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>🛠️ Troubleshooting</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">Fix common issues related to campaigns, emails, and more.</p>
                            <Button variant="link">Troubleshoot</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>🔐 Account & Security</CardTitle></CardHeader>
                        <CardContent>
                            <p className="text-sm mb-2">Learn how to manage your profile and security settings.</p>
                            <Button variant="link">Account Help</Button>
                        </CardContent>
                    </Card>
                </div>

                {/* 📘 Developer Docs */}
                <Card>
                    <CardHeader><CardTitle>📘 Developer Documentation</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-sm mb-4">View API reference, integration guides, and webhook details.</p>
                        <Button variant="outline">Open Docs</Button>
                    </CardContent>
                </Card>

                {/* 📡 System Status */}
                <Card>
                    <CardHeader><CardTitle>📡 System Status</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-sm text-green-600">✅ All systems operational. No incidents reported.</p>
                    </CardContent>
                </Card>

                {/* 🎥 Getting Started Video */}
                <Card>
                    <CardHeader><CardTitle>🎥 Quick Start Video</CardTitle></CardHeader>
                    <CardContent>
                        <iframe
                            className="w-full rounded-lg"
                            height="240"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Getting Started"
                            allowFullScreen
                        />
                    </CardContent>
                </Card>

                {/* 💬 Contact Support */}
                <Card>
                    <CardHeader><CardTitle>💬 Need More Help?</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-sm mb-4">Still stuck? Our support team is here to help you 24/7.</p>
                        <Button>Contact Support</Button>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
