import React from 'react';
import './Videos.css';
import Video from '../Video/Video';
import { Link } from 'react-router-dom';

const Videos = () => {
    return (
        <div className='videos'>
           <Link to="/quiz"><Video></Video> </Link>
           <Link to="/quiz"><Video></Video> </Link>
           <Link to="/quiz"><Video></Video> </Link>
           <Link to="/quiz"><Video></Video> </Link>
           <Link to="/quiz"><Video></Video> </Link>
           <Link to="/quiz"><Video></Video> </Link>
             
        </div>
    );
};

export default Videos;