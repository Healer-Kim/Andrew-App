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
`;

const LeftSide = styled.div`
    background-color: skyblue;
    width: 50%;
    height: 100vh
`;//    padding: 10px;

const RightSide = styled.div`
    
    width: 50%;
    background-color: teal;
`;// backround-image: url("https://www.wallstwatchdog.com/wp-content/uploads/2016/11/Self-employed-business-person-working-from-home.jpg");

const LabelWrapper = styled.div`

`

const Label = styled.div`
    width: 20%;
`

const input = styled.div`
    width: 80%
`

const LoginButton = styled.div`
    width: 30%;
    height: 30px;
    color: RGB(3, 148, 252);
    text: 20px
    background-color: white;
    border: radius;
    border-radius: 10px;
`

function LoginPage() { 
    const history = useHistory();

    const [user, setUser] = useState({
        id: "",
        password: "",
    });
    const {id, password} = user;
    // Create a function that routes to MainPage
    const navigateToMainPage = () => {
        console.log("hhh")
        // history.push("/main")
        // check if id/email is emtpy string and pw is empty
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
                <labelWrapper>
                    <Label>ID</Label>
                        <input></input>
                </labelWrapper>
                <labelWrapper>
                    <Label>Password</Label>
                        <input type="password" name="password"></input>
                </labelWrapper>
                {/*Create a button for classwork*/}
                <LoginButton onClick = {navigateToMainPage}>Login</LoginButton>
            </LeftSide>
            <RightSide>assassdadsadd</RightSide>;
        </Container>
    )
}

export default LoginPage;