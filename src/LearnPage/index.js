import styled from "styled-components";
//import { Row, Col} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const LearnContainer = styled.div`
height: 100vh;
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
function LearnPage() {
    return (
        <LearnContainer>
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

            </Downside>
        </LearnContainer>
    )
}



export default LearnPage;