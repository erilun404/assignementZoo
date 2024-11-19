import { useState } from "react";
import styles from "./AnimalInfo.module.css";

const AnimalInfo = ({ fullInfo }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  function handleAnimalSelection(getCurrentName) {
    setSelectedAnimal(
      getCurrentName === selectedAnimal ? null : getCurrentName
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {fullInfo.map((animal, index) => {
          const animalClass = `${styles.animal} ${
            styles[animal.name.toLowerCase().replace(/\s+/g, "")]
          }`;

          return (
            <div
              onClick={() => handleAnimalSelection(animal.name)}
              key={index}
              className={animalClass}
            >
              <div className={styles.title}>
                <img
                  src={animal.image}
                  alt={animal.name}
                  className={styles["animal-image"]}
                />
                <h3>{animal.name}</h3>
                <span>+</span>
              </div>

              {selectedAnimal === animal.name && (
                <div>
                  <p>
                    <span>Lifespan:</span> {animal.lifespan}
                  </p>
                  <p>
                    <span>Length:</span> {animal.length}
                  </p>
                  <p>
                    <span>Weight:</span> {animal.weight}
                  </p>
                  <p>
                    <span>Where:</span> {animal.found}
                  </p>
                  <p>
                    <span>Food:</span> {animal.food}
                  </p>
                  <p>
                    <span>Description:</span> {animal.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimalInfo;