import { useState } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllSportsEquipment = () => {
  const data = useLoaderData();
  const [equipments, setEquipments] = useState(data);

  const sortBtnHandler = () => {
    const newEquipments = [...equipments];
    const DecEquipments = newEquipments.sort((a, b) => a.price - b.price);
    console.log(DecEquipments);
    setEquipments(DecEquipments);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-12">
        <div className="overflow-x-auto bg-base-100 p-8 rounded-xl shadow-sm">
          <div className="flex justify-end">
            <button
              onClick={sortBtnHandler}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-base-300 text-base-content-secondary shadow-sm"
            >
              <FaSortAmountDownAlt /> Sort
            </button>
          </div>
          <table className="table table-zebra mt-5">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {equipments.map((equipment, idx) => (
                <>
                  <tr>
                    <th>{idx + 1}</th>
                    <td>{equipment.itemName}</td>
                    <td>{equipment.category}</td>
                    <td>{equipment.price}$</td>
                    <td>{equipment.stockStatus} Available</td>
                    <td>
                      <Link
                        to={`/details/${equipment._id}`}
                        className="bg-primary py-2 px-4 rounded-lg text-primary-content hover:bg-primary/80"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllSportsEquipment;
