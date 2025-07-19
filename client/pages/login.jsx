import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { loginUser } from '@/services/authService'; // ✅ fixed import
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const loginUserToStore = useAuthStore((state) => state.login);
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await loginUserToStore(form); // ✅ This handles everything (login, store, token)
            router.push('/dashboard');
        } catch (err) {
            console.error(err);
            setError(err?.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Head><title>Login - EmailAI Pro</title></Head>
            <Navbar />
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Log In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange}
                        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring dark:bg-gray-700 dark:text-white" required />
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}
                        className="w-full px-4 py-2 rounded border focus:outline-none focus:ring dark:bg-gray-700 dark:text-white" required />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>
                </form>
                <div className="text-sm text-center mt-4 text-gray-600 dark:text-gray-300">
                    <Link href="/forgot-password" className="text-blue-600 hover:underline">Forgot your password?</Link>
                </div>
                <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-300">
                    Don’t have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
