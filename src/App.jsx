import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_grid from "./pages/Main_grid";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import Brands from "./pages/Brands";
import { ToggleCardContextProvider } from "./context/ToggleCardContext";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Sale from "./pages/Sale";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <>
      <ToggleCardContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main_grid />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rejestracja" element={<Registration />} />
            <Route path="/profil" element={<UserDashboard />} />
            <Route path="/marki" element={<Brands />} />
            <Route path="/wyprzedaż" element={<Sale />} />
            <Route path="/:id" element={<SingleProduct />} />
          </Routes>
        </BrowserRouter>
      </ToggleCardContextProvider>
    </>
  );
}

export default App;
