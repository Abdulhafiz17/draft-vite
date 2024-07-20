export default {
  routerPrefix() {
    if (location.host == "abdulhafiz17.github.io") return "/draft-vite/";
    else return "";
  },
  storage(prop = "", value) {
    if (typeof value !== "undefined")
      localStorage[prop] = JSON.stringify(value);
    return JSON.parse(localStorage[prop] || null);
  },
};
