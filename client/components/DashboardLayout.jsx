
import NavLayout from './NavLayout';
export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
            <NavLayout/>
            {children}
        </div>
    );
}
