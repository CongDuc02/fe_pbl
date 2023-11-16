import { Row, Col, Image, InputNumber } from 'antd'
import React from 'react'
import Ip13 from '../../Imagess/Image1/Ip13.webp'
import Ip13_1 from '../../Imagess/Image1/Ip13_1.webp'
import Ip13_2 from '../../Imagess/Image1/Ip13_2.webp'
import Ip13_3 from '../../Imagess/Image1/Ip13_3.webp'
import Ip13_4 from '../../Imagess/Image1/Ip13_4.webp'
import { StarFilled, PlusOutlined, MinusOutlined, SearchOutlined } from '@ant-design/icons'
import { WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperSytyleNameProduct } from './style'
import ButtonComponent from '../ButtonComponents/ButtonComponent'
const ProductDetailComponent = () => {
  const onchange = () => { }
  return (
    <Row>
      <Col span={10}>
        <Image src={Ip13} alt="Image Iphone" preview='fales' />
        <Row>
          <Col span={4}>
            <Image src={Ip13_1} alt="Image Iphone" preview='false' />
          </Col>
          <Col span={4}>
            <Image src={Ip13_3} alt="Image Iphone" preview='false' />
          </Col>
          <Col span={4}>
            <Image src={Ip13_4} alt="Image Iphone" preview='false' />
          </Col>
          <Col span={4}>
            <Image src={Ip13_2} alt="Image Iphone" preview='false' />
          </Col>

        </Row>
      </Col>
      <Col span={14}>
        <WrapperSytyleNameProduct>
          Điện thoại - Iphone 14 - Chính hãng
        </WrapperSytyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: '13px', color: '#FFFF66' }} />
          <StarFilled style={{ fontSize: '13px', color: '#FFFF66' }} />
          <StarFilled style={{ fontSize: '13px', color: '#FFFF66' }} />
          <StarFilled style={{ fontSize: '13px', color: '#FFFF66' }} />
          <StarFilled style={{ fontSize: '13px', color: '#FFFF66' }} />
        </div>
        <div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>
              10,000,000 vnđ
            </WrapperPriceTextProduct>
          </WrapperPriceProduct>
        </div>
        <WrapperQualityProduct>

          <div style={{ margin: '10px 0 ' }}>
            <h2>Số lượng</h2> </div>
          <div>
            <PlusOutlined style={{ color: '#000033' }} />
            <InputNumber min={1} max={20} defaultValue={3} onChange={onchange} />
            <MinusOutlined style={{ color: '#000033' }} />
          </div>
          <div style={{ margin: '20px 0 20px' }} >
            <ButtonComponent styleButton={{ background: "red", height: '48px', width: '250px' }}
              size={60}
              textButton={' Mua '}
              styleTextButton={{ color: '#fff' }}

            >

            </ButtonComponent>
          </div>
        </WrapperQualityProduct>
      </Col>
    </Row>
  )
}

export default ProductDetailComponent