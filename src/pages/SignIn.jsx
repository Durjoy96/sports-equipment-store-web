import { useLottie } from "lottie-react";
import SignInJSON from "../assets/LottieJSON/signin.json";
import { Link } from "react-router-dom";
import googlePng from "../assets/Icons/google.png";

const SignIn = () => {
  const options = {
    animationData: SignInJSON,
    loop: false,
  };

  const { View } = useLottie(options);
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-12 w-full lg:justify-between lg:flex-row">
          <div className="text-center max-w-2xl lg:text-left">{View}</div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
            <form className="card-body">
              <div>
                <h2 className="text-xl font-bold text-center pb-6 md:text-2xl lg:text-3xl">
                  Sign In
                </h2>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="jon@gmail.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-primary-content hover:bg-primary/80">
                  Submit
                </button>
              </div>
              <div class="divider">Or</div>
              <button
                type="button"
                className="btn w-full text-sm font-semibold px-8 bg-base-300 shadow-none border text-base-content-secondary hover:opacity-80"
              >
                <img src={googlePng} className="w-5 h-5" alt="" />
                Sign In With Google
              </button>
              <p className="text-base text-base-content-secondary">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-primary font-medium hover:opacity-80 mt-6 inline-block"
                >
                  Sign Up Now!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
