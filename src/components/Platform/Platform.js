import React, { useState } from "react";
import "./platform.css";
import Container from "@mui/material/Container";
import patient from "../../assests/imgs/flow-01.svg";
import flow from "../../assests/imgs/iphone-02.svg";
import dr from "../../assests/imgs/ipad-03.svg";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";

function Platform() {
  return (
    <Container container>
      <h1 class="features">DigiBeat Platform</h1>
      <div style={{
        display:'flex',
        flexDirection:'row'
      }}
      >
        <Card style={{alignItems:'center', marginRight:'20px'}}>
          <div>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={patient}
              style={{
                width:'300px',
                height:'300px',
                paddingLeft: '60px'
              }}
            />
            <CardContent>
              <div>
                <h1 className="title">Intuitive At Home Patient Exams</h1>
                <h2 className="ptag">
                  Patients Remotely complete heart exams using the DigiBeat
                  Stethoscope and the smart phone application
                </h2>
              </div>
            </CardContent>
          </div>
        </Card>
        <br></br>
        <Card style={{marginRight:'20px'}}>
          <div style={{ alignItems:'center'}}>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={flow}
              style={{
                width:'300px',
                height:'300px',
                paddingLeft: '60px'
              }}
            />
            <CardContent>
              <div class="flex-row">
                <h1 className="title">Robust Physician Exam Workflow</h1>
                <h2 className="ptag">
                  Physicians complete exams in clinic with high accuracy.
                  Recordings are sent directly to physician dashboard
                </h2>
              </div>
            </CardContent>
          </div>
        </Card>
        <br></br>
        <Card>
          <div>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={dr}
              style={{
                width:'300px',
                height:'300px',
                paddingLeft: '100px'
              }}
            />
            <CardContent>
              <div>
                <h1 className="title">Best In Class Data Analysis Dashboard</h1>
                <h2 className="ptag">
                  Physicians can easily track recordings for all patients,
                  review their trends, and utilize AI processing to make care
                  determinations
                </h2>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Platform;
