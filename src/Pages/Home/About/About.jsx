import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Container from "../../Shared/Container";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import "./About.css";

const About = () => {
  return (
    <Container>
      <div>
        <SectionTitle
          subHeading={"About"}
          mainHeading={"Do something every day"}
        ></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-center items-center md:my-16 my-10">
          <div className="space-y-6">
            <h6 className="font-semibold text-xl text-gray-700">Our Story</h6>
            <h3 className="lg:text-7xl md:text-5xl text-3xl font-bold pb-4">
              Who We Are?
            </h3>
            <p>
              At{" "}
              <span className="font-bold">
                <Link to={"/"}>Flexsync.com</Link>
              </span>
              , we are a passionate team dedicated to delivering excellence.
              With a commitment to innovation and client satisfaction, we blend
              creativity and expertise to surpass expectations. Our diverse
              talents converge to create a dynamic environment, ensuring
              impactful solutions and a lasting impact on those we serve."
            </p>
            <div className="p-6 bg-gray-100 rounded-xl space-y-3">
              <div data-aos="fade-down" className="flex gap-3">
                <div className="mt-2 text-secondary">
                  <RiVerifiedBadgeFill />
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-1">Community</h5>
                  <p>
                    Unity in diversity, where we share, support, and grow
                    together
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="flex gap-3">
                <div className="mt-2 text-secondary">
                  <RiVerifiedBadgeFill />
                </div>
                <div>
                  <h5 className="text-xl font-semibold mb-1">Community</h5>
                  <p>
                    Unity in diversity, where we share, support, and grow
                    together
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden justify-start lg:mx-auto gap-3">
            <img
              data-aos="fade-down"
              src="https://i.ibb.co/pjQ3xG5/fusionjpg-08-1065x1536.jpg"
              className="h-[350px] w-3/7 rounded-xl mt-10"
              alt=""
            />
            <img
              data-aos="fade-up"
              src="https://i.ibb.co/4W1pQY0/fusionjpg-07-1065x1536.jpg"
              className="h-[350px] w-3/7 rounded-xl"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="aboutThumnailImg">
            <figure className="snip1543 lg:h-[300px] h-full">
              <img
                src="https://i.ibb.co/m6xL62Z/fusionjpg-010.jpg"
                className=""
                alt="sample101"
              />
              <figcaption className="md:space-y-5">
                <h3 data-aos="fade-down" className="md:text-4xl text-xl">
                  Where Innovation Meets Personalization
                </h3>
                <p
                  data-aos="zoom-in"
                  className="md:text-lg text-sm md:text-white text-black"
                >
                  But Calvin is no kind and loving god! He's one of the old
                  gods! He demands sacrifice!
                </p>
              </figcaption>
              <a href="#"></a>
            </figure>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 items-center justify-between">
            <div className="space-y-4">
              <h3
                data-aos="zoom-in"
                className="md:text-5xl text-3xl font-bold md:pb-4 max-w-md uppercase italic"
              >
                Experience a different way to work out
              </h3>
              <p>
                Discover a unique approach to fitness with us. Our workouts
                redefine the ordinary, offering an experience that goes beyond
                the traditional. Embrace a new way to exercise where innovation
                meets motivation, and each session brings a fresh perspective to
                your fitness journey.
              </p>
            </div>
            <div>
              <div className="p-6 bg-black text-white rounded-xl space-y-3">
                <div data-aos="fade-down" className="flex gap-3">
                  <div className="mt-2 text-secondary">
                    <RiVerifiedBadgeFill />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-1">
                      We deliver results:
                    </h5>
                    <p>
                      Experience proven success as our dedicated team guides you
                      towards achieving your fitness goals.
                    </p>
                  </div>
                </div>
                <div data-aos="fade-down" className="flex gap-3">
                  <div className="mt-2 text-secondary">
                    <RiVerifiedBadgeFill />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-1">
                      Personalized sessions:
                    </h5>
                    <p>
                      Enjoy workouts crafted just for you, ensuring a
                      personalized fitness journey that fits your needs
                    </p>
                  </div>
                </div>
                <div data-aos="fade-up" className="flex gap-3">
                  <div className="mt-2 text-secondary">
                    <RiVerifiedBadgeFill />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-1">
                      Focus on your health:
                    </h5>
                    <p>
                      Prioritize your well-being with tailored programs designed
                      to elevate your health and vitality.
                    </p>
                  </div>
                </div>
                <div data-aos="fade-up" className="flex gap-3">
                  <div className="mt-2 text-secondary">
                    <RiVerifiedBadgeFill />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold mb-1">
                      We're perfect for beginners:
                    </h5>
                    <p>
                      Start your fitness journey confidently with our
                      beginner-friendly approach, making every session
                      accessible and effective
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
