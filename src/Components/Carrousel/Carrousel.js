//HOOKS
import React, { useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

//IMGS
import ironMarca from "../../imgs/IronMarca.png";
import marcaAtua from "../../imgs/MarcaAtua.png";
import marcaBio from "../../imgs/MarcaBioTrigo.png";
import marcaESale from "../../imgs/marcaEsales.png";
import razorEquipamento from "../../imgs/razorEquipamentos.png";
import marcaGallus from "../../imgs/MarcaGallos.png";

SwiperCore.use([Navigation, Pagination]);

function Carrousel() {
  const image = [
    ironMarca,
    marcaAtua,
    marcaBio,
    marcaESale,
    razorEquipamento,
    marcaGallus,
  ];

  const [swiperParams, setSwiperParams] = useState({
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSwiperParams({
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else if (window.innerWidth < 768) {
        setSwiperParams({
          slidesPerView: 2,
          spaceBetween: 10,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else if (window.innerWidth < 1024) {
        setSwiperParams({
          slidesPerView: 3,
          spaceBetween: 15,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else {
        setSwiperParams({
          slidesPerView: 5,
          spaceBetween: 20,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative flex flex-wrap items-center justify-center ">
      <h1 className="font-primary text-3xl text-center mt-12">
        Não é sobre chegar ao topo,
        <br />é sobre como e{" "}
        <strong className="font-bold">com quem você chega lá.</strong>{" "}
      </h1>
      <Swiper {...swiperParams}>
        {image.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative m-10 flex  w-full max-w-xs flex-col overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-md hover:scale-105 mb-20">
              <p className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl  justify-center">
                <img className="object-" src={item} alt="productimage" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 -mt-4 left-4 z-10">
        <button className="swiper-button-prev  text-white text-2xl"></button>
      </div>
      <div className="absolute top-1/2 -mt-4 right-4 z-10">
        <button className="swiper-button-next  text-white text-2xl"></button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Carrousel;
