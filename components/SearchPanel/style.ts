import styled from "styled-components"

export const SearchPanelContent = styled.div`
  width: 850px;
  height: 100px;
  background-color: white;
  margin: 0 auto;
  margin-top: -50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding-left: 30px;

  @media (max-width: 933px) {
    /* width: calc(100% - 30px); */
    width: 100%;
    height: 100%;
    padding: 30px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
