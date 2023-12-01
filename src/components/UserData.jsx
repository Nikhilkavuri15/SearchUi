import React, { useState } from "react";
import { useResultDataContext } from "../context/Resultdata";

const UserData = () => {
  const { jsonObjects } = useResultDataContext();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  console.log(jsonObjects);

  return (
    <div className="d-flex align-items-start flex-column w-100">
      <span className="fw-bold text-success mb-3">
        Total results:
        <span className="text-dark fw-semibold">
          {Object.keys(jsonObjects).length}
        </span>
      </span>
      {Object.keys(jsonObjects).map((key) => (
        <div
          key={key}
          className="accordion accordion-flush w-100 "
          id={`accordion${key}`}
        >
          <div className="accordion-item w-100 ">
            <h2 className="accordion-header">
              <button
              style={{fontWeight:"500"}}
                className={`accordion-button ${
                  activeAccordion === key ? "" : "collapsed"
                } bg-light rounded text-dark`}
                type="button"
                onClick={() => handleAccordionClick(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                activeAccordion === key ? "show" : ""
              }`}
              aria-labelledby={`accordion${key}`}
            >
              <div className="accordion-body">
                <div
                  className="w-100"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "10px",
                  }}
                >
                  {activeAccordion === key &&
                    jsonObjects[key].map((obj, index) => (
                      <div
                        key={index}
                        className="w-100"
                        style={{
                          border: "1px solid #ccc",
                          borderRadius: "10px",
                          padding: "15px",
                          margin: "10px 0",
                          overflowX: "scroll",
                          overflowY: "scroll",
                        }}
                      >
                        {Object.keys(obj).map((singleObjKey, objIndex) => (
                          <div key={objIndex}>
                            <strong>
                              {singleObjKey.charAt(0).toUpperCase() +
                                singleObjKey.slice(1)}
                              :{" "}
                            </strong>{" "}
                            <span style={{ fontSize: "1em" }}>
                              {obj[singleObjKey]}
                            </span>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserData;
