import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const getDashboardData = async () => {
    const response = await api.get('/dashboard');
    return response.data;  
};