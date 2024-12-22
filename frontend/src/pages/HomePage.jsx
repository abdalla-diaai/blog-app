import React from "react";
import Jumbotron from "../components/Jumbotron";
import BlogHeading from "../components/BlogHeading";
import BlogContainer from "../components/BlogContainer";


function HomePage() {
    return (
        <div>
            <Jumbotron />
            <BlogHeading />
            <BlogContainer />
        </div>
    );
};

export default HomePage;