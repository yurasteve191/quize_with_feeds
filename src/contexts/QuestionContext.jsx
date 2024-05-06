import { createContext, useContext, useState } from 'react';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [progress, setProgress] = useState(0);

  const updateQuestion = (question) => {
    setCurrentQuestion(question);
  };

  const updateProgress = (value) => {
    setProgress(value);
  };

  return (
    <QuestionContext.Provider value={{ currentQuestion, updateQuestion, progress, updateProgress }}>
      {children}
    </QuestionContext.Provider>
  );
};


export const useQuestionContext = () => useContext(QuestionContext);