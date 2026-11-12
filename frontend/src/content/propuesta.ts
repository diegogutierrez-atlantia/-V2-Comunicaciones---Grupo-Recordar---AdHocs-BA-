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

import type { Propuesta } from "@/lib/propuesta/tipos";

/**
 * Grupo Recordar · Arquitectura de marca (vía V2 Comunicaciones).
 *
 * Fuente: el brief de la licitación de Grupo Recordar (oct 2026), el análisis
 * de brief ACV20261106001 y la llamada con Ana Murillo del 2026-11-06.
 * Pendientes del vendedor: precios y semanas de campo.
 */

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
          soluciones: ["Estudio ad hoc de marcas · Funerario y Salud", "Pulso interno"],
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
              titulo: "¿Qué tanto se reconoce cada marca exequial?",
              texto: "Qué tanto se conocen, se recuerdan y se distinguen Grupo Recordar y Prever Siempre, y qué confianza generan, por zona y por segmento.",
              icono: Eye,
            },
            {
              etiqueta: "SALUD",
              titulo: "¿Qué tanto se reconoce Primero?",
              texto: "Qué tan conocida es Primero en salud y bienestar, y si la gente la relaciona con el negocio funerario.",
              icono: HeartHandshake,
            },
            {
              etiqueta: "ARQUITECTURA",
              titulo: "¿Cómo deben convivir los dos frentes?",
              texto: "Una sola lectura de las tres marcas da la base para decidir la arquitectura de marca del grupo.",
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
              titulo: "Aprovechar el reconocimiento construido",
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
              texto: "¿Qué atributos se asocian a cada marca y qué tan diferenciadas están entre sí?",
              icono: Trophy,
            },
            {
              texto: "¿Cómo cambia el reconocimiento de cada marca por zona y por segmento?",
              icono: MapPin,
              detalle: "Zona compartida, solo Prever y solo Recordar · clientes Recordar, clientes Prever y prospectos.",
            },
            {
              texto: "¿Qué entiende el consumidor que hace el grupo y cada una de sus empresas?",
              icono: Building2,
              detalle: "Recordar Previsión, Parques y Funerarias, Prever Siempre, Primero y Somos Primero IPS.",
            },
            {
              texto: "¿Qué tanto se reconoce Primero en salud y bienestar, y le suma o le resta su relación con el negocio funerario?",
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
              nombre: "ESTUDIO AD HOC DE MARCAS",
              subtitulo: "Un solo cuestionario · Recordar, Prever Siempre y Primero",
              texto: "Cada persona evalúa las tres marcas en la misma entrevista: reconocimiento, imagen, confianza y qué entiende del grupo, sin duplicar el ejercicio por negocio.",
              icono: Eye,
            },
            {
              nombre: "PULSO INTERNO",
              subtitulo: "Encuesta a colaboradores",
              texto: "Identificación con su marca y con el grupo, claridad del rol de cada compañía y lectura de la integración, por compañía o unidad de negocio.",
              icono: Users,
            },
            {
              nombre: "ARQUITECTURA DE MARCA",
              subtitulo: "Todo junto",
              texto: "Se cruza la mirada de afuera con la de adentro para evaluar el peso de cada marca y fundamentar la recomendación de arquitectura.",
              icono: Network,
            },
          ],
        },
        {
          tipo: "kpis",
          titulo: "Indicadores · Reconocimiento y arquitectura de marca",
          ejemplosDesplegables: true,
          soluciones: [
            {
              // A la medida (no el BA de la casa): sin bloque de compra, armado
              // sobre los objetivos del brief (retroalimentación de Ana, 2026-11-12).
              nombre: "Estudio ad hoc · Grupo Recordar, Prever Siempre y Primero",
              icono: Eye,
              grupos: [
                {
                  nombre: "Conocimiento y reconocimiento",
                  kpis: [
                    "Top of Mind por categoría (previsión exequial y salud)",
                    "Recordación espontánea de marcas",
                    "Reconocimiento asistido (nombre y logo)",
                    "Asociación de cada marca con su categoría",
                    "Uso actual o pasado de los servicios de cada marca",
                  ],
                },
                {
                  nombre: "Imagen y atributos",
                  ejemplo: "correspondencias",
                  kpis: [
                    "Percepción de marca (espontáneo)",
                    "Atributos asociados a cada marca",
                    "Diferenciación entre Recordar y Prever Siempre",
                    "Mapa de posicionamiento de las marcas",
                  ],
                },
                {
                  nombre: "Ajuste con lo que pide la categoría",
                  ejemplo: "match-index",
                  kpis: [
                    "Atributos más valorados al elegir previsión exequial y salud",
                    "Atributos reconocidos en cada marca",
                    "Brechas entre lo que se valora y lo que cada marca entrega",
                  ],
                },
                {
                  nombre: "Confianza y reputación",
                  kpis: [
                    "Nivel de confianza en cada marca",
                    "Reputación percibida",
                    "Disposición a recomendar (NPS de marca)",
                    "Experiencias o comentarios negativos asociados",
                  ],
                },
                {
                  nombre: "Entendimiento del grupo",
                  kpis: [
                    "Conocimiento de que las marcas pertenecen al mismo grupo",
                    "Qué entiende que hace cada empresa: Recordar Previsión, Parques y Funerarias, Prever Siempre, Primero y Somos Primero IPS",
                    "Confusión o duplicidad percibida entre marcas",
                  ],
                },
                {
                  nombre: "Insumos para la arquitectura",
                  kpis: [
                    "Efecto del respaldo del grupo en la confianza: suma o resta",
                    "Aceptación de que salud y funerario compartan respaldo de marca",
                    "Marca con más peso por zona: compartida, solo Prever y solo Recordar",
                    "Lectura por segmento: clientes Recordar, clientes Prever y prospectos",
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
                  kpis: [
                    "Marca o compañía con la que se identifican",
                    "Sentido de pertenencia a su compañía y al grupo",
                    "Orgullo de trabajar en la compañía",
                    "Recomendación como lugar de trabajo (eNPS)",
                  ],
                },
                {
                  nombre: "Conocimiento del grupo",
                  kpis: [
                    "Conocimiento de las empresas del grupo y de qué hace cada una",
                    "Claridad del rol de cada marca dentro del grupo",
                    "Duplicidades o traslapes percibidos entre compañías",
                  ],
                },
                {
                  nombre: "Lectura de la integración",
                  kpis: [
                    "Conocimiento de la llegada de Prever Siempre al grupo",
                    "Expectativas y preocupaciones ante la integración",
                    "Claridad con la que se ha comunicado el cambio",
                  ],
                },
                {
                  nombre: "Colaboradores como embajadores",
                  kpis: [
                    "Atributos que asocian a su marca y al grupo",
                    "Cómo presentan la compañía ante clientes",
                    "Disposición a recomendar los servicios del grupo",
                  ],
                },
                {
                  nombre: "La arquitectura vista desde adentro",
                  kpis: [
                    "Postura ante una marca única, respaldada o independiente",
                    "Lo que no debe perderse de cada marca",
                    "Cortes por compañía, unidad de negocio, área y antigüedad",
                  ],
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
              titulo: "Un solo cuestionario",
              icono: Layers,
              items: ["Cada persona evalúa las tres marcas en la misma entrevista: Recordar, Prever Siempre y Primero"],
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
          // Del Excel del vendedor (2026-11-12): ajustada al presupuesto de la
          // clienta, con descuento por compra conjunta. Va primero: es la base.
          tipo: "economica",
          titulo: "Propuesta base · Ajustada al presupuesto",
          opciones: [
            {
              etiqueta: "Conocedores de marcas",
              cifras: [{ valor: 300, rotulo: "casos" }],
              estudio: ["Estudio ad hoc de marcas · Funerario y Salud"],
              especificaciones: {
                items: [
                  "Encuesta online (CAWI) con panel",
                  "Cuestionario de 25 minutos",
                  "Un solo cuestionario con las tres marcas",
                ],
              },
              costos: [{ rotulo: "Inversión", monto: 8823.53 }],
            },
            {
              etiqueta: "Colaboradores",
              cifras: [{ valor: 100, rotulo: "colaboradores" }],
              estudio: ["Pulso interno"],
              especificaciones: {
                items: ["Encuesta online (CAWI) con liga interna", "Cuestionario de 10 minutos"],
              },
              costos: [{ rotulo: "Inversión *", monto: 2353 }],
              letraChica:
                "* No considera incentivos: se espera una tasa de respuesta alta, ya que la solicitud viene desde la propia empresa.",
            },
          ],
          totalGeneral: {
            rotulo: "Total · Precio por compra conjunta",
            monto: 10000,
            sinSumar: true,
            nota: "Incluye descuento por contratar los dos estudios juntos.",
          },
        },
        {
          tipo: "economica",
          titulo: "Propuesta completa · Todo lo solicitado",
          opciones: [
            {
              etiqueta: "Encuesta externa",
              cifras: [{ valor: 400, rotulo: "casos" }],
              estudio: ["Estudio ad hoc de marcas · Funerario y Salud"],
              especificaciones: {
                items: [
                  "Encuesta online (CAWI) con panel",
                  "Cuestionario de 25 minutos",
                  "Un solo cuestionario con las tres marcas",
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
