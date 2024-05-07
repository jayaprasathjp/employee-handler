import React from 'react';

const Details = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1603415520690-8d03ef9a0d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" alt="Profile" />
                    <h2 className="mt-4 font-bold text-xl">Jane Doe</h2>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                    <div className="mt-3">
                        <p className="text-gray-800 text-sm font-semibold">About</p>
                        <p className="text-gray-600 mt-1 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus elit, vestibulum ut, placerat ac, adipiscing vitae, felis.</p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col space-y-3">
                    <div className="flex items-center justify-between text-sm font-medium text-gray-800">
                        <span>Email</span>
                        <span className="text-indigo-600">jane.doe@example.com</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-medium text-gray-800">
                        <span>Location</span>
                        <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-medium text-gray-800">
                        <span>Joined</span>
                        <span>August 24, 2019</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
