import { useState } from "react";

export const Filter = ({ setFilter }) => {
  const filterOptions = ["all", "completed", "active"];
  const [activeFilter, setActiveFilter] = useState("all"); 

  const handleClick = (filter) => {
    setFilter(filter);         
    setActiveFilter(filter);     
  };

  return (
    <div style={{ display: "flex", gap: "20px"}}>
      {filterOptions.map((filter, index) => (
        <button
          key={index}
          onClick={() => handleClick(filter)}
          style={{
            backgroundColor: activeFilter === filter ? "rgba(60, 130, 246, 1)" : "white",
            color: activeFilter === filter ? "white" : "black",
            border: "1px solid gray",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
            {filter.charAt(0).toUpperCase().slice(0)}
          {filter}
        </button>
      ))}
    </div>
  );
};