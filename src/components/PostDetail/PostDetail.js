import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {pstId} = useParams();
    const [comment, setComment] = useState([]);
    const [photo, setPhoto] = useState({});    
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${pstId}`;        
        fetch(url)
        .then( res => res.json())
        .then(data => setComment(data))
    }, [])
   
    
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/photos/${pstId}?url`;
        fetch(url)
        .then(res => res.json())
        .then( data => setPhoto(data))
    }, [])
    
    return (
        <div>
            <h2>This is Post: {pstId}</h2>
            <h5>{comment.length} Comments Below</h5>
           
            <ul>
                {
                    comment.map(comment => <Comment comment={comment} photo={photo}></Comment> )
                }
            </ul>
            
        </div>
    );
};

export default PostDetail;