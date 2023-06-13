import CivCard from "./CivCard"

const Civs = ({civsResponse}) => {

  return (
    <div className="grid grid-cols-5 gap-4 p-6" >
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