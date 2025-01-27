import Sidebar from "@/components/ui/sidebar/sidebar";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <main className={styles.main}>Archived</main>
    </div>
  );
}
