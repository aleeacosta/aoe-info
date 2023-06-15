

import {getCivs} from "../../services/civs-api";
import Civs from "../../components/civs/Civs";
import { useState } from "react";

const CivsPage = () => {
  const civsResponse = getCivs();
  const title = "Civilizaciones"  
  
  const [civs, setCivs] = useState(civsResponse)

  const filterCivs = (civsResponse, filter) => {
    const filtrados = civsResponse.filter(f => f.especialidad.toLowerCase().includes(filter));
    setCivs(filtrados)
    return 
  };
  
   
  
  return (
    <div className="p-8 xl:px-12 2xl:px-40 bg-yellow-50">
      <h1 className="flex justify-center py-2 md:py-6 text-4xl font-bold text-neutral-900 drop-shadow-md">{title}</h1>   
        
      <button 
        className="" 
        onClick={() => filterCivs(civsResponse, "naval")}> 
        Naval
      </button>

      <button onClick={() => setCivs(civsResponse)}>Reset</button>
      <Civs civsResponse={civs} />
    </div>
  );
};

export default CivsPage;
