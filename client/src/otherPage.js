import React from 'react';
import { Link } from 'react-router-dom';


const OtherPage = () => {
    return (
        <div>
            Some Other Page
            <Link to="/">Go Back Home</Link>
        </div>
    );
}

export default OtherPage;