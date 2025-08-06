import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/public/HomePage";
import MainFeature from "./components/common/MainFeature";
import OrganizerLogin from "./pages/organizer/OrganizerLogin";
import OrganizerRegister from "./pages/organizer/OrganizerRegister";
import PreLoader from "./components/common/PreLoader";
import OrganizerDashboard from "./pages/organizer/OrganizerDashboard";

function App() {
  const location = useLocation();
  const hideNavbarAndMainFeature = ["/organizer/dashboard"];

  return (
    <div className="bg-gradient-to-r from-indigo-200 to-gray-100">
      {!hideNavbarAndMainFeature.includes(location.pathname) && (
        <>
          <Navbar />
          <MainFeature />
        </>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/organizer/login" element={<OrganizerLogin />} />
        <Route path="/organizer/register" element={<OrganizerRegister />} />
        <Route path="/loader" element={<PreLoader />} />
        <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;