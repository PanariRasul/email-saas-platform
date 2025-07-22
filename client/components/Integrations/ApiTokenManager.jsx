import React, { useState } from "react"
import { Button } from "@/components/ui/buttons"
import { Input } from "@/components/ui/inputs"
import { LuBookCopy, LuRefreshCw, LuTrash2 } from "react-icons/lu"

export default function ApiTokenManager() {
    const [apiKey, setApiKey] = useState("sk_live_9f43834f_example")
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(apiKey)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleRegenerate = () => {
        const newKey = "sk_live_" + Math.random().toString(36).slice(2, 18)
        setApiKey(newKey)
        setCopied(false)
    }

    const handleDelete = () => {
        setApiKey("")
    }

    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 dark:text-white">API Key</label>
                <div className="flex gap-2">
                    <Input value={apiKey} readOnly className="flex-1" />
                    <Button size="sm" variant="outline" onClick={handleCopy}>
                        <LuBookCopy className="w-4 h-4 mr-1" />
                        {copied ? "Copied" : "Copy"}
                    </Button>
                </div>
            </div>

            <div className="flex gap-2">
                <Button size="sm" variant="secondary" onClick={handleRegenerate}>
                    <LuRefreshCw className="w-4 h-4 mr-1" />
                    Regenerate
                </Button>
                <Button size="sm" variant="destructive" onClick={handleDelete}>
                    <LuTrash2 className="w-4 h-4 mr-1" />
                    Delete
                </Button>
            </div>
        </div>
    )
}
