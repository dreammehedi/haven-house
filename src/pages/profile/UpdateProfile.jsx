import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/AuthProvider";
import usePageBackground from "../../hook/usePageBackgroun";
import Button from "../../shareComponents/Button";

function UpdateProfile() {
  // update profile page background color change
  const { pathname } = useLocation();
  usePageBackground("bg-green-50", pathname);

  // handle create user with email and password
  const { userInfo, updateUserProfile } = useContext(AuthContext);

  // handle form with hook
  const { register, handleSubmit } = useForm();

  // handle submit form
  const onSubmit = (data) => {
    const { userName, photoUrl } = data;

    // successfully update user name and photo
    updateUserProfile(userName, photoUrl)
      .then(() => {
        toast.success("Profile Update successful.");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <>
      <Helmet>
        <title>Haven House | Update Profile</title>
      </Helmet>

      <section data-aos="fade-up" data-aos-delay="300" className="container">
        <div className="container ring-1 ring-green-500/50 w-full md:max-w-md mx-auto p-8 space-y-3 rounded-3xl bg-white shadow-md my-8">
          <h1 className="text-2xl md:text-3xl font-semibold font-poppins text-center">
            Update Profile
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6 font-poppins"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="userName" className="block font-semibold">
                Update User Name
              </label>
              <input
                defaultValue={userInfo?.displayName}
                {...register("userName")}
                type="text"
                name="userName"
                id="userName"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block font-semibold">
                {userInfo?.email ? "Email" : "Provider"}
              </label>
              <input
                disabled
                readOnly
                defaultValue={
                  userInfo?.email
                    ? `${userInfo.email}`
                    : `${userInfo?.providerData[0].providerId}`
                }
                {...register("email")}
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="photoUrl" className="block font-semibold">
                Update Your Photo
              </label>
              <input
                defaultValue={userInfo?.photoURL}
                {...register("photoUrl")}
                type="text"
                name="photoUrl"
                id="photoUrl"
                className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <Button
              type="submit"
              cls={"!mx-auto"}
              name="Update Profile"
            ></Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default UpdateProfile;
