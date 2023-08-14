import React from "react";
import styles from "./network.module.scss";

export const NetworkBox = ({
  title,
  customClass
}) => {
  return (
    <div id="network" className={customClass ? styles.network + " " + customClass : styles.network}>
      <span className={styles.h1}>{title} is in your virtual network</span>
    </div>
  )
}