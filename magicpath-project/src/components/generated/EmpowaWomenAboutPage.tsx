import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Globe, Heart, Instagram, Linkedin, Menu, Target, Trophy, Twitter, Users, X, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import contextImage2 from "@/assets/magicpath/context/02-context-image-2-5e4b5ab63ff5.jpg";
import contextImage4 from "@/assets/magicpath/context/04-context-image-4-3ba848649d64.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
}
interface FooterNavItem {
  id: string;
  label: string;
  href: string;
}
interface SectionLinkRow {
  id: string;
  label: string;
  links: FooterNavItem[];
}
interface ImpactStat {
  id: string;
  label: string;
  value: string;
}
interface TeamMember {
  id: string;
  image: string;
  name: string;
  title: string;
  org: string;
  quote: string;
}
interface MiniStat {
  id: string;
  value: string;
  label: string;
}
interface BadgeItem {
  label: string;
  icon: React.ReactNode;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLinkItem[] = [{
  id: "nav-home",
  label: "Home",
  href: "#"
}, {
  id: "nav-about",
  label: "About",
  href: "#",
  active: true
}, {
  id: "nav-summits",
  label: "Summits",
  href: "#",
  hasDropdown: true
}, {
  id: "nav-pillars",
  label: "Pillars",
  href: "#",
  hasDropdown: true
}, {
  id: "nav-academy",
  label: "Academy",
  href: "#"
}, {
  id: "nav-partners",
  label: "Partners",
  href: "#"
}, {
  id: "nav-contact",
  label: "Contact",
  href: "#"
}];
const PARTNER_LOGOS = [{
  id: "pl-1",
  name: "ABSA"
}, {
  id: "pl-2",
  name: "DEPT. OF WOMEN"
}, {
  id: "pl-3",
  name: "STANDARD BANK"
}, {
  id: "pl-4",
  name: "ANGLO AMERICAN"
}, {
  id: "pl-5",
  name: "NEDBANK"
}, {
  id: "pl-6",
  name: "ESKOM"
}, {
  id: "pl-7",
  name: "MTN"
}, {
  id: "pl-8",
  name: "SASOL"
}, {
  id: "pl-9",
  name: "OLD MUTUAL"
}, {
  id: "pl-10",
  name: "GOVERNMENT OF SA"
}];
const EXTENDED_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];
const IMPACT_STATS: ImpactStat[] = [{
  id: "stat-1",
  label: "Global Speakers",
  value: "450+"
}, {
  id: "stat-2",
  label: "Years Running",
  value: "6+"
}, {
  id: "stat-3",
  label: "Funding Secured",
  value: "R Millions"
}, {
  id: "stat-4",
  label: "Provinces Reached",
  value: "9"
}];
const MINI_STATS: MiniStat[] = [{
  id: "ms-1",
  value: "10,000+",
  label: "Delegates"
}, {
  id: "ms-2",
  value: "450+",
  label: "Speakers"
}, {
  id: "ms-3",
  value: "9",
  label: "Provinces"
}];
const TEAM_MEMBERS: TeamMember[] = [{
  id: "tm-1",
  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85",
  name: "Dr. Naledi Dlamini",
  title: "Founder & CEO",
  org: "EmpowaWomen™ Ecosystem",
  quote: "We exist to position women at the centre of economic transformation."
}, {
  id: "tm-2",
  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=85",
  name: "Thandiwe Mokoena",
  title: "Chief Strategy Officer",
  org: "Partnerships & Growth",
  quote: "Every partnership we forge creates measurable economic impact for women across Africa."
}, {
  id: "tm-3",
  image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=85",
  name: "Amara Osei-Bonsu",
  title: "Head of Academy",
  org: "EmpowaHER™ Programme",
  quote: "The next generation of African women leaders is already rising. Our job is to accelerate that rise."
}, {
  id: "tm-4",
  image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=85",
  name: "Kemi Adeyemi",
  title: "Director of Summits",
  org: "Executive Experiences",
  quote: "We engineer spaces where conversations become contracts and connections become capital."
}];
const FOOTER_SECTION_ROWS: SectionLinkRow[] = [{
  id: "row-pages",
  label: "Pages",
  links: [{
    id: "fp-1",
    label: "About",
    href: "#"
  }, {
    id: "fp-2",
    label: "Summits",
    href: "#"
  }, {
    id: "fp-3",
    label: "Pillars",
    href: "#"
  }, {
    id: "fp-4",
    label: "Academy",
    href: "#"
  }, {
    id: "fp-5",
    label: "Partners",
    href: "#"
  }, {
    id: "fp-6",
    label: "Contact",
    href: "#"
  }]
}, {
  id: "row-programs",
  label: "Programs",
  links: [{
    id: "fp-7",
    label: "EmpowaHER",
    href: "#"
  }, {
    id: "fp-8",
    label: "Partnerships",
    href: "#"
  }, {
    id: "fp-9",
    label: "ESG Programs",
    href: "#"
  }, {
    id: "fp-10",
    label: "Resources",
    href: "#"
  }]
}, {
  id: "row-legal",
  label: "Legal",
  links: [{
    id: "fp-11",
    label: "Privacy Policy",
    href: "#"
  }, {
    id: "fp-12",
    label: "Terms",
    href: "#"
  }, {
    id: "fp-13",
    label: "FAQ",
    href: "#"
  }]
}];
const HERO_WORDS = ["Building", "Africa's", "Next", "Generation", "of", "Economic", "Powerhouses"];
const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];
const SOCIAL_ICONS = [{
  id: "s-instagram",
  label: "Instagram",
  Icon: Instagram
}, {
  id: "s-linkedin",
  label: "LinkedIn",
  Icon: Linkedin
}, {
  id: "s-x",
  label: "X",
  Icon: Twitter
}, {
  id: "s-youtube",
  label: "YouTube",
  Icon: Youtube
}];
const REACH_BADGES: BadgeItem[] = [{
  icon: <Globe size={16} className="text-[#00B4A6]" />,
  label: "Pan-African Network"
}, {
  icon: <Trophy size={16} className="text-[#D97706]" />,
  label: "Award Winning"
}, {
  icon: <Target size={16} className="text-[#FF2D87]" />,
  label: "Strategic Impact"
}];

