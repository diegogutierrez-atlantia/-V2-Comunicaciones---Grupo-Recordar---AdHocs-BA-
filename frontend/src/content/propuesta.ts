import {
  Building2,
  ClipboardList,
  Eye,
  HeartHandshake,
  Layers,
  MapPin,
  Network,
  ShieldCheck,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";

import { kpisDeLaCasa } from "@/casa/kpis";
import type { Propuesta } from "@/lib/propuesta/tipos";

/**
 * Grupo Recordar · Arquitectura de marca (vía V2 Comunicaciones).
 *
 * Fuente: el brief de la licitación de Grupo Recordar (oct 2026), el análisis
 * de brief ACV20261106001 y la llamada con Ana Murillo del 2026-11-06.
 * Pendientes del vendedor: precios y semanas de campo.
 */

const ba = kpisDeLaCasa("ba");

export const PROPUESTA: Propuesta | null = {
  ficha: {
    cliente: "V2 Comunicaciones",
    rotulo: "Propuesta de investigación · Arquitectura de marca",
    fecha: "Noviembre 2026",
    moneda: "USD",
    vendedor: "diego-gutierrez",
  },
  actos: [
    {
      titulo: "Apertura",
      laminas: [
        {
          tipo: "portada",
          titulo: "Cuidar la vida, honrar la memoria: una marca para cada momento",
          bajada:
            "Evidencia cuantitativa para definir el rol de Grupo Recordar y Prever Siempre dentro del nuevo grupo empresarial.",
          soluciones: ["Brand Awareness · Funerario", "Brand Awareness · Salud", "Pulso interno"],
          frase: "Decidir la arquitectura con lo que piensan clientes, prospectos y colaboradores, no con supuestos.",
        },
        {
          tipo: "contexto",
          titulo: "Un grupo que crece y necesita ordenar sus marcas",
          texto:
            "Con la adquisición de Prever Siempre, Grupo Recordar suma una marca con trayectoria propia en el sector exequial y presencia en territorios donde antes no era relevante. Al mismo tiempo, el grupo opera en dos frentes muy distintos: previsión, funerarias y cementerios, y salud y bienestar a través de Primero.",
          invitacion: "La decisión de arquitectura tiene que responder tres preguntas a la vez:",
          piezas: [
            {
              etiqueta: "FUNERARIO",
              titulo: "¿Qué vale cada marca exequial?",
              texto: "Reconocimiento, confianza, reputación y preferencia de Grupo Recordar y Prever Siempre, por zona y por segmento.",
              icono: Eye,
            },
            {
              etiqueta: "SALUD",
              titulo: "¿Qué vale Primero?",
              texto: "El mismo diagnóstico de marca para el frente de salud y bienestar, leído con la misma vara.",
              icono: HeartHandshake,
            },
            {
              etiqueta: "ARQUITECTURA",
              titulo: "¿Cómo deben convivir los dos frentes?",
              texto: "Los dos diagnósticos juntos dan la base para decidir la arquitectura de marca del grupo.",
              icono: Network,
            },
          ],
          unidasCon: "+",
          cierre: "Sin partir de la premisa de que una marca deba desaparecer o mantenerse.",
        },
      ],
    },
    {
      titulo: "Retos y preguntas de negocio",
      separador: {
        entrada: "Lo que el grupo necesita saber antes de decidir.",
        foto: "/separadores/familia-manos.jpg",
      },
      laminas: [
        {
          tipo: "retos",
          titulo: "Los retos de la integración",
          retos: [
            {
              etiqueta: "VALOR",
              titulo: "Proteger el equity construido",
              texto: "Aprovechar el reconocimiento de Prever Siempre en el Eje Cafetero sin diluir el de Grupo Recordar.",
              icono: ShieldCheck,
            },
            {
              etiqueta: "CLARIDAD",
              titulo: "Evitar duplicidades y confusión",
              texto: "Que clientes, aliados y equipos comerciales entiendan qué hace cada empresa del grupo.",
              icono: Layers,
            },
            {
              etiqueta: "CATEGORÍA",
              titulo: "Cuidar una categoría sensible",
              texto: "Previsión exequial y salud conviven en el mismo grupo: la marca que acompaña un momento no debe pesar sobre el otro.",
              icono: HeartHandshake,
            },
          ],
        },
        {
          tipo: "preguntas",
          titulo: "Preguntas de negocio",
          preguntas: [
            {
              texto: "¿Qué nivel de reconocimiento, recordación, confianza y reputación tiene cada marca?",
              icono: Eye,
            },
            {
              texto: "¿Cuál marca se prefiere, cuál genera mayor intención de compra y qué tan diferenciada y relevante es cada una?",
              icono: Trophy,
            },
            {
              texto: "¿Cómo cambia el valor de cada marca por zona y por segmento?",
              icono: MapPin,
              detalle: "Zona compartida, solo Prever y solo Recordar · clientes Recordar, clientes Prever y prospectos.",
            },
            {
              texto: "¿Qué entiende el consumidor que hace el grupo y cada una de sus empresas?",
              icono: Building2,
              detalle: "Recordar Previsión, Parques y Funerarias, Prever Siempre, Primero y Somos Primero IPS.",
            },
            {
              texto: "¿Qué valor tiene Primero en salud y bienestar, y cuánto le suma o le resta su relación con el negocio funerario?",
              icono: HeartHandshake,
            },
            {
              texto: "¿Con qué marca o compañía se identifican los colaboradores y qué sentido de pertenencia tienen al grupo?",
              icono: UserCheck,
            },
            {
              texto: "¿Qué tan claro tienen los equipos el rol de cada marca dentro del grupo?",
              icono: Network,
            },
          ],
        },
        {
          tipo: "como",
          titulo: "Cómo lo vamos a lograr",
          texto:
            "La parte cuantitativa del proyecto, como soporte de la recomendación de arquitectura. Se integra con las entrevistas a profundidad que conduce V2 Comunicaciones.",
          rotuloDeEtapa: "Etapa",
          encadenadas: true,
          etapas: [
            {
              nombre: "BRAND AWARENESS · FUNERARIO",
              subtitulo: "Grupo Recordar y Prever Siempre",
              texto: "Reconocimiento, recordación, confianza, reputación, preferencia e intención de compra de cada marca, leídos por zona y por segmento.",
              icono: Eye,
            },
            {
              nombre: "BRAND AWARENESS · SALUD",
              subtitulo: "Primero",
              texto: "Los mismos indicadores para el frente de salud y bienestar, para comparar los dos negocios con la misma vara.",
              icono: HeartHandshake,
            },
            {
              nombre: "PULSO INTERNO",
              subtitulo: "Encuesta a colaboradores",
              texto: "Identificación con la marca, sentido de pertenencia al grupo y claridad del rol de cada compañía, por compañía o unidad de negocio.",
              icono: Users,
            },
            {
              nombre: "ARQUITECTURA DE MARCA",
              subtitulo: "Todo junto",
              texto: "Se cruzan ambos diagnósticos para evaluar el peso de cada marca y fundamentar la recomendación de arquitectura.",
              icono: Network,
            },
          ],
        },
        {
          tipo: "kpis",
          titulo: "Indicadores · Equity de marca",
          ejemplosDesplegables: true,
          soluciones: [
            {
              ...ba,
              nombre: "Brand Awareness · Funerario (Recordar y Prever Siempre) y Salud (Primero)",
              grupos: [
                ...ba.grupos
                  .filter(
                    (g) =>
                      g.nombre !== "Perfil de cliente de la marca por nivel de satisfacción" &&
                      g.nombre !== "Arquetipo de marca",
                  )
                  .map((g) =>
                    g.nombre === "Análisis de atributos"
                      ? { ...g, kpis: ["Percepción de marca (espontáneo)", ...g.kpis] }
                      : g,
                  ),
                {
                  nombre: "Confianza y reputación",
                  kpis: [
                    "Nivel de confianza en la marca",
                    "Reputación percibida",
                    "Diferenciación frente a la competencia",
                    "Relevancia para el hogar",
                  ],
                },
              ],
            },
          ],
        },
        {
          tipo: "kpis",
          titulo: "Indicadores · Pulso interno",
          soluciones: [
            {
              nombre: "Pulso interno",
              icono: Users,
              grupos: [
                {
                  nombre: "Identidad y pertenencia",
                  kpis: ["Marca o compañía con la que se identifican", "Sentido de pertenencia al grupo"],
                },
                {
                  nombre: "Claridad de roles",
                  kpis: ["Claridad del rol de cada marca dentro del grupo", "Cortes por compañía o unidad de negocio"],
                },
              ],
            },
          ],
        },
        { tipo: "entregable", capturas: "dashboard" },
      ],
    },
    {
      titulo: "Dimensión del estudio",
      separador: {
        entrada: "A quién vamos a escuchar, dónde y en cuánto tiempo.",
        foto: "/separadores/bogota-ciudad.jpg",
      },
      laminas: [
        {
          tipo: "perfil",
          titulo: "Perfil de la muestra",
          perfil: [
            { rotulo: "Edad", valor: "25 a 65 años" },
            { rotulo: "Género", valor: "Hombres y mujeres" },
            { rotulo: "NSE", valor: "Estratos 3, 4, 5 y 6" },
            {
              rotulo: "Perfil",
              valor:
                "Conocedores de las marcas Grupo Recordar, Prever Siempre y Primero que en el último año tengan, busquen adquirir o hayan usado un servicio de salud o funerario, o planeen hacerlo en los próximos 12 meses",
            },
          ],
          tarjetas: [
            {
              titulo: "Método",
              icono: ClipboardList,
              items: ["Encuesta online (CAWI) con panel", "Cuestionario de 25 minutos", "Protocolo cuidadoso para una categoría sensible"],
            },
            {
              titulo: "Brand Awareness",
              icono: Layers,
              items: ["Cada persona contesta los dos: funerario (Recordar y Prever Siempre) y salud (Primero)"],
            },
          ],
          recuadro: [
            { rotulo: "Muestra total", valor: "400 casos" },
            { rotulo: "Por zona", valor: "200 / 100 / 100" },
          ],
          cobertura: {
            tipo: "colombia",
            zonas: [
              { etiqueta: "Compartida (200)", ciudades: ["Bogotá", "Cali", "Medellín"] },
              { etiqueta: "Solo Prever (100)", ciudades: ["Manizales", "Armenia", "Pereira"] },
              { etiqueta: "Solo Recordar (100)", ciudades: ["Barranquilla", "Cartagena", "Bucaramanga"] },
            ],
          },
        },
        {
          tipo: "perfil",
          titulo: "Perfil de la muestra · Pulso interno",
          perfil: [
            { rotulo: "Perfil", valor: "Colaboradores de las compañías de Grupo Recordar" },
            { rotulo: "Cortes", valor: "Por compañía o unidad de negocio" },
          ],
          tarjetas: [
            {
              titulo: "Método",
              icono: ClipboardList,
              items: ["Encuesta online (CAWI) con liga interna", "Cuestionario de 10 minutos"],
            },
          ],
          recuadro: [{ rotulo: "Muestra", valor: "Hasta 150 casos" }],
          cobertura: { tipo: "ninguna" },
        },
        {
          // Copiado del cronograma que mandó el vendedor (2026-11-12), casilla por
          // casilla: 10 días de levantamiento y la entrega al día 21.
          tipo: "timeline",
          cronogramas: [
            {
              nombre: "Cuantitativo",
              actividades: [
                { nombre: "Go de proyecto", desde: 1, hasta: 1, fase: "arranque" },
                { nombre: "Kick Off con cliente", desde: 1, hasta: 1, fase: "arranque" },
                { nombre: "Envío de materiales (conceptos)", desde: 2, hasta: 2, fase: "preparacion" },
                { nombre: "Diseño de cuestionario", desde: 3, hasta: 4, fase: "preparacion" },
                { nombre: "Revisión de cuestionario", desde: 5, hasta: 5, fase: "preparacion" },
                { nombre: "Programación del cuestionario", desde: 6, hasta: 8, fase: "preparacion" },
                { nombre: "Levantamiento", desde: 9, hasta: 18, fase: "campo" },
                { nombre: "Validación de información", desde: 19, hasta: 19, fase: "analisis" },
                { nombre: "Procesamiento de BDD", desde: 19, hasta: 19, fase: "analisis" },
                { nombre: "Generación de Dashboard", desde: 20, hasta: 20, fase: "dashboard" },
                { nombre: "Entrega de Dashboard", desde: 21, hasta: 21, fase: "entrega" },
              ],
            },
          ],
        },
        {
          tipo: "economica",
          opciones: [
            {
              etiqueta: "Encuesta externa",
              cifras: [{ valor: 400, rotulo: "casos" }],
              estudio: ["Brand Awareness · Funerario", "Brand Awareness · Salud"],
              especificaciones: {
                items: [
                  "Encuesta online (CAWI) con panel",
                  "Cuestionario de 25 minutos",
                  "Cada persona contesta los dos Brand Awareness",
                  "Tres zonas: 200 / 100 / 100",
                ],
              },
              costos: [{ rotulo: "Inversión", monto: 11176 }],
            },
            {
              etiqueta: "Pulso interno",
              cifras: [{ valor: 150, rotulo: "colaboradores" }],
              estudio: ["Pulso interno"],
              especificaciones: {
                items: ["Encuesta online (CAWI) con liga interna", "Cuestionario de 10 minutos"],
              },
              costos: [{ rotulo: "Inversión *", monto: 3471 }],
              letraChica:
                "* No considera incentivos: se espera una tasa de respuesta alta, ya que la solicitud viene desde la propia empresa.",
            },
          ],
          totalGeneral: { rotulo: "Total · Encuesta externa + Pulso interno", monto: 14647 },
        },
        { tipo: "estandar", cambios: { extension: "**25 minutos** encuesta externa y **10 minutos** pulso interno" } },
        { tipo: "terminos", desplegable: true },
      ],
    },
    {
      titulo: "Cierre",
      laminas: [
        {
          tipo: "cierre",
          frase: "La marca correcta, en el momento que más importa.",
        },
      ],
    },
  ],
};
