// 1) import the react and reactdom libraries
import React from "react"; // have the react and components

import ReactDOM from "react-dom/client"; // reactdom it helps to show the components in
// other devices like android

import MyApp from "./App";
// 2) get a refrence to the div with id root
const element = document.getElementById("root");

// 3) tell react to take control of that element
const root = ReactDOM.createRoot(element);

// 4) create a component

// function App() {
//   // we can use number or string here
//   //as we use undefined ,null , boolean
//   // nothing is shown in screen and
//   // when we use object to reaturn as components
//   // we get a error and and nothing gets
//   // displayed on screen
//   let message = "bye there!";
//   if (Math.random() > 0.5) {
//     message = "bye bye !";
//   }
//   const name = "saurabh";
//   const age = 22;

//   return (
//     // <h1>
//     //   hi my name is {name} and my age is {age}
//     // </h1>
//     // jsx with props
//     // <input
//     //   type="number"
//     //   min={0}
//     //   max={10}
//     //   list={[1, 2, 3, 4]}
//     //   style={{ border: "3px red solid" }}

//     //   alt={message}
//     // />
//     <textarea autoFocus />
//     // object can be under props
//     // but cant be used to display in jsx
//   );
//   // new lst
// }

// 5) show the component on the screen

root.render(<MyApp />);

//
