/* ==========================================================
   معرض الرعب — Dark Gallery
   تفاعلات: intro، lightbox، فلترة، بحث، ترجمة، GSAP، صوت
   ========================================================== */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const canAnimate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

/* ===========================
   1) مولّد اللوحات الفنية SVG
   كل لوحة مرعبة مرسومة بالكامل بالكود — لا صور خارجية
   =========================== */
const paintings = {
  skull1: {
    cat: "skulls",
    ar: "الجمجمة الضاحكة",
    en: "The Laughing Skull",
    descAr: "تبتسم دائماً، حتى حين لا يبقى أحد ليراها. يقولون إنها تضحك على من يحملها.",
    descEn: "Always smiling, even when no one remains to see it. They say it laughs at whoever carries it.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g1" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#2a0608"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g1)"/>
      <path d="M100 40 C70 40 50 70 50 110 C50 130 58 145 65 155 C60 170 72 180 85 180 L115 180 C128 180 140 170 135 155 C142 145 150 130 150 110 C150 70 130 40 100 40 Z" fill="#d8d0bc" stroke="#5a5040" stroke-width="2"/>
      <ellipse cx="80" cy="110" rx="15" ry="18" fill="#060409"/>
      <circle class="eye-glow eye-left" cx="80" cy="110" r="6" fill="#ff2a3c"/>
      <ellipse cx="120" cy="110" rx="15" ry="18" fill="#060409"/>
      <circle class="eye-glow eye-right" cx="120" cy="110" r="6" fill="#ff2a3c"/>
      <path d="M100 135 L92 155 L100 162 L108 155 Z" fill="#060409"/>
      <rect x="74" y="165" width="52" height="14" fill="#1a1208"/>
      <line x1="84" y1="165" x2="84" y2="179" stroke="#3a2a10" stroke-width="1.5"/>
      <line x1="94" y1="165" x2="94" y2="179" stroke="#3a2a10" stroke-width="1.5"/>
      <line x1="106" y1="165" x2="106" y2="179" stroke="#3a2a10" stroke-width="1.5"/>
      <line x1="116" y1="165" x2="116" y2="179" stroke="#3a2a10" stroke-width="1.5"/>
      <path d="M62 80 Q70 90 78 88" stroke="#5a5040" stroke-width="1" fill="none"/>
      <path d="M138 80 Q130 90 122 88" stroke="#5a5040" stroke-width="1" fill="none"/>
    </svg>`
  },
  skull2: {
    cat: "skulls",
    ar: "جمجمة الملك الميت",
    en: "Skull of the Dead King",
    descAr: "آخر ما تبقّى من ملك حكم بالخوف. التاج لا يزال فوق عظامه... ولن يرفعه أحد.",
    descEn: "All that remains of a king who ruled by fear. The crown still sits on his bones... and none will remove it.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g2" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#2a1f08"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g2)"/>
      <path d="M55 55 L70 30 L85 50 L100 22 L115 50 L130 30 L145 55 L145 72 L55 72 Z" fill="#8a6d1f" stroke="#caa53e" stroke-width="1.2"/>
      <circle cx="70" cy="30" r="3.5" fill="#b30010"/>
      <circle cx="100" cy="22" r="4" fill="#b30010"/>
      <circle cx="130" cy="30" r="3.5" fill="#b30010"/>
      <path d="M100 72 C72 72 55 100 55 135 C55 152 62 165 68 173 C64 186 74 195 85 195 L115 195 C126 195 136 186 132 173 C138 165 145 152 145 135 C145 100 128 72 100 72 Z" fill="#d8d0bc" stroke="#5a5040" stroke-width="2"/>
      <ellipse cx="82" cy="130" rx="14" ry="17" fill="#060409"/>
      <circle class="eye-glow eye-left" cx="82" cy="130" r="5.5" fill="#ff2a3c"/>
      <ellipse cx="118" cy="130" rx="14" ry="17" fill="#060409"/>
      <circle class="eye-glow eye-right" cx="118" cy="130" r="5.5" fill="#ff2a3c"/>
      <path d="M100 150 L93 168 L100 174 L107 168 Z" fill="#060409"/>
      <rect x="76" y="178" width="48" height="13" fill="#1a1208"/>
      <line x1="86" y1="178" x2="86" y2="191" stroke="#3a2a10" stroke-width="1.5"/>
      <line x1="96" y1="178" x2="96" y2="191" stroke="#3a2a10" stroke-width="1.5"/>
      <line x1="104" y1="178" x2="104" y2="191" stroke="#3a2a10" stroke-width="1.5"/>
      <line x1="114" y1="178" x2="114" y2="191" stroke="#3a2a10" stroke-width="1.5"/>
    </svg>`
  },
  ghost1: {
    cat: "ghosts",
    ar: "الشبح الباكي",
    en: "The Weeping Ghost",
    descAr: "تسمع بكاءه قبل أن تراه. يبحث عن شيئاً فقده قبل قرون، ولا يتعب أبداً.",
    descEn: "You hear its weeping before you see it. It searches for something lost centuries ago, and never tires.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g3" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#1a2030"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g3)"/>
      <path d="M100 40 C70 40 50 70 50 110 L50 190 C50 195 55 198 60 195 L70 185 C73 182 78 182 80 185 L90 195 C93 198 97 198 100 195 L110 185 C113 182 117 182 120 185 L130 195 C133 198 137 198 140 195 L150 185 C155 182 160 195 160 190 L160 110 C160 70 130 40 100 40 Z" fill="#c8d0e0" opacity="0.85"/>
      <ellipse class="ghost-float" cx="82" cy="100" rx="8" ry="11" fill="#060409"/>
      <ellipse class="ghost-float" cx="118" cy="100" rx="8" ry="11" fill="#060409"/>
      <path class="ghost-float" d="M88 125 Q100 135 112 125" stroke="#060409" stroke-width="3" fill="none"/>
      <path d="M75 95 Q80 85 85 95" stroke="#5e6a7a" stroke-width="1" fill="none"/>
      <path d="M115 95 Q120 85 125 95" stroke="#5e6a7a" stroke-width="1" fill="none"/>
    </svg>`
  },
  ghost2: {
    cat: "ghosts",
    ar: "روح الطفلة",
    en: "Soul of the Child",
    descAr: "تمسك بدمية بلا رأس، وتنادي أمها في كل ليلة. أمها ماتت قبل مئات السنين.",
    descEn: "Holds a headless doll, calling for her mother every night. Her mother died hundreds of years ago.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g4" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#202028"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g4)"/>
      <path class="ghost-float" d="M100 50 C78 50 65 75 65 110 L65 185 C65 190 70 192 73 188 L82 180 L92 188 L100 180 L108 188 L118 180 L127 188 C130 192 135 190 135 185 L135 110 C135 75 122 50 100 50 Z" fill="#e0e0e8" opacity="0.8"/>
      <circle class="ghost-float" cx="88" cy="95" r="6" fill="#060409"/>
      <circle class="ghost-float" cx="112" cy="95" r="6" fill="#060409"/>
      <path class="ghost-float" d="M90 115 Q100 120 110 115" stroke="#060409" stroke-width="2" fill="none"/>
      <ellipse cx="100" cy="160" rx="14" ry="20" fill="#a0a0b0" opacity="0.7"/>
      <rect x="93" y="155" width="14" height="10" fill="#060409"/>
    </svg>`
  },
  eye1: {
    cat: "eyes",
    ar: "العين اليقظة",
    en: "The Watchful Eye",
    descAr: "لا تطرف، لا تنام، لا تبتعد. تنظر إليك من كل زاوية في الغرفة.",
    descEn: "Never blinks, never sleeps, never looks away. Watches you from every corner of the room.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g5" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#2a0608"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g5)"/>
      <path class="ghost-float" d="M30 120 Q100 60 170 120 Q100 180 30 120 Z" fill="#1a0408" stroke="#7a0d18" stroke-width="2"/>
      <circle class="eye-glow eye-left" cx="100" cy="120" r="32" fill="#b30010"/>
      <circle cx="100" cy="120" r="16" fill="#060409"/>
      <circle cx="106" cy="114" r="5" fill="#ff2a3c"/>
      <path d="M40 120 Q70 100 100 120" fill="none" stroke="#5e0a12" stroke-width="1.2"/>
      <path d="M160 120 Q130 140 100 120" fill="none" stroke="#5e0a12" stroke-width="1.2"/>
      <path d="M55 110 L62 115" stroke="#5e0a12" stroke-width="0.8"/>
      <path d="M145 110 L138 115" stroke="#5e0a12" stroke-width="0.8"/>
    </svg>`
  },
  eye2: {
    cat: "eyes",
    ar: "ثلاث عيون",
    en: "Three Eyes",
    descAr: "ترى الماضي والحاضر والمستقبل. الأسوأ أنها ترى موتك قبل أن تراه أنت.",
    descEn: "See past, present, and future. Worse, they see your death before you do.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g6" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1a0408"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g6)"/>
      <path d="M30 70 Q60 50 90 70 Q60 90 30 70 Z" fill="#1a0408" stroke="#7a0d18" stroke-width="1.5"/>
      <circle class="eye-glow eye-left" cx="60" cy="70" r="14" fill="#b30010"/>
      <circle cx="60" cy="70" r="7" fill="#060409"/>
      <path d="M110 70 Q140 50 170 70 Q140 90 110 70 Z" fill="#1a0408" stroke="#7a0d18" stroke-width="1.5"/>
      <circle class="eye-glow eye-right" cx="140" cy="70" r="14" fill="#b30010"/>
      <circle cx="140" cy="70" r="7" fill="#060409"/>
      <path d="M70 150 Q100 120 130 150 Q100 180 70 150 Z" fill="#1a0408" stroke="#7a0d18" stroke-width="2"/>
      <circle class="eye-glow eye-left" cx="100" cy="150" r="20" fill="#b30010"/>
      <circle cx="100" cy="150" r="10" fill="#060409"/>
      <circle cx="104" cy="146" r="3" fill="#ff2a3c"/>
    </svg>`
  },
  bat1: {
    cat: "bats",
    ar: "الخفاش الحارس",
    en: "The Guardian Bat",
    descAr: "يحرس المدخل منذ أن بُني المعرض. لا يطير إلا حين يحاول أحدهم الهرب.",
    descEn: "Guards the entrance since the gallery was built. Only flies when someone tries to escape.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g7" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#1a0408"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g7)"/>
      <path class="ghost-float" d="M100 100 C95 95 85 90 70 95 C60 98 50 110 35 120 C50 118 60 115 70 120 C75 125 85 130 95 128 L100 135 L105 128 C115 130 125 125 130 120 C140 115 150 118 165 120 C150 110 140 98 130 95 C115 90 105 95 100 100 Z" fill="#1a1208" stroke="#3a2a10" stroke-width="1.5"/>
      <ellipse cx="100" cy="100" rx="14" ry="16" fill="#2a1f10"/>
      <path class="ghost-float" d="M93 105 L92 115 M107 105 L108 115" stroke="#060409" stroke-width="2"/>
      <circle class="eye-glow eye-left" cx="95" cy="98" r="2.5" fill="#ff2a3c"/>
      <circle class="eye-glow eye-right" cx="105" cy="98" r="2.5" fill="#ff2a3c"/>
      <path d="M97 108 L100 113 L103 108 Z" fill="#5e0a12"/>
      <path d="M85 88 L80 78 M115 88 L120 78" stroke="#3a2a10" stroke-width="1.5" fill="none"/>
    </svg>`
  },
  bat2: {
    cat: "bats",
    ar: "سرب الغروب",
    en: "The Dusk Swarm",
    descAr: "يحجبون الشمس كل مساء، يحملون في أجنحتهم آخر أنفاس النهار.",
    descEn: "Block the sun each evening, carrying in their wings the day's last breaths.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g8" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="#2a1f08"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g8)"/>
      <circle cx="100" cy="120" r="60" fill="#5e0a12" opacity="0.2"/>
      <path d="M55 70 C50 67 42 65 32 67 C26 69 20 76 12 80 C22 79 28 77 34 80 C37 83 43 86 50 84 L55 88 L60 84 C67 86 73 83 76 80 C82 77 88 79 98 80 C88 76 82 69 76 67 C66 65 60 67 55 70 Z" fill="#1a1208" transform="translate(0,0) scale(0.7)"/>
      <path d="M120 130 C115 127 107 125 97 127 C91 129 85 136 77 140 C87 139 93 137 99 140 C102 143 108 146 115 144 L120 148 L125 144 C132 146 138 143 141 140 C147 137 153 139 163 140 C153 136 147 129 141 127 C131 125 125 127 120 130 Z" fill="#1a1208" transform="scale(0.85)"/>
      <path d="M80 170 C77 168 72 167 65 68 C61 69 57 74 51 77 C58 76 62 75 66 77 C68 79 72 81 77 80 L80 82 L83 80 C88 81 92 79 94 77 C98 75 102 76 109 77 C102 74 98 69 94 68 C87 67 83 68 80 70 Z" fill="#1a1208" opacity="0.7" transform="scale(1.1)"/>
    </svg>`
  },
  monster1: {
    cat: "monsters",
    ar: "وحش الظلام",
    en: "The Darkness Beast",
    descAr: "لا يُرى إلا حين يكون الأوان قد فات. مخالبه لا تترك أثراً... إلا فيك.",
    descEn: "Only seen when it's too late. Its claws leave no trace... except on you.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g9" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1a0408"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g9)"/>
      <path d="M60 80 C50 70 45 55 50 40 L60 55 L65 45 L72 58 L78 45 L85 58 L92 45 L100 60 L108 45 L115 58 L122 45 L128 58 L135 45 L140 55 L150 40 C155 55 150 70 140 80 C145 100 140 130 120 145 C110 150 90 150 80 145 C60 130 55 100 60 80 Z" fill="#2a0610" stroke="#5e0a12" stroke-width="2"/>
      <ellipse class="eye-glow eye-left" cx="82" cy="95" rx="10" ry="7" fill="#ff2a3c"/>
      <ellipse class="eye-glow eye-right" cx="118" cy="95" rx="10" ry="7" fill="#ff2a3c"/>
      <circle cx="82" cy="95" r="3" fill="#060409"/>
      <circle cx="118" cy="95" r="3" fill="#060409"/>
      <path d="M85 115 L90 125 L95 118 L100 128 L105 118 L110 125 L115 115" stroke="#1a0408" stroke-width="2" fill="none"/>
      <path d="M70 130 L74 138 M78 132 L80 142 M120 130 L118 142 M130 130 L126 140" stroke="#1a0408" stroke-width="2" fill="none"/>
      <path d="M90 130 L88 140 M95 132 L94 144 M105 132 L106 144 M110 130 L112 140" stroke="#1a0408" stroke-width="2" fill="none"/>
    </svg>`
  },
  monster2: {
    cat: "monsters",
    ar: "الذراع النابتة",
    en: "The Grown Arm",
    descAr: "تنبت من الأرض في كل ليلة قمراء، تبحث عمن دفنوها حية.",
    descEn: "Sprouts from the ground each moonlit night, searching for those who buried it alive.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g10" cx="50%" cy="60%" r="60%"><stop offset="0%" stop-color="#1a1208"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g10)"/>
      <path d="M0 180 L200 180 L200 240 L0 240 Z" fill="#1a0408" opacity="0.6"/>
      <path d="M90 180 L88 140 L85 100 L90 70 L95 50 L100 40 L105 50 L110 70 L115 100 L112 140 L110 180 Z" fill="#3a2a18" stroke="#1a1208" stroke-width="1.5"/>
      <path d="M95 40 L88 25 L92 20 L96 28 L100 18 L104 28 L108 20 L112 25 L105 40" fill="#2a1f10" stroke="#1a1208" stroke-width="1"/>
      <path d="M92 60 L86 55 M108 60 L114 55 M93 90 L85 88 M107 90 L115 88 M92 120 L84 118 M108 120 L116 118" stroke="#1a1208" stroke-width="1.5"/>
      <circle class="eye-glow eye-left" cx="100" cy="40" r="2" fill="#ff2a3c"/>
    </svg>`
  },
  moon1: {
    cat: "moon",
    ar: "القمر الدموي",
    en: "The Blood Moon",
    descAr: "يطلّ كل قرن، يصبغ السماء بلون الجروح، ويوقظ كل ما نام تحت التراب.",
    descEn: "Rises each century, dyeing the sky the color of wounds, and waking all that sleeps beneath the soil.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g11" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#2a0608"/><stop offset="100%" stop-color="#060409"/></radialGradient>
      <radialGradient id="moonGrad" cx="40%" cy="40%" r="60%"><stop offset="0%" stop-color="#ff6a4a"/><stop offset="60%" stop-color="#b30010"/><stop offset="100%" stop-color="#5e0a12"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g11)"/>
      <circle class="ghost-float" cx="100" cy="110" r="65" fill="url(#moonGrad)" opacity="0.95"/>
      <circle cx="85" cy="95" r="8" fill="#5e0a12" opacity="0.5"/>
      <circle cx="115" cy="105" r="6" fill="#5e0a12" opacity="0.5"/>
      <circle cx="95" cy="125" r="10" fill="#5e0a12" opacity="0.4"/>
      <circle cx="120" cy="135" r="5" fill="#5e0a12" opacity="0.5"/>
      <path d="M100 110 L100 50 M100 110 L100 170 M100 110 L40 110 M100 110 L160 110" stroke="#ff2a3c" stroke-width="0.5" opacity="0.3"/>
    </svg>`
  },
  moon2: {
    cat: "moon",
    ar: "هلال الظلال",
    en: "The Shadow Crescent",
    descAr: "هلال لا يعكس الضوء بل يبتلعه. تحته تُولد كل الكوابيس.",
    descEn: "A crescent that doesn't reflect light but devours it. Beneath it, all nightmares are born.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g12" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#1a0408"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g12)"/>
      <path class="ghost-float" d="M100 50 A60 60 0 1 0 100 170 A45 45 0 1 1 100 50 Z" fill="#0a0306" stroke="#5e0a12" stroke-width="1.5"/>
      <circle class="eye-glow eye-left" cx="130" cy="110" r="3" fill="#ff2a3c"/>
      <path d="M30 180 L40 175 L50 180 L60 175 L70 180 L80 175 L90 180 L100 175 L110 180 L120 175 L130 180 L140 175 L150 180 L160 175 L170 180" stroke="#5e0a12" stroke-width="1" fill="none" opacity="0.6"/>
    </svg>`
  },
  heart1: {
    cat: "hearts",
    ar: "القلب الميت النابض",
    en: "The Beating Dead Heart",
    descAr: "قلب توقف منذ زمن، لكنه ما زال ينبض. أحد ما يريد إعادته لصاحبه.",
    descEn: "A heart that stopped long ago, yet still beats. Someone wants to return it to its owner.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g13" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#2a0608"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g13)"/>
      <path class="heart-beat" d="M100 170 C60 140 50 110 50 90 C50 70 65 60 80 60 C90 60 100 70 100 80 C100 70 110 60 120 60 C135 60 150 70 150 90 C150 110 140 140 100 170 Z" fill="#5e0a12" stroke="#b30010" stroke-width="2"/>
      <path class="heart-beat" d="M100 80 C95 90 90 100 100 110 C110 100 105 90 100 80" fill="#7a0d18" opacity="0.6"/>
      <path class="heart-vein" d="M100 60 L95 40 M100 60 L105 40 M100 60 L100 35" stroke="#5e0a12" stroke-width="2" fill="none"/>
      <path class="heart-vein" d="M100 170 L90 190 M100 170 L110 190 M100 170 L100 200" stroke="#5e0a12" stroke-width="2" fill="none"/>
    </svg>`
  },
  heart2: {
    cat: "hearts",
    ar: "قلب الزجاج المكسور",
    en: "The Broken Glass Heart",
    descAr: "قلب من زجاج مكسور، كل شظية تحمل ذكرى موت. لا يجمعه أحد.",
    descEn: "A heart of broken glass, each shard holding a memory of death. None can gather it.",
    svg: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="g14" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1a0408"/><stop offset="100%" stop-color="#060409"/></radialGradient></defs>
      <rect width="200" height="240" fill="url(#g14)"/>
      <path class="ghost-float" d="M100 170 L70 130 L60 90 L80 70 L100 80 L120 70 L140 90 L130 130 Z" fill="#1a0408" stroke="#5e0a12" stroke-width="2"/>
      <path d="M100 170 L70 130 L100 110 L130 130 Z" fill="#2a0610" stroke="#b30010" stroke-width="1.5"/>
      <path d="M70 130 L60 90 L100 110 Z" fill="#3a0810" stroke="#b30010" stroke-width="1"/>
      <path d="M130 130 L140 90 L100 110 Z" fill="#3a0810" stroke="#b30010" stroke-width="1"/>
      <path d="M60 90 L80 70 L100 110 Z" fill="#2a0610" stroke="#b30010" stroke-width="1"/>
      <path d="M140 90 L120 70 L100 110 Z" fill="#2a0610" stroke="#b30010" stroke-width="1"/>
      <circle class="eye-glow eye-left" cx="100" cy="110" r="4" fill="#ff2a3c"/>
    </svg>`
  }
};

