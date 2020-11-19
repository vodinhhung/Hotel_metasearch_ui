import 'intl';
import 'intl/locale-data/jsonp/en';
export function convertCurrency(price) {
  price = Math.round(price / 1000) * 1000;
  const currencyPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return currencyPrice;
}
export function statusHotelLike(hotel, hotelList = []) {
  return hotelList.filter((hotelItems) => hotelItems.id === hotel.id).length;
}
