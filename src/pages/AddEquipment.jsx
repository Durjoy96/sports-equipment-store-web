import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { authContext } from "../AuthProvider/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(authContext);
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-12">
        <div className="p-8 rounded-xl bg-base-100 shadow-sm">
          <h2 className="text-lg text-base-content md:text-xl lg:text-2xl">
            Add equipment
          </h2>
          <hr className="mt-6" />
          <div className="mt-8 space-y-3 md:columns-2 max-w-2xl">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Item Name</span>
              </div>
              <input
                type="text"
                placeholder="eg. Football"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category Name</span>
              </div>
              <input
                type="text"
                placeholder="eg. Ball"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Type here..."
              ></textarea>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="eg. 500"
                  className="input input-bordered w-full max-w-xs"
                />
                <FaDollarSign className="absolute right-5 top-1/2 -translate-y-1/2 fill-base-content-secondary"></FaDollarSign>
              </div>
            </label>
            <label className="form-control w-full max-w-xs break-inside-avoid">
              <div className="label">
                <span className="label-text">Rating</span>
              </div>
              <input
                type="number"
                max={5}
                min={0}
                placeholder="eg. 4.8"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Customization</span>
              </div>
              <input
                type="text"
                placeholder="eg. bat with extra grip, hit paper etc"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Processing Time</span>
              </div>
              <input
                type="text"
                placeholder="eg. 2 days"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Stock Status</span>
              </div>
              <input
                type="number"
                min={0}
                placeholder="eg. 1000"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Your Name</span>
              </div>
              <input
                type="number"
                placeholder={user?.displayName}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Your Email</span>
              </div>
              <input
                type="number"
                placeholder={user?.email}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEquipment;
