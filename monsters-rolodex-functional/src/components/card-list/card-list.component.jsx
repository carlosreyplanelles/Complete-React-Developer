import "./card-list.styles.css";
import Card from "../card/card.component";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { id } = monster;
      return (
        <Card
          monster={monster}
          imgSrc={`https://www.robohash.org/${id}?set=set2&size=180x180`}
        />
      );
    })}
  </div>
);
export default CardList;