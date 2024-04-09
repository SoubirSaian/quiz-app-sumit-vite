import React from 'react';
import './Textinput.css';

const Textinput = ({icon, ...rest}) => {
    return (
        <div className='textInput'>
            <input {...rest} />
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    );
};

export default Textinput;