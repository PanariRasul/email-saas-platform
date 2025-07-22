import React from "react"
import clsx from "clsx"

export const Badge = ({ children, variant = "default", className = "", ...props }) => {
    const baseStyles =
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

    const variants = {
        default: "bg-[#7F27FF]/10 text-[#7F27FF] dark:bg-[#892CDC]/10 dark:text-[#892CDC]",
        success: "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
        danger: "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-300",
        neutral: "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-300",
    }

    return (
        <span className={clsx(baseStyles, variants[variant], className)} {...props}>
            {children}
        </span>
    )
}
