import { useHistory } from "react-router-dom";
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
background-color: #85F4FF;
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

const Stackoverflow = styled.div`
background-image: url("https://img.favpng.com/20/2/23/computer-icons-stack-overflow-png-favpng-n3JtYvCi2AAPpXaeJjpFeVrau.jpg");
width: 40px;
height: 40px;
background-size: 40px 40px;
position: absolute;
right: 0;
top: 80px;
`

const Github = styled.div`
background-image: url("https://pngset.com/images/github-icon-free-download-symbol-logo-trademark-label-transparent-png-1868500.png");
width: 40px;
height: 40px;
background-size: 40px 40px;
position: absolute;
right: 0;
top: 40px;
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

const ImageWrapper = styled.div`
display: flex;
justify-content: center;

`

const LogoImage = styled.div`
width: 60px;
height: 60px;
margin-right: 20px;

`// filter: invert(40%) sepia(2%) saturate(2682%) hue-rotate(315deg) brightness(94%) contrast(98%);

const Button = styled.button`
background-color: white;
margin-top 30px;
color:black;
font-size: 22px;
font-weight: 700;
padding: 10px;
width: 120px;
height: 50px;
border: none;
border-radius: 10px;
`



function MainPage() {
    const history = useHistory ();
    // Function which navigates to a new page 
    const navigateToLearnMore = () => {
        history.push("/learn");
    };

    return (
        <Container2>
            <UpSide>
                <WelcomeMain>Welcome to our Main Page!</WelcomeMain>
                <Slogan>Learn more about me</Slogan>
                <MediaContainer>
                    <button type="button" onClick="window.open('https://stackoverflow.com/')"> <img src="https://img.favpng.com/20/2/23/computer-icons-stack-overflow-png-favpng-n3JtYvCi2AAPpXaeJjpFeVrau.jpg" height ="15" width="15" /></button>
                </MediaContainer>
                <MediaContainer>
                    <button type="button" onClick="window.open('https://github.com/')"> <img src="https://pngset.com/images/github-icon-free-download-symbol-logo-trademark-label-transparent-png-1868500.png" height ="15" width="15" /></button>
                </MediaContainer>
                <MediaContainer>
                        {/* <a>
                            href =""
                            target ="_blank"
                        </a> */}

                    <button type="button" onClick="window.open('https://www.linkedin.com/home/?originalSubdomain=kr')"> <img src="https://cdn.pixabay.com/photo/2017/11/10/05/05/linkedin-2935407_960_720.png" height ="15" width="15" /></button>
                </MediaContainer>
                <ImageWrapper>
                    <a href = "https://stackoverflow.com/" target="_blank">
                        <LogoImage src={Stackoverflow} />
                    </a>
                    <a href = "https://github.com/" target="_blank">
                        <LogoImage src={Github} />
                    </a>
                    <a href = "https://www.linkedin.com/home/?originalSubdomain=kr" target="_blank">
                        <LogoImage src={Linkedin} />
                    </a>
                    

                </ImageWrapper>
                <button onClick={navigateToLearnMore}>Learn More</button>
            </UpSide>
            <DownSide>
            </DownSide>
        </Container2>
    )
}

export default MainPage;

// Social Media icons / link