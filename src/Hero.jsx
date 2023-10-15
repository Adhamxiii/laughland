/* eslint-disable react/prop-types */
import { useState } from "react";
import laugh from "./assets/laugh.png";
import smile from "./assets/smile.png";
import { useEffect } from "react";
import Loading from "./Loading";

const url = "https://api.api-ninjas.com/v1/jokes?limit=";
const key = "Ep+X5rHqzFVjqvEaw/zeuA==AQOtHJon5EVEw2U3";

const Hero = ({ numJoke }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJoke = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}${numJoke}`, {
          method: "GET",
          headers: {
            "x-api-key": key,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setJokes(data);
          setIsLoading(false);
          console.log(data);
        } else {
          throw new Error("Failed to fetch data.");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getJoke();
  }, [numJoke]);

  return (
    <main className="w-full h-[calc(100vh-15rem)] flex justify-center items-center bg-gradient-radial">
      <section className="w-[90%] h-[50%] bg-yellow-50  flex justify-center items-center flex-col px-[5%] rounded-[20px] relative md:w-[80%] md:px-[15%] lg:w-[70%] lg:px-[10%]">
        <img
          src={laugh}
          alt="laugh"
          className="h-20 w-20 absolute top-0 right-0 translate-x-[20%] translate-y-[-30%] sm:h-40 sm:w-40 md:h-50 md:w-50 lg:h-60 lg:w-60"
        />
        <img
          src={smile}
          alt="smile"
          className="h-20 w-20 absolute left-0 bottom-0 translate-x-[-30%] translate-y-[20%] md:h-30 md:w-30 lg:h-50 lg:w-50"
        />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-10 max-h-40 overflow-auto md:w-[100%]">
            <ul className="flex flex-col gap-10">
              {jokes.map((joke) => (
                <>
                  <li key={joke.id} className="font-comic text-stone-900 text-2xl">
                    {joke.joke}
                  </li>
                  <hr className="w-full mx-auto my-0 border-2 border-stone-800" />
                </>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
