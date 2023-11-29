import { BiSolidQuoteLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Container from "../../Shared/Container";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-95% ... py-2">
      <Container>
        <div data-aos="flip-left" className="md:mt-20 md:mb-32 mt-10 mb-20">
          <SectionTitle
            subHeading={"What Our Clients Say"}
            mainHeading={"TESTIMONIALS"}
          ></SectionTitle>
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" mx-24  text-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-16 my-4">
                      <span className="text-xl">
                        <img
                          src="https://i.ibb.co/BqXC79J/Asset04.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl text-secondary font-semibold">
                    Joss Vatler
                  </h4>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    totam quasi assumenda est atque similique dignissimos culpa
                    dolor aperiam sapiente minus nulla impedit, neque veniam
                    quod consectetur blanditiis dicta error voluptas tenetur
                    ducimus adipisci? Laborum illo magnam, velit minus nihil
                    ipsa nostrum libero itaque eaque aperiam culpa qui minima
                    necessitatibus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" mx-24  text-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-16 my-4">
                      <span className="text-xl">
                        <img
                          src="https://i.ibb.co/BqXC79J/Asset04.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl text-secondary font-semibold">
                    Joss Vatler
                  </h4>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    totam quasi assumenda est atque similique dignissimos culpa
                    dolor aperiam sapiente minus nulla impedit, neque veniam
                    quod consectetur blanditiis dicta error voluptas tenetur
                    ducimus adipisci? Laborum illo magnam, velit minus nihil
                    ipsa nostrum libero itaque eaque aperiam culpa qui minima
                    necessitatibus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" mx-24  text-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-16 my-4">
                      <span className="text-xl">
                        <img
                          src="https://i.ibb.co/BqXC79J/Asset04.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl text-secondary font-semibold">
                    Joss Vatler
                  </h4>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    totam quasi assumenda est atque similique dignissimos culpa
                    dolor aperiam sapiente minus nulla impedit, neque veniam
                    quod consectetur blanditiis dicta error voluptas tenetur
                    ducimus adipisci? Laborum illo magnam, velit minus nihil
                    ipsa nostrum libero itaque eaque aperiam culpa qui minima
                    necessitatibus.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" mx-24  text-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-16 my-4">
                      <span className="text-xl">
                        <img
                          src="https://i.ibb.co/BqXC79J/Asset04.png"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <h4 className="text-2xl text-secondary font-semibold">
                    Joss Vatler
                  </h4>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    totam quasi assumenda est atque similique dignissimos culpa
                    dolor aperiam sapiente minus nulla impedit, neque veniam
                    quod consectetur blanditiis dicta error voluptas tenetur
                    ducimus adipisci? Laborum illo magnam, velit minus nihil
                    ipsa nostrum libero itaque eaque aperiam culpa qui minima
                    necessitatibus.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
