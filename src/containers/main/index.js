import React from "react"
import "./main.css";
import News from "../../components/news";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { useState } from "react/cjs/react.development";

function Main() {
    const [isAuth, setAuth] = useState(false);
    const onClick = () => {
        setAuth(!isAuth)
    }
    const news = [
        {id: 1, title: 'The Life Lessons', desc: 'The Life Lessons is the book about self education and...', cost: '$65.00'},
        {id: 2, title: 'The Untold Tales', desc: 'One of the biggest art projects in the world of...', cost: '$62.00'},
        {id: 3, title: 'Hobbye Lobbye', desc: 'A great story about politicians and their secret private life...', cost: '$49.00'},
        {id: 4, title: 'Where They Sing', desc: 'The best selling novel of all times about love and...', cost: '$58.00'}
    ]
    return (
        <div className="main">
            <Header isAuth={isAuth} onClick={onClick}/>
            <News news={news}/>
            <Link to={'/users'}>Go to users</Link>
        </div>
    )
}

export default Main