import TecUniCard from "./TecUniCard"


const TecUniSection = ({ data }) => {

    const { castillos, castillos_info, imperial, imperial_info} = data;

    return (
    <>
        <h2 className='text-xl font-bold mt-6 mb-2'>Tecnologias unicas</h2> 
        <div className='flex flex-col md:flex-row gap-4 mt-4'>
            <TecUniCard title='Castillos' name={castillos} info={castillos_info} icono='unique_tech_silver.png'/>
            <TecUniCard title='Imperial' name={imperial} info={imperial_info} icono='unique_tech_gold.png'/>
        </div>
    </>
    )
}

export default TecUniSection