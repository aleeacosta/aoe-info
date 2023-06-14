

import {getCivs} from "../../services/civs-api";
import Civs from "../../components/civs/Civs";

const CivsPage = () => {
  const civsResponse = getCivs();
  console.log(civsResponse);

  const title = "Civilizaciones"
  const subtitle = "Informacion sobre las Civilizaciones"
  
  return (
    <div className="p-8 bg-yellow-50">
      {/* <h1 className="flex justify-center">{title}</h1>
      <p className="flex justify-center pb-8">{subtitle}</p> */}
      
      <Civs civsResponse={civsResponse} />
    </div>
  );
};

export default CivsPage;
