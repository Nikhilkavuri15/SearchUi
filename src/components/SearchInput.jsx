import React, { useState } from "react";
import searchStyle from "../styles/searchStyle.module.css";
const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = async () => {
    try {
    } catch (err) {
      throw new Error("Error while getting the user data" + err);
    }
  };
  return (
    <div className="w-100 d-flex justify-content-evenly">
      <div class="input-group w-75">
        <input
          type="text"
          class="form-control"
          placeholder="Enter keyword"
          aria-label="Search User"
          aria-describedby="basic-addon2"
          onChange={(event) => handleInputChange(event)}
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            <i
              id={searchStyle.searchIcon}
              className="bi bi-search fs-9 mx-1 fw-bold"
            ></i>
          </span>
        </div>
      </div>
      <button
        onClick={() => handleSubmit()}
        id={searchStyle.searchbtn}
        className="btn btn-primary"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
