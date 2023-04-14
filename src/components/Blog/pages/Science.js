import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { ScienceData } from './PageData';
import { Paper, Box, Container, Button, Stack } from '@mui/material';
import Header from '../Header';

const sections = [
    { title: "Technology", url: "/blog/technology" },
    { title: "Cardiology", url: "/blog/cardiology" },
    { title: "Remote Monitoring", url: "/blog/remotemonitoring" },
    { title: "Science", url: "/blog/science" },
    { title: "Health", url: "/blog/health" },
    { title: "Life Style", url: "/blog/lifestyle" },
];

function Science() {
    return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Science Blog
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Explore articles about DigiBeat and other medical technologies.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href='/blog'>Back to main blog</Button>
            </Stack>
            <Header title="Blog" sections={sections} />
          </Container>
      <Paper item xs={12} md={6} 
        style={{
            display:'flex',
            flexDirection:'row',
            margin: '50px',
            flexWrap:'wrap',
            justifyContent:'center'
        }}
      >
        {ScienceData.map((post, index) => {
            return (
          <Card sx={{ display: 'flex', margin:'20px', maxWidth:'450px' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Link to={post.link} variant="subtitle1" color="primary">
                Continue reading...
              </Link>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              image={post.image}
              alt={post.imageLabel}
            />
          </Card>
           )
        })}
      </Paper>
      </Box>
    );
  }

export default Science;