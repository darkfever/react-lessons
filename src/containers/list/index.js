import React, { useState } from "react"
import "./list.css";
import Lists from "../../components/lists";

function List() {
    const [arr, setArr] = useState([
        {title: 'Maria Anders', description: 'Germany', checked: false},
        {title: 'Christina Berglund', description: 'Sweden', checked: false},
    ])
    const onChange = (index) => {
        let newarr = [...arr]
        newarr[index].checked = !newarr[index].checked
        setArr(newarr)
       
    }
    const onClick = (index) => {
        let newarr = arr.filter((item, i) => i !== index)
        setArr(newarr)
    }

    return (
        <Lists lists={arr} onChange={onChange} onClick={onClick}/>
    )
}

export default List