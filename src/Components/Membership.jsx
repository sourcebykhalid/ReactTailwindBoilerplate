import React from "react";

function Membership() {
  return (
    <div>
      <div className=" w-full sm:h-96 flex flex-col sm:flex-row justify-center items-center py-20 px-16 bg-blue-500 text-white mb-10 ">
        <div className="left flex flex-col justify-start items-start mx-auto py-10">
          <h2 className=" text-4xl mb-7">
            Get unlimited access to every story.
          </h2>
          <span className=" text-sm">
            MMMMMMMMMMMM MMMMMMM MMM M <br /> MMMMMMMMMMMM MMMMMMM MMM M <br />{" "}
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M
          </span>
          <span className=" mt-7">
            Read any article in our entire library across all your devices ——
            with no paywalls, storylimits and ads
          </span>
        </div>
        <div className="border-l h-80 mx-3"></div>
        <div className="right flex flex-col justify-start items-start mx-auto py-10">
          <h2 className=" text-4xl mb-7">
            Support the voices you want to hear from
          </h2>
          <span className=" text-sm">
            MMMMMMMMMMMM MMMMMMM MMM M <br /> MMMMMMMMMMMM MMMMMMM MMM M <br />{" "}
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M <br />
            MMMMMMMMMMMM MMMMMMM MMM M
          </span>
          <span className=" mt-7">
            A portion of your Membership will directly support the writers and
            thinkers you read the most
          </span>
        </div>
      </div>
      <div className=" flex flex-col sm:justify-start items-center py-16 mx-auto">
        <h2 className=" text-3xl mb-9 mx-auto">Why I'm a Medium Member...</h2>
        <span className=" flex flex-row justify-start">
          <img
            src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt=""
            className=" sm:w-40 w-24 h-7 sm:h-full"
          />
          "I love Medium's membership —— it gives me <br />
          access to the stories, I love by the writers and <br />
          it allows me to help those writers financially." <br />
        </span>
        <span className=" text-2xl mt-3">
          Kayt Molina <br />→
        </span>
      </div>
    </div>
  );
}

export default Membership;
