import { Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/buttons"

const dummyForms = [
    {
        id: 1,
        name: "Newsletter Signup",
        submissions: 120,
        status: "Active",
        createdAt: "2025-07-15",
    },
    {
        id: 2,
        name: "Webinar Registration",
        submissions: 80,
        status: "Inactive",
        createdAt: "2025-07-10",
    },
    {
        id: 3,
        name: "Contact Us",
        submissions: 45,
        status: "Active",
        createdAt: "2025-06-30",
    },
    {
        id: 4,
        name: "Product Feedback",
        submissions: 23,
        status: "Draft",
        createdAt: "2025-06-25",
    },
]

export default function FormsTable ({ onEdit }) {
    return (
        <div className="bg-white dark:bg-black rounded-2xl shadow p-4">
            <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-gray-100 dark:bg-[#0F044C] text-gray-700 dark:text-white">
                    <tr>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Submissions</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Created</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyForms.map((form) => (
                        <tr
                            key={form.id}
                            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#1a1a2e]"
                        >
                            <td className="px-4 py-3 font-medium">{form.name}</td>
                            <td className="px-4 py-3">{form.submissions}</td>
                            <td className="px-4 py-3">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${form.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : form.status === "Inactive"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {form.status}
                                </span>
                            </td>
                            <td className="px-4 py-3">{form.createdAt}</td>
                            <td className="px-4 py-3 text-right flex justify-end gap-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => onEdit(form)}
                                >
                                    <Pencil className="w-4 h-4 text-blue-600" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Trash2 className="w-4 h-4 text-red-600" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
