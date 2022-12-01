/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import searchImages from "./api";
import App from "./App";

searchImages();
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App />);
