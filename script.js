import { fetchWrapper } from "./fetch.js";

(async () => {
  const { data, loading, error } = await fetchWrapper(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  toast(data?.title);
})();
