import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,    
    border: '1px solid cyan'
  },
  media: {
    height: 30,
    paddingTop: '28%',
    borderRadius: '50%',
    margin: '8px'
},
});
const Comment = (props) => {
    const {name, email, body, id} = props.comment;
    const classes = useStyles();
    const [photo, setPhoto] = useState({});
    
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}?url`;
        fetch(url)
        .then(res => res.json())
        .then( data => setPhoto(data))
    }, [])
    
    return (
        <div style={{float:"left", width:"40%", margin:"5px"}}>
            <Card className={classes.root}>
                <CardActionArea> 
                
                <CardMedia
                    className={classes.media}
                    image={photo.url}
                    title="Contemplative Reptile"
                />                   
                    <CardContent>                                                
                        <p>Comment no: {id} </p>                                           
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {email}
                        </Typography>
                        <p>{body}</p>
                        
                    </CardContent>
                </CardActionArea>                
            </Card>
        </div>
    );
};

export default Comment;