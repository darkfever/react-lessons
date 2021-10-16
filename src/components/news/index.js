import React from "react"
import "./news.css";

function News() {
    const news = [
        {id: 1, title: 'The Life Lessons', desc: 'The Life Lessons is the book about self education and...', cost: '$65.00'},
        {id: 2, title: 'The Untold Tales', desc: 'One of the biggest art projects in the world of...', cost: '$62.00'},
        {id: 3, title: 'Hobbye Lobbye', desc: 'A great story about politicians and their secret private life...', cost: '$49.00'},
        {id: 4, title: 'Where They Sing', desc: 'The best selling novel of all times about love and...', cost: '$58.00'}
    ]
    const newslist = news.map((item, i) => 
        <div className="new">
            <div className="image">
                <img className="image_item" src={`../img/${item.id}.png`} />
            </div>
            <div className="title">
                <h2>{item.title}</h2>
            </div>
            <div className="desc">
                <p>{item.desc}</p>
            </div>
            <div className="cost">
                <p >{item.cost}</p>
            </div>
        </div>
    )
    return (
        <div className="news">
            {newslist}
        </div>
    )
}

export default News