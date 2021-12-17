import React from "react";
import "./home.css";
import Navbar from "../components/Navbar/Navbar";
import Reports from "../components/Reports/Reports";
import Sidebar from "../components/Sidebar/Sidebar";
import SetFilter from "../components/SetFilter/SetFilter";

const Home = () => {
  return (
    <div>
      {/* <SetFilter  /> */}
      <Navbar />
      <div className="container">
        <Sidebar />
        <Reports />
      </div>
    </div>
  );
};

export default Home;
