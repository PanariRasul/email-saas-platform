// components/ui/card.jsx

import React from "react";

const Card = ({ className = "", children, ...props }) => (
    <div className={`rounded-2xl border bg-white dark:bg-[#0F044C] text-black dark:text-white shadow-sm ${className}`} {...props}>
        {children}
    </div>
);
Card.displayName = "Card";

const CardHeader = ({ className = "", children, ...props }) => (
    <div className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`} {...props}>
        {children}
    </div>
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className = "", children, ...props }) => (
    <h3 className={`text-lg font-semibold text-[#7F27FF] dark:text-[#AD49E1] ${className}`} {...props}>
        {children}
    </h3>
);
CardTitle.displayName = "CardTitle";

const CardContent = ({ className = "", children, ...props }) => (
    <div className={`p-4 ${className}`} {...props}>
        {children}
    </div>
);
CardContent.displayName = "CardContent";

const CardFooter = ({ className = "", children, ...props }) => (
    <div className={`p-4 border-t border-gray-200 dark:border-gray-700 ${className}`} {...props}>
        {children}
    </div>
);
CardFooter.displayName = "CardFooter";

const CardDescription = ({ className = "", children, ...props }) => (
    <p className={`text-sm text-gray-600 dark:text-gray-300 ${className}`} {...props}>
        {children}
    </p>
);
CardDescription.displayName = "CardDescription";

// ✅ Correct way to export
export {
    Card, // use named import
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription,
};
