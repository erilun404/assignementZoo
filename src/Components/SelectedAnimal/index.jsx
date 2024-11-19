import { Link } from "react-router-dom";
import styles from "./SelectedAnimal.module.css";

const SelectedAnimal = ({ animal }) => {
  if (!animal) return null;

  return (
    <>
      <div className={styles.animalShort}>
        <div className={styles.animalImgContainer}>
          <img
            src={animal.image}
            alt={animal.name}
            className={styles["animal-image"]}
          />
        </div>
        <h4>{animal.name}</h4>
        <p>Group: {animal.group}</p>
        <p>{animal.description.slice(0, 200)}...</p>
        <Link to={`/${animal.group}`}>
          <button>Read more</button>
        </Link>
      </div>
    </>
  );
};
export default SelectedAnimal;
