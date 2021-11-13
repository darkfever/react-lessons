import React from "react"
import "./new-item.css";
import 'antd/dist/antd.css';

function New({product}) {
    return (
        <div className="new">
            <div className="image">
                <img className="image_item" src={`../img/${product.id}.png`} />
            </div>
            <div className="title">
                <h2>{product.title}</h2>
            </div>
            <div className="desc">
                <p>{product.desc}</p>
            </div>
            <div className="cost">
                <p >{product.cost}</p>
            </div>
        </div>
    )
}

export default New