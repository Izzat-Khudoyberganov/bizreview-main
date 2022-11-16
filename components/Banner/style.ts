import styled from "styled-components"

interface Props {
  image: any
  mobile: any
}
export const BannerWraper = styled.section<Props>`
  background-image: url(${(props) => props.image.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 50px;
  height: 130%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.mobile.src});

  }
  @media(max-width: 500px) {
    padding: 50px 25px;
  }
`
