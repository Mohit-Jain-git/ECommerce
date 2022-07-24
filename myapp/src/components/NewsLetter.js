import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../Responsive";

const Div = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
   font-size: 50px;
   margin: 20px;
`
const Desc = styled.div`
   font-size: 25px;
   margin-bottom: 20px;
   font-weight: 200px;
   ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between;
   border: 1px solid lightgrey;
  ${mobile({ width: "80%" })}
`
const Input = styled.input`
   border: none;
   flex: 8;
   padding-left: 20px;
`
const Button = styled.button`
   flex: 1;
   border: none;
   background-color: teal;
   color: white;
`

const NewsLetter = () => {
  return (
    <Div>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"></Input>
        <Button><SendIcon></SendIcon></Button>
      </InputContainer>
    </Div>
  )
}

export default NewsLetter
