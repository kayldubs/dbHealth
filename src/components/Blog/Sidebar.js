import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Sidebar(props) {
  const { description, social, title } = props;

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
    backgroundColor: isHover ? "rgb(106,138,175)" : "rgb(39,170,225)"
  };
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="https://twitter.com/DigiBeatHealth"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200", display:'flex',
          alignContent:'center', flexDirection:'column', mt:3 }}>
        <Typography variant="h6" gutterBottom style={{textAlign:'center'}}>
          Interested In Learning More About DigiBeat?
        </Typography>
        <Button href="/contactForm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={btnStyle}
        >Sign Up</Button>
      </Paper>
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;
