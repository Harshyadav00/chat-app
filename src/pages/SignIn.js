import React from 'react';
import { Container, Grid, Row, Panel, Col, Button } from 'rsuite';
import { auth, database } from '../misc/firebase' ;
import { GoogleAuthProvider, getAdditionalUserInfo, signInWithPopup } from 'firebase/auth';
import { ref, serverTimestamp, set } from 'firebase/database';
import { GoogleIcon } from '../public/Icons/GoogleIcon';
import firebase from 'firebase/compat/app';

const SignIn = () => {

  const signInWithProvider = async (provider) => {
    signInWithPopup(auth, provider)
    .then((res) => {
        console.log(res);
        const user = res.user ;
        if(getAdditionalUserInfo(res).isNewUser){
            console.log("true");
            set(ref(database, 'profiles/'+user.uid),{
              name : user.displayName,
              createdAt : serverTimestamp()
            });
        }

    }).catch((err) => {
      console.log(err) ;
    });

  }

  const onGoogleSignIn = () => {
    const provider = new GoogleAuthProvider() ;
    signInWithProvider( provider ); 
  }




  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className='text-center'>
                <h2>Welcome to chat</h2>
                <p>Chat in progress</p>
              </div>

              <div className='mt-3' >
                <Button block color="green" appearance="primary" className="d-flex align-items-center" onClick={onGoogleSignIn}>
                  <GoogleIcon/> Continue With Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
