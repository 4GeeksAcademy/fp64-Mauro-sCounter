import React, { useState, useEffect } from 'react';

const SecondsCounter = () => {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1); 
        }, 1000);
        return () => clearInterval(interval);
    }, []); 
    return (
        <div className="text-center">
            <h1>{count}</h1>
        </div>
    );
};

export default SecondsCounter;