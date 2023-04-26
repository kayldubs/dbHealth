import React from "react";
import Box from "@mui/material/Box";
import { Container, CardMedia, Paper, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function CookiePolicy() {
  return (
    <Container>
      <Box style={{ padding: "50px 50px" }}>
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
            <Typography style={{ textAlign: "left" }}>
              <h1>Cookie Policy</h1>
              <p>Last updated 4/26/23</p>
            </Typography>
          </div>
          <div>
            <p>
              This Cookie Policy explains how DigiBeat (“Company,” “we,” “us,”
              or “our”) uses cookies and similar technologies to recognize you
              when you visit our websites at https://www.digibeat.health
              (“Websites“). It explains what these technologies are and why we
              use them, as well as your rights to control our use of them.
              <br></br>
              In some cases we may use cookies to collect personal information,
              or that becomes personal information if we combine it with other
              information.
            </p>
            <h3>What are cookies?</h3>
            <p>
              Cookies are small data files that are placed on your computer or
              mobile device when you visit a website. Cookies are widely used by
              website owners in order to make their websites work, or to work
              more efficiently, as well as to provide reporting information.
              <br></br>
              Cookies set by the website owner (in this case, DigiBeat) are
              called “first-party cookies.” Cookies set by parties other than
              the website owner are called “third-party cookies.” Third-party
              cookies enable third-party features or functionality to be
              provided on or through the website (e.g., advertising, interactive
              content, and analytics). The parties that set these third-party
              cookies can recognize your computer both when it visits the
              website in question and also when it visits certain other
              websites. We DO NOT use third party cookies.
            </p>
            <h3>Why do we use cookies?</h3>
            <p>
              We use first party cookies for several reasons. Some cookies are
              required for technical reasons in order for our Websites to
              operate, and we refer to these as “essential” or “strictly
              necessary” cookies. Other cookies also enable us to track and
              target the interests of our users to enhance the experience on our
              Online Properties. We only use the first party cookies that users
              allow us to extract with their browser settings.
            </p>
            <h3>How can I control cookies on my browser?</h3>
            <p>
              As the means by which you can refuse cookies through your web
              browser controls vary from browser to browser, you should visit
              your browser’s help menu for more information. The following is
              information about how to manage cookies on the most popular
              browsers:
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                color="inherit"
                href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
              >
                CHROME
              </Link>
              <Link
                color="inherit"
                href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              >
                INTERNET EXPLORER
              </Link>
              <Link
                color="inherit"
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
              >
                FIREFOX
              </Link>
              <Link
                color="inherit"
                href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
              >
                SAFARI
              </Link>
              <Link
                color="inherit"
                href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
              >
                EDGE
              </Link>
              <Link
                color="inherit"
                href="https://help.opera.com/en/latest/web-preferences/"
              >
                OPERA
              </Link>
              <br></br>
            </div>
            <h3>How often will you update this Cookie Policy?</h3>
            <p>
              We may update this Cookie Policy from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal, or regulatory reasons. Please therefore
              revisit this Cookie Policy regularly to stay informed about our
              use of cookies and related technologies.
              <br></br>
              The date at the top of this Cookie Policy indicates when it was
              last updated.
            </p>
            <h3>Where can I get further information?</h3>
            <p>
              If you have any questions about our use of cookies or other
              technologies, please email us at info@digibeat.health
            </p>
          </div>
        </Card>
      </Box>
    </Container>
  );
}

export default CookiePolicy;
