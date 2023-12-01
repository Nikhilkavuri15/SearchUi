import React, { useState } from "react";
import searchStyle from "../styles/searchStyle.module.css";
import { GetUserSearchKeyApi } from "../apicalls/apicall";
import { useResultDataContext } from "../context/Resultdata";
const SearchInput = () => {
  const { setJsonObjects, setShowLoading } = useResultDataContext();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = async () => {
    try {
      setShowLoading(true);
      setJsonObjects([])
      let data = await GetUserSearchKeyApi(inputValue);
      if (data) {
        setShowLoading(false);
        setJsonObjects(data);
      }
    } catch (err) {
      setShowLoading(false);
      throw new Error("Error while getting the user data" + err);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-100 d-flex justify-content-evenly">
      <div className="input-group w-75">
        <input
          type="text"
          className="form-control"
          placeholder="Enter keyword"
          aria-label="Search User"
          aria-describedby="basic-addon2"
          onChange={(event) => handleInputChange(event)}
          onKeyDown={(event) => handleKeyPress(event)} 
        />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
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
