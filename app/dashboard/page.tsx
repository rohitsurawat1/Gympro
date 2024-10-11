import React, { Suspense, memo } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/Dashboard/Sidebar';
import UserProfile from '@/components/Dashboard/UserProfile';

// Lazy load WorkoutChart
const WorkoutChart = dynamic(() => import('@/components/Dashboard/WorkoutChart'), {
    suspense: true, // Enable suspense
});

const DashboardPage = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-grow p-4">
                {/* User Profile */}
                <UserProfile />

                {/* Dashboard Content */}
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                
                <Suspense fallback={<p>Loading Chart...</p>}>
                    <WorkoutChart />
                </Suspense>
            </div>
        </div>
    );
};

export default memo(DashboardPage);
