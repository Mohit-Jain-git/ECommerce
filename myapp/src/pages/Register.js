import styled from "styled-components"
import { mobile } from "../Responsive"

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: url("https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGpwZyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1300&h=900") center;
   background-repeat: no-repeat;
   display: flex;
   align-items: center;
   justify-content: center;
   object-fit: cover;
`
const Wrapper = styled.div`
   width: 40%;
   padding: 20px;
   background-color: white;
  ${mobile({ width: "75%", height: "50vh", display: "flex", flexWrap: "wrap" })}
`
const Title = styled.h1`
  ${mobile({ fontSize: "20px" })}
`
const Form = styled.form`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
 ${mobile({ flexWrap: "wrap", display: "flex", flexDirection: "column" })}
`
const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
  ${mobile({ width: "10%", margin: "5px" })}
`

const Agreement = styled.span`
   font-size: 18px;
   margin: 20px 0px;
`
const Button = styled.button` 
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Username"></Input>
          <Input placeholder="E-mail"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Agreement>By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register