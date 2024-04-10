import React from 'react';
import './Progressbar.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Progressbar = () => {
    return (
        <div className='progressBar'>
            <div className='backButton' onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className='rangeArea'>
                <div className='tooltip' ref={tooltipRef}>
                    {progress}% Complete!
                </div>
                <div className='rangeBody'>
                    <div
                    className='progress'
                    style={{ width: `${progress}%` }}
                    onMouseOver={toggleTooltip}
                    onMouseOut={toggleTooltip}
                    ></div>
                </div>
            </div>
            <Link to="/result">
                <Button
                    className='next'
                    onClick={progress === 100 ? submit : next}
                >
                    <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </Button>
            </Link>
      </div>
    );
};

export default Progressbar;