/* خريطة الفئات للترجمة */
const categoryLabels = {
  ar: {
    skulls: "جماجم", ghosts: "أشباح", eyes: "عيون", bats: "خفافيش",
    monsters: "وحوش", moon: "قمر", hearts: "قلوب"
  },
  en: {
    skulls: "Skulls", ghosts: "Ghosts", eyes: "Eyes", bats: "Bats",
    monsters: "Monsters", moon: "Moon", hearts: "Hearts"
  }
};

/* ===========================
   2) بناء معرض اللوحات ديناميكياً
   =========================== */
const galleryGrid = $("#galleryGrid");
const galleryItems = [];

function buildGallery() {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = "";

  Object.entries(paintings).forEach(([key, p]) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "gallery-item reveal";
    item.dataset.key = key;
    item.dataset.category = p.cat;
    item.dataset.titleAr = p.ar;
    item.dataset.titleEn = p.en;
    item.dataset.descAr = p.descAr;
    item.dataset.descEn = p.descEn;
    item.innerHTML = `
      <div class="gallery-art">${p.svg}</div>
      <span data-ar="${p.ar}" data-en="${p.en}">${p.ar}</span>
    `;
    galleryGrid.appendChild(item);
    galleryItems.push(item);
  });

  // إعادة ربط المراقبون للعناصر الجديدة
  if (revealObserver) {
    galleryItems.forEach((item) => revealObserver.observe(item));
  } else {
    galleryItems.forEach((item) => item.classList.add("is-visible"));
  }
}

