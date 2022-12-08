import React from 'react';
import PropTypes from 'prop-types';
import styles from "./table.module.scss";

const tablePropTypes = {
  id: PropTypes.string,
  children: PropTypes.array.isRequired,
  customClass: PropTypes.string,
}
const tableDefaultProps = {
  id: "",
  customClass: "",
}

export const Table = ({
  id,
  children,
  customClass,
}) => {
  const rows = children.map(({title, text}) => {
    return (
      <tr key={title}>
        <th>{title}</th>
        <td>
          {text}
        </td>
      </tr>
    )
  });

  return (
    <table
      id={id}
      className={customClass ? styles.table + " " + customClass : styles.table}
    >
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

Table.propTypes = tablePropTypes;
Table.defaultProps = tableDefaultProps;

export default Table;