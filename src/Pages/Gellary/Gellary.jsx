import './Gellary.css';
import { Helmet } from "react-helmet";

const Gellary = () => {
    return (
      <div className="gellaryBg">
        <Helmet>
          <title>Gallary || FlexSync</title>
        </Helmet>
        <h1 className="text-5xl font-bold text-white text-center">
          Galley <span className="text-secondary">Page</span>
        </h1>
      </div>
    );
};

export default Gellary;