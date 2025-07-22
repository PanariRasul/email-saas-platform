import React from "react"

export const ScrollArea = ({ className = "", style = {}, children, ...props }) => {
    return (
        <div
            className={`overflow-auto rounded-md scrollbar-thin scrollbar-thumb-[#7F27FF] dark:scrollbar-thumb-[#892CDC] scrollbar-track-transparent ${className}`}
            style={{ maxHeight: "400px", ...style }}
            {...props}
        >
            {children}
        </div>
    )
}
