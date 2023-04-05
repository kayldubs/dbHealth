import React from "react";
import Box from '@mui/material/Box';
import { CardMedia, Container } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import summary from "../../assests/imgs/ExecutiveSummary.jpg"


export default function ESummary() {

    return (
        <Container>
            <Box>
            <Typography>
                <h1 className="header-text">Executive Summary</h1>
            </Typography>
            </Box>
            <Card className='questions-section'>
            <CardMedia
            component="img"
              alt="heart with connections to DigiBeat Logo"
              image={summary}
              spacing={{xs: 1}}
            />
            </Card>
            <Link variant="subtitle1" href="#">
            </Link>
        </Container>
    );
}
