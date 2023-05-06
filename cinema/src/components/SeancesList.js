import React from 'react';
import { useEffect, setState } from 'react';
import "../styles/Seances.css";

const SeancesList = ({...props}) => {
    useEffect(() => {
        console.log(props.seances);
        props.seances.forEach(element => console.log(element));

    }, [])

    return (
        <div id = "seances">
            <h2><b></b>Movie <b>{props.id}</b></h2>
            {props.seances.map((seance, i) => (
                <a href = {`/seance/${i}`}>
                    Seance {i}: {seance}
                </a>
            ))}
        </div>
    );
};

export default SeancesList;