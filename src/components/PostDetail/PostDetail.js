import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {pstId} = useParams();
    const [comment, setComment] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${pstId}`;        
        fetch(url)
        .then( res => res.json())
        .then(data => setComment(data))
    }, [])  
    
    return (
        <div>
            <h2>This is Post: {pstId}</h2>
            <h5>{comment.length} Comments Below</h5>
            <ul>
                {
                    comment.map(comment => <Comment comment={comment}></Comment> )
                }
            </ul>
            
        </div>
    );
};

export default PostDetail;