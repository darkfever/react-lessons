import axios from "axios"
import React, { useEffect, useState } from "react"
import { Button, Card, Modal, Input } from 'antd'
import { Link } from "react-router-dom"

function PostDetails(props) {
    const [post, setPost] = useState([])
    const [postItem, setPostItem] = useState({
        title: '',
        body: '',
    })
    const [comments, setComments] = useState([])
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
        axios.get(URL).then(res => setPost(res.data)).catch(err => console.log(err))

        const URL1 = `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}/comments`
        axios.get(URL1).then(res => setComments(res.data)).catch(err => console.log(err))
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
    const [isModalVisible, setIsModalVisible] = useState(false)
    const onClick = () => {
        setIsModalVisible(true)
    }
    const onChange = (e) => {
        setPostItem({ ...postItem, [e.target.name]: e.target.value })
    }
    const handleCancel = () => {
        setIsModalVisible(false)
        // clear()
    }
    const handleOk = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {...postItem, userId: 1}).then(res => console.log(res.data)).catch(err => console.log(err))
        handleCancel()
    }
    return (
        <div>
            <Button type="primary" onClick={onClick}>Add post</Button>
            <br/>
            {post.title}
            <hr/>
            {commentsList}
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input name="title" value={postItem.title} placeholder="Title" onChange={onChange} />
                <Input name="body" value={postItem.body} placeholder="Body" onChange={onChange} />
            </Modal>
        </div>
    )
}

export default PostDetails