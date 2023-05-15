import axios from 'axios';

const URL = "http://localhost:4000";

const Reservation = {
    reserve: (seats, seanceId, userId) => {
        return axios.post(`${URL}/reservation`, {seats: seats, seanceId: seanceId, userId: userId, paid: 1});
    }
}

export { Reservation }