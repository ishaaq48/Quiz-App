import { Link } from "react-router-dom";
import "../App.css"

export default function Starter(){
    return (
        <>
            <h3 className='title'>Time is ticking...</h3>
            <button><Link to="/questioncard">Start Quiz</Link></button>
        </>
    )
}