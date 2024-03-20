import axios from "axios";
export const baseURL = "https://molidom.adjuma.io";

export const logInUser = async (data) => {
  try {
    const res = await axios.post(`${baseURL}/api/v1/auth/signin-user`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.error("Error during Login:", err);
    return err;
  }
};
