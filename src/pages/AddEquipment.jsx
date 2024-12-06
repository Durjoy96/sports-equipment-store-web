import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
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
      processingTime: Number(processingTime),
      stockStatus: Number(stockStatus),
      userName: name,
      userEmail: email,
    };

    fetch("http://localhost:5000/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(equipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Equipment Added!",
            text: "Your new equipment has been successfully added to the system. Ready to go!",
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
            Add equipment
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
                  className="input input-bordered w-full max-w-xs"
                  name="imageUrl"
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
                  name="itemName"
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
                  name="category"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Type here..."
                  name="description"
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
                    name="price"
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
                  name="rating"
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
                  name="customization"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Processing Time</span>
                </div>
                <input
                  type="number"
                  placeholder="eg. 2"
                  className="input input-bordered w-full max-w-xs"
                  name="processingTime"
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
                  name="stockStatus"
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEquipment;
