import React from 'react'
import classes from "./Category.module.css"
function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="#">
        <span>
          <h3>{data.title}</h3>
        </span>
        <img src={data.image} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard