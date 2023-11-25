import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Container from "../../Shared/Container";
import "./OurFeatured.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeaturedSlide from "../../../Components/FeaturedSlide/FeaturedSlide";
const OurFeatured = () => {
  return (
    <div className="bg-gray-100 pb-10">
      <Container>
        <div>
          <div>
            <SectionTitle subHeading={"This Training Support"}></SectionTitle>
            <FeaturedSlide></FeaturedSlide>
          </div>
          <div className=" text-black mb-20">
            <div className="grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center my-20">
              <h3 className="uppercase md:text-5xl text-3xl font-bold italic text-secondary">
                PERSONAL TRAINING WILL WORK FOR YOU
              </h3>
              <div>
                <p className="md:mt-0 mt-5">
                  Discover the personalized approach to fitness with our expert
                  trainers. Whether you're a beginner or an experienced athlete,
                  we tailor our training to meet your unique goals and needs.
                  Start your journey today!
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white gap-6">
                <div className="bg-black flex-col mx-auto p-4 space-y-3  lg:-skew-x-6 hoverEnimation">
                  <div className="eminItem">
                    <img
                      src="https://i.ibb.co/PZ4gSBH/fusionjpg-03.jpg"
                      className="w-[150px] h-[150px]"
                      alt=""
                    />
                    <h5 className="text-2xl font-bold text-secondaryDeep">
                      Personal Training
                    </h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veniam maiores cum cumque, rem aut et?
                    </p>
                  </div>
                </div>
                <div className="bg-black flex-col mx-auto p-4 space-y-3  lg:-skew-x-6 hoverEnimation">
                  <div className="eminItem">
                    <img
                      src="https://i.ibb.co/FJfswBD/fusionjpg-04.jpg"
                      className="w-[150px] h-[150px]"
                      alt=""
                    />
                    <h5 className="text-2xl font-bold text-secondaryDeep">
                      Nutrition coaching
                    </h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veniam maiores cum cumque, rem aut et?
                    </p>
                  </div>
                </div>
                <div className="bg-black flex-col mx-auto p-4 space-y-3  lg:-skew-x-6 hoverEnimation">
                  <div className="eminItem">
                    <img
                      src="https://i.ibb.co/HTfmjxP/fusionjpg-06.jpg"
                      className="w-[150px] h-[150px]"
                      alt=""
                    />
                    <h5 className="text-2xl font-bold text-secondaryDeep">
                      Weight loss
                    </h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veniam maiores cum cumque, rem aut et?
                    </p>
                  </div>
                </div>
                <div className="bg-black flex-col mx-auto p-4 space-y-3  lg:-skew-x-6 hoverEnimation">
                  <div data-aos="fade-down" className="eminItem">
                    <img
                      src="https://i.ibb.co/6gx8k4h/fusionjpg-05.jpg"
                      className="w-[150px] h-[150px]"
                      alt=""
                    />
                    <h5 className="text-2xl font-bold text-secondaryDeep">
                      Cardio exercise
                    </h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Veniam maiores cum cumque, rem aut et?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurFeatured;
