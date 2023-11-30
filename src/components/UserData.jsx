import React, { useState } from "react";

const UserData = () => {
  const [jsonObjects, setJsonObjects] = useState([
    {
      id: 1,
      name: "Alice",
      age: 25,
      city: "New York",
      country: "USA",
      occupation: "Engineer",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      city: "London",
      country: "UK",
      occupation: "Designer",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      city: "Berlin",
      country: "Germany",
      occupation: "Developer",
      status: "Active",
    },
    {
      id: 4,
      name: "David",
      age: 27,
      city: "Paris",
      country: "France",
      occupation: "Manager",
      status: "Active",
    },
    {
      id: 5,
      name: "Eva",
      age: 29,
      city: "Tokyo",
      country: "Japan",
      occupation: "Scientist",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Frank",
      age: 26,
      city: "Sydney",
      country: "Australia",
      occupation: "Artist",
      status: "Active",
    },
    {
      id: 7,
      name: "Grace",
      age: 31,
      city: "Toronto",
      country: "Canada",
      occupation: "Writer",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Hannah",
      age: 33,
      city: "Oslo",
      country: "Norway",
      occupation: "Consultant",
      status: "Active",
    },
    {
      id: 9,
      name: "Ian",
      age: 35,
      city: "Stockholm",
      country: "Sweden",
      occupation: "Entrepreneur",
      status: "Active",
    },
    {
      id: 10,
      name: "Julia",
      age: 27,
      city: "Rome",
      country: "Italy",
      occupation: "Architect",
      status: "Inactive",
    },
  ]);
  return (
    <div
    className="w-75"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {jsonObjects.map((object, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          {Object.keys(object).map((key) => (
            <div key={key}>
              <strong>{key}:</strong> {object[key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserData;
