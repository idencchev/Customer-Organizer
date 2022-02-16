import * as api from './api.js';

const endpoints = {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    createAppointment: '/api/appointments/create',
    verify: '/api/auth/verify'
}

export async function loginUser(data) {
    try {
        const response = await api.post(endpoints.login, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function logoutUser() {
    try {
        const response = await api.get(endpoints.logout);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function createAppointment(data) {
    try {
        const response = await api.post(endpoints.createAppointment, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function verifyToken() {
    try {
        const response = await api.post(endpoints.verify);
        return response;
    } catch (error) {
        throw error;
    }
}