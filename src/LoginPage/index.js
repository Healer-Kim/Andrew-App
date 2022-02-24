import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    background-color: 
    display: flex;
    flex-direction: column;
    
`;

const WelcomeTitle = styled.h1`
    font-size: 40px;
    color: white;
    font-weight: 800;
    martin-top: 20px;
`;

const LeftSide = styled.div`
background-color: white;
`

const RightSide = styled.div`
backround-image: url("https://www.wallstwatchdog.com/wp-content/uploads/2016/11/Self-employed-business-person-working-from-home.jpg")
height: 100vh
`

function LoginPage() { 
        return 
        <Container>
            <LeftSide>
                <WelcomeTitle>Welcome Back!</WelcomeTitle>
                <Label>ID</Label>
                    <input type="text" name="username"></input>
                <Label>Password</Label>
                    <input type="password" name="password"></input>
            </LeftSide>;
            <RightSide>Load Image Here</RightSide>;
        </Container>
}

export default LoginPage;