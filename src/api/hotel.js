import { instance as axios } from "@config/axios";

// Make a request for a user with a given ID
export async function getHotelDetailService(id) {
  let result = null;
  try {
    result = await axios.get(`/hotel/${id}/`);
  } catch (e) {
    console.log(e);
  }
  return result;
}
export async function setHotelRecentlyViewedService(params) {
  let result = null;
  try {
    result = await axios.post(
      `/hotel/view`,
      {
        hotel_id: params.id,
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

export async function getHotelRecentlyViewedService(params) {
  let result = null;
  try {
    result = await axios.post(
      `/hotel/like`,
      {},
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

export async function getSearchHotelService(params) {
  let result = null;
  try {
    result = await axios.get(`/hotel`, {
      params: {
        destination: "Hà Nội",
        page: 1,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return result;
}
