export default {
  storage(prop = "", value) {
    if (typeof value !== "undefined")
      localStorage[prop] = JSON.stringify(value);
    return JSON.parse(localStorage[prop] || null);
  },
};
