import { useLottie } from "lottie-react";
import SignUpJSON from "../assets/LottieJSON/signup.json";

const SignUp = () => {
  const options = {
    animationData: SignUpJSON,
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
                  Sign Up
                </h2>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Jon"
                  className="input input-bordered"
                  required
                />
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/500x500"
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
