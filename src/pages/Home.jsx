// HomePage.jsx
import { toast } from "react-toastify";
import HomeLayout from "../components/Layouts/HomeLayout";

const HomePage = () => {
  const notify = () =>
    toast("Welcome to React Tailwind Starter!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <HomeLayout
      title="Home Page - React Tailwind Starter"
      description="A simple template to get you started with React and Tailwind CSS."
    >
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Welcome
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Faster Way to Build React Apps
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore the features my React Tailwind Starter has to
              offer.
            </p>
            <button
              className="mt-5 bg-indigo-600 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded-sm shadow-sm hover:shadow-lg outline-hidden focus:outline-hidden mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={notify}
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
