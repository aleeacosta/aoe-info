import { getCiv } from '../../services/civs-api';
import { useParams } from 'react-router-dom'
import TecUniCard from './TecUniCard';
import UnidUniCard from './UnidUniCard';
import BonusSection from './BonusSection';
import HeaderCiv from './HeaderCiv';

const UserDetail = () => {

    const { civilizacion } = useParams()    
    const civ = getCiv( civilizacion ); 
    const { bonus_civ:bc, bonus_eq:be, tecno_unica:tu, unidad_unica:uu } = civ    

  return (
    <>      
      <HeaderCiv icono={civ.icono} nombre={civ.civ} espe={civ.espe} />
      <section className='py-8 px-5 md:px-24 lg:px-32 2xl:px-64 text-neutral-900'>
        <BonusSection bc={bc} be={be}/>
        <h2 className='text-xl font-bold mt-6 mb-2'>Tecnologias unicas</h2> 
        <div className='flex flex-col md:flex-row gap-4 mt-4'>
          <TecUniCard title='Castillos' name={tu.castillos} info={tu.castillos_info} icono='unique_tech_silver.png'/>
          <TecUniCard title='Imperial' name={tu.imperial} info={tu.imperial_info} icono='unique_tech_gold.png'/>
        </div>
      </section>

      <hr className=""/>  
      
      <UnidUniCard uu={uu}/> 
    </>
  )
}

export default UserDetail