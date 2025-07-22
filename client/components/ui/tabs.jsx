import React, { useState, createContext, useContext } from "react"
import clsx from "clsx"

const TabsContext = createContext()

export const Tabs = ({ defaultValue, children, className }) => {
    const [value, setValue] = useState(defaultValue)
    return (
        <TabsContext.Provider value={{ value, setValue }}>
            <div className={clsx("w-full", className)}>{children}</div>
        </TabsContext.Provider>
    )
}

export const TabsList = ({ children, className = "" }) => {
    return (
        <div className={clsx("inline-flex space-x-2 rounded-md bg-gray-100 dark:bg-[#0F044C] p-1", className)}>
            {children}
        </div>
    )
}

export const TabsTrigger = ({ value, children, className = "" }) => {
    const { value: activeValue, setValue } = useContext(TabsContext)
    const isActive = value === activeValue

    return (
        <button
            onClick={() => setValue(value)}
            className={clsx(
                "px-4 py-2 text-sm font-medium rounded-md transition",
                isActive
                    ? "bg-white text-[#7F27FF] shadow dark:bg-[#892CDC]/10 dark:text-white"
                    : "text-gray-600 hover:bg-white dark:text-gray-300 dark:hover:bg-[#892CDC]/10",
                className
            )}
        >
            {children}
        </button>
    )
}
