import React from 'react';
import './Question.css';
import Answer from '../Answer/Answer';

const Question = () => {
    return (
        <div className='question'>
            <div class="qtitle">
              <span class="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>

            <Answer></Answer>
        </div>
    );
};

export default Question;