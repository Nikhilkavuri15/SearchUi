import React from "react";
import { useResultDataContext } from "../context/Resultdata";
const UserData = () => {
  const { jsonObjects } = useResultDataContext();
  return (
    <div className="d-flex align-items-start flex-column">
      <span className="fw-bold text-success">Total results: <span className="text-dark fw-semibold">{jsonObjects.length}</span></span>
      <div
        className="w-100"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {jsonObjects.length > 0 &&
          jsonObjects?.map((object, index) => (
            <div
              key={index}
              className="w-100"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px 0",
                overflowX: "scroll",
              }}
            >
              {Object.keys(object).map((key) => (
                <div key={key}>
                  <strong>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                  </strong>{" "}
                  <span style={{ fontSize: "1em" }}>{`  ${object[key]}`}</span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserData;
