import React from 'react';
import PropTypes from 'prop-types';

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
}) => {
  const rows = children.map(({title, text}, i) => {
    return (
      <tr key={title + "-" + i}>
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