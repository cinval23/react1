import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";
import "./App.css"; // Import the custom CSS file

function App() {
  const firstName = "Chinedu"; // Provide your first name here

  return (
    <div className="app-container">
      <div className="card product-card shadow-sm">
        <Image />
        <div className="card-body">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <div className="greeting-container">
        <h3>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>
        {firstName && (
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="user-image"
          />
        )}
      </div>
    </div>
  );
}

export default App;
