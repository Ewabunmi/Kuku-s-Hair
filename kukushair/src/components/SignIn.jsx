import Cookies from "js-cookie";
import Logo from "../assets/images/logo.png";
import { useForm } from "react-hook-form";
import { logInUser } from "../api";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setCookie = (token) => {
    Cookies.set("myToken", token, { expires: 7 });
  };

  const onSubmit = async (data) => {
    const payLoad = {
      email: data.username,
      password: data.password,
    };

    await logInUser(payLoad).then((res) => {
      console.log("login user", res.data.token);
      if (res?.status === "success") {
        setCookie(res?.data.token);
        alert("Login Successful");
      } else {
        alert("An error occurred", res?.error?.message);
      }
    });
  };

  return (
    <>
      <div>
        <div className="bg-cover bg-no-repeat bg-black bg-[url('/src/assets/images/sign-in.png')]">
          <div className="py-20 px-2">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-y-4">
                {/* Left Col */}
                <div className="text-left items-center lg:p-24 md:p-18 sm:p-8 p-8 mt-36">
                  <div className="bg-black bg-opacity-50 rounded-lg">
                    <h3 className="font-Bold text-center lg:text-5xl md:text-4xl sm:text-4xl text-[#FFF] text-4xl mt-6">
                      Kuku's Hair
                    </h3>
                    <p className="font-Regular lg:text-lg md:text-lg sm:text-base text-center pt-8 text-[#EFEFEF] text-xl">
                      This is the official page to manage Kuku's orders, respond
                      to bookings and more. Log in to continue.
                    </p>
                  </div>
                </div>
                {/* Right Col */}
                <div className="text-left backdrop-blur-xl shadow-slate-300 shadow-2xl bg-[#FFF]  pl-10 pr-10 rounded-md h-[670px] mx-auto">
                  <div className="flex justify-center items-center mt-20">
                    <img src={Logo} style={{ height: "auto" }} className="" />
                  </div>
                  <div className="flex justify-center items-center mt-12">
                    <h1 className="lg:text-2xl md:text-2xl sm:text-xl text-xl font-SemiBold text-[#000] break-normal md:break-all">
                      Welcome back
                    </h1>
                  </div>
                  <h3 className="flex justify-center items-center text-[#666] mb-8 text-xl">
                    Sign in to your account
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} name="contact">
                    <div className="relative z-0 w-full mb-6 group text-sm font-Bold text-[#000]">
                      Username
                      <input
                        {...register("username", { required: true })}
                        type="text"
                        id="large-input"
                        placeholder="Enter your username"
                        name="username"
                        className={`block w-full p-4 mt-2 text-[#666] font-Regular rounded-lg bg-[#F5F5F5] sm:text-md outline-none focus:outline-amber-300 ${
                          errors.username ? "border-red-500" : ""
                        }`}
                      />
                      {errors.username && (
                        <p className="text-red-500 text-sm mt-1">
                          Username is required
                        </p>
                      )}
                    </div>
                    <div className="relative z-0 w-full mb-6 group text-sm font-Bold text-[#000]">
                      Password
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        id="large-input"
                        placeholder="Password"
                        name="password"
                        className={`block w-full p-4 mt-2 text-[#666] font-Regular rounded-lg bg-[#F5F5F5] sm:text-md outline-none focus:outline-amber-300 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          Password is required
                        </p>
                      )}
                    </div>

                    <div className="text-[#858585] text-sm mt-8 gap-20 flex justify-between items-between">
                      <p className="flex items-center">
                        <label>
                          <input
                            type="checkbox"
                            className="accent-pink-400 w-5 h-5"
                          />
                        </label>
                        <span className="ml-2">Remember me</span>
                      </p>
                      <a
                        href="#"
                        className="text-sm font-Bold text-pink-500 flex items justify-end m-4 hover:underline"
                      >
                        Forgot Password
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="text-[#FFF] mt-3 bg-pink-500 hover:bg-amber-500 focus:ring-1 focus:outline-none focus:ring-amber-100 font-medium font-SemiBold rounded-lg text-xl p-3 block w-full text-center mx-auto"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
              <div className="font-Regular flex justify-center items-center mt-20 text-[#FFFFFF] text-sm">
                All rights reserved ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
