import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main"></div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
