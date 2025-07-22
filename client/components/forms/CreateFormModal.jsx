import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/buttons"
import { Input } from "@/components/ui/inputs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switchs"
import { useState } from "react"

export default function CreateFormModal ({ open, onClose }) {
    const [formName, setFormName] = useState("")
    const [tags, setTags] = useState("")
    const [status, setStatus] = useState(true)
    const [fields, setFields] = useState([
        { label: "Email", type: "email" },
        { label: "Name", type: "text" },
    ])

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            name: formName,
            tags: tags.split(",").map((t) => t.trim()),
            status,
            fields,
        }
        console.log("Form Created:", payload)
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-xl bg-white dark:bg-black p-6 rounded-2xl shadow-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-[#7F27FF]">Create New Form</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                    <div>
                        <Label>Form Name</Label>
                        <Input
                            placeholder="Enter form name"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="bg-white dark:bg-[#0F044C] text-black dark:text-white"
                        />
                    </div>

                    <div>
                        <Label>Tags (comma separated)</Label>
                        <Input
                            placeholder="e.g. signup, newsletter"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="bg-white dark:bg-[#0F044C] text-black dark:text-white"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Status</Label>
                        <Switch checked={status} onCheckedChange={setStatus} />
                    </div>

                    <div>
                        <Label className="block mb-2">Fields</Label>
                        <div className="space-y-2">
                            {fields.map((field, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border p-2 rounded-lg bg-gray-50 dark:bg-[#1a1a2e]"
                                >
                                    <span className="font-medium">{field.label}</span>
                                    <span className="text-sm text-gray-500">{field.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button type="button" variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-[#7F27FF] hover:bg-[#6528F7] text-white rounded-xl">
                            Create
                        </Button>
                    </div>
                </form>

            </DialogContent>
        </Dialog>
    )
}
