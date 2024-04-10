import React from "react";

function Footer() {
  return (
    <div className=" flex flex-col sm:flex-row justify-between items-center mx-14 my-9">
      <span className=" text-lg font-bold">Medium</span>
      <span>Every idea needs a medium</span>
      <ul className=" flex flex-col sm:flex-row space-x-2 font-light">
        <li>About</li>
        <li>Terms</li>
        <li>Privacy</li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default Footer;
