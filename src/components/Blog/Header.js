import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState } from "react";

function Header(props) {
  const { sections, title } = props;

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

  const btnStyle = {
    textDecoration: "none",
    color:'#000000',
    borderRadius: "20px",
    borderColor: "transparent",
    backgroundColor: isHover ? "rgb(106,138,175)" : "rgb(39,170,225)",
    margin:'10px'

  };
  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Toolbar
      component="nav"
      variant="dense"
      sx={{ justifyContent: 'left', overflowX: 'auto',  }}
      >
        <Button href="https://twitter.com/DigiBeatHealth" style={btnStyle}>
          Twitter
        </Button>
        <Button href="https://www.linkedin.com/company/digibeat-health/" style={btnStyle}>
          LinkedIn
        </Button>
      </Toolbar>
    </React.Fragment>
    
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;