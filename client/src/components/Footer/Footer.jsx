import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#193549] py-7 flex mx-auto justify-between px-20">
        <div>
          <p className="text-xl text-white">Copyright &copy; mahmud hussain</p>
        </div>
        <div className="flex gap-5 text-yellow-400 text-xl">
          <span>
            <a href="https://www.facebook.com/mahmudhussainn" target="_blank">
              <FaFacebook />
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/mahmudhussaindev/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/mahmudhussain76/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </span>
          <span>
            <a href="https://github.com/mahmudhussaininfo" target="_blank">
              <FaSquareGithub />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
