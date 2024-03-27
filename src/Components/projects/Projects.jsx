import React from 'react'
import "./projects.css"
import {Data}  from "./Data";
//Import Swiper React Components
import { Swiper, SwiperSlide, } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import"swiper/css/pagination";

//Import required modules
import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <section className="project container section" id="projects">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Projects who up my skills</span>

        <Swiper className="project__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
            {Data.map(({id, image, title, subtitle, description }) => {
                return (
                    <SwiperSlide className="project__card" key={id}>
                        <img src={image} alt=""  className="project__img"/>

                        <h3 className="project__name">{title}</h3>
                        <h5 className="project__technology">{subtitle}</h5>
                        <p className="project__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </section>
  )
}

export default Projects