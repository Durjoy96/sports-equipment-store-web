import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import ReactStars from "react-rating-stars-component";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const { products, setProducts } = useContext(authContext);
  const categoryProducts = useLoaderData();
  if (categoryProducts) {
    setProducts(categoryProducts);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
        {products.map((product) => (
          <>
            <div
              key={product._id}
              className="bg-base-100 p-6 rounded-xl shadow-md"
            >
              <div className="h-60 bg-base-200 p-4 rounded-xl">
                <img
                  className="h-full object-contain object-center"
                  src={product.imageURL}
                  alt=""
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-base-content md:text-xl">
                  {product.itemName}
                </h2>
                <div>
                  <ReactStars
                    count={5}
                    value={product.rating}
                    key={product._id}
                    size={24}
                    edit={false}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                </div>
                <div>
                  {product.stockStatus ? (
                    <p className="text-green-500">Product In Stock</p>
                  ) : (
                    <p className="text-red-500">Stock Out</p>
                  )}
                </div>
                <p className="text-lg font-semibold mt-2 text-base-content-secondary md:text-xl">
                  {product.price}$
                </p>
                <Link
                  to={`/details/${product._id}`}
                  className="inline-block mt-3 text-base-content-secondary hover:text-primary hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
