import Container from "../../Shared/Container";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="SubscribeBg mb-20 ">
      <Container>
        <h3 className="text-4xl font-bold text-white text-center">
          News Letter
        </h3>
        <div>
          <form className="card-body  mx-auto text-center">
                          <h5 className="text-xl font-bold text-white uppercase">MD Sajid </h5>
                      <div className="join flex justify-center">
              <input
                className="input input-bordered join-item"
                placeholder="Email"
              />
              <button type="submit" className="btn bg-secondary hover:bg-rose-600 hover:text-white join-item">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;

// https://i.ibb.co/PN6YS7R/1.jpg
