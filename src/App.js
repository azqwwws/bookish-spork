import logo from './logo.svg';
import './App.css';

import React from "react";
import UserCard from "./components/UserCard";
import NativeCity from "./components/NativeCity";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Про мене</h1>
      <UserCard />
      <NativeCity />
    </div>
  );
}

export default App;

