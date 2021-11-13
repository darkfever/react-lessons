import React, { useState } from "react"
import BlogItem from "../blog-item"

function Blogs({blogs, onDelete, openEditModal}) {
    const blogItems = blogs.map((item, i) => <BlogItem blog={item} key={i} index={i} onDelete={onDelete} openEditModal={openEditModal}/>)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '28px'}}>
            {blogItems}
        </div>
    )
}

export default Blogs