// ─── Top Navigation ───────────────────────────────────────────────────────────
const TopNav = () => {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <div className="fixed top-0 left-0 right-0 z-[100]">
      <header className="relative flex items-center" style={{
      height: "68px",
      backgroundColor: "rgba(10,10,15,0.97)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      paddingLeft: "clamp(16px, 5vw, 80px)",
      paddingRight: "clamp(16px, 5vw, 80px)"
    }}>
        <motion.div style={{
        scaleX,
        transformOrigin: "left",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1.5px",
        backgroundColor: "#FF2D87"
      }} />

        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <img src={contextImage2} alt="EmpowaWomen logo mark" className="h-8 w-auto" />
          <span className="text-base font-medium whitespace-nowrap" style={{
          fontFamily: "Figtree",
          letterSpacing: "0.02em"
        }}>
            <span className="text-white">Empowa</span>
            <span style={{
            color: "#FF2D87"
          }}>Women</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex flex-1 justify-center items-center">
          {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
              <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} className="inline-flex flex-col items-center gap-[3px] px-3 py-1.5 no-underline transition-colors duration-150" style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: link.active || hoveredLink === link.id ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)"
          }}>
                <span className="inline-flex items-center gap-[3px]">
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={11} style={{
                color: hoveredLink === link.id ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.25)",
                transition: "color 150ms ease-out",
                flexShrink: 0
              }} />}
                </span>
                <span style={{
              display: "block",
              height: "1.5px",
              width: "100%",
              backgroundColor: "#FF2D87",
              transformOrigin: "left",
              transform: link.active || hoveredLink === link.id ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 200ms ease-out"
            }} />
              </a>
              {idx < NAV_LINKS.length - 1 && <span style={{
            color: "rgba(255,255,255,0.15)",
            fontSize: "8px"
          }}>·</span>}
            </React.Fragment>)}
        </nav>

        {/* Desktop CTA + hamburger */}
        <div className="flex items-center shrink-0 ml-auto md:ml-0">
          <a href="#" className="hidden md:inline-flex items-center overflow-hidden" style={{
          fontFamily: "Figtree",
          fontSize: "12px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          borderRadius: "999px",
          padding: "8px 20px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
          transition: "filter 200ms ease-out",
          position: "relative"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
        }}>
            <span style={{
            position: "relative",
            zIndex: 1
          }}>Secure Your Seat</span>
            <span style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "40%",
            background: "rgba(255,255,255,0.15)",
            transform: "skewX(-20deg) translateX(-100%)",
            animation: "shimmerSlide 3s linear infinite",
            pointerEvents: "none"
          }} />
          </a>

          <button className="md:hidden text-white p-2 ml-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="flex flex-col gap-4 px-5 py-6" style={{
        backgroundColor: "rgba(10,10,15,0.97)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
            {NAV_LINKS.map(link => <a key={link.id} href={link.href} className="no-underline text-base" style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          color: link.active ? "#FF2D87" : "rgba(255,255,255,0.70)"
        }} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>)}
            <a href="#" className="mt-2 text-sm font-medium text-white text-center no-underline rounded-full py-2.5 px-6 inline-block" style={{
          backgroundColor: "#FF2D87",
          fontFamily: "Figtree"
        }}>
              Secure Your Seat
            </a>
          </motion.div>}
      </AnimatePresence>

      <style>{`
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
      `}</style>
    </div>;
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  return <section className="relative w-full flex flex-col items-center justify-end overflow-hidden" style={{
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    paddingBottom: "clamp(48px, 8vh, 80px)",
    zIndex: 1
  }}>
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div className="absolute inset-0" initial={{
        scale: 1.06,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 2.4,
        ease: "easeOut"
      }}>
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=90" alt="" className="w-full h-full object-cover" style={{
          objectPosition: "center 30%"
        }} />
        </motion.div>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
      }} />
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none" style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
      zIndex: 2
    }} />

      {/* Content */}
      <div className="relative w-full flex flex-col items-center px-6 sm:px-8 md:px-12 lg:px-16" style={{
      zIndex: 10,
      maxWidth: "1400px"
    }}>
        <motion.div initial={{
        y: 90
      }} animate={{
        y: 0
      }} transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }} className="w-full flex flex-col items-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="inline-flex items-center gap-2.5 rounded-full mb-6 sm:mb-7" style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "8px 16px"
        }}>
            <span className="shrink-0 rounded-full" style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#FF2D87",
            display: "inline-block",
            animation: "pulseDot 2s ease-in-out infinite"
          }} />
            <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.20em",
            color: "rgba(255,255,255,0.60)"
          }}>
              CORE TRUST ARCHITECTURE · ABOUT US
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-white text-center w-full mx-auto" style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(40px, 8vw, 96px)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          maxWidth: "900px",
          margin: "0 auto 20px auto"
        }}>
            {HERO_WORDS.map((word, i) => {
            const isLast = i === HERO_WORDS.length - 1;
            return <motion.span key={`hw-${word}-${i}`} style={{
              display: "inline-block",
              marginRight: "0.25em"
            }} initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 20
            }} animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4 + i * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}>
                  {isLast ? <span>
                      <span style={{
                  textDecoration: "underline",
                  textDecorationColor: "#FF2D87",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  color: "#FFFFFF"
                }}>
                        {word}
                      </span>
                      <span style={{
                  color: "#FF2D87"
                }}>.</span>
                    </span> : word}
                </motion.span>;
          })}
          </h1>

          {/* Subtext */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.2
        }} className="text-center mx-auto" style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2.2vw, 17px)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.50)",
          maxWidth: "560px",
          margin: "0 auto 32px auto",
          lineHeight: 1.75
        }}>
            Detailing corporate legitimacy, emphasizing executive track records, and presenting the
            platform's vision to institutional investors and corporate directors.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} className="flex flex-wrap items-center justify-center gap-4 mb-10 sm:mb-12">
            <a href="#" className="inline-flex items-center no-underline rounded-full font-medium" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            color: "#FFFFFF",
            backgroundColor: "#FF2D87",
            height: "48px",
            padding: "0 28px",
            letterSpacing: "0.02em",
            transition: "all 200ms ease-out",
            boxShadow: "0 0 32px rgba(255,45,135,0.25)"
          }} onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.filter = "brightness(1.1)";
            el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.filter = "brightness(1)";
            el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
          }}>
              Join the Ecosystem
            </a>
            <a href="#" className="inline-flex items-center no-underline rounded-full" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 400,
            color: "#FFFFFF",
            height: "48px",
            padding: "0 28px",
            border: "1px solid rgba(255,255,255,0.20)",
            letterSpacing: "0.02em",
            transition: "all 200ms ease-out"
          }} onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "rgba(255,255,255,0.08)";
            el.style.borderColor = "rgba(255,255,255,0.40)";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.borderColor = "rgba(255,255,255,0.20)";
          }}>
              Our Story
            </a>
          </motion.div>

          {/* Partner marquee */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1.8
        }} className="w-full overflow-hidden" style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}>
            <motion.div animate={{
            x: ["0%", "-50%"]
          }} transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity
          }} style={{
            display: "flex",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
            whiteSpace: "nowrap",
            width: "max-content"
          }}>
              {EXTENDED_LOGOS.map((logo, i) => <div key={`logo-${logo.id}-${i}`} className="shrink-0 flex items-center" style={{
              height: "72px"
            }}>
                  <span className="uppercase cursor-default transition-colors duration-200" style={{
                fontFamily: "Figtree",
                fontSize: "clamp(10px, 1.5vw, 12px)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.20)"
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.60)";
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.20)";
              }}>
                    {logo.name}
                  </span>
                </div>)}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>;
};

