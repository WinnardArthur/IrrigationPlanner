import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import IrrigationPlanner from './container/irrigationPlanner';
import DashboardPage from './container/DashboardPage';



function App() {
  return (
    <Router>
      <Route path="/irrigationplanner" component={IrrigationPlanner} exact/>
      <Route path="/dashboard" component={DashboardPage} exact/>
    </Router>
  );
}

export default App;
