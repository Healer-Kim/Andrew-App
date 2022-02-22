import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    background-color: 
    display: flex;
    flex-direction: column;
    
`;

const WelcomeTitle = styled.h1`
    font-size: 100px;
    color: blue;
    background-color: beige;
    width: 50%;
    martin-top: 20px;
    text-align: center;
`;


function LoginPage() { 
        return 
        <Container>
            <WelcomeTitle>Left Half Page</WelcomeTitle>;
            <WelcomeTitle>RIght Half Page</WelcomeTitle>;
        </Container>
}

export default LoginPage;