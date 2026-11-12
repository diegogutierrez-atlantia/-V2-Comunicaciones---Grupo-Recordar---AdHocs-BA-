"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/**
 * El título de un grupo de KPIs que abre, encima y a pantalla completa, la
 * lámina que explica su método (correspondencias, Match Index, clúster).
 *
 * Excepción a "nada se abre con un clic" (operaciones, 2026-11), pedida por
 * ventas para una propuesta (`ejemplosDesplegables` en la lámina `kpis`) y
 * pendiente de revisión de operaciones. Sólo en la liga: en el PDF las
 * explicativas salen como láminas propias, como siempre (ver `armar.tsx`).
 *
 * La explicación llega ya dibujada (`children`, del servidor): aquí sólo se
 * abre y se cierra. Se cierra con la X o con Escape.
 */
export function EjemploQueSeAbre({ titulo, children }: { titulo: string; children: ReactNode }) {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setAbierto(false);
      }
    };
    window.addEventListener("keydown", alTeclear, true);
    return () => window.removeEventListener("keydown", alTeclear, true);
  }, [abierto]);

  return (
    <>
      <button
        type="button"
        onClick={() => setAbierto(true)}
        className="flex w-full cursor-pointer items-center gap-3 text-left underline-offset-4 hover:underline"
      >
        <span className="flex-1">{titulo}</span>
        <span className="shrink-0 rounded-full border border-current px-3 py-0.5 font-heading text-[0.6875rem] font-semibold uppercase tracking-[0.12em]">
          Ver ejemplo
        </span>
      </button>

      {/* Al <body> con un portal: la lámina anima con transform y reparte en
          columnas, y eso encierra un `fixed` dentro de la columna del grupo. */}
      {abierto ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={titulo}
          data-superficie="honda"
          className="card-bg-primary fixed inset-0 z-[60] flex flex-col overflow-y-auto text-white"
        >
          <div className="card-grain" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setAbierto(false)}
            aria-label="Cerrar"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-current lg:right-10 lg:top-8"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
          <div className="relative z-[1] flex flex-1 flex-col px-5 pt-[4.5rem] pb-16 sm:px-8 lg:px-10 lg:pt-[5.5rem] lg:pb-20">
            {children}
          </div>
        </div>,
        document.body,
      ) : null}
    </>
  );
}
