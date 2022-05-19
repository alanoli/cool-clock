import React from "react";
import Clock from "../../components/clock";

function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center m-auto z-10 bg-[url('src/assets/pexels-felix-mittermeier-1205301.jpg')] bg-cover">
        <Clock />
      </main>
    </>
  );
}

export default App;
