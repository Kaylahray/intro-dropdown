import hero from ".././src/assets/images/image-hero-desktop.png";
import small from ".././src/assets/images/image-hero-mobile.png";
import databiz from ".././src/assets/images/databiz.svg";
import meet from ".././src/assets/images/meet.svg";
import maker from ".././src/assets/images/maker.svg";
import audiophile from ".././src/assets/images/audiophile.svg";

import "./App.css";
import NavBar from "./component/NavBar";
const App = () => {
  return (
    <div className="min-h-screen  w-full max-w-[1440px] mx-auto relative">
      <NavBar />

      <section className=" md:pt-8  mt-16 sm:mt-32 lg:mt-20 w-full   md:py-6 items-center ">
        <div className=" lg:gap-x-[4rem]  w-full xl:gap-x-[6rem] max-h-[120vh] gap-x-[2rem]  md:py-2  xl:px-24 flex flex-col-reverse md:flex-row ">
          <div className=" flex flex-col h-auto min-h-[50vh] w-full lg:w-1/2 md:gap-y-10 gap-y-5   md:pt-36 pt-8 md:pl-8 items-center md:items-start  ">
            <h1 className="text-dark font-epilogue text-center md:text-left  font-bold text-3xl  md:text-5xl xl:text-7xl  ">
              Make {""}
              <span className="md:block ">remote work</span>
            </h1>

            <p className="font-epilogue md:max-w-md text-md text-center md:text-start p-4 md:p-0 md:text-lg text-gray ">
              Get your team in sync, no matter your location.
              Streamline processes, create team rituals, and watch
              productivity soar.
            </p>
            <div className=" flex justify-start">
              <a
                href="#"
                className="text-sm text-center border-2 font-epilogue font-medium rounded-2xl items-center w-40 p-4 bg-dark text-white hover:bg-transparent hover:border-2 hover:border-gray hover:text-dark"
              >
                Learn more
              </a>
            </div>
            <div className="flex md:justify-between justify-around  justify-self-end  w-full md:w-[90%] items-center mt-auto">
              <img src={databiz} alt="" className="w-16 lg:w-auto" />
              <img
                src={audiophile}
                alt=""
                className="w-16 lg:w-auto"
              />
              <img src={meet} alt="" className="w-16 lg:w-auto" />
              <img src={maker} alt="" className="w-16 lg:w-auto" />
            </div>
          </div>
          <div className=" lg:w-1/2 w-full md:h-auto">
            <img
              src={hero}
              alt=""
              className="w-full h-full hidden  object-contain  md:block" // Display on large screens
            />
            <img
              src={small}
              alt=""
              className="xs:w-[90%] h-full mt-6 w-full xs:m-auto block md:hidden" // Display on small screens
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
// md:px-20 px-3 h-full flex justify-between flex-col-reverse mb-6 md:flex-row gap-y-2 md:gap-x-20 md:gap-y-0
// flex-1 md:w-6/12 mt-20 md:mt-0
