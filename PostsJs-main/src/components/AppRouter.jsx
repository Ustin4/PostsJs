import React, {useContext} from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router/routes';
import {AuthContext} from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader/>;
    }
// const navigate = useNavigate()
    return (
        <Routes>
            {isAuth  ? (
                <>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                    <Route path="*" element={<Navigate to="/posts" />} />
                </>
            ) : (
                <>
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                    <Route path="" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
};

export default AppRouter;