import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const HERO_WORDS = [{
  id: "hw-0",
  text: "Who"
}, {
  id: "hw-1",
  text: "Owns"
}, {
  id: "hw-2",
  text: "the"
}, {
  id: "hw-3",
  text: "Story,"
}, {
  id: "hw-4",
  text: "Owns"
}, {
  id: "hw-5",
  text: "the"
}, {
  id: "hw-6",
  text: "Influence"
}];
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
export const CreativeHeroBanner: React.FC = () => {
  const handleRegisterClick = () => {
    const el = document.getElementById("registration");
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  const handleProgrammeClick = () => {
    const el = document.getElementById("programme");
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }}>
      {/* Background image — Ken Burns zoom-out */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute inset-0" initial={{
        scale: 1.06
      }} animate={{
        scale: 1.0
      }} transition={{
        duration: 12,
        ease: "easeOut"
      }}>
          <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1600&q=80" alt="" aria-hidden="true" className="w-full h-full" style={{
          objectFit: "cover",
          objectPosition: "center 40%",
          width: "100%",
          height: "100%"
        }} />
        </motion.div>

        {/* Dark overlay gradient */}
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.35) 0%, rgba(10,10,15,0.60) 40%, rgba(10,10,15,0.85) 75%, #0A0A0F 100%)"
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
      paddingTop: "120px",
      paddingBottom: "80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
        {/* a) Eyebrow — dot + text, no pill */}
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
          backgroundColor: "#00B4A6",
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
            CREATIVE ECONOMY, FILM, MEDIA &amp; ENTERTAINMENT
          </span>
        </motion.div>

        {/* b) Animated H1 */}
        <motion.h1 initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }} style={{
        fontFamily: "Figtree, sans-serif",
        fontWeight: 300,
        fontSize: "clamp(48px, 8vw, 96px)",
        letterSpacing: "-0.04em",
        lineHeight: 1.0,
        textAlign: "center",
        color: "#FFFFFF",
        margin: "0 auto"
      }}>
          {HERO_WORDS.map((word, i) => {
          const isLast = i === HERO_WORDS.length - 1;
          return <motion.span key={word.id} initial={{
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
          }} style={{
            display: "inline-block",
            marginRight: "0.22em"
          }}>
                {isLast ? <span>
                    <span style={{
                textDecoration: "underline",
                textDecorationColor: "#FF2D87",
                textDecorationThickness: "3px",
                textUnderlineOffset: "8px",
                color: "#FFFFFF"
              }}>
                      {word.text}
                    </span>
                    <span style={{
                color: "#FF2D87",
                textDecoration: "none"
              }}>.</span>
                  </span> : word.text}
              </motion.span>;
        })}
        </motion.h1>

        {/* c) Slogan strip — between h1 and subheading */}
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
        marginTop: "24px",
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

        {/* d) Subheadline */}
        <motion.p initial={{
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.1
      }} style={{
        fontFamily: "Figtree, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(14px, 2.2vw, 17px)",
        color: "rgba(255,255,255,0.50)",
        lineHeight: 1.75,
        textAlign: "center",
        maxWidth: "560px",
        margin: "0 auto 0"
      }}>
          The Creative Economy, Film, Media &amp; Entertainment Stage™ — where Africa&apos;s most
          influential women build studios, launch platforms, and own the narrative.
        </motion.p>

        {/* e) CTA Buttons Row */}
        <motion.div initial={{
        opacity: 0,
        y: 16
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        delay: 1.3
      }} className="hero-cta-row" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        gap: "12px",
        marginTop: "32px",
        width: "100%",
        maxWidth: "320px",
        paddingLeft: "16px",
        paddingRight: "16px"
      }}>
          <button onClick={handleRegisterClick} style={{
          backgroundColor: "#FF2D87",
          color: "#FFFFFF",
          borderRadius: 0,
          height: "50px",
          padding: "0 28px",
          fontFamily: "Figtree, sans-serif",
          fontWeight: 500,
          fontSize: "clamp(13px, 2vw, 15px)",
          border: "none",
          cursor: "pointer",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          transition: "filter 200ms ease-out",
          boxShadow: "0 0 32px rgba(255,45,135,0.25)",
          position: "relative",
          overflow: "hidden"
        }} onMouseEnter={e => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.filter = "brightness(1.1)";
          el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
        }} onMouseLeave={e => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.filter = "brightness(1)";
          el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
        }}>
            <span style={{
            position: "relative",
            zIndex: 1
          }}>Secure Your Seat</span>
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
          </button>

          <button onClick={handleProgrammeClick} style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "#FFFFFF",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 0,
          height: "50px",
          padding: "0 28px",
          fontFamily: "Figtree, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(13px, 2vw, 15px)",
          cursor: "pointer",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 200ms ease-out"
        }} onMouseEnter={e => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.backgroundColor = "rgba(255,255,255,0.10)";
          el.style.borderColor = "rgba(255,255,255,0.20)";
        }} onMouseLeave={e => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.backgroundColor = "rgba(255,255,255,0.05)";
          el.style.borderColor = "rgba(255,255,255,0.10)";
        }}>
            Explore Programme
          </button>
        </motion.div>

        {/* f) Avatar social proof strip */}
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginTop: "clamp(24px, 4vw, 40px)"
      }}>
          {/* Avatar stack */}
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

          {/* Text */}
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
              2,000+ Leaders
            </span>
            <span style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            color: "rgba(255,255,255,0.45)"
          }}>
              shaping Africa's creative economy
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@200;300;400;500;600;700;900&display=swap');

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        @keyframes shimmerSlide {
          0% { transform: skewX(-20deg) translateX(-100%); }
          100% { transform: skewX(-20deg) translateX(350%); }
        }

        @media (min-width: 480px) {
          .hero-cta-row {
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