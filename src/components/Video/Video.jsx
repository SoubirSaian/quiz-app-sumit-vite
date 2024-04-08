import React from 'react';
import './Video.css';

import thumbnail from '../../assets/3.jpg';

const Video = () => {
    return (
      <a href="quiz.html">
        <div class="video">
            <img src={thumbnail} alt="thumbnail-img" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div class="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
      </a>
    );
};

export default Video;