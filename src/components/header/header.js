import React from "react";
import styles from "./header.module.scss";

import { Navbar } from "../navbar/navbar";

export const Header = () => {
  return (
    <>
      <header className={styles.banner}>
      </header>
      <Navbar aria-hidden="true" />
    </>
  )
}