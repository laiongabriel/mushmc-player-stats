import Header from "./components/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayerPage from "./components/PlayerPage";
import NotFound from "./components/Helper/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

function App() {
   return (
      <BrowserRouter>
         <ScrollToTop />
         <div className="container">
            <Header />
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/player/:playerName" element={<PlayerPage />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </main>
         </div>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
