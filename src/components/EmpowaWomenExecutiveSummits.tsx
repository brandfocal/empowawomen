import React, { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

/* ─── SERIES CARD ───────────────────────────────────────────────────────────── */

interface SeriesCardProps {
  title: string;
  bgImage: string;
  accentColor: string;
  badge: string;
  formatBadge?: string;
  description?: string;
  isLarge?: boolean;
  isFullWidth?: boolean;
  className?: string;
}
export const SeriesCard: React.FC<SeriesCardProps> = ({
  title,
  bgImage,
  accentColor,
  badge,
  formatBadge,
  description,
  isLarge = false,
  isFullWidth = false,
  className
}) => {
  return <motion.div whileHover="hover" initial="rest" animate="rest" style={{
    position: "relative",
    borderRadius: "32px",
    overflow: "hidden",
    cursor: "pointer",
    width: "100%",
    height: isLarge ? "clamp(360px, 45vw, 540px)" : isFullWidth ? "clamp(240px, 25vw, 320px)" : "clamp(220px, 22vw, 260px)"
  }} className={`group ${className || ""}`} variants={{
    rest: {
      scale: 1,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    },
    hover: {
      scale: 1.01,
      boxShadow: '0 24px 48px rgba(0,0,0,0.30)'
    }
  }} transition={{
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1]
  }}>
    {/* Background Image */}
    <motion.div variants={{
      rest: {
        scale: 1
      },
      hover: {
        scale: 1.06
      }
    }} transition={{
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }} style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <img src={bgImage} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: 'linear-gradient(to top, rgba(10,10,15,0.97) 0%, rgba(10,10,15,0.50) 50%, transparent 100%)'
      }} />
    </motion.div>

    {/* Accent glow on hover */}
    <div style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      filter: "blur(100px)",
      opacity: 0,
      pointerEvents: "none",
      transition: "opacity 700ms",
      backgroundColor: accentColor
    }} className="about-glow-effect" />

    {/* Top badge */}
    <div style={{ position: "absolute", top: "24px", left: "24px", zIndex: 20 }}>
      <span style={{
        backgroundColor: accentColor,
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 16px",
        borderRadius: "999px",
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.2em",
        color: "#FFFFFF",
        textTransform: "uppercase"
      }}>
        {badge}
      </span>
    </div>

    {/* Content */}
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 10,
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <h3 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          color: "#FFFFFF",
          lineHeight: 1.2,
          marginBottom: "12px",
          fontSize: isLarge ? "clamp(22px, 3vw, 32px)" : isFullWidth ? "clamp(20px, 2.5vw, 28px)" : "clamp(17px, 2vw, 22px)",
          transition: "transform 150ms ease-out"
        }} className="about-translate-y">
          {title}
        </h3>

        {description && <p style={{
          color: "rgba(255,255,255,0.50)",
          fontSize: "14px",
          fontWeight: 300,
          maxWidth: "90%",
          lineHeight: 1.6,
          marginBottom: "20px",
          transition: "transform 150ms ease-out"
        }} className="about-translate-y">
          {description}
        </p>}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "16px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.60)",
            fontSize: "13px",
            fontWeight: 500,
            transition: "color 150ms ease-out, transform 150ms ease-out"
          }} className="about-view-details">
            {isFullWidth ? <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "14px" }}>
              <span>View Gala Details </span>
              <ArrowRight size={14} style={{ display: "inline-block", marginLeft: "4px" }} />
            </span> : <>
              <span>View Details</span>
              <ArrowRight size={15} />
            </>}
          </div>

          {formatBadge && <span style={{
            backgroundColor: "rgba(0,0,0,0.30)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderColor: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.15)",
            fontFamily: 'Figtree',
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 12px",
            borderRadius: "999px",
            fontSize: "10px",
            color: "rgba(255,255,255,0.60)",
            flexShrink: 0
          }}>
            {formatBadge}
          </span>}
        </div>
      </div>
    </div>

    {/* Hover Line */}
    <motion.div variants={{
      rest: {
        scaleX: 0
      },
      hover: {
        scaleX: 1
      }
    }} transition={{
      duration: 0.4,
      ease: 'easeOut'
    }} style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "4px",
      originX: 0,
      zIndex: 20,
      backgroundColor: accentColor
    }} />
  </motion.div>;
};

