import React from "react";
import "./home.css";
import Navbar from "../components/Navbar/Navbar";
import Reports from "../components/Reports/Reports";
import Sidebar from "../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Reports />
      </div>
    </Router>
  );
};

export default Home;
