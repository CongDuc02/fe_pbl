import { Card } from "antd";
import styled from "styled-components";



export const WrappercardStyle = styled(Card)`
width:200px;
& img{
  height:200px;
  width:200px;
}
position: relative;
`

export const StyleNameProduct = styled.div`
font-weight:400;
font-size:12px;
line-height:16px;
color:rgb(56,56,61)
`
export const WrapperReport = styled.div`
font-size:11px;
color:rgb(128,128,137);
display:flex;
align-items:center;
`
export const WrapperPrice = styled.div`
color:red;
font-size:18px;
font-weight:500;
margin: 5px 0 3px;
`
export const WrapperStyleSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
    
`
export const WrapperDiscount = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
`