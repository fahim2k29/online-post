import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect( () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h1>Post Loaded: {post.length}</h1>
            <ul>
                {
                    post.map(post => <Post post={post}></Post>)
                }
            </ul>
        </div>
    );
};

export default Home;