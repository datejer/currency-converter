import axios from "axios";

export const getRates = (base: string) => {
  return axios
    .get("https://open.er-api.com/v6/latest/" + base)
    .then((res) => res.data);
};
