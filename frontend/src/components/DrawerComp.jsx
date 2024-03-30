import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import SideBar from './SideBar';
import { GiHamburgerMenu } from "react-icons/gi";


function DrawerComp() {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  return (
    <>
      <Space>
      <Button type="primary" onClick={showDrawer} className='bg-black sm:hidden'>
          <GiHamburgerMenu/>
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement='left'
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <SideBar/>
      </Drawer>
    </>
  )
}

export default DrawerComp