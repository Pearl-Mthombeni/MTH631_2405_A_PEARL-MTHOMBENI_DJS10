import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchAllBlogPosts from "./components/FetchAPI";

function App() {
  return (
    <div>
      <FetchAllBlogPosts />
    </div>
  );
}

export default App;
