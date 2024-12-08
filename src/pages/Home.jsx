// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Marquee from "react-fast-marquee";
import CocaColaImg from "../assets/icons/cocacola.png";
import NasaImg from "../assets/icons/nasa.png";
import ReactImg from "../assets/icons/react.png";
import TailwindImg from "../assets/icons/tailwind.png";
import AsiaAsiaImg from "../assets/icons/asiaAsia.png";

import runnerPng from "../assets/Icons/runner.png";
import soccerPng from "../assets/Icons/soccer.png";
import freakPng from "../assets/Icons/freak.png";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

import DeliveryPng from "../assets/Icons/delivery.png";
import SecurePayment from "../assets/Icons/secure-payments.png";
import Moneyback from "../assets/Icons/money-back.png";
import Support from "../assets/Icons/support.png";

const Home = () => {
  const { setProducts } = useContext(authContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const equipments = useLoaderData();
  setProducts(equipments);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-0 mt-12 md:mt-16 lg:px-5">
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="bg-base-100 p-12 rounded-xl">
              <div className="flex items-center justify-between flex-col-reverse md:flex-row">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-bold text-base-content md:text-4xl lg:text-5xl">
                    Explore Top-Quality Sports Gear for Every Athlete
                  </h2>
                  <p className="text-sm text-base-content-secondary font-normal mt-2 md:text-base md:mt-3">
                    Explore Top-Quality Sports Gear for Every Athlete
                    Description: Whether you're into football, tennis, or
                    fitness training, we have the best equipment to elevate your
                    game.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Link
                      to="/sign-in"
                      className="btn bg-primary text-primary-content hover:bg-primary hover:opacity-70"
                    >
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="h-40 md:h-60 lg:h-96">
                  <img
                    className="h-full object-cover object-center"
                    src={runnerPng}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="bg-base-100 p-12 rounded-xl">
              <div className="flex items-center justify-between flex-col-reverse md:flex-row">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-bold text-base-content md:text-4xl lg:text-5xl">
                    Gear Designed for Comfort & Durability
                  </h2>
                  <p className="text-sm text-base-content-secondary font-normal mt-2 md:text-base md:mt-3">
                    From high-performance shoes to breathable apparel, our
                    collection ensures comfort throughout your workout or match.
                    Get the perfect gear, designed for maximum performance and
                    durability.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Link
                      to="/sign-in"
                      className="btn bg-primary text-primary-content hover:bg-primary hover:opacity-70"
                    >
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="h-40 md:h-60 lg:h-96">
                  <img
                    className="h-full object-cover object-center"
                    src={soccerPng}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="bg-base-100 p-12 rounded-xl">
              <div className="flex items-center justify-between flex-col-reverse md:flex-row">
                <div className="max-w-lg">
                  <h2 className="text-3xl font-bold text-base-content md:text-4xl lg:text-5xl">
                    Customer Reviews Speak for Themselves
                  </h2>
                  <p className="text-sm text-base-content-secondary font-normal mt-2 md:text-base md:mt-3">
                    Don’t just take our word for it. Read reviews from satisfied
                    athletes who trust our products for their training and
                    competitive needs. Join the winning team today!
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Link
                      to="/sign-in"
                      className="btn bg-primary text-primary-content hover:bg-primary hover:opacity-70"
                    >
                      Get Started!
                    </Link>
                  </div>
                </div>
                <div className="h-40 md:h-60 lg:h-96">
                  <img
                    className="h-full object-cover object-center"
                    src={freakPng}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Trusted By */}
        <div className="mt-12 md:mt-32">
          <div className="max-w-lg mx-auto">
            <h2 className="text-xl text-center font-bold text-base-content md:text-2xl lg:text-4xl">
              Trusted By
            </h2>
          </div>
          <Marquee autoFill={true} gradient={true} gradientColor="#f8f9fd">
            <div className="flex gap-6 items-center mt-8">
              <img className="w-10 grayscale" src={NasaImg} alt="" />
              <img className="w-10 grayscale" src={ReactImg} alt="" />
              <img className="w-16 grayscale" src={AsiaAsiaImg} alt="" />
              <img className="w-10 grayscale" src={TailwindImg} alt="" />
              <img className="w-20 grayscale" src={CocaColaImg} alt="" />
            </div>
          </Marquee>
        </div>
        <div className="flex gap-6 justify-center flex-col mt-12 md:mt-20 md:flex-row md:flex-wrap lg:mt-32">
          <NavLink className="btn" to="/">
            ALL
          </NavLink>
          {categories.map((category, idx) => (
            <NavLink className="btn" key={idx} to={`/${category}`}>
              {category.toUpperCase()}
            </NavLink>
          ))}
        </div>
        <Outlet></Outlet>
        {/* Why Shop With Us? */}
        <div className="mt-12 md:mt-20 lg:mt-32">
          <h2 className="text-xl font-bold text-base-content text-center md:text-2xl lg:text-3xl">
            Why Shop With Us?
          </h2>
          <div className="py-12 px-8 bg-base-100 rounded-xl mt-8 flex gap-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="h-14">
                <img className="h-full" src={DeliveryPng} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-content">
                  Fast Delivery
                </h3>
                <p className="text-base font-normal text-base-content-secondary">
                  Experience Lightning-Fast Delivery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14">
                <img className="h-full" src={SecurePayment} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-content">
                  Secured Payment
                </h3>
                <p className="text-base font-normal text-base-content-secondary">
                  Shop with Confidence
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14">
                <img className="h-full" src={Moneyback} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-content">
                  Money Back
                </h3>
                <p className="text-base font-normal text-base-content-secondary">
                  100% Money-Back Guarantee
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-14">
                <img className="h-full" src={Support} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-content">
                  24/7 Support
                </h3>
                <p className="text-base font-normal text-base-content-secondary">
                  Always Here for You
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
