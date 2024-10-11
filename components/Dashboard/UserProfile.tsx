/* eslint-disable @next/next/no-img-element */
// src/components/Dashboard/UserProfile.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserProfileProps {
    name: string;
    email: string;
    profilePicture?: string; // Optional profile picture URL
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, profilePicture }) => {
    return (
        <Card className="shadow-lg mb-6">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">User Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
                {profilePicture && (
                    <img src={profilePicture} alt={`${name}'s profile`} className="w-16 h-16 rounded-full"/>
                )}
                <div>
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p>{email}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default UserProfile;