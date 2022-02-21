import * as api from './api.js';

const endpoints = {
    login: '/api/auth/login',
    register: '/api/auth/register',
    getAllUsers: '/api/auth/users',
    deleteUser: (id) => `/api/auth/users/${id}`,
    logout: '/api/auth/logout',
    createAppointment: '/api/appointments/create',
    getAppointment: '/api/appointments',
    getAppointmentById: (id) => `/api/appointments/${id}`,
    editAppointment: (id) => `/api/appointments/${id}`,
    deleteAppointment: (id) => `/api/appointments/${id}`,
    verify: '/api/auth/verify',
    createCar: '/api/garage/create'
}

export async function loginUser(data) {
    try {
        const response = await api.post(endpoints.login, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function registerUser(data) {
    try {
        const response = await api.post(endpoints.register, data);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getUsers() {
    try {
        const response = await api.get(endpoints.getAllUsers);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function deleteUser(id) {
    try {
        const response = await api.del(endpoints.deleteUser(id));
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

export async function getAppointments() {
    try {
        const response = await api.get(endpoints.getAppointment);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getAppointmentById(id) {
    try {
        const response = await api.get(endpoints.getAppointmentById(id));
        return response;
    } catch (error) {
        throw error;
    }
}

export async function editAppointment(id, data) {
    try {
        const response = await api.put(endpoints.editAppointment(id), data);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function deleteAppointment(id) {
    try {
        const response = await api.del(endpoints.deleteAppointment(id));
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

export async function createCarInGarage(data) {
    try {
        const response = await api.post(endpoints.createCar, data);
        return response;
    } catch (error) {
        throw error;
    }
}