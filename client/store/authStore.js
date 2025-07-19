import { create } from 'zustand';
import { registerUser, loginUser, fetchCurrentUser, logoutUser } from '@/services/authService';

const useAuthStore = create((set) => ({
    user: null,
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,

    login: async (credentials) => {
        const data = await loginUser(credentials);
        localStorage.setItem('token', data.token);
        set({ user: data.user, token: data.token });
    },

    register: async (userData) => {
        const data = await registerUser(userData);
        localStorage.setItem('token', data.token);
        set({ user: data.user, token: data.token });
    },

    loadUser: async () => {
        const token = localStorage.getItem('token');
        if (!token) return;

        try {
            const data = await fetchCurrentUser(token);
            set({ user: data.user, token });
        } catch (error) {
            console.error("User loading failed", error);
            localStorage.removeItem('token'); // Optional
            set({ user: null, token: null });
            throw error;
        }
    }
    ,

    logout: () => {
        logoutUser();
        localStorage.removeItem('token');
        set({ user: null, token: null });
    },
}));

export default useAuthStore;
