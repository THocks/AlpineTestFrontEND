//HOOKS
import React, { useState } from "react";

//ICONS
import { BsWhatsapp } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiYoutubeLine } from "react-icons/ri";
import {AiOutlineClose} from 'react-icons/ai'
//IMGS
import logoFooter from "../../imgs/logoFooter.png";
const Footer = () => {
  const [emailInside, setEmailInside] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleReceiveInsidesClick = () => {
    if (emailInside) {
      setIsModalOpen(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailInside("");
  };

  return (
    <>
      <footer
        aria-label="Site Footer"
        className="bg-footerColor font-normal font-primary"
      >
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-center text-gray-600 sm:justify-start">
              <img src={logoFooter} alt="logoFooter" />
            </div>

            <p className="mt-8 max-w-md text-center flex gap-12 justify-center leading-relaxed text-gray-500 sm:text-left lg:mt-0">
              <SiInstagram size={20} color="white" />
              <AiOutlineLinkedin size={20} color="white" />
              <BsWhatsapp size={20} color="white" />
              <RiYoutubeLine size={20} color="white" />
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-12 border-t border-gray-600 pt-16 md:grid-cols-4 lg:grid-cols-6">
            <div className=" sm:text-left">
              <p className="text-lg text-gray-400  hover:text-white ">Inicio</p>

              <nav aria-label="Footer About Nav" className="mt-4">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Sobre
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Soluções
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Tecnologia
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Marketing Digital
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Cases
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Aprenda
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Segunda Coluna*/}
            <div className=" sm:text-left   ">
              <p className="text-lg text-gray-400  hover:text-white ">
                Suporte
              </p>

              <nav aria-label="Footer Services Nav" className="mt-4">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      Chamados
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-lg text-gray-400  hover:text-white "
                      href="/"
                    >
                      E-mail
                    </a>
                  </li>

                  <li>
                    <a
                      className="group flex  gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <span className="text-lg text-gray-400  hover:text-white ">
                        Chat Online
                      </span>

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className=" sm:text-left md:col-span-4 lg:col-span-2">
              <p className="text-lg text-white hover:text-gray-400 ">
                Atendimento
              </p>

              <nav aria-label="Footer Resources Nav" className="mt-4">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-lg text-white hover:text-gray-400 flex"
                      href="/"
                    >
                      <BsWhatsapp className="mt-1 mr-4" /> (54)98358-4713
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-lg text-white hover:text-gray-400 flex"
                      href="/"
                    >
                      <FiPhone className="mt-1 mr-4" /> (54)9999-9999
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/**EMAIL CAMP */}
            <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
              <p className="text-lg text-white hover:text-gray-400 flex">
                ALP NEWS
              </p>

              <div className="mx-auto mt-2 max-w-md sm:ml-0">
                <p className="text-center leading-relaxed text-gray-500 sm:text-left">
                  Assine nossa newsletter e receba insights sobre Tecnologia,
                  Marketing e Negócios
                </p>

                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>

                    <input
                      className="w-full bg-footerColor text-white border border-white px-4 py-4 shadow-sm"
                      type="email"
                      placeholder="E-mail"
                      required
                      value={emailInside}
                      onChange={(e) => setEmailInside(e.target.value)}
                    />
                    <button
                      className="w-full bg-white border px-4 py-4 shadow-sm"
                      onClick={handleReceiveInsidesClick}
                    >
                      Quero receber os insights
                    </button>
                  </div>
                  {isModalOpen && (
                    <div className="border text-white border-white mt-4 flex">
                      <p className="mt-2 mb-2">
                        Obrigado por se inscrever! Confira nossos insides no
                        e-mail cadastrado.
                      </p>
                      <button
                        className="flex ml-5 mr-2 mt-2 mb-2"
                        onClick={() => setIsModalOpen(false)}
                      >
                        <AiOutlineClose/>
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-600 pt-6 sm:flex  sm:justify-between">
            <p className=" text-sm  text-gray-500 sm:text-left">
              Encarregado dos dados
              <br />
              Fabrício Raimondi
              <br />
              privacidade@alpina.digital
            </p>

            <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
              <li>
                <p className=" text-lg  text-gray-500 hover:underline sm:text-left">
                  Termos de uso
                </p>
              </li>

              <li>
                <p className=" text-lg   text-gray-500 hover:underline sm:text-left">
                  Política de Privacidade
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
