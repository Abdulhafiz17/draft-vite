export default {
  routerPrefix() {
    if (location.host == "abdulhafiz17.github.io") return "/draft-vite/";
    else return "";
  },
  currency(number = Number()) {
    return Intl.NumberFormat("UZ-uz").format(Number(number).toFixed(2));
  },
  storage(prop = "", value) {
    if (typeof value !== "undefined")
      localStorage[prop] = JSON.stringify(value);
    return JSON.parse(localStorage[prop] || null);
  },
};
