import React, { useState } from "react"
// import "./list.css";

function ListItem({list, onChange, onClick, index}) {
    return (
       <tr>
            <td style={{ textDecoration: list.checked ?  'line-through' : 'none'}}>{list.id}</td>
            <td style={{ textDecoration: list.checked ?  'line-through' : 'none'}}>{list.title}</td>
            <td style={{ textDecoration: list.checked ?  'line-through' : 'none'}}>{list.description}</td>
            <td>
                <input type="checkbox" onChange={()=>onChange(index)}/>
            </td>
            <td>
                <button onClick={()=>onClick(index)}>Удалить</button>
            </td>
        </tr>
    )
}

export default ListItem