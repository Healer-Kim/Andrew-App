import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
//import { Row, Col} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
`;

const UpSide = styled.div`
width 202vh;
height 30vh;
background-color: skyblue;
`;

const DownSide = styled.div`
width 202vh;
height 100vh;
background-size: 202vh 100vh;
background-image: url("https://myviewboard.com/blog/wp-content/uploads/2020/08/MP0027-01-scaled.jpg");
background-repeat: no-repeat;
`;


const WelcomeMain = styled.h1`
font-size: 40px;
color: white;
font-weight: 800;
margin-top: 20px;
align: center;
`

const Slogan = styled.h1`
font-size: 20px;
color: RGB(150, 150, 150);
font-weight: 400;
font-family: "Times New Roman", Times, serif;
font-style: italic;
`

const MediaContainer = styled.div`
height: 15px;
width: 15px;
background-color: gray;
`

const Twitter = styled.div`
background-image: url("https://www.kindpng.com/picc/m/20-203710_round-twitter-icon-png-transparent-png.png");
width: 40px;
height: 40px;
background-size: 40px 40px;
position: absolute;
right: 0;
top: 80px;
`

const Instagram = styled.div`
background-image: url("https://cdn.pixabay.com/photo/2021/09/23/06/59/instagram-6648896__340.jpg");
width: 40px;
height: 40px;
background-size: 40px 40px;
position: absolute;
right: 0;
top: 40px;
`

const Facebook = styled.div`
background-image: url("https://cdn.pixabay.com/photo/2017/11/10/05/04/facebook-2935402_960_720.png");
width: 40px;
height: 40px;
background-size: 40px 40px;
position: absolute;
right: 0;
top: 0px;
`

const Linkedin = styled.div`
background-image: url("https://cdn.pixabay.com/photo/2017/11/10/05/05/linkedin-2935407_960_720.png");
width: 40px;
height: 40px;
background-size: 40px 40px;
position: absolute;
right: 0;
top: 120px;
`

function MainPage() {
    return (
        <Container2>
            <UpSide>
                <WelcomeMain>Welcome to our Main Page!</WelcomeMain>
                <Slogan>Learn how to study smart</Slogan>
                <MediaContainer>
                    <Facebook></Facebook>
                </MediaContainer>
                <MediaContainer>
                    <Instagram> </Instagram>
                </MediaContainer>
                <MediaContainer>
                    <Twitter></Twitter>
                </MediaContainer>
                <MediaContainer>
                    <Linkedin ></Linkedin>
                </MediaContainer>
            </UpSide>
            <DownSide>
            </DownSide>
        </Container2>
    )
}

export default MainPage;

// Social Media icons / link