import React, { useState } from "react"
import "./header.css";

function Header() {
    const [isAuth, setAuth] = useState(false);
    const onClick = () => {
        setAuth(!isAuth)
    }

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