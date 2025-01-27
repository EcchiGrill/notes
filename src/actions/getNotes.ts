import { NoteType } from "@/types";

const getNotes = async (id?: number) => {
  const response = await fetch(
    `https://6796a2c3bedc5d43a6c5c377.mockapi.io/api/notes/${id || ""}`
  );
  const data: NoteType[] & NoteType = await response.json();

  return data;
};

export default getNotes;
