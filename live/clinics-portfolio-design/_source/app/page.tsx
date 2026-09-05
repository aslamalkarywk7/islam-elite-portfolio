"use client"

import { useState, useEffect, type FormEvent } from "react"

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "الخدمات" },
  { href: "#doctors", label: "الأطباء" },
  { href: "#gallery", label: "المعرض" },
  { href: "#testimonials", label: "الآراء" },
  { href: "#contact", label: "تواصل معنا" },
]

const services = [
  {
    icon: "M12 2v20M2 12h20M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4",
    title: "الطب العام",
    description: "رعاية صحية شاملة للبالغين مع تشخيص دقيق وعلاج فعال لجميع الحالات الطبية اليومية.",
  },
  {
    icon: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    title: "طب القلب",
    description: "تشخيص وعلاج أمراض القلب بأحدث الأجهزة وفريق من أمهر استشاريي القلب والأوعية الدموية.",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "طب الأسنان",
    description: "خدمات شاملة للأسنان من التنظيف والتجميل إلى زراعة الأسنان وتقويمها بأحدث التقنيات.",
  },
  {
    icon: "M9 11H1v3h8v3l3-3-3-3v0M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c2.5 0 4.79.92 6.55 2.44",
    title: "العلاج الطبيعي",
    description: "برامج علاج طبيعي متخصصة لإعادة التأهيل وعلاج آلام العمود الفقري والمفاصل والإصابات الرياضية.",
  },
  {
    icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
    title: "طب الأطفال",
    description: "رعاية طبية متكاملة للأطفال من الولادة حتى المراهقة في بيئة آمنة ومريحة.",
  },
  {
    icon: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z",
    title: "طب النساء والولادة",
    description: "رعاية شاملة لصحة المرأة في كل مراحل حياتها مع متابعة الحمل والولادة بأعلى معايير الجودة.",
  },
]

const features = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "جودة معتمدة",
    text: "حاصلون على شهادات الجودة العالمية والاعتماد من أبرز الهيئات الطبية الدولية",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "متاح 24/7",
    text: "خدمات الطوارئ والاستشارات الطبية على مدار الساعة طوال أيام الأسبوع",
  },
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "كادر متميز",
    text: "نخبة من الأطباء والمتخصصين بخبرات عالية وشهادات معتمدة عالمياً",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "أحدث التقنيات",
    text: "استثمار مستمر في أحدث الأجهزة والتقنيات الطبية لضمان أفضل النتائج",
  },
]

const stats = [
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    value: "50K+",
    label: "مريض راضٍ",
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z",
    value: "120+",
    label: "طبيب متخصص",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    value: "25+",
    label: "عام من الخبرة",
  },
  {
    icon: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 008 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H2a2 2 0 110-4h.09A1.65 1.65 0 004.6 8a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V2a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H22a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z",
    value: "30+",
    label: "تخصص طبي",
  },
]

const doctors = [
  {
    image: "/images/doctor-1.jpg",
    specialty: "استشاري قلب",
    name: "د. أحمد المصري",
    title: "بروفيسور أمراض القلب والأوعية الدموية",
  },
  {
    image: "/images/doctor-2.jpg",
    specialty: "استشاري نساء",
    name: "د. فاطمة العتيبي",
    title: "أخصائية أمراض النساء والولادة",
  },
  {
    image: "/images/doctor-3.jpg",
    specialty: "استشاري عظام",
    name: "د. محمد الخالدي",
    title: "أخصائي جراحة العظام والمفاصل",
  },
  {
    image: "/images/doctor-4.jpg",
    specialty: "استشاري أطفال",
    name: "د. سارة الحسيني",
    title: "أخصائية طب وحديثي الولادة",
  },
]

const galleryItems = [
  { src: "/images/gallery-1.jpg", title: "صالة الانتظار", desc: "بيئة هادئة ومريحة" },
  { src: "/images/gallery-2.jpg", title: "غرفة الفحص", desc: "أحدث المعدات الطبية" },
  { src: "/images/gallery-3.jpg", title: "الممرات الفاخرة", desc: "تصميم معماري راقٍ" },
  { src: "/images/gallery-4.jpg", title: "غرفة الاستشارة", desc: "خصوصية وراحة تامة" },
  { src: "/images/gallery-5.jpg", title: "عيادة الأسنان", desc: "تكنولوجيا متطورة" },
]

