import { useState } from "react";
import Links from "./Links";
import up from "../../src/assets/images/icon-arrow-up.svg";
import down from "../../src/assets/images/icon-arrow-down.svg";

const NavLink = () => {
  const [subSet, setSubLink] = useState("");
  return (
    <>
      {Links.map((link) => (
        <div
          key={link.name}
          className="font-epilogue text-gray text-md "
        >
          <div className="  cursor-pointer group px-2 py-4 lg:py-0 relative ">
            <h3
              className="px-7   flex items-center  gap-x-4  md:pr-0 pr-4 group hover:text-black"
              onClick={() =>
                subSet !== link.name
                  ? setSubLink(link.name)
                  : setSubLink("")
              }
            >
              {link.name}
              {link.submenu && (
                <>
                  <span className="md:hidden inline">
                    {subSet === link.name ? (
                      <img src={up} alt="" />
                    ) : (
                      <img src={down} alt="" />
                    )}
                  </span>

                  <span className="md:block mt-0 w-3 h-full hidden group-hover:rotate-180 ">
                    <img src={down} alt="" />
                  </span>
                </>
              )}
            </h3>

            {link.submenu && (
              <div className="absolute z-50 top-12 right-2 rounded-2xl hidden group-hover:md:block hover:md:block">
                <div className="bg-pure rounded-xl">
                  {link.sublinks.map((mySlink, i) => (
                    <div key={i} className=" px-6 py-1 text-nowrap ">
                      {mySlink.sublink.map((sLink) => (
                        <li
                          className="text-sm font-epilogue px-2 py-2"
                          key={sLink.name}
                        >
                          <a
                            href={sLink.link}
                            className="flex text-gray justify-around gap-x-4  py-1 px-4 items-center hover:text-black"
                          >
                            {sLink.icon && (
                              <img
                                src={sLink.icon}
                                alt={sLink.name}
                              />
                            )}

                            {sLink.name}
                          </a>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* mobile */}
          <div
            className={`${
              subSet === link.name ? "md:hidden" : "hidden"
            }`}
          >
            {link.sublinks &&
              link.sublinks.map((sLinks, i) => (
                <div key={i} className="space-y-5">
                  {sLinks.sublink &&
                    sLinks.sublink.map((sLink) => (
                      <li
                        key={sLink.name}
                        className="pl-14  flex gap-x-4 items-center"
                      >
                        {sLink.icon && (
                          <img src={sLink.icon} alt={sLink.name} />
                        )}
                        {sLink.name}
                      </li>
                    ))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLink;
// {link.sublinks.map((sLinks, i) => (
//     <div key={i}>
//       {sLinks.sublink.map((sLink) => (
//         <li key={sLink.name} className="pl-14">
//           {sLink.name}
//         </li>
//       ))}
//     </div>
//   ))}
