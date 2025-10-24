import api from './api';

export const demoService = {
    requestDemo: async (data) => {
        try {
            const response = await api.post('/demo', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAllDemoRequests: async () => {
        try {
            const response = await api.get('/demo');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};
