import logo from "./assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="w-full bg-orange-400 flex justify-center items-center h-40 px-2 gap-10 lg:gap-36 md:gap-10 md:px-2 md:h-30 sm:px-10 sm:gap-8">
        <img
          src={logo}
          alt="logo"
          className="h-30 w-32 lg:h-40 lg:w-48 md:h-44 md:w-48 sm:h-40 sm:w-44"
        />
        <h1 className="text-3xl font-bold uppercase font-comic bg-no-repeat bg-center p-2 text-amber-100 after:content-[':D'] after:rotate-[90deg] after:absolute xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl">
          Laughlan
        </h1>
      </header>
      <hr className="w-full mx-auto my-0 border-2 border-stone-800" />
    </>
  );
};

export default Header;
