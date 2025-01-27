"use client";

import Link from "next/link";
import { FaArchive, FaFeather, FaHome, FaTag } from "react-icons/fa";
import styles from "./sidebar.module.scss";
import { usePathname } from "next/navigation";

const PAGES = [
  {
    name: "All Notes",
    path: "/",
    icon: FaHome,
    isActive: ["", "note"],
  },
  {
    name: "Archived Notes",
    path: "/archived",
    icon: FaArchive,
    isActive: ["archived"],
  },
];

const TAGS = [
  "Cooking",
  "Dev",
  "Fitness",
  "Health",
  "Personal",
  "React",
  "Recipes",
  "Travel",
];

function Sidebar() {
  const path = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <FaFeather size={35} />
        <h1>Notes</h1>
      </div>
      <div className={styles.container}>
        <nav className={styles.menu}>
          {PAGES.map((page) => (
            <Link
              href={page.path}
              key={page.path}
              style={{
                background: page.isActive.includes(path.slice(1).split("/")[0])
                  ? "lightgray"
                  : "",
              }}
            >
              <page.icon />
              {page.name}
            </Link>
          ))}
        </nav>
        <div className={styles.tags}>
          <h3>Tags</h3>
          <ul>
            {TAGS.map((t) => (
              <Link href={"#"} key={t}>
                <FaTag />
                {t}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
