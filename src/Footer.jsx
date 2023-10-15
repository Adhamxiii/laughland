/* eslint-disable react/prop-types */
const Footer = ({ handleNumJokeClick, numJoke }) => {
  return (
    <footer className="w-full bg-cyan-700 flex justify-center items-center h-20 px-40 gap-10 md:px-50 lg:px-60">
      <input
        value={numJoke}
        onChange={(e) => handleNumJokeClick(e.target.value)}
        type="number"
        name="number"
        id="number"
        placeholder="Enter Number Between 1-30"
        className="w-[100%] h-10 text-center bg-orange-100 rounded-full md:w-3/4 lg:w-1/2"
      />
    </footer>
  );
};

export default Footer;