/* ===========================
   3) بناء اللوحات المميزة (featured) بالـ SVG
   =========================== */
const featuredArtMap = {
  ghost: paintings.ghost1.svg,
  eye: paintings.eye1.svg,
  bat: paintings.bat1.svg,
  moon: paintings.moon1.svg
};

function buildFeaturedArt() {
  $$(".featured-art[data-art]").forEach((el) => {
    const artKey = el.dataset.art;
    if (featuredArtMap[artKey]) {
      el.innerHTML = featuredArtMap[artKey];
    }
  });
}

/* ===========================
   4) شاشة الدخول (Intro)
   =========================== */
const introScreen = $("#introScreen");
const introEnter = $("#introEnter");
const mainContent = $("#main");

function enterGallery() {
  if (!introScreen) return;
  introScreen.classList.add("is-gone");
  if (mainContent) {
    mainContent.classList.remove("main-hidden");
    // إعادة تشغيل reveal observer بعد ظهور المحتوى
    setTimeout(() => {
      $$(".reveal").forEach((item) => {
        if (revealObserver && !item.classList.contains("is-visible")) {
          revealObserver.observe(item);
        }
      });
      // GSAP intro للعناصر الرئيسية
      if (window.gsap && canAnimate) {
        gsap.from(".hero-copy > *", {
          opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: "power2.out"
        });
        gsap.from(".hero-visual", {
          opacity: 0, scale: 0.92, duration: 0.9, ease: "power3.out", delay: 0.2
        });
      }
    }, 200);
  }
  // ابدأ الصوت المحيط تلقائياً إن سمح المستخدم بالدخول
  startAmbientSound();
  setTimeout(() => introScreen.remove(), 1000);
}

