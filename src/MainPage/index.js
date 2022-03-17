import styled from "styled-components";
//import { Row, Col} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const UpSide = styled.div`
width 210vh;
height 50vh;
background-color: skyblue;
`;

const DownSide = styled.div`
width 210vh;
height 50vh;
background-color: teal;
`;



function MainPage() {
    return (
        <Container>
            <UpSide>
                asda
            </UpSide>
            <DownSide>
                asda
            </DownSide>
        </Container>
    )
}

export default MainPage;