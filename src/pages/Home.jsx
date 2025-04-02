import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h2>Welcome to the NC News API</h2>
            <p>
                This is the documentation for the backend of <strong>Northcoders News</strong>, a Reddit-style web app.
            </p>
            <p>
                Use the API Reference tab to explore all endpoints, or browse articles using the buttons below.
            </p>

            <div className="home-buttons">
                <button onClick={() => navigate('/articles')}>View Articles</button>
                <button onClick={() => navigate('/topics')}>Browse Topics</button>
                <button onClick={() => navigate('/users')}>User Profiles</button>
            </div>
        </div>
    );
};

export default Home;
