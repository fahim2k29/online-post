import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: '1px solid cyan'
  }
});

const Post = (props) => {
    const {id,title} = props.post;
    const classes = useStyles();
    return (
        <div style={{float:"left",width:"30%", margin:"5px"}}>
            <Card className={classes.root}>
                <CardActionArea>                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {id}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`post/${id}`}>
                        <Button variant="contained" size="small" color="primary" >
                            Learn More
                        </Button>
                    </Link>
                </CardActions>
            </Card>

        </div>
    );
};

export default Post;