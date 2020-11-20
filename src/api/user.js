import { instance as axios } from "@config/axios";

// Make a request for a user with a given ID
export async function loginRequestService(params) {
  let result = null;
  try {
    result = await axios.post(`/hotel/login`, {
      access_token: params.token,
      domain: params.type === "facebook" ? 1 : 0,
    });
    if (params.type !== "facebook") {
      result.data.user.picture = { data: { url: result.data.user.picture } };
    }
    console.log(result);
  } catch (e) {
    console.log(e);
  }
  return result;
}
export async function getHotelLikeService(params) {
  let result = null;
  try {
    result = await axios.get(`/hotel/like`, {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return result;
}
export async function setHotelLikeService(params) {
  let result = null;
  try {
    result = await axios.post(
      `/hotel/like`,
      {
        hotel_id: params.hotelId,
      },
      {
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
  return result;
}
