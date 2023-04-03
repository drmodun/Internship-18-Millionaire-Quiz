import React from 'react';
import './data.js';
import  { QuestionProvider } from './providers/QuestionProvider.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
function App() {
  return (
    <QuestionProvider>
      <MainPage></MainPage>
    </QuestionProvider>
  );
}

export default App;
