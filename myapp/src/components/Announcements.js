import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 40px;
  background-color: pink;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bolder;
  margin-top: -8px;
  margin-left: -11px;
  margin-right: -9px;
`

const Announcements = () => {
  return (
    <Container>
      Super Deal !! Free Shipping on Orders Over Rs 500
    </Container>
  )
}

export default Announcements