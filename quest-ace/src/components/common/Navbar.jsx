import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Righteous&display=swap" rel="stylesheet" />

      <nav className="bg-slate-900 shadow-lg px-10 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <span className="text-blue-400 font-['Righteous']">Q</span>
            <span className="text-white font-['Poppins']">uest</span>
            <span className="text-blue-400 font-['Righteous']">A</span>
            <span className="text-white font-['Poppins']">ce</span>
          </Link>
        </div>

        <div className="space-x-6 flex items-center font-['Poppins'] mr-5 text-sm font-medium transition-colors duration-200">
          <Link 
            to="/" 
            className={`px-3 py-2 rounded-md  ${
              isActive('/') 
                ? 'border-b-2 border-blue-600 text-white' 
                : 'text-gray-300 hover:text-white hover:border-b-2 border-gray-500'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`px-3 py-2 rounded-md ${
              isActive('/about') 
                ? 'border-b-2 border-blue-600 text-white' 
                : 'text-gray-300 hover:text-white hover:border-b-2 border-gray-500'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`px-3 py-2 rounded-md ${
              isActive('/contact') 
                ? 'border-b-2 border-blue-600 text-white' 
                : 'text-gray-300 hover:text-white hover:border-b-2 border-gray-500'
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;