import { FaMagnifyingGlass, FaPlus, FaTrash } from "react-icons/fa6";
import styles from "../page.module.scss";
import Sidebar from "@/components/sidebar/sidebar";
import { FcSettings } from "react-icons/fc";
import Button from "@/components/ui/button/button";
import NotePreview from "@/components/note-preview/note-preview";
import { NoteType } from "@/types";
import Note from "@/components/note/note";
import { Suspense } from "react";
import { FaArchive } from "react-icons/fa";

export default async function OpenedNote({
  params,
}: {
  params: { id: number };
}) {
  const { id } = await params;
  const response = await fetch(
    `https://6796a2c3bedc5d43a6c5c377.mockapi.io/api/notes/`
  );
  const data: NoteType[] = await response.json();

  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>All Notes</h1>
          <div className={styles.tools}>
            <div className={styles.search}>
              <FaMagnifyingGlass className={styles.icon} />
              <input
                type="text"
                placeholder="Search by title, content, or tags..."
              />
            </div>
            <FcSettings className={styles.settings} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.notes}>
            <Button>
              <FaPlus /> Create New Note
            </Button>
            {data.map((note) => (
              <NotePreview
                key={note.id}
                id={note.id}
                title={note.title}
                date={new Date(note.date).toLocaleDateString()}
                tags={note.tags.split(" ")}
              />
            ))}
          </div>
          <Suspense fallback={<h2 className={styles.loading}>Loading...</h2>}>
            <Note id={id} />
          </Suspense>
          <div className={styles.actions}>
            <Button>
              <FaArchive /> Archive Note
            </Button>
            <Button>
              <FaTrash /> Delete Note
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
