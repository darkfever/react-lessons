import React, { useState } from "react"
import { Card, Button } from 'antd'
import { Link } from "react-router-dom"

function BlogItem({blog, index, onDelete, openEditModal}) {
    
    return (
        
            <Card title={blog.title} extra={<div>
                <span>{blog.view}</span>
                <Button onClick={()=>{onDelete(index)}}>Delete</Button>
                <Button onClick={()=>{openEditModal(blog, index)}}>Edit</Button>
            </div>} style={{ width: 300 }}>
            <Link to={`/post/${blog.id}`}>
                <p>{blog.body}</p>
            </Link>
            </Card>
    )
}

export default BlogItem