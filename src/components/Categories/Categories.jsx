import { Link } from "react-router-dom";
import { categories } from "../../db/db";
import "./Categories.css";

export const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-container">
        {categories.map(({ _id, thumbnail, category }) => (
          <Link
            to={`/categories/${category}`}
            className="category-card"
            key={_id}
          >
            <img src={thumbnail} alt="thumbnail" />
            <b>{category}</b>
          </Link>
        ))}
      </div>
    </div>
  );
};
