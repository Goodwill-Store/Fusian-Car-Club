import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Accept post data as props
const BlogPost = ({ post }) => {

    return (
        <Card sx={{
            display: 'flex',
            width: '80%',
            mb: 3,
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <CardContent sx={{ flex: '1' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title} {/* Display post title */}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post.body} {/* Display post description */}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    Author: {post.author}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BlogPost;
