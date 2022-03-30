import styled from "styled-components";
//import { Row, Col} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    display: flex;
`;

const WelcomeTitle = styled.h1`
    font-size: 40px;
    color: white;
    font-weight: 800;
    margin-top: 20px;
    margin-left: 50px;
`;

const LeftSide = styled.div`
    background-color: skyblue;
    width: 50%;
    height: 100vh

`;//    padding: 10px;

const RightSide = styled.div`
    width: 50%;
    background-color: teal;
    height: 100vh
    backround-image: url("https://www.wallstwatchdog.com/wp-content/uploads/2016/11/Self-employed-business-person-working-from-home.jpg");
`;// 

const LabelWrapper = styled.div`
margin-left: 50px;
`

const Label = styled.div`
    width: 20%;
`

const input = styled.div`
    width: 80%
`

const LoginButton = styled.div`
    width: 40px;
    height: 25px;
    color: RGB(3, 148, 252);
    text-size: 20px
    background-color: white;
    border: solid;
    border-radius: 10px;
    border-width: 5px;
    margin-left: 180px;
`

function LoginPage() { 
    const history = useHistory();

    const [user, setUser] = useState({
        id: "",
        password: "",
    });
    const {id, password} = user;
    const navigateToMainPage = () => {
        console.log("hhh")
        if (id === "" || password === "") {
            alert("Please enter a valid id or password.");
            return;
        }
        if (id ==="andrew" && password === "1234") {
            alert(`Welcome back ${id}!`)
            history.push("/main")
        }
    };
    return  (
        <Container>
            <LeftSide>
                <WelcomeTitle>Welcome Back!</WelcomeTitle>
                <LabelWrapper>
                    <Label>ID</Label>
                        <input></input>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>Password</Label>
                        <input type="password" name="password"></input>
                </LabelWrapper>
                <LoginButton onClick = {navigateToMainPage}>Login</LoginButton>
            </LeftSide>
            <RightSide></RightSide>;
        </Container>
    )
}

export default LoginPage;