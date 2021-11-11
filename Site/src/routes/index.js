import React from 'react';
import { useAuth } from '../contexts/auth';
import { PrivateRoutes } from './private.routes';
import { AppRoutes } from './app.routes'


export const Routes = () => {

    const {user} = useAuth()
    if (user){
        return <PrivateRoutes />
    } else {
        return <AppRoutes />
    }
}