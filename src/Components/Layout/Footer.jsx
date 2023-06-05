import React from "react";

import logo from "../../Assets/logo.png";

import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../Static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white ">
      <div className="py-7 md:flex md:justify-between md:items-center md:px-12 px-4 bg-[#342ac8]">
        <h1 className="text-3xl lg:text-4xl md:mb-0 md:leading-normal font-semibold md:2/5 mb-6">
          <span className="text-[#56d879]">Subscribe </span>
          <span>
            us for get news <br /> events & offers
          </span>
        </h1>

        <div className="flex items-center relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter email"
            className=" sm:w-96 w-full text-gray-800 sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 px-2 rounded focus:outline-none "
          />

          <button
            type="submit"
            className="absolute text-white rounded-r-md bg-[#3fd968] hover:bg-teal-500 px-5 py-2.5 md:w-auto duration-300 right-0 top-0">
            Submit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="flex flex-col sm:block px-5 text-center sm:text-start items-center">
          <img
            src={logo}
            alt="logo/image"
            className="w-[40%] 800px:w-[60%] "
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="mt-3">
            The home and elements needed to create beautiful products
          </p>

          <div className="flex items-center mt-[15px]">
            <a href="https://web.facebook.com/rahi680/" target="_blank">
              <AiFillFacebook size={25} className=" cursor-pointer" />
            </a>
            <a href="https://twitter.com/Asfak00" target="_blank">
              <AiOutlineTwitter
                size={25}
                className="ml-[15px] cursor-pointer"
              />
            </a>
            <a href="https://github.com/asfak00" target="_blank">
              <AiFillGithub size={25} className="ml-[15px] cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/asfakahmed22/" target="_blank">
              <AiFillInstagram size={25} className="ml-[15px] cursor-pointer" />
            </a>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="text-semibold mb-1">Company</h1>
          {footercompanyLinks?.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="leading-6 text-gray-400 hover:text-teal-400 cursor-pointer text-sm duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="text-semibold mb-1">Shop</h1>
          {footerProductLinks?.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="leading-6 text-gray-400 hover:text-teal-400 cursor-pointer text-sm duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="text-semibold mb-1">Support</h1>
          {footerSupportLinks?.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="leading-6 text-gray-400 hover:text-teal-400 cursor-pointer text-sm duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-8 pt-2 text-center text-gray-400 gap-10 items-center">
        <span>
          &copy; 2023{" "}
          <span className="text-[#342ac8] font-bold cursor-pointer">
            Rahi ahmed
          </span>{" "}
          . all rights reserved.
        </span>

        <span>
          Terms <sup className="font-[800]">.</sup> privacy policy
        </span>

        <div className="flex items-center justify-center">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
