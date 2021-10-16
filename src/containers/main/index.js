import React from "react"
import "./main.css";
import News from "../../components/news";
import Header from "../../components/header";

function Main() {
    return (
        <div className="main">
            <Header/>
            <News/>
        </div>
    )
}

export default Main