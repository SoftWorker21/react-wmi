import React from "react";
import PropTypes from "prop-types";
// Styles
import "./Header.css";

export const Header = ({
  carData = [],
  searchData,
  carDataSize,
  handleChangeCountry,
  handleChange,
  countries,
}) => {
  return (
    <header>
      <h2>WMI Data - Honda | Total: {carData.length}</h2>
      <div className="filter-box">
        {searchData !== "" && <p>{carDataSize} items</p>}
        <input
          type="text"
          value={searchData}
          onChange={handleChange}
          placeholder="What you looking for?"
        />
        <select
          data-testid="select"
          onChange={handleChangeCountry}
          name="cars"
          id="cars"
        >
          {countries?.map((item) => (
            <option selected={item === "View All"} key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

Header.propTypes = {
  carData: PropTypes.array,
  searchData: PropTypes.string,
  carDataSize: PropTypes.number,
  handleChangeCountry: PropTypes.func,
  handleChange: PropTypes.func,
  countries: PropTypes.array,
};
