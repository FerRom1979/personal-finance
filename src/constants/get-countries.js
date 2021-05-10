import axios from "axios";

export const getCountries = async () => {
  try {
    const res = await axios.get("https://restcountries.eu/rest/v2/all");
    const countries = await res.data.map((list) => ({
      label: list.name || "label",
      value: list.name || "value",
    }));
    return countries;
  } catch (err) {
    console.log(err);
  }
};
