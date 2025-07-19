// client/components/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaRocket, FaTags, FaInfoCircle, FaSignInAlt, FaUserPlus, FaHome } from 'react-icons/fa';
import styles from '../styles/navigation.module.css';

export default function Navbar() {
    const [theme, setTheme] = useState('light');
    const isDark = theme === 'dark';

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light';
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <header className={`flex justify-between items-center px-6 py-4 ${styles.navigation}`}>
            <h1 className="text-xl font-bold text-[#9400FF] dark:text-white">📧 EmailAI Pro</h1>
            <nav className="space-x-6 hidden md:flex items-center">
                <Link href="/" className={styles.navLink}>
                    <FaHome className="inline-block mr-1" /> Home
                </Link>
                <Link href="/Features" className={styles.navLink}>
                    <FaRocket className="inline-block mr-1" /> Features
                </Link>
                <Link href="/pricing" className={styles.navLink}>
                    <FaTags className="inline-block mr-1" /> Pricing
                </Link>
                <Link href="/About" className={styles.navLink}>
                    <FaInfoCircle className="inline-block mr-1" /> About
                </Link>
                <Link href="/login" className={styles.navLink}>
                    <FaSignInAlt className="inline-block mr-1" /> Login
                </Link>
                <Link
                    href="/signup"
                    className="bg-[#7F27FF] text-white px-2 py-1 rounded hover:bg-[#9400FF] transition flex items-center gap-2"
                >
                    <FaUserPlus /> Get Started
                </Link>
            </nav>
            <button
                onClick={toggleTheme}
                className="ml-4 text-black text-xl hover:scale-105 transition-transform dark:text-white"
                title="Toggle Theme"
            >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
        </header>
    );
}