introEnter?.addEventListener("click", enterGallery);

// ESC للهرب من شاشة الدخول
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && introScreen && !introScreen.classList.contains("is-gone")) {
    enterGallery();
  }
});

/* ===========================
   5) عين تتبع الماوس + توهج
   =========================== */
const cursorEye = $(".cursor-eye");
const cursorPupil = $(".cursor-eye-pupil");

if (cursorEye && canAnimate && hasFinePointer) {
  let eyeX = window.innerWidth / 2;
  let eyeY = window.innerHeight / 2;
  let curX = eyeX, curY = eyeY;
  let active = false;

  document.addEventListener("mousemove", (e) => {
    eyeX = e.clientX;
    eyeY = e.clientY;
    if (!active) { cursorEye.classList.add("is-visible"); active = true; }
  });

  document.addEventListener("mouseleave", () => {
    cursorEye.classList.remove("is-visible");
    active = false;
  });

  function animateEye() {
    curX += (eyeX - curX) * 0.12;
    curY += (eyeY - curY) * 0.12;
    cursorEye.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    // حركة الحدقة الداخلية نحو الماوس
    if (cursorPupil) {
      const dx = (eyeX - curX) * 0.3;
      const dy = (eyeY - curY) * 0.3;
      cursorPupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    }
    requestAnimationFrame(animateEye);
  }
  animateEye();
}

