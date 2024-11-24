// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 p-4">
                <div className="container mx-auto">
                    <AppRoutes />
                </div>
            </div>
        </Router>
    );
}

export default App;