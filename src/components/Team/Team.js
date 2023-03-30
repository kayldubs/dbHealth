// import Button from '@mui/material/Button';
import { Card, Grid } from "@mui/material";
//import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import CssBaseline from '@mui/material/CssBaseline';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import Link from '@mui/material/Link';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import CardHeader from '@mui/material/CardHeader';
import { useState } from "react";
//import animation framework
//import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./mediaQueries.css";

import winston from "../../assests/imgs/winston.svg";
import cliff from "../../assests/imgs/cliff.svg";
import karll from "../../assests/imgs/karl.svg";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 310,
      sm: 768,
      md: 900,
      lg: 1024,
      xl: 1201,
    },
  },
});

export default function Team() {
  return (
    <Container disableGutters>
      <Grid
        container
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "center",
        }}
        alignItems={{
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "center",
        }}
        className="topEmpGrid"
        flexWrap="nowrap"
      >
        <Card class="media1">
          <CardMedia
            component="img"
            image={winston}
            alt="Doctor Winston T. Richards, founder of DigiBeat and CMO."
            style={{
              height: "300px",
              width: "300px",
              marginLeft: "50px",
            }}
          />
          <CardContent>
            <div className="flex-container" alignItems="center">
              <Typography variant="h5" component="h2" align="center">
                Winston T. Richards, MD
              </Typography>
              <Typography align="center">CMO</Typography>

              <Typography
                style={{
                  width: "350px",
                  flexWrap: "nowrap",
                  height: "0px",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
                className="text"
              >
                Winstons is a practicing surgeon located in North Central
                Florida with a background in medicine, applied mathematics, and
                electrical engineering from Penn State University and Princeton
                University. Winston continued on to be a key investigator in 37
                research trials raising over $600k in sponsored notices of
                awards(NOA). He has over 20 years experience as a practicing ER
                surgeon. 21 medical publications, experience as an assistant
                dean at University of Florida, and a vast network of key medical
                decision makers and practitioners. Winston’s credentials not
                only allowed him to see a better future for the medical
                industry; but he was able to conceptualize the first DigiBeat
                stethoscope and continues its development to surpass current
                medical standards.
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card class="media2">
          <CardMedia
            component="img"
            image={cliff}
            alt="Clifford Steele CEO of DigiBeat"
            style={{
              height: "300px",
              width: "300px",
              flexWrap: "nowrap",
              marginLeft: "40px",
            }}
          />
          <CardContent>
            <div className="flex-container" alignItems="center">
              <Typography variant="h5" component="h2" align="center">
                Clifford Steele
              </Typography>
              <Typography align="center">CEO</Typography>

              <Typography
                style={{
                  width: "350px",
                  flexWrap: "nowrap",
                  height: "0px",
                  textAlign: "center",
                  marginLeft: "0px",
                }}
                className="text"
              >
                Cliffords earned his aerospace engineering degree from Embry
                Riddle aeronautical university while working in the skydiving
                industry developing and testing parachute equipment. He
                co-founded a product development firm that provided clients:
                design, engineering, and manufacturing/assembly services to
                bring their ideas to market. Through this experience he raised
                capital, built teams, and developed internal IP, on over 30
                products that are currently sold through various e-commerce and
                big box stores. Cliff gained two years experience in the medical
                device design and manufacturing field from his contract work at
                Philips healthcare. There he launched new MRI coils from design
                through production and validation.
              </Typography>
            </div>
          </CardContent>
        </Card>
        <Card class="media3">
          <CardMedia
            component="img"
            image={karll}
            alt="Karl Dockendorf, CTO of DigiBeat"
            style={{
              height: "300px",
              width: "300px",
              marginLeft: "40px",
            }}
          />
          <CardContent>
            <div className="flex-container" alignItems="center">
              <Typography variant="h5" component="h2" align="center">
                Karl Dockendorf
              </Typography>
              <Typography align="center">CTO</Typography>

              <Typography
                style={{
                  width: "350px",
                  flexWrap: "wrap",
                  height: "0px",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
                className="text"
              >
                Karl earned both electrical and computer engineering degrees
                before following up with his Ph.D. in biomedical engineering
                (neural engineering) from the University of Florida. Karl has
                broad computer vision, machine learning, cloud, embedded device,
                and IP protection experience with a long history of funding,
                executing, and achieving goals in self-directed projects like,
                DARPA programs, and at startups. As part of Paracosm over $5M
                was raised and he was also Principal Investigator for winning a
                $17M DARPA ML proposal. Otherwise he has 5 patents, 7
                publications, and continues his own projects to advance
                technology. Karl’s extensive knowledge, especially with training
                data, allows him to guide
                DigiBeat to be able to bring a traditional stethoscope into our
                modern age.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
