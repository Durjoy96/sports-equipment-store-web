import { useLottie } from "lottie-react";
import SignUpJSON from "../assets/LottieJSON/signup.json";
import { Link } from "react-router-dom";
import googlePng from "../assets/Icons/google.png";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const options = {
    animationData: SignUpJSON,
    loop: false,
  };

  const { View } = useLottie(options);

  const { createUserWithEmail, updateUserProfile } = useContext(authContext);

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error("Must have uppercase, lowercase, and 6+ characters");
      return;
    }

    const user = { name, email, photoUrl, password };

    createUserWithEmail(email, password)
      .then((res) => {
        console.log(res);
        updateUserProfile(name, photoUrl);
        toast.success("Registration Successful!");
        form.name.value = "";
        form.email.value = "";
        form.photoUrl.value = "";
        form.password.value = "";
      })
      .catch((error) => {
        console.log(error.message);
        if (error.includes("Firebase: Error (auth/email-already-in-use).")) {
          toast.error("Email already in use");
        }
      });

    setInputDefaultValue("");
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen lg:mt-12">
        <div className="hero-content flex-col gap-12 w-full lg:justify-between lg:flex-row">
          <div className="text-center max-w-2xl lg:text-left">{View}</div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
            <form onSubmit={formHandler} className="card-body">
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
                  placeholder="Mr. Jon"
                  className="input input-bordered"
                  name="name"
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
                  name="email"
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
                  name="photoUrl"
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
                  name="password"
                  required
                />
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
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-primary font-medium hover:opacity-80 mt-6 inline-block"
                >
                  Login Now!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
