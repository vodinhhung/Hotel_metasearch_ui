import { instance as axios } from "@config/axios";
import { convertNotNull } from "@lib/utils/resolver";

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
    result = await axios.get(`/hotel/view`, {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return result;
}

export async function getSearchHotelByFilterService(hotelFilter) {
  let result = null;
  try {
    let hotelFilterSolve = convertNotNull(hotelFilter);
    if (hotelFilterSolve?.facility?.length) {
      let facilitySolve = [];
      hotelFilterSolve.facility.map((item, index) => {
        if (item) facilitySolve.push(index + 10);
      });
      hotelFilterSolve.facility = facilitySolve;
    }
    result = await axios.get(`/hotel`, {
      params: hotelFilterSolve,
    });
  } catch (error) {
    console.log(error);
  }
  return result;
}

// search destinations
export async function getDestinationsInput(params) {
  let result = null;
  console.log(params.destination.destination);
  try {
    result = await axios.get(`/hotel/search`, {
      params: {
        text: params.destination.destination,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return result;
}
