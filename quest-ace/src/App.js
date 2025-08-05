import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/public/HomePage";
import MainFeature from "./components/common/MainFeature";
import OrganizerLogin from "./pages/organizer/OrganizerLogin";
import OrganizerRegister from "./pages/organizer/OrganizerRegister";
import PreLoader from "./components/common/PreLoader";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-200 to-gray-100">
        <Navbar />
        <MainFeature />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/organizer/login" element={<OrganizerLogin />} />
          <Route path="/organizer/register" element={<OrganizerRegister />} />
          <Route path="/loader" element={<PreLoader />} />
        </Routes>
      </div>
    </>
  );
}

export default App;