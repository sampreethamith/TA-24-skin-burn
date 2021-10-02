import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { ProgressBar, Button } from "react-bootstrap";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageClick, currentPage } = props;

  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return (
    <>
      <ProgressBar
        variant="warning"
        animated
        now={(currentPage / itemCount) * 100}
      />
      <nav className="pagination-inline">
        <Button
          disabled={currentPage === 1}
          variant="outline-warning"
          className="pagination"
          onClick={() => onPageClick(currentPage === 1 ? 1 : currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline-warning"
          className="pagination"
          onClick={() =>
            onPageClick(
              currentPage === pages.length ? pages.length : currentPage + 1
            )
          }
        >
          {currentPage === itemCount ? "Finish" : "Next"}
        </Button>
      </nav>
    </>
  );
};

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };

export default Pagination;
