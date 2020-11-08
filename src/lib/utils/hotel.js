export function convertCurrency(price) {
  price = Math.round(price / 1000) * 1000;
  const currencyPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return currencyPrice;
}
