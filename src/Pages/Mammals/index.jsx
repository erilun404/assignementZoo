import { Mammals } from "../../Data/data.js";
import AnimalInfo from "../../Components/AnimalInfo/index.jsx";

const Mammal = () => {
  console.log(Mammals);
  return (
    <>
      <div>
        <h2>List of mammals</h2>

        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nam
          eos quos. Doloribus totam, id officia nostrum accusantium, ad beatae
          cumque assumenda ipsum illo molestiae temporibus minima sunt,
          exercitationem est.
        </div>
        <AnimalInfo fullInfo={Mammals} />
      </div>
    </>
  );
};
export default Mammal;
