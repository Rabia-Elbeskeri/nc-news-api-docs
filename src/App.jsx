import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ApiReference from "./pages/ApiReference";
import NotFound from "./pages/NotFound";
import ArticleList from "./pages/ArticleList";
import ArticlePage from "./pages/ArticlePage";
import TopicList from "./pages/TopicList";
import UserList from "./pages/UserList";
import NotFound from "./pages/NotFound";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<ArticleList />} />
                    <Route path="/articles/:article_id" element={<ArticlePage />} />
                    <Route path="/topics" element={<TopicList />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/api" element={<ApiReference />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;


