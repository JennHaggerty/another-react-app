import React from "react";
import Table from "../../shared/table";
import styles from "./schools.module.scss";

export const SchoolsBox = ({
  title,
  children,
  customClass
}) => {
  return (
    <div className={customClass ? customClass + " " + styles.school_box : styles.school_box}>
      <h2>
        {title}'s Schools
      </h2>
      <Table children={children} />
    </div>
  )
}