/* ===========================
   6) شريط التقدّم + زر العودة
   =========================== */
const progressBar = $(".scroll-progress span");
const backToTop = $(".back-to-top");

function updateScrollFeatures() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;
  backToTop?.classList.toggle("is-visible", scrollTop > 520);
}

window.addEventListener("scroll", updateScrollFeatures, { passive: true });
window.addEventListener("load", updateScrollFeatures);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: canAnimate ? "smooth" : "auto" });
});

/* ===========================
   7) القائمة (Mobile menu)
   =========================== */
const menuToggle = $(".menu-toggle");
const navMenu = $("#navMenu");
const navLinks = $$(".nav-link");

let currentLang = localStorage.getItem("gallery-lang") || "ar";

function setMenuState(isOpen) {
  menuToggle?.classList.toggle("is-open", isOpen);
  navMenu?.classList.toggle("is-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  if (menuToggle) {
    menuToggle.setAttribute("aria-label", isOpen
      ? (currentLang === "en" ? "Close Menu" : "إغلاق القائمة")
      : (currentLang === "en" ? "Open Menu" : "فتح القائمة"));
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

/* ===========================
   8) الفلترة + البحث في المعرض
   =========================== */
const filterButtons = $$(".filter-btn");
const gallerySearch = $("#gallerySearch");
const galleryEmpty = $("#galleryEmpty");
let activeFilter = "all";

function normalizeText(value) {
  return (value || "")
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/[ة]/g, "ه")
    .replace(/[ى]/g, "ي")
    .trim();
}

function applyGalleryFilters() {
  const query = normalizeText(gallerySearch?.value);
  let visibleCount = 0;

  galleryItems.forEach((item) => {
    const category = item.dataset.category;
    const titleAr = item.dataset.titleAr || "";
    const titleEn = item.dataset.titleEn || "";
    const descAr = item.dataset.descAr || "";
    const descEn = item.dataset.descEn || "";
    const catLabelAr = categoryLabels.ar[category] || "";
    const catLabelEn = categoryLabels.en[category] || "";

    const textToMatch = normalizeText(`${titleAr} ${titleEn} ${descAr} ${descEn} ${catLabelAr} ${catLabelEn} ${item.textContent}`);
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = !query || textToMatch.includes(query);
    const shouldShow = matchesFilter && matchesSearch;

    item.classList.toggle("is-hidden", !shouldShow);
    item.setAttribute("aria-hidden", String(!shouldShow));
    item.tabIndex = shouldShow ? 0 : -1;
    if (shouldShow) visibleCount += 1;
  });

  if (galleryEmpty) galleryEmpty.hidden = visibleCount !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyGalleryFilters();
    // GSAP حركي للعناصر المرئية
    if (window.gsap && canAnimate) {
      gsap.fromTo(".gallery-item:not(.is-hidden)",
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" });
    }
  });
});

