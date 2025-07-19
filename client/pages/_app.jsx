import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/router';

const protectedRoutes = ['/dashboard', '/campaigns', '/forms', '/settings'];

function MyApp({ Component, pageProps }) {
    const loadUser = useAuthStore((state) => state.loadUser);
    const { user, token } = useAuthStore();
    const [theme, setTheme] = useState('light');
    const router = useRouter();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.classList.add(savedTheme === 'dark' ? 'dark-mode' : 'light-mode');
        document.body.classList.remove(savedTheme === 'dark' ? 'light-mode' : 'dark-mode');
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        // Load user if token exists
        if (token && !user) {
            loadUser();
        }

        // If route is protected and no token, redirect
        if (protectedRoutes.includes(router.pathname) && !token) {
            router.replace('/login');
        }
    }, [router.pathname]);

    return <Component {...pageProps} />;
}

export default MyApp;
