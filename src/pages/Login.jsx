import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema } from "../schema/userManagement";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";
import { storeUserData } from "../utils/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../components/Modals/loadingModal";
// import axiosInstance from "../config/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      // const res = await axiosInstance.post(`/admin/login`, data);
      // storeUserData(res.data.user);

      // Sample data for static usage
      storeUserData({
        name: "User Name",
        imageURL: "/images/profile.png",
      });
      toast.success("Successfully Signed In");
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading && <LoadingModal loading={loading} />}
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <form
          className="max-w-md w-full flex flex-col"
          onSubmit={handleSubmit(handleLogin)}
        >
          <h2 className="text-5xl font-bold mb-8">Sign in</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none bg-primaryLight focus:border-primary"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-base mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none bg-primaryLight focus:border-primary"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            className="bg-primary hover:bg-primary/60 text-white font-bold py-2 px-6 rounded-full outline-none self-center flex items-center gap-5"
            type="submit"
          >
            SIGN IN
            <span>
              <IoMdArrowForward />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
