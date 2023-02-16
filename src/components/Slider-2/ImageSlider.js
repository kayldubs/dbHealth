import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
//Material UI Imports 

import {Card, Grid} from '@mui/material';
//import Paper from '@mui/material/Paper';
// import { makeStyles } from '@material-ui/core/styles';

//css import 
import './slider2.css'



// const useStyles = makeStyles((theme) => ({
//     featureCard: {
//       fontSize:'40px', 
//       fontFamily:'Source San Pro, sans-serif',
//       fontWeight:'Bold',
//       paddingBottom: '50px',
//       display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign:'center',
//         textDecoration: 'underline',
//         textDecorationColor: '#6a8aaf',
//         maxWidth:'100%',
//         heght:'100%',
//         margin:'auto'
        
//     },
//     featureSubtext: {
//       paddingTop: '80px',
//       marginBottom: '200px',
//       maxWidth: '100%',
//       height: "100%",
//       textAlign:'center',
//       fontSize:'20px',
//       fontFamily:'Source San Pro, sans-serif',
//     },
//     keyFeatures: {
//         fontFamily:'Source San Pro, sans-serif',
//         fontWeight:'Bold',
//         fontSize:'36px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textDecoration: 'underline',
//         textDecorationColor: '#6a8aaf',
//         marginBottom: '30px'
//       }
// }))



const ImageSlider = ({ slides }) => {
    // const classes = useStyles();
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
};

  const prevSlide = () => {
      setCurrent(current === 0 ? length -1 : current -1);
};

if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
    <Grid container row={{xs: 2, sm: 1, lg: 1, xl: 1}} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 1, xl: 1}} alignItems='stretch'>
        <h1 className='featureCard'>The Future of Medical Examinations</h1>
        <Grid container justifyContent='center' alignItems='stretch' minWidth='100vw' row={{xs: 0, sm: 1, md: 12}} columnSpacing={{xs:1, sm: 1, md: 0}}>
      <Card className='col-lg-6 info-plane'>
        <div className='featureSub' item xs={12} sm={12} md={12} lg={12} xl={12} >
        <h2>DigiBeat's patented and intuitive design </h2>
        <p className='desc'>Using wireless technology, our stethescope brings your health and patient accessibility into the modern age.</p>
        <br></br>
        <h2>Optimized remote patient monitoring</h2>
        <p className='desc'>Never miss a beat with remote monitoring serving patients and providers alike.</p>
        <br></br>
        <h2>AI-Assisted detection of heartbeat abnormalities</h2>
        <p className='desc'>AI-powered diagnosis identifies risks and provides timely alerts of patient statistics in real-time.</p>
        <br></br>
        <h2>Modern features for seamless usage</h2>
        <p className='desc'>A reliable stethoscope with volume control, wireless connectivity, noise reduction, and dual streaming connection for accuracy.</p>
        </div>
      </Card>
      <br></br>
        <Card className='col-lg-6 slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index} >
                        {index === current && (
                            <img src={slide.image} alt='device angles' className='image'/>
                        )}
                </div>
                )
            })}
        </Card>
        </Grid>
        </Grid>
    )
}

export default ImageSlider
