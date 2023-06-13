export const civsAdapter = (civsToMap) => {
  const mappedCivs = civsToMap.map((civ) => {
    return {
      civilizacion: civ.civilizacion,
      icono: civ.icono,
      especialidad: civ.especialidad,
    };
  });

  return mappedCivs;
};

export const civAdapter = (civToMap) => {
  const civMapped = {
    civ: civToMap.civilizacion,
    icono: civToMap.icono,
    espe: civToMap.especialidad,
  }
  return civMapped;
}
