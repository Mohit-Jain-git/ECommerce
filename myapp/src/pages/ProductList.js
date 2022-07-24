import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import { mobile } from "../Responsive"

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
   ${mobile({ marginLeft: "105px" })}
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ display: "flex", flexDirection: "column", width: "40%" })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
   ${mobile({ marginRight: "-13px" })}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid black;
  ${mobile({ marginTop: "16px" })}
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Announcements></Announcements>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Orange</Option>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Black</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>2XL</Option>
            <Option>3XL</Option>
          </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price(Low to High)</Option>
            <Option>Price(High To Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer />
    </Container>
  )
}

export default ProductList