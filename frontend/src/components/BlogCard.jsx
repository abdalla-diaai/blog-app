import React from "react";
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
    let content = blog.content.substring(0, 100) + " ....";
    return (
        <div className="col-span-1 flex flex-col bg-white border-2 p-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{blog?.title}</h5>


            <p className="mb-3 font-normal text-gray-700">
                {content}
            </p>
            <div className="flex flex-wrap mt-auto pt-3 text-xs">
                <Link to={`blogs/${blog.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;