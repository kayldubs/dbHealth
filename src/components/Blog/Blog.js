import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';
// import Footer from './Footer';
//import Post1 from './posts/post1.js';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const sections = [
  { title: 'Technology', url: '/blog/technology' },
  { title: 'Cardiology', url: '#' },
  { title: 'Remote Monitoring', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Life Style', url: '' }
];

const mainFeaturedPost = {
  title: "In Depth Analysis and Purpose of DigiBeat's Digital Stethoscope",
  description:
    "This article will expolore the reasons and features that make our digital stethoscope the best choice for the future of medicine",
  image: 'https://mcusercontent.com/f78a01ed120667028e9e65574/images/a6a2b96f-6aba-25b3-534a-6a0946c3f6cf.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: "Heart Disease Frequently Asked Questions. Answered by DigiBeat's Dr.Richards",
    date: 'April 12',
    description:
      "Heart Disease is common amoung American's, with this there is endless information available. Here is what you need to know.",
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: "Why Cardiologist should integrate DigiBeat's Digital Stethoscope into their practices",
    date: 'April 13',
    description:
      'Explore the technological, patient, and economic benefits of the DigiBeat stethoscope',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

//const posts = [Post1 
    //post2, post3
//];

const sidebar = {
  title: 'About Our Blog',
  description:
    "Here you will find everything you need to know about DigiBeat's portable and wireless technology, how it improve heart disease prevention, benefits of incorporating this device into your caridology practices, and much more general health information.",
  social: [
    // { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    // { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" padding="50px">
        <main style={{padding:'50px 50px'}}>
        <h1 title="Blog" sections={sections} style={{fontFamily:'Expletus Sans', textAlign:'center', fontSize:'3rem', marginBottom:'50px'}}>BLOG</h1>
        <Header title="Blog" sections={sections} />
          <MainFeaturedPost post={mainFeaturedPost} style={{paddingTop:'50px'}} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Most Recent From DigiBeat"
                style={{fontFamily:'Expletus Sans', textAlign:'center'}} 
             />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}