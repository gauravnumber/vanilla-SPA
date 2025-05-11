import { fetchWrapper } from "./fetch.js  ";

(async () => {
  const { data, loading, error } = await fetchWrapper(
    "https://jsonplaceholder.typicode.com/todos/1ll"
  );

  toast(data?.title);
  console.log(loading, error);
})();
