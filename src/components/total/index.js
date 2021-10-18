import React from "react"
import "./total.css";

function Total({total}) {

    return (
        <div className="total">
            <label>Общая сумма: {total}</label>
        </div>
    )
}

export default Total