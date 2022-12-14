import React from "react";
import Table from "../../shared/table";
import styles from "./companies.module.scss";

export const CompaniesBox = ({
  title,
  children,
  customClass
}) => {
  return (
    <div className={customClass ? customClass + " " + styles.company_box : styles.company_box}>
      <h2>
        {title}'s Companies
      </h2>
      <Table children={children} />
    </div>
  )
}