import "./directory-item.styles";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
