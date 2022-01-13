import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, StyledEngineProvider } from '@mui/material';
import { red } from '@mui/material/colors';
import { mobile, laptop, tablet } from '../responsive'
import { Scale } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import ReadMoreIcon from '@mui/icons-material/ReadMore';


const Container = styled.div`
    height: 80px;

`

const Wrapper = styled.div`
    padding: 25px 10px 0px 10px;
    display: flex;
`

const Center = styled.div`
    display: flex;
    flex:1.5;
    -webkit-tap-highlight-color: transparent;

    
    
`
const SearchContainer = styled.div`
    display: flex;
    flex:4;
`
const Left = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: transparent;

    

`


const Logo = styled.div`
    margin-right: 1%;
    margin-left: 2%;
    align-self: center;
    font-size: 40px;
    font-family: Pushster;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    ${mobile({ fontSize: "30px" })}
`

const MenuItem = styled.div`
    font-size: 20px;
    direction: rtl;
    margin: 20px;
    font-family: Assistant;
    cursor: pointer;
    
    min-width: 55px;
    min-width: ${props => props.type === "menu3" && "105px"};
    
    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.1);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.2);
  }


  ${tablet({ display: "none" })};
  
`

const LoginButtons = styled.div`
    font-size: 20px;
    direction: rtl;
    margin: 20px;
    margin-left: ${props => props.type === "last" && "40px"};
  
    font-family: Assistant;
    cursor: pointer;
    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.05);
  }
  &:active {
    background-color: #ffffff3d;
    color: #171b97;
    transform: scale(1.1);
  }
  ${laptop({ margin: "20px 10px 20px 20px" })};
  ${mobile({ display: "none" })}
`
const IconCart = styled(ShoppingCartOutlinedIcon)`
    cursor: pointer;
    margin-left: 30px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
    background-color: #ffffff3d;
    transform: scale(1.2);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.4);
  }


`



const SearchInput = styled.input`
   
   border: none;
   box-shadow: 0px 0px 3px #014783;
    height: 36px;
    font-weight: 400;
    font-size: 29px;
    width: 90%;
    margin-top:14px;
    margin-right: 15px;
    &:hover {
    
    box-shadow: 0px 0px 4px #014783;
  }
 
  &:focus {
   
    
    color: #ffc107;
   
        
  }
  ${laptop({ display: "none" })};
`

const SearchIconContainer = styled.div`
display: none;
  font-size: 32px;
    color: #0a98ff;;
    align-self: center;
    border-radius: 50%;
    width: 40px;
    height: 38px;
    text-align: center;
    border: solid;
    border-top: dotted;
    border-width: 2px;
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    &:active {
        transform: scale(1.1);

  }
  ${laptop({ display: "block" ,margin: "0px 15px 5px 0px"})};
  ${mobile({ fontSize: "30px", width: "30", height: "35px" ,margin: "0px 5px 5px 0px" })}
`
const MoreIconContainer = styled.div`
display: none;
cursor: pointer;

font-size: 30px;
    color: #ffffff;
    align-self: center;
    margin-right: 15px;
    width: 40px;
    background-color: #0a98ff;
    height: 38px;
    text-align: center;
    border: solid;
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;
    &:active {
    transform: scale(1.1);
    }
  ${tablet({ display: "block", marginBottom: "5px" })};
`




const Navbar = () => {


    return (

        <Container>
            <Wrapper>



                <Center>
                    <Logo>
                        FoodNow
                    </Logo>
                    <MenuItem type='menu1'>
                        דף בית
                    </MenuItem>
                    <MenuItem type='menu2'>
                        מוצרים
                    </MenuItem>
                    <MenuItem type='menu3'>
                        רשתות וחנויות
                    </MenuItem>




                </Center>
                <MoreIconContainer>
                    <ReadMoreIcon />
                </MoreIconContainer>

                <SearchContainer>
                    <SearchInput placeholder="חיפוש..." />

                    <SearchIconContainer>
                        <SearchIcon />
                    </SearchIconContainer>

                </SearchContainer>


                <Left >

                    <LoginButtons>
                        הרשמה
                    </LoginButtons>
                    <LoginButtons type='last'>
                        התחבר
                    </LoginButtons>
                    <Badge badgeContent={4} color="primary">
                        <IconCart color="action" fontSize="large" />
                    </Badge>
                </Left>
            </Wrapper>

        </Container>

    )
}

export default Navbar
