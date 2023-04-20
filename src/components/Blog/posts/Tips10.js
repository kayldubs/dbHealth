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
  color: "var(--midBlue)",
};

const h1 = {
  marginBottom: "35px",
  color: "var(--greyBlue)",
};
const Tips10 = () => {
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
            <Typography style={{ margin: "auto", textAlign: "center" }}>
              <h1 style={h1}>10 Tips for Living with Heart/Lung Disease</h1>
              <h2 style={headerStyle}>
                Your options when living with heart disease.
              </h2>
            </Typography>
          </div>
          <div>
            <p>
              Living with heart or lung disease can be challenging, but there
              are steps you can take to improve your overall health and
              well-being. Here are 10 tips for maintaining a healthy lifestyle
              when living with heart or lung disease:
            </p>
            <h3 style={headerStyle}>1. Quit Smoking</h3>
            <p>
              Smoking is one of the leading causes of heart and lung disease. If
              you smoke, quitting is the single most important thing you can do
              to improve your health. Talk to your doctor about smoking
              cessation programs or medications that can help.
            </p>
            <h3 style={headerStyle}>2. Exercise Regularly</h3>
            <p>
              Regular exercise can help improve heart and lung function and
              reduce symptoms of heart or lung disease. Talk to your doctor
              about an exercise plan that is safe and appropriate for your
              condition.
            </p>
            <CardMedia
              component="img"
              alt="front facing angle of the digibeat remote stethoscope showcasing the volume control and power button"
              src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/2db572a0-14de-9742-7c9e-6fc9e43fb0e4.jpeg"
              style={{
                display: "flex",
                margin: "auto",
                imageSize: "contain",
                padding: "10px",
              }}
            />
            <h3 style={headerStyle}>3. Follow a Healthy Diet</h3>
            <p>
              A healthy diet that is low in saturated fats, sodium, and
              processed foods can help improve heart and lung health. Talk to
              your doctor or a registered dietitian about a diet plan that is
              right for you.
            </p>
            <h3 style={headerStyle}>4. Manage Your Stress</h3>
            <p>
              Stress can negatively impact heart and lung health. Learn
              stress-reduction techniques, such as meditation or deep breathing
              exercises, and make time for activities that you enjoy.
            </p>
            <h3 style={headerStyle}>5. Take Medications as Prescribed</h3>
            <p>
              If you have been prescribed medications for your heart or lung
              disease, it is important to take them as directed by your doctor.
              Skipping doses or stopping medications without consulting your
              doctor can worsen your condition.
            </p>
            <h3 style={headerStyle}>6. Get Regular Check-Ups</h3>
            <p>
              Regular check-ups with your doctor can help monitor your heart and
              lung health and identify any potential issues before they become
              more serious.
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
            <h3 style={headerStyle}>7. Manage Your Weight</h3>
            <p>
              Being overweight or obese can put extra strain on the heart and
              lungs. Work with your doctor or a registered dietitian to develop
              a weight-loss plan that is safe and appropriate for your
              condition.
            </p>
            <h3 style={headerStyle}>8. Avoid Triggers</h3>
            <p>
              If you have asthma or other lung conditions, avoid triggers that
              can worsen your symptoms, such as smoke or pollen. If you have
              heart disease, avoid triggers that can increase your risk of a
              heart attack, such as stress or high-sodium foods.
            </p>
            <h3 style={headerStyle}>9. Stay Hydrated</h3>
            <p>
              Drinking plenty of water can help improve lung function and
              prevent dehydration, which can put extra strain on the heart.
            </p>
            <h3 style={headerStyle}>10. Seek Support</h3>
            <p>
              Living with heart or lung disease can be challenging. Seek support
              from family, friends, or a support group to help you cope with the
              emotional and physical challenges of your condition.
            </p>
            <p>
              Living with heart or lung disease requires lifestyle changes that
              can be challenging, but ultimately rewarding. By following these
              10 tips for a healthy lifestyle, you can improve your overall
              health and well-being and manage your condition more effectively.
              Talk to your doctor about developing a personalized plan that is
              tailored to your individual needs and health goals.
            </p>
            <Link variant="subtitle1" href="#"></Link>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default Tips10;
