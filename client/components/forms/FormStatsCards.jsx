import { FileText, CheckCircle, Send } from "lucide-react"

const stats = [
    {
        label: "Total Forms",
        value: 12,
        icon: FileText,
        bg: "bg-[#7F27FF]/10",
        color: "text-[#7F27FF]",
    },
    {
        label: "Total Submissions",
        value: 462,
        icon: Send,
        bg: "bg-[#6528F7]/10",
        color: "text-[#6528F7]",
    },
    {
        label: "Active Forms",
        value: 7,
        icon: CheckCircle,
        bg: "bg-[#9400FF]/10",
        color: "text-[#9400FF]",
    },
]

export default function FormStatsCards () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-white dark:bg-black rounded-2xl shadow"
                >
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                        <h2 className="text-2xl font-bold text-black dark:text-white">{stat.value}</h2>
                    </div>
                    <div
                        className={`p-3 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}
                    >
                        <stat.icon className="w-6 h-6" />
                    </div>
                </div>
            ))}
        </div>
    )
}
