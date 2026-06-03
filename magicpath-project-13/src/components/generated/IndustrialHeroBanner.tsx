import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
interface HeroLine {
  id: string;
  words: string[];
}
const HERO_LINES: HeroLine[] = [{
  id: "hl-1",
  words: ["Industrial", "Growth."]
}, {
  id: "hl-2",
  words: ["Consumer", "Power."]
}, {
  id: "hl-3",
  words: ["Scale."]
}];
const UNDERLINED_WORDS = new Set(["Growth.", "Power.", "Scale."]);
const AVATAR_URLS = [{
  id: "av-1",
  url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80"
}, {
  id: "av-2",
  url: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&q=80"
}, {
  id: "av-3",
  url: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&q=80"
}, {
  id: "av-4",
  url: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&q=80"
}, {
  id: "av-5",
  url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80"
}, {
  id: "av-6",
  url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80"
}];
export const IndustrialHeroBanner: React.FC = () => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  let wordIndex = 0;
  return <section id="home" style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "68px",
    paddingBottom: "clamp(48px, 8vw, 80px)"
  }}>
      {/* Grain noise overlay */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 3,
      opacity: 0.04,
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
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
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80" alt="" aria-hidden="true" style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            display: "block"
          }} />
          </motion.div>
        </motion.div>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.65) 0%, rgba(10,10,15,0.35) 40%, rgba(10,10,15,0.90) 100%)"
      }} />
      </div>

      {/* Content */}
      <div style={{
      position: "relative",
      zIndex: 10,
      width: "100%",
      maxWidth: "1400px",
      paddingLeft: "clamp(16px, 5vw, 36px)",
      paddingRight: "clamp(16px, 5vw, 36px)",
      paddingTop: "clamp(48px, 8vw, 128px)",
      paddingBottom: "clamp(32px, 5vw, 48px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 90
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }} style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
          <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "clamp(32px, 5vw, 48px)"
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
            textAlign: "center",
            paddingLeft: "8px",
            paddingRight: "8px"
          }}>
              <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#D4AF37",
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
                Wholesale, Retail &amp; Manufacturing Stage™
              </span>
            </motion.div>

            {/* Hero headline */}
            <motion.h1 initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(36px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto 24px auto"
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

            {/* Slogan strip */}
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
            gap: "4px",
            paddingLeft: "8px",
            paddingRight: "8px"
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
            fontSize: "clamp(14px, 2vw, 16px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            maxWidth: "720px",
            margin: "0 auto 36px auto",
            textAlign: "center",
            lineHeight: 1.75,
            paddingLeft: "8px",
            paddingRight: "8px"
          }}>
              This stage focuses on the transformation of retail, manufacturing, logistics,
              localisation, and supply chains through innovation, smart technologies, operational
              efficiency, and continental trade integration.
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
          }} className="hero-cta-group" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: "12px",
            width: "100%",
            maxWidth: "320px",
            paddingLeft: "16px",
            paddingRight: "16px"
          }}>
              <a href="#" style={{
              fontFamily: "Figtree",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF2D87",
              height: "50px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              borderRadius: "0",
              transition: "filter 200ms ease-out",
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
              }}>Register Now</span>
                <ArrowRight size={16} style={{
                position: "relative",
                zIndex: 1
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
              </a>
              <a href="#programme" style={{
              fontFamily: "Figtree",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 400,
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.05)",
              height: "50px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.10)",
              letterSpacing: "0.02em",
              borderRadius: "0",
              transition: "all 200ms ease-out",
              whiteSpace: "nowrap"
            }} onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(255,255,255,0.10)";
              el.style.borderColor = "rgba(255,255,255,0.20)";
            }} onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(255,255,255,0.05)";
              el.style.borderColor = "rgba(255,255,255,0.10)";
            }}>
                View Programme
              </a>
            </motion.div>

            {/* Social proof strip */}
            <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "clamp(24px, 4vw, 40px)",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
              <div style={{
              position: "relative",
              display: "flex"
            }}>
                {AVATAR_URLS.map((avatar, index) => <img key={avatar.id} src={avatar.url} alt="" aria-hidden="true" style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "2px solid #0A0A0F",
                objectFit: "cover",
                marginLeft: index === 0 ? 0 : -10,
                display: "block"
              }} />)}
              </div>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px"
            }}>
                <span style={{
                fontFamily: "Figtree",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF"
              }}>
                  10,000+ Women
                </span>
                <span style={{
                fontFamily: "Figtree",
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)"
              }}>
                  shaping Africa's industrial future
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
      pointerEvents: "none",
      zIndex: 2
    }} />

      <style>{`
        @keyframes shimmerSlide {
          0% { transform: skewX(-20deg) translateX(-100%); }
          100% { transform: skewX(-20deg) translateX(400%); }
        }
        @keyframes pulseDot {
          0% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.4; transform: scale(0.9); }
        }
        @keyframes grainShift {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(-9%, 4%); }
          90% { transform: translate(15%, -3%); }
        }
        /* Mobile: CTAs full-width stacked */
        .hero-cta-group {
          flex-direction: column !important;
          align-items: stretch !important;
          max-width: 320px !important;
          width: 100% !important;
        }
        @media (min-width: 480px) {
          .hero-cta-group {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            max-width: none !important;
            width: auto !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>;
};