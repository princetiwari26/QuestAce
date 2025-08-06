import { useState } from 'react';
import {
    LogOut,
    Copy,
    Check
} from 'lucide-react';

function Profile() {
    const [copiedPrivate, setCopiedPrivate] = useState(false);
    const [copiedPublic, setCopiedPublic] = useState(false);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'private') {
            setCopiedPrivate(true);
            setTimeout(() => setCopiedPrivate(false), 2000);
        } else {
            setCopiedPublic(true);
            setTimeout(() => setCopiedPublic(false), 2000);
        }
    };

    return (
        <main className="p-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 space-y-6">
                        <div className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4 overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Organization Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">EduTech Solutions</h2>
                            <p className="text-sm text-gray-500">Education Technology Provider</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Private Code</h3>
                                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                                    <span className="font-mono text-gray-800">1234567</span>
                                    <button
                                        onClick={() => copyToClipboard('123456', 'private')}
                                        className="text-indigo-600 hover:text-indigo-800"
                                    >
                                        {copiedPrivate ? <Check size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Keep this code secure</p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500 mb-1">Public Code</h3>
                                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                                    <span className="font-mono text-gray-800">A3B8C</span>
                                    <button
                                        onClick={() => copyToClipboard('A3B8C', 'public')}
                                        className="text-indigo-600 hover:text-indigo-800"
                                    >
                                        {copiedPublic ? <Check size={16} /> : <Copy size={16} />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Share this code for identification</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Organization Information</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-gray-500">Organization Name</p>
                                        <p className="text-sm font-medium text-gray-800">EduTech Solutions Inc.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Organization Email</p>
                                        <p className="text-sm font-medium text-gray-800">contact@edutechsolutions.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Agent Information</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-gray-500">Agent Name</p>
                                        <p className="text-sm font-medium text-gray-800">John Doe</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Agent Email</p>
                                        <p className="text-sm font-medium text-gray-800">john.doe@edutechsolutions.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-sm font-medium text-gray-500 mb-3">Account Statistics</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-indigo-600">4</p>
                                    <p className="text-xs text-gray-500">Active Exams</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-green-600">6</p>
                                    <p className="text-xs text-gray-500">Completed Exams</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-blue-600">1,245</p>
                                    <p className="text-xs text-gray-500">Questions</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-purple-600">3.8K</p>
                                    <p className="text-xs text-gray-500">Submissions</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">Last Login</p>
                                        <p className="text-xs text-gray-500">Today at 10:45 AM from Chrome, Windows</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <button className="w-32 flex items-center justify-center p-2 rounded-lg bg-red-200 text-red-600 hover:bg-red-300">
                                        <LogOut size={18} className="mr-2" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile