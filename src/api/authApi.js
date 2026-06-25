import axiosInstance from './axiosInstance';

export const authApi = {
    login: (email, password) =>
        axiosInstance.post('/customers/login', { email, password }),

    register: (userData) =>
        axiosInstance.post('/customers/register', userData),

    forgotPassword: (email) =>
        axiosInstance.post('/customers/forgot-password', { email }),

    resetPassword: (data) =>
        axiosInstance.post('/customers/reset-password', data),
};