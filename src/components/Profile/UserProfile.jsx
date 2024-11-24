
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const UserProfile = () => {
    const { state } = useLocation();

    if (!state) {
        return (
            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
                <h2 className="text-xl text-red-500">Error: No user data available</h2>
                <Link to="/" className="text-blue-500 hover:underline">
                    Return to Registration
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6">User Profile</h2>
            <div className="space-y-4">
                <div className="border-b pb-2">
                    <h3 className="text-gray-600">Full Name</h3>
                    <p className="text-lg">{state.firstName} {state.lastName}</p>
                </div>
                <div className="border-b pb-2">
                    <h3 className="text-gray-600">Email</h3>
                    <p className="text-lg">{state.email}</p>
                </div>
                <div className="border-b pb-2">
                    <h3 className="text-gray-600">Favorite Season</h3>
                    <p className="text-lg">{state.season}</p>
                </div>
                <div className="mt-6">
                    <Link
                        to="/dashboard"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;