import { Button } from "../ui/buttons"
import { Input } from "@/components/ui/inputs"
import { Filter } from "lucide-react"


export default function FormToolbar({ onCreateClick }) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-black p-4 rounded-2xl shadow">
            <div className="flex gap-2 w-full md:w-auto">
                <Input
                    type="text"
                    placeholder="Search forms..."
                    className="w-full md:w-64 bg-white dark:bg-[#0F044C] text-black dark:text-white"
                />
                <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                </Button>
            </div>
            <Button
                onClick={onCreateClick}
                className="bg-[#7F27FF] hover:bg-[#6528F7] text-white rounded-xl"
            >
                + Create Form
            </Button>
        </div>
    )
}
