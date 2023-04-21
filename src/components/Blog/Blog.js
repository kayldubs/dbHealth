import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';

const sections = [
  { title: "Technology", url: "/blog/technology" },
  { title: "Cardiology", url: "/blog/cardiology" },
  { title: "Remote Monitoring", url: "/blog/remotemonitoring" },
  { title: "Science", url: "/blog/science" },
  { title: "Health", url: "/blog/health" },
  { title: "Life Style", url: "/blog/lifestyle" },
];

const mainFeaturedPost = {
  title: "A Brief Overview of DigiBeat's Digital Stethoscope",
  description:
    "This article will expolore the reasons and features that make our digital stethoscope the best choice for the future of medicine",
  image: 'https://mcusercontent.com/f78a01ed120667028e9e65574/images/a6a2b96f-6aba-25b3-534a-6a0946c3f6cf.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title:
      "Benefits of Integrating Artificial Intelligence into Wireless Stethoscopes",
    date: "April 8",
    description:
      "Explore the benefits of Artificial Intelligence and how it will aid the future of medicine.",
    image:
      "https://mcusercontent.com/f78a01ed120667028e9e65574/images/9c68735c-2761-0179-8204-191283a7b571.jpeg",
    imgLabel:
      "Nodes showing connection between heart and body using artificial intelligence",
    url: "/blog/aibenefits",
  },
  {
    title: "1…2…3 and DONE it's that easy to use your DigiBeat Digital Stethoscope - Ara at home.",
    date: 'April 13',
    description:
      'Step by step guide on how to use DigiBeat to improve your heart health',
    image: 'https://mcusercontent.com/f78a01ed120667028e9e65574/images/66bc72a6-e7c4-4221-4b9f-53eb626900f8.png',
    imageLabel: 'Image Text',
    url:'/blog/athomeuse'
  },
];

const sidebar = {
  title: 'About Our Blog',
  description:
    "Here you will find everything you need to know about DigiBeat's portable and wireless technology, how it improve heart disease prevention, benefits of incorporating this device into your caridology practices, and much more general health information.",
  social: [
    // { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon, url:"https://twitter.com/DigiBeatHealth" },
    { name: 'LinkedIn', icon: LinkedInIcon, url:"https://www.linkedin.com/company/digibeat-health/" },
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
              <FeaturedPost key={post.title} post={post}/>
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
              url={sidebar.url}
            />
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}