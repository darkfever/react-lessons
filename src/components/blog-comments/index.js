import axios from "axios"
import React, { useEffect, useState } from "react"
import { Card } from 'antd'

function BlogComments(props) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}/comments`
        axios.get(URL).then(res => setComments(res.data)).catch(err => console.log(err))
    }, [])
    const commentsList = comments.map((item, i) => {
        return (
            <Card style={{ display: 'flex', flexWrap: 'wrap' }} title={item.id} extra={
                <div>
                <span>{item.postid}</span>
            </div>} style={{ width: 300 }}>
                <p>{item.body}</p>
            </Card>
        )
    })
    return (
        <div>
            {commentsList}
        </div>
    )
}

export default BlogComments