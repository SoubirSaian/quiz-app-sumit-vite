import React from 'react';
import './Quiz.css';
import Answer from '../../components/Answer/Answer';
import Progressbar from '../../components/Progressbar/Progressbar';
import Miniplayer from '../../components/Miniplayer/Miniplayer';

const Quiz = () => {
    return (
        <>
            <h1>Pick three of your favourite star wars films</h1>
            <h4>Questions can have multiple answers</h4>

            <Answer></Answer>

            <Progressbar></Progressbar>

            <Miniplayer></Miniplayer>
            
        </>
    );
};

export default Quiz;