import React from "react";
import Box from "@mui/material/Box";
import { Container, CardMedia, Paper, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Header from "../Header";
import { Button } from "react-bootstrap";
import { useState } from "react";

const sections = [
  { title: "Technology", url: "/blog/technology" },
  { title: "Cardiology", url: "/blog/cardiology" },
  { title: "Remote Monitoring", url: "/blog/remotemonitoring" },
  { title: "Science", url: "/blog/science" },
  { title: "Health", url: "/blog/health" },
  { title: "Life Style", url: "/blog/lifestyle" },
  { title: "Back to Blog Home", url: "/blog" },
];

const headerStyle = {
  color:'var(--midBlue)'
}

const h1 = {
  marginBottom:'35px', 
  color:'var(--greyBlue)'
}

const DigiBeatInt = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const btnStyle = {
    textDecoration: "none",
    borderRadius: "10px",
    borderColor: "transparent",
    backgroundColor: isHover ? "rgb(106,138,175)" : "rgb(39,170,225)",
  };
  return (
    <Container>
      <Box style={{ padding: "50px 50px" }}>
        <Header title="Blog" sections={sections} />
        <Card
          style={{
            diplay: "flex",
            justifyContent: "left",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
            }}
          >
            <Typography style={{ margin: "auto" }}>
              <h1 style={h1}>
                Why Cardiologist should integrate DigiBeat's Digital Stethoscope
                into their Practices
              </h1>
              <h2 style={headerStyle}>
                Learn the technological, patient, and economic benefits of the
                DigiBeat stethoscope.
              </h2>
            </Typography>
          </div>
          <div>
            <p>
              Wireless stethoscopes have been around for quite some time now,
              revolutionizing the way doctors listen to heart and lung sounds.
              With advancements in technology, wireless stethoscopes are now
              being integrated with artificial intelligence (AI), providing
              numerous benefits to doctors and patients alike. In this blog
              post, we'll explore the advantages of AI-integrated wireless
              stethoscopes.
            </p>
            <h3 style={headerStyle}>1. Improved Accuracy of Diagnoses</h3>
            <p>
              With the help of AI, wireless stethoscopes can provide more
              accurate diagnoses by analyzing heart and lung sounds in
              real-time. AI algorithms can identify subtle changes in sound
              patterns that may be indicative of underlying health conditions.
              By alerting doctors to these changes, AI-integrated wireless
              stethoscopes can help doctors make more accurate diagnoses,
              leading to better treatment outcomes.
            </p>
            <CardMedia
              component="img"
              alt="front facing angle of the digibeat remote stethoscope showcasing the volume control and power button"
              src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/a75fff64-f626-ec7c-082c-44935fef8eb3.jpg"
              style={{
                display:'flex',
                margin:'auto',
                imageSize:'contain',
                padding:'10px'
              }}
            />
            <h3 style={headerStyle}>2. Remote Patient Monitoring</h3>
            <p>
              With the ability to wirelessly transmit data, AI-integrated
              wireless stethoscopes can be used for remote patient monitoring.
              Patients can wear the stethoscope at home and transmit their heart
              and lung sounds to their doctor, who can then analyze the data and
              make informed decisions about their treatment plan. This feature
              is especially useful for patients who live in remote areas or have
              limited mobility.
            </p>
            <h3 style={headerStyle}>3. Better Patient Experience</h3>
            <p>
              Traditional stethoscopes can be uncomfortable for patients,
              especially those with chest hair or sensitive skin. Wireless
              stethoscopes are more comfortable, and with the integration of AI,
              doctors can diagnose patients quickly and with greater accuracy.
              Patients no longer need to visit the doctor's office for a basic
              check-up, and this can help reduce the overall cost of healthcare.
            </p>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: "grey.200",
                display: "flex",
                alignContent: "center",
                flexDirection: "column",
                m: 3,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Interested In Learning More About DigiBeat?
              </Typography>
              <Button
                href="/contactForm"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={btnStyle}
              >
                Sign Up
              </Button>
            </Paper>
            <h3 style={headerStyle}>4. Advanced Analytics</h3>
            <p>
              AI-integrated wireless stethoscopes can analyze a large amount of
              data from multiple patients, allowing doctors to identify patterns
              that may be indicative of larger health issues. This can help with
              early detection of health conditions and allow for more targeted
              treatment plans.
            </p>
            <h3 style={headerStyle}>5. Time-Saving</h3>
            <p>
              The AI-integration in wireless stethoscopes can also save time for
              doctors by eliminating the need for them to listen to every heart
              and lung sound individually. The AI algorithms can filter out
              irrelevant sounds, such as background noise, and focus on the
              important sounds. In conclusion, AI-integrated wireless
              stethoscopes provide numerous benefits, including improved
              accuracy of diagnoses, remote patient monitoring, a better patient
              experience, advanced analytics, and time-saving. As AI continues
              to evolve, we can expect to see even more benefits from its
              integration with wireless stethoscopes, making healthcare more
              efficient and effective for doctors and patients alike.
            </p>
            <Link variant="subtitle1" href="#"></Link>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default DigiBeatInt;
