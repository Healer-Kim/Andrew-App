import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const WelcomeTitle = styled.h1`
    font-size: 40px;
    color: green;
    font-weight: 800;
    martin-top: 20px;
`;

const LeftSide = styled.div`
    background-color: RGB(3, 252, 111);
    width: 50%;

    float: left;
`;//    padding: 10px;

const RightSide = styled.div`
    
    width: 50%;
    background-color: red;
    float: left;
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
`

function LoginPage() { 
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
                    <LoginButton>Login</LoginButton>
                </LeftSide>
                <RightSide>assadasdassdadsadd</RightSide>;
            </Container>
        )
}

export default LoginPage;