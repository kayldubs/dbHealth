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
const Tips10 = () => {
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
              <h1>10 Tips for Living with Heart/Lung Disease</h1>
              <h2>Your options when living with heart disease.</h2>
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
              Living with heart or lung disease can be challenging, but there
              are steps you can take to improve your overall health and
              well-being. Here are 10 tips for maintaining a healthy lifestyle
              when living with heart or lung disease:
            </p>
            <h3>1. Quit Smoking</h3>
            <p>
              Smoking is one of the leading causes of heart and lung disease. If
              you smoke, quitting is the single most important thing you can do
              to improve your health. Talk to your doctor about smoking
              cessation programs or medications that can help.
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
            <h3>2. Exercise Regularly</h3>
            <p>
              Regular exercise can help improve heart and lung function and
              reduce symptoms of heart or lung disease. Talk to your doctor
              about an exercise plan that is safe and appropriate for your
              condition.
            </p>
            <h3>3. Follow a Healthy Diet</h3>
            <p>
              A healthy diet that is low in saturated fats, sodium, and
              processed foods can help improve heart and lung health. Talk to
              your doctor or a registered dietitian about a diet plan that is
              right for you.
            </p>
            <h3>4. Manage Your Stress</h3>
            <p>
              Stress can negatively impact heart and lung health. Learn
              stress-reduction techniques, such as meditation or deep breathing
              exercises, and make time for activities that you enjoy.
            </p>
            <h3>5. Take Medications as Prescribed</h3>
            <p>
              If you have been prescribed medications for your heart or lung
              disease, it is important to take them as directed by your doctor.
              Skipping doses or stopping medications without consulting your
              doctor can worsen your condition.
            </p>
            <h3>6. Get Regular Check-Ups</h3>
            <p>
              Regular check-ups with your doctor can help monitor your heart and
              lung health and identify any potential issues before they become
              more serious.
            </p>
            <h3>7. Manage Your Weight</h3>
            <p>
              Being overweight or obese can put extra strain on the heart and
              lungs. Work with your doctor or a registered dietitian to develop
              a weight-loss plan that is safe and appropriate for your
              condition.
            </p>
            <h3>8. Avoid Triggers</h3>
            <p>
              If you have asthma or other lung conditions, avoid triggers that
              can worsen your symptoms, such as smoke or pollen. If you have
              heart disease, avoid triggers that can increase your risk of a
              heart attack, such as stress or high-sodium foods.
            </p>
            <h3>9. Stay Hydrated</h3>
            <p>
              Drinking plenty of water can help improve lung function and
              prevent dehydration, which can put extra strain on the heart.
            </p>
            <h3>10. Seek Support</h3>
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
