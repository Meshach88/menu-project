import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <main>
      <div className="btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            filterItems("all");
          }}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filterItems("breakfast");
          }}
        >
          breakfast
        </button>
      </div>
    </main>
  );
};

export default Categories;
