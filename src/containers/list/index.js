import React, { useState } from "react"
import "./list.css";

function List() {
    const [arr, setArr] = useState([
        {id: 0, title: 'Maria Anders', description: 'Germany', style: {}},
        {id: 1, title: 'Christina Berglund', description: 'Sweden', style: {}},
    ])
    const onChange = (event) => {
        if(event.target.checked){
            let newarr = [...arr]
            newarr[event.target.id].style = {textDecoration: 'line-through'}
            setArr(newarr)
        } else {
            let newarr = [...arr]
            newarr[event.target.id].style = {}
            setArr(newarr)
        }
    }
    const arrlist = arr.map((item, i) => 
        <tr key={i}>
            <td style={item.style}>{item.id}</td>
            <td style={item.style}>{item.title}</td>
            <td style={item.style}>{item.description}</td>
            <td>
                <input type="checkbox" id={item.id} onChange={onChange}/>
            </td>
        </tr>
    )

    return (
        <table className="customers">
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>checked</th>
            </tr>
            {arrlist}
        </table>
    )
}

export default List