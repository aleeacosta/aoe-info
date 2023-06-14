

import {getCivs} from "../../services/civs-api";
import Civs from "../../components/civs/Civs";

const CivsPage = () => {
  const civsResponse = getCivs();
  const title = "Civilizaciones" 
  
  return (
    <div className="p-8 xl:px-12 2xl:px-40 bg-yellow-50">
      <h1 className="flex justify-center py-2 md:py-6 text-4xl font-bold text-neutral-900">{title}</h1>     
      <Civs civsResponse={civsResponse} />
    </div>
  );
};

export default CivsPage;
