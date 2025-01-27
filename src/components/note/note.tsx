import { NoteProps, NoteType } from "@/types";
import styles from "./note.module.scss";
import { FaClockRotateLeft, FaTag } from "react-icons/fa6";
import Button from "../ui/button/button";

const Note: React.FC<NoteProps> = async ({ id }) => {
  const response = await fetch(
    `https://6796a2c3bedc5d43a6c5c377.mockapi.io/api/notes/${id}`
  );

  const data: NoteType = await response.json();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{data.title}</h1>
        <div className={styles.header}>
          <div className={styles.tags}>
            <div>
              <FaTag />
              {"Tags"}
            </div>
            <span>{data.tags.split("")}</span>
          </div>
          <div className={styles.date}>
            <div>
              <FaClockRotateLeft />
              {"Last edited"}
            </div>
            <span>{new Date(data.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className={styles.content}>{data.content}</div>
      </div>

      <div className={styles.tools}>
        <Button className={styles.save}>Save Note</Button>
        <Button>Cancel</Button>
      </div>
    </main>
  );
};

export default Note;
