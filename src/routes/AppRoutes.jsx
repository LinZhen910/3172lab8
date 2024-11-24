
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from '../components/Form/LoginForm';
import UserProfile from '../components/Profile/UserProfile';
import Dashboard from '../components/Dashboard/Dashboard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;