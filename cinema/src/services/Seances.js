import axios from 'axios';

const URL = "http://localhost:4000";

const Seances = {
    getSeance: (id) => {
        return axios({
            method: 'GET',
            url: `${URL}/seances/${id}`,
        })
    }
}

export { Seances }