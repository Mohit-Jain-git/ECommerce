import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../Responsive"

const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
  flex: 1;
`
const Title = styled.h1`
   font-weight: 200;
`
const Desc = styled.p`
   margin: 20px 0px;
   font-size: large;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   margin: 30px 0px;
  ${mobile({ width: "100%" })}
`
const Filter = styled.div`
   display: flex;
   align-items: center;
`
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;
   cursor: pointer;
`
const FilterSize = styled.select`
   margin-left: 10px;
   padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
   display: flex;
   align-items: center;
   width: 50%;
   justify-content: space-between;
     ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`
const Amount = styled.span`
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   border: 2px solid teal;
   margin: 0px 5px;
`
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;
   
   &:hover{
      background-color: lightgray;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src="https://media.gq.com/photos/621f97f3b90a026049f08e97/master/w_2000,h_1333,c_limit/Everlane-denim-popoever-shirt.jpg"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Shirt</Title>
          <Desc>This is a denim shirt. Super quality material, very thin cloth and sweat resistant. Easy to wear and cost effective with great material and pocket friendly. Contains one pocket and three buttons,having full sleeves.Fully summer friendly,makes your skin save from tanning and excess heat.</Desc>
          <Price>Rs 500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>2XL</FilterSizeOption>
                <FilterSizeOption>3XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon></RemoveIcon>
              <Amount>1</Amount>
              <AddIcon></AddIcon>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product