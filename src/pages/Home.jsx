import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleSeeMoreClick = () => {
        navigate(`/nasa-homepage`);
      };
    return (
        <div>
            <h1>Welcome to our website!</h1>
            <p>Feel free to explore and enjoy your stay.</p>
            <button onClick={handleSeeMoreClick}>Find More</button>
        </div>
    );
};

export default Home;