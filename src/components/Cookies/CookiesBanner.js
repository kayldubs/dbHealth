import { Card, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import posthog from "posthog-js";
import { useState } from "react";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const accept = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };
  const decline = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };
  return (
    <Card
      
    >
      {showBanner && (
        <div
          style={{
            textAlign: "center",
                height: "200px",
                width: "300px",
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1",
                backgroundColor: "var(--midBlue)"
          }}
        >
          <Typography
            style={{
              fontFamily: "Source Sans Pro",
              fontWeight: "bold",
              fontSize: "36px",
            }}
          >
            Accept Cookies?
          </Typography>
          <div>
            <Button onClick={accept} style={{ margin: "10px" }}>
              Accept
            </Button>
            <Button onClick={decline} style={{ margin: "10px" }}>
              Decline
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}

export default CookieBanner;
