import { useState } from 'react'
import Result from './components/Result.jsx'
import QuestionApiCard from './components/QuestionsApiCard.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Starter from './components/StartQues.jsx'
function App() {
  // const [data, setData] = useState(quizData)
  const [quesCompletion, setQuesCompletion] = useState(false)
  const [ans, setAns] = useState({
                                  correct: 0,
                                  wrong: 0,
                                })
  const [quizData, setQuizData] = useState([]);
  const [selectCategory, setSelectCategory] = useState(9)
  return (
    <>
    <h1 className='title'>Quiz App</h1>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Starter 
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
              />}/>
          <Route path='/questioncard' element={
            <QuestionApiCard 
              quizData = {quizData} 
              setQuizData = {setQuizData}
              quesCompletion = {quesCompletion}
              setQuesCompletion = {setQuesCompletion}
              selectCategory={selectCategory}
              setAns = {setAns}
              ans = {ans}
      />}/>
      <Route path='/result' element={
          <Result            
            ans = {ans} 
            quizData = {quizData}
            setQuesCompletion = {setQuesCompletion}
          />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
