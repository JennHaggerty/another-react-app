import React from "react";
import Table from "../../shared/table";

export const InterestsBox = ({
  title,
  children,
  customClass
}) => {
  return (
    <div id="interests" className={customClass ? customClass : ""}>
      <h2>
        {title}'s Interests
      </h2>
      <Table children={children} />
    </div>
  )
}