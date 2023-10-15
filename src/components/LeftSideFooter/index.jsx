import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import React from "react";

const LeftSideFooter = () => {
    const toogleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
    }


  return (
    <div className="flex flex-col flex-wrap font-semibold text-xl">
      <button className="  rounded bg-[#27374D]  px-2  m-1 hover:bg-white hover:text-[#27374D] hover:border-[#27374D]"
      onClick={toogleDarkMode}>
        switch dark mode
      </button>
      <div className="flex gap-2 mt-2 text-2xl justify-center">
        <a href="https://www.github.com/batuhantanir" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/batuhan-tanir" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default LeftSideFooter;