/* ─── SUMMIT HERO HEADER ──────────────────────────────────────────────────────── */

interface AvatarItem {
  id: string;
  src: string;
  alt: string;
}
interface LogoItem {
  id: string;
  name: string;
  src: string;
}
const AVATAR_DATA: AvatarItem[] = [{
  id: "av-1",
  src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80",
  alt: "Community member"
}, {
  id: "av-2",
  src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80",
  alt: "Community member"
}, {
  id: "av-3",
  src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80",
  alt: "Community member"
}, {
  id: "av-4",
  src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
  alt: "Community member"
}, {
  id: "av-5",
  src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=80&q=80",
  alt: "Community member"
}, {
  id: "av-6",
  src: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=80&q=80",
  alt: "Community member"
}];
const LOGOS: LogoItem[] = [{
  id: "logo-1",
  name: "ABSA",
  src: "/absa-logo.png"
}, {
  id: "logo-2",
  name: "CCBSA",
  src: "/ccbsa.png"
}, {
  id: "logo-3",
  name: "Old Mutual",
  src: "/old_mutual_logo - Copy.png"
}, {
  id: "logo-4",
  name: "WRSETA",
  src: "/WRSETA.jpg"
}, {
  id: "logo-5",
  name: "EmpowaWomen",
  src: "/logo.png"
}];
const EXTENDED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];
const HEADLINE_WORDS = ["Transforming", "Conversations", "into", "Partnerships", "&", "Market", "Access."];
const UNDERLINED_WORDS = new Set(["Partnerships", "Access."]);

