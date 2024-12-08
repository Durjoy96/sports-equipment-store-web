import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Edit = () => {
  const equipment = useLoaderData();
  const {
    category,
    customization,
    description,
    imageURL,
    itemName,
    price,
    processingTime,
    rating,
    stockStatus,
    _id,
  } = equipment;

  const { user } = useContext(authContext);

  const formHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const imageUrl = form.imageUrl.value;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const name = form.name.value;
    const email = form.email.value;
    const equipment = {
      imageURL: imageUrl,
      itemName: itemName,
      category: category,
      description: description,
      price: Number(price),
      rating: Number(rating),
      customization: customization,
      processingTime: processingTime,
      stockStatus: Number(stockStatus),
      userName: name,
      userEmail: email,
    };

    fetch(
      `https://sports-equipment-store-server-sable.vercel.app/equipment/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(equipment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.acknowledged) {
          Swal.fire({
            title: "Equipment Updated!",
            text: "Your new equipment has been successfully updated to the system. Ready to go!",
            icon: "success",
          });
        }
      });
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-12">
        <div className="p-8 rounded-xl bg-base-100 shadow-sm">
          <h2 className="text-lg text-base-content md:text-xl lg:text-2xl">
            Update equipment
          </h2>
          <hr className="mt-6" />
          <form onSubmit={formHandler} className="max-w-2xl">
            <div className="mt-8 space-y-3 md:columns-2">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Image URL</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  defaultValue={imageURL}
                  className="input input-bordered w-full max-w-xs"
                  name="imageUrl"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Item Name</span>
                </div>
                <input
                  type="text"
                  placeholder="eg. EliteMatch Football"
                  defaultValue={itemName}
                  className="input input-bordered w-full max-w-xs"
                  name="itemName"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Category Name</span>
                </div>
                <input
                  type="text"
                  placeholder="eg. Football"
                  defaultValue={category}
                  className="input input-bordered w-full max-w-xs"
                  name="category"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Type here..."
                  defaultValue={description}
                  name="description"
                  required
                ></textarea>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="eg. 35"
                    defaultValue={price}
                    className="input input-bordered w-full max-w-xs"
                    name="price"
                    required
                  />
                  <FaDollarSign className="absolute right-5 top-1/2 -translate-y-1/2 fill-base-content-secondary"></FaDollarSign>
                </div>
              </label>
              <label className="form-control w-full max-w-xs break-inside-avoid">
                <div className="label">
                  <span className="label-text">Rating (Out of 5)</span>
                </div>
                <input
                  type="text"
                  min={0}
                  placeholder="eg. 4.8"
                  defaultValue={rating}
                  name="rating"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Customization</span>
                </div>
                <input
                  type="text"
                  placeholder="eg. bat with extra grip, hit paper etc"
                  defaultValue={customization}
                  className="input input-bordered w-full max-w-xs"
                  name="customization"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Processing Time</span>
                </div>
                <input
                  type="text"
                  placeholder="eg. 2-4 days"
                  defaultValue={processingTime}
                  className="input input-bordered w-full max-w-xs"
                  name="processingTime"
                  required
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
                  defaultValue={stockStatus}
                  className="input input-bordered w-full max-w-xs"
                  name="stockStatus"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Your Name</span>
                </div>
                <input
                  type="text"
                  value={user?.displayName}
                  placeholder={user?.displayName}
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                  disabled
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Your Email</span>
                </div>
                <input
                  type="text"
                  value={user?.email}
                  placeholder={user?.email}
                  className="input input-bordered w-full max-w-xs"
                  name="email"
                  disabled
                />
              </label>
            </div>
            <div className="flex justify-end mt-8">
              <button className="btn bg-primary text-primary-content hover:bg-primary/80">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
