import { useState } from "react";
import Boxes from "./Boxes";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
// import Header from "./Header";

function App() {
  const random = Math.ceil(Math.random() * 15);
  return (
    <>
      <div className="container">
        <Header />
        <Boxes random={random} />
        <Footer />
      </div>
    </>
  );
}

export default App;
