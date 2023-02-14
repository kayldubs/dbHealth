import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
//import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import InsightsIcon from "@mui/icons-material/Insights";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";

import "../Team/mediaQueries.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 310,
      sm: 768,
      lg: 1024,
      xl: 1201,
    },
  },
});

// const employees = [
//   {
//     id: 0,
//     icons: <PrecisionManufacturingIcon fontSize="large" />,
//     name: "Calvin Bond",
//     position: "Electrical/Mechanical Engineer",
//     desc: "Calvin earned his BS/ME degrees in Mechanical Engineering from the University of Florida. Since graduating he has worked in product development and design engineering for medical, professional audio, and consumer devices; doing electrical, mechanical and embedded software engineering. Calvin earned a BA in Music and is a member of his local music community. Mixing and producing live and recorded music along with playing several instruments.",
//   },
//   {
//     id: 1,
//     icons: <InsightsIcon fontSize="large" />,
//     name: "Brandon Popp",
//     position: "Systems Analyst/IT",
//     desc: "Brandon attended Florida Polytechnic University where he earned a BS in Computer Science and Information Technology. He has 5 years of experience in both the Insurance and Aerospace industries as a Technical Systems Analyst. Brandon supports the identification and alignment of business and technical requirements to ensure the creation of well designed, quality systems.",
//   },
//   {
//     id: 2,
//     icons: <DesignServicesIcon fontSize="large" />,
//     name: "Kaylee Stevens",
//     position: "Graphic Designer/Developer",
//     desc: "Kaylee started in her field with an Associates degree from Miami Dade College with a focus in graphic design. Expanding her skill set she recieved her certification in full stack development from The University of Texas at Austin where she now specializes in UX/UI and front end interface development.",
//   },
// ];
function Featured() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  //const [text, setText] =useState({firstDiv:0, secondDiv:0, thirdDiv:0})
  return (
    <Grid
      container
      spacing={{ xs: 1, xl: 1 }}
      mt={{ xs: "" }}
      rowGap={{ xl: 1 }}
      className="employeeGrid"
      style={{
        justifyContent: "center",
        marginBottom: "200px",
        alignItems: "stretch",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          outline: "solid",
          outlineColor: "#6a8aaf",
        }}
        style={{ margin: "65px" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        // onMouseEnter={(e) =>
        //   setText({ firstDiv: 1, secondDiv: 0, thirdDiv: 0 })
        // }
        // onMouseLeave={(e) => setText(0)}
      >
        <CardContent
          sx={{ flex: 1 }}
          style={{ backgroundColor: "#d6d6d6", width: "300px" }}
        >
          <PrecisionManufacturingIcon
            className="empIcons"
            sx={{
              fontSize: 40,
              marginLeft: "115px",
              backgroundColor: "#6a8aaf",
              borderRadius: "10px",
              position: "absolute",
              top: "45px",
            }}
          />
          <Typography
            component="h2"
            variant="h5"
            style={{ paddingTop: "20px" }}
          >
            Calvin Bond
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Electrical/Mechanical Engineer
          </Typography>
          {isHovering && (
          <Typography variant="subtitle2" color="text.secondary">
            Calvin earned his BS/ME degrees in Mechanical Engineering from the
            University of Florida. Since graduating he has worked in product
            development and design engineering for medical, professional audio,
            and consumer devices; doing electrical, mechanical and embedded
            software engineering. Calvin earned a BA in Music and is a member of
            his local music community. Mixing and producing live and recorded
            music along with playing several instruments.
          </Typography>
          )}
        </CardContent>
      </Card>
      <Card
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        sx={{ display: "flex", outline: "solid", outlineColor: "#6a8aaf" }}
        style={{ margin: "65px" }}
      >
        <CardContent
          sx={{ flex: 1 }}
          style={{ backgroundColor: "#d6d6d6", width: "300px" }}
        >
          <InsightsIcon
            className="empIcons2"
            sx={{
              fontSize: 40,
              marginLeft: "115px",
              backgroundColor: "#6a8aaf",
              borderRadius: "10px",
              position: "absolute",
              top: "45px",
            }}
          />
          <Typography
            component="h2"
            variant="h5"
            style={{ paddingTop: "20px" }}
          >
            Brandon Popp
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Systems Analyst/IT
          </Typography>
          {isHovering && (
            <Typography variant="subtitle2" color="text.secondary">
              Brandon attended Florida Polytechnic University where he earned a
              BS in Computer Science and Information Technology. He has 5 years
              of experience in both the Insurance and Aerospace industries as a
              Technical Systems Analyst. Brandon supports the identification and
              alignment of business and technical requirements to ensure the
              creation of well designed, quality systems.
            </Typography>
          )}
        </CardContent>
      </Card>
      <Card
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        sx={{ display: "flex", outline: "solid", outlineColor: "#6a8aaf" }}
        style={{ margin: "65px" }}
      >
        <CardContent
          sx={{ flex: 1 }}
          style={{ backgroundColor: "#d6d6d6", width: "300px" }}
        >
          <DesignServicesIcon
            className="empIcons3"
            sx={{
              fontSize: 40,
              marginLeft: "115px",
              backgroundColor: "#6a8aaf",
              borderRadius: "10px",
              position: "absolute",
              top: "45px",
            }}
          />
          <Typography
            component="h2"
            variant="h5"
            style={{ paddingTop: "20px" }}
          >
            Kaylee Stevens
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Graphic Designer/Developer
          </Typography>
          {isHovering && (
            <Typography variant="subtitle2" color="text.secondary">
              Kaylee started in her field with an Associates degree from Miami
              Dade College with a focus in graphic design. Expanding her skill
              set she recieved her certification in full stack development from
              The University of Texas at Austin where she now specializes in
              UX/UI and front end interface development.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
export default Featured;
