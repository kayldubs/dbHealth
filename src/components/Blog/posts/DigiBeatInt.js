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
  marginBottom: "25px",
  color: "var(--greyBlue)",
  textAlign: "center",
};

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
              As a cardiologist, you understand the importance of having a
              high-quality stethoscope to aid in diagnosing and treating
              cardiovascular diseases. With advancements in technology, there
              are now digital stethoscopes available that offer numerous
              benefits over traditional acoustic stethoscopes. In this article,
              we will explore the benefits, specifically, of the DigiBeat’s
              Application Suite and Digital Stethoscope - Ara and how it can
              enhance your practice.
            </p>
            <p>
              DigiBeat’s Ara stethoscope is not only wireless, sound filtering
              and enhancing; but Ara also comes with a full suite of
              technological advancements, to streamline cardiologist’s practices
              and enhance patient care capabilities.
            </p>
            <h1 style={h1}>Advanced Medical Technology </h1>
            <h3 style={headerStyle}>
              DigiBeat’s Augmented Reality & Auscultation Guidance Application
              (AGA):
            </h3>
            <p>
              The most unique feature of DigiBeat’s Digital stethoscope - Ara is
              the ability to incorporate remote monitoring. Using our
              Auscultation guidance application(AGA) patients have their own Ara
              at home. When they open the AGA application they are
              simplistically guided through a step by step exam using augmented
              reality. The patient sets up their camera facing them. Then our
              augmented reality platform and AI overlay will ensure proper
              device placement and sound quality while the patient conducts
              their own exam. Once the exam is completed the results are sent to
              the Caretaker Portal and is reviewed by our RRA system.
            </p>
            <p>
              The AGA platform is highly beneficial for not only patients saving
              time normally spent in the doctor’s office; but it also opens
              Cardiologist availability to see more chronic patients in office.
              Cardiologists practicing remote monitoring treatments can also
              increase their throughput using CPT billing codes and decrease
              their time spent on documentation.
            </p>
            <CardMedia
              component="img"
              alt="front facing angle of the digibeat remote stethoscope showcasing the volume control and power button"
              src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/a75fff64-f626-ec7c-082c-44935fef8eb3.jpg"
              style={{
                display: "flex",
                margin: "auto",
                imageSize: "contain",
                padding: "10px",
              }}
            />
            <h1 style={h1}> In Depth Patient Analytics </h1>
            <h3 style={headerStyle}>
              DigiBeat’s Artificial Intelligence & Rapid Review Application
              (RRA)
            </h3>
            <p>
              In addition to the many benefits of remote patient care using our
              AGA, DigiBeat’s suite is also equipped with artificial
              intelligence infused into our rapid review application(RRA). By
              connecting your Ara device to our RRA system, cardiologists can
              listen to patient sounds in real time while the exam seamlessly
              uploads to their patient’s profile. Using the collected heart
              health data from the in office exam our RRA provides and reviews
              metrics of a wider range of data to then target and flag areas of
              concern, suggest treatment, and potential diagnosis. This provides
              doctors with more accurate and comprehensive information on the
              exam results, helping them to make more informed decisions and
              improve patient outcomes.
            </p>
            <p>
              By leveraging our latest AI technology, our system can detect and
              diagnose diseases at an earlier stage, long before they become
              detectable to the human ear. Ultimately, this results in faster
              diagnosis and better treatment options for patients.
            </p>
            <h3 style={headerStyle}>DigiBeat’s Caretaker Portal(CP):</h3>
            <p>
              The final addition to DigiBeat’s suite is our Caretaker
              Portal(CP). This powerhouse holds access to patient profiles,
              their previously recorded and annotated exam results, along with
              their current treatment plan. As the patient continues to monitor
              and treat their diagnosis at home with DigiBeat’s Auscultation
              Guidance Application, this platform will alert their physician if
              they fall outside of the desired health metrics. Once the
              physician reviews this alert they can call their patient in for an
              exam or adjust their at home treatment. Our CP system can also be
              a huge help in reducing the need for travel with immobilized
              patients and is accessible through our web portal for doctors on
              the go.
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
            <h3 style={headerStyle}>Made by a Doctor for Doctors:</h3>
            <p>
              In addition, DigiBeat stethoscopes were designed by our CMO
              Dr.Richards with convenience and practicality in mind. The device
              is lightweight, making it easy to carry around during patient
              rounds. Ara also amplifies sound and filters out ambient noise,
              providing a clear and precise listening experience making it ideal
              for detecting subtle heart anomalies. The stethoscope is also easy
              to clean and maintain, ensuring that it is always in good working
              order.
            </p>
            <h3 style={headerStyle}>Conclusion:</h3>
            <p>
              Overall, DigiBeat’s Solution is an excellent investment for any
              cardiologist looking to enhance their practice. The device's
              advanced sound amplification, real-time visualization, data
              recording capabilities, artificial intelligence integration, and
              at-home augmented reality exams make it an indispensable tool for
              aiding in diagnosing and treating cardiovascular diseases.
            </p>
            <p>
              By using DigiBeat’s Ara stethoscope in your practice, you can
              decrease the time spent on documentation while increasing the CPT
              codes billed by adding remote care treatment. All of this provides
              better patient care, improving diagnostic accuracy, and staying
              ahead of the curve in the ever-evolving field of cardiology.
            </p>
            <Link variant="subtitle1" href="#"></Link>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default DigiBeatInt;
