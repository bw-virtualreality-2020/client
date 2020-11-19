import axios from 'axios';
import { config } from '../../config';

export const axiosWithAuth = () => {
    const token = localStorage.getItem(config.TOKEN);

    return axios.create({
        baseURL: 'https://bw-virtualreality-2020.herokuapp.com/api',
        headers: {
            authorization: token
        }
    })
}
