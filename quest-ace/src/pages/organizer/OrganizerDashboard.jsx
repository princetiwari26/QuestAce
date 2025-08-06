import { useState } from 'react';
import {
    LayoutDashboard,
    FilePlus,
    Eye,
    BookOpen,
    BarChart2,
    FileText,
    Bell,
    Settings,
    User,
    LogOut,
    Search,
    ChevronDown,
    Menu,
    X
} from 'lucide-react';

const OrganizerDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [searchQuery, setSearchQuery] = useState('');

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'Create New Exam', icon: FilePlus },
        { name: 'View Active Exams', icon: Eye },
        { name: 'Question Bank', icon: BookOpen },
        { name: 'Student Analytics', icon: BarChart2 },
        { name: 'Submissions / Results', icon: FileText },
        { name: 'Notifications', icon: Bell },
        { name: 'Settings', icon: Settings },
        { name: 'Profile', icon: User },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Righteous&display=swap" rel="stylesheet" />
            <div
                className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white fixed h-full`}
            >
                <div className="p-2 ml-10 mt-5 flex items-center justify-between">
                    {sidebarOpen && (
                        <div className="flex items-center text-2xl font-bold">
                            <div to="/" className="flex items-center">
                                <span className="text-blue-400 font-['Righteous']">Q</span>
                                <span className="text-white font-['Poppins']">uest</span>
                                <span className="text-blue-400 font-['Righteous']">A</span>
                                <span className="text-white font-['Poppins']">ce</span>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 -ml-6 rounded-md hover:bg-slate-600"
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={25} />}
                    </button>
                </div>

                <nav className="mt-5">
                    <ul className="space-y-2 px-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => setActiveItem(item.name)}
                                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${activeItem === item.name ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
                                >
                                    <item.icon size={20} className="flex-shrink-0" />
                                    {sidebarOpen && <span className="ml-3">{item.name}</span>}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <button className="w-full flex items-center p-3 rounded-lg hover:bg-red-800">
                        <LogOut size={20} />
                        {sidebarOpen && <span className="ml-3">Logout</span>}
                    </button>
                </div>
            </div>

            <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 ease-in-out`}>
                <header className="bg-white shadow-lg">
                    <div className="px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-gray-900">{activeItem}</h1>
                        </div>

                        <div className="flex-1 max-w-xl mx-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search size={18} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search exams, students, or questions..."
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 focus:shadow-md sm:text-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 relative">
                                <Bell size={20} className="text-gray-600" />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                    <User size={18} className="text-slate-600" />
                                </div>
                                {!sidebarOpen && (
                                    <div className="flex items-center">
                                        <span className="text-sm font-medium">Prince Tiwari</span>
                                        <ChevronDown size={16} className="ml-1" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default OrganizerDashboard;