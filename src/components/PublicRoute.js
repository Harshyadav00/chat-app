import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useProfile } from '../context/profile.context';
import { Container, Loader } from 'rsuite';

const PublicRoute = () => {

    const { profile, isLoading } = useProfile() ;


    if(isLoading && !profile ){
        return (
            <Container>
                <Loader center vertical size="md" content="Loading" speed='slow'  />
            </Container>
        )
    }

    if ( profile && !isLoading) {
        return <Navigate to="/" />;
    }

    return (
        <Outlet />
    );
};

export default PublicRoute;
