import Header from "./components/Header";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PlayerPage from "./components/PlayerPage";
import NotFound from "./components/NotFound";

function App() {
   return (
      <BrowserRouter>
         <div className="container">
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/player/:playerName" element={<PlayerPage />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
