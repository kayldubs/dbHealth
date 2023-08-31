import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useState } from "react";
import "./mediaQueries.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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


const shareUrl = window.location;

  return (
    <React.Fragment>
      
      <Toolbar
        className='grid-container'
        component="nav"
        variant="dense"
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            {sections.map((section) => (
              <Link
                key={section.title}
                color="inherit"
                noWrap
                variant="body2"
                href={section.url}
                sx={{ p: 1, flexShrink: 0 }}
                className="grid-item"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </Toolbar>
      <Toolbar
      component="nav"
      variant="dense"
      sx={{ display:'flex', flexDirection:'row', overflowX: 'auto', justifyContent:'right' }}
      >
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