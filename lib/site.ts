export const siteConfig = {
  name: "Odontologia Ribeiro Naves",
  shortName: "Ribeiro Naves",
  baseUrl: "https://odontologiaribeironaves.com.br",
  phoneDisplay: "(61) 98617-4519",
  phoneRaw: "+5561986174519",
  email: "contato@odontologiaribeironaves.com.br",
  address: {
    street: "QND 01 Lote 20, Sala 05",
    city: "Brasília",
    region: "DF",
    postalCode: "72120-010",
    country: "BR",
    display: "QND 01 Lote 20, Sala 05, Taguatinga, Brasília - DF, 72120-010"
  },
  geo: {
    latitude: -15.8319,
    longitude: -48.0569
  },
  social: {
    instagram: "https://www.instagram.com/odontoribeironaves/"
  },
  whatsappText:
    "Olá, gostaria de agendar uma avaliação na Odontologia Ribeiro Naves."
};

export const dentists = [
  {
    name: "Dr. Ademilson Naves",
    registry: "CRO-DF 3464"
  },
  {
    name: "Dra. Cíntia R. Naves",
    registry: "CRO-DF 3547"
  }
];

export const whatsappUrl = `https://wa.me/${siteConfig.phoneRaw.replace(
  /\D/g,
  ""
)}?text=${encodeURIComponent(siteConfig.whatsappText)}`;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre-a-clinica" },
  { label: "Implantes", href: "/implantes-dentarios-taguatinga" },
  { label: "Lentes", href: "/lentes-de-contato-dental-brasilia" },
  { label: "Alinhadores", href: "/alinhadores-invisiveis-brasilia" },
  { label: "Clareamento", href: "/clareamento-dental-taguatinga" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" }
];

