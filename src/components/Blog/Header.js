import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState } from "react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";

function Header(props) {
  const { sections, title } = props;

  const btnStyle = {
    textDecoration: "none",
    color:'#000000',
    borderRadius: "20px",
    borderColor: "transparent",
    backgroundColor: "rgb(39,170,225)",
    margin:'10px'
  };

  const btnStyle2 = {
    textDecoration: "none",
    textColor:'#000000',
    border:'1px solid',
    borderRadius: "20px",
    borderColor: "#27aae1",
    margin:'10px'
  };

const shareUrl = window.location;

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
      sx={{ display:'flex', flexDirection:'row', overflowX: 'auto', justifyContent:'right' }}
      >
        {/* <div style={{display:'flex', alignItems:'center'}}>
        <Typography style={{marginRight:'10px'}}>FOLLOW US:</Typography>
        <Button href="https://twitter.com/DigiBeatHealth" style={btnStyle}>
          Twitter
        </Button>
        <Button href="https://www.linkedin.com/company/digibeat-health/" style={btnStyle2}>
          LinkedIn
        </Button>
        </div> */}
        <div style={{display:'flex', alignItems:'center'}}>
        <Typography style={{marginRight:'10px'}}>SHARE:</Typography>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={36} round={true}/>
        </FacebookShareButton>
        <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={36} round={true}/>
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={36} round={true}/>
        </TwitterShareButton>
        </div>
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