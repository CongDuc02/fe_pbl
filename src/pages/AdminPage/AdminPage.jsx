import React, { useState } from 'react'
import { getItem } from '../../utils';
import { Menu } from 'antd';
import {UserOutlined, AppstoreOutlined} from '@ant-design/icons'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';



const AdminPage = () => {


  const items = [
    getItem('Người dùng', 'user', <UserOutlined />,),
    getItem('Sản phẩm', 'product', <AppstoreOutlined />,)
    ];

  const [keySelected, setKeySelected] = useState('');  
  const handleOnCLick = ({ key }) => {
    setKeySelected(key)
  }
  
  const renderPage = (key) => {
    switch (key) {
      case 'user':
        return (
          <AdminUser />
        )
      case 'product':
        return (
          <AdminProduct />
        )
      // case 'orders':
      //   return (
      //     <OrderAdmin />
      //   )
      default:
        return <></>
    }
  }

  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart />
      <div style={{ display: 'flex',overflowX: 'hidden' }}>
        <Menu
        mode="inline"              
        style={{ width: 256,
        boxShadow: '1px 1px 2px #ccc',
        }}
        items={items}
        onClick={handleOnCLick}
        />
        <div style={{ flex: 1, padding: '15px 0 15px 15px' }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
    
  )
}

export default AdminPage
