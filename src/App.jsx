import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header"; 
import { cards } from "./data"; 

function App() {
  const openLink = () => {
    window.open("https://github.com/Ggaming5005", "_blank");
  };

  return (
    <div className="App">
      <Header title="Welcome to Gio's Store" />
      <button onClick={openLink} className="fancy-button">
        Go to GitHub
      </button>
      <div className="card-container">
        {cards.map((el) => (
          <Card
            imgSrc={el.src}
            key={el.id}
            age={el.age}
            name={el.name}
            bg={el.bg}
            desc={el.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
