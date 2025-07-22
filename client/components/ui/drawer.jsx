import * as React from "react"
import * as DrawerPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "../../components/lib/utils"

export const Drawer = DrawerPrimitive.Root
export const DrawerTrigger = DrawerPrimitive.Trigger

export const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <DrawerPrimitive.Content
            ref={ref}
            className={cn(
                "fixed right-0 top-0 z-50 h-full w-[90%] sm:w-[400px] bg-white dark:bg-black border-l border-gray-200 dark:border-gray-700 shadow-xl focus:outline-none",
                className
            )}
            {...props}
        >
            {children}
            <DrawerPrimitive.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <X className="w-5 h-5" />
            </DrawerPrimitive.Close>
        </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
))
DrawerContent.displayName = "DrawerContent"

export const DrawerHeader = ({ className, ...props }) => (
    <div className={cn("px-6 pt-6 pb-2", className)} {...props} />
)

export const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold text-black dark:text-white", className)}
        {...props}
    />
))
DrawerTitle.displayName = "DrawerTitle"
