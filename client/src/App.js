import React, { useState, useEffect, useMemo } from "react";
// Components
import { TableItem, Loader, TableHead, TableFoot, Header } from "./components";
// Utils
import { keys } from "./constants";
import { compare } from "./utils";
// Styles
import "./App.css";
import { getDataAPI } from "./api";

function App() {
  const [searchData, setSearchData] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("View All");
  const [carData, setCarData] = useState([]);
  const [carsBuffer, setCarsBuffer] = useState([]);
  const [currentRow, setCurrentRow] = useState(true);
  const [activeSortType, setActiveSortType] = useState("CreatedOn");
  const [isLoading, setIsLoading] = useState(false);

  const [currentItems, setCurrentItems] = useState([]);

  const getCarData = async () => {
    const APIData = await getDataAPI() || [];
    setCarsBuffer(APIData);

    const sortedData = APIData
      .sort((a, b) => a.WMI?.localeCompare(b.WMI))
      .sort((a, b) => a.CreatedOn?.localeCompare(b.CreatedOn));
    setCarData(sortedData);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    getCarData();
  }, []);

  const countries = useMemo(() => {
    const uniqueCountries = new Set(carsBuffer?.map((d) => d.Country) || []);
    uniqueCountries.delete(null);
    uniqueCountries.add("View All");
    return Array.from(uniqueCountries).sort();
  }, [carsBuffer]);

  useEffect(() => {
    const searchRegex = new RegExp(searchData, "i");

    const filteredBySearch = carsBuffer.filter((item) => {
      if (!keys.some((key) => searchRegex.test(item[key]?.toString())))
        return false;
      return true;
    });

    const filteredByCountry = filteredBySearch.filter((item) => {
      if (item.Country === selectedCountry && selectedCountry !== "View All")
        return true;
      if (selectedCountry === "View All") return true;
      return false;
    });
    setCarData(filteredByCountry);
  }, [searchData, selectedCountry]);

  const handleChange = (e) => {
    const currentData = e.target.value;
    setSearchData(currentData);
  };

  const handleSortData = (columnName) => {
    setActiveSortType(columnName);
    setCurrentRow(!currentRow);
    const d = carData.sort((a, b) => {
      if (!currentRow) {
        return compare(a[columnName], b[columnName]);
      } else {
        return compare(b[columnName], a[columnName]);
      }
    });
    setCarData(d);
  };

  const handleChangeCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="App">
      <Header
        carData={carsBuffer}
        searchData={searchData}
        carDataSize={carData.length}
        handleChangeCountry={handleChangeCountry}
        handleChange={handleChange}
        countries={countries}
      />
      <table>
        <TableHead
          activeSortType={activeSortType}
          handleSortData={handleSortData}
          currentRow={currentRow}
        />
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5}>
                <Loader />
              </td>
            </tr>
          ) : (
            <TableItem carData={currentItems} />
          )}
        </tbody>
        <TableFoot
          carData={carData}
          currentRow={currentRow}
          setCurrentItems={setCurrentItems}
          currentItems={currentItems}
        />
      </table>
    </div>
  );
}

export default App;
