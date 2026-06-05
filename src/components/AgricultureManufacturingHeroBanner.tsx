import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IndustrialHeroBannerProps {
  quote?: string;
  narrative?: string;
  bgImage?: string;
  pillarTitle?: string;
}

const HERO_LINES = [{
  id: "hl-1",
  words: ["Africa", "Must", "Shift."]
}, {
  id: "hl-2",
  words: ["From", "Consumption"]
}, {
  id: "hl-3",
  words: ["To", "Competitiveness."]
}];

const UNDERLINED_LAST_WORDS = new Set(["Shift.", "Competitiveness."]);

export const AgricultureManufacturingHeroBanner: React.FC<IndustrialHeroBannerProps> = ({
  bgImage = "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=85"
}) => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  let wordIndex = 0;

  return <section style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "clamp(100px, 12vh, 140px)",
    paddingBottom: "clamp(60px, 8vh, 100px)"
  }}>
      {/* Grain noise overlay */}
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

      {/* Background image with parallax */}
      <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none"
    }}>
        <motion.div style={{
        position: "absolute",
        inset: 0
      }} initial={{
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
            <img src={bgImage} alt="" style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%"
          }} />
          </motion.div>
        </motion.div>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
      }} />
      </div>

      {/* Bottom fade */}
      <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
      pointerEvents: "none",
      zIndex: 2
    }} />

      {/* Content */}
      <div style={{
      position: "relative",
      zIndex: 10,
      width: "100%",
      maxWidth: "1400px",
      paddingLeft: "clamp(20px, 5vw, 36px)",
      paddingRight: "clamp(20px, 5vw, 36px)",
      paddingTop: "clamp(24px, 5vw, 64px)",
      paddingBottom: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
        {/* Pre-heading pill */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginBottom: "20px",
        flexWrap: "wrap",
        textAlign: "center"
      }}>
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
          fontFamily: "Figtree",
          fontSize: "clamp(9px, 2vw, 11px)",
          fontWeight: 600,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.60)",
          textTransform: "uppercase"
        }}>
            AGRICULTURE, MANUFACTURING &amp; CONSUMER MARKETS
          </span>
        </motion.div>

        {/* Hero headline — word-by-word animation */}
        <motion.h1 initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }} style={{
        fontFamily: "Figtree",
        fontWeight: 300,
        fontSize: "clamp(44px, 8vw, 96px)",
        lineHeight: 1.0,
        letterSpacing: "-0.04em",
        color: "#FFFFFF",
        textAlign: "center",
        maxWidth: "900px",
        margin: "0 auto 24px auto"
      }}>
          {HERO_LINES.map(line => <span key={line.id} style={{
          display: "block"
        }}>
              {line.words.map(word => {
            const currentIndex = wordIndex++;
            const isUnderlined = UNDERLINED_LAST_WORDS.has(word);
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
                    {isUnderlined ? <span>
                        <span style={{
                  textDecoration: "underline",
                  textDecorationColor: "#FF2D87",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  color: "#FFFFFF"
                }}>
                          {wordWithoutPeriod}
                        </span>
                        <span style={{
                  color: "#FF2D87",
                  textDecoration: "none"
                }}>.</span>
                      </span> : word}
                  </motion.span>;
          })}
            </span>)}
        </motion.h1>

        {/* Subtext slogan strip */}
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
      }} style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "28px",
        flexWrap: "wrap",
        gap: "4px"
      }}>
          <span style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: "clamp(10px, 2vw, 13px)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.40)"
        }}>
            Ignite Passion
          </span>
          <span style={{
          display: "inline-block",
          width: "1px",
          height: "14px",
          backgroundColor: "rgba(255,255,255,0.20)",
          margin: "0 12px",
          verticalAlign: "middle"
        }} />
          <span style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: "clamp(10px, 2vw, 13px)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.40)"
        }}>
            Foster Growth
          </span>
          <span style={{
          display: "inline-block",
          width: "1px",
          height: "14px",
          backgroundColor: "rgba(255,255,255,0.20)",
          margin: "0 12px",
          verticalAlign: "middle"
        }} />
          <span style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: "clamp(10px, 2vw, 13px)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.40)"
        }}>
            Drive Change
          </span>
        </motion.div>

        {/* Description paragraph */}
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
        fontSize: "clamp(14px, 2vw, 16px)",
        fontWeight: 400,
        color: "rgba(255,255,255,0.50)",
        maxWidth: "620px",
        margin: "0 auto 36px auto",
        textAlign: "center",
        lineHeight: 1.75
      }}>
          EmpowaWomen presents Africa's most focused platform for agriculture innovation,
          manufacturing transformation, and consumer market leadership.
        </motion.p>

        {/* CTA buttons - customized with borderRadius: "999px" & width/minHeight */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.4
      }} style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        width: "100%"
      }} className="hero-cta-row">
              <RouterLink to="/summit" style={{
              fontFamily: "Figtree",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF2D87",
              minHeight: "54px",
              width: "220px",
              padding: "0 28px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              borderRadius: "999px",
              transition: "all 200ms ease-out",
              boxShadow: "0 0 32px rgba(255,45,135,0.25)",
              whiteSpace: "nowrap",
              position: "relative",
              overflow: "hidden"
            }} onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1.1)";
              el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
            }} onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1)";
              el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
            }}>
                <span style={{
                position: "relative",
                zIndex: 1
              }}>Secure Your Seat</span>
                <ArrowRight size={16} style={{
                position: "relative",
                zIndex: 1,
                flexShrink: 0
              }} />
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
              </RouterLink>
          <a href="#focus-tracks" style={{
          fontFamily: "Figtree",
          fontSize: "clamp(13px, 2vw, 15px)",
          fontWeight: 400,
          color: "#FFFFFF",
          backgroundColor: "rgba(255,255,255,0.05)",
          minHeight: "54px",
          width: "220px",
          padding: "0 28px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          border: "1px solid rgba(255,255,255,0.10)",
          letterSpacing: "0.02em",
          borderRadius: "999px",
          transition: "all 200ms ease-out",
          whiteSpace: "nowrap"
        }} onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "rgba(255,255,255,0.08)";
          el.style.borderColor = "rgba(255,255,255,0.40)";
        }} onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "rgba(255,255,255,0.05)";
          el.style.borderColor = "rgba(255,255,255,0.10)";
        }}>
            Explore Tracks
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.4); }
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
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
        @media (max-width: 640px) {
          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            width: 100%;
          }
          .hero-cta-row a {
            width: 220px !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>;
};
