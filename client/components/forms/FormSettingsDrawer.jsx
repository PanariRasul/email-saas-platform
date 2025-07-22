import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/inputs"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/buttons"
import { useState, useEffect } from "react"

export default function FormSettingsDrawer ({ open, onClose, form }) {
    const [redirectUrl, setRedirectUrl] = useState("")
    const [notifyEmail, setNotifyEmail] = useState("")
    const [embedCode, setEmbedCode] = useState("")

    useEffect(() => {
        if (form) {
            setRedirectUrl("https://yourdomain.com/thank-you")
            setNotifyEmail("team@yourcompany.com")
            setEmbedCode(`<iframe src="https://yourdomain.com/form/${form.id}" width="100%" height="400"></iframe>`)
        }
    }, [form])

    return (
        <Drawer open={open} onClose={onClose} direction="right">
            <DrawerContent className="max-w-md w-full bg-white dark:bg-black p-6 border-l border-gray-200 dark:border-gray-700 space-y-6">
                <DrawerHeader>
                    <DrawerTitle className="text-[#7F27FF] text-2xl font-semibold">
                        Form Settings
                    </DrawerTitle>
                </DrawerHeader>

                <div className="space-y-4">
                    <div>
                        <Label>Redirect URL</Label>
                        <Input
                            value={redirectUrl}
                            onChange={(e) => setRedirectUrl(e.target.value)}
                            className="bg-white dark:bg-[#0F044C] text-black dark:text-white"
                        />
                    </div>

                    <div>
                        <Label>Notification Email</Label>
                        <Input
                            value={notifyEmail}
                            onChange={(e) => setNotifyEmail(e.target.value)}
                            className="bg-white dark:bg-[#0F044C] text-black dark:text-white"
                        />
                    </div>

                    <div>
                        <Label>Embed Code</Label>
                        <textarea
                            value={embedCode}
                            readOnly
                            className="w-full h-28 bg-gray-100 dark:bg-[#0F044C] text-sm p-2 rounded-md text-black dark:text-white"
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={onClose} className="bg-[#7F27FF] text-white rounded-xl">
                            Done
                        </Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
