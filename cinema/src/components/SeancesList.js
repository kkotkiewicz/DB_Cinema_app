import React from 'react';
import { useEffect, setState } from 'react';
import "../styles/Seances.css";

const SeancesList = ({...props}) => {
    useEffect(() => {
        console.log(props.seances);
        // props.seances.forEach(element => console.log(element));

    }, [])

    return (
        <div id = "seances">
            <h2><b></b>Movie: <b>{props.movieTitle}</b></h2>
            {props.seances.map((seance, i) => (
                <a href = {`/seance/${seance.SEANCE_ID}`}>
                    {seance.TIME_FROM} - {seance.TIME_TO}, room number: {seance.ROOM_ID}
                </a>
            ))}
        </div>
    );
};

export default SeancesList;