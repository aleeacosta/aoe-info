

const UnidUniCard = ( { uu } ) => {

    return (
    <>
        <section className='py-8 px-5 md:px-24 lg:px-32 2xl:px-64 text-neutral-900 mb-10'>
            <h2 className='text-xl font-bold mb-4'>Unidades unicas</h2>
            <div className='flex flex-col md:flex-row gap-4'>
                {uu.map((uu) => {
                    return (
                        <div key={uu.nombre} className='p-4 w-full md:w-48 border shadow-xl rounded-xl flex md:flex-col gap-4 md:gap-0'>
                            <img
                                className='rounded-md w-28 md:w-auto'  
                                src={`./../iconosAoe/${uu.icono}`} 
                                alt={uu.nombre}
                            />
                            <div className='flex flex-col flex-grow'>
                                <h3 className='mt-0 md:mt-2 font-bold'>{uu.nombre}</h3>
                                <p className='text-sm'>{uu.especialidad}</p>
                                <hr className="my-2"/>                                  
                                <div className="text-sm mt-1">
                                    <p className='font-bold text-green-600'>Mejora</p>
                                    <p className=''>{uu.mejora}</p>           
                                </div>
                            </div>           
                        </div>
                    )
                })}          
            </div>
        </section>
    </>
    )
}

export default UnidUniCard