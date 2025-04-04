import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ApiReference from "./api-docs/ApiReference.jsx";
import NotFound from "./pages/NotFound.jsx";
import ArticleList from "./pages/ArticleList.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import TopicList from "./pages/TopicList.jsx";
import UserList from "./pages/UserList.jsx";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/api" element={<ApiReference />} />
                </Routes>
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/articles/:article_id" element={<ArticlePage />} />
                    <Route path="/topics" element={<TopicList />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
