import { Badge, Col, Popover } from 'antd'
import React, { useEffect, useState } from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperHeaderSmall, WrapperContentPopup } from './style'
import {
  UserOutlined,
  DownCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide';
import Loading from '../LoadingComponent/Loading';




const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')


  const handleNavigateLogin = () => {
    navigate('/signIn') 
  }

  const handleLogout = async () => {
    setLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setLoading(false)
  }
  
  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])

  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate('/user/profile-user')} >Thông tin người dùng</WrapperContentPopup>
      {user?.isAdmin && (

        <WrapperContentPopup onClick={() => navigate('/system/admin')}>Quản lí hệ thống</WrapperContentPopup>
      )}

    </div>
  );

  return (
    <div style={{   justifyContent: 'center' }}>
      <WrapperHeader gutter={17} style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
        <Col span={6}>
          <h1> <WrapperTextHeader>DIEN THOAI GIA RE</WrapperTextHeader></h1>
        </Col>
        
        {!isHiddenSearch && (
          
          <Col span={12} >
            <ButtonInputSearch
              size='large'
              textButton='Tìm kiếm'
              placeholder="input search text"
  
            //onSearch={onSearch}
            /></Col>
        )}
        <Col span={6} style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>

        <Loading isLoading={loading}>
          <WrapperHeaderAccount style={{gap: '5px'}}>
            {userAvatar ? (
                  <img src={userAvatar} alt="avatar" style={{
                    height: '30px',
                    width: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} />
                ):(
              <UserOutlined style={{ fontSize: '30px' }} />
              )}

            {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click" >
                    <div style={{ cursor: 'pointer'}}> {userName?.length ? userName : user?.email} </div>
                    
                  </Popover>
                  
                </>
              ) : (
            <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
              <WrapperHeaderSmall> Đăng nhập/Đăng ký</WrapperHeaderSmall> <br />
              <div>
                <DownCircleOutlined />
                <WrapperHeaderSmall>Tài Khoản</WrapperHeaderSmall>
              </div>
            </div>

             )}
          </WrapperHeaderAccount>
        </Loading>
        {!isHiddenCart && (

          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px' }} />
            </Badge>
            <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>

          </div>
        )}
        </Col >
      </WrapperHeader >
    </div >
  )
}

export default HeaderComponent