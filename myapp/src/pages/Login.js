import styled from "styled-components"
import { mobile } from "../Responsive"

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: url("https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGpwZyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1300&h=900") center;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   object-fit: cover;

`
const Wrapper = styled.div`
   width: 30%;
   padding: 20px;
   background-color: white;
   ${mobile({ marginTop: "-400px", width: "70%", alignItems: "center" })}
`
const Title = styled.h1``
const Form = styled.form`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
`
const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 10px 0px;
   padding: 10px;
`

const Button = styled.button` 
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
   margin-bottom: 10px;
`
const Link = styled.a`
   margin: 10px 0px;
   font-size: 15px;
   text-decoration: underline;
   cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input>
          <Button>LOGIN</Button>
          <Link>FORGOT THE PASSWORD?</Link>
          <Link>CREATE NEW ACCOUNT?</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register