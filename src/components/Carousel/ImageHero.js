import React, { useState, useEffect } from 'react';
import { HeroData } from './HeroData';
import { BsDashLg } from 'react-icons/bs';
import './slider.css';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';



const ImageHero = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 15000;

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [current])

    const nextSlide = () => {
        const isLastSlide = current === slides.length - 1;
        const newCurrent = isLastSlide ? 0 : current + 1;
        setCurrent(newCurrent)
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return;
    }

    const goToSlide = slideIndex => {
        setCurrent(slideIndex);
    }

    return (
        <Container className='everything'>
        <Grid>
            <div className='text-hero'>
                <h1 className="top-text">The World's Most</h1>
                {HeroData.map((header, index) => {
                    return (
                        <div className={index === current ? 'text active' : 'text'} key={index} >
                            {index === current && (
                                <Grid>
                                    <h1 className='top-content'>{header.header}</h1>
                                    <h1 className="top-text">Electronic Stethoscope</h1>
                                </Grid>
                            )}
                        </div>
                    )
                },
                )
                }
                

            </div>
            </Grid>
            <Grid className='hero-icons' rowSpacing={{xs: 4}}>
                {HeroData.map((pictures, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <Grid container className="hero-container">
                                    <img src={pictures.image} alt="Hero IMG" className='hero-image' />
                                    <Grid item direction='column'  
                                    className='content'>
                                        <h1 className='contentHeading'>{pictures.heading}</h1>
                                        <hr className='line'></hr>
                                        <p className='tag'>{pictures.desc}</p>
                                    </Grid>
                                </Grid>
                            )}
                        </div>
                    )
                })}
            </Grid>
            <Grid className='buttons'>
                {slides.map((slides, slideIndex) => (
                    <BsDashLg key={slideIndex} className='buttons-style' size={90} onClick={() => goToSlide(slideIndex)}/>
                ))}
            </Grid>
     </Container>
    )
};

export default ImageHero;