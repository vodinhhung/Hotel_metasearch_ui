import { instance as axios } from "@config/axios";

// Make a request for a user with a given ID
export async function loginRequestService(params) {
  console.log(params);
  let result = null;
  try {
    result = await axios.post(`/hotel/login`, {
      access_token: params.token,
    });
  } catch (e) {
    console.log(e);
  }
  return result;
}