// ─── Mission Bridge Section ────────────────────────────────────────────────────
const MissionBridgeSection = () => {
  return <section className="relative" style={{
    backgroundColor: "#F7F6F2",
    zIndex: 10
  }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16 lg:gap-24">
        {/* Left col */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="flex flex-col w-full md:w-[55%]">
          <span className="uppercase" style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "#64748b"
        }}>
            WHO WE ARE
          </span>
          <h2 className="mt-4 mb-0" style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(30px, 4.5vw, 60px)",
          color: "#0A0A0F",
          letterSpacing: "-0.03em",
          lineHeight: 1.0
        }}>
            Positioning Women at the Center of the Future Economy.
          </h2>
          <p className="mt-6 mb-0" style={{
          fontFamily: "Figtree",
          fontSize: "clamp(15px, 1.8vw, 17px)",
          fontWeight: 400,
          color: "#64748b",
          lineHeight: 1.75
        }}>
            We exist to position women at the centre of economic transformation by unlocking
            leadership acceleration, strategic partnerships, investment access, innovation, and
            scalable commercial growth across Africa. More than a summit platform, EmpowaWomen™ is a
            strategic ecosystem where women build influence, unlock opportunities, scale enterprises,
            shape policy, strengthen industries, and accelerate measurable economic participation.
          </p>
          <a href="#" className="mt-8 inline-flex items-center gap-1.5 no-underline transition-opacity duration-200" style={{
          fontFamily: "Figtree",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FF2D87"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "0.7";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
        }}>
            <span>Explore Our Programs</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Right col */}
        <motion.div initial={{
        opacity: 0,
        x: 20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="flex flex-col w-full md:w-[45%]">
          <div>
            <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(72px, 12vw, 140px)",
            color: "#0A0A0F",
            letterSpacing: "-0.05em",
            lineHeight: 1
          }}>
              <span>6</span>
              <span style={{
              color: "#FF2D87"
            }}>+</span>
            </span>
            <p className="mt-2 mb-0" style={{
            fontFamily: "Figtree",
            fontSize: "15px",
            fontWeight: 400,
            color: "#64748b"
          }}>
              Years of Structural Change
            </p>
          </div>

          <div className="my-8" style={{
          height: "1px",
          backgroundColor: "rgba(0,0,0,0.08)"
        }} />

          <div className="flex flex-row gap-6 sm:gap-8 flex-wrap">
            {MINI_STATS.map(stat => <div key={stat.id} className="flex flex-col">
                <span style={{
              fontFamily: "Figtree",
              fontWeight: 200,
              fontSize: "clamp(28px, 4vw, 36px)",
              color: "#0A0A0F",
              letterSpacing: "-0.03em",
              lineHeight: 1
            }}>
                  {stat.value}
                </span>
                <span className="mt-1" style={{
              fontFamily: "Figtree",
              fontSize: "12px",
              fontWeight: 400,
              color: "#64748b"
            }}>
                  {stat.label}
                </span>
              </div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};

// ─── Vision / Pillars Section ─────────────────────────────────────────────────
const VisionSection = () => {
  return <section className="relative overflow-hidden" style={{
    backgroundColor: "#F7F6F2",
    zIndex: 10,
    borderRadius: "40px 40px 0 0",
    boxShadow: "0 -24px 64px rgba(0,0,0,0.5)"
  }}>
      {/* PANEL 1 — Leading Fearlessly */}
      <div className="relative flex items-center overflow-hidden" style={{
      minHeight: "70vh",
      backgroundColor: "#0A0A0F"
    }}>
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=85" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{
        opacity: 0.35,
        mixBlendMode: "luminosity"
      }} />
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-16 sm:py-20 mx-auto max-w-[1400px]" style={{
        zIndex: 2
      }}>
          <motion.div initial={{
          opacity: 0,
          x: -24
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="flex flex-col order-2 md:order-1">
            <div className="mb-6 shrink-0" style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#FF2D87"
          }} />
            <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)"
          }}>
              LEADING FEARLESSLY
            </span>
            <h3 className="mt-6 mb-0" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 72px)",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            lineHeight: 0.95
          }}>
              Empowering women to lead boldly across every boardroom, industry, and economy.
            </h3>
            <p className="mt-8 mb-0" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            maxWidth: "480px"
          }}>
              Across boardrooms, industries, governments, media platforms, entrepreneurial
              ecosystems, and innovation economies — with confidence, influence, resilience, and
              strategic authority.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 24
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="flex justify-end items-start relative order-1 md:order-2" style={{
          paddingBottom: "80px"
        }}>
            <span className="select-none text-right" style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(80px, 15vw, 200px)",
            color: "rgba(255,45,135,0.30)",
            letterSpacing: "-0.05em",
            lineHeight: 1
          }}>
              01
            </span>
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }} className="absolute bottom-0 right-0 rounded-2xl px-6 py-5" style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}>
              <div style={{
              fontFamily: "Figtree",
              fontWeight: 200,
              fontSize: "48px",
              color: "#FFFFFF",
              lineHeight: 1
            }}>
                6+
              </div>
              <div className="mt-1 uppercase" style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.40)",
              letterSpacing: "0.12em"
            }}>
                Years Running
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* PANEL 2 — Accelerating Growth */}
      <div className="relative flex items-center overflow-hidden" style={{
      minHeight: "70vh",
      backgroundColor: "#F7F6F2"
    }}>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=85" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{
        opacity: 0.18
      }} />
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-16 sm:py-20 mx-auto max-w-[1400px]" style={{
        zIndex: 2
      }}>
          <motion.div initial={{
          opacity: 0,
          x: -24
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="flex justify-start items-start relative order-1" style={{
          paddingBottom: "80px"
        }}>
            <span className="select-none" style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(80px, 15vw, 200px)",
            color: "rgba(0,180,166,0.22)",
            letterSpacing: "-0.05em",
            lineHeight: 1
          }}>
              02
            </span>
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }} className="absolute bottom-0 left-0 rounded-2xl px-6 py-5" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(10,10,15,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.10)"
          }}>
              <div style={{
              fontFamily: "Figtree",
              fontWeight: 200,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#0A0A0F",
              lineHeight: 1
            }}>
                R Millions
              </div>
              <div className="mt-1" style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "#64748b"
            }}>
                In Enterprise Funding
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 24
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="flex flex-col order-2">
            <div className="mb-6 shrink-0" style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#00B4A6"
          }} />
            <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#64748b"
          }}>
              ACCELERATING GROWTH
            </span>
            <h3 className="mt-6 mb-0" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 72px)",
            color: "#0A0A0F",
            letterSpacing: "-0.04em",
            lineHeight: 0.95
          }}>
              Unlocking investment, enterprise growth, and strategic market access for women.
            </h3>
            <p className="mt-8 mb-0" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontWeight: 400,
            color: "#64748b",
            lineHeight: 1.75,
            maxWidth: "480px"
          }}>
              Unlocking investment opportunities, enterprise development, leadership acceleration,
              strategic partnerships, market access, digital transformation, and sustainable
              business growth for women-led enterprises and professionals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* PANEL 3 — Transforming Economies */}
      <div className="relative flex items-center overflow-hidden" style={{
      minHeight: "70vh",
      backgroundColor: "#0A0A0F"
    }}>
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=85" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{
        opacity: 0.35,
        mixBlendMode: "luminosity"
      }} />
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-16 sm:py-20 mx-auto max-w-[1400px]" style={{
        zIndex: 2
      }}>
          <motion.div initial={{
          opacity: 0,
          x: -24
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="flex flex-col order-2 md:order-1">
            <div className="mb-6 shrink-0" style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#D97706"
          }} />
            <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)"
          }}>
              TRANSFORMING ECONOMIES
            </span>
            <h3 className="mt-6 mb-0" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 72px)",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            lineHeight: 0.95
          }}>
              Driving inclusive economic participation and measurable industrial impact across
              Africa.
            </h3>
            <p className="mt-8 mb-0" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            maxWidth: "480px"
          }}>
              Driving inclusive economic participation, industrial competitiveness, innovation,
              sustainability, policy influence, and measurable socio-economic impact.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 24
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="flex justify-end items-start relative order-1 md:order-2" style={{
          paddingBottom: "80px"
        }}>
            <span className="select-none text-right" style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(80px, 15vw, 200px)",
            color: "rgba(217,119,6,0.30)",
            letterSpacing: "-0.05em",
            lineHeight: 1
          }}>
              03
            </span>
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }} className="absolute bottom-0 right-0 rounded-2xl px-6 py-5" style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)"
          }}>
              <div style={{
              fontFamily: "Figtree",
              fontWeight: 200,
              fontSize: "48px",
              color: "#FFFFFF",
              lineHeight: 1
            }}>
                9
              </div>
              <div className="mt-1 uppercase" style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.40)",
              letterSpacing: "0.12em"
            }}>
                Provinces Reached
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};

