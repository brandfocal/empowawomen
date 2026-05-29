import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Instagram, Linkedin, Twitter, Youtube, ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}
interface MatrixCard {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor: string;
}
interface FooterNavItem {
  id: string;
  label: string;
  href: string;
}
interface FooterSectionRow {
  id: string;
  label: string;
  links: FooterNavItem[];
}
interface SocialIcon {
  id: string;
  label: string;
  Icon: React.ComponentType<{
    size?: number;
  }>;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLinkItem[] = [{
  id: "nl-home",
  label: "Home",
  href: "#"
}, {
  id: "nl-about",
  label: "About",
  href: "#about"
}, {
  id: "nl-summits",
  label: "Summits",
  href: "#summits",
  hasDropdown: true
}, {
  id: "nl-pillars",
  label: "Pillars",
  href: "#pillars",
  hasDropdown: true
}, {
  id: "nl-academy",
  label: "Academy",
  href: "#academy"
}, {
  id: "nl-partners",
  label: "Partners",
  href: "#partners"
}, {
  id: "nl-contact",
  label: "Contact",
  href: "#contact"
}];
const HERO_LINES = [{
  id: "hl-1",
  words: ["Lead", "Fearlessly."]
}, {
  id: "hl-2",
  words: ["Shape", "Narrative."]
}, {
  id: "hl-3",
  words: ["Control", "Capital."]
}];
const UNDERLINED_WORDS = new Set(["Fearlessly.", "Narrative.", "Capital."]);
const MATRIX_CARDS: MatrixCard[] = [{
  id: "m-01",
  number: "01",
  title: "Entrepreneurship & Funding Architecture",
  description: "Venture capital access points, private equity matchmakings, enterprise acceleration, procurement pathways, and startup scaling solutions for the modern founder.",
  accentColor: "#FF2D87"
}, {
  id: "m-02",
  number: "02",
  title: "Leadership, Governance & Boards Ecosystem",
  description: "Executive leadership positioning frameworks, board readiness training, stakeholder relationship compliance systems, succession mapping, and ethical leadership validation.",
  accentColor: "#FD5732"
}, {
  id: "m-03",
  number: "03",
  title: "Communications, Advertising, Marketing & Brand Strategy",
  description: "AI-powered marketing models, digital PR control systems, reputation management frameworks, and consumer behavior intelligence tracking for dominant brand presence.",
  accentColor: "#DD6236"
}, {
  id: "m-04",
  number: "04",
  title: "The Creative & Digital Economy Stage",
  description: "Intellectual property monetization frameworks, fashion/film streaming licensing networks, content creation business frameworks, and digital storytelling influence metrics.",
  accentColor: "#1655B5"
}];
const FOOTER_ROWS: FooterSectionRow[] = [{
  id: "row-pages",
  label: "Pages",
  links: [{
    id: "fp-1",
    label: "About",
    href: "#about"
  }, {
    id: "fp-2",
    label: "Summits",
    href: "#summits"
  }, {
    id: "fp-3",
    label: "Programs",
    href: "#programs"
  }, {
    id: "fp-4",
    label: "Partners",
    href: "#partners"
  }, {
    id: "fp-5",
    label: "Agenda",
    href: "#agenda"
  }, {
    id: "fp-6",
    label: "Contact",
    href: "#contact"
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
const SOCIAL_ICONS: SocialIcon[] = [{
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
const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];
const INTRO_WORDS = ["A", "Unified", "Framework", "for", "Executive", "Dominance"];

// ─── Top Navigation ───────────────────────────────────────────────────────────
const TopNav = () => {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <div className="fixed top-0 left-0 right-0 z-[100]">
      <header className="relative flex items-center px-4 sm:px-8 lg:px-16 xl:px-20" style={{
      height: "68px",
      backgroundColor: "rgba(10,10,15,0.97)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)"
    }}>
        {/* Scroll progress bar */}
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
          <div className="flex items-center justify-center shrink-0 rounded" style={{
          width: 32,
          height: 32,
          backgroundColor: "#FF2D87"
        }}>
            <span style={{
            color: "#fff",
            fontFamily: "Figtree, sans-serif",
            fontWeight: 700,
            fontSize: 14
          }}>
              EW
            </span>
          </div>
          <span style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: 16,
          fontWeight: 500,
          whiteSpace: "nowrap",
          letterSpacing: "0.02em"
        }}>
            <span style={{
            color: "#FFFFFF"
          }}>Empowa</span>
            <span style={{
            color: "#FF2D87"
          }}>Women</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex flex-1 justify-center items-center">
          {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
              <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: hoveredLink === link.id ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
            textDecoration: "none",
            padding: "6px 10px",
            transition: "color 150ms ease-out",
            position: "relative",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3
          }}>
                <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 3
            }}>
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
              transform: hoveredLink === link.id ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 200ms ease-out"
            }} />
              </a>
              {idx < NAV_LINKS.length - 1 && <span style={{
            color: "rgba(255,255,255,0.15)",
            fontSize: 8
          }}>·</span>}
            </React.Fragment>)}
        </nav>

        {/* Right side CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0 ml-auto">
          <a href="#" className="hidden sm:inline-flex items-center" style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          borderRadius: 0,
          padding: "8px 20px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
          transition: "filter 200ms ease-out",
          position: "relative",
          overflow: "hidden"
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
          <button className="lg:hidden flex items-center p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#FFFFFF"
        }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile/tablet drawer */}
      <AnimatePresence>
        {mobileOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} className="flex flex-col gap-5 px-4 sm:px-8 pt-6 pb-8" style={{
        backgroundColor: "rgba(10,10,15,0.98)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
            {NAV_LINKS.map(link => <a key={link.id} href={link.href} onClick={() => setMobileOpen(false)} style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.70)",
          textDecoration: "none"
        }}>
                {link.label}
              </a>)}
            <a href="#" className="text-center" style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: 14,
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          padding: "12px 24px",
          textDecoration: "none"
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
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  let wordIndex = 0;
  return <section className="relative z-[1] w-full min-h-screen overflow-hidden flex flex-col items-center justify-center" style={{
    backgroundColor: "#0A0A0F",
    paddingTop: 68,
    paddingBottom: 80
  }}>
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none z-[3]" style={{
      opacity: 0.04,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      backgroundSize: "256px 256px",
      animation: "grainShift 0.8s steps(1) infinite"
    }} />

      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
          <motion.div style={{
          y: imageY,
          position: "absolute",
          inset: 0
        }}>
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=85" alt="" className="w-full h-full object-cover" style={{
            objectPosition: "center 30%"
          }} />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
      }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-8 lg:px-9 pt-16 sm:pt-24 lg:pt-32 pb-12 flex flex-col items-center">
        <motion.div initial={{
        y: 90
      }} animate={{
        y: 0
      }} transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }} className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center mb-10 sm:mb-12">
            {/* Eyebrow */}
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="flex items-center justify-center gap-2.5 mb-5 flex-wrap text-center">
              <span className="inline-block shrink-0 rounded-full" style={{
              width: 6,
              height: 6,
              backgroundColor: "#FF2D87",
              animation: "pulseDot 2s ease-in-out infinite"
            }} />
              <span style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(9px, 2vw, 11px)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.60)",
              textTransform: "uppercase"
            }}>
                CAPITAL, MARKETING, CREATIVE &amp; LEADERSHIP SYSTEMS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="text-center mx-auto mb-6" style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(40px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            maxWidth: 900
          }}>
              {HERO_LINES.map(line => <span key={line.id} style={{
              display: "block"
            }}>
                  {line.words.map(word => {
                const currentIndex = wordIndex++;
                const isUnderlined = UNDERLINED_WORDS.has(word);
                const wordWithoutPeriod = isUnderlined ? word.slice(0, -1) : word;
                return <motion.span key={`hero-word-${currentIndex}`} style={{
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
                  delay: 0.4 + currentIndex * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}>
                        {isUnderlined ? <span style={{
                    textDecoration: "underline",
                    textDecorationColor: "#FF2D87",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "6px",
                    color: "#FFFFFF"
                  }}>
                            {wordWithoutPeriod}
                          </span> : word}
                        {isUnderlined && <span style={{
                    color: "#FF2D87",
                    textDecoration: "none"
                  }}>.</span>}
                      </motion.span>;
              })}
                </span>)}
            </motion.h1>

            {/* Sub-tagline */}
            <motion.div initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 1.1,
            ease: "easeOut"
          }} className="flex items-center justify-center mb-7 flex-wrap gap-1">
              {(["Ignite Passion", "Foster Growth", "Drive Change"] as const).map((tag, i) => <React.Fragment key={tag}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(10px, 2vw, 13px)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.40)"
              }}>
                    {tag}
                  </span>
                  {i < 2 && <span style={{
                display: "inline-block",
                width: 1,
                height: 14,
                backgroundColor: "rgba(255,255,255,0.20)",
                margin: "0 12px",
                verticalAlign: "middle"
              }} />}
                </React.Fragment>)}
            </motion.div>

            {/* Body */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.2
          }} className="text-center mx-auto mb-9" style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(14px, 2vw, 16px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            maxWidth: 620,
            lineHeight: 1.75
          }}>
              The most powerful platform for women accessing capital, controlling brand narratives,
              driving creative economies, and leading with ethical authority across Africa's corporate
              landscape.
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
          }} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
              <a href="#" className="inline-flex items-center justify-center gap-2 relative overflow-hidden" style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF2D87",
              height: 50,
              padding: "0 28px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              borderRadius: 0,
              transition: "all 200ms ease-out",
              boxShadow: "0 0 32px rgba(255,45,135,0.25)",
              whiteSpace: "nowrap"
            }} onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1.1)";
              el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
            }} onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1)";
              el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
            }}>
                <span className="relative z-[1] inline-flex items-center gap-2">
                  <span>Secure Your Seat</span>
                  <ArrowRight size={16} />
                </span>
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
              <a href="#" className="inline-flex items-center justify-center" style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 400,
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.05)",
              height: 50,
              padding: "0 28px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.10)",
              letterSpacing: "0.02em",
              borderRadius: 0,
              transition: "all 200ms ease-out",
              whiteSpace: "nowrap"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.10)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.05)";
            }}>
                Explore Pillars
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)"
    }} />

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes grainShift {
          0%   { transform: translate(0, 0); }
          10%  { transform: translate(-2px, 1px); }
          20%  { transform: translate(2px, -1px); }
          30%  { transform: translate(-1px, 2px); }
          40%  { transform: translate(1px, -2px); }
          50%  { transform: translate(0, 1px); }
          60%  { transform: translate(-2px, -1px); }
          70%  { transform: translate(2px, 2px); }
          80%  { transform: translate(-1px, -2px); }
          90%  { transform: translate(1px, 0); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>;
};

// ─── Introduction Section ─────────────────────────────────────────────────────
const IntroSection = () => {
  return <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 xl:px-24" style={{
    backgroundColor: "#0A0A0F"
  }}>
      <div className="max-w-[1200px] mx-auto">
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
      }} style={{
        fontFamily: "Figtree, sans-serif",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#FD5732",
        margin: "0 0 20px 0"
      }}>
          Systemic Integration
        </motion.p>

        <h2 className="mb-10" style={{
        fontFamily: "Figtree, sans-serif",
        fontWeight: 300,
        fontSize: "clamp(28px, 5vw, 64px)",
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "#FFFFFF",
        maxWidth: 720
      }}>
          {INTRO_WORDS.map((word, i) => <motion.span key={`iw-${i}`} style={{
          display: "inline-block",
          marginRight: "0.22em"
        }} initial={{
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
          delay: i * 0.08,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}>
              {word === "Dominance" ? <span style={{
            color: "#FF2D87"
          }}>{word}</span> : word}
            </motion.span>)}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-start">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <p className="mb-10" style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.70)",
            lineHeight: 1.75
          }}>
              Pillar 4.4 represents the command center of the Future Economy Growth Hub. By
              integrating capital access with strategic leadership and brand authority, we ensure
              women leaders don't just participate in the economy — they define its future trajectory.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="mb-2" style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#FD5732",
                lineHeight: 1,
                letterSpacing: "-0.02em"
              }}>
                  250+
                </p>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                margin: 0
              }}>
                  Global Partnerships
                </p>
              </div>
              <div>
                <p className="mb-2" style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#FF2D87",
                lineHeight: 1,
                letterSpacing: "-0.02em"
              }}>
                  40%
                </p>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                margin: 0
              }}>
                  Capital Uplift
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.96
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }} className="relative overflow-hidden" style={{
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1674" alt="Executive Strategy" className="w-full block object-cover" style={{
            aspectRatio: "16/10"
          }} />
            <div className="absolute inset-0" style={{
            background: "linear-gradient(to top, rgba(10,10,15,0.90) 0%, transparent 60%)"
          }} />
            <div className="absolute bottom-6 left-6 right-6" style={{
            borderLeft: "2px solid #DD6236",
            paddingLeft: 16,
            paddingTop: 8,
            paddingBottom: 8
          }}>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: 13,
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.55,
              margin: 0
            }}>
                "Control over the narrative is as critical as control over the capital. We provide the
                systems to master both."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

