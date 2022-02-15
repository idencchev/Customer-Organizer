import * as api from './api.js';
import { setUserData } from './localStorageSetup.js';


const endpoints = {
    login: '/api/auth/login',
}

export async function loginUser(data) {
    try {
        const response = await api.post(endpoints.login, data);
        document.cookie = `x-auth-token = ${response.userData.token}`;
        setUserData(response);
        return response;
    } catch (error) {
        throw error;
    }

}