import React from "react";

const Navber = () => {
  return (
    <nav>
      <div className="lg:w-[95%] mx-auto sm:px-6 lg:px-6">
        <div className="px-4 py-4 flex justify-center items-center">
          {/* logo */}
          <div>
            <h1 className="inline-flex text-2xl gap-3 items-center font-bold">
              Learnify{" "}
              <img src="/courses-icon-27.jpg" alt="" className="w-8 h-8" />
            </h1>
            <p className="font-bold text-[13px] tracking-[4.5px] mt-1">Quick Explore</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
