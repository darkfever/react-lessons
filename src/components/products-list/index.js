import React from "react"
import Product from "../product"

function ProductsList({products, onClick, style}) {
    const productlist = products.map((item, i) => <Product product={item} onClick={onClick} style={style} index={i}/>)
    return (
        <div>
            <table className="customers">
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>count</th>
                    <th>actions</th>
                </tr>
                {productlist}
            </table>
        </div>
    )
}

export default ProductsList