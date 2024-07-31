import React from "react";
import Header from "./components/header";
import Buttons from "./components/buttons";
import Card from "./components/card";
import Form from "./components/form";

function App() {
  return (
    <div className="min-h-screen bg-current flex flex-col items-center justify-center p-4">
      <Header />
      <Buttons />
      <Card />
      <Form />
    </div>
  );
}

export default App;
