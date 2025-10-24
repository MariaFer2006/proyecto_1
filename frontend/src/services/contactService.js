import api from './api';

export const contactService = {
    createContact: async (data) => {
        try {
            const response = await api.post('/contact', data);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getAllContacts: async () => {
        try {
            const response = await api.get('/contact');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getContactById: async (id) => {
        try {
            const response = await api.get(`/contact/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};
