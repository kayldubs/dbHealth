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
const Tips5 = () => {
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
              <h1 style={h1}>5 Tips for Eating a Heart Healthy Diet</h1>
              <h2 style={headerStyle}>
                Dietary recommendations for your heart and lung health.
              </h2>
            </Typography>
          </div>
          <div>
            <p>
              Eating a heart-healthy diet is essential for maintaining good
              cardiovascular health. The right nutrition can help reduce the
              risk of heart disease and stroke. Here are five tips for eating a
              heart-healthy diet:
            </p>
            <h3 style={headerStyle}>1. Focus on Whole Foods</h3>
            <p>
              Whole foods, such as fruits, vegetables, whole grains, lean
              proteins, and healthy fats, should make up the majority of your
              diet. These foods are rich in vitamins, minerals, and antioxidants
              that promote good heart health. Avoid processed and packaged
              foods, as they are often high in sodium, sugar, and unhealthy
              fats.
            </p>
            <CardMedia
              component="img"
              alt="front facing angle of the digibeat remote stethoscope showcasing the volume control and power button"
              src="https://mcusercontent.com/f78a01ed120667028e9e65574/images/d8c04720-33cb-e500-96d9-ecfad84754b3.jpeg"
              style={{
                display: "flex",
                margin: "auto",
                imageSize: "contain",
                padding: "10px",
              }}
            />
            <h3 style={headerStyle}>
              2. Reduce your intake of saturated and trans fats
            </h3>
            <p>
              Saturated and trans fats increase cholesterol levels and increase
              the risk of heart disease. Limit your intake of red meat, full-fat
              dairy products, fried foods, and processed snacks. Instead, choose
              lean proteins such as chicken, fish, and legumes, and use healthy
              fats like olive oil and avocado oil for cooking.
            </p>
            <h3 style={headerStyle}>3. Add more fiber to your diet</h3>
            <p>
              Fiber is an essential nutrient that helps to lower cholesterol
              levels and reduce the risk of heart disease. Include fiber-rich
              foods in your diet, such as whole grains, fruits, vegetables, and
              legumes. Try to consume at least 25-30 grams of fiber per day.
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
            <h3 style={headerStyle}>4. Watch your sodium intake</h3>
            <p>
              High levels of sodium can lead to high blood pressure, which
              increases the risk of heart disease. Try to limit your sodium
              intake to less than 2,300 milligrams per day. Avoid processed and
              packaged foods that are often high in sodium, and instead, use
              herbs and spices to flavor your meals.
            </p>
            <h3 style={headerStyle}>5. Limit your alcohol consumption</h3>
            <p>
              Excessive alcohol consumption can increase blood pressure and
              contribute to weight gain, which increases the risk of heart
              disease. Limit your alcohol consumption to one drink per day for
              women and two drinks per day for men. Eating a heart-healthy diet
              doesn't have to be complicated. By incorporating these tips into
              your daily routine, you can promote good cardiovascular health and
              reduce your risk of heart disease and stroke.
            </p>
            <Link variant="subtitle1" href="#"></Link>
          </div>
        </Card>
      </Box>
    </Container>
  );
};

export default Tips5;
