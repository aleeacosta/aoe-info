import DB from "../mocks/aoe.json";
import {civsAdapter, civAdapter} from "../adapters/civ-adapter";

export const getCivs = () => {
  const { civs } = DB;
  return civsAdapter(civs);
}

export const getCiv = ( civilizacion ) => {
    const { civs } = DB;
    const civ = civs.find( civ => civ.civilizacion.toString() === civilizacion.toString())
  return civAdapter( civ )
}




