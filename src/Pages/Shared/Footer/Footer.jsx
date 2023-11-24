import Container from "../Container";

const Footer = () => {
  return (
    <div className="bg-white">
      <Container>
        <footer className="footer p-10  text-base-content">
          <aside>
            <img
              src="https://i.ibb.co/gmynRFK/Untitled-1-removebg-preview.png"
              className="h-[60px] w-[130px]"
              alt=""
            />
            <p>
              <span className="font-semibold">FlexSync.com</span>
              <br />
              Empowering Innovation with Cutting-Edge Technology Since 1992
            </p>
          </aside>
          <nav>
            <header className="footer-title">Our Services</header>
            <a className="link link-hover">Fitness Plans</a>
            <a className="link link-hover">Nutrition Guidance</a>
            <a className="link link-hover">Workout Programs</a>
            <a className="link link-hover">Health Challenges</a>
          </nav>
          <nav>
            <header className="footer-title">Explore</header>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Join Our Team</a>
            <a className="link link-hover">Press Releases</a>
          </nav>
          <nav>
            <header className="footer-title">Legal Stuff</header>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </footer>
      </Container>
      <aside className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - All right reserved by flexsync.com</p>
      </aside>
    </div>
  );
};

export default Footer;
