import styled from "styled-components"
import Button from "../Button"

const Footer = () => {
  return (
    <FooterContainer>
      <Button primary={true}>
        Novo video
      </Button>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
`