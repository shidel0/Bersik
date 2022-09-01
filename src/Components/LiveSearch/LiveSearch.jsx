import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./LiveSearch.css";

const LiveSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    setSearchParams({
      q: searchValue,
    });
  }, [searchValue]);
  return (
    <div>
      <div className="searchInput">
        <input
          type="text"
          className="input-search"
          placeholder="Search by name and description..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value || "")}
        />
      </div>
    </div>
  );
};

export default LiveSearch;
