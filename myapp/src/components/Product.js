import styled from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 0.5s ease;
  cursor: pointer;
  /* position: absolute; */
`
const Container = styled.div`
   flex: 1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: lightgrey;
   position: relative;
   &:hover ${Info}{
     opacity: 1;
   }
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
`
const Image = styled.img`
   height: 75%;
   z-index: 2;
`

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover{
     background-color: #e9f5f5;
     transform: scale(1.1);
  }
`
export const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img}></Image>
      <Info>
        <Icon><ShoppingCartOutlined></ShoppingCartOutlined></Icon>
        <Icon><SearchOutlined></SearchOutlined></Icon>
        <Icon><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></Icon>
      </Info>
    </Container>
  )
}
export default Product