// ─── Pull Quote Section ────────────────────────────────────────────────────────
const PullQuoteSection = () => {
  return <section className="py-20 sm:py-24 md:py-28 lg:py-32" style={{
    backgroundColor: "#0A0A0F"
  }}>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }} className="max-w-[860px] mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        <span aria-hidden="true" className="block" style={{
        fontFamily: "Figtree",
        fontWeight: 200,
        fontSize: "clamp(80px, 15vw, 160px)",
        color: "rgba(255,255,255,0.04)",
        lineHeight: 0,
        marginBottom: "32px"
      }}>
          "
        </span>

        <blockquote style={{
        fontFamily: "Figtree",
        fontWeight: 300,
        fontStyle: "italic",
        fontSize: "clamp(18px, 3vw, 36px)",
        color: "rgba(255,255,255,0.85)",
        lineHeight: 1.4,
        margin: 0
      }}>
          EmpowaWomen is not just a summit. It is the room where Africa's most powerful women
          decide what comes next — and act on it.
        </blockquote>

        <div className="mt-10 mx-auto" style={{
        width: "48px",
        height: "1px",
        backgroundColor: "rgba(255,255,255,0.10)"
      }} />

        <p className="mt-4 mb-0 uppercase" style={{
        fontFamily: "Figtree",
        fontSize: "11px",
        fontWeight: 400,
        color: "rgba(255,255,255,0.30)",
        letterSpacing: "0.18em"
      }}>
          Executive Delegate · Annual Leadership Summit · Johannesburg
        </p>

        <div className="flex justify-center gap-1 mt-4">
          {[1, 2, 3, 4, 5].map(n => <svg key={`star-${n}`} width="16" height="16" viewBox="0 0 24 24" fill="#FF2D87" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>)}
        </div>
      </motion.div>
    </section>;
};

