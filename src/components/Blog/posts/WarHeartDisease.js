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
const WarHeartDisease = () => {
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
              <h1 style={{ marginBottom: "35px" }}>
                A Quick Glimpse into America's War Against Heart Disease
              </h1>
              <h2>
                Find out the relevance and your possible risk factors for heart
                disease in America.
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
              Heart disease is a major health concern in America, affecting
              millions of individuals every year. In fact, heart disease is the
              leading cause of death in the United States, responsible for one
              in every four deaths. Despite advances in medical technology,
              heart disease remains a significant challenge, and its prevalence
              continues to increase.
            </p>
            <p>
              The American Heart Association reports that over 120 million
              Americans have some form of cardiovascular disease, including
              coronary artery disease, heart failure, and arrhythmias. These
              conditions occur when the blood vessels that supply the heart
              become narrow or blocked, restricting blood flow and oxygen to the
              heart muscle.
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
            <p>
              Several risk factors contribute to the development of heart
              disease, including high blood pressure, high cholesterol, smoking,
              obesity, and physical inactivity. These risk factors are often
              interrelated, with individuals who have one risk factor often
              having others as well. Additionally, certain populations, such as
              African Americans, Hispanic Americans, and Native Americans, are
              at higher risk for heart disease.
            </p>
            <p>
              While heart disease is a serious and prevalent issue, there are
              steps individuals can take to reduce their risk. Maintaining a
              healthy diet rich in fruits, vegetables, whole grains, and lean
              proteins can help to reduce cholesterol and blood pressure levels.
              Regular physical activity, such as walking, jogging, or swimming,
              can improve heart health and reduce the risk of heart disease.
              Avoiding smoking and limiting alcohol consumption are also
              important steps to reduce the risk of heart disease.
            </p>
            <p>
              In addition to lifestyle changes, medical interventions may be
              necessary to manage heart disease. Medications can help to lower
              blood pressure and cholesterol levels, while surgical procedures,
              such as angioplasty or bypass surgery, can help to restore blood
              flow to the heart. Early detection is key in managing heart
              disease. Regular check-ups with a healthcare provider can help to
              identify risk factors and detect heart disease in its early
              stages. Additionally, monitoring blood pressure and cholesterol
              levels at home can help individuals to better manage their health.
            </p>
            <p>
              In conclusion, heart disease is a significant health concern in
              America, affecting millions of individuals every year.
              Understanding the risk factors and taking steps to manage them
              through lifestyle changes and medical interventions can help to
              reduce the risk of heart disease and improve overall heart health.
              By working together, we can combat this leading cause of death and
              improve the health of our communities.
            </p>
            <Link variant="subtitle1" href="#"></Link>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default WarHeartDisease;
