import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../auth/AuthProvider";
import Button from "../../shareComponents/Button";

function Register() {
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

      <section className="container">
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
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password..."
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
              />
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
