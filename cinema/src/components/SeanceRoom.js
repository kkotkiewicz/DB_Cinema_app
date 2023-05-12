import React from 'react';
import { Seances } from '../services/Seances';
import { useEffect, useState, useContext } from 'react';
import { useImmer } from 'use-immer';
import {useLocation} from "react-router-dom";
import "../styles/SeanceRoom.css"
import Seat from './Seat';
import { SeatsContext } from './Main';

function SeanceRoom({...props}) {
    const location = useLocation();
    const id = parseInt(location.pathname.split("/")[2]);
    const[seance, setSeance] = useState({
        seanceId: id,
        seats: []
    });
    const {seats, reserveSeats} = useContext(SeatsContext);

    useEffect(() => {
        Seances.getSeance(id).then((res) => {
            let tmp = res.data;
            tmp.forEach((seat)=>{
                seat["color"] = seat.SEAT_TAKEN?'rgb(126, 0, 0)':(seat.VIP?'#94dfff':'#8bc34a');
                seat["reserved"] = false;
            });

            setSeance((seance)=>({...seance, seats: tmp}));
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const reserve = (id) =>{
        console.log(id);
        // let tmp = seance.seats;
        // //console.log(tmp);
        // //tmp[id].reserved = !tmp[id].reserved;
        // setSeance((x)=>({...x, seats: tmp}))
    }

    return (
        <div id = "seance-room">
            <div id = "screen">Screen</div>
            <div id = "seats">
                {seance.seats.map((seat, i) => (
                    <Seat key = {seat.SEAT_ID} reserve = {reserve} id = {seat.SEAT_ID} color = {seat.color}></Seat>
                ))}
            </div>
            <a href = {`/reservation/${0}`}><button onClick={()=>{reserveSeats({ type: "insert", count: 1 });}}>Go to reservation page</button></a>
            {/* <button onClick={()=>{reserveSeats({ type: "insert", count: 1 });}}>Go to reservation page</button> */}
        </div>
    );
}

export default SeanceRoom;