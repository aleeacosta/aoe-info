

const TecUniCard = ( { title, name, info, icono } ) => {
  return (
    <>                          
        <div className='flex flex-col item h-fit w-full md:w-96 gap-2 p-4 border shadow-xl rounded-xl'>
            <h2 className='font-bold text-lg line leading-none'>{title}</h2>
            <hr className="my-1"/>  
            <div className='flex flex-row gap-3'>
                <img
                className='rounded-md w-16 h-16'  
                src={`./../iconosAoe/${icono}`} 
                alt='castillostech'
                />
                <div className='flex flex-col items-start'>
                <h3 className='font-bold leading-none mb-1'>{name}</h3>
                <p className='text-sm'>{info}</p> 
                </div> 
            </div>                     
        </div>
    </>
  )
}

export default TecUniCard