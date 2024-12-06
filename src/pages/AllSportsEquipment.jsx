import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllSportsEquipment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-12">
        <div className="overflow-x-auto bg-base-100 p-8 rounded-xl shadow-sm">
          <table className="table table-zebra">
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
              {data.map((equipment, idx) => (
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
