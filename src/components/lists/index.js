import React, { useState } from "react"
import ListItem from "../list-item"
// import "./list.css";

function Lists({lists, onChange, onClick}) {

    const arrlist = lists.map((item, i) => <ListItem key={i} list={item} onChange={onChange} onClick={onClick} index={i}/>
    )

    return (
        <table className="customers">
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>checked</th>
                <th>action</th>
            </tr>
            {arrlist}
        </table>
    )
}

export default Lists