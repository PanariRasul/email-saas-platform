export default function Separator({ className = "", ...props }) {
    return (
        <hr className={`my-4 border-t border-gray-200 dark:border-gray-700 ${className}`} {...props} />
    )
}
