import React from 'react';
import './Miniplayer.css';

import miniImg from '../../assets/3.jpg';

const Miniplayer = () => {
    return (
        <div class="miniPlayer floatingBtn">
            <span class="material-icons-outlined open"> play_circle_filled </span>
            <span class="material-icons-outlined close"> close </span>
            <img src={miniImg} alt="image" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default Miniplayer;