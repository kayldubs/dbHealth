import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import HeroPost from './posts/HeroPost';

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          p: 1,
        },
      }}
    >
      <Typography variant="h2" gutterBottom style={{fontFamily:'Expletus Sans', textAlign:'center', fontSize:'3rem'}}>
        {title}
      </Typography>
      <Divider />
      <HeroPost/>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;