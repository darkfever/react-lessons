import React, { useState } from "react"
import ProductsList from "../../components/products-list"
import Total from "../../components/total"

function Products() {
    const [products, setProducts] = useState([
        {name: 'apple', price: 25, count: 3, checked: false},
        {name: 'pear', price: 28, count: 4, checked: false},
        {name: 'lemon', price: 15, count: 7, checked: false},
        {name: 'watermelon', price: 55, count: 9, checked: false},
        {name: 'melon', price: 23, count: 8, checked: false},
        {name: 'pumpkin', price: 18, count: 10, checked: false},
        {name: 'banana', price: 19, count: 6, checked: false},
        {name: 'оrange', price: 20, count: 13, checked: false},
        {name: 'dumpling', price: 550, count: 100, checked: false},
    ])
    const style = {
        fontSize: '24px'
    }
    const onClick = (index, action) => {
        if(action === 'delete'){
            let newproducts = products.filter((item, i) => i !== index)
            setProducts(newproducts)
        } else {
            let newproducts = [...products]
            newproducts[index].checked = !newproducts[index].checked
            setProducts(newproducts)
        }
        
    }
    const items = products.filter(item => item.checked === false)
    let total = 0
    items.map(item => {
        total += item.price
    })
    console.log(total)
    return (
        <>
        <ProductsList products={products} onClick={onClick} style={style}/>
        <Total total={total}/>
        </>
    )
}

export default Products