gallerySearch?.addEventListener("input", applyGalleryFilters);

/* ===========================
   9) Lightbox لعرض اللوحات بحجم أكبر
   =========================== */
const lightbox = $("#lightbox");
const lightboxArt = $("#lightboxArt");
const lightboxTitle = $("#lightboxTitle");
const lightboxCategory = $("#lightboxCategory");
const lightboxDesc = $("#lightboxDesc");
const lightboxClose = $(".lightbox-close");
let lastFocusedElement = null;

function openLightbox(item) {
  const key = item.dataset.key;
  const p = paintings[key];
  if (!p) return;

  lastFocusedElement = document.activeElement;

  const title = currentLang === "en" ? p.en : p.ar;
  const desc = currentLang === "en" ? p.descEn : p.descAr;
  const category = currentLang === "en"
    ? (categoryLabels.en[p.cat] || "Gallery")
    : (categoryLabels.ar[p.cat] || "معرض");

  lightboxArt.innerHTML = p.svg;
  lightboxTitle.textContent = title;
  lightboxCategory.textContent = category;
  lightboxDesc.textContent = desc;

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();

  // GSAP أنميشن فتح
  if (window.gsap && canAnimate) {
    gsap.fromTo(".lightbox-card",
      { opacity: 0, scale: 0.85, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "power3.out" });
    gsap.fromTo(".lightbox-art svg",
      { rotation: -8, scale: 0.9 },
      { rotation: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.6)" });
  }
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lightboxArt.innerHTML = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

// ربط الأحداث بعد بناء المعرض
function bindGalleryClicks() {
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      openLightbox(item);
      spawnBloodBurst();
    });
  });
}

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox?.classList.contains("is-open")) {
    closeLightbox();
  }
  if (e.key === "Tab" && lightbox?.classList.contains("is-open")) {
    const focusable = lightbox.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }
});

