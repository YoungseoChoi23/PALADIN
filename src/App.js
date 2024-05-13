import LoginPage from "./pages/LoginPage";
import SinchonMainPage from "./pages/SinchonMainPage/SinchonMainPage";

import { Route, Routes } from "react-router-dom";
import RecordDetailPage from "./pages/detailPage/RecordDetailPage";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sinchonMain" element={<SinchonMainPage />} />
      <Route path="/sinchonMain/recordDetail" element={<RecordDetailPage />} />
    </Routes>
  );
}

export default App;
