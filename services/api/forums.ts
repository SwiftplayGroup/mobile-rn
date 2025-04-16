import { api } from "./api";

//V2
export const getForums = async () => {
  const response = await api.get("/forums");
  return response.data;
};

//Here we need to write a function
//That passes a user id, fetches
//the users data, then throws that into the mongo
//vector store, so that it returns the top n
//recommended forums for the user.
