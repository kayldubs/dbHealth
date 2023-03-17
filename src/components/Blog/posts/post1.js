import React from "react";
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

function Post1() {
    return (
        <Container>
            <Box className='top-box'>
            <Typography>
                <h1>Title of Main Post</h1>
            </Typography>
            </Box>
            <Card style={{margin:'10px'}}>
            <Typography style={{padding:'10px'}}>
                <h2 className='question'>Subheader of main article</h2>
                <p className='answer'>Body of main article</p>
            </Typography>
            </Card>
            <Link variant="subtitle1" href="#">
            </Link>
        </Container>
    );
}

export default Post1;