// ─── Leadership Strip ─────────────────────────────────────────────────────────
const LeadershipStrip = () => {
  return <section className="py-20 sm:py-24 md:py-28 lg:py-32" style={{
    backgroundColor: "#F7F6F2"
  }}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        <span className="block uppercase" style={{
        fontFamily: "Figtree",
        fontSize: "9px",
        fontWeight: 600,
        letterSpacing: "0.28em",
        color: "#64748b"
      }}>
          THE TEAM
        </span>
        <h2 className="mt-4 mb-0" style={{
        fontFamily: "Figtree",
        fontWeight: 300,
        fontSize: "clamp(28px, 4vw, 52px)",
        color: "#0A0A0F",
        letterSpacing: "-0.03em",
        lineHeight: 1.1
      }}>
          The Movement Behind the Mission.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 sm:mt-16">
          {TEAM_MEMBERS.map((member, idx) => <motion.div key={member.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: idx * 0.1,
          ease: "easeOut"
        }} className="rounded-2xl overflow-hidden cursor-default" style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(10,10,15,0.06)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          transition: "box-shadow 300ms ease-out, transform 300ms ease-out"
        }} whileHover={{
          y: -4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.10)"
        } as any}>
              <div className="overflow-hidden" style={{
            aspectRatio: "3/4"
          }}>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top block" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="m-0" style={{
              fontFamily: "Figtree",
              fontSize: "17px",
              fontWeight: 500,
              color: "#0A0A0F"
            }}>
                  {member.name}
                </p>
                <p className="mt-1 mb-0" style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 400,
              color: "#64748b"
            }}>
                  {member.title}
                </p>
                <p className="mt-0.5 mb-0" style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "#94a3b8"
            }}>
                  {member.org}
                </p>
                <p className="mt-3 mb-0 pl-3" style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "14px",
              color: "rgba(100,116,139,0.70)",
              lineHeight: 1.6,
              borderLeft: "2px solid #FF2D87"
            }}>
                  {member.quote}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

