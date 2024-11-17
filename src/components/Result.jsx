
import '../App.css' 

export default function Result({ans, quizData}){
    const quesAnswered = ans.correct + ans.wrong
    const quesNotAnswered = quizData.length - quesAnswered

    return (
            <div className='result-card'>
                <h1 className='result-title'>Result</h1>
                <div className='result-container'>
                    <h3 className='result-items'>Correct: {ans.correct}</h3>
                    <h3 className='result-items'>Wrong: {ans.wrong}</h3>
                    <h3 className='result-items'>Questions answered: {quesAnswered}</h3>
                    <h3 className='result-items'>Questions not answered: {quesNotAnswered}</h3>
                </div>
            </div>        
    )
}