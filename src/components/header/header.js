import React from "react";
import styles from "./header.module.scss";

import { Navbar } from "../navbar/navbar";

export const Header = () => {
  return (
    <>
      <header className={styles.banner} aria-hidden="true">
      </header>
      <Navbar />
    </>
  )
}