import React, { useState, useEffect } from 'react';
import './Quiz.css'

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

const Quiz = () => {
    const [qusetions, setQuestions] = useState(null);
    // const [qusetions, setQuestions] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            // fetch data from API on initial render
            const result = await fetch(QUIZ_API_BASE_URL);
            const jsonResponse = await result.json();
            // update state and re-render component
            setQuestions(jsonResponse);
        };

        apiCall();
    }, []);

  return (
    <div>Quiz</div>
  )
}

export default Quiz;