import { locales, type Locale } from './index';

export type SupplyKind = 'blocks' | 'slabs';
type Product = {
  slug: string; label: string; title: string; description: string; heading: string;
  lead: string; cta: string; selectionTitle: string; steps: [string, string][];
  checklist: string[]; faqTitle: string; faqs: [string, string][]; related: string;
};
type SupplyContent = {
  home: string; navigation: string; breadcrumb: string; languages: string;
  label: string; selection: string; request: string; requestTitle: string;
  requestLead: string; deliveryTitle: string; delivery: string[];
  questions: string; closingTitle: string; closing: string; contact: string;
  homeTitle: string; homeLead: string; homeBlocks: string; homeSlabs: string;
  blocks: Product; slabs: Product;
};

export const supplyContent: Record<Locale, SupplyContent> = {
  fr: {
    home: 'Accueil', navigation: 'Navigation approvisionnement', breadcrumb: 'Fil d’Ariane', languages: 'Langue de la page',
    label: 'Approvisionnement professionnel', selection: 'Préparer votre sélection', request: 'Votre demande',
    requestTitle: 'Les informations à réunir pour un devis',
    requestLead: 'Une demande précise facilite la comparaison des propositions et la préparation de votre commande. Si certains points restent ouverts, indiquez-les dès le premier échange.',
    deliveryTitle: 'Anticiper la réception de la pierre',
    delivery: ['Indiquez l’adresse de destination, les conditions d’accès et les moyens de manutention disponibles. Faites préciser le conditionnement, les responsabilités de transport et les modalités de déchargement dans la proposition commerciale.', 'Les quantités disponibles, les caractéristiques du lot et le calendrier doivent être confirmés avant la commande. Ces éléments permettent de rapprocher l’approvisionnement de votre planning de fabrication.'],
    questions: 'Questions d’achat', closingTitle: 'Présentez-nous votre besoin d’approvisionnement',
    closing: 'Transmettez vos dimensions recherchées, votre quantité et votre destination via le formulaire de contact. Mentionnez les contraintes de votre atelier et les points à confirmer.',
    contact: 'Contacter The Stone Family', homeTitle: 'Préparez votre commande de marbre noir',
    homeLead: 'Gabarits de sciage, dimensions utiles, quantité et destination : retrouvez les informations à réunir pour votre achat.',
    homeBlocks: 'Choisir des blocs', homeSlabs: 'Commander des tranches',
    blocks: {
      slug: 'blocs-marbre-noir', label: 'Blocs de marbre noir', title: 'Blocs de marbre noir pour professionnels',
      description: 'Préparez votre approvisionnement en blocs de marbre noir du Maroc : gabarits, besoins de sciage, quantité et destination. Contactez The Stone Family.',
      heading: 'Choisir ses blocs de marbre noir pour le sciage',
      lead: 'Vous achetez de la matière pour la transformer dans votre atelier ? Préparez votre approvisionnement en blocs de marbre noir du Maroc à partir de vos contraintes de sciage, de vos volumes et de votre destination.',
      cta: 'Demander une proposition pour des blocs', selectionTitle: 'Un achat adapté à votre outil de production',
      steps: [
        ['Définir le gabarit utile', 'Indiquez les dimensions que votre installation peut recevoir et les formats que vous souhaitez obtenir après sciage. Le choix du bloc doit tenir compte de votre équipement, de la manutention et de votre plan de production.'],
        ['Préciser la quantité', 'Exprimez votre besoin en nombre de blocs, en volume ou en tonnage estimé. Distinguez une première commande d’un besoin récurrent et précisez la période de réception souhaitée.'],
        ['Examiner le lot proposé', 'Avant de vous engager, demandez les dimensions relevées, les vues des différentes faces et les informations disponibles sur chaque bloc. Discutez des critères d’acceptation adaptés à votre transformation.'],
      ],
      checklist: ['Activité et équipement de sciage', 'Gabarits minimum et maximum acceptés', 'Nombre de blocs, volume ou tonnage estimé', 'Destination et moyens de déchargement', 'Date souhaitée et fréquence des commandes'],
      faqTitle: 'Acheter des blocs : les points à clarifier',
      faqs: [
        ['Peut-on choisir un bloc uniquement sur son poids ?', 'Le poids donne une indication de quantité, mais les dimensions utiles et l’état du bloc comptent pour votre plan de sciage. Communiquez vos contraintes d’atelier pour préparer une demande exploitable.'],
        ['Quelles dimensions sont disponibles ?', 'Les blocs sont des unités de pierre naturelle : leurs gabarits varient. Les dimensions, quantités et disponibilités doivent être confirmées pour le lot proposé.'],
        ['Comment préparer une demande de prix ?', 'Réunissez vos gabarits, votre quantité estimée, votre destination et votre calendrier. Précisez aussi les opérations de transformation prévues afin de contextualiser votre besoin.'],
      ], related: 'Vous recherchez des tranches déjà sciées ?',
    },
    slabs: {
      slug: 'tranches-marbre-noir', label: 'Tranches de marbre noir', title: 'Tranches de marbre noir pour professionnels',
      description: 'Préparez votre commande de tranches de marbre noir du Maroc : dimensions utiles, épaisseur, finition et surface. Contactez The Stone Family.',
      heading: 'Préparer une commande de tranches de marbre noir',
      lead: 'Pour un atelier de marbrerie ou une activité de distribution, une commande de tranches de marbre noir du Maroc se prépare à partir des dimensions utiles, de la finition attendue et des pièces à réaliser.',
      cta: 'Demander une proposition pour des tranches', selectionTitle: 'Une sélection adaptée à votre fabrication',
      steps: [
        ['Partir du plan de débit', 'La surface totale ne suffit pas à définir une commande. Précisez les dimensions des pièces à fabriquer, les longueurs minimales utiles et les marges nécessaires à la découpe. Vous pourrez ainsi évaluer le lot au regard de votre projet.'],
        ['Définir l’état de surface', 'Indiquez l’épaisseur recherchée et si les tranches doivent être reprises dans votre atelier ou livrées avec une finition déterminée. Faites confirmer les finitions et les tolérances proposées pour votre commande.'],
        ['Valider l’aspect du lot', 'Pour un ensemble de pièces, examinez les tranches dans des conditions de lumière comparables. Un échantillon aide à apprécier la matière et la finition ; demandez également les informations relatives au lot envisagé.'],
      ],
      checklist: ['Surface estimée et dimensions des pièces finales', 'Épaisseur et finition recherchées', 'Dimensions minimales utiles des tranches', 'Besoin d’échantillon et critères visuels', 'Destination et période de réception souhaitée'],
      faqTitle: 'Acheter des tranches : les points à clarifier',
      faqs: [
        ['Faut-il commander uniquement au mètre carré ?', 'Ajoutez les dimensions des pièces à produire et les contraintes de découpe. Deux lots de même surface peuvent offrir des possibilités de débit différentes.'],
        ['Un échantillon représente-t-il toute la commande ?', 'Il permet d’examiner une matière et une finition, mais ne remplace pas la validation du lot. La pierre naturelle présente des variations qu’il faut prendre en compte dans votre sélection.'],
        ['Quels formats et finitions peut-on commander ?', 'Présentez les caractéristiques recherchées à The Stone Family. Les formats, épaisseurs, finitions, quantités et délais seront à confirmer dans la proposition commerciale.'],
      ], related: 'Vous souhaitez scier vous-même des blocs ?',
    },
  },
  en: {
    home: 'Home', navigation: 'Stone supply navigation', breadcrumb: 'Breadcrumb', languages: 'Page language',
    label: 'Stone supply for professionals', selection: 'Prepare your selection', request: 'Your enquiry',
    requestTitle: 'What to include in a quotation request',
    requestLead: 'A clear enquiry makes it easier to compare offers and plan your order. Mention any requirements that still need to be agreed at your first contact.',
    deliveryTitle: 'Plan for receiving the stone',
    delivery: ['Provide the delivery address, access restrictions and handling equipment available. Ask for packaging, transport responsibilities and unloading arrangements to be specified in the commercial offer.', 'Confirm available quantities, lot characteristics and timing before placing an order. Match these details to your fabrication schedule.'],
    questions: 'Purchasing questions', closingTitle: 'Tell us about your supply requirements',
    closing: 'Send your required dimensions, quantity and destination through the contact form. Include workshop constraints and any details that need confirmation.',
    contact: 'Contact The Stone Family', homeTitle: 'Plan your black marble order',
    homeLead: 'Sawing sizes, usable dimensions, quantity and destination: find out what to prepare for your purchase.', homeBlocks: 'Choose blocks', homeSlabs: 'Order slabs',
    blocks: {
      slug: 'black-marble-blocks', label: 'Black marble blocks', title: 'Black marble blocks for professionals',
      description: 'Plan your Moroccan black marble block order: block sizes, sawing requirements, quantity and destination. Contact The Stone Family.',
      heading: 'Choosing black marble blocks for sawing',
      lead: 'Buying stone to process in your workshop? Plan your Moroccan black marble block supply around your sawing equipment, required quantities and destination.',
      cta: 'Request a block supply offer', selectionTitle: 'Choose blocks to suit your production setup',
      steps: [
        ['Define usable block sizes', 'Specify the sizes your equipment can accommodate and the formats you want to produce after sawing. Consider machine capacity, handling arrangements and your production plan.'],
        ['State the quantity required', 'Describe your needs by number of blocks, volume or estimated tonnage. Say whether this is an initial order or a recurring requirement, and give your preferred delivery period.'],
        ['Review the proposed lot', 'Before committing, request measured dimensions, views of the different faces and available details for each block. Discuss acceptance criteria relevant to your processing work.'],
      ],
      checklist: ['Business activity and sawing equipment', 'Minimum and maximum block sizes accepted', 'Number of blocks, volume or estimated tonnage', 'Destination and unloading equipment', 'Preferred date and ordering frequency'],
      faqTitle: 'Buying blocks: details to clarify',
      faqs: [
        ['Can I choose a block by weight alone?', 'Weight indicates quantity, but usable dimensions and block condition also matter for your cutting plan. Share your workshop constraints when preparing your enquiry.'],
        ['Which block sizes are available?', 'Natural stone blocks vary in size. Confirm dimensions, quantities and availability for the specific lot offered.'],
        ['How do I request a price?', 'Provide required sizes, estimated quantity, destination and timing. Explain the processing operations you plan to carry out.'],
      ], related: 'Looking for slabs that have already been sawn?',
    },
    slabs: {
      slug: 'black-marble-slabs', label: 'Black marble slabs', title: 'Black marble slabs for professionals',
      description: 'Plan your Moroccan black marble slab order: usable dimensions, thickness, finish and area. Contact The Stone Family for your supply requirements.',
      heading: 'Preparing a black marble slab order',
      lead: 'For fabrication workshops and stone distributors, a Moroccan black marble slab order starts with usable dimensions, the required finish and the pieces to be produced.',
      cta: 'Request a slab supply offer', selectionTitle: 'Select slabs around your fabrication needs',
      steps: [
        ['Start with your cutting plan', 'Total area alone does not define an order. Specify finished piece dimensions, minimum usable lengths and cutting allowances so you can assess the lot against your requirements.'],
        ['Specify the surface finish', 'State the required thickness and whether you will process the slabs further or need a particular finish. Confirm the finishes and tolerances offered for your order.'],
        ['Check the appearance of the lot', 'For a set of pieces, examine slabs under comparable lighting. A sample helps you assess the stone and finish; also ask for information about the actual lot being offered.'],
      ],
      checklist: ['Estimated area and finished piece dimensions', 'Required thickness and finish', 'Minimum usable slab dimensions', 'Sample requirements and visual criteria', 'Destination and preferred delivery period'],
      faqTitle: 'Buying slabs: details to clarify',
      faqs: [
        ['Is ordering by square metre enough?', 'Include piece dimensions and cutting constraints. Two lots with the same area may allow different cutting layouts.'],
        ['Does a sample represent the whole order?', 'It helps you examine the stone and finish, but does not replace approval of the actual lot. Allow for natural stone variations in your selection.'],
        ['Which formats and finishes can I order?', 'Describe your requirements to The Stone Family. Confirm formats, thicknesses, finishes, quantities and lead times in the commercial offer.'],
      ], related: 'Would you prefer to saw blocks in your own workshop?',
    },
  },
  it: {
    home: 'Home', navigation: 'Navigazione approvvigionamento', breadcrumb: 'Percorso di navigazione', languages: 'Lingua della pagina',
    label: 'Approvvigionamento per professionisti', selection: 'Preparare la selezione', request: 'La vostra richiesta',
    requestTitle: 'Le informazioni necessarie per un preventivo',
    requestLead: 'Una richiesta precisa facilita il confronto delle offerte e la preparazione dell’ordine. Segnalate fin dal primo contatto gli aspetti ancora da definire.',
    deliveryTitle: 'Pianificare la ricezione della pietra',
    delivery: ['Indicate l’indirizzo di destinazione, le condizioni di accesso e le attrezzature di movimentazione disponibili. Chiedete di specificare nell’offerta l’imballaggio, le responsabilità del trasporto e le modalità di scarico.', 'Confermate quantità disponibili, caratteristiche del lotto e tempi prima dell’ordine, per coordinare l’approvvigionamento con il programma di lavorazione.'],
    questions: 'Domande sull’acquisto', closingTitle: 'Descrivete le vostre esigenze di approvvigionamento',
    closing: 'Inviate dimensioni richieste, quantità e destinazione tramite il modulo di contatto. Indicate i vincoli del laboratorio e i punti da confermare.',
    contact: 'Contattare The Stone Family', homeTitle: 'Preparate il vostro ordine di marmo nero',
    homeLead: 'Ingombri per il taglio, dimensioni utili, quantità e destinazione: le informazioni da preparare per l’acquisto.', homeBlocks: 'Scegliere i blocchi', homeSlabs: 'Ordinare le lastre',
    blocks: {
      slug: 'blocchi-marmo-nero', label: 'Blocchi di marmo nero', title: 'Blocchi di marmo nero per professionisti',
      description: 'Preparate l’acquisto di blocchi di marmo nero del Marocco: dimensioni, esigenze di segagione, quantità e destinazione. Contattate The Stone Family.',
      heading: 'Scegliere i blocchi di marmo nero per la segagione',
      lead: 'Acquistate pietra da trasformare nel vostro laboratorio? Organizzate l’approvvigionamento di blocchi di marmo nero del Marocco in base alle attrezzature di taglio, ai volumi e alla destinazione.',
      cta: 'Richiedere un’offerta per i blocchi', selectionTitle: 'Un acquisto adatto alle vostre attrezzature',
      steps: [
        ['Definire le dimensioni utili', 'Indicate gli ingombri accettati dall’impianto e i formati da ottenere dopo la segagione. Considerate la capacità delle macchine, la movimentazione e il piano di produzione.'],
        ['Precisare la quantità', 'Esprimete il fabbisogno in numero di blocchi, volume o tonnellaggio stimato. Distinguete un primo ordine da una fornitura ricorrente e indicate il periodo di ricezione desiderato.'],
        ['Esaminare il lotto proposto', 'Prima di impegnarvi, chiedete dimensioni rilevate, immagini delle diverse facce e informazioni disponibili per ogni blocco. Concordate criteri di accettazione adatti alla lavorazione prevista.'],
      ],
      checklist: ['Attività e attrezzature di segagione', 'Dimensioni minime e massime accettate', 'Numero di blocchi, volume o tonnellaggio stimato', 'Destinazione e mezzi di scarico', 'Data desiderata e frequenza degli ordini'],
      faqTitle: 'Acquistare blocchi: i punti da chiarire',
      faqs: [
        ['Si può scegliere un blocco soltanto in base al peso?', 'Il peso indica la quantità, ma dimensioni utili e condizioni del blocco contano per il piano di taglio. Comunicate i vincoli del laboratorio nella richiesta.'],
        ['Quali dimensioni sono disponibili?', 'I blocchi di pietra naturale hanno dimensioni variabili. Misure, quantità e disponibilità vanno confermate per il lotto proposto.'],
        ['Come richiedere un prezzo?', 'Riunite dimensioni richieste, quantità stimata, destinazione e calendario. Descrivete anche le lavorazioni previste.'],
      ], related: 'Cercate lastre già segate?',
    },
    slabs: {
      slug: 'lastre-marmo-nero', label: 'Lastre di marmo nero', title: 'Lastre di marmo nero per professionisti',
      description: 'Preparate un ordine di lastre di marmo nero del Marocco: dimensioni utili, spessore, finitura e superficie. Contattate The Stone Family.',
      heading: 'Preparare un ordine di lastre di marmo nero',
      lead: 'Per un laboratorio di lavorazione o un distributore, l’ordine di lastre di marmo nero del Marocco parte dalle dimensioni utili, dalla finitura richiesta e dai pezzi da realizzare.',
      cta: 'Richiedere un’offerta per le lastre', selectionTitle: 'Una selezione adatta alla vostra lavorazione',
      steps: [
        ['Partire dal piano di taglio', 'La superficie totale non basta a definire l’ordine. Indicate dimensioni dei pezzi finiti, lunghezze minime utili e margini di taglio per valutare il lotto rispetto alle vostre esigenze.'],
        ['Definire la finitura superficiale', 'Precisate lo spessore richiesto e se le lastre saranno rilavorate in laboratorio o dovranno avere una finitura specifica. Fate confermare finiture e tolleranze dell’ordine.'],
        ['Verificare l’aspetto del lotto', 'Per un insieme di pezzi, esaminate le lastre con illuminazione comparabile. Un campione aiuta a valutare pietra e finitura; chiedete anche informazioni sul lotto effettivamente proposto.'],
      ],
      checklist: ['Superficie stimata e dimensioni dei pezzi finiti', 'Spessore e finitura richiesti', 'Dimensioni minime utili delle lastre', 'Esigenze di campionatura e criteri visivi', 'Destinazione e periodo di ricezione desiderato'],
      faqTitle: 'Acquistare lastre: i punti da chiarire',
      faqs: [
        ['Basta ordinare al metro quadrato?', 'Aggiungete dimensioni dei pezzi e vincoli di taglio. Due lotti della stessa superficie possono consentire schemi di taglio diversi.'],
        ['Un campione rappresenta l’intero ordine?', 'Serve a esaminare pietra e finitura, ma non sostituisce l’approvazione del lotto. Considerate le variazioni della pietra naturale nella selezione.'],
        ['Quali formati e finiture si possono ordinare?', 'Descrivete le caratteristiche richieste a The Stone Family. Formati, spessori, finiture, quantità e tempi vanno confermati nell’offerta commerciale.'],
      ], related: 'Preferite segare i blocchi nel vostro laboratorio?',
    },
  },
  es: {
    home: 'Inicio', navigation: 'Navegación de suministro', breadcrumb: 'Ruta de navegación', languages: 'Idioma de la página',
    label: 'Suministro para profesionales', selection: 'Prepare su selección', request: 'Su consulta',
    requestTitle: 'Información necesaria para solicitar un presupuesto',
    requestLead: 'Una consulta precisa facilita la comparación de ofertas y la preparación del pedido. Indique desde el primer contacto los aspectos que aún deban acordarse.',
    deliveryTitle: 'Planifique la recepción de la piedra',
    delivery: ['Indique la dirección de destino, las condiciones de acceso y los equipos de manipulación disponibles. Solicite que la oferta especifique el embalaje, las responsabilidades del transporte y las condiciones de descarga.', 'Confirme las cantidades disponibles, las características del lote y los plazos antes de realizar el pedido. Coordine estos datos con su calendario de fabricación.'],
    questions: 'Preguntas de compra', closingTitle: 'Cuéntenos sus necesidades de suministro',
    closing: 'Envíe las dimensiones requeridas, la cantidad y el destino mediante el formulario de contacto. Incluya las limitaciones de su taller y los puntos pendientes de confirmar.',
    contact: 'Contactar con The Stone Family', homeTitle: 'Prepare su pedido de mármol negro',
    homeLead: 'Tamaños para el aserrado, dimensiones útiles, cantidad y destino: la información que debe reunir para su compra.', homeBlocks: 'Elegir bloques', homeSlabs: 'Pedir tablas',
    blocks: {
      slug: 'bloques-marmol-negro', label: 'Bloques de mármol negro', title: 'Bloques de mármol negro para profesionales',
      description: 'Prepare su compra de bloques de mármol negro de Marruecos: tamaños, requisitos de aserrado, cantidad y destino. Contacte con The Stone Family.',
      heading: 'Elegir bloques de mármol negro para el aserrado',
      lead: '¿Compra piedra para transformarla en su taller? Planifique el suministro de bloques de mármol negro de Marruecos según su equipo de aserrado, sus volúmenes y el destino.',
      cta: 'Solicitar una oferta de bloques', selectionTitle: 'Una compra adaptada a su equipo de producción',
      steps: [
        ['Definir las dimensiones útiles', 'Indique los tamaños que admite su instalación y los formatos que desea obtener tras el aserrado. Considere la capacidad de las máquinas, la manipulación y su plan de producción.'],
        ['Precisar la cantidad', 'Exprese su necesidad en número de bloques, volumen o tonelaje estimado. Distinga un primer pedido de un suministro recurrente e indique el periodo de recepción deseado.'],
        ['Revisar el lote propuesto', 'Antes de comprometerse, solicite las dimensiones medidas, imágenes de las distintas caras y los datos disponibles de cada bloque. Acuerde criterios de aceptación adecuados a su transformación.'],
      ],
      checklist: ['Actividad y equipo de aserrado', 'Dimensiones mínimas y máximas admitidas', 'Número de bloques, volumen o tonelaje estimado', 'Destino y medios de descarga', 'Fecha deseada y frecuencia de pedidos'],
      faqTitle: 'Comprar bloques: puntos que debe aclarar',
      faqs: [
        ['¿Se puede elegir un bloque solo por su peso?', 'El peso indica cantidad, pero las dimensiones útiles y el estado del bloque también cuentan para el plan de corte. Comunique las limitaciones de su taller al preparar la consulta.'],
        ['¿Qué dimensiones están disponibles?', 'Los bloques de piedra natural tienen tamaños variables. Confirme dimensiones, cantidades y disponibilidad para el lote propuesto.'],
        ['¿Cómo solicitar un precio?', 'Reúna las dimensiones requeridas, la cantidad estimada, el destino y el calendario. Describa también las operaciones de transformación previstas.'],
      ], related: '¿Busca tablas ya aserradas?',
    },
    slabs: {
      slug: 'tablas-marmol-negro', label: 'Tablas de mármol negro', title: 'Tablas de mármol negro para profesionales',
      description: 'Prepare su pedido de tablas de mármol negro de Marruecos: dimensiones útiles, espesor, acabado y superficie. Contacte con The Stone Family.',
      heading: 'Preparar un pedido de tablas de mármol negro',
      lead: 'Para un taller de elaboración o una empresa distribuidora, un pedido de tablas de mármol negro de Marruecos parte de las dimensiones útiles, el acabado requerido y las piezas que se van a fabricar.',
      cta: 'Solicitar una oferta de tablas', selectionTitle: 'Una selección adaptada a su fabricación',
      steps: [
        ['Partir del plan de corte', 'La superficie total no basta para definir el pedido. Indique las dimensiones de las piezas finales, las longitudes mínimas útiles y los márgenes de corte para evaluar el lote según sus necesidades.'],
        ['Definir el acabado superficial', 'Precise el espesor requerido y si las tablas se trabajarán de nuevo en su taller o deben llegar con un acabado determinado. Confirme los acabados y las tolerancias de su pedido.'],
        ['Validar el aspecto del lote', 'Para un conjunto de piezas, examine las tablas con una iluminación comparable. Una muestra ayuda a valorar la piedra y el acabado; solicite también información sobre el lote que se ofrece.'],
      ],
      checklist: ['Superficie estimada y dimensiones de las piezas finales', 'Espesor y acabado requeridos', 'Dimensiones mínimas útiles de las tablas', 'Necesidad de muestras y criterios visuales', 'Destino y periodo de recepción deseado'],
      faqTitle: 'Comprar tablas: puntos que debe aclarar',
      faqs: [
        ['¿Basta con pedir por metro cuadrado?', 'Añada las dimensiones de las piezas y las limitaciones de corte. Dos lotes con la misma superficie pueden permitir distribuciones de corte distintas.'],
        ['¿Una muestra representa todo el pedido?', 'Ayuda a examinar la piedra y el acabado, pero no sustituye la aprobación del lote real. Tenga en cuenta las variaciones de la piedra natural al seleccionar.'],
        ['¿Qué formatos y acabados se pueden pedir?', 'Describa sus requisitos a The Stone Family. Confirme los formatos, espesores, acabados, cantidades y plazos en la oferta comercial.'],
      ], related: '¿Prefiere aserrar bloques en su propio taller?',
    },
  },
  ar: {
    home: 'الرئيسية', navigation: 'التنقل بين صفحات التوريد', breadcrumb: 'مسار التنقل', languages: 'لغة الصفحة',
    label: 'توريد الرخام للمهنيين', selection: 'التحضير لاختيار الحجر', request: 'طلبكم',
    requestTitle: 'المعلومات اللازمة لطلب عرض سعر',
    requestLead: 'يسهّل الطلب الواضح مقارنة العروض والتحضير للشراء. اذكروا منذ التواصل الأول النقاط التي لا تزال بحاجة إلى اتفاق أو تأكيد.',
    deliveryTitle: 'التخطيط لاستلام الحجر',
    delivery: ['حدّدوا عنوان الوجهة وشروط الوصول ومعدات المناولة المتاحة. اطلبوا توضيح التغليف ومسؤوليات النقل وترتيبات التفريغ في العرض التجاري.', 'يجب تأكيد الكميات المتاحة وخصائص الدفعة والمواعيد قبل الشراء، حتى يتوافق التوريد مع برنامج التصنيع لديكم.'],
    questions: 'أسئلة حول الشراء', closingTitle: 'أخبرونا باحتياجاتكم من الرخام',
    closing: 'أرسلوا الأبعاد المطلوبة والكمية والوجهة عبر نموذج التواصل. اذكروا قيود الورشة والنقاط التي تحتاج إلى تأكيد.',
    contact: 'التواصل مع The Stone Family', homeTitle: 'حضّروا طلبكم من الرخام الأسود',
    homeLead: 'أبعاد النشر والأبعاد القابلة للاستخدام والكمية والوجهة: تعرّفوا على المعلومات اللازمة للتحضير للشراء.', homeBlocks: 'اختيار الكتل', homeSlabs: 'طلب الألواح',
    blocks: {
      slug: 'black-marble-blocks', label: 'كتل الرخام الأسود', title: 'كتل الرخام الأسود للمهنيين',
      description: 'حضّروا شراء كتل الرخام الأسود المغربي: الأبعاد ومتطلبات النشر والكمية والوجهة. تواصلوا مع The Stone Family لتحديد احتياجاتكم.',
      heading: 'اختيار كتل الرخام الأسود للنشر',
      lead: 'هل تشترون الحجر لتصنيعه في ورشتكم؟ خطّطوا لتوريد كتل الرخام الأسود المغربي وفق معدات النشر والكميات المطلوبة ووجهة التسليم.',
      cta: 'طلب عرض لتوريد الكتل', selectionTitle: 'شراء يتناسب مع معدات الإنتاج لديكم',
      steps: [
        ['تحديد الأبعاد القابلة للاستخدام', 'اذكروا الأبعاد التي تستوعبها معداتكم والمقاسات التي ترغبون في الحصول عليها بعد النشر. راعوا قدرة الآلات وشروط المناولة وخطة الإنتاج.'],
        ['تحديد الكمية المطلوبة', 'عبّروا عن احتياجاتكم بعدد الكتل أو الحجم أو الوزن التقديري بالأطنان. وضّحوا إن كان الطلب الأول أو توريدًا متكررًا وحدّدوا فترة الاستلام المطلوبة.'],
        ['فحص الدفعة المقترحة', 'قبل الالتزام بالشراء، اطلبوا الأبعاد المقاسة وصور مختلف الأوجه والمعلومات المتاحة عن كل كتلة. ناقشوا معايير القبول المناسبة لأعمال التصنيع لديكم.'],
      ],
      checklist: ['النشاط ومعدات نشر الحجر', 'الحد الأدنى والأقصى للأبعاد المقبولة', 'عدد الكتل أو الحجم أو الوزن التقديري', 'الوجهة ومعدات التفريغ', 'موعد الاستلام المطلوب وتكرار الطلبات'],
      faqTitle: 'شراء الكتل: نقاط ينبغي توضيحها',
      faqs: [
        ['هل يمكن اختيار الكتلة حسب وزنها فقط؟', 'يعطي الوزن مؤشرًا على الكمية، لكن الأبعاد القابلة للاستخدام وحالة الكتلة مهمّان لخطة النشر. اذكروا قيود الورشة عند إعداد طلبكم.'],
        ['ما الأبعاد المتاحة؟', 'تختلف أبعاد كتل الحجر الطبيعي. يجب تأكيد الأبعاد والكميات والتوافر للدفعة المعروضة تحديدًا.'],
        ['كيف نطلب عرض سعر؟', 'حدّدوا الأبعاد المطلوبة والكمية التقديرية والوجهة والمواعيد. اشرحوا أيضًا عمليات التصنيع التي تنوون تنفيذها.'],
      ], related: 'هل تبحثون عن ألواح منشورة مسبقًا؟',
    },
    slabs: {
      slug: 'black-marble-slabs', label: 'ألواح الرخام الأسود', title: 'ألواح الرخام الأسود للمهنيين',
      description: 'حضّروا طلب ألواح الرخام الأسود المغربي: الأبعاد القابلة للاستخدام والسماكة والتشطيب والمساحة. تواصلوا مع The Stone Family.',
      heading: 'التحضير لطلب ألواح الرخام الأسود',
      lead: 'بالنسبة إلى ورش تصنيع الرخام والموزعين، يبدأ طلب ألواح الرخام الأسود المغربي بتحديد الأبعاد القابلة للاستخدام والتشطيب المطلوب والقطع المراد تصنيعها.',
      cta: 'طلب عرض لتوريد الألواح', selectionTitle: 'اختيار يناسب أعمال التصنيع لديكم',
      steps: [
        ['الانطلاق من خطة التقطيع', 'لا تكفي المساحة الإجمالية وحدها لتحديد الطلب. اذكروا أبعاد القطع النهائية والأطوال الدنيا القابلة للاستخدام وهوامش التقطيع لتقييم الدفعة وفق احتياجاتكم.'],
        ['تحديد تشطيب السطح', 'حدّدوا السماكة المطلوبة وما إذا كانت الألواح ستُعاد معالجتها في ورشتكم أو يجب أن تُسلَّم بتشطيب معيّن. اطلبوا تأكيد التشطيبات وتفاوتات الأبعاد الخاصة بطلبكم.'],
        ['التحقق من مظهر الدفعة', 'لإنتاج مجموعة من القطع، افحصوا الألواح تحت إضاءة متقاربة. تساعد العينة في تقييم الحجر والتشطيب، لكن اطلبوا أيضًا معلومات عن الدفعة الفعلية المقترحة.'],
      ],
      checklist: ['المساحة التقديرية وأبعاد القطع النهائية', 'السماكة والتشطيب المطلوبان', 'الأبعاد الدنيا القابلة للاستخدام للألواح', 'الحاجة إلى عينات ومعايير المظهر', 'الوجهة وفترة الاستلام المطلوبة'],
      faqTitle: 'شراء الألواح: نقاط ينبغي توضيحها',
      faqs: [
        ['هل يكفي الطلب بالمتر المربع؟', 'أضيفوا أبعاد القطع وقيود التقطيع. قد تتيح دفعتان لهما المساحة نفسها خطط تقطيع مختلفة.'],
        ['هل تمثّل العينة الطلب كاملًا؟', 'تساعد في فحص الحجر والتشطيب، لكنها لا تحل محل اعتماد الدفعة الفعلية. يجب مراعاة الاختلافات الطبيعية في الحجر عند الاختيار.'],
        ['ما المقاسات والتشطيبات التي يمكن طلبها؟', 'قدّموا احتياجاتكم إلى The Stone Family. يجب تأكيد المقاسات والسماكات والتشطيبات والكميات والمواعيد في العرض التجاري.'],
      ], related: 'هل تفضّلون نشر الكتل في ورشتكم؟',
    },
  },
};

export function supplyUrl(locale: Locale, kind: SupplyKind) {
  return `${locale === 'fr' ? '/' : `/${locale}/`}${supplyContent[locale][kind].slug}/`;
}

export function supplyAlternates(kind: SupplyKind): Record<Locale, string> {
  return Object.fromEntries(locales.map(locale => [locale, supplyUrl(locale, kind)])) as Record<Locale, string>;
}
