//HOOKS
import React, { useState } from "react";
// REACT ROUTER DOM



//IMGS
import logoAlpine from "../../imgs/logo.png";
//ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import {AiOutlineClose} from 'react-icons/ai'
import {SiInstagram} from 'react-icons/si'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {RiYoutubeLine} from 'react-icons/ri'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }


  const menuIcon = isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />;
  
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap border-b border-gray-800 bg-black opca shadow-md p-4  w-full z-10 navHeader ">
        <div className="flex items-center  text-white ml-8">
          <span
            className="text-black no-underline hover:text-white hover:no-underline"
            to="/"
          >
            <span>
              <img src={logoAlpine} alt="logo" className=" " />
            </span>
          </span>
        </div>

        <div className="block lg:hidden ">
          <button
            className="flex items-center  px-3 py-2 text-xl text-white hover:text-white hover:border-white"
            onClick={toggleNavigation}
          >
           {menuIcon}
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden "
          } lg:block pt-6 justify-center  lg:pt-0`}
         id="navbar"
        >
          <ul className=" lg:flex  gap-3   " id ="Ulnav">
            <li>
              <span
                to={"/login"}
                className="inline-block font-normal font-primary text-gray-400 no-underline hover:text-white hover:text-underline hover:border-b-2 hover:border-white py-2 px-4"
              >
                Inicio
              </span>
            </li>
            <li>
              <span
                to={"/sobre"}
                className="inline-block font-normal font-primary text-gray-400 no-underline hover:text-white hover:text-underline hover:border-b-2 hover:border-white py-2 px-4"
              >
                Sobre
              </span>
            </li>

            <li className="flex relative">
              <span
                to={"/contato"}
                className="inline-block font-normal font-primary text-gray-400 no-underline hover:text-white hover:text-underline hover:border-b-2 hover:border-white py-2 px-4"
              >
                Soluções
              </span>
              <MdKeyboardArrowDown
                size={20}
                color="white"
                className="absolute left-20 mt-2 ml-2 dropdown_icon"
                onClick={toggleDropdown}
                
              />
              {isDropdownOpen && (
                <article className="absolute mt-14 w-48">
                  <div
                    className="bg-black shadow-md text-white  py-2 px-4 hover:bg-white hover:text-black "
                    style={{ width: "228px", height: "115px" }}
                  >
                    <h2 href="#" className="flex font-normal font-primary">
                      <HiOutlineComputerDesktop size={40} className="mr-2 " />

                      <span className="flex flex-col mt-2 font-normal font-primary toogle ">
                        Tecnologia
                        <h5 className="text-xs mt-2 font-normal font-primary toogle">
                          Criação de sites, one page, Implantação de E-commerce
                          e suporte dedicado
                        </h5>
                      </span>
                    </h2>
                  </div>
                  <div
                    className="bg-white shadow-md text-black  py-2 px-4 hover:bg-black hover:text-white "
                    style={{ width: "228px", height: "115px" }}
                  >
                    <h2 href="#" className="flex font-normal font-primary">
                      <TbDeviceDesktopAnalytics size={40} className="mr-2 " />{" "}
                      <span className="flex flex-col mt-2 font-normal font-primary toogleTwo ">
                        Marketing Digital
                        <h5 className="text-xs mt-2 font-normal font-primary toogleTwo">
                          Criação de sites, one page, Implantação de E-commerce
                          e suporte dedicado
                        </h5>
                      </span>
                    </h2>
                  </div>
                </article>
              )}
            </li>

            <li>
              <span
                to={"/contato"}
                className="inline-block font-normal font-primary text-gray-400 no-underline hover:text-white hover:text-underline hover:border-b-2 hover:border-white py-2 px-4"
              >
                Cases
              </span>
            </li>
            <li>
              <span
                to={"/contato"}
                className="inline-block font-normal font-primary text-gray-400 no-underline hover:text-white hover:text-underline hover:border-b-2 hover:border-white py-2 px-4"
              >
                Contato
              </span>
            </li>
            <li>
              <div
                to={"/contato"}
                className=" font-normal font-primary text-white no-underline flex gap-4 py-2 px-4 social-icons"
              >

                <SiInstagram size={25}/>
                <AiOutlineLinkedin size={25}/>
                <BsWhatsapp size={25}/>
                <RiYoutubeLine size={25}/>
              </div>
            </li>
          </ul>
        </div>
        <ul className="hidden lg:flex ml-auto">
          <li className="mr-6">
            <span
              to={"/sobre"}
              className="inline-block relative font-normal font-primary text-gray-400 no-underline hover:text-white hover:text-underline hover:border-b-2 hover:border-white py-2 px-4"
            >
              <MdKeyboardArrowDown size={25} className="absolute left-10 " /> PT
            </span>
          </li>
          <li className="mr-16">
            <button
              to={"/sobre"}
              class="inline-block border font-normal font-primary border-white text-white bg-black hover:text-black  hover:bg-white hover:border-black hover:border py-2 px-4"
            >
              SOLICITAR PROPOSTA
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
