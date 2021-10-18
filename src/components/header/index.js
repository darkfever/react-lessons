import React from "react"
import "./header.css";

function Header(props) {

    const {isAuth, onClick} = props;
    console.log(isAuth)

    return (
        <div className="header">
            <div className="title">
                <h3>New & Notable</h3>
            </div>
            <div className="auth">
                {isAuth ? <div className="profile">
                    <button className="enter" onClick={onClick}>Профиль</button>Seysembay Beket
                </div> : <div className="">
                    <button className="enter" onClick={onClick}>Войти</button>
                    </div>}
            </div>
        </div>
    )
}

export default Header