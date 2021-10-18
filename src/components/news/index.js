import React from "react"
import "./news.css";
import New from "../new-item";

function News({news}) {
    
    const newslist = news.map((item, i) => <New key={i} product={item}/>
        // <div className="new">
        //     <div className="image">
        //         <img className="image_item" src={`../img/${item.id}.png`} />
        //     </div>
        //     <div className="title">
        //         <h2>{item.title}</h2>
        //     </div>
        //     <div className="desc">
        //         <p>{item.desc}</p>
        //     </div>
        //     <div className="cost">
        //         <p >{item.cost}</p>
        //     </div>
        // </div>
    )
    return (
        <div className="news">
            {newslist}
        </div>
    )
}

export default News