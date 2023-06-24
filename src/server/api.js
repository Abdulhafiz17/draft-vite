import server from "./server";

const query = {
  id: 0,
  page: 0,
  per_page: 0,
};

export default {
  users(param = query) {
    return server(`users?page=${param.page}&per_page=${param.per_page}`);
  },
};
