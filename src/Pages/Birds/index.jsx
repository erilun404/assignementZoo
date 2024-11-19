import { Birds } from "../../Data/data";
import AnimalInfo from "../../Components/AnimalInfo";

const Bird = () => {
  return (
    <>
      <div>
        <h2>List of birds</h2>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nam
          eos quos. Doloribus totam, id officia nostrum accusantium, ad beatae
          cumque assumenda ipsum illo molestiae temporibus minima sunt,
          exercitationem est.
        </div>
        <AnimalInfo fullInfo={Birds} />
      </div>
    </>
  );
};

export default Bird;
