import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <Router>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </div>
  </Router>
);

export default App;
