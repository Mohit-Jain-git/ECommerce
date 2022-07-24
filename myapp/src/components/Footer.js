import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
  /* ${mobile({ display: "none" })} */
`
const Right = styled.div`
  flex: 1;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`
const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center; 
`
const Payment = styled.img``
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ZAISHA.</Logo>
        <Desc>Here you get every type of clothing which is at the same time cost  effective and super in quality.We offer you the best we can, and hope that we serves what we promise!!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon></FacebookIcon>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon></InstagramIcon>
          </SocialIcon>
          <SocialIcon color="1DA1F2">
            <TwitterIcon></TwitterIcon>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Log In</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><RoomIcon style={{ marginRight: "10px" }} />Lonavla, West Mumbai - 201324</ContactItem>
        <ContactItem><PhoneIcon style={{ marginRight: "10px" }} />+11 234 445 9823</ContactItem>
        <ContactItem><MailIcon style={{ marginRight: "10px" }} />contact@yahoo.co.in</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  )
}

export default Footer