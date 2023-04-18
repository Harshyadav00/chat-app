import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useProfile } from '../context/profile.context';
import { Container, Loader } from 'rsuite';

const PrivateRoute = (children, ...routeProps) => {

    const { profile, isLoading } = useProfile() ;


    if(isLoading && !profile ){
        return (
            <Container>
                <Loader center vertical size="md" content="Loading" speed='slow'  />
            </Container>
        )
    }

    if (!profile && !isLoading) {
        return <Navigate to="/signin" />;
    }

    return (
        <Outlet />
    );
};

export default PrivateRoute;
