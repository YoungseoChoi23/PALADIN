import LoginPage from "./pages/LoginPage";
import SinchonMainPage from "./pages/SinchonMainPage/SinchonMainPage";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sinchonMain" element={<SinchonMainPage />} />
    </Routes>
  );
}

export default App;
