import styled from "styled-components"
import mobile from "../../img/mobile-banner-img.png"
interface Props {
  image: any
  mobile: any
}
export const BannerWraper = styled.section<Props>`
  background-image: url(${(props) => props.image.src});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  border: 1px solid white;
  height: 500px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.mobile.src});
  }
`
