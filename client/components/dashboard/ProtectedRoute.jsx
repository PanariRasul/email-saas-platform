// components/ProtectedRoute.jsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '@/store/authStore';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const { user, token, loadUser } = useAuthStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const storedToken = localStorage.getItem('token');

            // 🚫 No token in storage → redirect to login
            if (!storedToken) {
                router.replace('/login');
                return;
            }

            // ✅ Token exists but user not loaded → fetch user
            if (!user) {
                try {
                    await loadUser();
                } catch (err) {
                    console.error('Failed to load user', err);
                    localStorage.removeItem('token'); // Clean up
                    router.replace('/login');
                    return;
                }
            }

            setLoading(false);
        };

        checkAuth();
    }, [user, token, loadUser, router]);

    // ⏳ Wait while checking
    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300 text-lg">Loading dashboard...</p>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;
