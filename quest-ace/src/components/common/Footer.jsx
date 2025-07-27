import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-8 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 border-t border-gray-300">
            <div className="p-6 text-center space-y-3">

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Righteous&display=swap" rel="stylesheet" />

                <div className="text-2xl font-bold flex justify-center gap-2">
                    <Link to="/" className="flex items-center bg-slate-950 p-1 rounded-sm">
                        <span className="text-blue-400 font-['Righteous']">Q</span>
                        <span className="text-white font-['Poppins']">uest</span>
                        <span className="text-blue-400 font-['Righteous']">A</span>
                        <span className="text-white font-['Poppins']">ce</span>
                    </Link>
                    <div>Online Examination Platform</div>
                </div>

                <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
                    <Sparkles className="text-purple-600 w-4 h-4 animate-pulse" />
                    Made by
                    <span className="text-indigo-700 font-bold tracking-wide hover:underline transition duration-300 cursor-pointer">
                        Prince Tiwari
                    </span>
                </p>

                <div className="flex justify-center gap-6 mt-2">
                    <a
                        href="https://github.com/princetiwari26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black transition"
                        title="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:princetiwari.profes@example.com"
                        className="text-gray-700 hover:text-red-600 transition"
                        title="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/princetiwari26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>

                <hr className="my-4 border-gray-300 w-1/2 mx-auto" />

                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} QuestAce. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;