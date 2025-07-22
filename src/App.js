import './App.css';
import Header from './components/Header';
import Quora from './components/Quora';
import Leaderboard from './components/LeaderBoardComp';
import RewardsPage from './components/RewardsPage';
import SavePos from './components/SavePos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Quora />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/saved" element={<SavePos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
