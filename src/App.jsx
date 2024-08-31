// src/App.jsx
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AirtimeToCash from './pages/AirtimeToCash';
import TransactionHistory from './pages/TransactionHistory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default layout with the sidebar and overlay */}
        <Route path="/" element={<Layout />} />
        {/* Dashboard layout without the overlay */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/airtimetocash" element={<AirtimeToCash />} />
        <Route path="/transactions" element={<TransactionHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
