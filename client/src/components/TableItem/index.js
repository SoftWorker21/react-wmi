import React from "react";
import PropTypes from "prop-types";
// Constants
import { keys } from "../../constants";

export const TableItem = ({ carData }) => {
  return carData.map((d) => {
    const wmi = d.WMI;
    return (
      <tr key={wmi}>
        {keys.map((k) => (
          <td key={`${wmi}-${k}`}>{d[k]}</td>
        ))}
      </tr>
    );
  });
};

TableItem.propTypes = {
  carData: PropTypes.array,
};