export const SummitHeroHeader: React.FC = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  return <section style={{
    position: "relative",
    zIndex: 1,
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "68px",
    paddingBottom: "80px"
  }}>
    {/* Grain noise layer */}
    <div style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 3,
      opacity: 0.04,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      backgroundSize: "256px 256px",
      animation: "grainShift 0.8s steps(1) infinite"
    }} />

    {/* Background image layer */}
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <motion.div style={{ position: "absolute", inset: 0 }} initial={{
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
          <img src="/features-15.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
        </motion.div>
      </motion.div>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
      }} />
    </div>

    {/* Content wrapper */}
    <div style={{
      position: "relative",
      zIndex: 10,
      width: "100%",
      maxWidth: "1400px",
      paddingLeft: "clamp(20px, 5vw, 48px)",
      paddingRight: "clamp(20px, 5vw, 48px)",
      paddingTop: "clamp(80px, 12vw, 128px)",
      paddingBottom: "48px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <motion.div initial={{
        y: 90
      }} animate={{
        y: 0
      }} transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }} style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Pre-heading */}
        <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#FF2D87",
            display: "inline-block",
            flexShrink: 0,
            animation: "pulseDot 2s ease-in-out infinite"
          }} />
          <span style={{
            color: "rgba(255,255,255,0.60)",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase"
          }}>
            CALENDAR MATRIX · PARENT HUB
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }} style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "clamp(38px, 7.5vw, 96px)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          maxWidth: "900px",
          margin: "0 auto 24px auto"
        }}>
          {HEADLINE_WORDS.map((word, i) => {
            const isUnderlined = UNDERLINED_WORDS.has(word);
            const hasPeriod = word.endsWith(".");
            const wordWithoutPeriod = hasPeriod ? word.slice(0, -1) : word;
            return <motion.span key={`hero-word-${i}`} style={{
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
              {isUnderlined ? <span style={{
                textDecoration: "underline",
                textDecorationColor: "#FF2D87",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
                color: "#FFFFFF"
              }}>
                {wordWithoutPeriod}
              </span> : wordWithoutPeriod}
              {hasPeriod && <span style={{
                color: "#FF2D87",
                textDecoration: "none"
              }}>.</span>}
            </motion.span>;
          })}
        </motion.h1>

        {/* Description */}
        <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.2
        }} style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 17px)",
          color: "rgba(255,255,255,0.50)",
          maxWidth: "580px",
          lineHeight: 1.75,
          marginBottom: "36px",
          paddingLeft: "8px",
          paddingRight: "8px",
          textAlign: "center"
        }}>
          Premium, invitation-only executive leadership and future economy platforms
          engineered for measurable economic participation.
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
        }} className="summits-cta-container" style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "64px",
          width: "100%",
          padding: "0 16px"
        }}>
          <RouterLink to="/summit" style={{
            fontFamily: "Figtree",
            fontSize: "15px",
            fontWeight: 500,
            color: "#FFFFFF",
            backgroundColor: "#FF2D87",
            height: "50px",
            padding: "0 32px",
            textDecoration: "none",
            letterSpacing: "0.02em",
            borderRadius: "999px",
            transition: "all 200ms ease-out",
            boxShadow: "0 0 32px rgba(255,45,135,0.25)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }} className="summits-cta-btn" onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.filter = "brightness(1.1)";
            el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.filter = "brightness(1)";
            el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
          }}>
            <span>View Summit Calendar</span>
            <ArrowRight size={16} />
          </RouterLink>
          <RouterLink to="/partnerships" style={{
            fontFamily: "Figtree",
            fontSize: "15px",
            fontWeight: 400,
            color: "#FFFFFF",
            backgroundColor: "transparent",
            height: "50px",
            padding: "0 32px",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.20)",
            letterSpacing: "0.02em",
            borderRadius: "999px",
            transition: "all 200ms ease-out",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }} className="summits-cta-btn" onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "rgba(255,255,255,0.08)";
            el.style.borderColor = "rgba(255,255,255,0.40)";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.borderColor = "rgba(255,255,255,0.20)";
          }}>
            Partner With Us
          </RouterLink>
        </motion.div>

        {/* Social proof / Avatar row */}
        <motion.div initial={{
          opacity: 0,
          y: 12
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 1.6,
          ease: "easeOut"
        }} style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "48px"
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {AVATAR_DATA.map((av, idx) => <div key={av.id} style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "2px solid #0A0A0F",
              overflow: "hidden",
              marginLeft: idx === 0 ? 0 : "-10px",
              flexShrink: 0
            }}>
              <img src={av.src} alt={av.alt} style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} />
            </div>)}
          </div>
          <span style={{
            fontFamily: "Figtree",
            fontSize: "13px",
            color: "rgba(255,255,255,0.50)"
          }}>
            <span>Join </span>
            <span style={{
              fontWeight: 600,
              color: "rgba(255,255,255,0.80)"
            }}>10,000+ women</span>
            <span> already registered</span>
          </span>
        </motion.div>

        {/* Logo marquee */}
        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1.8
        }} style={{
          width: "100%",
          overflow: "hidden",
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
            {EXTENDED_LOGOS.map((logo, i) => <div key={`logo-${logo.id}-${i}`} style={{
              flexShrink: 0,
              height: "72px",
              display: "flex",
              alignItems: "center"
            }}>
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  height: "32px",
                  width: "auto",
                  maxWidth: "130px",
                  objectFit: "contain",
                  opacity: 0.85,
                  filter: "none",
                  transition: "opacity 200ms ease-out",
                  cursor: "default"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                }}
              />
            </div>)}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom gradient overlay */}
    <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
      pointerEvents: "none",
      zIndex: 2
    }} />
  </section>;
};

/* ─── DATA ──────────────────────────────────────────────────────────────────── */

const STATS_DATA = [{
  numericValue: 4,
  display: '4',
  label: 'Summit Series',
  accentColor: '#FF2D87'
}, {
  numericValue: 9,
  display: '9',
  label: 'Provinces Covered',
  accentColor: '#00B4A6'
}, {
  numericValue: 10,
  display: '10',
  label: 'Industry Streams',
  accentColor: '#D97706'
}, {
  numericValue: 10000,
  display: '10,000+',
  label: 'Delegates',
  accentColor: '#6D28D9'
}];
const OUTCOME_ROWS = [{
  id: 'outcome-1',
  bg: '#FF2D87',
  title: 'Strategic Partnerships',
  desc: "Direct access to decision-makers, investors, and enterprise leaders driving Africa's economic agenda."
}, {
  id: 'outcome-2',
  bg: '#00B4A6',
  title: 'Capital & Investment Access',
  desc: 'Curated introductions to funders, procurement networks, and high-value commercial opportunities.'
}, {
  id: 'outcome-3',
  bg: '#D97706',
  title: 'Executive Influence',
  desc: "Position your brand, voice, and leadership at the centre of Africa's most consequential rooms."
}];
const GALA_PILLS = [{
  id: 'pill-1',
  label: 'Saturday, 29 August 2026'
}, {
  id: 'pill-2',
  label: '16:00–20:00'
}, {
  id: 'pill-3',
  label: 'EmpowaWorx House Jhb'
}];
const STAR_INDICES = [1, 2, 3, 4, 5];