// ─── Four Operational Matrices Grid ──────────────────────────────────────────
const MatricesSection = () => {
  return <section className="relative z-10 py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 xl:px-24" style={{
    backgroundColor: "#F7F6F2",
    borderRadius: "20px 20px 0 0",
    boxShadow: "0 -24px 64px rgba(0,0,0,0.4)"
  }}>
      <style>{`
        @media (min-width: 640px) {
          .matrices-section-rounded { border-radius: 40px 40px 0 0 !important; }
        }
      `}</style>

      <div className="matrices-section-rounded max-w-[1200px] mx-auto">
        <div className="mb-10 sm:mb-14 lg:mb-18">
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
        }} style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#FD5732",
          margin: "0 0 16px 0"
        }}>
            Operational Framework
          </motion.p>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="mb-4" style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px, 4vw, 52px)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#0A0A0F",
          maxWidth: 600
        }}>
            Four Integrated Operational Matrices
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "#64748b",
          maxWidth: 560,
          lineHeight: 1.75,
          margin: 0
        }}>
            High-performance frameworks designed for the modern enterprise ecosystem, ensuring
            scalability and sustainable influence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border border-black/[0.08]">
          {MATRIX_CARDS.map((card, idx) => <motion.div key={card.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: idx * 0.1
        }} className="flex flex-col gap-5 p-7 sm:p-8 lg:p-12 cursor-default" style={{
          backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.08)",
          transition: "border-color 300ms ease-out, box-shadow 300ms ease-out"
        }} onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(253,87,50,0.30)";
          el.style.boxShadow = "0 4px 24px rgba(253,87,50,0.08)";
        }} onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(0,0,0,0.08)";
          el.style.boxShadow = "none";
        }}>
              <div className="flex items-center gap-3">
                <span className="block shrink-0 rounded-sm" style={{
              width: 3,
              height: 36,
              backgroundColor: card.accentColor
            }} />
                <span style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              color: card.accentColor,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              display: "block"
            }}>
                  {card.number}
                </span>
              </div>
              <h3 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "#0A0A0F",
            lineHeight: 1.25,
            margin: 0,
            letterSpacing: "-0.01em"
          }}>
                {card.title}
              </h3>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(13px, 1.8vw, 15px)",
            fontWeight: 400,
            color: "#64748b",
            lineHeight: 1.7,
            margin: 0
          }}>
                {card.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

// ─── B2B Action Strip ─────────────────────────────────────────────────────────
const ActionStrip = () => {
  return <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 xl:px-24" style={{
    backgroundColor: "#0A0A0F",
    borderTop: "1px solid rgba(255,255,255,0.06)"
  }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{
      background: "linear-gradient(to right, transparent 0%, #FD5732 30%, transparent 100%)"
    }} />

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-14">
          <div>
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
          }} className="mb-5" style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#FD5732"
          }}>
              Exclusive Access
            </motion.p>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} className="mb-5" style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            maxWidth: 800
          }}>
              Access Exclusive Pillar Intelligence &amp; Partnership Opportunities
            </motion.h2>
            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            lineHeight: 1.75,
            margin: 0
          }}>
              Secure your position at the forefront of the future economy. Our strategic tracks are
              limited to high-potential leaders and enterprise partners.
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
          delay: 0.3
        }} className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2.5 relative overflow-hidden w-full sm:w-auto" style={{
            padding: "14px 28px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            border: "none",
            borderRadius: 0,
            cursor: "pointer",
            transition: "filter 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }}>
              <span className="relative z-[1] flex items-center gap-2">
                <span>Request Specific Pillar Keynote Materials</span>
                <ArrowRight size={16} />
              </span>
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
            </button>

            <button className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto" style={{
            padding: "14px 28px",
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#FFFFFF",
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 0,
            cursor: "pointer",
            transition: "background-color 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
          }}>
              <span>Sponsor Vertical Track</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>;
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const FooterSection = () => {
  return <footer id="contact" className="relative w-full overflow-hidden flex flex-col items-center py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24" style={{
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF"
  }}>
      {/* Background image overlay */}
      <div className="absolute top-0 left-1/2 w-full pointer-events-none select-none" style={{
      transform: "translateX(-50%)",
      maxWidth: 1400,
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

      <div className="relative z-[1] w-full max-w-[1200px] flex flex-col">
        {/* CTA Section */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
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
          }} style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.60)",
            margin: 0
          }}>
              Get Started
            </motion.p>

            <h2 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(32px, 7vw, 96px)",
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            margin: 0
          }}>
              {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-word-${i}`} initial={{
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

            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            delay: 0.8
          }} style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: 448,
            lineHeight: 1.75,
            margin: 0
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
        }} className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto" style={{
            padding: "14px 28px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            border: "none",
            borderRadius: 0,
            cursor: "pointer",
            transition: "filter 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }}>
              <span>Secure Your Seat</span>
              <ArrowRight size={18} />
            </button>
            <button className="inline-flex items-center justify-center w-full sm:w-auto" style={{
            padding: "14px 28px",
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#FFFFFF",
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 0,
            cursor: "pointer",
            transition: "background-color 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
          }}>
              About EmpowaWomen
            </button>
          </motion.div>
        </div>

        {/* Section link rows */}
        <div className="flex flex-col gap-8 w-full mt-16">
          {FOOTER_ROWS.map(row => <div key={row.id} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full">
              <span className="shrink-0" style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            minWidth: 80
          }}>
                {row.label}
              </span>
              <div className="hidden sm:block h-px flex-grow" style={{
            backgroundColor: "rgba(255,255,255,0.10)"
          }} />
              <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                {row.links.map(link => <a key={link.id} href={link.href} style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              transition: "color 200ms ease-out",
              whiteSpace: "nowrap"
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
          <div className="pt-8 flex flex-col gap-3" style={{
          borderTop: "1px solid rgba(255,255,255,0.08)"
        }}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 w-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center shrink-0 rounded" style={{
                  width: 28,
                  height: 28,
                  backgroundColor: "#FF2D87"
                }}>
                    <span style={{
                    color: "#fff",
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 700,
                    fontSize: 12
                  }}>
                      EW
                    </span>
                  </div>
                  <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  letterSpacing: "0.02em"
                }}>
                    <span style={{
                    color: "#FFFFFF"
                  }}>Empowa</span>
                    <span style={{
                    color: "#FF2D87"
                  }}>Women</span>
                  </span>
                </div>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.25)",
                margin: 0
              }}>
                  © {new Date().getFullYear()} EmpowaWomen. All rights reserved.
                </p>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: 14,
                fontWeight: 300,
                fontStyle: "italic",
                color: "#FF2D87",
                margin: 0
              }}>
                  <span>Ignite Passion | Foster Growth | Drive Change</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                {SOCIAL_ICONS.map(({
                id,
                label,
                Icon
              }) => <a key={id} href="#" aria-label={label} className="flex items-center justify-center" style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "background-color 300ms, color 300ms, border-color 300ms"
              }} onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#FFFFFF";
                el.style.color = "#0A0A0F";
                el.style.borderColor = "#FFFFFF";
              }} onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(255,255,255,0.05)";
                el.style.color = "#FFFFFF";
                el.style.borderColor = "rgba(255,255,255,0.10)";
              }}>
                    <Icon size={18} />
                  </a>)}
              </div>
            </div>

            <p className="text-center mt-3" style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: 13,
            color: "rgba(255,255,255,0.25)"
          }}>
              Ignite Passion | Foster Growth | Drive Change
            </p>
          </div>
        </div>
      </div>
    </footer>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const CapitalLeadershipPillar = () => {
  return <div className="w-full" style={{
    backgroundColor: "#0A0A0F"
  }}>
      <TopNav />
      <HeroSection />
      <IntroSection />
      <MatricesSection />
      <ActionStrip />
      <FooterSection />
    </div>;
};