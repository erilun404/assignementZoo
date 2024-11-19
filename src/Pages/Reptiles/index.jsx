import { Reptiles } from "../../Data/data";
import AnimalInfo from "../../Components/AnimalInfo";

const Reptile = () => {
  return (
    <>
      <div>
        <h2>List of reptiles</h2>

        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nam
          eos quos. Doloribus totam, id officia nostrum accusantium, ad beatae
          cumque assumenda ipsum illo molestiae temporibus minima sunt,
          exercitationem est.
        </div>
        <AnimalInfo fullInfo={Reptiles} />
      </div>
    </>
  );
};

export default Reptile;
