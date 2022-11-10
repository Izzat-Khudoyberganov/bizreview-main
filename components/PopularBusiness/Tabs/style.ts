import styled from "styled-components"

export const BlockWraper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 50px;
  background-color: #fff;
`
export const BtnGroup = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 850px) {
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar{
    display: none;
  }
  }
`
export const BlockTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TabsLink = styled.p`
  color: #22b0fc;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`
