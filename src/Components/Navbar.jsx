import React from "react";

function Navbar() {
  return (
    <header className="w-full sm:flex sm:justify-between sm:items-center sm:h-16 bg-blue-500 text-white text-sm sm:px-10">
      <div className="logo">
        <img
          src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
          alt=""
          className=" w-40 mx-auto mb-3  "
        />
      </div>
      <nav
        className="flex justify-center items-center "
        aria-label="Main Navigation"
      >
        <ul className=" flex sm:flex-row flex-col mb-2  space-x-2">
          <li>Our Story</li>
          <li>Membership</li>
          <li>Write</li>
          <li>Sign in</li>
          <li className="sm:px-4 sm:py-1 px-5 bg-black text-white rounded-full ">
            Get unlimited access
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
