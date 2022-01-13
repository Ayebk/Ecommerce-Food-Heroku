import React from 'react'
import styled from 'styled-components'
import Advertisement from '../components/Advertisement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile, laptop, tablet, desktop } from '../responsive'

const Container = styled.div`


`

const Wrapper = styled.div`
   
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4%;
    border-radius: 9px;
    padding: 15px;
   
    background-color: #a0d3f8;
  

     
`
const WrapperContainer = styled.div`
height: 70vh;
background-color: #a0d3f8;
border: solid #a0d3f8 8px;
    
    box-shadow: 0 0 14px #a0d3f8;
`


const Title = styled.h1`

text-align-last: center;


`

const MainTitle = styled.h1`
margin-top: 50px;
text-align-last: center;

font-family: Pushster;
margin-bottom: 10px;

`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;


`

const Input = styled.input`
   flex:1;
   font-size: 20px;
    min-width: 50%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
   color: black;
    font-size: 28px;
    font-family: 'Assistant';
    border: none;
    font-weight: 400;
    border-radius: 5px;
    background-color: #def1ff;
    border: solid #0095ff71 2px;
    cursor: pointer;
    margin-top:40px;
    padding: 3px 30px;
    margin-bottom: 10px;
    &:hover {
   transform: scale(1.2);
 }

 &:active {
   background-color: #a0d3f8;
   transform: scale(1.1);
 }
 ${tablet({ width:" 250px", fontSize:"25px"})}
`



const Register = () => {
    return (

        <Container>
            <Navbar />
            <Advertisement />
      
            <WrapperContainer>
            <Wrapper>
                <Title>הרשמה</Title>
                <Form>
                    <Input placeholder="שם פרטי + משפחה" />
                    <Input placeholder="דואר אלקטרוני" />
                    <Input placeholder=" סיסמה" />
                    <Input placeholder=" אימות סיסמה" />
                    <Button>פתיחת חשבון חדש</Button>
                   
                </Form>
            </Wrapper>
            </WrapperContainer>
            <Footer />
        </Container>
    )
}

export default Register
