import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Las imágenes de marca se sirven tal cual (los componentes ya usan
  // `unoptimized`), así que no hace falta configurar dominios remotos.
  images: { unoptimized: true },
  // `pnpm pdf` y `pnpm fotos` compilan en SU PROPIO directorio (.next-pdf,
  // .next-fotos) para no pelearse con el `pnpm dev` del operador, que tiene
  // `.next` abierto. Sin esto, correr el PDF mientras dev está prendido
  // rompía las dos cosas.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Avisa a la propuesta que se está armando para el PDF: lo que en la liga va
  // en desplegables (los términos, si la propuesta lo pide) ahí sale abierto.
  env: { PROPUESTA_EN_PDF: process.env.NEXT_DIST_DIR === ".next-pdf" ? "1" : "" },
};

export default nextConfig;
