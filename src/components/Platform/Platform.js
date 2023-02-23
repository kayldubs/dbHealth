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
      <h1 className="platHeader">DigiBeat Platform</h1>
      <div 
      className='platformContainer'
       style={{
        display:'flex',
        flexDirection:'row'
      }}
      >
        <Card className="platCard" style={{alignItems:'center', marginRight:'20px'}}>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={patient}
              className="platMedia3"
              style={{
                objectFit:'contain'
              }}
            />
            <CardContent>
              
                <h1 className="title">Intuitive Patient Application For At Home Exams</h1>
                <h2 className="ptag">
                  Patients Remotely complete heart exams using the DigiBeat
                  Stethoscope and the smart phone application
                </h2>
              
            </CardContent>
      
        </Card>
        <br></br>
        <Card className="platCard" style={{marginRight:'20px'}}>
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={flow}
              className="platMedia"
              style={{
                objectFit:'contain'
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
        </Card>
        <br></br>
        <Card className="platCard">
            <CardMedia
              component="img"
              alt="heart with connections to DigiBeat Logo"
              image={dr}
              className="platMedia2"
              style={{
                objectFit:'contain'
              }}
            />
            <CardContent>
                <h1 className="title">Best In Class Data Analysis Dashboard</h1>
                <h2 className="ptag">
                  Physicians can easily track recordings for all patients,
                  review their trends, and utilize AI processing to make care
                  determinations
                </h2>
            </CardContent>
        </Card>
      </div>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Platform;
