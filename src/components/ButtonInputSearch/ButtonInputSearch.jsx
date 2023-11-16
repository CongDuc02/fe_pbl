// import { Button } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InpuComponets/InputComponent';
import ButtonComponent from '../ButtonComponents/ButtonComponent';
const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton, bordered, backgroundColorInput = "#fff", backgroundColorButton = "#fff",
    colorButton = "#fff"

  } = props
  return (
    <div style={{ display: 'flex', backgroundColor: "#fff" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}

        style={{ background: backgroundColorButton, border: !bordered && 'none' }}
        icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
        textButton={textButton}


      />
    </div >
  )
}

export default ButtonInputSearch