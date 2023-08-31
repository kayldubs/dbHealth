import React from "react";
import Box from "@mui/material/Box";
import { Container, CardMedia, Paper, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import Header from "../Header";
import { Button } from "react-bootstrap";
import { useState } from "react";

const HeroPost = () => {
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
      <Box>
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
                <h1 style={{ marginBottom: "35px", color: "var(--greyBlue)" }}>
                  A Brief Analysis and Purpose of DigiBeat's Digital
                  Stethoscope
                </h1>
                <h2 style={{ color: "var(--midBlue)" }}>
                  Revolutionizing Healthcare: The Advanced Features of the
                  Digibeat Digital Stethoscope.
                </h2>
              </Typography>
            </div>
            <div>
              <div
                style={{
                  maxWidth: "400px",
                  display: "flex",
                  float: "right",
                  flexDirection: "column",
                }}
              ></div>
              <p>
                The stethoscope is a fundamental tool used by healthcare
                professionals for over 200 years. However, in recent times,
                there has been a growing interest in the digitization of medical
                devices, including the stethoscope. Digibeat’s digital
                stethoscope aims to improve the quality and efficiency of
                in-office and in-home exams while providing new features and
                capabilities that enhance patient care.
              </p>
              <h3 style={{ color: "var(--midBlue)" }}>
                What is the Digibeat Stethoscope?
              </h3>
              <p>
                The Digibeat Stethoscope is a wireless, digital stethoscope that
                uses cutting-edge technology to record and amplify heart and
                lung sounds. It is designed to provide a clear and accurate
                representation of the sounds within the body, improving the
                diagnostic process for medical professionals. The device is
                equipped with a high-quality microphone and a powerful digital
                signal processor that filters out background noise and enhances
                sound quality, allowing for a more accurate diagnosis.
              </p>
              <CardMedia
                component="img"
                alt="front facing angle of the digibeat remote stethoscope showcasing the volume control and power button"
                src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/36a70dec-ac88-977e-a039-6477deb65ade.jpg"
                style={{
                  imageSize:'contain',
                  display: "flex",
                  margin: "auto",
                  padding:'10px'
                }}
              />
              <h3 style={{ color: "var(--midBlue)" }}>
                Features and Benefits of the Digibeat Stethoscope
              </h3>
              <p>
                One of the many significant benefits of the Digibeat Stethoscope
                is its ability to amplify sounds up to 20 times, making it
                easier to detect and analyze subtle changes in heart and lung
                sounds. The device also has a built-in audio recorder that
                enables healthcare professionals to save and share patient
                recordings for consultation and further analysis.
              </p>
              <p>
                Another benefit of the Digibeat Stethoscope is its ability to
                connect wirelessly to a range of devices, including smartphones,
                tablets, and computers. This allows healthcare professionals to
                access and analyze patient recordings remotely, improving the
                efficiency of care and reducing the need for in-person
                consultations.
              </p>
              <p>
                Furthermore, the DigiBeat stethoscope's augmented reality
                technology makes heart exams more accessible and convenient.
                Patients can use the step-by-step instructions provided on
                screen to conduct exams from the comfort of their own homes,
                sending results to physicians for review and follow-up treatment
                options. The combination of AI and AR technology in the DigiBeat
                stethoscope greatly enhances patient care, providing physicians
                with the tools they need to make accurate diagnoses and treat
                patients more effectively.
              </p>
              <p>
                The Digibeat Stethoscope is also designed to be user-friendly,
                with a simple and intuitive interface that enables medical
                professionals to quickly and easily navigate through different
                features and settings. Physicians can also customize each of
                their patient profiles per their results and treatment strategy.
                The device is lightweight and easy to carry, making it a
                convenient tool for healthcare professionals on the go or in
                office.
              </p>
              <p>
                Our DigiBeat stethoscope features advanced artificial
                intelligence (AI) and augmented reality (AR) capabilities which
                largely distinguishes it from traditional stethoscopes. The
                incorporation of data-trained intelligence greatly assists
                doctors in their diagnoses, leading to quicker and more accurate
                assessments. By comparing the data collected from patients to a
                vast database of heart, lung, and gastrointestinal conditions,
                our AI technology can streamline exam results beyond traditional
                symptom recognition and direct doctors toward the most effective
                treatment options. This enhanced diagnostic accuracy results in
                superior patient care.
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
              <h3 style={{ color: "var(--midBlue)" }}>Conclusion</h3>
              <p>
                The Digibeat Stethoscope is a significant advancement in the
                field of digital medical devices, offering a range of benefits
                and features that improve the quality and efficiency of patient
                care. With its advanced AI/AR technology, user-friendly
                interface, and customizable settings, the Digibeat Stethoscope
                is an essential tool for healthcare professionals who are
                looking to provide the highest level of care to their patients.
                If you're interested in learning more about the Digibeat
                Stethoscope sign up for more information{" "}
                <Link to="/contactForm">HERE.</Link>
              </p>
              <Link variant="subtitle1" href="#"></Link>
            </div>
          </Card>
      </Box>
    </Container>
  );
};

export default HeroPost;
