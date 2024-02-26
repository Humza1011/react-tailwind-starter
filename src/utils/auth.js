import Cookies from "js-cookie";
// import axiosInstance from "../config/axiosInstance";

// Store user data in cookies
export const storeUserData = (user) => {
  Cookies.set("user", JSON.stringify(user), {
    expires: 7,
    secure: true,
    sameSite: "strict",
  });
};

// Check if user is logged in
export const isUserLoggedIn = () => {
  return !!Cookies.get("user");
};

// Retrieve stored user data
export const getUserData = () => {
  const userData = Cookies.get("user");
  return userData ? JSON.parse(userData) : null;
};

// Log out the user and clear related data from cookies
export const userLogout = async () => {
  try {
    // await axiosInstance.get("/user/logout");
    Cookies.remove("user");
  } catch (error) {
    console.error("Logout failed", error);
  }
};