// ─── Reach / Impact Stats Section ────────────────────────────────────────────
const ReachSection = () => {
  return <section className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32" style={{
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF"
  }}>
      <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=90" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" style={{
      opacity: 0.12,
      mixBlendMode: "luminosity",
      zIndex: 0
    }} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
      background: "linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.75) 60%, rgba(10,10,15,0.92) 100%)",
      zIndex: 1
    }} />
      <div aria-hidden="true" className="absolute bottom-0 left-0 pointer-events-none" style={{
      width: "50%",
      height: "60%",
      background: "radial-gradient(ellipse at bottom left, rgba(255,45,135,0.07) 0%, transparent 70%)",
      zIndex: 1
    }} />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24 xl:gap-32 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 mx-auto max-w-[1400px]" style={{
      zIndex: 2
    }}>
        {/* Left — big number + stats */}
        <div className="w-full lg:flex-1">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }} className="mb-10 sm:mb-12">
            <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(60px, 12vw, 140px)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            marginBottom: "8px",
            color: "#FFFFFF"
          }}>
              10,000+
            </h2>
            <p className="uppercase" style={{
            fontFamily: "Figtree",
            fontWeight: 400,
            fontSize: "16px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.40)"
          }}>
              Delegates Connected
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            {IMPACT_STATS.map((stat, idx) => <motion.div key={stat.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1,
            duration: 0.5
          }} className="py-2 pl-6" style={{
            borderLeft: "1px solid rgba(255,255,255,0.10)"
          }}>
                <div style={{
              fontFamily: "Figtree",
              fontWeight: 200,
              fontSize: "clamp(18px, 3vw, 24px)",
              marginBottom: "4px",
              color: "#FFFFFF"
            }}>
                  {stat.value}
                </div>
                <div className="uppercase" style={{
              fontFamily: "Figtree",
              fontWeight: 600,
              fontSize: "9px",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.40)"
            }}>
                  {stat.label}
                </div>
              </motion.div>)}
          </div>
        </div>

        {/* Right — text + badges */}
        <div className="w-full lg:flex-1">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-8" style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: "clamp(15px, 1.8vw, 17px)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.55)"
        }}>
            Through premium experiences, we transform conversations into partnerships, investment
            opportunities, market access, and sustainable growth. We convene influential CXOs,
            entrepreneurs, investors, policymakers, innovators, media leaders, and changemakers
            driving the next era of African competitiveness.
          </motion.p>
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4
        }} className="flex flex-wrap gap-3 sm:gap-4">
            {REACH_BADGES.map(badge => <div key={badge.label} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{
            border: "1px solid rgba(255,255,255,0.10)",
            backgroundColor: "rgba(255,255,255,0.05)"
          }}>
                {badge.icon}
                <span style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.70)"
            }}>
                  {badge.label}
                </span>
              </div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};

