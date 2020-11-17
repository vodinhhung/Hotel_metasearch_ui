export function solveNull(myObj) {
  Object.keys(myObj).forEach((key) => myObj[key] == null && delete myObj[key]);
  return myObj;
}