const testimonials = [
  {
    rating: 5,
    text: "تجربة استثنائية بكل المقاييس. الطاقم الطبي محترف للغاية، والمنشأة فاخرة وراقية. حصلت على رعاية متميزة وعلاج فعال أعاد لي ثقتي بالعلاج الطبي في بلدنا.",
    name: "خالد العلي",
    role: "رجل أعمال",
    initials: "خ.ع",
  },
  {
    rating: 5,
    text: "أفضل عيادة زرتها على الإطلاق. الاهتمام بالتفاصيل، والتعامل الراقي، والكفاءة الطبية العالية جعلت من رحلتي العلاجية تجربة مريحة ومطمئنة. أنصح بها بشدة.",
    name: "نورة السعيد",
    role: "معلمة",
    initials: "ن.س",
  },
  {
    rating: 5,
    text: "خدمة طبية عالمية المستوى بلمسة محلية دافئة. الأطباء يستمعون بإنصات ويشخصون بدقة، والمتابعة بعد العلاج كانت ممتازة. شكراً لكل من ساهم في تجربتي الرائعة.",
    name: "عبدالرحمن الحربي",
    role: "مهندس",
    initials: "ع.ح",
  },
]

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [formMessage, setFormMessage] = useState("")
  const [newsletterMessage, setNewsletterMessage] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 80)
      setShowScrollTop(y > 600)

      // Active section
      const sections = navLinks.map((l) => l.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  const handleAppointmentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormMessage("تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد الموعد.")
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setFormMessage(""), 5000)
  }

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterMessage("شكراً لاشتراكك! ستصلك آخر أخبارنا الطبية.")
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setNewsletterMessage(""), 5000)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      {/* HEADER */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="nav">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "#home")}>
            <span className="logo-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.8 2.3A.3.3 0 1 0 5.4 3" />
                <path d="M6.4 7c.9.9 1.7 2 2.1 3.2" />
                <path d="M6 9a6 6 0 0 0 0 6" />
                <path d="M16 9a6 6 0 0 1 0 6" />
                <path d="M4.9 19a2 2 0 1 0 2.1-3.3" />
              </svg>
            </span>
            <span className="logo-text">
              <span className="logo-primary">النخبة</span>
              <span className="logo-secondary">EliteMedical</span>
            </span>
          </a>

          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#appointment" className="btn-nav" onClick={(e) => handleNavClick(e, "#appointment")}>
              احجز موعدك
            </a>
            <button
              type="button"
              className="nav-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label="فتح القائمة"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          type="button"
          className="mobile-menu-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="إغلاق القائمة"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#appointment" onClick={(e) => handleNavClick(e, "#appointment")}>
              احجز موعدك
            </a>
          </li>
        </ul>
      </div>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-dot"></span>
                  <span>رعاية طبية فاخرة منذ عام 1999</span>
                </div>
                <h1 className="hero-title">
                  رعاية صحية <span className="hero-title-accent">متميزة</span> بأعلى معايير الجودة والفخامة
                </h1>
                <p className="hero-description">
                  نقدم لكم خدمات طبية شاملة بأحدث التقنيات والمعدات الطبية، مع نخبة من أمهر الأطباء والمتخصصين، في بيئة
                  راقية تجمع بين الفخامة والاحترافية.
                </p>
                <div className="hero-actions">
                  <a href="#appointment" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#appointment")}>
                    احجز موعدك الآن
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l-7 7 7 7" />
                    </svg>
                  </a>
                  <a href="#services" className="btn btn-outline" onClick={(e) => handleNavClick(e, "#services")}>
                    خدماتنا الطبية
                  </a>
                </div>
                <div className="hero-stats">
                  <div>
                    <div className="hero-stat-value">50K+</div>
                    <div className="hero-stat-label">مريض راضٍ</div>
                  </div>
                  <div>
                    <div className="hero-stat-value">120+</div>
                    <div className="hero-stat-label">طبيب متخصص</div>
                  </div>
                  <div>
                    <div className="hero-stat-value">25+</div>
                    <div className="hero-stat-label">عام خبرة</div>
                  </div>
                </div>
              </div>

              <div className="hero-image">
                <img src="/images/hero-doctor.jpg" alt="طبيبة محترفة في عيادات النخبة الطبية" />
                <div className="hero-image-card hero-image-card-1">
                  <div className="card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="card-text-primary">معتمدة دولياً</div>
                    <div className="card-text-secondary">شهادات الجودة العالمية</div>
                  </div>
                </div>
                <div className="hero-image-card hero-image-card-2">
                  <div className="card-icon accent" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="card-text-primary">متاح 24/7</div>
                    <div className="card-text-secondary">خدمات الطوارئ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="container">
            <div className="about-grid">
              <div className="about-images fade-in">
                <div className="about-img">
                  <img src="/images/about-1.jpg" alt="استقبال العيادة الفاخرة" />
                </div>
                <div className="about-img">
                  <img src="/images/about-2.jpg" alt="فريق الأطباء المتخصصين" />
                </div>
                <div className="about-img">
                  <img src="/images/about-3.jpg" alt="المعدات الطبية المتطورة" />
                </div>
                <div className="about-experience">
                  <div className="about-experience-num">25+</div>
                  <div className="about-experience-text">عام من التميز</div>
                </div>
              </div>

              <div className="about-content fade-in">
                <div className="section-header">
                  <span className="section-tag">من نحن</span>
                  <h2 className="section-title">رحلة من التميز في تقديم الرعاية الصحية</h2>
                  <p className="section-subtitle">
                    تأسست عيادات النخبة الطبية لتكون منارة للرعاية الصحية المتميزة، حيث نجمع بين الخبرة الطبية العميقة
                    والتقنيات الحديثة لنقدم تجربة علاجية استثنائية تليق بثقة عملائنا الكرام.
                  </p>
                </div>

                <div className="about-features">
                  <div className="about-feature">
                    <div className="about-feature-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="about-feature-title">معايير عالمية</h3>
                      <p className="about-feature-text">
                        نتبع أحدث البروتوكولات الطبية العالمية ونحرص على الحصول على الشهادات الدولية المعتمدة
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="about-feature-title">فريق من الخبراء</h3>
                      <p className="about-feature-text">
                        نخبة من الأطباء والمتخصصين بخبرات تتجاوز 25 عاماً في مختلف التخصصات الطبية
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-icon" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="about-feature-title">تقنيات متطورة</h3>
                      <p className="about-feature-text">
                        أحدث الأجهزة والمعدات الطبية لضمان دقة التشخيص وفعالية العلاج بأعلى المعايير
                      </p>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#contact")}>
                  تعرف علينا أكثر
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section services">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">خدماتنا</span>
              <h2 className="section-title">خدمات طبية شاملة بأعلى المعايير</h2>
              <p className="section-subtitle">
                نقدم باقة متكاملة من الخدمات الطبية في مختلف التخصصات لتلبية كافة احتياجاتكم الصحية
              </p>
            </div>

            <div className="services-grid">
              {services.map((s, i) => (
                <div key={i} className="service-card fade-in">
                  <div className="service-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-description">{s.description}</p>
                  <a href="#appointment" className="service-link" onClick={(e) => handleNavClick(e, "#appointment")}>
                    اعرف المزيد
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l-7 7 7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section features">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">لماذا نحن</span>
              <h2 className="section-title">ما يميزنا عن غيرنا</h2>
              <p className="section-subtitle">نسعى دائماً لتقديم أفضل تجربة طبية لعملائنا الكرام</p>
            </div>

            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} className="feature-card fade-in">
                  <div className="feature-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={f.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-text">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="section stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="stat-item fade-in">
                  <div className="stat-icon" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCTORS */}
        <section id="doctors" className="section doctors">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">فريقنا الطبي</span>
              <h2 className="section-title">نخبة من أمهر الأطباء والمتخصصين</h2>
              <p className="section-subtitle">
                فريق طبي متميز من ذوي الخبرات العالية والشهادات العالمية لتقديم أفضل رعاية صحية
              </p>
            </div>

            <div className="doctors-grid">
              {doctors.map((d, i) => (
                <div key={i} className="doctor-card fade-in">
                  <div className="doctor-image">
                    <img src={d.image || "/placeholder.svg"} alt={d.name} />
                  </div>
                  <div className="doctor-info">
                    <span className="doctor-specialty">{d.specialty}</span>
                    <h3 className="doctor-name">{d.name}</h3>
                    <p className="doctor-title">{d.title}</p>
                    <div className="doctor-social">
                      <a href="#" aria-label="LinkedIn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="#" aria-label="Email">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">المعرض</span>
              <h2 className="section-title">جولة في عياداتنا الفاخرة</h2>
              <p className="section-subtitle">
                صممت عياداتنا بأرقى المعايير لتوفير بيئة هادئة ومريحة تليق بزوارنا الكرام
              </p>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((g, i) => (
                <div key={i} className="gallery-item fade-in">
                  <img src={g.src || "/placeholder.svg"} alt={g.title} />
                  <div className="gallery-overlay">
                    <h4>{g.title}</h4>
                    <p>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="section testimonials">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">آراء المرضى</span>
              <h2 className="section-title">ماذا يقول عملاؤنا عنا</h2>
              <p className="section-subtitle">شهادات حقيقية من عملائنا الكرام تعكس مستوى الخدمة والرعاية التي نقدمها</p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card fade-in">
                  <span className="testimonial-quote" aria-hidden="true">
                    &ldquo;
                  </span>
                  <div className="testimonial-rating" aria-label={`تقييم ${t.rating} من 5`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPOINTMENT */}
        <section id="appointment" className="section appointment">
          <div className="container">
            <div className="appointment-card fade-in">
              <div className="appointment-info">
                <span className="appointment-tag">احجز موعدك</span>
                <h2 className="appointment-title">ابدأ رحلتك العلاجية معنا اليوم</h2>
                <p className="appointment-description">
                  احجز موعدك الآن واستمتع بتجربة طبية متميزة مع فريقنا من أمهر الأطباء و��لمتخصصين في بيئة فاخرة وراقية.
                </p>
                <div className="appointment-features">
                  <div className="appointment-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>استشارة مجانية للزيارة الأولى</span>
                  </div>
                  <div className="appointment-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>مواعيد مرنة تناسب جدولك</span>
                  </div>
                  <div className="appointment-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>متابعة دورية بعد العلاج</span>
                  </div>
                  <div className="appointment-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>خصوصية تامة وسرية المعلومات</span>
                  </div>
                </div>
              </div>

              <form className="appointment-form" onSubmit={handleAppointmentSubmit}>
                <h3 className="form-title">احجز موعدك الآن</h3>
                <p className="form-subtitle">املأ النموذج وسنتواصل معك خلال 24 ساعة</p>

                <div className="form-row">
                  <div>
                    <label htmlFor="firstName" className="form-label">
                      الاسم الأول
                    </label>
                    <input type="text" id="firstName" name="firstName" className="form-input" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="form-label">
                      اسم العائلة
                    </label>
                    <input type="text" id="lastName" name="lastName" className="form-input" required />
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="phone" className="form-label">
                      رقم الجوال
                    </label>
                    <input type="tel" id="phone" name="phone" className="form-input" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      البريد الإلكتروني
                    </label>
                    <input type="email" id="email" name="email" className="form-input" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialty" className="form-label">
                    التخصص المطلوب
                  </label>
                  <select id="specialty" name="specialty" className="form-select" required defaultValue="">
                    <option value="" disabled>
                      اختر التخصص
                    </option>
                    <option value="general">الطب العام</option>
                    <option value="cardio">طب القلب</option>
                    <option value="dental">طب الأسنان</option>
                    <option value="physio">العلاج الطبيعي</option>
                    <option value="pediatric">طب الأطفال</option>
                    <option value="women">طب النساء والولادة</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    رسالتك (اختياري)
                  </label>
                  <textarea id="message" name="message" className="form-textarea" rows={3}></textarea>
                </div>

                <button type="submit" className="form-submit">
                  تأكيد الحجز
                </button>

                {formMessage && <div className="form-message success">{formMessage}</div>}
              </form>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="container">
            <div className="section-header fade-in">
              <span className="section-tag">تواصل معنا</span>
              <h2 className="section-title">نحن هنا لخدمتكم على مدار الساعة</h2>
              <p className="section-subtitle">
                تواصلوا معنا في أي وقت لحجز المواعيد أو الاستفسار عن خدماتنا الطبية
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card fade-in">
                <div className="contact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="contact-card-title">العنوان</h3>
                <p className="contact-card-text">
                  شارع الملك فهد
                  <br />
                  الرياض، المملكة العربية السعودية
                </p>
              </div>

              <div className="contact-card fade-in">
                <div className="contact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <h3 className="contact-card-title">الهاتف</h3>
                <p className="contact-card-text">
                  <a href="tel:+966112345678">+966 11 234 5678</a>
                  <a href="tel:+966500000000">+966 50 000 0000</a>
                </p>
              </div>

              <div className="contact-card fade-in">
                <div className="contact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className="contact-card-title">البريد الإلكتروني</h3>
                <p className="contact-card-text">
                  <a href="mailto:info@elite-medical.sa">info@elite-medical.sa</a>
                  <a href="mailto:support@elite-medical.sa">support@elite-medical.sa</a>
                </p>
              </div>

              <div className="contact-card fade-in">
                <div className="contact-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <h3 className="contact-card-title">ساعات العمل</h3>
                <p className="contact-card-text">
                  السبت - الخميس: 8 ص - 10 م<br />
                  الجمعة: 2 م - 10 م
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-card fade-in">
              <h2 className="newsletter-title">اشترك في نشرتنا الإخبارية</h2>
              <p className="newsletter-text">
                احصل على آخر الأخبار الطبية والنصائح الصحية والعروض الحصرية مباشرة في بريدك الإلكتروني
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  aria-label="البريد الإلكتروني"
                />
                <button type="submit" className="newsletter-submit">
                  اشترك الآن
                </button>
              </form>
              {newsletterMessage && (
                <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.95)", position: "relative" }}>
                  {newsletterMessage}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.8 2.3A.3.3 0 1 0 5.4 3" />
                    <path d="M6.4 7c.9.9 1.7 2 2.1 3.2" />
                    <path d="M6 9a6 6 0 0 0 0 6" />
                    <path d="M16 9a6 6 0 0 1 0 6" />
                    <path d="M4.9 19a2 2 0 1 0 2.1-3.3" />
                  </svg>
                </span>
                <span className="logo-text">
                  <span className="logo-primary">النخبة</span>
                  <span className="logo-secondary">EliteMedical</span>
                </span>
              </div>
              <p className="footer-description">
                عيادات النخبة الطبية - وجهتك الأولى للرعاية الصحية المتميزة بأعلى معايير الجودة والفخامة منذ عام 1999.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">روابط سريعة</h4>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="footer-title">خدماتنا</h4>
              <div className="footer-links">
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
                  الطب العام
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
                  طب القلب
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
                  طب الأسنان
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
                  العلاج الطبيعي
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
                  طب الأطفال
                </a>
              </div>
            </div>

            <div>
              <h4 className="footer-title">معلومات التواصل</h4>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>شارع الملك فهد، الرياض، السعودية</span>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+966 11 234 5678</span>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@elite-medical.sa</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} عيادات النخبة الطبية. جميع الحقوق محفوظة.
            </p>
            <div className="footer-bottom-links">
              <a href="#">سياسة الخصوصية</a>
              <a href="#">الشروط والأحكام</a>
              <a href="#">خريطة الموقع</a>
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <button
        type="button"
        className={`scroll-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="العودة إلى الأعلى"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  )
}
