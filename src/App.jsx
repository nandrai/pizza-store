import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexPage from "./pages/IndexPage";
import AppContext from "./AppContext";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <AppContext>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </AppContext>
  );
}

export default App;
