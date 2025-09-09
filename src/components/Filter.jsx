import { useState } from "react";

export const Filter = ({ setFilter }) => {
  const filterOptions = ["All", "Completed", "Active"];
  const [activeFilter, setActiveFilter] = useState("All"); 

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
            border: "0.5px solid gray",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};