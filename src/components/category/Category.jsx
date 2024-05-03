import React from 'react'
import { categoryInfo } from './CategoryFullNfos'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'
function Category() {
  return (
    <div>
      <section className={classes.category_container}>
              {categoryInfo.map((item, index) => (
          <CategoryCard key={index} data={item} />
        ))}
      </section>
    </div>
  );
}

export default Category