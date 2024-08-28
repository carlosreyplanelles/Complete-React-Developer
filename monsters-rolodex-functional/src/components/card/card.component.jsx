import "./card.styles.css";

const Card = ({ imgSrc, monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img alt={`monster ${name}`} src={imgSrc} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
