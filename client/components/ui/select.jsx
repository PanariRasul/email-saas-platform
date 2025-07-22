import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import clsx from "clsx";

// Main Select wrapper
export const Select = ({ value, onValueChange, children, className = "" }) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (val) => {
        onValueChange?.(val); // Use optional chaining
        setOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            {React.Children.map(children, (child) => {
                if (child?.type?.displayName === "SelectTrigger") {
                    return React.cloneElement(child, {
                        onClick: () => setOpen((prev) => !prev),
                        value,
                    });
                }
                if (child?.type?.displayName === "SelectContent") {
                    return open
                        ? React.cloneElement(child, {
                              onSelect: handleSelect,
                              value,
                          })
                        : null;
                }
                return child;
            })}
        </div>
    );
};

// Trigger button for the dropdown
export const SelectTrigger = ({ children, className = "", ...props }) => {
    return (
        <button
            className={clsx(
                "flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition hover:border-gray-400 dark:bg-[#0F044C] dark:text-white dark:border-gray-700",
                className
            )}
            {...props}
        >
            {children}
            <LuChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </button>
    );
};
SelectTrigger.displayName = "SelectTrigger";

// Dropdown content
export const SelectContent = ({ children, onSelect, value, className = "" }) => {
    return (
        <div
            className={clsx(
                "absolute z-50 mt-1 w-full rounded-md border bg-white dark:bg-[#0F044C] border-gray-200 dark:border-gray-700 shadow-lg max-h-60 overflow-auto",
                className
            )}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    onSelect,
                    selected: child.props.value === value,
                })
            )}
        </div>
    );
};
SelectContent.displayName = "SelectContent";

// Dropdown item
export const SelectItem = ({ value, children, onSelect, selected, className = "" }) => {
    return (
        <div
            onClick={() => onSelect(value)}
            className={clsx(
                "cursor-pointer px-4 py-2 text-sm hover:bg-[#7F27FF]/10 dark:hover:bg-[#892CDC]/20",
                selected && "font-semibold text-[#7F27FF] dark:text-[#892CDC]",
                className
            )}
        >
            {children}
        </div>
    );
};
SelectItem.displayName = "SelectItem";

// Renders the placeholder or selected value inside SelectTrigger
export const SelectValue = ({ placeholder, value }) => {
    return <span>{value || placeholder}</span>;
};
SelectValue.displayName = "SelectValue";
