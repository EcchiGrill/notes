export interface NotePreviewProps {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

export type NoteType = {
  id: string;
  tags: string;
  title: string;
  content: string;
  date: string;
};

export interface NoteProps {
  id: number;
}
