// Importing React and components
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

// Home Component
const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
};

// Exporting Home Component
export default Home;
