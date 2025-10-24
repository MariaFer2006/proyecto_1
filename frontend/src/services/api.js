import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para manejar errores
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorMessage = error.response?.data?.error || 'Error en la solicitud';
        console.error('API Error:', errorMessage);
        return Promise.reject(error);
    }
);

export default api;