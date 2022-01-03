import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    const handleNavigateToProjectsButton = () => navigate('/projects');
    return (
        <div>
            <h1>About</h1>
            <button onClick={handleNavigateToProjectsButton}>Click to see my projects!</button>
        </div>
    )
}

export default About;