"use client";
import { PacmanLoader } from "react-spinners";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <PacmanLoader size={40} speedMultiplier={2} color="#325cfe" />
    </div>
  );
};

export default Loader;
