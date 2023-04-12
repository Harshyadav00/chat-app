import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {

    const profile = false;

    if (!profile) {
        return <Navigate to="/" />;
    }

    return (
        <Outlet />
    );
};

export default PublicRoute;
