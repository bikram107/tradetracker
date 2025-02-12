import React, { useContext } from "react";
import "./SearchBar.css";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StockContext } from "../../StockContext";

const SearchBar = () => {
  const {
    soldStockDetails,
    searchItem,
    setSearchItem,
    searchDetails,
    setSearchDetails,
  } = useContext(StockContext);

  function handleSearchButton(event) {
    event.preventDefault();
    console.log("sold stocks", soldStockDetails);
    const output = soldStockDetails.filter(
      (item) => item.symbol === searchItem
    );
    console.log("search details", output);
    setSearchDetails(output);
    setSearchItem("");
  }

  function handleSearchInput(event) {
    setSearchItem(event.target.value.toUpperCase());
    clearSearchDetails();
  }
  console.log("search item", searchItem);

  function clearSearchDetails() {
    setSearchDetails([]);
  }
  return (
    <div className="searchBar">
      <div className="container">
        <form>
          <input
            type="text"
            onChange={handleSearchInput}
            placeholder="Search..."
            value={searchItem}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            onClick={handleSearchButton}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
