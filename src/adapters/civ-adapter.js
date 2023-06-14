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
    bonus_civ: civToMap.bonificaciones_civilizacion,
    bonus_eq: civToMap.bonificacion_equipo,
    unidad_unica: civToMap.unidad_unica,
    tecno_unica: civToMap.tecnologias_unicas,
  }
  return civMapped;
}
