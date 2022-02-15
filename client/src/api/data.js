import * as api from './api.js';
import { setUserData } from './localStorageSetup.js';


const endpoints = {
    login: '/api/auth/login',
    createAppointment: '/api/appointments/create'
}

export async function loginUser(data) {
    try {
        const response = await api.post(endpoints.login, data);
        setUserData(response.userData);
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