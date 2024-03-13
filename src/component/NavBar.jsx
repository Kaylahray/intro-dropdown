import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close-menu.svg";

import Button from "./Button";
import NavLink from "./NavLink";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((open) => !open);
  };
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden"; // Prevent scrolling when mobile nav is open
    } else {
      body.style.overflow = "auto"; // Re-enable scrolling when mobile nav is closed
    }

    return () => {
      body.style.overflow = "auto"; // Ensure scrolling is re-enabled when component is unmounted
    };
  }, [open]);
  return (
    <nav className="fixed top-0 max-w-[1400px] w-full ">
      <div className="flex items-center justify-between  w-full">
        <div className="flex  my-2 justify-between  ">
          <div>
            <img
              src={logo}
              alt="logo"
              className="md:pl-6 p-2 max-w-0 min-w-28 mt-2"
            />
          </div>
          <ul className="md:flex items-center relative hidden ">
            <NavLink />
          </ul>
        </div>

        <div className=" md:flex justify-between mr-12 hidden">
          <Button className="mr-4  text-gray hover:text-black">
            Login{" "}
          </Button>
          <Button className="border-2 border-gray p-2 rounded-xl text-gray hover:border-dark hover:text-black">
            Register
          </Button>
        </div>
        {/* mobileee......... */}
        <ul
          className={`md:hidden flex  fixed w-full z-20  ${
            open ? "right-0" : "right-[-100%]"
          } bottom-0  h-screen w-screen  duration-500`}
        >
          <div className="bg-dark h-full w-2/6 opacity-60 "></div>
          <div className="bg-pure flex-1 overflow-y-auto pt-20 ">
            <NavLink />
            <div className="flex flex-col gap-y-4 text-center items-center md:mt-0 mt-10 mb-20 md:mb-0 ">
              <Button className=" text-gray hover:text-black">
                Login{" "}
              </Button>
              <Button className="border-2 border-gray px-[88px] py-2 rounded-xl text-gray hover:border-dark hover:text-black ">
                Register{" "}
              </Button>
            </div>
          </div>
        </ul>
        <div className="md:hidden p-2 z-50" onClick={handleClick}>
          {open ? (
            <img src={close} alt="close" />
          ) : (
            <img src={menu} alt="open" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
