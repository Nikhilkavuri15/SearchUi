import axios from "axios";

const APILink = "https://api.beanbag.ai";
export const GetUserSearchKeyApi = async (keyword) => {
  try {
    let response = await axios.get(`${APILink}/keywordsearch/${keyword}`);
    return response.data;
  } catch (err) {
    throw new Error("Error while getting the user data from db " + err);
  }
};
