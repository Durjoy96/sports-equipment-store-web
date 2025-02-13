import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Card = ({ equipment, filteredDataHandler }) => {
  const { imageURL, itemName, _id } = equipment;
  const deleteHandler = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#FF8000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://sports-equipment-store-server-sable.vercel.app/equipment/${id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            data.acknowledged && filteredDataHandler(id);
            data.acknowledged &&
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
          });
      }
    });
  };
  return (
    <>
      <Tooltip id="my-tooltip" place="top" />
      <div className="bg-base-100 p-8 rounded-lg shadow-sm flex flex-col">
        <div className="h-60 bg-base-200 p-4 rounded-lg">
          <img
            className="h-full object-contain object-center"
            src={imageURL}
            alt=""
          />
        </div>
        <div className="mt-6 flex flex-col flex-1">
          <h2 className="flex-1 text-lg font-semibold text-base-content md:text-xl">
            {itemName}
          </h2>
          <div className="mt-6 flex gap-6">
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Delete"
              onClick={() => deleteHandler(_id)}
              className="flex-1 flex items-center gap-2 bg-transparent px-4 py-2 rounded-lg text-red-500 border border-red-500 hover:opacity-80"
            >
              <FaTrash></FaTrash>
              Delete
            </button>
            <Link
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Update"
              to={`/user/equipment/${_id}/edit`}
              onClick={() => setEquipmentId(_id)}
              className="flex-1 flex justify-center items-center gap-2 bg-primary px-4 py-2 rounded-lg text-primary-content hover:opacity-80"
            >
              <FaEdit></FaEdit>
              Update
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
