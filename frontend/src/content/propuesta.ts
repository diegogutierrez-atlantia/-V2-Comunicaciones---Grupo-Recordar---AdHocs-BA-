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
          soluciones: ["AdHoc desempeño e impacto en el mercado", "AdHoc impacto dentro de la organización (Pulso Interno)"],
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
          rotuloDeEtapa: "Estudio",
          encadenadas: true,
          etapas: [
            {
              nombre: "AdHoc desempeño e impacto en el mercado",
              subtitulo: "Grupo Recordar, Prever Siempre y Primero",
              texto: "Un solo cuestionario: cada persona evalúa las marcas funerarias y Primero, y los indicadores se obtienen una vez para funerario y otra para salud.",
              icono: Eye,
            },
            {
              nombre: "AdHoc impacto dentro de la organización",
              subtitulo: "Pulso Interno · Encuesta a colaboradores",
              texto: "Identificación con su empresa y con el grupo, claridad del rol de cada compañía y reacción a los escenarios de arquitectura.",
              icono: Users,
            },
            {
              rotulo: "Análisis",
              nombre: "Análisis de los dos estudios",
              subtitulo: "Todo junto",
              texto: "Se cruza la mirada de afuera con la de adentro para evaluar el peso de cada marca y fundamentar la recomendación de arquitectura.",
              icono: Network,
            },
          ],
        },
        {
          // Estudio 1, a la medida (no el BA de la casa): sin bloque de compra.
          // Indicadores del vendedor (2026-11-12), con sus descripciones tal cual.
          tipo: "kpis",
          titulo: "Indicadores · Desempeño e impacto en el mercado",
          ejemplosDesplegables: true,
          // Pedido del vendedor (2026-11-12): todo el estudio 1 en una lámina.
          gruposDesplegables: true,
          soluciones: [
            {
              nombre: "AdHoc desempeño e impacto en el mercado",
              icono: Eye,
              grupos: [
                {
                  nombre: "Cada indicador se obtiene dos veces",
                  abierto: true,
                  kpis: [
                    "**Funerario** · Grupo Recordar y Prever Siempre",
                    "**Salud** · Primero",
                  ],
                },
                {
                  nombre: "Conocimiento y reconocimiento",
                  kpis: [
                    "Recordación espontánea de marcas",
                    "Reconocimiento asistido (nombre y logo)",
                    "Uso actual o pasado de los servicios de cada marca",
                  ],
                },
                {
                  nombre: "Imagen y atributos",
                  ejemplo: "correspondencias",
                  kpis: [
                    "Percepción de marca (espontáneo)",
                    "Atributos asociados a cada marca",
                    "Mapa de posicionamiento de las marcas",
                    "Mapa de correlación de atributos",
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
                    "Satisfacción neta (NSS)",
                    "Experiencias o comentarios negativos asociados",
                  ],
                },
                {
                  nombre: "Lectura por zona y segmento",
                  kpis: [
                    "Marca con más peso por zona: compartida, solo Prever y solo Recordar",
                    "Lectura por segmento: clientes Recordar, clientes Prever y prospectos",
                  ],
                },
                {
                  nombre: "Convivencia funerario–salud",
                  kpis: [
                    "**Transferencia de confianza** · Si el respaldo funerario ayuda o frena a Primero",
                    "**Encaje percibido** · Qué tan natural se ve que la misma empresa ofrezca ambos",
                    "**Oferta conjunta** · Interés en un plan que combine servicio funerario y salud",
                    "**Riesgo de asociación** · Rechazo a ligar salud con servicios funerarios",
                  ],
                },
                {
                  nombre: "Sombrilla del grupo",
                  kpis: [
                    "**Permiso de marca** · Si Grupo Recordar puede respaldar salud además del servicio funerario",
                    "**Encaje percibido funerario–salud** · Qué tan natural se ve que ambos frentes vivan juntos",
                    "**Una marca para los dos frentes** · Si una sola sombrilla puede cubrir servicio funerario y salud o conviene separarlas",
                    "**Nombre ideal del grupo** · Reacción a sombrilla actual vs. una marca holding nueva",
                  ],
                },
                {
                  nombre: "Escenarios · Para todos",
                  kpis: [
                    "**Claridad** · Qué tan fácil es entender quién es quién",
                    "**Confianza transferida** · Si el escenario sube o baja la confianza en la oferta",
                    "**Atractivo e intención de afiliación** · Por escenario, comparado contra la situación actual",
                  ],
                },
                {
                  nombre: "Escenarios · Conocedores de cada marca",
                  kpis: [
                    "**Pérdida percibida** · Qué sienten que se perdería de Prever Siempre o de Recordar",
                    "**Riesgo de migración** · Si cambiaría su opinión o su intención de afiliarse",
                    "**Permanencia, en quienes ya están afiliados** · Lectura direccional con los casos que salgan en la muestra",
                  ],
                },
                {
                  nombre: "Escenarios · No conocedores y prospectos",
                  kpis: [
                    "**Consideración por escenario** · Qué modelo los acerca más al grupo",
                    "**Endoso que suma o resta** · Valor de ver al grupo detrás de la marca",
                    "**Plantear la asociación** · Reacción ante la relación Recordar–Prever Siempre",
                  ],
                },
              ],
            },
          ],
        },
        {
          // Estudio 2. Los indicadores con descripción son los del vendedor
          // (2026-11-12), tal cual; los demás ya estaban.
          tipo: "kpis",
          titulo: "Indicadores · Impacto dentro de la organización",
          soluciones: [
            {
              nombre: "AdHoc impacto dentro de la organización (Pulso Interno)",
              icono: Users,
              grupos: [
                {
                  nombre: "Identidad y pertenencia",
                  kpis: [
                    "**Marca con la que se identifica** · Su empresa, Grupo Recordar o ninguna",
                    "**Sentido de pertenencia al grupo** · Por empresa y por vicepresidencia",
                    "**Orgullo y recomendación como lugar de trabajo** · eNPS por empresa",
                  ],
                },
                {
                  nombre: "Entendimiento del grupo",
                  kpis: [
                    "**Conocimiento de las empresas del grupo** · Cuáles reconoce y qué hace cada una",
                    "**Claridad del rol de su empresa** · Y de cómo se relaciona con las demás",
                    "**Cómo presenta al grupo hacia afuera** · Con qué nombre se presenta ante clientes y aliados",
                    "**Duplicidades percibidas** · Dónde ve confusión o competencia entre marcas",
                  ],
                },
                {
                  nombre: "Reacción a escenarios",
                  kpis: [
                    "**Escenario preferido** · Entre los mismos 5 modelos del público general",
                    "**Pérdida percibida** · Qué se perdería de su marca en cada escenario",
                    "**Disposición al cambio** · Qué tan listo ve a su equipo para una integración",
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
                    "Disposición a recomendar los servicios del grupo",
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
            {
              titulo: "Reparto por zona",
              icono: MapPin,
              items: ["La propuesta base conserva la misma proporción que la completa: 50% zona compartida, 25% solo Prever y 25% solo Recordar"],
            },
          ],
          recuadro: [
            // Base: proporcional a la completa, como pidió el vendedor (2026-11-12).
            { rotulo: "Propuesta base", valor: "300 casos · 150 / 75 / 75" },
            { rotulo: "Propuesta completa", valor: "400 casos · 200 / 100 / 100" },
          ],
          cobertura: {
            tipo: "colombia",
            zonas: [
              { etiqueta: "Compartida (150 base · 200 completa)", ciudades: ["Bogotá", "Cali", "Medellín"] },
              { etiqueta: "Solo Prever (75 base · 100 completa)", ciudades: ["Manizales", "Armenia", "Pereira"] },
              { etiqueta: "Solo Recordar (75 base · 100 completa)", ciudades: ["Barranquilla", "Cartagena", "Bucaramanga"] },
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
          recuadro: [
            { rotulo: "Propuesta base", valor: "100 colaboradores" },
            { rotulo: "Propuesta completa", valor: "150 colaboradores" },
          ],
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
              estudio: ["AdHoc desempeño e impacto en el mercado"],
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
              estudio: ["AdHoc impacto dentro de la organización (Pulso Interno)"],
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
            nota: "Precio sin descuento: $11,176.47 USD · Incluye descuento por contratar los dos estudios juntos.",
          },
        },
        {
          tipo: "economica",
          titulo: "Propuesta completa · Todo lo solicitado",
          opciones: [
            {
              etiqueta: "Encuesta externa",
              cifras: [{ valor: 400, rotulo: "casos" }],
              estudio: ["AdHoc desempeño e impacto en el mercado"],
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
              estudio: ["AdHoc impacto dentro de la organización (Pulso Interno)"],
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
