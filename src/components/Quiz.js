import React, { useState, useEffect } from 'react';
import './Quiz.css'

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

const Quiz = () => {
    const [questions, setQuestions] = useState(null);
    // To keep track of the current question
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

    // If we don't have any questions
    if(questions === null) return null;

    const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>Quiz</div>
  )
}

export default Quiz;