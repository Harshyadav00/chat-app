import React, { useCallback } from 'react'
import { Button, Drawer, Notification } from 'rsuite'
import DashboardIcon from '@rsuite/icons/Dashboard';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';
import { auth } from '../../misc/firebase';

const DashboardToggle = () => {

  const { isOpen, open, close } = useModalState() ;


  const onSignOut = useCallback(() => {

      auth.signOut();
      close();
      return(
        <Notification type='success'>Sign out</Notification>
      )


  },[close]);

  const isMobile = useMediaQuery('(max-width:992px)') ;

  return (
    <>
        <Button block color="blue" onClick={open} appearance='primary' >
            <DashboardIcon /> Dashboard
        </Button>
        <Drawer size={isMobile?'full':'md'} open={isOpen} onClose={close} placement='left' >
            <Dashboard onSignOut={ onSignOut} />
        </Drawer>
    </>
  )
}

export default DashboardToggle