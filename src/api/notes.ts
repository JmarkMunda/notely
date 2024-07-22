import axiosInstance from "../config/axios";

export const getAllNotes = async () => {
  try {
    const res = await axiosInstance.get("/notes");
    const { data } = await res.data;
    return data;
  } catch (error) {
    console.log("Error getAllNotes: ", error);
  }
};
