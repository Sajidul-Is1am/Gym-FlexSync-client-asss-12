import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Container from "../../Shared/Container";
import "./Subscribe.css";
const Subscribe = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const handlesubscribe = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const subscribeInfo = { email, name: user?.displayName };
    axiosSecure.post('/user/subscriber', subscribeInfo)
      .then(res => {
        console.log(res.data, "posted data on server")
        toast.success("Subscribtion complete")
    })
  }
  return (
    <div className="SubscribeBg mb-20 ">
      <Container>
        <h3 className="text-4xl font-bold text-white text-center">
          News Letter
        </h3>
        <div>
          <form
            onSubmit={handlesubscribe}
            className="card-body  mx-auto text-center"
          >
            <h5 className="text-xl font-bold text-white uppercase">
              MD Sajid{" "}
            </h5>
            <div className="join flex justify-center">
              <input
                name="email"
                className="input input-bordered join-item"
                placeholder="Email"
              />
              <button
                type="submit"
                className="btn cursor-progress bg-secondary hover:bg-rose-600 hover:text-white join-item"
              >
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
