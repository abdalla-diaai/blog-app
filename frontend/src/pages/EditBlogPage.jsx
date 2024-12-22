import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom"; 


function EditBlogPage( { updateBlog } ) {
    const { slug } = useParams();
    const [blog, setBlog] = useState({});
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/blogs/${slug}/`)
            .then(res => {
                console.log(res.data)
                setBlog(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const updatedBlog = {
        title: title,
        content: content
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBlog(slug, updatedBlog);
        navigate(`/blogs/${ slug }`);

        console.log(updatedBlog);
    };

    return (
        <div className="flex justify-center items-center h-screen mt-10 border-purple-900">
            <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                <p className="text-2xl mb-4 text-center font-semibold">Edit Blog</p>
                <div className="mb-8">
                    <label htmlFor="input" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        id="input"
                        value={title}
                        className="border-2 border-purple-900 rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your input"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-8">
                    <label htmlFor="textarea" className="block text-gray-700 text-sm font-bold mb-2">Body</label>
                    <textarea
                        id="textarea"
                        value={content}
                        className="border-2 border-purple-900 rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
                        rows="6"
                        placeholder="Enter your message"
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBlogPage;