/**
 * Las ciudades principales de Colombia, para el mapa de cobertura
 * (`cobertura: { tipo: "colombia" }` en el perfil de la muestra).
 *
 * Cada una trae dónde va su nombre, en unidades del dibujo y relativo al punto.
 * Las del Eje Cafetero, Medellín y Cali están a menos de un renglón una de otra:
 * su nombre se saca a la izquierda, sobre el Pacífico, con una línea guía, para
 * que nada se encime. Si se agrega una ciudad, se acomoda su nombre aquí.
 */
export interface CiudadDeColombia {
  lat: number;
  lon: number;
  /** Dónde va el nombre respecto al punto. */
  dx: number;
  dy: number;
  ancla: "start" | "end";
}

const DERECHA = { dx: 20, dy: 11, ancla: "start" } as const;

export const CIUDADES_DE_COLOMBIA: Record<string, CiudadDeColombia> = {
  Bogotá: { lat: 4.711, lon: -74.072, ...DERECHA },
  Barranquilla: { lat: 10.964, lon: -74.796, dx: 20, dy: -8, ancla: "start" },
  Cartagena: { lat: 10.391, lon: -75.479, dx: -20, dy: 16, ancla: "end" },
  "Santa Marta": { lat: 11.241, lon: -74.205, dx: 14, dy: -22, ancla: "start" },
  Bucaramanga: { lat: 7.119, lon: -73.123, ...DERECHA },
  Cúcuta: { lat: 7.894, lon: -72.508, dx: 14, dy: -8, ancla: "start" },
  // Al poniente, con línea guía: están a menos de un renglón una de otra.
  Medellín: { lat: 6.244, lon: -75.581, dx: -195, dy: -27, ancla: "end" },
  Manizales: { lat: 5.07, lon: -75.514, dx: -198, dy: -30, ancla: "end" },
  Pereira: { lat: 4.813, lon: -75.696, dx: -189, dy: 10, ancla: "end" },
  Armenia: { lat: 4.534, lon: -75.681, dx: -190, dy: 41, ancla: "end" },
  Cali: { lat: 3.452, lon: -76.532, dx: -149, dy: 40, ancla: "end" },
  Ibagué: { lat: 4.438, lon: -75.232, dx: 14, dy: 26, ancla: "start" },
  Villavicencio: { lat: 4.142, lon: -73.627, dx: 14, dy: 22, ancla: "start" },
  Neiva: { lat: 2.927, lon: -75.282, ...DERECHA },
  Pasto: { lat: 1.214, lon: -77.281, ...DERECHA },
};
