import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";
import { Category } from "../category/category.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
