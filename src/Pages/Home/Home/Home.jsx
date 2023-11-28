import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import OurFeatured from "../OurFeatured/OurFeatured";
import Subscribe from "../Subscribe/Subscribe";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home || FlexSync</title>
        </Helmet>
        <Banner></Banner>
        <OurFeatured></OurFeatured> {/**TODO Add some dynamic data */}
        <About></About>
        {/* TODO : Featured Classe */}
        <Testimonial></Testimonial>
        <Blog></Blog>
        <Subscribe></Subscribe>
        <Team></Team>
      </div>
    );
};

export default Home;