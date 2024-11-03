import DirectoryItem from "../directory-item/directory-item.component";
import { CategoriesContainer } from "./categories-directory.styles";

const CategoriesDirectory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </CategoriesContainer>
  );
};

export default CategoriesDirectory;
