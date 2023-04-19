import React from 'react'
import { Button, Drawer } from 'rsuite'
import DashboardIcon from '@rsuite/icons/Dashboard';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashboardToggle = () => {

  const { isOpen, open, close } = useModalState() ;

  const isMobile = useMediaQuery('(max-width:992px)') ;

  return (
    <>
        <Button block color="blue" onClick={open} >
            <DashboardIcon /> Dashboard
        </Button>
        <Drawer size={isMobile?'full':'md'} open={isOpen} onClose={close} placement='left' >
            <Dashboard />
        </Drawer>
    </>
  )
}

export default DashboardToggle