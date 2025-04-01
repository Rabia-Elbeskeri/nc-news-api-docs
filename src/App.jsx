import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ApiReference from "./pages/ApiReference";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/api" element={<ApiReference />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;


