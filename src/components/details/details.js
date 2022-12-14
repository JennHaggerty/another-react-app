import React from "react";
import Table from "../../shared/table";

export const DetailsBox = ({
  title,
  children,
  customClass
}) => {
  return (
    <div id="details_box" className={customClass ? customClass : ""}>
      <h2>
        {title}'s Details
      </h2>
      <Table children={children} />
    </div>
  )
}