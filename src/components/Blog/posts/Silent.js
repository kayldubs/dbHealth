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
const Silent = () => {
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
              <h1 style={{ marginBottom: "35px" }}>Silent Heart Attacks</h1>
              <h2>
                What is a silent heart attack and how would a digital
                stethoscope help?
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
              Silent heart attacks, also known as silent myocardial infarctions
              (SMIs), are becoming increasingly common. According to a study
              conducted by the American Heart Association, approximately 45% of
              heart attacks are considered silent. This means that a patient may
              experience all of the symptoms of a heart attack, but they may not
              realize it or seek medical attention because they do not feel any
              pain. Digital stethoscopes can play a critical role in identifying
              these silent heart attacks and preventing future cardiac events.
            </p>
            <h3>Symptoms of Silent Heart Attacks</h3>
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
              src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/d309afbc-889e-6b3c-6731-5f5646d29df2.png"
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                float: "right",
                marginTop: "30px",
              }}
            />
            <h3>How Digital Stethoscopes Help</h3>
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
