import React from 'react';
import './Answer.css';
import Checkbox from '../Checkbox/Checkbox';

const Answer = () => {
    return (
        <div className='answers'>
            <Checkbox className='answer' text='test answer'></Checkbox>
        </div>
    );
};

export default Answer;