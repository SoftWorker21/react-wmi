import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
// Constants
import { offsetItems, pageRangeDisplayed } from "../../constants";
// Style
import "./TableFoot.css";

const TableFoot = ({
  carData = [],
  currentRow,
  setCurrentItems,
  currentItems,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * offsetItems) % carData.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + offsetItems;
    setCurrentItems(carData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carData.length / offsetItems));
  }, [itemOffset, carData, currentRow, setCurrentItems]);

  return (
    <tfoot>
      <tr>
        <td colSpan={5}>
          <div className="table-footer">
            <p>
              Displaing {currentItems.length} out of {carData.length}
            </p>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={pageRangeDisplayed}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={0}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

TableFoot.propTypes = {
  carData: PropTypes.array,
  currentRow: PropTypes.bool,
  setCurrentItems: PropTypes.func,
  currentItems: PropTypes.array,
};

export default React.memo(TableFoot);
