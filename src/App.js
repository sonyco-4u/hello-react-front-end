// Import necessary dependencies
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Greeting from './components/Greeting';

// Define App component
const App = () => (
  <Router>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </div>
  </Router>
);

// Export App component as a default export
export default App;
