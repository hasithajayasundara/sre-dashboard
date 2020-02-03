import axios from "axios";

export default {
  dashboard: {
    getPosts: () =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.data)
  }
};
