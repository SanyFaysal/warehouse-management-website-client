import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center mt-3' style={{ height: '100vh' }}>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;