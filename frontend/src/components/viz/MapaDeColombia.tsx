import { CIUDADES_DE_COLOMBIA } from "@/lib/viz/ciudades-colombia";
import { CONTORNO_DE_COLOMBIA, VIEWBOX_COLOMBIA, puntoEnColombia } from "@/lib/viz/contorno-colombia";
import { PAPEL, PISTA } from "@/lib/viz/ramps";

/**
 * Colombia con las ciudades del estudio marcadas, cada una con el color de su
 * zona. Pedido por ventas (2026-11) para un estudio en Colombia; fuera del
 * catálogo original, pendiente de revisión de operaciones.
 *
 * Las decisiones que lo definen:
 *
 * 1. EL PAÍS VA EN LA PISTA, LAS CIUDADES EN COLOR. El país es el fondo; lo que
 *    se lee son los puntos y su zona, con los rellenos de región de la casa.
 *
 * 2. EL NOMBRE SIEMPRE ESCRITO junto a su punto. Donde las ciudades están a
 *    menos de un renglón (el Eje Cafetero), el nombre sale con línea guía: la
 *    posición de cada nombre vive en `lib/viz/ciudades-colombia.ts`.
 *
 * 3. LA LEYENDA DICE LA ZONA Y SUS CIUDADES, debajo del mapa, como en el de México.
 */

export interface ZonaDelMapa {
  etiqueta: string;
  ciudades: string[];
  /** Un color categórico del catálogo (`--cat-n`): voltea con el tema. */
  color: string;
}

/** Lo que se agrega a la izquierda del país para los nombres con línea guía. */
const MARGEN_IZQUIERDO = 230;

export function MapaDeColombia({ zonas }: { zonas: ZonaDelMapa[] }) {
  const { ancho, alto } = VIEWBOX_COLOMBIA;
  return (
    <figure className="flex flex-col gap-4 lg:min-h-0 lg:flex-1">
      <div className="relative lg:min-h-0 lg:flex-1">
        <svg
          viewBox={`${-MARGEN_IZQUIERDO} 0 ${ancho + MARGEN_IZQUIERDO} ${alto}`}
          className="w-full min-w-0 lg:absolute lg:inset-0 lg:h-full"
          role="img"
          aria-label={`Mapa de Colombia con las ciudades del estudio: ${zonas.flatMap((z) => z.ciudades).join(", ")}`}
        >
          <path d={CONTORNO_DE_COLOMBIA} fill={PISTA} stroke={PAPEL} strokeWidth={2} strokeLinejoin="round" />
          {zonas.flatMap((z) =>
            z.ciudades.map((nombre) => {
              const c = CIUDADES_DE_COLOMBIA[nombre];
              const p = puntoEnColombia(c.lat, c.lon);
              const tx = p.x + c.dx;
              const ty = p.y + c.dy;
              const conGuia = Math.abs(c.dx) > 40;
              return (
                <g key={nombre}>
                  {conGuia ? (
                    <polyline
                      points={`${p.x},${p.y} ${tx + (c.ancla === "end" ? 8 : -8)},${ty - 11}`}
                      fill="none"
                      stroke="var(--color-muted)"
                      strokeWidth={2}
                    />
                  ) : null}
                  <circle cx={p.x} cy={p.y} r={13} fill={z.color} stroke={PAPEL} strokeWidth={3} />
                  <text
                    x={tx}
                    y={ty}
                    textAnchor={c.ancla}
                    fontSize={34}
                    fontWeight={700}
                    fill="var(--color-ink)"
                    className="font-heading"
                  >
                    {nombre}
                  </text>
                </g>
              );
            }),
          )}
        </svg>
      </div>

      <ul className="flex flex-col gap-1.5">
        {zonas.map((z) => (
          <li key={z.etiqueta} className="flex items-baseline gap-2">
            <span aria-hidden className="h-3.5 w-3.5 shrink-0 translate-y-0.5 rounded-full" style={{ backgroundColor: z.color }} />
            <span className="text-body leading-snug text-ink">
              <span className="font-bold">{z.etiqueta}:</span> {z.ciudades.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
