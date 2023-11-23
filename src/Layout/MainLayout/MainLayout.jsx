import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Container from "../../Pages/Shared/Container";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
