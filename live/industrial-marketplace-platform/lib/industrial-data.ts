export type City = {
  id: string
  name: string
  subtitle: string
  region: string
  image: string
  investment: string
  employees: string
  factories: string
  growth: string
  tag: string
  description: string
}

export const cities: City[] = [
  {
    id: "tanger-med",
    name: "طنجة المتوسط",
    subtitle: "المنطقة الصناعية اللوجستية",
    region: "طنجة - تطوان - الحسيمة",
    image: "/cities/tanger-med.jpg",
    investment: "120",
    employees: "95K",
    factories: "1100",
    growth: "18",
    tag: "اللوجستيك والسيارات",
    description:
      "أول ميناء متوسطي في إفريقيا، وبوابة المغرب الصناعية نحو أوروبا والعالم، يحتضن منطقة حرة تستقطب كبرى شركات السيارات والطيران.",
  },
  {
    id: "kenitra",
    name: "القنيطرة أتلانتيك",
    subtitle: "المنطقة الحرة للسيارات",
    region: "الرباط - سلا - القنيطرة",
    image: "/cities/kenitra.jpg",
    investment: "85",
    employees: "42K",
    factories: "380",
    growth: "22",
    tag: "صناعة السيارات",
    description:
      "قاطرة صناعة السيارات في المغرب، تضم وحدات إنتاج ستيلانتيس ومعامل التجهيزات بتقنيات الجيل الرابع.",
  },
  {
    id: "casablanca",
    name: "الدار البيضاء",
    subtitle: "العاصمة الاقتصادية",
    region: "الدار البيضاء - سطات",
    image: "/cities/casablanca.jpg",
    investment: "210",
    employees: "220K",
    factories: "3400",
    growth: "12",
    tag: "صناعات متنوعة",
    description:
      "القلب النابض للصناعة المغربية، تحتضن أكبر تجمعات صناعية في المملكة من الإلكترونيات إلى الصناعات الغذائية.",
  },
  {
    id: "jorf-lasfar",
    name: "الجرف الأصفر",
    subtitle: "المنصة الكيميائية والطاقية",
    region: "الدار البيضاء - سطات",
    image: "/cities/jorf-lasfar.jpg",
    investment: "95",
    employees: "38K",
    factories: "210",
    growth: "15",
    tag: "الفوسفاط والطاقة",
    description:
      "أكبر مجمع للصناعات الكيميائية والفوسفاطية في المملكة، ومنصة تصدير استراتيجية للمكتب الشريف للفوسفاط.",
  },
  {
    id: "mohammedia",
    name: "المحمدية",
    subtitle: "المنطقة البتروكيماوية",
    region: "الدار البيضاء - سطات",
    image: "/cities/mohammedia.jpg",
    investment: "48",
    employees: "18K",
    factories: "165",
    growth: "9",
    tag: "البتروكيماويات",
    description:
      "القطب الوطني لتكرير المحروقات والصناعات البتروكيماوية، مجهزة بأحدث البنيات التحتية اللوجستية.",
  },
  {
    id: "agadir",
    name: "أكادير",
    subtitle: "المنطقة الفلاحية والبحرية",
    region: "سوس - ماسة",
    image: "/cities/agadir.jpg",
    investment: "32",
    employees: "68K",
    factories: "540",
    growth: "14",
    tag: "الصناعات الغذائية",
    description:
      "قطب وطني لتثمين المنتجات البحرية والفلاحية، ومركز تصدير زيت الأركان والحوامض نحو الأسواق الدولية.",
  },
  {
    id: "oujda",
    name: "وجدة - التكنوبول",
    subtitle: "منطقة الطاقات المتجددة",
    region: "الشرق",
    image: "/cities/oujda.jpg",
    investment: "28",
    employees: "22K",
    factories: "180",
    growth: "24",
    tag: "الطاقة المتجددة",
    description:
      "تكنوبول الشرق وواحة الطاقات المتجددة، يحتضن مشاريع الطاقة الشمسية والريحية ومراكز البحث والتطوير.",
  },
]

export type Sector = {
  id: string
  title: string
  titleEn: string
  description: string
  image: string
  growth: string
  investment: string
  employees: string
  factories: string
  subSectors: string[]
}

