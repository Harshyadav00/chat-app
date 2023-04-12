import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {

    const profile = true;

    if (!profile) {
        return <Navigate to="/signin" />;
    }

    return (
        <Outlet />
    );
};

export default PrivateRoute;
