/* eslint-disable react/prop-types */
import { key } from "localforage";
import { FaDumbbell } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const PackageCard = ({ pack }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { name, image, joinNowButtonText, features, facilities, _id } = pack;

  const newPack = { ...pack };
  delete newPack._id;

  const handleJoinNow = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Join This",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Join!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/user/selectedpack?name=${name}`, newPack)
          .then((res) => {
            console.log(res.data);
            toast.success("succesfully Joined this class");
          });
      }
    });
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl flex h-full ">
        <figure>
          <img src={image} alt="Shoes" className="h-[220px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            {name}
            <FaDumbbell className="text-orange-600" />
          </h2>
          <div>
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
          <div className="collapse">
            <input type="checkbox" />
            <div className=" collapse-title font-bold gap-3  uppercase flex items-center">
              facilities
              <FaChevronRight className="text-red-600" />
            </div>
            <div className="collapse-content">
              <div>
                {facilities.map((item, index) => (
                  <li key={index}> {item} </li>
                ))}
              </div>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleJoinNow}
              className="btn btn-outline btn-success"
            >
              {joinNowButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
