import axiosInstance from "../config/axios";
import { NoteType } from "../utils/types";

export const getAllNotes = async () => {
  try {
    const res = await axiosInstance.get("/notes");
    const { data } = await res.data;
    return data;
  } catch (error) {
    console.log("Error getAllNotes: ", error);
  }
};

export const addNote = async (
  formData: Pick<NoteType, "title" | "description" | "user_id">
) => {
  try {
    const res = await axiosInstance.post("/notes/add", formData);
    const data = await res.data;
    return data;
  } catch (error: any) {
    console.log("Error adding a note: ", error);
    return error.response.data;
  }
};

export const editNote = async (
  id: string,
  formData: Pick<NoteType, "title" | "description" | "user_id">
) => {
  try {
    const res = await axiosInstance.patch(`/notes/${id}`, formData);
    const data = await res.data;
    return data;
  } catch (error: any) {
    console.log("Error editing a note: ", error);
    return error.response.data;
  }
};

export const deleteNote = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/notes/${id}`);
    const data = await res.data;
    console.log("Returned from delete request: ", data);
    return data;
  } catch (error: any) {
    console.log("Error deleting a note: ", error);
    return error.response.data;
  }
};
