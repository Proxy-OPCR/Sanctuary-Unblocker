const axios = require('axios');

const API_URL = 'https://api.example.com/data'; // ここに実際のAPIエンドポイントを指定

async function fetchData(params) {
    try {
        const response = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

module.exports = {
    fetchData,
};