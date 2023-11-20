import { Button, Dropdown, Space, Table } from 'antd'
import React, { useState } from 'react'
import Loading from '../LoadingComponent/Loading';
import { DownOutlined } from '@ant-design/icons';

const TableComponent = (props) => {

  const { selectionType = 'checkbox', data: dataSource = [], isLoading = false, columns = [], handleDeleteMany  } = props
  const [rowSelectedKeys, setRowSelectedKeys] = useState([])

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
      setRowSelectedKeys(selectedRowKeys)
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === 'Disabled User',
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
  };

  const handleDeleteAll = () => {
    handleDeleteMany(rowSelectedKeys)
  }

  const items = [ {
    key: '1',
    label: (
      <a onClick={handleDeleteAll}>
        Xóa tất cả
      </a>
    ),
  },
  // {
  //   key: '2',
  //   danger: true,
  //   label: 'a danger item',
  // },
];


  return (
    <div>
    <Loading isLoading={isLoading}>
      <div> <Dropdown menu={{
      items,
    }}
    
  >
    <Button style={{marginBottom: '8px'}}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
  </div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataSource}
        {...props}
      />
    </Loading>
    </div>
  )
}

export default TableComponent
