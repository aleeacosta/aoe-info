import CivCard from "./CivCard"

const Civs = ({civsResponse}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center p-6" >
      {
        civsResponse.map( civ => {
          return (
            <CivCard
              key={civ.civilizacion}
              name={civ.civilizacion}
              icono={civ.icono}
              espe={civ.especialidad}
            />
          )
        } )
      }
    </div>
  )
}

export default Civs