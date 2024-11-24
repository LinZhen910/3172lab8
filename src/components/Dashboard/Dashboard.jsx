
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    // Sample data for demonstration
    const statistics = [
        { title: 'Total Users', value: '1,234' },
        { title: 'Active Sessions', value: '456' },
        { title: 'Daily Visitors', value: '789' },
        { title: 'New Registrations', value: '123' }
    ];

    const recentActivities = [
        { id: 1, action: 'User Registration', time: '2 minutes ago' },
        { id: 2, action: 'Profile Update', time: '5 minutes ago' },
        { id: 3, action: 'Password Change', time: '10 minutes ago' },
        { id: 4, action: 'New Login', time: '15 minutes ago' }
    ];

    return (
        <div className="max-w-6xl mx-auto mt-8 p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <Link to="/" className="text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {statistics.map(stat => (
                    <div key={stat.title} className="bg-white p-4 rounded shadow-md">
                        <h3 className="text-gray-600 text-sm">{stat.title}</h3>
                        <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Recent Activities</h3>
                <div className="space-y-4">
                    {recentActivities.map(activity => (
                        <div
                            key={activity.id}
                            className="flex justify-between items-center border-b pb-2"
                        >
                            <span>{activity.action}</span>
                            <span className="text-gray-500 text-sm">{activity.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;