import { ChevronDown } from "lucide-react";
import { estiloDeIcono } from "@/lib/story/colores-de-icono";
import type { ReactNode } from "react";
import type { Explicativa, GrupoDeKpis, SolucionConKpis } from "@/lib/propuesta/tipos";
import { EjemploQueSeAbre } from "./EjemploQueSeAbre";
import { COLOR_DE_PUNTO, PUNTO } from "./estilos";

/**
 * Los indicadores de UNA solución, todos a la vista.
 *
 * Las decisiones que la definen:
 *
 * 1. NADA SE ABRE CON UN CLIC (decisión de operaciones, 2026-11). Antes los
 *    grupos eran desplegables y el lector tenía que ir abriéndolos; ahora la
 *    propuesta se consume sin interactuar. Lo que no cabe en una pantalla se
 *    va a la siguiente lámina, nunca a un desplegable.
 *
 * 2. UNA LÁMINA POR SOLUCIÓN (o más, si no cabe): con varias soluciones lado a
 *    lado y todo abierto, las columnas quedaban angostas y larguísimas.
 *    `partirKpisEnLaminas` reparte los grupos, en su orden, entre las láminas.
 *
 * 3. LOS GRUPOS FLUYEN EN COLUMNAS DE ARRIBA ABAJO (CSS `columns`): se leen en
 *    vertical, como pide la casa, y un grupo nunca se parte entre columnas.
 *
 * 4. LOS INDICADORES VAN TEXTUALES y NO SE CUENTAN: ningún "14 indicadores"
 *    tecleado, que se desactualiza en cuanto alguien agrega uno.
 *
 * 5. EL EJEMPLO DE UN GRUPO (el clúster, el Match Index) YA NO ABRE ENCIMA:
 *    va como lámina explicativa propia, justo después (lo pone `armar.tsx`).
 *    Aquí el grupo sólo lo anuncia con su chip.
 */

/** Lo que pesa un grupo en renglones: su nombre y sus indicadores. */
const pesoDeGrupo = (g: GrupoDeKpis) =>
  g.kpis.reduce((n, k) => n + (k.startsWith("**") && k.includes(" · ") ? 2 : 1), 0) + 2;

/** Lo que cabe en una pantalla: cuatro columnas de unos catorce renglones. */
const RENGLONES_POR_LAMINA = 56;

/** Reparte los grupos de una solución entre láminas, sin cambiar su orden. */
export function partirKpisEnLaminas(grupos: GrupoDeKpis[]): GrupoDeKpis[][] {
  const laminas: GrupoDeKpis[][] = [];
  let actual: GrupoDeKpis[] = [];
  let peso = 0;
  for (const g of grupos) {
    if (actual.length > 0 && peso + pesoDeGrupo(g) > RENGLONES_POR_LAMINA) {
      laminas.push(actual);
      actual = [];
      peso = 0;
    }
    actual.push(g);
    peso += pesoDeGrupo(g);
  }
  if (actual.length > 0) laminas.push(actual);
  return laminas;
}

