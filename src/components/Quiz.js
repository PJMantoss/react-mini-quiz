import React, { useState, useEffect } from 'react';

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

const Quiz = () => {
    const [qusetions, setQuestions] = useState(null);
    // const [qusetions, setQuestions] = useState(null);

    useEffect(() => {
        const apiCall = async () => {};

        apiCall();
    }, []);

  return (
    <div>Quiz</div>
  )
}

export default Quiz;