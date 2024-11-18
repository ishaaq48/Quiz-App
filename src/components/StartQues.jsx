import { Link } from "react-router-dom";
import "../App.css"
import { useState } from "react";

export default function Starter({selectCategory,setSelectCategory}){
    
    const categories = [
        {
            "id": 9,
            "name": "General Knowledge"
        },
        {
            "id": 10,
            "name": "Entertainment: Books"
        },
        {
            "id": 11,
            "name": "Entertainment: Film"
        },
        {
            "id": 12,
            "name": "Entertainment: Music"
        },
        {
            "id": 13,
            "name": "Entertainment: Musicals & Theatres"
        },
        {
            "id": 14,
            "name": "Entertainment: Television"
        },
        {
            "id": 15,
            "name": "Entertainment: Video Games"
        }
    ]
    function handleSelect(id){
        setSelectCategory(id)
    }
    
    return (
        <div className="starter">
            <h3 className='title-starter'>Time is ticking...</h3>
            <ul className="category-card">
                {categories.map((category) => (
                    <li key={category.id}>
                        <button className = "options"onClick={() =>handleSelect(category.id)}>
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
            <button className='next-question' ><Link to="/questioncard">Start Quiz</Link></button>
        </div>
    )
}