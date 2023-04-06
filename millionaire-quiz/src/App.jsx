import React from 'react';
import './data.js';
import { QuestionProvider } from './providers/QuestionProvider.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import { DialogProvider } from './providers/DialogProvider.jsx';
import { DialogSwitch } from './components/Dialogs/DialogSwitch.jsx';
function App() {
  return (
    <QuestionProvider>
      <DialogProvider>
        <MainPage></MainPage>
        <DialogSwitch />
      </DialogProvider>
    </QuestionProvider>
  );
}

export default App;
