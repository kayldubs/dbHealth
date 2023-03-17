import * as React from "react";
// import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "./footer.css";

function Copyright() {
  return (
    <Typography color="text.secondary" className="copyright">
      {"Copyright © "}
      <Link color="inherit" href="/">
        DigiBeat
      </Link>
      {""}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container>
        <div className="footer" alignContent="stretch">
          <div className="footerType">
            <Typography fontWeight="bold">Contact</Typography>
            <Typography className="">Support@digibeat.health</Typography>
          </div>
          <div className="section1">
            <Typography fontWeight="bold">Navigation</Typography>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/faq">
              FAQ
            </Link>
            <Link color="inherit" href="/about">
              About
            </Link>
          </div>
          {/* <div className='footerType'>
          <Card>
              <CardMedia
              sx={{
                '& .MuiCard-root': {
                  style:'image'
                }
              }}
              image={logo}
              component='logo'
              alt='DigiBeat logo'
              />
          </Card>
      </div> */}
          <div className="section2">
            <Typography fontWeight="bold">Regulatory</Typography>
            <Link color="inherit" href="/regulatory">
              Terms of Use
            </Link>
            {/* <Link color="inherit" href="/510(k)">
        510(k)
      </Link>
      <Link color="inherit" href="/hippa">
        HIPPA
      </Link>
      <Link color="inherit" href="/ficoPolicy">
        FICO Policy
      </Link> */}
          </div>
          <div className="section2" style={{ marginBottom: "180px" }}>
            <Typography fontWeight="bold">Resources</Typography>
            <Link
              color="inherit"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7407266/"
            >
              Health Monitoring Devices
            </Link>
            <Link
              color="inherit"
              href="https://pubmed.ncbi.nlm.nih.gov/24598902/"
            >
              Chronic Disease Intervention
            </Link>
            <Link
              color="inherit"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5240011/"
            >
              Remote Patient Monitoring
            </Link>
            <Link
              color="inherit"
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3481514/"
            >
              Telehealth for COPD
            </Link>
          </div>
        </div>
        <Copyright />
        <p style={{textAlign:'center', fontSize:'12px', marginTop:'5px'}}>
          The DigiBeat System is an investigational device and is not currently
          approved for clinical use in any geography. CAUTION- Investigational
          Device. Limited by Federal (or United States) Law to Investigational
          Use. Exclusively for Clinical Investigation.
        </p>
      </Container>
    </Box>
    // </Box>
  );
}

export default Footer;