/* ===========================
   10) تأثير العينين في اللوحات تتبع الماوس
   =========================== */
function bindEyeTracking() {
  if (!canAnimate || !hasFinePointer) return;

  document.addEventListener("mousemove", (e) => {
    $$(".eye-glow").forEach((eye) => {
      const rect = eye.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth * 6;
      const dy = (e.clientY - cy) / window.innerHeight * 6;
      eye.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  });
}

/* ===========================
   11) أنميشن الظهور (Reveal)
   =========================== */
const revealItems = () => $$(".reveal");

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

function initReveal() {
  if (revealObserver) {
    revealItems().forEach((item) => revealObserver.observe(item));
  } else {
    revealItems().forEach((item) => item.classList.add("is-visible"));
  }
}

/* ===========================
   12) التنقل النشط حسب القسم الظاهر
   =========================== */
const sections = $$("main section[id]");

const sectionObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        navLinks.forEach((link) => link.classList.remove("active"));
        activeLink?.classList.add("active");
      });
    }, { rootMargin: "-35% 0px -58% 0px", threshold: 0 })
  : null;

if (sectionObserver) sections.forEach((section) => sectionObserver.observe(section));

/* ===========================
   13) العدّادات المتحركة (Counters)
   =========================== */
const counters = $$(".counter");

const counterObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.45 })
  : null;

function animateCounter(counter) {
  const target = Number(counter.dataset.target || counter.textContent.replace(/\D/g, ""));
  const prefix = counter.dataset.prefix || "";
  const duration = 1400;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    counter.textContent = `${prefix}${value}`;
    if (progress < 1) requestAnimationFrame(tick);
    else counter.textContent = `${prefix}${target}`;
  }

  if (!canAnimate) { counter.textContent = `${prefix}${target}`; return; }
  requestAnimationFrame(tick);
}

if (counterObserver) counters.forEach((c) => counterObserver.observe(c));
else counters.forEach(animateCounter);

/* ===========================
   14) الكتابة المتحركة (Typing)
   =========================== */
const typingText = $("#typingText");
const typingWords = {
  ar: ["الجماجم", "الأشباح", "العيون", "الوحوش", "الموت"],
  en: ["Skulls", "Ghosts", "Eyes", "Monsters", "Death"]
};
let typingIndex = 0;
let typingInterval = null;

function startTypingEffect() {
  if (!typingText || !canAnimate) return;
  clearInterval(typingInterval);
  const words = typingWords[currentLang];
  typingText.textContent = words[typingIndex % words.length];

  typingInterval = setInterval(() => {
    const activeWords = typingWords[currentLang];
    typingIndex = (typingIndex + 1) % activeWords.length;
    typingText.style.opacity = "0";
    setTimeout(() => {
      typingText.textContent = activeWords[typingIndex];
      typingText.style.opacity = "1";
    }, 180);
  }, 2200);
}

/* ===========================
   15) الصوت المحيط المرعب (Web Audio API)
   =========================== */
