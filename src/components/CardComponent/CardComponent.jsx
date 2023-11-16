import React from 'react'
import { StyleNameProduct, WrapperDiscount, WrapperPrice, WrapperReport, WrapperStyleSell, WrappercardStyle } from './style'
import { StarFilled } from '@ant-design/icons';
import imageCard from '../../Imagess/Image1/Ip13.webp'
const CardComponent = (props) => {

  const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props


  return (
    <WrappercardStyle
      hoverable
      headStyle={{ width: '200px', height: '200px' }}
      style={{ width: 240 }}
      bodyStyle={{ padding: '10px' }}
      cover={<img alt="Iphone" src={imageCard} />}
    >
      <StyleNameProduct> {name} </StyleNameProduct>
      <WrapperReport>
        <span style={{ marginRight: '4px' }}>
          <span>{rating}</span> <StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
        </span>
        <WrapperStyleSell> | Da ban {selled || 1000}+</WrapperStyleSell>
      </WrapperReport>
      <WrapperPrice>
          <span style={{ marginRight: '8px' }}>{price}</span>
                <WrapperDiscount>
                    - {discount || 5} %
                </WrapperDiscount>
        </WrapperPrice>

    </WrappercardStyle>
  )
}

export default CardComponent