import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/add');
  };

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <p>Welcome to the Habit Tracker App!</p>
      <div className="home-features">
        <div className="feature-card">
          <h3>Task Manager</h3>
          <p>Add and check off your tasks.</p>
        </div>
        <div className="feature-card">
          <h3>Date Sorting</h3>
          <p>See tasks grouped by date.</p>
        </div>
        <div className="feature-card">
          <h3>Clean Design</h3>
          <p>Simple, responsive layout.</p>
        </div>
      </div>
      <button className="get-started-btn" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default Home;
