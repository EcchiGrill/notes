"use client";

import { NotePreviewProps } from "@/types";
import styles from "./note-preview.module.scss";
import { useParams, useRouter } from "next/navigation";

const NotePreview: React.FC<NotePreviewProps> = ({ id, title, date, tags }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/note/${id}`)}
      style={{ background: params.id === id ? "lightgray" : "" }}
    >
      <h4>{title}</h4>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <span>{date}</span>
    </div>
  );
};

export default NotePreview;
