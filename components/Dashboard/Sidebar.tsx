import Link from 'next/link';
import React, { memo } from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-lg font-bold mb-4">Dashboard Menu</h2>
            <ul>
                <li className="mb-2">
                    <Link href="/dashboard" aria-label="Dashboard Home" className="hover:underline">Home</Link>
                </li>
                <li className="mb-2">
                    <Link href="/dashboard/workouts" aria-label="Workouts" className="hover:underline">Workouts</Link>
                </li>
                <li className="mb-2">
                    <Link href="/dashboard/stats" aria-label="Statistics" className="hover:underline">Statistics</Link>
                </li>
                <li className="mb-2">
                    <Link href="/dashboard/profile" aria-label="Profile" className="hover:underline">Profile</Link>
                </li>
            </ul>
        </aside>
    );
};

export default memo(Sidebar);
