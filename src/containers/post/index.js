import React, { useEffect, useState } from "react"
import axios from "axios"
import Blogs from "../../components/blogs"
import { Button, Modal, Input } from 'antd'

function Post() {
    const [posts, setPosts] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    const [blog, setBlog] = useState({
        title: '',
        body: '',
        id: '',
    })
    useEffect(() => {
        const URL = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(URL).then(res => setPosts(res.data)).catch(err => console.log(err))
    }, [])
    const openEditModal = (blog, index) => {
        setIsEditModalVisible(true)
        setBlog(blog)
        setEditIndex(index)
    }
    const handleEditCancel = () => {
        setIsEditModalVisible(false)
        clear()
    }
    const handleEdit = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${blog.id}`, { ...blog, userId: 1}).then(res => console.log(res)).catch(err => console.log(err))
        posts.splice(editIndex, 1, blog)
        setPosts([...posts])
        handleEditCancel()
    }
    const onChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value })
    }
    
    const clear = () => {
        setBlog({ title: '', body: ''})
    }
    return (
        <div>
            <Blogs blogs={posts} openEditModal={openEditModal}/>
            <Modal title="Basic Modal" visible={isEditModalVisible} onOk={handleEdit} onCancel={handleEditCancel}>
                <Input name="title" value={blog.title} placeholder="Title" onChange={onChange} />
                <Input name="body" value={blog.body} placeholder="Body" onChange={onChange} />
            </Modal>
        </div>
    )
}

export default Post