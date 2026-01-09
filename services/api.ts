import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gist.githubusercontent.com/VitorN200/1382e78fce4070c1a09e58d06411e6c0/raw/bfdbcb19182f0bc2e586babe982f4af2a2cf90b8/db.json',
});

export const getDashboardData = async () => {
    const response = await api.get('/');
    return response.data;  
};