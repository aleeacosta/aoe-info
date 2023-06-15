import { useState } from "react";
import { getCivs } from "../../services/civs-api";
import { TbBow, TbShieldFilled, TbSword, TbCrossFilled, TbSailboat2, TbComponents } from "react-icons/tb";
import { GiCatapult, GiHorseHead, GiCamel, GiElephant, GiGunshot } from "react-icons/gi"
import Civs from "../../components/civs/Civs";
import BtnFiltro from "../../components/civs/BtnFiltro";

const CivsPage = () => {
  const civsResponse = getCivs();
  const title = "Civilizaciones"  
  
  const [civs, setCivs] = useState(civsResponse)

  const filterCivs = (listadoCivs, criterio) => {
    const filtrados = listadoCivs.filter(f => f.especialidad.toLowerCase().includes(criterio));
    setCivs(filtrados)
    return 
  };   
  
  return (
    <>
      <div className='bg bg-yellow-50 py-10'>
        <h1 className="flex justify-center text-4xl md:text-5xl font-bold text-neutral-900 drop-shadow-md">{title}</h1>   
      </div>

      <div className="flex flex-col gap-4 justify-center items-center py-8 px-4 md:px-24 lg:px-32 2xl:px-64">
        <p className='font-bold'>Filtro Especialidad:</p>        
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <BtnFiltro icon={<TbComponents/>} texto='Todas' filtro={() => setCivs(civsResponse)}/>
          <BtnFiltro icon={<GiCatapult/>} texto='Asedio' filtro={() => filterCivs(civsResponse, "asedio")}/>
          <BtnFiltro icon={<TbBow/>} texto='Arqueros' filtro={() => filterCivs(civsResponse, "arqueros")}/> 
          <BtnFiltro icon={<GiHorseHead/>} texto='Caballería' filtro={() => filterCivs(civsResponse, "caballería")}/>
          <BtnFiltro icon={<GiCamel/>} texto='Camellos' filtro={() => filterCivs(civsResponse, "camellos")}/>
          <BtnFiltro icon={<TbShieldFilled/>} texto='Defensa' filtro={() => filterCivs(civsResponse, "defensa")}/>
          <BtnFiltro icon={<GiElephant/>} texto='Elefantes' filtro={() => filterCivs(civsResponse, "elefantes")}/>
          <BtnFiltro icon={<TbSword/>} texto='Infantería' filtro={() => filterCivs(civsResponse, "infantería")}/> 
          <BtnFiltro icon={<TbCrossFilled/>} texto='Monjes' filtro={() => filterCivs(civsResponse, "monjes")}/>
          <BtnFiltro icon={<TbSailboat2/>} texto='Naval' filtro={() => filterCivs(civsResponse, "naval")}/>   
          <BtnFiltro icon={<GiGunshot/>} texto='Pólvora' filtro={() => filterCivs(civsResponse, "pólvora")}/> 
        </div>       
      </div>
      <hr className="my-1"/>
      <Civs civsResponse={civs} />
    </>
  );
};

export default CivsPage;
