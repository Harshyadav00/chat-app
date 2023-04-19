import React from 'react'
import { Button, Drawer } from 'rsuite'

import { useProfile } from '../../context/profile.context'

const Dashboard = ( {onSignOut} ) => {

  const {profile} = useProfile()

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>
          Dashboard
        </Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <h1>Hey, {profile.name}</h1>
        <Button block color="red" appearance='primary' onClick={ onSignOut } >
          Sign Out
        </Button>
      </Drawer.Body>


      <Drawer.Actions>
      </Drawer.Actions>
    </>
  )
}

export default Dashboard