export type BreadcrumbItem = {
  name: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  h1: string;
  eyebrow: string;
  keywords: string;
  image: string;
  benefits: string[];
  process: string[];
  faqs: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "implantes-dentarios-taguatinga",
    title: "Implantes Dentários em Taguatinga | Odontologia Ribeiro Naves",
    shortTitle: "Implantes Dentários",
    description:
      "Implantes dentários em Taguatinga com planejamento criterioso, tecnologia digital e acompanhamento humanizado para recuperar segurança ao mastigar e sorrir.",
    h1: "Implantes dentários em Taguatinga com planejamento seguro",
    eyebrow: "Reabilitação oral",
    keywords: "implantes dentários em Taguatinga, dentista para implante em Brasília",
    image: "/images/implantes.svg",
    benefits: [
      "Planejamento individual para repor dentes perdidos com naturalidade.",
      "Maior firmeza para mastigar, falar e sorrir no dia a dia.",
      "Acompanhamento próximo antes, durante e depois do tratamento."
    ],
    process: [
      "Avaliação clínica completa e solicitação de exames de imagem.",
      "Plano de tratamento considerando saúde gengival, osso e expectativas estéticas.",
      "Instalação do implante e fase de cicatrização acompanhada pela equipe.",
      "Entrega da prótese definitiva com ajustes de conforto e função."
    ],
    faqs: [
      {
        question: "Quem pode fazer implante dentário?",
        answer:
          "A indicação depende da avaliação clínica, exames de imagem, condições ósseas e saúde geral. Na consulta em Taguatinga, a equipe verifica se o implante é a melhor alternativa para o seu caso."
      },
      {
        question: "Implante dentário dói?",
        answer:
          "O procedimento é realizado com anestesia local e planejamento cuidadoso. O pós-operatório costuma ser controlado com orientações e acompanhamento profissional."
      },
      {
        question: "Quanto tempo demora o tratamento com implantes?",
        answer:
          "O tempo varia conforme a necessidade de enxerto, cicatrização e tipo de prótese. Depois da avaliação, você recebe uma previsão realista para o seu tratamento."
      }
    ]
  },
  {
    slug: "lentes-de-contato-dental-brasilia",
    title: "Lentes de Contato Dental em Brasília | Ribeiro Naves",
    shortTitle: "Lentes de Contato Dental",
    description:
      "Lentes de contato dental em Brasília para transformar o sorriso com estética natural, planejamento facial e acabamento premium em Taguatinga.",
    h1: "Lentes de contato dental em Brasília com estética natural",
    eyebrow: "Estética do sorriso",
    keywords: "lentes de contato dental em Brasília, lentes dentais em Taguatinga",
    image: "/images/lentes.svg",
    benefits: [
      "Harmonia de cor, formato e proporção respeitando o seu rosto.",
      "Resultado sofisticado sem aparência artificial.",
      "Planejamento estético para alinhar expectativa e viabilidade clínica."
    ],
    process: [
      "Análise do sorriso, fotografias e conversa sobre objetivos estéticos.",
      "Planejamento de proporção, cor e formato das lentes.",
      "Preparo conservador quando indicado e prova estética.",
      "Cimentação e orientações para preservar brilho, gengiva e longevidade."
    ],
    faqs: [
      {
        question: "Lente de contato dental deixa o sorriso artificial?",
        answer:
          "Não quando há planejamento. O objetivo é criar um sorriso bonito, mas compatível com o formato do rosto, gengiva, lábios e personalidade do paciente."
      },
      {
        question: "Precisa desgastar os dentes?",
        answer:
          "Cada caso é avaliado individualmente. Em muitos planejamentos o preparo é mínimo, mas a indicação depende da posição, cor e formato dos dentes."
      },
      {
        question: "Quanto tempo duram as lentes dentais?",
        answer:
          "Com indicação correta, manutenção periódica e boa higiene, as lentes podem ter excelente longevidade. As consultas de revisão ajudam a preservar o resultado."
      }
    ]
  },
  {
    slug: "alinhadores-invisiveis-brasilia",
    title: "Alinhadores Invisíveis em Brasília | Odontologia Ribeiro Naves",
    shortTitle: "Alinhadores Invisíveis",
    description:
      "Tratamento com alinhadores invisíveis em Brasília para corrigir dentes com conforto, discrição e planejamento digital em Taguatinga.",
    h1: "Alinhadores invisíveis em Brasília para sorrir com discrição",
    eyebrow: "Ortodontia moderna",
    keywords: "alinhadores invisíveis em Brasília, aparelho invisível Taguatinga",
    image: "/images/alinhadores.svg",
    benefits: [
      "Placas transparentes e removíveis para uma rotina mais confortável.",
      "Planejamento digital para visualizar etapas do tratamento.",
      "Menos impacto estético em reuniões, fotos e compromissos sociais."
    ],
    process: [
      "Consulta ortodôntica e avaliação da mordida.",
      "Escaneamento ou registros para planejamento digital.",
      "Entrega dos alinhadores com orientações de uso diário.",
      "Consultas de acompanhamento para monitorar movimentação e refinamentos."
    ],
    faqs: [
      {
        question: "Alinhadores invisíveis substituem aparelho fixo?",
        answer:
          "Em muitos casos sim, mas a indicação depende da mordida, complexidade e disciplina de uso. A avaliação mostra qual caminho oferece mais previsibilidade."
      },
      {
        question: "Quantas horas por dia preciso usar?",
        answer:
          "Geralmente, o uso indicado ocupa grande parte do dia, retirando os alinhadores para comer e higienizar. A equipe orienta a rotina ideal conforme o seu plano."
      },
      {
        question: "O tratamento com alinhadores é mais rápido?",
        answer:
          "Pode ser eficiente quando bem indicado e seguido corretamente. O prazo varia conforme a movimentação necessária e a resposta biológica de cada paciente."
      }
    ]
  },
  {
    slug: "clareamento-dental-taguatinga",
    title: "Clareamento Dental em Taguatinga | Ribeiro Naves",
    shortTitle: "Clareamento Dental",
    description:
      "Clareamento dental em Taguatinga com protocolo profissional, segurança para esmalte e gengiva, e acompanhamento para um sorriso mais luminoso.",
    h1: "Clareamento dental em Taguatinga com segurança e naturalidade",
    eyebrow: "Estética conservadora",
    keywords: "clareamento dental em Taguatinga, clareamento dental Brasília",
    image: "/images/clareamento.svg",
    benefits: [
      "Sorriso mais claro com acompanhamento profissional.",
      "Protocolo personalizado para reduzir sensibilidade.",
      "Resultado elegante, sem exageros e adequado ao seu sorriso."
    ],
    process: [
      "Avaliação de restaurações, manchas, gengiva e sensibilidade.",
      "Escolha do protocolo mais indicado para o seu caso.",
      "Execução monitorada e orientações de cuidados durante o tratamento.",
      "Revisão do resultado e plano de manutenção."
    ],
    faqs: [
      {
        question: "Clareamento dental causa sensibilidade?",
        answer:
          "Pode haver sensibilidade temporária, mas o protocolo profissional considera concentração, tempo de uso e medidas de controle para trazer mais conforto."
      },
      {
        question: "Clareamento enfraquece os dentes?",
        answer:
          "Quando bem indicado e acompanhado por dentista, o clareamento é um procedimento seguro e conservador."
      },
      {
        question: "Restaurações e coroas também clareiam?",
        answer:
          "Não. Materiais restauradores não mudam de cor como o esmalte natural, por isso a avaliação prévia é importante para planejar possíveis ajustes estéticos."
      }
    ]
  }
];

export const testimonials = [
  {
    name: "Marina A.",
    text: "Fui acolhida desde a primeira consulta. O plano foi explicado com clareza e senti muita segurança em cada etapa.",
    treatment: "Implantes dentários"
  },
  {
    name: "Ricardo M.",
    text: "O resultado ficou natural, exatamente como eu queria. Atendimento pontual, equipe atenciosa e ambiente muito confortável.",
    treatment: "Lentes de contato dental"
  },
  {
    name: "Claudia S.",
    text: "Gostei da seriedade da avaliação. Não houve pressa, e sim cuidado para escolher o tratamento certo.",
    treatment: "Alinhadores invisíveis"
  }
];

export const blogPosts = [
  {
    slug: "quando-procurar-implante-dentario-em-taguatinga",
    title: "Quando procurar implante dentário em Taguatinga?",
    description:
      "Entenda sinais de que o implante dentário pode ser indicado e por que a avaliação individual é essencial.",
    date: "2026-06-01"
  },
  {
    slug: "lentes-de-contato-dental-resultado-natural",
    title: "Como ter lentes de contato dental com resultado natural",
    description:
      "Saiba como planejamento facial, cor e proporção influenciam um sorriso elegante e personalizado.",
    date: "2026-05-20"
  },
  {
    slug: "alinhadores-invisiveis-rotina-brasilia",
    title: "Alinhadores invisíveis combinam com rotina corrida?",
    description:
      "Veja como os alinhadores transparentes podem facilitar a ortodontia para adultos em Brasília.",
    date: "2026-05-08"
  }
];
