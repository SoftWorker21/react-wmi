import React from "react";
import PropTypes from "prop-types";
// Constants
import { keys } from "../../constants";
// Style
import "./TableHead.css";

export const TableHead = ({ activeSortType, handleSortData, currentRow }) => {
  return (
    <thead>
      <tr>
        {keys.map((k) => (
          <th onClick={() => handleSortData(k)} key={k} className={k}>
            <div className="row-title">
              <p className="row-title--text">{k}</p>
              {activeSortType === k && !currentRow ? (
                <p
                  className={
                    activeSortType === k ? "active-arrow up-arrow" : "up-arrow"
                  }
                >
                  &#8963;
                </p>
              ) : (
                <p
                  className={
                    activeSortType === k
                      ? "active-arrow down-arrow"
                      : "down-arrow"
                  }
                >
                  &#8963;
                </p>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  activeSortType: PropTypes.string,
  handleSortData: PropTypes.func,
  currentRow: PropTypes.bool,
};
