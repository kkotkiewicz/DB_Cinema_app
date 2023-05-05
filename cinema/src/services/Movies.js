import axios from 'axios';

const URL = "http://localhost:4000";

const Movies = {
    getMovie: (id) => {
        return axios({
            method: 'GET',
            url: `${URL}/movies/${id}`,
        })
    }
}

export { Movies }