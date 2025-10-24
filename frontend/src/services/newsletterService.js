import api from './api';

export const newsletterService = {
    subscribe: async (email) => {
        try {
            const response = await api.post('/newsletter', { email });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAllSubscribers: async () => {
        try {
            const response = await api.get('/newsletter');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};
