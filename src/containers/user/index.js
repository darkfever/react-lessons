import React, { useState } from "react"
import "./user.css";

function User() {
    const [users, setUsers] = useState([
        {id: 0, name: 'Zhanerke', years: 25},
        {id: 1, name: 'Zhansaya', years: 28},
        {id: 2, name: 'Erbolat', years: 15},
        {id: 4, name: 'Alihan', years: 55}
    ])
    const onClick = (event) => {
        if(event.target.name === 'age'){
            const byAge = [...users].sort((a, b) => {
                return a.years - b.years
            })
            setUsers(byAge)
        } else {
            const byName = [...users].sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
            });
            setUsers(byName)
        }
    }
    const userslist = users.map((item, i) => 
        <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.years}</td>
        </tr>
    )
    
    return (
        <div>
            <button className="enter" name="age" onClick={onClick}>по возрасту</button>
            <button className="enter" name="name" onClick={onClick}>по имени</button>
            <table className="customers">
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>years old</th>
                </tr>
                {userslist}
            </table>
        </div>
    )
}

export default User