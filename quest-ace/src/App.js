import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/public/HomePage";
import MainFeature from "./components/common/MainFeature";

function App() {
  return (
    <>
    <Navbar/>
    <MainFeature/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;