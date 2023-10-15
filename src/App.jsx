import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const App = () => {
  const [numJoke, setNumJoke] = useState(1);

  const handleNumJokeClick = (value) => {
    setNumJoke(value);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Header />
      <Hero numJoke={numJoke} />
      <Footer handleNumJokeClick={handleNumJokeClick} numJoke={numJoke} />
    </div>
  );
};

export default App;
