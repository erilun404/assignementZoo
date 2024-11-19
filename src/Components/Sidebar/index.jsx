import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ animals, currentAnimal, setAnimal }) => {
  const handleAnimalClick = (animal) => {
    setAnimal(currentAnimal?.name === animal.name ? null : animal);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.animalList}>
          <ul>
            {animals.map((animal) => (
              <li
                key={animal.name}
                onClick={() => handleAnimalClick(animal)}
                className={`${styles["sidebar-item"]} ${
                  currentAnimal?.name === animal.name ? styles.active : ""
                }`}
              >
                {animal.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );

  // <aside className={styles.sidebar}>
  //   <h3>Animals</h3>
  //   <ul>
  //     {animals.map((animal) => (
  //       <li
  //         key={animal.name}
  //         onClick={() => handleAnimalClick(animal)}
  //         className={`${styles["sidebar-item"]} ${
  //           currentAnimal?.name === animal.name ? styles.active : ""
  //         }`
  //       }
  //       >
  //         {animal.name}
  //       </li>
  //     ))}
  //   </ul>

  //   {currentAnimal && (
  //     <div className={styles.animalShort}>
  //       <div className={styles.animaliImgContainer}>
  //         <img
  //           src={currentAnimal.image}
  //           alt={currentAnimal.name}
  //           className={styles["animal-image"]}
  //         />
  //       </div>
  //       <h4>{currentAnimal.name}</h4>
  //       <p>Group: {currentAnimal.group}</p>
  //       <p>{currentAnimal.description.slice(0, 200)}...</p>

  //       {/* Länka till rätt gruppsida */}
  //       <Link to={`/${currentAnimal.group}`}>
  //         <button>Read More</button>
  //       </Link>
  //     </div>
  //   )}
  // </aside>
  //);
};

export default Sidebar;
