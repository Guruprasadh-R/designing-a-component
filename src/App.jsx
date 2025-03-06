import { useState } from "react";
import "./App.css";
import UserCard from "./components/usercard.jsx";

function App() {
  const cards = Array.from({ length: 10 });

  return (
    <div className="grid-container">
      {cards.map((_, index) => (
        <UserCard key={index} />
      ))}
    </div>
  );
}

export default App;
