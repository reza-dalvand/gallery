export default function ConfigureAxios(axios, store) {
  axios.defaults.baseURL = "https://isback.imedstores.ir/";

  axios.interceptors.request.use(
    (config) => {
      const {
        loginReducer: { authToken },
      } = store.getState();
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
        config.headers.Accept = "application/json";
        // config.headers.ContentType = "application/json";
      } else {
        config.headers.Authorization = "Bearer null";
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
}
