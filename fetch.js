export const fetchWrapper = async (url, options = {}) => {
  const result = {
    data: null,
    loading: true,
    error: null,
  };

  try {
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    result.data = await response.json();
  } catch (err) {
    result.error = err.message;
  } finally {
    result.loading = false;
  }

  return result;
};
