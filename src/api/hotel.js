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

export async function getSearchHotelService(params) {
  let result = null;
  console.log(params);
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
export async function getSearchHotelByFilterService(hotelFilter) {
  let result = null;
  try {
    result = await axios.get(`/hotel`, {
      params: {
        destination: hotelFilter.hotel.destination,
        page: 1,
        facility: hotelFilter.hotel.services.toString(),
        star: hotelFilter.hotel.star,
        priceFrom: 0,
        priceTo: hotelFilter.hotel.value,
      },
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
              text: params.destination.destination
          },
      });
  } catch (error) {
      console.log(error);
  }
  return result;
}