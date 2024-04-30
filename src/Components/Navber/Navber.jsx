import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "instructor", route: "/instructor" },
  { name: "classes", route: "/classes" },
];

const Navber = () => {
  const [navBg, setNavBg] = useState("bg-[#15151580]");
  return (
    <nav>
      <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
        <div className="px-4 py-4 flex justify-between items-center">
          {/* logo */}
          <div>
            <h1 className="inline-flex text-2xl gap-3 items-center font-bold">
              Learnify{" "}
              <img src="/courses-icon-27.jpg" alt="" className="w-8 h-8" />
            </h1>
            <p className="font-bold text-[13px] tracking-[4.5px] mt-1">
              Quick Explore
            </p>
          </div>

          {/* navigation links */}

          <div className="hidden md:block text-black dark:text-white">
            <div className="flex">
              <ul className="ml-10 flex items-center space-x-4 pr-4">
                {navLinks.map((link) => (
                  <li key={link.route}>
                    <NavLink
                      to={link.route}
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary duration-300`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                {/* login based on users */}
                <li>
                <NavLink to={"/login"} className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary duration-300`
                      }>Login</NavLink>
                </li>

                {/* toggle button */}

                <li>
                    light/dark
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
