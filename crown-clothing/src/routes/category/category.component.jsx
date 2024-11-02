import { useContext, useState, useEffect, Fragment } from "react";
import "./category.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../../components/product-card/product-card.component";
import { useParams } from "react-router-dom";

export function Category() {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h1>{category.toUpperCase()}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
}
