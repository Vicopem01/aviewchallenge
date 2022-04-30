import classes from "./card.module.css";
const Card = ({ src, text, message, setHover }) => {
  return (
    <div
      className={classes.main}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classes.sub}>
        <div>
          <img src={src} alt="calendar" />
          <h3>{text}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
