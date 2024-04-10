import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../auth/AuthProvider";
import usePageBackground from "../../hook/usePageBackgroun";
import Button from "../../shareComponents/Button";

function Register() {
  // register page background color change
  const { pathname } = useLocation();
  usePageBackground("bg-green-50", pathname);

  // password show and hide
  const [showPass, setShowPass] = useState(false);

  // user visit location find
  const location = useLocation();

  // after registration navigate to home page
  const navigate = useNavigate();
  // handle create user with email and password
  const { handleRegister, updateUserProfile } = useContext(AuthContext);
  // handle form with hook
  const { register, handleSubmit, setFocus } = useForm();

  // focus field
  useEffect(() => {
    setFocus("userName");
  }, [setFocus]);

  // handle submit form
  const onSubmit = (data) => {
    const { userName, email, photoUrl, password } = data;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    console.log(userName, photoUrl);
    if (!userName || !email || !password || !photoUrl) {
      toast.error("Please fill all the fields!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one lowercase letter and one uppercase letter!"
      );
      return;
    }
    // successfully created user
    handleRegister(email, password).then(() => {
      updateUserProfile(userName, photoUrl)
        .then(() => {
          toast.success("Registration successful.");
          navigate(location.state || "/");
        })
        .catch((err) => {
          if (err.message === "Firebase: Error (auth/email-already-in-use).") {
            toast.error("Email already in use!");
          }
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Haven House | Register</title>
      </Helmet>

      <section
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="container"
      >
        <div className="container ring-1 ring-green-500/50 w-full md:max-w-md mx-auto p-8 space-y-3 rounded-3xl bg-white shadow-md my-8">
          <h1 className="text-2xl md:text-3xl font-semibold font-poppins text-center">
            Register
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6 font-poppins"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="userName" className="block font-semibold">
                UserName
              </label>
              <input
                {...register("userName")}
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Your UserName..."
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
              />
              {/* {errors.userName &&
                errors.userName.type === "required" &&
                toast.error("UserName is Required!")} */}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email..."
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="photoUrl" className="block font-semibold">
                Photo
              </label>
              <input
                {...register("photoUrl")}
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Enter Your Photo..."
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password")}
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password..."
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
                />
                <div
                  className="text-2xl text-gray-400 absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </div>
              </div>
            </div>
            <Button type="submit" cls={"!mx-auto"} name="Register"></Button>
          </form>
          <p className="text-sm text-center sm:px-6">
            {`Already have an account?`}{" "}
            <Link
              to="/login"
              className="underline font-semibold text-green-500"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;
