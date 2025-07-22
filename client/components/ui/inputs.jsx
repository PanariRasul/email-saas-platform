import * as React from "react"
import { cn } from "../../components/lib/utils"

export const Input = React.forwardRef(
    ({ className, type = "text", ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0F044C] px-3 py-2 text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F27FF]",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = "Input"
