import DB from "../mocks/aoe.json";
import {civsAdapter, civAdapter} from "../adapters/civ-adapter";

export const getCivs = (quantity = DB.civs.length) => {
  const { civs } = DB;
  return civsAdapter(
    quantity < civs.length ? civs.slice(0, quantity) : civs
  );
}

export const getCiv = ( civilizacion ) => {
  const { civs } = DB;
  const civ = civs.find( civ => civ.civilizacion.toString() === civilizacion.toString() ) || civs[0]
  return civAdapter( civ )
}




