import Add from "@mui/icons-material/Add"
import Remove from "@mui/icons-material/Remove"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../Responsive"

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
`
const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${(props) => props.type === "filled" && "none"};
   background-color:${(props) => props.type === "filled" ? "black" : "transparent"};
   color:${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
   text-decoration: underline;
   margin: 0px 10px;
   cursor: pointer;
`
const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
   flex: 2;
   display: flex;
`
const Image = styled.img`
  width: 200px;
  height: 200px;
`
const Details = styled.span`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ProductAmountContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 20px;
`
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
   font-size: 25px;
   font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
  background-color: #eee;
  height: 0px;
  border: 1px lightblack;

`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ marginTop: "16px" })}
`
const SummaryTitle = styled.h1`
   font-weight: 200;
   ${mobile({ display: "block ruby" })}
`
const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props => props.type === "total" && "500"};
   font-size: ${props => props.type === "total" && "25px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
   width:100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 500;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMGFpciUyMGpvcmRhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"></Image>
                <Details>
                  <ProductName><b>Product:</b> AIR JORDANS</ProductName>
                  <ProductId><b>ID:</b> 12049444565</ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize><b>Size:</b> 40</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add></Add>
                  <ProductAmount>2</ProductAmount>
                  <Remove></Remove>
                </ProductAmountContainer>
                <ProductPrice>Rs 21000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetail>
                <Image src="https://images.unsplash.com/photo-1589226849736-8d0e0c78e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGplYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"></Image>
                <Details>
                  <ProductName><b>Product:</b> DENIM JEANS</ProductName>
                  <ProductId><b>ID:</b> 53627262737</ProductId>
                  <ProductColor color="blUE"></ProductColor>
                  <ProductSize><b>Size:</b> XXL</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add></Add>
                  <ProductAmount>3</ProductAmount>
                  <Remove></Remove>
                </ProductAmountContainer>
                <ProductPrice>Rs 1000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs 25000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -500</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs 25000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart