import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Questions from './Questions';
function App() {
  const [started,setStarted]=useState(false);
  function startQuiz(){
    setStarted(true);
  }
  return (
    <>
      {!started ? (
        <main>
          <h1 className="heading">Quizzical</h1>
          <p className="des">Some description if needed</p>
          <Button text="Start Quiz" onClick={startQuiz}/>
        </main>
      ):<Questions />
      
      }

    </>
  );
}

export default App
