import React from "react";
import Box from "@mui/material/Box";
import { Container, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import TwitterIcon from "@mui/icons-material/Twitter";
import Header from "../Header";

const sidebar = {
  title: "About Our Blog",
  description:
    "Here you will find everything you need to know about DigiBeat's portable and wireless technology, how it improve heart disease prevention, benefits of incorporating this device into your caridology practices, and much more general health information.",
  social: [
    // { name: 'GitHub', icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    // { name: 'Facebook', icon: FacebookIcon },
  ],
};

const sections = [
  { title: "Technology", url: "/blog/technology" },
  { title: "Cardiology", url: "/blog/cardiology" },
  { title: "Remote Monitoring", url: "/blog/remotemonitoring" },
  { title: "Science", url: "/blog/science" },
  { title: "Health", url: "/blog/health" },
  { title: "Life Style", url: "/blog/lifestyle" },
];
const Tips5 = () => {
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
              <h1>
              5 Tips for Eating a Heart Healthy Diet
              </h1>
              <h2>
              Dietary recommendations for your heart and lung health.
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
            >
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                social={sidebar.social}
                style={{}}
              />
              <Link
                to="/blog"
                style={{ marginTop: "30px", fontWeight: "bold" }}
              >
                Back to Blog's Main Page
              </Link>
            </div>
            <p>
            Eating a heart-healthy diet is essential for maintaining good cardiovascular health. The right nutrition can help reduce the risk of heart disease and stroke. Here are five tips for eating a heart-healthy diet:
            </p>
            <h3>1. Focus on Whole Foods</h3>
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
              src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/d309afbc-889e-6b3c-6731-5f5646d29df2.png"
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                float: "right",
                marginTop: "30px",
              }}
            />
            <h3>2. Remote Patient Monitoring</h3>
            <p>
              With the ability to wirelessly transmit data, AI-integrated
              wireless stethoscopes can be used for remote patient monitoring.
              Patients can wear the stethoscope at home and transmit their heart
              and lung sounds to their doctor, who can then analyze the data and
              make informed decisions about their treatment plan. This feature
              is especially useful for patients who live in remote areas or have
              limited mobility.
            </p>
            <h3>3. Better Patient Experience</h3>
            <p>
              Traditional stethoscopes can be uncomfortable for patients,
              especially those with chest hair or sensitive skin. Wireless
              stethoscopes are more comfortable, and with the integration of AI,
              doctors can diagnose patients quickly and with greater accuracy.
              Patients no longer need to visit the doctor's office for a basic
              check-up, and this can help reduce the overall cost of healthcare.
            </p>
            <h3>4. Advanced Analytics</h3>
            <p>
              AI-integrated wireless stethoscopes can analyze a large amount of
              data from multiple patients, allowing doctors to identify patterns
              that may be indicative of larger health issues. This can help with
              early detection of health conditions and allow for more targeted
              treatment plans.
            </p>
            <h3>5. Time-Saving</h3>
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

export default Tips5;