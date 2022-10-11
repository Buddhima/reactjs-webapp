import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import History from "./pages/History";
import FuelPrice from "./pages/FuelPrice"
import UserContext  from "./pages/UserContext";
import { useState } from "react";


function App() {
  const [currentPrice, setCurrentPrice] = useState(550)
  // const valueCP = {currentPrice, setCurrentPrice}
  return (
    <div className="App">
      <h1>Fuel Web App</h1>
      <UserContext.Provider value={{currentPrice, setCurrentPrice}}>


        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="fuel-price" element={<FuelPrice />} />
          </Route>
        </Routes>
        </BrowserRouter>

      </UserContext.Provider>

    </div>
  );
}

export default App;
