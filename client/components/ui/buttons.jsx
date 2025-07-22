import * as React from "react"
import { cn } from "../../components/lib/utils"

export const Button = React.forwardRef(
    (
        { className, variant = "default", size = "md", asChild = false, ...props },
        ref
    ) => {
        const Comp = asChild ? "span" : "button"

        const base =
            "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#7F27FF] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

        const variants = {
            default: "bg-[#7F27FF] text-white hover:bg-[#6528F7]",
            outline:
                "border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-[#1a1a2e] text-black dark:text-white",
            ghost:
                "bg-transparent hover:bg-gray-100 dark:hover:bg-[#1a1a2e] text-black dark:text-white",
        }

        const sizes = {
            sm: "h-8 px-3",
            md: "h-10 px-4",
            lg: "h-12 px-6",
            icon: "h-10 w-10",
        }

        return (
            <Comp
                ref={ref}
                className={cn(base, variants[variant], sizes[size], className)}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"
