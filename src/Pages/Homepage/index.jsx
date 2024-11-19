import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import SelectedAnimal from "../../Components/SelectedAnimal";
import { combinedAnimals } from "../../Data/data";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [selectedShortAnimal, setSelectedShortAnimal] = useState(null);
  return (
    <div className={styles.home}>
      <Sidebar
        animals={combinedAnimals}
        currentAnimal={selectedShortAnimal}
        setAnimal={setSelectedShortAnimal}
      />
      <div className={styles.animal}>
        {selectedShortAnimal ? (
          <SelectedAnimal animal={selectedShortAnimal} />
        ) : (
          <p>Select an animal to see details here.</p>
        )}
      </div>
      {/* <main className={styles.mainContent}>
        {!selectedShortAnimal && (
          <p>
            Welcome to the Australia Zoo! Click on an animal in the sidebar to
            learn more.
          </p>
        )}
      </main> */}
    </div>
  );
  // return (
  //   <div className={styles.home}>
  //     <Sidebar
  //       animals={combinedAnimals}
  //       currentAnimal={selectedShortAnimal}
  //       setAnimal={setSelectedShortAnimal}
  //     />
  //     <div className={styles.animal}>
  //     <SelectedAnimal animal={selectedShortAnimal} />
  //     </div>
      
  //     <main className={styles.mainContent}>
  //       {!selectedShortAnimal && (
  //         <p>
  //           Welcome to the Australia Zoo! Click on an animal in the sidebar to
  //           learn more.
  //         </p>
  //       )}
  //     </main>
  //   </div>
  // );
};

export default HomePage;
