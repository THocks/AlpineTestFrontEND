import React from "react";
//HOOKS
import { useState } from "react";
import InputMask from "react-input-mask";
//COMPONENTS
import Carrousel from "../Components/Carrousel/Carrousel";
//ICONS
import { BsArrowUpRight } from "react-icons/bs";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
// IMGS
import imgSectionOne from "../imgs/closeImageOne.png";
import imgSectionTwo from "../imgs/closeImageTwo.png";
import imgSectionTre from "../imgs/closeImageTree.png";
import imgSectionFour from "../imgs/closeImageFour.png";
import imgSectionFive from "../imgs/closeImageFive.png";

const Home = () => {
  const [imgs, setImgs] = useState({
    imageBackground: imgSectionOne,
    checkboxOne: false,
    checkboxTwo: false,
  });

  const handleNextImg = () => {
    if (imgs.checkboxOne) {
      setImgs({
        ...imgs,
        imageBackground: imgSectionTwo,
        checkboxOne: false,
        checkboxTwo: true,
      });
    } else {
      setImgs({
        ...imgs,
        imageBackground: imgSectionOne,
        checkboxOne: true,
        checkboxTwo: false,
      });
    }
  };

  const handlePrevImg = () => {
    if (imgs.checkboxTwo) {
      setImgs({
        ...imgs,
        imageBackground: imgSectionOne,
        checkboxOne: true,
        checkboxTwo: false,
      });
    } else {
      setImgs({
        ...imgs,
        imageBackground: imgSectionTwo,
        checkboxOne: false,
        checkboxTwo: true,
      });
    }
  };

  const handleCheckboxOneChange = (e) => {
    if (e.target.checked) {
      setImgs({
        ...imgs,
        checkboxOne: true,
        checkboxTwo: false,
        imageBackground: imgSectionOne,
      });
    } else {
      setImgs({
        ...imgs,
        checkboxOne: false,
        imageBackground: imgSectionTwo,
      });
    }
  };

  const handleCheckboxTwoChange = (e) => {
    if (e.target.checked) {
      setImgs({
        ...imgs,
        checkboxOne: false,
        checkboxTwo: true,
        imageBackground: imgSectionTwo,
      });
    } else {
      setImgs({
        ...imgs,
        checkboxTwo: false,
        imageBackground: imgSectionOne,
      });
    }
  };

  const [texto, setTexto] = useState({
    h1: "ESTÚDIO DE DESIGN",
    span: "COM DNA DIGITAL.",
    p: "Somos ",
    text: "ao seu negócio por",
    textGray: "meio de soluções de",
    FinalText: "tecnologia e marketing digital",
    final: "especialistas em gerar valor ",
    button: "Ver nossos Cases",
  });

  const handleNextClick = () => {
    setTexto({
      h1: "UM ESTÚDIO INDEPEDENTE",
      span: " DE DESIGN ESTRATÉGICO.",
      p: "Conectamos pessoas com diferentes skills e um objetivo: Gerar valor para o seu negócio. Colocando ",
      FinalText: "as pessoas no centro da experiência digital.",
      button: "Conheça a Alpina",
    });
  };

  const handlePrevClick = () => {
    setTexto({
      h1: "ESTÚDIO DE DESIGN",
      span: "COM DNA DIGITAL.",
      p: "Somos ",
      text: "ao seu negócio por",
      textGray: "meio de soluções de",
      FinalText: "tecnologia e marketing digital",
      final: "especialistas em gerar valor ",
      button: "Ver nossos Cases",
    });
  };

  return (
    <>
      <div>
        {/************************Parte 1 */}
        <section className=" bg-black font-primary">
          <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
              <h1 className=" font-light sm:text-5xl text-4xl mb-4 flex flex-col text-white">
                {texto.h1}
                <span className=" lg:inline-block font-black">
                  {texto.span}
                </span>
              </h1>
              <h3 className="mb-8 text-gray-600   ">
                {texto.p}
                <span className="text-white"> {texto.final}</span>

                {texto.text}
                <p className="text-white">
                  {""} <span className="text-gray-600">{texto.textGray}</span>{" "}
                  {texto.FinalText}
                </p>
                <p className="mt-8 text-white text-lg  flex hover:underline ">
                  {texto.button}{" "}
                  <BsArrowUpRight
                    className="ml-6 font-bold cursor-pointer"
                    color="white"
                    size={30}
                  />
                </p>
              </h3>

              <div className="flex justify-center  ">
                <button
                  onClick={handlePrevClick}
                  className="inline-flex text-white  text-lg"
                >
                  <HiArrowSmallLeft size={25} />
                </button>
                <button
                  onClick={handleNextClick}
                  className=" ml-4 inline-flex text-white  text-lg"
                >
                  <HiArrowSmallRight size={25} />
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full flex flex-col md:w-1/2 w-5/6    ">
              <img
                className="object-contain "
                alt="hero"
                src={imgs.imageBackground}
              />
              <div className="flex justify-end mr-6 mt-2 gap-2 ">
                <input
                  type="checkbox"
                  onChange={handleCheckboxOneChange}
                  onClick={handleNextImg}
                  className="mr-2"
                />
                <input
                  type="checkbox"
                  onChange={handleCheckboxTwoChange}
                  onClick={handlePrevImg}
                />
              </div>
            </div>
          </div>
        </section>
        {/************************************************************************** */}
        <section className="text-gray-600 bg-black font-primary font-normal ">
          <div className="container px-5 py-24 mx-auto">
            <div className="w-full mb-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-3xl text-white font-extrabold">SOLUÇÕES</div>
              <div className="text-base text-gray-500">
                Nós queremos ser o seu parceiro estratégico. Saiba o que podemos
                {""} <span className="text-white">fazer pelo seu negócio!</span>
              </div>
              <div className="text-xl text-white ml-32 flex cursor-pointer hover:underline">
                Solicitar proposta <BsArrowUpRight className="ml-4" />
              </div>
            </div>

            <div className="flex flex-wrap -m-4 font-primary font-normal">
              <div className="p-4 w-full md:w-1/2">
                <div className="flex h-64 bg-white p-8 flex-col shadow-md text-black py-2 px-4 hover:bg-black hover:text-white">
                  <div className="flex flex-col mb-3 justify-between ">
                    <div className="w-full h-8 inline-flex items-center justify-between  text-black flex-shrink-0">
                      <HiOutlineComputerDesktop
                        size={25}
                        className="hover:text-white"
                      />
                      <BsArrowUpRight
                        color="white"
                        className="bg-black  w-12 h-12 -m-4 -mt-6"
                      />
                    </div>
                    <h2 className=" text-xl font-bold mt-2">TECNOLOGIA</h2>
                  </div>

                  <div className="flex-grow">
                    <p className="text-base flex flex-col">
                      Criação de Site
                      <span>Criação de One Page</span>
                      <span>Implantação de E-commerce</span>
                      <span>Gestão e Evolução</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 w-full md:w-1/2 font-normal font-primary">
                <div className="flex h-64 bg-footerColor p-8 flex-col">
                  <div className="flex flex-col mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                      <TbDeviceDesktopAnalytics size={25} />
                    </div>
                    <h2 className="text-white font-bold text-xl mt-2 ml-2">
                      MARKETING DIGITAL
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base flex flex-col text-white">
                      Gestão de Redes Sociais
                      <span>Gestão de Tráfego </span>
                      <span>Marketing Digital </span>
                      <span>Marketing de Performance</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Section 3 */}
        <section className=" bg-black ">
          <div className="container px-5 py-24 mx-auto">
            {/**Article 1 */}
            <article className="font-primary -mb-6  bg-black ">
              <div className="py-10 md:py-24 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 flex justify-center relative">
                  <img
                    alt="feature"
                    className="object-contain object-center h-full  w-full relative shadow-md"
                    src={imgSectionTre}
                  />
                  <div className="hidden lg:block absolute   lg:top-0 lg:right-0 lg:h-24 h-24 bg-black text-white px-4 py-2 z-50   w-full lg:w-auto text-xl md:text-4xl">
                    O QUE É
                    <br />
                    <span className="font-bold">SER UM ALPINISTA</span>
                  </div>
                  <div className="block lg:hidden  absolute mb-2 ml-8 bottom-0 left-0   bg-black text-white px-4 py-2 z-50   lg:w-auto text-lg md:text-xl">
                    O QUE É
                    <br />
                    <span className="font-bold">SER UM ALPINISTA</span>
                  </div>
                </div>

                <div className=" lg:w-1/2 w-full  flex items-end flex-col px-5  py-24  justify-end  ">
                  <h3 className="text-gray-600 text-lg ">
                    Alpinistas são pessoas que estão{" "}
                    <strong className="text-white">
                      aprendendo o tempo todo
                    </strong>{" "}
                    .
                    <br className=" hidden sm:block" />
                    Buscam estar sempre preparados para avançar na velocidade
                    <br className=" hidden sm:block" />
                    das transformações.
                    <strong className="text-white ">
                      Não temem mudanças, pelo contrário, são
                      <br className=" hidden sm:block" />
                      encorajados por elas,
                    </strong>{" "}
                    sabe a chamada "zona de desconforto"?
                    <br className=" hidden sm:block" />
                    Para um alpinista, esse é o seu habitat.
                  </h3>
                </div>
              </div>
            </article>
            {/* Article 2 */}
            <article className="font-primary -mb-6  bg-black ">
              <div className="py-10 md:py-24 mx-auto flex flex-wrap">
                <div className=" lg:w-1/2 w-full  flex  flex-col-reverse md:flex-col px-5  py-24    ">
                  <h1 class="text-white  text-4xl mb-8 md:text-7xl mt-2 font-bold font-primary text-left  md:ml-14">
                    OS ALPINISTA
                  </h1>
                  <p className="mt-16 text-lg order-first md:order-last  text-gray-600 md:ml-14  ">
                    Alpinistas são pessoas que estão {""}{" "}
                    <strong className="text-white">
                      {" "}
                      aprendendo o tempo todo.
                    </strong>{" "}
                    Buscam estar sempre preparados para avançar na velocidade
                    das transformações.
                    <strong className="text-white">
                      {" "}
                      Não temem mudanças, pelo contrário, são encorajados por
                      elas,
                    </strong>{" "}
                    sabe a chamada "zona de desconforto"? Para um alpinista,
                    esse é o seu habitat.
                  </p>
                  <button className=" hidden md:block border border-white text-white mt-20 p-6 w-72 md:ml-14">
                    Quero ser um Alpinista
                  </button>
                </div>
                <div className="lg:w-1/2 w-full mb-10 order-first md:order-last flex justify-center relative">
                  <img
                    alt="feature"
                    className="object-contain object-center   relative"
                    src={imgSectionFour}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
        {/*Carrousel*/}
        <Carrousel />
        {/**Section 4 */}
        <section className=" bg-black font-primary font-normal ">
          <div className="container px-5 py-24 mx-auto">
            <article className="font-primary -mb-6  bg-black ">
              <div className="py-10 md:py-24 mx-auto flex flex-wrap">
                <div className=" lg:w-1/2 w-full  flex  flex-col-reverse md:flex-col px-5  py-24    ">
                  <form action="">
                    <div className="mb-5">
                      <label className=" mb-2 text-lg text-white">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                        className="border border-white mt-3 text-white bg-black shadow p-3 w-full "
                      />
                    </div>
                    <div className="mb-5">
                      <label  className=" mb-2 text-lg text-white">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        required
                        className="border border-white mt-3 text-white bg-black shadow p-3 w-full "
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        
                        className=" mb-2 text-lg text-white"
                      >
                        Telefone
                      </label>
                      <InputMask
                        mask="(99) 99999-9999"
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(xx) xxxxx-xxxx"
                        className="border border-white mt-3 text-white bg-black shadow p-3 w-full "
                      />
                    </div>
                    <div className="mb-5">
                      <label  className=" mb-2 text-lg text-white">
                        Messagem
                      </label>
                      <textarea
                        id="textArea"
                        name="message"
                        placeholder="Mande uma mensagem para gente"
                        className="border border-white mt-3 h-40 text-white bg-black shadow p-3 w-full "
                      />
                    </div>

                    <div className="mb-5">
                      <button className="border border-white mt-3 text-white text-center justify-center p-5 bg-black shadow w-full flex">
                        <input
                          type="file"
                          id="curriculoInput"
                          className="hidden"
                        />
                        Anexar Curriculo{" "}
                        <BsArrowUpRight size={30} className="ml-4 font-bold" />
                      </button>
                    </div>

                    <button className="border  mt-3 text-black text-center justify-center p-5 bg-white hover:text-white hover:bg-black shadow w-full flex">
                      Quero ser Alpinista
                    </button>
                  </form>
                </div>
                <div className="lg:w-1/2 w-full mb-10 order-first md:order-last flex justify-center relative">
                  <img
                    alt="feature"
                    className="object-contain object-center   relative"
                    src={imgSectionFive}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
