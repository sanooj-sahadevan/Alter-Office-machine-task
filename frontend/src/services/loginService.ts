/* eslint-disable prefer-const */
import axios from "axios";
import { AUTH_SERVICE_URL } from "./serverURL";
export const loginUser = async (user: unknown) => {
  console.log('google login');
  
  let response = await axios.post(`${AUTH_SERVICE_URL}/user-login`, user, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return response
};


export const verifyJwt = async () => {
  try {
    let response = await axios.post(`${AUTH_SERVICE_URL}/verify-jwt`, {}, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log('verifyjet response' + response.data.success)
    return response.data.success
  } catch (error) {

    console.log('error verifying jwt' + error);
    return false
  }
};




export const logoutUser = async () => {
  try {
    await axios.post(`${AUTH_SERVICE_URL}/logout-user`, {}, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    
  } catch (error) {

    console.log('error verifying jwt' + error);
    return false
  }
};
