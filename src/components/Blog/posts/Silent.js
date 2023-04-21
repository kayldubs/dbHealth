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

const Silent = () => {
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
            <Typography style={{ margin: "auto", textAlign:'center' }}>
              <h1 style={h1}>Silent Heart Attacks</h1>
              <h2 style={headerStyle}>
                What is a silent heart attack and how would a digital
                stethoscope help?
              </h2>
            </Typography>
          </div>
          <div>
            <p>
              Silent heart attacks, also known as silent myocardial infarctions
              (SMIs), are becoming increasingly common. According to a study
              conducted by the American Heart Association, approximately 45% of
              heart attacks are considered silent. This means that a patient may
              experience all of the symptoms of a heart attack, but they may not
              realize it or seek medical attention because they do not feel any
              pain. Digital stethoscopes can play a critical role in identifying
              these silent heart attacks and preventing future cardiac events.
            </p>
            <h3 style={headerStyle}>Symptoms of Silent Heart Attacks</h3>
            <p>
              Silent heart attacks may not cause the classic symptoms associated
              with a heart attack, such as chest pain or discomfort. Instead,
              symptoms may be vague or non-specific, such as shortness of
              breath, nausea, fatigue, or back pain. These symptoms can be
              easily attributed to other causes, such as indigestion or stress,
              which may cause patients to delay seeking medical attention.
            </p>
            <CardMedia
              component="img"
              alt="front facing angle of the digibeat remote stethoscope showcasing the volume control and power button"
              src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/0e2a513c-cc94-1a59-d88d-42892c6c3a87.jpeg"
              style={{
                display:'flex',
                margin:'auto',
                imageSize:'contain',
                padding:'10px'
              }}
            />
            <h3 style={headerStyle}>How Digital Stethoscopes Help</h3>
            <p>
              Digital stethoscopes can play a crucial role in detecting silent
              heart attacks by identifying abnormal heart sounds. During a heart
              attack, the heart muscle can become damaged, resulting in changes
              to the sound of the heartbeat. A digital stethoscope can pick up
              these changes in heart sounds and alert healthcare providers to
              the possibility of a heart attack, even if the patient is not
              experiencing any pain or discomfort.
            </p>
            <p>
              In addition, digital stethoscopes can record heart sounds for
              later analysis by healthcare providers. This can be especially
              helpful for patients who experience infrequent or mild symptoms of
              a heart attack, as the recordings can provide valuable information
              for diagnosis and treatment. By identifying silent heart attacks
              early, healthcare providers can take steps to prevent future
              cardiac events and improve patient outcomes.
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
            <p>
              Digital stethoscopes can also be used by patients to monitor their
              own heart sounds at home. This can be particularly useful for
              patients who are at high risk of a heart attack, such as those
              with a family history of heart disease or those with pre-existing
              conditions like high blood pressure or diabetes. By regularly
              monitoring their heart sounds, patients can catch any changes
              early and seek medical attention if necessary.
            </p>
            <p>
              In conclusion, silent heart attacks are a serious and often
              overlooked problem. With the increasing prevalence of SMIs, it is
              more important than ever to use tools like digital stethoscopes to
              detect early warning signs of a heart attack. By identifying SMIs
              early, healthcare providers can take steps to prevent future
              cardiac events and improve patient outcomes. Additionally,
              patients can use digital stethoscopes to monitor their own heart
              sounds and take an active role in managing their heart health.
            </p>
            <Link variant="subtitle1" href="#"></Link>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default Silent;
