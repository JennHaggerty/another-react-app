import React from 'react';
import PropTypes from 'prop-types';

const tablePropTypes = {
  children: PropTypes.array.isRequired,
  customClass: PropTypes.string,
}
const tableDefaultProps = {
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
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

Table.propTypes = tablePropTypes;
Table.defaultProps = tableDefaultProps;

export default Table;