export const sectors: Sector[] = [
  {
    id: "automotive",
    title: "صناعة السيارات",
    titleEn: "Automotive Industry",
    description:
      "القطاع الرائد في الصناعات التصديرية المغربية، يوفر المملكة كمنصة إنتاج عالمية للسيارات الكهربائية ومكوناتها.",
    image: "/sectors/automotive.jpg",
    growth: "+22%",
    investment: "110B",
    employees: "220K",
    factories: "260",
    subSectors: ["السيارات الكهربائية", "قطع الغيار", "البطاريات", "الكابلاج"],
  },
  {
    id: "aeronautics",
    title: "صناعة الطيران",
    titleEn: "Aeronautics",
    description:
      "قطاع استراتيجي يضم أكثر من 140 شركة عالمية، ويساهم في سلاسل التوريد العالمية لإيرباص وبوينغ وسافران.",
    image: "/sectors/aeronautics.jpg",
    growth: "+18%",
    investment: "24B",
    employees: "22K",
    factories: "142",
    subSectors: ["الهياكل", "المحركات", "الإلكترونيات الجوية", "الصيانة"],
  },
  {
    id: "phosphate",
    title: "الفوسفاط والصناعات الكيميائية",
    titleEn: "Phosphates & Chemicals",
    description:
      "المغرب يمتلك أكبر احتياطي عالمي للفوسفاط، ركيزة الأمن الغذائي العالمي ومصدر الأسمدة لأكثر من 160 دولة.",
    image: "/sectors/phosphate.jpg",
    growth: "+14%",
    investment: "180B",
    employees: "85K",
    factories: "95",
    subSectors: ["الفوسفاط الخام", "الأسمدة", "حمض الفوسفور", "الكيماويات"],
  },
  {
    id: "textiles",
    title: "النسيج والجلد",
    titleEn: "Textiles & Leather",
    description:
      "قطاع تقليدي بعمق صناعي حديث، يصدر منتجاته نحو كبرى الماركات العالمية ويساهم في سلاسل الموضة السريعة.",
    image: "/sectors/textiles.jpg",
    growth: "+8%",
    investment: "35B",
    employees: "190K",
    factories: "1600",
    subSectors: ["الألبسة الجاهزة", "الجلد", "النسيج التقني", "الموضة"],
  },
  {
    id: "renewable",
    title: "الطاقات المتجددة",
    titleEn: "Renewable Energy",
    description:
      "المغرب رائد إفريقي في الانتقال الطاقي، بمحطة نور ورزازات وطموح الوصول إلى 52% من الكهرباء من مصادر متجددة.",
    image: "/sectors/renewable.jpg",
    growth: "+26%",
    investment: "140B",
    employees: "18K",
    factories: "64",
    subSectors: ["الطاقة الشمسية", "الطاقة الريحية", "الهيدروجين الأخضر", "التخزين"],
  },
  {
    id: "food",
    title: "الصناعات الغذائية",
    titleEn: "Food Industry",
    description:
      "تثمين للمنتجات الفلاحية والبحرية المغربية الأصيلة، من زيت الأركان إلى الحوامض ومنتجات الصيد البحري.",
    image: "/sectors/food.jpg",
    growth: "+11%",
    investment: "68B",
    employees: "160K",
    factories: "2100",
    subSectors: ["الأركان", "الحوامض", "المنتجات البحرية", "الزيوت والألبان"],
  },
]

export type Partner = {
  id: string
  title: string
  subtitle: string
  count: string
  countLabel: string
  description: string
  icon: "factory" | "handshake" | "graduation" | "users" | "link" | "globe"
  featured?: boolean
}

export const partners: Partner[] = [
  {
    id: "investors",
    title: "المستثمرون",
    subtitle: "Investors",
    count: "+2,500",
    countLabel: "مستثمر",
    description:
      "ابدأ مشروعك الصناعي في المملكة المغربية بخطوات ميسّرة ودعم متكامل من الفكرة حتى التشغيل.",
    icon: "factory",
    featured: true,
  },
  {
    id: "services",
    title: "مقدمو الخدمات",
    subtitle: "Service Providers",
    count: "+500",
    countLabel: "مقدم خدمة",
    description: "انضم لشبكة مقدمي الخدمات الصناعية المعتمدين واعرض خدماتك لآلاف المستثمرين.",
    icon: "handshake",
  },
  {
    id: "experts",
    title: "الخبراء",
    subtitle: "Experts",
    count: "+300",
    countLabel: "خبير",
    description: "قدّم استشاراتك الفنية للمصانع والمستثمرين وكن جزءًا من مسيرة التصنيع المغربي.",
    icon: "graduation",
  },
  {
    id: "supervisors",
    title: "المشرفون",
    subtitle: "Supervisors",
    count: "+150",
    countLabel: "مشرف",
    description: "انضم لفريق المشرفين الصناعيين المتخصصين في تأطير ومتابعة المشاريع التصنيعية.",
    icon: "users",
  },
  {
    id: "supply",
    title: "سلاسل الإمداد",
    subtitle: "Supply Chains",
    count: "+85",
    countLabel: "شركة إمداد",
    description: "تحسين وتطوير سلاسل الإمداد لرفع كفاءة العمليات الصناعية وربط الموردين بالمصانع.",
    icon: "link",
  },
  {
    id: "distributors",
    title: "الموزعون الدوليون",
    subtitle: "International Distributors",
    count: "+120",
    countLabel: "قناة دولية",
    description: "ربط المنتج المغربي بالأسواق العالمية وتوسيع نطاق التوزيع نحو إفريقيا وأوروبا.",
    icon: "globe",
  },
]

