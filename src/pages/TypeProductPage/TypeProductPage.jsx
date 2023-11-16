import React from 'react'
import NavBarComponent from '../../components/NavbarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbarComponent, WrapperProduct } from './style'

const TypeProductPage = () => {
  return (
    <div style={{ padding: '0 120px', background: "#efefef" }}>
      <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
        <WrapperNavbarComponent span={4}>
          <NavBarComponent />
        </WrapperNavbarComponent>
        <Col span={20}>
          <WrapperProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProduct>
          <center>
            <Pagination style={{ paddingTop: '70px' }} defaultCurrent={1} total={50} />
          </center>
        </Col>

      </Row>
    </div>
  )
}

export default TypeProductPage