// ─── Logo Wall ────────────────────────────────────────────────────────────────
const LogoWall = () => {
  const doubled = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return <section className="py-16 sm:py-20 overflow-hidden" style={{
    backgroundColor: "#F7F6F2"
  }}>
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 mb-10 sm:mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-12 flex-wrap">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="max-w-[512px]">
            <span className="block uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#64748b"
          }}>
              TRUST ARCHITECTURE
            </span>
            <h2 className="mt-3 mb-0" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(24px, 3.5vw, 44px)",
            color: "#0A0A0F",
            letterSpacing: "-0.03em",
            lineHeight: 1.1
          }}>
              Trusted by Africa's most respected institutions.
            </h2>
            <p className="mt-4 mb-0" style={{
            fontFamily: "Figtree",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: 1.75,
            color: "#64748b"
          }}>
              Global enterprises, government bodies, development finance institutions, and
              progressive brands partnering with the EmpowaWomen™ ecosystem to drive measurable
              economic transformation.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="shrink-0 pl-5" style={{
          borderLeft: "3px solid #FF2D87"
        }}>
            <div style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(36px, 5vw, 52px)",
            color: "#0A0A0F",
            letterSpacing: "-0.03em",
            lineHeight: 1
          }}>
              50+
            </div>
            <p className="mt-1 mb-0" style={{
            fontFamily: "Figtree",
            fontSize: "13px",
            fontWeight: 400,
            color: "#64748b"
          }}>
              Enterprise Partners
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 z-10" style={{
        background: "linear-gradient(to right, #F7F6F2, transparent)"
      }} />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 z-10" style={{
        background: "linear-gradient(to left, #F7F6F2, transparent)"
      }} />

        <div className="flex overflow-hidden">
          <div className="flex animate-logo-marquee whitespace-nowrap py-4">
            {doubled.map((logo, idx) => <div key={`${logo.id}-${idx}`} className="mx-8 sm:mx-12 uppercase cursor-default transition-colors duration-200" style={{
            fontFamily: "Figtree",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.28em",
            color: "rgba(10,10,15,0.20)"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.color = "rgba(10,10,15,0.70)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.color = "rgba(10,10,15,0.20)";
          }}>
                {logo.name}
              </div>)}
          </div>
          <div className="flex absolute top-0 animate-logo-marquee2 whitespace-nowrap py-4">
            {doubled.map((logo, idx) => <div key={`${logo.id}-dup-${idx}`} className="mx-8 sm:mx-12 uppercase cursor-default" style={{
            fontFamily: "Figtree",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.28em",
            color: "rgba(10,10,15,0.20)"
          }}>
                {logo.name}
              </div>)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logo-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes logo-marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-logo-marquee { animation: logo-marquee 40s linear infinite; }
        .animate-logo-marquee2 { animation: logo-marquee2 40s linear infinite; }
      `}</style>
    </section>;
};

// ─── Footer ────────────────────────────────────────────────────────────────────
const FooterSection = () => {
  return <footer id="contact" className="relative w-full flex flex-col items-center overflow-hidden pt-20 sm:pt-24 pb-10 sm:pb-12 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24" style={{
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF"
  }}>
      {/* Bg image overlay */}
      <div className="pointer-events-none select-none" style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: "1400px",
      aspectRatio: "2/1",
      opacity: 0.3
    }}>
        <div className="w-full h-full" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maskImage: "linear-gradient(to top, transparent 0%, black 35%)",
        WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 35%)"
      }} />
      </div>

      <div className="relative w-full max-w-[1200px] flex flex-col gap-0" style={{
      zIndex: 1
    }}>
        {/* CTA block */}
        <section className="flex flex-col gap-8 sm:gap-10 max-w-full">
          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.p initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="m-0 uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.10em",
            color: "rgba(255,255,255,0.60)"
          }}>
              GET INVOLVED
            </motion.p>

            <div className="max-w-[672px]">
              <h2 style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(36px, 7vw, 96px)",
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: 0
            }}>
                {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`fw-${i}`} initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 20
              }} whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }} style={{
                display: "inline-block",
                marginRight: "0.2em"
              }}>
                    {word}
                  </motion.span>)}
              </h2>
            </div>

            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            delay: 0.8
          }} className="max-w-[448px]" style={{
            fontFamily: "Figtree",
            fontWeight: 400,
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.45)",
            margin: "16px 0 0 0"
          }}>
              Summit invitations, leadership insights, and curated opportunities for Africa's most
              ambitious women — delivered directly to you.
            </motion.p>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 1.0
        }} className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 cursor-pointer border-none" style={{
            padding: "14px 24px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            borderRadius: "0",
            transition: "filter 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }}>
              <span>Join the Ecosystem</span>
              <ArrowRight size={18} />
            </button>
            <button className="cursor-pointer" style={{
            padding: "14px 24px",
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "0",
            transition: "background-color 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
          }}>
              About EmpowaWomen
            </button>
          </motion.div>
        </section>

        {/* Footer nav rows */}
        <section className="flex flex-col gap-6 sm:gap-8 w-full mt-14 sm:mt-16">
          {FOOTER_SECTION_ROWS.map(row => <div key={row.id} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full">
              <span className="shrink-0" style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.50)",
            minWidth: "80px",
            whiteSpace: "nowrap"
          }}>
                {row.label}
              </span>
              <div className="hidden sm:block flex-grow" style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.10)"
          }} />
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 sm:justify-end">
                {row.links.map(link => <a key={link.id} href={link.href} className="no-underline whitespace-nowrap transition-colors duration-200" style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
            }}>
                    {link.label}
                  </a>)}
              </div>
            </div>)}

          {/* Bottom bar */}
          <div className="mt-14 sm:mt-16 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-6 w-full" style={{
          borderTop: "1px solid rgba(255,255,255,0.06)"
        }}>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5">
                <img src={contextImage2} alt="EmpowaWomen logo mark" style={{
                height: "28px",
                width: "auto"
              }} />
                <span style={{
                fontFamily: "Figtree",
                fontSize: "18px",
                fontWeight: 500,
                letterSpacing: "0.02em"
              }}>
                  <span className="text-white">Empowa</span>
                  <span style={{
                  color: "#FF2D87"
                }}>Women</span>
                </span>
                <span className="ml-3" style={{
                fontFamily: "Figtree",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.20)"
              }}>
                  © {new Date().getFullYear()} EmpowaWomen.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {SOCIAL_ICONS.map(({
              id,
              label,
              Icon
            }) => <a key={id} href="#" aria-label={label} className="flex items-center justify-center rounded-full text-white no-underline transition-all duration-300" style={{
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)"
            }} onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#FFFFFF";
              el.style.color = "#0A0A0F";
            }} onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(255,255,255,0.05)";
              el.style.color = "#FFFFFF";
            }}>
                  <Icon size={18} />
                </a>)}
            </div>
          </div>

          <p className="mt-1 mb-0 text-center italic" style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "14px",
          color: "#FF2D87"
        }}>
            Ignite Passion | Foster Growth | Drive Change
          </p>
        </section>
      </div>
    </footer>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const EmpowaWomenAboutPage: React.FC = () => {
  return <main className="selection:bg-[#FF2D87]/30" style={{
    minHeight: "100vh",
    fontFamily: "Figtree"
  }}>
      <TopNav />
      <HeroSection />
      <MissionBridgeSection />
      <VisionSection />
      <PullQuoteSection />
      <LeadershipStrip />
      <ReachSection />
      <LogoWall />
      <FooterSection />
    </main>;
};