export function KpisPorSolucion({
  titulo,
  solucion,
  grupos,
  indice,
  parte,
  ejemplos,
  desplegables = false,
}: {
  /**
   * true: cada grupo es un desplegable (`gruposDesplegables` de la lámina) y
   * todo cabe en una lámina. Sólo en la liga; en el PDF van abiertos.
   */
  desplegables?: boolean;
  /**
   * Las explicaciones ya dibujadas, por método, cuando la propuesta pide que se
   * abran desde el título del grupo (`ejemplosDesplegables`). Sin esto, el
   * grupo dice "Con ejemplo" y la explicativa va como lámina aparte.
   */
  ejemplos?: Partial<Record<Explicativa, ReactNode>>;
  titulo: string;
  solucion: SolucionConKpis;
  /** Los grupos que van en esta lámina (todos, o un tramo si no cupo en una). */
  grupos: GrupoDeKpis[];
  /** El lugar de la solución en la propuesta: decide el color de su ícono. */
  indice: number;
  /** "2 de 2" cuando la solución ocupa más de una lámina. */
  parte?: { n: number; de: number };
}) {
  const Icono = solucion.icono;
  const peso = grupos.reduce((n, g) => n + pesoDeGrupo(g), 0);
  // Las clases van escritas completas: Tailwind no genera una armada al vuelo.
  const columnas =
    grupos.length === 1
      ? ""
      : peso > 36 && grupos.length > 3
        ? "md:columns-2 lg:columns-3 xl:columns-4"
        : peso > 24 && grupos.length > 2
          ? "md:columns-2 xl:columns-3"
          : "md:columns-2";
  const ultima = !parte || parte.n === parte.de;

  return (
    <div className="flex flex-1 flex-col gap-8 lg:gap-10">
      <header className="stagger flex flex-col gap-5">
        <h2 className="font-heading text-h2 font-extrabold text-ink">{titulo}</h2>
        <div className="flex items-center gap-4">
          <span
            aria-hidden
            data-superficie="honda"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            style={estiloDeIcono(indice)}
          >
            <Icono className="h-6 w-6" strokeWidth={1.75} />
          </span>
          <h3 className="font-heading text-h3 font-bold leading-tight text-ink">
            {solucion.nombre}
            {parte && parte.de > 1 ? (
              <span className="ml-3 font-heading text-lead font-semibold text-muted">
                {parte.n} de {parte.de}
              </span>
            ) : null}
          </h3>
        </div>
      </header>

      {desplegables ? (
        // Columnas fijas armadas aquí y no con CSS `columns`: al abrir un grupo,
        // `columns` rebalancea y los grupos brincan de columna bajo el dedo.
        // Se llenan en orden, de arriba abajo, como pide la casa.
        <div className="stagger grid items-start gap-x-12 md:grid-cols-2 xl:grid-cols-3">
          {enColumnas(grupos, 3).map((columna, c) => (
            <div key={c} className="flex flex-col">
              {columna.map((g) => (
                <details key={g.nombre} open={g.abierto} className="group mb-4 border-t border-border pt-4">
                  <summary className="flex cursor-pointer list-none items-center gap-3 font-heading text-body font-semibold text-tinta-marca [&::-webkit-details-marker]:hidden">
                    <span className="flex-1">{g.nombre}</span>
                    <ChevronDown
                      aria-hidden
                      className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                      strokeWidth={2}
                    />
                  </summary>
                  {g.ejemplo && ejemplos?.[g.ejemplo] ? (
                    <div className="mt-3 font-heading text-kicker font-semibold text-tinta-marca">
                      <EjemploQueSeAbre titulo="Cómo se lee este análisis">{ejemplos[g.ejemplo]}</EjemploQueSeAbre>
                    </div>
                  ) : null}
                  <ListaDeKpis kpis={g.kpis} />
                </details>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={`stagger gap-x-12 ${columnas}`}>
          {grupos.map((g) => (
            <section key={g.nombre} className="mb-7 break-inside-avoid border-t border-border pt-4">
              <h4 className="flex items-center gap-3 font-heading text-body font-semibold text-tinta-marca">
                {g.ejemplo && ejemplos?.[g.ejemplo] ? (
                  <EjemploQueSeAbre titulo={g.nombre}>{ejemplos[g.ejemplo]}</EjemploQueSeAbre>
                ) : (
                  <span className="flex-1">{g.nombre}</span>
                )}
                {g.ejemplo && !ejemplos?.[g.ejemplo] ? (
                  <span className="shrink-0 rounded-full border border-border px-3 py-0.5 font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.12em]">
                    Con ejemplo
                  </span>
                ) : null}
              </h4>
              <ListaDeKpis kpis={g.kpis} />
            </section>
          ))}
        </div>
      )}

      {ultima && solucion.nota ? <p className="mt-auto text-[0.6875rem] text-muted">{solucion.nota}</p> : null}
    </div>
  );
}

/** Reparte los grupos en `n` columnas, en orden y parejas en número de grupos. */
function enColumnas(grupos: GrupoDeKpis[], n: number): GrupoDeKpis[][] {
  const porColumna = Math.ceil(grupos.length / n);
  return Array.from({ length: n }, (_, c) => grupos.slice(c * porColumna, (c + 1) * porColumna)).filter((c) => c.length > 0);
}

function ListaDeKpis({ kpis }: { kpis: string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2">
      {kpis.map((k) => {
        // "**Nombre** · descripción": el nombre arriba y su descripción
        // debajo, más chica. Pedido por ventas (2026-11), pendiente de
        // revisión de operaciones. Sin ese formato, el KPI va como siempre.
        const conDescripcion = /^\*\*(.+?)\*\*\s*·\s*(.+)$/.exec(k);
        return (
          <li key={k} className="flex gap-3 text-body text-ink-2">
            <span aria-hidden className={PUNTO} style={COLOR_DE_PUNTO} />
            {conDescripcion ? (
              <span className="flex flex-col">
                <span className="font-semibold text-ink">{conDescripcion[1]}</span>
                <span className="text-kicker leading-snug text-ink-2">{conDescripcion[2]}</span>
              </span>
            ) : (
              <span>{k}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
