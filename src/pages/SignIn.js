import React from 'react';
import { Container, Grid, Row, Panel, Col, Button } from 'rsuite';
import { auth } from '../misc/firebase' ;
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const SignIn = () => {

  const signInWithProvider = async (provider) => {
    signInWithPopup(auth, provider)
    .then((res) => {
        console.log(res) ;
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg>&nbsp;Continue With Google
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
