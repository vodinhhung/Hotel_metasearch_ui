export const convertNotNull = (obj) => {
  return Object.entries(obj).reduce(
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  );
};
export const renderSortName = (type) => {
  switch (type) {
    case null:
    case undefined:
    case "":
      return "Recommended";
    case "asc":
      return "Increment";
    case "desc":
      return "Decrement";
    default:
      return null;
  }
};
export const renderTypeName = (type) => {
  switch (type) {
    case null:
    case undefined:
    case "":
      return "Recommended";
    case "homestay":
      return "Homestay";
    case "hostel":
      return "Hostel";
    case "hotel":
      return "Hotel";
    default:
      return null;
  }
};
