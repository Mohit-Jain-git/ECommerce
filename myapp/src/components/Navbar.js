import React from 'react'
import styled from 'styled-components'
import { Search } from "@mui/icons-material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../Responsive";
const Container = styled.div`
    height : 60px;
    ${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    ${mobile({ padding: "10px 0px" })}

`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-top: -13px;
      ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
   border: 1px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 2px;
   margin-top: -13px;
  ${mobile({ marginTop: "-29px", marginLeft: "-1px" })}


`
const Input = styled.input`
 border: none;
 ${mobile({ width: "50px" })}

`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
margin-top: -3px;
${mobile({ fontSize: "25px" })}

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
align-items: baseline;
${mobile({ justifyContent: "center", margin: "-7px", flex: 2, marginRight: "2px" })}

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ display: "block ruby", fontSize: "12px" })}

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'></Input>
            <Search></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Zaisha
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar