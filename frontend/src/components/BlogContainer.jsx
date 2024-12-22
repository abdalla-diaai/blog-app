import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import Spinner from "./Spinner";

function BlogContainer() {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/blogs/recent/')
            .then(res => {
                console.log(res.data)
                setBlogs(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])

    return (
        <div className="container mx-auto p-6 grid grid-cols-2 gap-4">
            {loading ? <Spinner /> : false}
            {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
        </div>
    );
};

export default BlogContainer;