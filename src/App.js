import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import LoginLoadingPage from "./pages/Login/LoginLoadingPage";
import SinchonMainPage from "./pages/SinchonMainPage/SinchonMainPage";
import RecordDetailPage from "./pages/detailPage/RecordDetailPage";
import BookDetailPage from "./pages/detailPage/BookDetailPage";
import GoodsDetailPage from "./pages/detailPage/GoodsDetailPage";
import MarketMainPage from "./pages/MarketMainPage/MarketMainPage";
import CartPage from "./pages/CartPage/CartPage";
import BookListPage from "./pages/listPage/BookListPage";
import MusicListPage from "./pages/listPage/MusicListPage";
import GoodsListPage from "./pages/listPage/GoodsListPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/loading" element={<LoginLoadingPage />} />
      <Route path="/marketMain" element={<MarketMainPage />} />
      <Route path="/sinchonMain" element={<SinchonMainPage />} />
      <Route
        path="/sinchonMain/recordDetail/:productId"
        element={<RecordDetailPage />}
      />
      <Route
        path="/sinchonMain/bookDetail/:productId"
        element={<BookDetailPage />}
      />
      <Route
        path="/sinchonMain/goodsDetail/:productId"
        element={<GoodsDetailPage />}
      />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/list/book" element={<BookListPage />} />
      <Route path="/list/music" element={<MusicListPage />} />
      <Route path="/list/goods" element={<GoodsListPage />} />
    </Routes>
  );
}

export default App;
