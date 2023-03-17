import React from "react";
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";



const Post1 = () => {

    return (
        <Container>
            <Box className='top-box'>
            <Typography>
                <h1>Main Post title</h1>
            </Typography>
            </Box>
            <Card>
            <Typography>
                <h2 className='question'>SubHeader</h2>
                <p className='answer'>Article Body</p>
            </Typography>
            </Card>
            <Link variant="subtitle1" href="#">
            </Link>
        </Container>
    );
}


export default Post1;