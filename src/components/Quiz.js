import React, { useState, useEffect } from 'react';
import './Quiz.css'

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

const Quiz = () => {
    const [qusetions, setQuestions] = useState(null);
    // const [qusetions, setQuestions] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            const result = await fetch(QUIZ_API_BASE_URL);
            const jsonResponse = await result.json();
            setQuestions(jsonResponse);
        };

        apiCall();
    }, []);

  return (
    <div>Quiz</div>
  )
}

export default Quiz;