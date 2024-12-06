import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { TbCategory, TbFileDescription, TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { RiCustomSize } from "react-icons/ri";

const Details = () => {
  const equipment = useLoaderData();
  console.log(equipment);
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
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-12">
        <div className="grid gap-8 lg:grid-cols-[.5fr_1fr]">
          <div className="p-8 rounded-xl bg-base-100 md:h-72 lg:h-full">
            <img className="h-full w-full" src={imageURL} alt="" />
          </div>
          <div className="p-8 rounded-xl bg-base-100">
            <h2 className="text-lg font-semibold text-base-content md:text-xl lg:text-2xl">
              {itemName}
            </h2>
            <div>
              <ReactStars
                count={5}
                value={rating}
                key={_id}
                size={24}
                edit={false}
                isHalf={true}
                activeColor="#ffd700"
              />
            </div>
            <p className="text-primary text-base mt-1">
              {stockStatus}+{" "}
              <span className="text-base-content-secondary">Available</span>
            </p>
            <p className="flex items-center gap-2 text-base-content-secondary mt-2">
              <TbCategory className="stroke-primary w-5 h-5" />
              {category}
            </p>
            <p className="flex items-center gap-2 text-base-content-secondary mt-2">
              <AiOutlineDollar className="fill-primary w-5 h-5" />
              {price}$
            </p>
            <p className="flex items-center gap-2 text-base-content-secondary mt-2">
              <TbTruckDelivery className="stroke-primary w-5 h-5" />
              {processingTime}
            </p>
            <p className="flex items-center gap-2 text-base-content-secondary mt-2">
              <RiCustomSize className="fill-primary w-5 h-5" />
              {customization}
            </p>
            <p className="text-base-content-secondary mt-6">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