/* ─── ANIMATED COUNTER ──────────────────────────────────────────────────────── */

interface AnimatedCounterProps {
  target: number;
  display: string;
  accentColor: string;
}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  display,
  accentColor
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const steps = 60;
    const interval = 25;
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, target]);
  const formattedCount = target === 10000 ? count >= 10000 ? '10,000+' : count.toLocaleString() : count.toString();
  return <span ref={ref} style={{
    fontFamily: "Figtree",
    fontWeight: 200,
    color: "#FFFFFF",
    lineHeight: 1,
    fontSize: 'clamp(40px, 6vw, 72px)'
  }}>
    {isInView ? formattedCount : display}
  </span>;
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────────── */

export const SummitsHub: React.FC = () => {
  return <div className="selection:bg-[#FF2D87]/20 selection:text-[#FF2D87]" style={{
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    fontFamily: "Figtree",
    width: "100%"
  }}>
    <main>
      {/* Hero Section */}
      <SummitHeroHeader />

      {/* ── CONTENT SECTION ── */}
      <section style={{
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
        backgroundColor: "#F7F6F2",
        marginTop: '-72px',
        borderRadius: '32px 32px 0 0',
        boxShadow: '0 -24px 64px rgba(0,0,0,0.15)'
      }}>
        {/* ─── 1. VALUE PROPOSITION BRIDGE ─── */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: 'clamp(20px, 6vw, 96px)',
          paddingRight: 'clamp(20px, 6vw, 96px)',
          paddingTop: 'clamp(56px, 8vw, 96px)',
          paddingBottom: 'clamp(56px, 8vw, 96px)'
        }}>
          <div className="summits-flex-container" style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "64px"
          }}>
            {/* Left */}
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
              ease: [0.21, 0.47, 0.32, 0.98]
            }} style={{ flex: "1 1 50%", minWidth: "300px", display: "flex", flexDirection: "column" }}>
              <span style={{
                display: "block",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                color: "#64748b",
                textTransform: "uppercase"
              }}>
                WHY THESE SUMMITS
              </span>
              <h2 style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                color: "#0A0A0F",
                marginTop: "16px",
                marginBottom: "0",
                fontSize: 'clamp(28px, 4vw, 56px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.0
              }}>
                <span>Where conversations become contracts and influence becomes capital.</span>
              </h2>
              <p style={{
                fontFamily: "Figtree",
                color: "#64748b",
                marginTop: "24px",
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                lineHeight: 1.7,
                maxWidth: '28rem'
              }}>
                Each EmpowaWomen summit is engineered as a high-value economic participation
                platform, not a conference. Every session, interaction, and experience is
                designed to generate measurable strategic outcomes for every delegate in the room.
              </p>
            </motion.div>

            {/* Right – outcome rows */}
            <div style={{ flex: "1 1 40%", minWidth: "280px", display: "flex", flexDirection: "column" }}>
              {OUTCOME_ROWS.map((row, i) => <motion.div key={row.id} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }} style={{
                display: "flex",
                alignItems: "start",
                gap: "16px",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderTop: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.08)'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: row.bg,
                  flexShrink: 0
                }} />
                <div>
                  <p style={{
                    color: "#0A0A0F",
                    margin: "0",
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    fontWeight: 500
                  }}>
                    {row.title}
                  </p>
                  <p style={{
                    color: "#64748b",
                    fontSize: 'clamp(13px, 1.3vw, 14px)',
                    lineHeight: 1.65,
                    margin: '4px 0 0 0'
                  }}>
                    {row.desc}
                  </p>
                </div>
              </motion.div>)}
            </div>
          </div>
        </div>

        {/* ─── SERIES HEADLINE ─── */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: 'clamp(20px, 6vw, 96px)',
          paddingRight: 'clamp(20px, 6vw, 96px)'
        }}>
          <div className="summits-flex-container" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "32px",
            marginBottom: "64px"
          }}>
            <div style={{ maxWidth: "600px" }}>
              <span style={{
                display: "block",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#FF2D87",
                textTransform: "uppercase",
                marginBottom: "16px"
              }}>
                THE 2026–2027 SUMMIT SERIES
              </span>
              <h2 style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                color: "#0A0A0F",
                lineHeight: "1.1",
                fontSize: 'clamp(36px, 5vw, 64px)',
                margin: 0
              }}>
                <span>Four platforms.</span>
                <br />
                <span>One ecosystem.</span>
              </h2>
            </div>
            <p style={{
              color: "rgba(10,10,15,0.60)",
              maxWidth: "384px",
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              margin: 0
            }}>
              Our platforms bridge the gap between high-level policy dialogue and localized
              economic implementation.
            </p>
          </div>

          {/* ─── 2. SERIES CARD GRID ─── */}
          <div className="summits-grid-12" style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "24px",
            paddingBottom: "96px"
          }}>
            {/* Card 1: IWD Summit */}
            <div className="summits-col-span-8" style={{ gridColumn: "span 8" }}>
              <SeriesCard isLarge title="International Women's Day Summit" bgImage="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=85" accentColor="#FF2D87" badge="IWD 2027" formatBadge="Invitation-Only · 200 Delegates" description="The flagship gathering for high-level decision makers and economic architects driving gender-balanced growth strategies." />
            </div>

            {/* Column for Card 2 and 3 */}
            <div className="summits-col-span-4" style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", gap: "24px" }}>
              <SeriesCard title="Provincial Leadership Series" bgImage="/features-18.jpg" accentColor="#00B4A6" badge="9 PROVINCES" formatBadge="Invitation-Only · 100 Per Province" description="Localized economic participation models." />
              <SeriesCard title="Executive Leadership Experiences" bgImage="/features-7.jpg" accentColor="#D97706" badge="10 STREAMS" formatBadge="100 Per Session" description="Sector-specific engineering and market access." />
            </div>

            {/* Card 4: Bubbles & Nibbles – Full width */}
            <div className="summits-col-span-12" style={{ gridColumn: "span 12" }}>
              <SeriesCard isFullWidth title="Bubbles & Nibbles Soirée & Leadership Awards" bgImage="/features-20.jpg" accentColor="#6D28D9" badge="GALA · Saturday, 29 August 2026" formatBadge="Strictly Invitation-Only · 200 CXOs" description="Celebrating excellence and fostering high-impact networking in an elite setting of recognition." />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. DELEGATE PULL-QUOTE ─── */}
      <section style={{ backgroundColor: "#F7F6F2", paddingTop: "96px", paddingBottom: "96px" }}>
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
          ease: 'easeOut'
        }} style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          paddingLeft: 'clamp(20px, 6vw, 96px)',
          paddingRight: 'clamp(20px, 6vw, 96px)',
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: 'clamp(80px, 15vw, 160px)',
            color: 'rgba(10,10,15,0.04)',
            lineHeight: 0,
            marginBottom: "32px",
            userSelect: "none"
          }}>
            <span>"</span>
          </div>
          <blockquote style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 3vw, 36px)',
            color: 'rgba(10,10,15,0.80)',
            lineHeight: 1.4,
            margin: 0
          }}>
            EmpowaWomen is not a conference. It is a room where Africa's most powerful women
            decide what comes next, and forge the relationships that make it happen.
          </blockquote>
          <div style={{
            width: '48px',
            height: '1px',
            backgroundColor: 'rgba(0,0,0,0.10)',
            marginTop: "40px",
            marginBottom: "16px"
          }} />
          <p style={{
            fontFamily: "Figtree",
            fontSize: "11px",
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            margin: 0
          }}>
            Executive Delegate · Annual Leadership Summit · Johannesburg
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            marginTop: "16px"
          }}>
            {STAR_INDICES.map(n => <Star key={`star-${n}`} size={16} style={{ fill: "#FF2D87", color: "#FF2D87" }} />)}
          </div>
        </motion.div>
      </section>

      {/* ─── 3. FLAGSHIP SPOTLIGHT ─── */}
      <section className="flagship-grid">
        {/* Left panel */}
        <div className="flagship-left" style={{
          backgroundColor: '#1a0533',
          padding: 'clamp(40px, 7vw, 96px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Radial glow */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '384px',
            height: '384px',
            background: 'radial-gradient(circle at top right, rgba(109,40,217,0.20) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <motion.div initial={{
            opacity: 0,
            y: 24
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} style={{
            position: 'relative',
            zIndex: 1
          }}>
            <span style={{
              display: "block",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: 'rgba(255,255,255,0.40)',
              textTransform: "uppercase"
            }}>
              3RD ANNUAL · FLAGSHIP GALA
            </span>
            <p style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'rgba(255,255,255,0.50)',
              marginTop: "12px",
              marginBottom: 0
            }}>
              Bubbles &amp; Nibbles Soirée
            </p>
            <h2 style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              color: "#FFFFFF",
              fontSize: 'clamp(32px, 5vw, 72px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              marginTop: "16px",
              marginBottom: 0
            }}>
              The Most Powerful Room in the Country.
            </h2>

            <div style={{
              width: '64px',
              height: '2px',
              backgroundColor: '#6D28D9',
              marginTop: '32px'
            }} />

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "32px"
            }}>
              {GALA_PILLS.map(pill => <span key={pill.id} style={{
                fontFamily: 'Figtree',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.60)',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '999px',
                padding: '8px 16px',
                display: 'inline-block'
              }}>
                {pill.label}
              </span>)}
            </div>

            <p style={{
              fontFamily: 'Figtree',
              fontSize: '11px',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.30)',
              marginTop: "16px",
              marginBottom: 0
            }}>
              Access by invitation only. Limited seats available.
            </p>

            <div style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "40px"
            }} className="summits-cta-container">
              <button style={{
                fontFamily: 'Figtree',
                fontSize: '13px',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#6D28D9',
                borderRadius: '999px',
                padding: '12px 28px',
                border: 'none',
                cursor: 'pointer',
                transition: 'filter 200ms ease-out'
              }} className="summits-cta-btn" onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.15)';
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)';
              }}>
                Request Invitation
              </button>
              <button style={{
                fontFamily: 'Figtree',
                fontSize: '13px',
                fontWeight: 400,
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                borderRadius: '999px',
                padding: '12px 28px',
                border: '1px solid rgba(255,255,255,0.20)',
                cursor: 'pointer',
                transition: 'background-color 200ms ease-out'
              }} className="summits-cta-btn" onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.08)';
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}>
                Nominate for Award
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right panel – image */}
        <div className="flagship-right" style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '360px'
        }}>
          <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=90" alt="Flagship Gala" style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(26,5,51,0.80) 0%, transparent 40%)'
          }} />
        </div>
      </section>

      {/* ─── 4. ANIMATED STATS STRIP ─── */}
      <section style={{
        backgroundColor: "#0A0A0F",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: 'clamp(48px, 8vw, 128px)',
        paddingBottom: 'clamp(48px, 8vw, 128px)'
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: 'clamp(20px, 5vw, 48px)',
          paddingRight: 'clamp(20px, 5vw, 48px)'
        }}>
          <div className="summits-flex-container" style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "48px",
            justifyContent: "space-between"
          }}>
            {STATS_DATA.map((stat, i) => <div key={`stat-${stat.label}`} className="summits-stat-item" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              flex: "1 1 20%",
              minWidth: "160px"
            }}>
              {/* Accent line */}
              <div style={{
                width: '32px',
                height: '3px',
                backgroundColor: stat.accentColor,
                marginBottom: '10px',
                borderRadius: '2px'
              }} />
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <AnimatedCounter target={stat.numericValue} display={stat.display} accentColor={stat.accentColor} />
              </div>
              <motion.span initial={{
                opacity: 0
              }} whileInView={{
                opacity: 0.4
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.5 + i * 0.1
              }} style={{
                fontFamily: "Figtree",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#FFFFFF",
                textTransform: "uppercase",
                marginTop: "16px",
                display: "block"
              }}>
                {stat.label}
              </motion.span>
            </div>)}
          </div>
        </div>
      </section>

      {/* ─── 6. PARTNER CTA STRIP ─── */}
      <section style={{
        backgroundColor: "#0A0A0F",
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 'clamp(56px, 8vw, 96px)',
        paddingBottom: 'clamp(56px, 8vw, 96px)'
      }}>
        <div className="summits-flex-container" style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: 'clamp(20px, 6vw, 96px)',
          paddingRight: 'clamp(20px, 6vw, 96px)',
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
          flexWrap: "wrap"
        }}>
          {/* Left */}
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
            ease: [0.21, 0.47, 0.32, 0.98]
          }} style={{
            maxWidth: '600px',
            flex: "1 1 50%",
            minWidth: "300px"
          }}>
            <span style={{
              display: "block",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: 'rgba(255,255,255,0.35)',
              textTransform: "uppercase"
            }}>
              CORPORATE PARTNERSHIPS
            </span>
            <h2 style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              color: "#FFFFFF",
              fontSize: 'clamp(24px, 3.5vw, 48px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginTop: "16px",
              marginBottom: 0
            }}>
              Partner with Africa's most influential women's executive platform.
            </h2>
            <p style={{
              fontFamily: 'Figtree',
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              maxWidth: '32rem',
              marginTop: "16px",
              marginBottom: 0
            }}>
              Unlock strategic visibility, thought leadership positioning, and direct access to
              10,000+ senior decision-makers across our 2026–2027 summit calendar.
            </p>
          </motion.div>

          {/* Right */}
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
            ease: [0.21, 0.47, 0.32, 0.98]
          }} className="summits-cta-container" style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: "1 1 30%",
            minWidth: "240px"
          }}>
            <RouterLink to="/partnerships" style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{
                width: '100%',
                fontFamily: 'Figtree',
                fontSize: 'clamp(14px, 1.5vw, 15px)',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#FF2D87',
                borderRadius: '999px',
                padding: '16px 32px',
                border: 'none',
                cursor: 'pointer',
                transition: 'filter 200ms ease-out'
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)';
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)';
              }}>
                Explore Partnership Packages →
              </button>
            </RouterLink>
            <RouterLink to="/contact" style={{ textDecoration: 'none', width: '100%' }}>
              <button style={{
                width: '100%',
                fontFamily: 'Figtree',
                fontSize: 'clamp(13px, 1.5vw, 14px)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.60)',
                backgroundColor: 'transparent',
                borderRadius: '999px',
                padding: '12px 32px',
                border: '1px solid rgba(255,255,255,0.20)',
                cursor: 'pointer',
                transition: 'background-color 200ms ease-out'
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}>
                Contact Our Partnerships Team
              </button>
            </RouterLink>
          </motion.div>
        </div>
      </section>
    </main>

    <style>{`
        .flagship-grid {
          display: grid;
          grid-template-columns: 55fr 45fr;
          min-height: 70vh;
          align-items: stretch;
        }
        .flagship-left {
          min-height: 480px;
        }
        .flagship-right {
          min-height: 360px;
        }

        /* Hover animations for standard elements */
        .group:hover .about-glow-effect { opacity: 0.2 !important; }
        .group:hover .about-translate-y { transform: translateY(-4px) !important; }
        .group:hover .about-view-details { color: #FFFFFF !important; transform: translateY(-4px) !important; }

        @media (max-width: 767px) {
          .flagship-grid {
            grid-template-columns: 1fr !important;
          }
          .flagship-right {
            min-height: 280px !important;
          }
          .summits-flex-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
          }
          .summits-grid-12 {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .summits-col-span-8, .summits-col-span-4, .summits-col-span-12 {
            grid-column: span 1 !important;
          }
          .summits-cta-container {
            flex-direction: column !important;
          }
          .summits-cta-btn {
            width: 100% !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .summits-grid-12 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .summits-col-span-8, .summits-col-span-4, .summits-col-span-12 {
            grid-column: span 1 !important;
          }
          .summits-grid-12 > div:last-child {
            grid-column: span 2 !important;
          }
        }
        @media (min-width: 1024px) {
          .summits-stat-item:not(:last-child) {
            border-right: 1px solid rgba(255,255,255,0.10);
          }
        }
      `}</style>
  </div>;
};