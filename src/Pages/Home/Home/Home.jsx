import About from "../About/About";
import Banner from "../Banner/Banner";
import OurFeatured from "../OurFeatured/OurFeatured";
import Team from "../Team/Team";
// import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurFeatured></OurFeatured> {/**TODO Add some dynamic data */}
            <About></About>
            {/* TODO : Featured Classe */}
            {/* <Testimonial></Testimonial> */}
            <Team></Team>
            
        </div>
    );
};

export default Home;