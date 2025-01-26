import React from "react";

const CategorySection = () => (
  <div className="container mt-5">
    <h1 className="select_cat">Select Category you want to learn</h1>

    {/* Category Blocks */}
    <div className="row mb-4 text-center">
      <div className="col-md-4">
        <div className="category-block" id="science-block">
          <h4>Science</h4>
        </div>
      </div>
      <div className="col-md-4">
        <div className="category-block" id="arts-crafts-block">
          <h4>Arts & Crafts</h4>
        </div>
      </div>
      <div className="col-md-4">
        <div className="category-block" id="communication-block">
          <h4>Communication</h4>
        </div>
      </div>
    </div>
  </div>
);

export default CategorySection;
