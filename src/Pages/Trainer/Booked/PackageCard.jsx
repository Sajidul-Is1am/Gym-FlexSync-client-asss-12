/* eslint-disable react/prop-types */
import { key } from "localforage";
import { FaDumbbell } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PackageCard = ({ pack }) => {
  const axiosSecure = useAxiosSecure();

  const { name, image, joinNowButtonText, features, facilities, _id } = pack;

  const newPack = { ...pack };
  delete newPack._id;

  const handleJoinNow = () => {
    axiosSecure.post("/user/selectedpack", newPack).then((res) => {
      console.log(res.data);
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
