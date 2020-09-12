import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/startup';

export const getAllStartup = async () => {
    const config = {
        headers: {'Accept': 'application/json'}
    }
    const res = await axios.get('/', config);
    console.log(res);
    return res.data;
};

export const addStartup = async (data) => {
    const config = {
        headers: {'Accept': 'application/json'}
    }
    const res = await axios.post('/add', data, config);
    return res.data;
}