import axios from "axios";

export const customAxios = async (endpoint, options) => {
  const defaultHeader = {
    accept: "application/json",
  };

  const controller = new AbortController();
  options.signal = controller.signal;

  options.method = options.method || "GET";
  options.headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;

  options.body = JSON.stringify(options.body) || false;
  if (!options.body) delete options.body;

  setTimeout(() => controller.abort(), 4000);

  try {
    const res = await axios(endpoint, options);
    return res.data;
  } catch (error) {
    return console.log(error);
  }
  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  return {
    get,
    post,
    put,
    del,
  };
};