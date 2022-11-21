// 1) import the react and reactdom libraries
import React from "react"; // have the react and components

import ReactDOM from "react-dom/client"; // reactdom it helps to show the components in
// other devices like android

// 2) get a refrence to the div with id root
const element = document.getElementById("root");

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(element);

// 4) create a component

function App() {
  return <h1>Hi, there! </h1>;
}

// 5) show the component on the screen

root.render(<App />);
