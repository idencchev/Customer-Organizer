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
    createCar: '/api/garage/create',
    getCar: (id) => `/api/garage/${id}`,
    getAllCars: '/api/garage',
    deleteCar: (id) => `/api/garage/${id}`,
    editCar: (id) => `/api/garage/${id}`,
    archive: '/api/garage/archive',
    move: (id) => `/api/garage/move/${id}`
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

export async function getCarById(id) {
    try {
        const response = await api.get(endpoints.getCar(id));
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getAllCars() {
    try {
        const response = await api.get(endpoints.getAllCars);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function deleteCar(id) {
    try {
        const response = await api.del(endpoints.deleteCar(id));
        return response;
    } catch (error) {
        throw error;
    }
}

export async function editCar(id, data) {
    try {
        const response = await api.put(endpoints.editCar(id), data);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getArchive() {
    try {
        const response = await api.get(endpoints.archive);
        return response;
    } catch (error) {
        throw error;
    }
}

export async function moveToArchive(id) {
    try {
        const response = await api.put(endpoints.move(id));
        return response;
    } catch (error) {
        throw error;
    }
}