import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: #33CCFF
  
`
export const WrapperTextHeader = styled.span`
  font-size: 30px;
  color: #FF0000;
  font-weigh: bold;
  text-algin: left;
`
export const WrapperHeaderAccount = styled.div`
display:flex;
align-items:center;
color: #fff
gap:8px;
`
export const WrapperHeaderSmall = styled.span`
font-size: 13px;
color: #fff
`
export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`