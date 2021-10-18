import React from "react"
import "./product.css";

function Product({product, index, onClick, style}) {
    return (
        <tr style={{...style, textDecoration: product.checked ? 'line-through' : 'none'}}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.count}</td>
            <td className="actions">
                <input className="checkbox" onClick={()=>onClick(index, 'line-through')} type="checkbox"/>
                <button onClick={()=>onClick(index, 'delete')}>Удалить</button>
            </td>
        </tr>
    )
}

export default Product