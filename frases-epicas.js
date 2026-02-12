// ============================================
// FRASES ÉPICAS PERSONALIZADAS
// ============================================
// Este archivo contiene las frases épicas que aparecen en el reverso de las tarjetas FIFA

const FRASES_EPICAS = {

'Adriana Milena Martinez Centanaro': {
    titulo: 'LA GUARDIANA DE LA CONCILIACIÓN',
    frase: 'Con liderazgo firme y criterio equilibrado dirige cada proceso con autoridad serena, asegurando justicia y orden en cada decisión tomada',
    poder: 'DOMINIO CONCILIADOR',
    especialidad: 'Subgerente - Jefe de Conciliación'
},

'Alma Cecilia Palacio Alvarez': {
    titulo: 'LA CENTINELA DEL FLUJO FINANCIERO',
    frase: 'Custodia cada transacción con precisión y responsabilidad, manteniendo el equilibrio constante en el movimiento diario',
    poder: 'CONTROL EXACTO',
    especialidad: 'Cajera'
},

'Anabel Sanchez Osorio': {
    titulo: 'LA FUERZA DEL SOPORTE CONSTANTE',
    frase: 'Con disciplina y compromiso sostiene el orden diario, garantizando armonía en cada espacio',
    poder: 'EQUILIBRIO OPERATIVO',
    especialidad: 'Servicios Generales'
},

'Andres Alfonso Herazo Atencia': {
    titulo: 'EL MAESTRO DE LOS NÚMEROS',
    frase: 'Interpreta cifras con mente estratégica y convierte datos en decisiones firmes que sostienen la estabilidad institucional',
    poder: 'ANÁLISIS FINANCIERO',
    especialidad: 'Contador'
},

'Andres Mauricio Vergara Fernandez': {
    titulo: 'EL VIGILANTE DEL PUNTO CLAVE',
    frase: 'Desde su posición estratégica garantiza eficiencia y confianza en cada atención brindada',
    poder: 'PRECISIÓN OPERATIVA',
    especialidad: 'Cajero Sede OLU'
},

'Candelaria Sofia Ochoa Villa': {
    titulo: 'LA OBSERVADORA DEL ORDEN',
    frase: 'Supervisa cada proceso con mirada crítica y compromiso firme, asegurando transparencia constante',
    poder: 'VIGILANCIA ESTRATÉGICA',
    especialidad: 'Veeduría'
},

'Carlos Mario Pascuales Martinez': {
    titulo: 'EL MENSAJERO DEL MOVIMIENTO',
    frase: 'Con agilidad y responsabilidad conecta cada punto del sistema manteniendo el flujo activo',
    poder: 'RAPIDEZ LOGÍSTICA',
    especialidad: 'Mensajero'
},

'Deison José Montes Barreto': {
    titulo: 'EL CONQUISTADOR DE SISTEMAS',
    frase: 'Arquitecto del código invisible, forja imperios digitales con cada línea',
    poder: 'TECNOLOGÍA SUPREMA',
    especialidad: 'Sistemas'
},

'Diana Patricia Trespalacio Cervantes': {
    titulo: 'LA LÍDER DE LOS BALANCES',
    frase: 'Dirige el orden financiero con visión amplia y control absoluto de cada detalle contable',
    poder: 'AUTORIDAD CONTABLE',
    especialidad: 'Contador Líder'
},

'Dubis Cristina Lora Mulett': {
    titulo: 'LA GUARDIANA DE COROZAL',
    frase: 'Mantiene firme el flujo financiero con disciplina constante y atención precisa',
    poder: 'CONTROL TERRITORIAL',
    especialidad: 'Cajera Sede Corozal'
},

'Edison Alfredo Montes Santos': {
    titulo: 'EL ARQUITECTO DIGITAL',
    frase: 'Transforma documentos y sistemas en estructuras organizadas que fortalecen la eficiencia tecnológica',
    poder: 'OPTIMIZACIÓN DIGITAL',
    especialidad: 'Digitalización y Soporte'
},

'Edith Burgas Rivero Mercado': {
    titulo: 'LA VOZ DE LA ORIENTACIÓN',
    frase: 'Guía a cada persona con claridad y disposición asegurando información precisa y oportuna',
    poder: 'CLARIDAD INFORMATIVA',
    especialidad: 'Información'
},

'Elcy Sofia Portillo Gomez': {
    titulo: 'LA PROTECTORA DEL ORDEN',
    frase: 'Con determinación inquebrantable mantiene cada espacio en perfecto estado, asegurando bienestar constante',
    poder: 'DEDICACIÓN SUPREMA',
    especialidad: 'Servicios Generales'
},

'Ella Stella Guevara Arrieta': {
    titulo: 'LA CUSTODIA DE LA MEMORIA INSTITUCIONAL',
    frase: 'Preserva cada documento con precisión absoluta, convirtiendo el caos en orden perfecto',
    poder: 'GUARDIÁNA ARCHIVÍSTICA',
    especialidad: 'Archivo'
},

'Eugenio Antonio Calderón Barreto': {
    titulo: 'EL ESCUDO DE LA LEY',
    frase: 'Defiende la justicia con argumentos invencibles, protegiendo cada derecho con sabiduría legal',
    poder: 'DEFENSA JURÍDICA',
    especialidad: 'Abogado'
},

'Fabian Enrique Herrera Zabala': {
    titulo: 'EL CUSTODIO TECNOLÓGICO',
    frase: 'Integra conocimiento digital con disciplina operativa fortaleciendo cada proceso documental',
    poder: 'SOPORTE SISTÉMICO',
    especialidad: 'Digitalizador'
},

'Griselda Jimenez Ricardo': {
    titulo: 'LA GUARDIANA DE SAN MARCOS',
    frase: 'Protege el flujo financiero con lealtad inquebrantable y precisión absoluta en cada transacción',
    poder: 'FORTALEZA TERRITORIAL',
    especialidad: 'Cajera Sede San Marcos'
},

'Herman Enrique Garcia Amador': {
    titulo: 'EL LÍDER DEL HORIZONTE INSTITUCIONAL',
    frase: 'Con visión estratégica dirige el rumbo general impulsando crecimiento y estabilidad organizacional',
    poder: 'VISIÓN EJECUTIVA',
    especialidad: 'Presidente Ejecutivo'
},

'Javier David Rivera Mendez': {
    titulo: 'EL TITÁN TECNOLÓGICO',
    frase: 'Domina la infraestructura digital con maestría absoluta, construyendo fortalezas tecnológicas impenetrables',
    poder: 'INGENIERÍA SUPREMA',
    especialidad: 'Ingeniería de Sistemas'
},

'Jelen Patricia Rodriguez Acuña': {
    titulo: 'LA GUARDIANA DEL ESCUDO DIGITAL',
    frase: 'Protege el reino cibernético con estrategias invencibles, defendiendo cada byte del caos',
    poder: 'SEGURIDAD ABSOLUTA',
    especialidad: 'Seguridad Informática'
},

'Jorge Luis Osorio Herrera': {
    titulo: 'EL CENTINELA DEL SOPORTE',
    frase: 'Mantiene la red funcionando sin descanso, guardián incansable del orden tecnológico',
    poder: 'VIGILANCIA DIGITAL',
    especialidad: 'Auxiliar de Sistemas'
},

'José Joaquin Bitar Gonzalez': {
    titulo: 'EL ESTRATEGA FINANCIERO',
    frase: 'Administra recursos con precisión absoluta asegurando equilibrio y sostenibilidad constante',
    poder: 'GESTIÓN INTEGRAL',
    especialidad: 'Jefe Administrativo y Financiero'
},

'Julio José De la Ossa Franco': {
    titulo: 'EL GUARDIÁN DE LOS REGISTROS',
    frase: 'Inscribe la memoria empresarial con exactitud suprema, convirtiendo libros en historia institucional',
    poder: 'MAESTRO REGISTRAL',
    especialidad: 'Auxiliar de Registro'
},

'Julio Alberto Moralez Martinez': {
    titulo: 'EL DEFENSOR DE LA LEGALIDAD REGISTRAL',
    frase: 'Con conocimiento jurídico absoluto protege cada inscripción bajo el manto de la ley',
    poder: 'AUTORIDAD LEGAL',
    especialidad: 'Abogado de Registro'
},

'Karina Rincón Betruz': {
    titulo: 'LA GUARDIANA DEL RUP',
    frase: 'Supervisa cada inscripción con exactitud garantizando transparencia en cada proceso empresarial',
    poder: 'CONTROL REGISTRAL',
    especialidad: 'Encargada RUP'
},

'Keyla Patricia Quessep Santos': {
    titulo: 'LA FORJADORA DEL TALENTO',
    frase: 'Impulsa el desarrollo humano fortaleciendo capacidades y construyendo equipos sólidos',
    poder: 'GESTIÓN HUMANA',
    especialidad: 'Talento Humano'
},

'Leidys Milena Tejada Bettin': {
    titulo: 'LA MAESTRA DEL ORDEN DOCUMENTAL',
    frase: 'Coordina cada archivo y proceso con disciplina estratégica asegurando trazabilidad y control',
    poder: 'SISTEMA ORGANIZADO',
    especialidad: 'Gestión Documental'
},

'Loannys Maria Ortega Alemán': {
    titulo: 'LA GUARDIANA DEL BALANCE PERFECTO',
    frase: 'Custodia cada cifra con precisión milimétrica, manteniendo el equilibrio financiero inquebrantable',
    poder: 'EXACTITUD ABSOLUTA',
    especialidad: 'Cajera'
},

'Lucila Perez Narvaez': {
    titulo: 'LA DEFENSORA DE REGISTROS Y NOTARIADO',
    frase: 'Protege la autenticidad documental con conocimiento jurídico impecable',
    poder: 'AUTORIDAD NOTARIAL',
    especialidad: 'Abogada de Registro y RNT'
},

'Maira Luz Vargas Meza': {
    titulo: 'LA CENTINELA DE LAS TRANSACCIONES',
    frase: 'Vigila cada movimiento con atención inquebrantable, asegurando confianza en cada operación',
    poder: 'DISCIPLINA FINANCIERA',
    especialidad: 'Cajera'
},

'Maria Bernarda Gonzalez Tamara': {
    titulo: 'LA ARQUITECTA DE CONEXIONES',
    frase: 'Coordina eventos y afiliados con visión estratégica, construyendo puentes de crecimiento institucional',
    poder: 'SINERGIA ORGANIZACIONAL',
    especialidad: 'Coordinadora de Eventos y Afiliados'
},

'Maria Claudia Merlano Marino': {
    titulo: 'LA ESTRATEGA DEL CRECIMIENTO',
    frase: 'Impulsa el desarrollo empresarial conectando oportunidades y fortaleciendo cada servicio institucional',
    poder: 'EXPANSIÓN ORGANIZACIONAL',
    especialidad: 'Jefe de Servicios Empresariales'
},

'Marlon Fabian Del Valle Castillo': {
    titulo: 'EL MAESTRO DE LOS RECURSOS',
    frase: 'Analiza mercados con mente brillante, optimizando cada recurso para el máximo beneficio',
    poder: 'ESTRATEGIA ECONÓMICA',
    especialidad: 'Economista'
},

'Mayra Alejandra Perez Paternina': {
    titulo: 'LA GUÍA DEL CENTRO EMPRESARIAL',
    frase: 'Con liderazgo firme impulsa a emprendedores a conquistar nuevos horizontes convirtiendo proyectos en realidades sólidas',
    poder: 'IMPULSO EMPRESARIAL',
    especialidad: 'Gerente CAE'
},

'Melissa Calderon Arrieta': {
    titulo: 'LA ESTRATEGA DE LA PROSPERIDAD',
    frase: 'Decodifica la economía con visión clara, transformando números en decisiones de alto impacto',
    poder: 'VISIÓN ECONÓMICA',
    especialidad: 'Economista'
},

'Nelcy De Jesús Mercado Vargas': {
    titulo: 'LA GUARDIANA DEL REGISTRO AUXILIAR',
    frase: 'Sostiene la estructura registral con eficiencia constante, asegurando orden en cada inscripción',
    poder: 'SOPORTE REGISTRAL',
    especialidad: 'Auxiliar de Registro'
},

'Oriana Paulina Franco Ordoñez': {
    titulo: 'LA PROTECTORA DE LA LEGALIDAD REGISTRAL',
    frase: 'Defiende cada acto jurídico con precisión absoluta, garantizando validez en cada documento',
    poder: 'ESCUDO LEGAL',
    especialidad: 'Abogada de Registro'
},

'Paola Andrea Diaz Hernandez': {
    titulo: 'LA DEFENSORA DEL ORDEN JURÍDICO',
    frase: 'Con conocimiento legal inquebrantable protege cada registro bajo los principios de justicia',
    poder: 'AUTORIDAD REGISTRAL',
    especialidad: 'Abogada de Registro'
},

'Rafael Gregorio Calderon Arrieta': {
    titulo: 'EL GUARDIÁN DE LA INFRAESTRUCTURA',
    frase: 'Mantiene cada espacio en perfectas condiciones, construyendo estabilidad con manos firmes',
    poder: 'FORTALEZA OPERATIVA',
    especialidad: 'Servicios Generales y Mantenimiento'
},

'Reynel Rubiel Ruiz Pacheco': {
    titulo: 'EL EJECUTOR DE LA RECOMPENSA',
    frase: 'Administra pagos con responsabilidad absoluta, asegurando justicia financiera en cada transacción',
    poder: 'PRECISIÓN DE PAGO',
    especialidad: 'Pagador'
},

'Ricardo Parody Narvaez': {
    titulo: 'EL ESTRATEGA LEGAL DE PROYECTOS',
    frase: 'Fusiona conocimiento jurídico con visión de desarrollo, construyendo proyectos con bases legales sólidas',
    poder: 'ARQUITECTURA LEGAL',
    especialidad: 'Abogado de Registro y Proyectos'
},

'Rosa Maria Gomez Bertel': {
    titulo: 'LA VISIONARIA DE LA ECONOMÍA',
    frase: 'Interpreta tendencias con mente analítica, transformando datos en estrategias de crecimiento',
    poder: 'INTELIGENCIA ECONÓMICA',
    especialidad: 'Economista'
},

'Sandra Milena Martinez Lopez': {
    titulo: 'LA PROTECTORA DEL BIENESTAR',
    frase: 'Con dedicación incansable cuida cada detalle del entorno, creando espacios de excelencia',
    poder: 'COMPROMISO TOTAL',
    especialidad: 'Servicios Generales'
},

'Tania Elizabeth Lenis Suarez': {
    titulo: 'LA COMANDANTE DE LOS REGISTROS PÚBLICOS',
    frase: 'Lidera con autoridad absoluta cada inscripción, asegurando orden perfecto en el sistema registral',
    poder: 'LIDERAZGO REGISTRAL',
    especialidad: 'Jefe de Registros Públicos'
},

'Viviana Quessep Tapias': {
    titulo: 'LA VIGILANTE DEL CONTROL INTERNO',
    frase: 'Analiza cada proceso con objetividad asegurando transparencia y cumplimiento constante',
    poder: 'SUPERVISIÓN ESTRATÉGICA',
    especialidad: 'Control Interno'
},

'Willyam Gregorio Tirado Acosta': {
    titulo: 'EL ANALISTA DE MERCADOS',
    frase: 'Descifra la economía con precisión matemática, proyectando escenarios de éxito institucional',
    poder: 'ANÁLISIS SUPREMO',
    especialidad: 'Economista'
},

'Xiamir Salcedo Monterroza': {
    titulo: 'EL ASESOR DE ALTO IMPACTO',
    frase: 'Brinda orientación especializada transformando consultas en soluciones concretas',
    poder: 'ASESORÍA EXPERTA',
    especialidad: 'Asesor Especializado CAE'
},

'Yajaira Cecilia Acosta Diaz': {
    titulo: 'LA MAESTRA DE LOS NÚMEROS CONTABLES',
    frase: 'Domina balances y registros con precisión perfecta, convirtiendo cifras en verdad financiera',
    poder: 'DOMINIO CONTABLE',
    especialidad: 'Contadora'
},

'Zulis Margoth Hernandez Mercado': {
    titulo: 'LA GUARDIANA DEL FLUJO MONETARIO',
    frase: 'Protege cada transacción con responsabilidad absoluta, manteniendo el balance perfecto',
    poder: 'CUSTODIA FINANCIERA',
    especialidad: 'Cajera'
},

'Sandra Marcela Causado Meza': {
    titulo: 'LA GUARDIANA DEL CENTRO DOCUMENTAL',
    frase: 'Organiza y preserva cada documento con maestría estratégica, construyendo el corazón informativo institucional',
    poder: 'ORDEN DOCUMENTAL',
    especialidad: 'Centro de Atención Documental'
}

};