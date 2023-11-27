/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ClassCard = ({ classItem }) => {
  const { name, image, schedule, trainer, instructor, coach, terrain, _id } =
    classItem;

  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="h-[250px] w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">
            {name}{" "}
            <div className="badge ">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </h2>
          <h3 className="text-xl">
            <span className="font-bold">Trainer : </span>
            {trainer || instructor || terrain || coach}
          </h3>
          <p>
            <span className="font-bold">Schedule :</span> {schedule}
          </p>
          <div className="card-actions justify-end mt-6">
            <Link
              to={`/classes/${_id}`}
              className="btn bg-secondary text-white"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
