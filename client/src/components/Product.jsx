import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile, laptop, tablet, desktop } from '../responsive'

const Container = styled.div`
    position: relative;
    flex: 1 0 21%;
    padding: 5px;
    max-width:300px;
    max-height: 250px;
    border: 2px solid #def1ff;
    margin:5px;
    min-width: 300px;
    max-height: fit-content;
    padding: 10px;
    overflow: hidden;
    ${desktop({   maxWidth: "250px",
    maxHeight: "450px",
    minWidth: "auto",marginTop:"auto",height:"450px",
    objectFit: "scale-down" })}
    ${tablet({ maxWidth: "250px",minWidth:"215px" })}
    ${mobile({minWidth:"124px",maxHeight: "366px" })}
   
  
`
const Main = styled.div`
 ${desktop({ position: "absolute",
  bottom: "0",
  left: "0"})};

`

const Image = styled.img`


    position: relative;
    object-fit: scale-down;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    cursor: pointer;  

 -webkit-tap-highlight-color: transparent;
 pointer-events:none;


 /* ${mobile({  width: "100%",
    height: "100%"  })} */

`

const Circle = styled.div`

  width: 200px;
  height: 200px;
  background-color: #def1ff;
  border-radius: 50%;
  position: relative;
  right: 45px;
  cursor: pointer;
  ${desktop({  right: "0" ,margin:"0px auto"  })}
  ${mobile({ width:"150px",height:"150px"})}


  &:hover {
    ${Image}{
        transform: scale(1.2);
        &:active {
    transform: scale(1.4);
    background-color: white;
  }
  }

}

`




const IconWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 15px;
    /* display: none; */

`

const IconAdd = styled(AddIcon)`
    
    &:hover {
   
    transform: scale(1.2);
  }

  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.5);
  }

`

const ProductInfoWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-between;
    

    
    

`
const MoreInfoWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({ })}

    

`

const Price = styled.div`
    color:#3e515f;
    font-size: 42px;
    font-family: fantasy;
    font-weight: 500;
    text-align-last: end; 
    ${desktop({ 
         position: "absolute",
    top:"0", 
    left:"0"

      })} 
            ${mobile({  fontSize: "40px",top:"60px" })}

 
`

const PriceInfo = styled.div`
    color:#3e515f;
    font-family: 'Assistant';
    font-size: 20px;
    font-weight: 500;
    text-align-last: end;  
    
    position: absolute;
    top:50px; 
    left:10px;
    ${mobile({  fontSize: "15px", top:"100px"})}



  

`

const ProductTitle = styled.div`
    color:#3e515f;
    font-size: 40px;
    font-weight: 500;
    font-family: 'Assistant';
    ${desktop({ 
     width: "57%"

      })} 
      ${mobile({  fontSize: "29px", width: "100%" })}
       
`

const ProductDesc = styled.div`

    color:#3e515f;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Assistant';
    ${mobile({  fontSize: "15px"})}
      
`

const IconRemove = styled(RemoveIcon)`
    margin-left:5px;
    border-radius: 10%;
  &:hover {
    background-color: #ffffff3d;
    transform: scale(1.2);
  }
  &:active {
    background-color: #ffffff3d;
    color: #ffc107;
    transform: scale(1.5);
  }
`
const InputAmount = styled.input`
    width: 18%;
    font-size: 22px;
    text-align: center;
    margin: 0px 5px;
    ${desktop({   width: "25%" })}

`
const ButtonBuy = styled.button`
    color: black;
    font-size: 28px;
    font-family: 'Assistant';
    border: none;
    font-weight: 400;
    border-radius: 5px;
    background-color: #def1ff;
    cursor: pointer;
    margin-top:18px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
   transform: scale(1.0);
 }

 &:active {
   background-color: #a0d3f8;
   transform: scale(1.3);
 }
 ${mobile({  marginRight:"5px" })}

`

const ButtonAmount = styled.button`
   float: left;
   color: black;
    font-size: 25px;
    font-family: 'Assistant';
    border: none;
    font-weight: 400;
    border-radius: 5px;
    background-color: #def1ff24;
    border: 1px solid #a0d3f8 ;
    margin-top:18px;
    -webkit-tap-highlight-color: transparent;

    &:hover {
   transform: scale(1.0);
   cursor: pointer;
 }

 &:active {
   background-color: #a0d3f8;
   transform: scale(1.3);
 }
 ${mobile({  marginLeft:"5px" })}
`

const PriceShakel = styled.span`
    font-size: 20px;
`
const PirceExtra = styled.span`
    font-size: 25px;
    font-family: 'Assistant';
`

const Product = ({item}) =>{




    return (
        <Container>
            <ProductInfoWrapper>
            <ProductTitle>{item.title}</ProductTitle>
            <Price><PriceShakel>₪</PriceShakel>{item.price}<PirceExtra>{item.priceExtra}</PirceExtra></Price>
            <PriceInfo>{item.priceDesc}</PriceInfo>
            </ProductInfoWrapper>
            <MoreInfoWrapper>
            <ProductDesc>{item.brand}</ProductDesc>
           
          
            </MoreInfoWrapper>
            <Main>
            <Circle>
            <Image src={item.img}/>
            </Circle>
            <ButtonBuy>הוסף</ButtonBuy>
            <ButtonAmount>כמות</ButtonAmount>
            <IconWrapper >
            <IconAdd fontSize='large'/>
            <InputAmount defaultValue="0" type="text"/>
            <IconRemove fontSize='large'/> 
            </IconWrapper>
            </Main>
        </Container>
    )
}

export default Product
