import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';

const navLinks = [
  { name: "Home", route: "/" },
  { name: "instructor", route: "/instructor" },
  { name: "classes", route: "/classes" },
];

const theme = createTheme({
  palette:{
    primary:{
      main: "#ff0000"
    },
    secondary:{
      main: "00ff00"
    }
  }
});

const Navber = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false)
  const [isHome,setIsHome] = useState(false)
  const [scrollPosition,setScrollPosition] = useState(0)
  const [isFixed,setIsFixed] = useState(false)
  const [isDarkMode,setIsDarkMode] = useState(false)
  const [navBg, setNavBg] = useState("bg-[#15151580]");

  const toggleMobileMenu = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() =>{
    const darkClass = "dark"
    const root = window.document.documentElement
    if(isDarkMode){
      root.classList.add(darkClass)
    }
    else{
      root.classList.remove(darkClass)
    }
  },[isDarkMode])

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
