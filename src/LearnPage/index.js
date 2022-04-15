import styled from "styled-components";
//import { Row, Col} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import Me from "../Images/me.jpg"
import "./index.css";

const LearnContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
background-color: #85F4FF;
`;

// const LeftSide = styled.h1`
// width: 70%;
// padding: 40px;
// margin: auto;
// text-align: center;
// `

// const RightSide = styled.h1`
// width: 30%;

// `

const Upside = styled.div`
width 202vh;
height 200vh;
background-color: #85F4FF;
`;

const Downside = styled.div`
width 202vh;
height 100vh;
background-color: #42C2FF;
`;



const Title = styled.h1`
font-family: 'Roboto Condensed', sans-serif;
font-size: 90px;
text-align: center;
margin-top: 40px;
`;

const Subtitle = styled.h1`
font-family: 'Roboto Condensed', sans-serif;
text-align: center;
margin-top: 80px;
font-weight: normal;
font-size: 30px;
`;

const Maintext = styled.h1`
font-family: 'Roboto Condensed', sans-serif;
text-align: center;
margin-top: 50px;
`;


const ContactContainer = styled.div`
width:400px;
padding-top:5px;
border-style:solid;
border-color:#42C2FF;
border-width:3px;
padding-left:3px;
padding-bottom:10px;
word-wrap: break-word;
background-color: #EFFFFD;
text-align: left;
margin-left: 37%;
margin-top: 30px;
`;

const Imagecontainer = styled.div`
margin-top: 100px;
margin-left: 34%;
width: 512px;
height: 256px;
padding-top: 30px;
padding-bottom: 30px;
border-top: 10px solid #42C2FF;
border-bottom: 10px solid #42C2FF;
text-align: center;
`

const MyImage = styled.img`
width: 400px;
height: 400px;
`

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
`

const DetailRight = styled.div`
height: 100vh;
weight 50%;
`

const DetailLeft = styled.div`
height: 100vh;
width: 50%;
`

const DetailRow = styled.div`
display: flex;
margin-bottom: 10px;
`

const DetailContent = styled.div`
color: black;
font-size: 18px;
width: 300px;
font-family: 'Roboto Condensed', sans-serif;
`

const AboutMeContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding-top: 50px;
padding-bottom: 80px;
`

const EducationContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 50px;
padding-bottom: 80px;
`

const EducationRowContainer = styled.div`
display: flex;
margin-bottom: 10px;
`

const EducationLabel = styled.div`
width: 100px;
margin-right: 20px;
display: flex;
display-direction: row;
`





function LearnPage() {
    const barStyle = {        
        width: "300px",
        backgroundColor: "yellow",
        height: "40px",
};   
    return (
        <LearnContainer>
            <AboutMeContainer>
                
                <Upside>
                    <Title>About Me</Title>
                    <Subtitle>Hello I am Andrew Chang. I am a student from South Korea.</Subtitle>
                    <Maintext>My Contact</Maintext>
                    <ContactContainer>
                        Name: 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Andrew Chang<br></br><br></br>
                        Email:
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        2023andrewchang@usbccollegiate.org<br></br><br></br>
                        Phone: 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        010-1234-5678<br></br><br></br>
                        Date of Birth: 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        24 June 2004
                    </ContactContainer>
                    {/* <DetailContainer>
                        <DetailLeft>
                            <DetailRow>
                                <DetailContent>
                                    Name: 
                                </DetailContent>
                            </DetailRow>
                        </DetailLeft>
                        <DetailRight>
                            <DetailRow>
                                <DetailContent>
                                    Andrew Chang
                                </DetailContent>
                            </DetailRow>
                        </DetailRight>

                    </DetailContainer> */}
                    <Imagecontainer><img src = "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/man-technologist-light-skin-tone.png" /></Imagecontainer>
                </Upside>

                <Downside>
                    
                    
                    <EducationContainer>
                        <h1>Education</h1>
                        <EducationRowContainer>
                            <EducationLabel>GPA</EducationLabel>
                                <ProgressBar 
                                style = {barStyle} 
                                label = {`4.8/5.0`}
                                max={5.0} 
                                min={0.0}
                                now={4.8}
                                ></ProgressBar>
                            <EducationLabel>SAT</EducationLabel>
                                <ProgressBar 
                                style = {barStyle} 
                                label = {`1111/1600`}
                                max={1600} 
                                min={0}
                                now={1111}
                                ></ProgressBar>
                            <EducationLabel>TOEFL</EducationLabel>
                                <ProgressBar 
                                style = {barStyle} 
                                label = {`111/120`}
                                max={120} 
                                min={0}
                                now={111}
                                ></ProgressBar>
                            <EducationLabel>AP Econ</EducationLabel>
                                <ProgressBar 
                                style = {barStyle} 
                                label = {`5/5`}
                                max={5} 
                                min={0}
                                now={5}
                                ></ProgressBar>
                            <EducationLabel>AP Chem</EducationLabel>
                                <ProgressBar 
                                style = {barStyle} 
                                label = {`5/5`}
                                max={5} 
                                min={0}
                                now={5}
                                ></ProgressBar>
                        </EducationRowContainer>
                    </EducationContainer>
                </Downside>

            </AboutMeContainer>
        </LearnContainer>
    )
}



export default LearnPage;