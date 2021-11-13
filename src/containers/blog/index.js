import React, { useState } from "react"
import Blogs from "../../components/blogs"
import { Button, Modal, Input } from 'antd'

function Blog() {
    const [blogs, setBlogs] = useState([
        {
            title: "Blog 1",
            desc: "Blog 1 desc",
            view: 100
        },
        {
            title: "Blog 2",
            desc: "Blog 2 desc",
            view: 80
        },
        {
            title: "Blog 3",
            desc: "Blog 3 desc",
            view: 80
        },
    ])
    const [blog, setBlog] = useState({
        title: '',
        desc: '',
        view: '',
    })
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    const [editIndex, setEditIndex] = useState(null)
    const openModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        setBlogs([...blogs, blog])
        handleCancel()
    }
    const handleCancel = () => {
        setIsModalVisible(false)
        clear()
    }
    const onChange = (e) => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }
    const onDelete = (index) => {
        let newblogs = blogs.filter((item, i) => i != index)
        setBlogs(newblogs)
    }
    const clear = () =>{
        setBlog({title: '', desc: '', view: ''})
    }
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
        blogs.splice(editIndex, 1, blog)
        setBlogs([...blogs])
        handleEditCancel()
    }
    const search = (event) => {
        if(event.target.value.length == 0){
            console.log(event.target.value.length)
            console.log([...getDefaultValue()])
            setBlogs([...getDefaultValue()])
        } else {
            let newblogs1 = [...blogs];
            let newblogs = newblogs1.filter((item, i) => item.title.toUpperCase().includes(event.target.value.toUpperCase()))
            setBlogs(newblogs)
        }
    }

    const getDefaultValue = () => {
        return [
            {
                title: "Blog 1",
                desc: "Blog 1 desc",
                view: 100
            },
            {
                title: "Blog 2",
                desc: "Blog 2 desc",
                view: 80
            },
            {
                title: "Blog 3",
                desc: "Blog 3 desc",
                view: 80
            },
        ]
    }
    return (
        <div>
            <Button type="primary" onClick={openModal}>Add blog</Button>
            <Input name="search" placeholder="Search" onChange={search} style={{width: '200px'}}/>
            <Blogs blogs={blogs} onDelete={onDelete} openEditModal={openEditModal}/>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input name="title" value={blog.title} placeholder="Title" onChange={onChange}/>
                <Input name="desc" value={blog.desc} placeholder="Description" onChange={onChange}/>
                <Input name="view" value={blog.view} placeholder="View" onChange={onChange}/>
            </Modal>
            <Modal title="Basic Modal" visible={isEditModalVisible} onOk={handleEdit} onCancel={handleEditCancel}>
                <Input name="title" value={blog.title} placeholder="Title" onChange={onChange}/>
                <Input name="desc" value={blog.desc} placeholder="Description" onChange={onChange}/>
                <Input name="view" value={blog.view} placeholder="View" onChange={onChange}/>
            </Modal>
        </div>
    )
}

export default Blog