const soundToggle = $(".sound-toggle");
const soundIcon = $(".sound-icon");
let audioCtx = null;
let ambientNodes = [];
let soundOn = false;

function startAmbientSound() {
  if (soundOn) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();

    // نغمة منخفضة مستمرة (drone)
    const drone = audioCtx.createOscillator();
    const droneGain = audioCtx.createGain();
    drone.type = "sine";
    drone.frequency.value = 55;
    droneGain.gain.value = 0;
    drone.connect(droneGain).connect(audioCtx.destination);
    drone.start();
    ambientNodes.push({ osc: drone, gain: droneGain });

    // نغمة أعلى خافتة
    const high = audioCtx.createOscillator();
    const highGain = audioCtx.createGain();
    high.type = "triangle";
    high.frequency.value = 110;
    highGain.gain.value = 0;
    high.connect(highGain).connect(audioCtx.destination);
    high.start();
    ambientNodes.push({ osc: high, gain: highGain });

    // رفع الصوت تدريجياً
    droneGain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 1.5);
    highGain.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 1.5);

    soundOn = true;
    if (soundToggle) soundToggle.setAttribute("aria-pressed", "true");
    if (soundIcon) soundIcon.textContent = "♫";
  } catch (err) {
    // المتصفح لا يدعم أو حُظر الصوت — تجاهل بهدوء
  }
}

function stopAmbientSound() {
  if (!soundOn || !audioCtx) return;
  ambientNodes.forEach(({ osc, gain }) => {
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
    setTimeout(() => { try { osc.stop(); } catch (e) {} }, 600);
  });
  ambientNodes = [];
  soundOn = false;
  if (soundToggle) soundToggle.setAttribute("aria-pressed", "false");
  if (soundIcon) soundIcon.textContent = "♪";
}

soundToggle?.addEventListener("click", () => {
  if (soundOn) stopAmbientSound();
  else startAmbientSound();
});

/* ===========================
   16) انفجار دموي عند الضغط على لوحة
   =========================== */
function spawnBloodBurst() {
  if (!canAnimate) return;
  const colors = ["rgba(179,0,16,0.8)", "rgba(255,42,60,0.8)", "rgba(94,10,18,0.8)"];
  const count = 12;
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.style.cssText = [
      "position:fixed", `top:${y}px`, `left:${x}px`,
      "width:8px", "height:10px",
      "border-radius:50% 50% 50% 50% / 60% 60% 40% 40%",
      `background:${colors[i % colors.length]}`,
      "pointer-events:none", "z-index:9999",
      "transform:translate(-50%,-50%)",
      "transition:transform 0.8s ease, opacity 0.8s ease", "opacity:1"
    ].join(";");
    document.body.appendChild(p);

    const angle = (i / count) * 2 * Math.PI;
    const dist = 70 + Math.random() * 50;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist + 40;

    requestAnimationFrame(() => {
      p.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      p.style.opacity = "0";
    });
    setTimeout(() => p.remove(), 850);
  }
}

/* ===========================
   17) محرّك الترجمة (AR / EN)
   =========================== */
const langToggle = $(".lang-toggle");

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("gallery-lang", lang);

  // نصوص data-ar / data-en
  $$("[data-ar][data-en]").forEach((el) => {
    el.textContent = lang === "en" ? el.dataset.en : el.dataset.ar;
  });

  // placeholders
  $$("[data-placeholder-ar][data-placeholder-en]").forEach((el) => {
    el.placeholder = lang === "en" ? el.dataset.placeholderEn : el.dataset.placeholderAr;
  });

  // aria-labels
  $$("[data-aria-ar][data-aria-en]").forEach((el) => {
    el.setAttribute("aria-label", lang === "en" ? el.dataset.ariaEn : el.dataset.ariaAr);
  });

  // نص زر اللغة
  const langText = $(".lang-toggle .lang-text");
  if (langText) langText.textContent = lang === "en" ? "AR" : "EN";

  // العنوان والوصف
  document.title = lang === "en" ? "Dark Gallery — Horror Art" : "معرض الرعب — Dark Gallery";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", lang === "en"
      ? "A horror art gallery of skulls, ghosts, bloody eyes, and night bats. Enter if you dare."
      : "معرض الرعب — لوحات فنية مرعبة من عوالم الظلام: جماجم، أشباح، عيون دامية، وخفافيش ليلية. ادخل إن كنت شجاعاً.");
  }

  applyGalleryFilters();
  startTypingEffect();
}

langToggle?.addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

/* ===========================
   18) تهيئة عند تحميل الصفحة
   =========================== */
function init() {
  buildGallery();
  buildFeaturedArt();
  bindGalleryClicks();
  bindEyeTracking();
  initReveal();
  applyLanguage(currentLang);
  updateScrollFeatures();
}

// انتظر تحميل DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) setMenuState(false);
});
