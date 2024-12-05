import { useLottie } from "lottie-react";
import SignInJSON from "../assets/LottieJSON/signin.json";
import { Link } from "react-router-dom";
import googlePng from "../assets/Icons/google.png";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const SignIn = () => {
  const options = {
    animationData: SignInJSON,
    loop: false,
  };

  const { View } = useLottie(options);

  const { signInWithEmail, signInWithGoogle, serverPostReqHandler } =
    useContext(authContext);

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Sign in Successful!");
        form.email.value = "";
        form.password.value = "";
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          toast.error("Invalid email or password");
        }
      });
  };

  const signInWithGoogleHandler = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        toast.success("Sign in Successful!");
        const user = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          creationTime: res?.user?.metadata?.creationTime,
        };
        serverPostReqHandler(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen lg:mt-6">
        <div className="hero-content flex-col gap-12 w-full lg:justify-between lg:flex-row">
          <div className="text-center max-w-2xl lg:text-left">{View}</div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
            <form onSubmit={formHandler} className="card-body">
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
                  name="email"
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
                onClick={signInWithGoogleHandler}
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