export type Faq = {
  id: string
  question: string
  answer: string
  benefits: string[]
  steps: string[]
}

export const faqs: Faq[] = [
  {
    id: "licence",
    question: "كم تستغرق إجراءات الترخيص الصناعي؟",
    answer:
      "تستغرق إجراءات الترخيص الصناعي في المغرب عادةً ما بين 2 و 4 أسابيع حسب نوع النشاط والموقع الجغرافي. نُسرّع هذه العملية عبر شراكاتنا مع المركز الجهوي للاستثمار (CRI) والوكالات المعنية، مع ضمان الامتثال الكامل للمتطلبات والمعايير القانونية المغربية.",
    benefits: ["وقت قياسي", "إجراءات مبسطة", "متابعة مستمرة"],
    steps: ["جمع الوثائق", "تقديم الطلب للمركز الجهوي", "المتابعة", "التسليم"],
  },
  {
    id: "financing",
    question: "ما هي آليات التمويل المتاحة للمشاريع الصناعية؟",
    answer:
      "يوفر المغرب باقة متنوعة من آليات التمويل تشمل صندوق محمد السادس للاستثمار، وبرامج ماروك PME، وقروض بنك المغرب، بالإضافة إلى صيغ التمويل التشاركي ومنح خطة التسريع الصناعي. نساعدك في اختيار الحزمة الأنسب لمشروعك.",
    benefits: ["خيارات متعددة", "فوائد تنافسية", "دعم حكومي"],
    steps: ["تقييم المشروع", "اختيار الصيغة", "إعداد الملف", "التعاقد"],
  },
  {
    id: "incentives",
    question: "ما الحوافز الضريبية للمستثمرين الصناعيين؟",
    answer:
      "يمنح ميثاق الاستثمار المغربي الجديد إعفاءات ضريبية تصل إلى 5 سنوات من الضريبة على الشركات، ومنحًا استثمارية تصل إلى 30% من كلفة المشروع، مع تخفيضات جمركية على المعدات المستوردة، وخاصة في المناطق الصناعية المدمجة والمناطق الحرة.",
    benefits: ["إعفاءات ضريبية", "منح استثمارية", "تسهيلات جمركية"],
    steps: ["التسجيل", "اعتماد المشروع", "التعاقد مع CRI", "الاستفادة"],
  },
  {
    id: "location",
    question: "كيف أختار الموقع الصناعي المناسب؟",
    answer:
      "تمتلك منصتنا أداة ذكاء اصطناعي تحلّل احتياجات مشروعك وتقترح الموقع الأنسب من بين 36 مدينة صناعية مغربية، بناءً على قرب المواد الأولية، واليد العاملة، والبنية التحتية اللوجستية، والإعفاءات الجبائية المتاحة.",
    benefits: ["تحليل ذكي", "36 مدينة صناعية", "توصية مخصصة"],
    steps: ["تحليل المشروع", "دراسة الموقع", "مقارنة الخيارات", "اتخاذ القرار"],
  },
  {
    id: "support",
    question: "ما الدعم المتوفر بعد انطلاق المشروع؟",
    answer:
      "نرافقك طوال دورة حياة المشروع بدعم تشغيلي مستمر: استشارات تقنية، تسويق المنتجات، التصدير، الربط مع سلاسل الإمداد الدولية، والتكوين المستمر للعاملين، مع تقارير أداء دورية تعتمد على الذكاء الاصطناعي.",
    benefits: ["دعم 24/7", "استشارات دورية", "تكوين مستمر"],
    steps: ["متابعة الأداء", "التشخيص", "التحسين", "التوسع"],
  },
  {
    id: "export",
    question: "كيف أُصدّر منتجاتي إلى الأسواق العالمية؟",
    answer:
      "يستفيد المغرب من اتفاقيات تبادل حر مع أكثر من 55 دولة تمثل أكثر من مليار مستهلك. نساعدك في استغلال هذه الاتفاقيات عبر خدمات لوجستية مدمجة وربط مباشر مع الموزعين الدوليين في إفريقيا، أوروبا، الخليج، وأمريكا.",
    benefits: ["55 اتفاقية حرة", "مليار مستهلك", "ربط مباشر"],
    steps: ["دراسة السوق", "شهادات المطابقة", "اختيار الموزع", "التصدير"],
  },
]
