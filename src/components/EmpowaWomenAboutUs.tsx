import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Target, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
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
const PARTNER_LOGOS = [{
  id: "pl-1",
  name: "ABSA",
  src: "/absa-logo.png"
}, {
  id: "pl-2",
  name: "CCBSA",
  src: "/ccbsa.png"
}, {
  id: "pl-3",
  name: "Old Mutual",
  src: "/old_mutual_logo - Copy.png"
}, {
  id: "pl-4",
  name: "WRSETA",
  src: "/WRSETA.jpg"
}, {
  id: "pl-5",
  name: "EmpowaWomen",
  src: "/logo.png"
}];
const EXTENDED_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];
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
  image: "/leadership-team/simphiwe-masiza.jpg",
  name: "Simphiwe Masiza",
  title: "Founder & Executive Producer",
  org: "EmpowaWomen",
  quote: "Founder and visionary behind EmpowaWomen, responsible for the strategic direction, growth, stakeholder engagement, and overall execution of the platform. Simphiwe leads the development of transformative initiatives that position women at the forefront of economic and social progress."
}, {
  id: "tm-2",
  image: "/leadership-team/Bonnie-Maponya.jpg",
  name: "Bonnie Maponya",
  title: "Acting Managing Executive",
  org: "EmpowaWomen",
  quote: "Provides operational leadership and programme oversight across the EmpowaWomen ecosystem, ensuring excellence in delivery, stakeholder engagement, governance, and delegate experience."
}, {
  id: "tm-3",
  image: "/leadership-team/Thulisa-Bianca-Sosibo.jpg",
  name: "Thulisa Bianca Sosibo",
  title: "Commercial & Partnerships Lead",
  org: "EmpowaWomen",
  quote: "Leads commercial strategy, sponsorship and funding mobilisation, strategic partnerships, and revenue growth initiatives. Thulisa works closely with corporate partners, government stakeholders, funders, and ecosystem leaders to unlock sustainable value, drive commercial impact, and strengthen the EmpowaWomen platform."
}, {
  id: "tm-4",
  image: "/leadership-team/Neo-Mathebe.JPG",
  name: "Neo Mathebe",
  title: "Partnerships Lead",
  org: "EmpowaWomen",
  quote: "Responsible for stakeholder relations, partnership development, ecosystem engagement, and strategic alliance management, helping to expand the reach and impact of the EmpowaWomen movement."
}, {
  id: "tm-5",
  image: "/leadership-team/Carshiefa-Sissing.jpg",
  name: "Cash Siising",
  title: "Digital Lead",
  org: "EmpowaWomen",
  quote: "Leads digital strategy, social media, audience growth, content marketing, and online community engagement, ensuring the EmpowaWomen brand continues to inspire, influence, and connect women at scale."
}, {
  id: "tm-6",
  image: "/leadership-team/Anita-Tirkey.jpg",
  name: "Anita",
  title: "Speaker Manager",
  org: "EmpowaWomen",
  quote: "Oversees speaker acquisition, speaker relations, programme coordination, and thought leadership curation, ensuring a world-class lineup of leaders, innovators, and changemakers."
}];
const HERO_WORDS = ["Building", "Africa's", "Next", "Generation", "of", "Economic", "Powerhouses"];
const REACH_BADGES: BadgeItem[] = [{
  icon: <Globe size={16} className="text-[#00B4A6]" style={{ color: "#00B4A6" }} />,
  label: "Pan-African Network"
}, {
  icon: <Trophy size={16} className="text-[#D97706]" style={{ color: "#D97706" }} />,
  label: "Award Winning"
}, {
  icon: <Target size={16} className="text-[#FF2D87]" style={{ color: "#FF2D87" }} />,
  label: "Strategic Impact"
}];

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  return <section style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    paddingBottom: "clamp(48px, 8vh, 80px)",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden"
  }}>
    {/* Background image */}
    <div style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0
    }}>
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
        <img src="/features-14.jpg" alt="" style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
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
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: "clamp(16px, 4vw, 48px)",
      paddingRight: "clamp(16px, 4vw, 48px)",
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
      }} style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
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
        }} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          borderRadius: "999px",
          marginBottom: "24px",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "8px 16px"
        }}>
          <span style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#FF2D87",
            display: "inline-block",
            flexShrink: 0,
            animation: "pulseDot 2s ease-in-out infinite",
            borderRadius: "50%"
          }} />
          <span style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.20em",
            color: "rgba(255,255,255,0.60)",
            textTransform: "uppercase"
          }}>
            CORE TRUST ARCHITECTURE · ABOUT US
          </span>
        </motion.div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(40px, 8vw, 96px)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          color: "#FFFFFF",
          textAlign: "center",
          width: "100%",
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
        <p style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2.2vw, 17px)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.50)",
          maxWidth: "560px",
          margin: "0 auto 32px auto",
          lineHeight: 1.75,
          textAlign: "center"
        }}>
          Detailing corporate legitimacy, emphasizing executive track records, and presenting the
          platform's vision to institutional investors and corporate directors.
        </p>

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
        }} style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "48px"
        }}>
          <RouterLink to="/contact" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            color: "#FFFFFF",
            backgroundColor: "#FF2D87",
            height: "48px",
            padding: "0 28px",
            letterSpacing: "0.02em",
            transition: "all 200ms ease-out",
            boxShadow: "0 0 32px rgba(255,45,135,0.25)",
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "999px",
            textDecoration: "none"
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
          </RouterLink>
          <RouterLink to="/about" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 400,
            color: "#FFFFFF",
            height: "48px",
            padding: "0 28px",
            border: "1px solid rgba(255,255,255,0.20)",
            letterSpacing: "0.02em",
            transition: "all 200ms ease-out",
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "999px",
            textDecoration: "none"
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
          </RouterLink>
        </motion.div>

        {/* Partner marquee */}
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
              display: "flex",
              alignItems: "center",
              height: "72px"
            }}>
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  height: "32px",
                  width: "auto",
                  maxWidth: "130px",
                  objectFit: "contain",
                  opacity: 0.3,
                  filter: "grayscale(100%)",
                  transition: "opacity 200ms ease-out, filter 200ms ease-out",
                  cursor: "default"
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
                }}
              />
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
  return <section style={{
    position: "relative",
    backgroundColor: "#F7F6F2",
    zIndex: 10
  }}>
    <div className="about-flex-container" style={{
      maxWidth: "1400px",
      margin: "0 auto",
      paddingLeft: "clamp(24px, 6vw, 96px)",
      paddingRight: "clamp(24px, 6vw, 96px)",
      paddingTop: "clamp(64px, 8vw, 96px)",
      paddingBottom: "clamp(64px, 8vw, 96px)",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "64px"
    }}>
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
      }} style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 55%",
        minWidth: "320px"
      }}>
        <span style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "#64748b",
          textTransform: "uppercase"
        }}>
          WHO WE ARE
        </span>
        <h2 style={{
          marginTop: "16px",
          marginBottom: "0",
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(30px, 4.5vw, 60px)",
          color: "#0A0A0F",
          letterSpacing: "-0.03em",
          lineHeight: 1.0
        }}>
          Positioning Women at the Center of the Future Economy.
        </h2>
        <p style={{
          marginTop: "24px",
          marginBottom: "0",
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

        <div style={{
          marginTop: "32px",
          padding: "28px",
          backgroundColor: "#FFFFFF",
          borderLeft: "4px solid #FF2D87",
          borderRadius: "0 16px 16px 0",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)"
        }}>
          <span style={{
            fontFamily: "Figtree",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "#FF2D87",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "12px"
          }}>
            OUR MISSION
          </span>
          <p style={{
            margin: "0 0 20px 0",
            fontFamily: "Figtree",
            fontSize: "16px",
            fontWeight: 400,
            color: "#0A0A0F",
            lineHeight: 1.65
          }}>
            To build Africa's leading platform for women in leadership, entrepreneurship, governance, innovation, and economic empowerment by creating meaningful connections, unlocking opportunities, and accelerating transformational impact.
          </p>
          <div style={{
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            paddingTop: "16px",
            marginTop: "16px"
          }}>
            <span style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#0A0A0F",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "6px"
            }}>
              LEADERSHIP. INFLUENCE. IMPACT.
            </span>
            <p style={{
              margin: 0,
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 500,
              color: "#64748b"
            }}>
              Lead Fearlessly. Accelerate Growth. Transform Economies.
            </p>
          </div>
        </div>

        <RouterLink to="/summits-hub" style={{
          marginTop: "32px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          transition: "opacity 200ms ease-out",
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
        </RouterLink>
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
      }} style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 35%",
        minWidth: "280px"
      }}>
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
          <p style={{
            marginTop: "8px",
            marginBottom: "0",
            fontFamily: "Figtree",
            fontSize: "15px",
            fontWeight: 400,
            color: "#64748b"
          }}>
            Years of Structural Change
          </p>
        </div>

        <div style={{
          height: "1px",
          backgroundColor: "rgba(0,0,0,0.08)",
          marginTop: "32px",
          marginBottom: "32px"
        }} />

        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap"
        }}>
          {MINI_STATS.map(stat => <div key={stat.id} style={{ display: "flex", flexDirection: "column" }}>
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
            <span style={{
              marginTop: "4px",
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
  return <section style={{
    position: "relative",
    backgroundColor: "#F7F6F2",
    zIndex: 10,
    borderRadius: "40px 40px 0 0",
    boxShadow: "0 -24px 64px rgba(0,0,0,0.15)",
    overflow: "hidden"
  }}>
    {/* PANEL 1 — Leading Fearlessly */}
    <div style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      minHeight: "70vh",
      backgroundColor: "#0A0A0F",
      overflow: "hidden"
    }}>
      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=85" alt="" aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        opacity: 0.35,
        mixBlendMode: "luminosity"
      }} />
      <div className="about-grid-2" style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        paddingTop: "64px",
        paddingBottom: "64px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "64px"
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
        }} style={{ display: "flex", flexDirection: "column" }} className="about-order-2-mobile">
          <div style={{
            marginBottom: "24px",
            width: "48px",
            height: "3px",
            backgroundColor: "#FF2D87",
            flexShrink: 0
          }} />
          <span style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase"
          }}>
            LEADING FEARLESSLY
          </span>
          <h3 style={{
            marginTop: "24px",
            marginBottom: "0",
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 72px)",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            lineHeight: 0.95
          }}>
            Empowering women to lead boldly across every boardroom, industry, and economy.
          </h3>
          <p style={{
            marginTop: "32px",
            marginBottom: "0",
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            maxWidth: "480px"
          }}>
            Across boardrooms, industries, governments, media platforms, entrepreneurial
            ecosystems, and innovation economies - with confidence, influence, resilience, and
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
        }} style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          position: "relative",
          paddingBottom: "80px"
        }} className="about-order-1-mobile">
          <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(80px, 15vw, 200px)",
            color: "rgba(255,45,135,0.30)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            userSelect: "none"
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
          }} style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            borderRadius: "16px",
            padding: "20px 24px",
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
            <div style={{
              marginTop: "4px",
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.40)",
              letterSpacing: "0.12em",
              textTransform: "uppercase"
            }}>
              Years Running
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* PANEL 2 — Accelerating Growth */}
    <div style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      minHeight: "70vh",
      backgroundColor: "#F7F6F2",
      overflow: "hidden"
    }}>
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=85" alt="" aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        opacity: 0.18
      }} />
      <div className="about-grid-2" style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        paddingTop: "64px",
        paddingBottom: "64px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "64px"
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
        }} style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          paddingBottom: "80px"
        }}>
          <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(80px, 15vw, 200px)",
            color: "rgba(0,180,166,0.22)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            userSelect: "none"
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
          }} style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            borderRadius: "16px",
            padding: "20px 24px",
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
            <div style={{
              marginTop: "4px",
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
        }} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{
            marginBottom: "24px",
            width: "48px",
            height: "3px",
            backgroundColor: "#00B4A6",
            flexShrink: 0
          }} />
          <span style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#64748b",
            textTransform: "uppercase"
          }}>
            ACCELERATING GROWTH
          </span>
          <h3 style={{
            marginTop: "24px",
            marginBottom: "0",
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(32px, 5vw, 72px)",
            color: "#0A0A0F",
            letterSpacing: "-0.04em",
            lineHeight: 0.95
          }}>
            Unlocking investment, enterprise growth, and strategic market access for women.
          </h3>
          <p style={{
            marginTop: "32px",
            marginBottom: "0",
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
    <div style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      minHeight: "70vh",
      backgroundColor: "#0A0A0F",
      overflow: "hidden"
    }}>
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=85" alt="" aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        opacity: 0.35,
        mixBlendMode: "luminosity"
      }} />
      <div className="about-grid-2" style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        paddingTop: "64px",
        paddingBottom: "64px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "64px"
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
        }} style={{ display: "flex", flexDirection: "column" }} className="about-order-2-mobile">
          <div style={{
            marginBottom: "24px",
            width: "48px",
            height: "3px",
            backgroundColor: "#D97706",
            flexShrink: 0
          }} />
          <span style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase"
          }}>
            TRANSFORMING ECONOMIES
          </span>
          <h3 style={{
            marginTop: "24px",
            marginBottom: "0",
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
          <p style={{
            marginTop: "32px",
            marginBottom: "0",
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
        }} style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          position: "relative",
          paddingBottom: "80px"
        }} className="about-order-1-mobile">
          <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(80px, 15vw, 200px)",
            color: "rgba(217,119,6,0.30)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            userSelect: "none"
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
          }} style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            borderRadius: "16px",
            padding: "20px 24px",
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
            <div style={{
              marginTop: "4px",
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.40)",
              letterSpacing: "0.12em",
              textTransform: "uppercase"
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
  return <section style={{
    paddingTop: "clamp(64px, 8vw, 128px)",
    paddingBottom: "clamp(64px, 8vw, 128px)",
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
    }} style={{
      maxWidth: "860px",
      margin: "0 auto",
      paddingLeft: "24px",
      paddingRight: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }}>
      <span aria-hidden="true" style={{
        display: "block",
        fontFamily: "Figtree",
        fontWeight: 200,
        fontSize: "clamp(80px, 15vw, 160px)",
        color: "rgba(255,255,255,0.04)",
        lineHeight: 0,
        marginBottom: "32px",
        userSelect: "none"
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
        decide what comes next - and act on it.
      </blockquote>

      <div style={{
        width: "48px",
        height: "1px",
        backgroundColor: "rgba(255,255,255,0.10)",
        marginTop: "40px",
        marginBottom: "16px"
      }} />

      <p style={{
        marginTop: "0",
        marginBottom: "0",
        fontFamily: "Figtree",
        fontSize: "11px",
        fontWeight: 400,
        color: "rgba(255,255,255,0.30)",
        letterSpacing: "0.18em",
        textTransform: "uppercase"
      }}>
        Executive Delegate · Annual Leadership Summit · Johannesburg
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "4px",
        marginTop: "16px"
      }}>
        {[1, 2, 3, 4, 5].map(n => <svg key={`star-${n}`} width="16" height="16" viewBox="0 0 24 24" fill="#FF2D87" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>)}
      </div>
    </motion.div>
  </section>;
};

// ─── Leadership Strip ─────────────────────────────────────────────────────────
const LeadershipStrip = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 320; // base clamp width of card
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return <section style={{
    paddingTop: "clamp(64px, 8vw, 128px)",
    paddingBottom: "clamp(64px, 8vw, 128px)",
    backgroundColor: "#F7F6F2"
  }}>
    <div style={{
      maxWidth: "1400px",
      margin: "0 auto",
      paddingLeft: "clamp(24px, 6vw, 96px)",
      paddingRight: "clamp(24px, 6vw, 96px)"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: "32px"
      }}>
        <div style={{ flex: "1 1 60%", minWidth: "280px" }}>
          <span style={{
            display: "block",
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#64748b",
            textTransform: "uppercase"
          }}>
            THE TEAM
          </span>
          <h2 style={{
            marginTop: "16px",
            marginBottom: "0",
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#0A0A0F",
            letterSpacing: "-0.03em",
            lineHeight: 1.1
          }}>
            The Movement Behind the Mission.
          </h2>
          <p style={{
            marginTop: "20px",
            marginBottom: "0",
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            fontWeight: 400,
            color: "#64748b",
            lineHeight: 1.6,
            maxWidth: "800px"
          }}>
            The EmpowaWomen Leadership Team comprises a diverse group of visionary leaders, strategists, partnership builders, and execution specialists united by a shared commitment to advancing women's leadership, entrepreneurship, economic participation, and influence across Africa.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: "flex",
          gap: "12px",
          marginBottom: "8px"
        }}>
          <button
            onClick={() => scroll("left")}
            aria-label="Previous team members"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(10,10,15,0.08)",
              color: "#0A0A0F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 200ms ease-out",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#FF2D87";
              e.currentTarget.style.color = "#FF2D87";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(10,10,15,0.08)";
              e.currentTarget.style.color = "#0A0A0F";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next team members"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(10,10,15,0.08)",
              color: "#0A0A0F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 200ms ease-out",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#FF2D87";
              e.currentTarget.style.color = "#FF2D87";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(10,10,15,0.08)";
              e.currentTarget.style.color = "#0A0A0F";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="about-team-scroll" style={{
        display: "flex",
        overflowX: "auto",
        gap: "24px",
        marginTop: "48px",
        paddingBottom: "24px",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch"
      }}>
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
        }} style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(10,10,15,0.06)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          transition: "box-shadow 300ms ease-out, transform 300ms ease-out",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "default",
          flexShrink: 0,
          width: "clamp(290px, 30vw, 360px)",
          scrollSnapAlign: "start"
        }} whileHover={{
          y: -4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.10)"
        } as any}>
          <div style={{
            overflow: "hidden",
            height: "230px"
          }}>
            <img src={member.image} alt={member.name} style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block"
            }} />
          </div>
          <div style={{ padding: "24px" }}>
            <p style={{
              margin: "0",
              fontFamily: "Figtree",
              fontSize: "17px",
              fontWeight: 500,
              color: "#0A0A0F"
            }}>
              {member.name}
            </p>
            <p style={{
              marginTop: "4px",
              marginBottom: "0",
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 400,
              color: "#64748b"
            }}>
              {member.title}
            </p>
            <p style={{
              marginTop: "2px",
              marginBottom: "0",
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "#94a3b8"
            }}>
              {member.org}
            </p>
            <p style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "14px",
              color: "rgba(100,116,139,0.70)",
              lineHeight: 1.6,
              borderLeft: "2px solid #FF2D87",
              paddingLeft: "12px",
              marginTop: "12px",
              marginBottom: 0
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
  return <section style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: "clamp(64px, 8vw, 128px)",
    paddingBottom: "clamp(64px, 8vw, 128px)",
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF"
  }}>
    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=90" alt="" aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      pointerEvents: "none",
      opacity: 0.12,
      mixBlendMode: "luminosity",
      zIndex: 0
    }} />
    <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "linear-gradient(135deg, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.75) 60%, rgba(10,10,15,0.92) 100%)",
      zIndex: 1
    }} />
    <div aria-hidden="true" style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      pointerEvents: "none",
      width: "50%",
      height: "60%",
      background: "radial-gradient(ellipse at bottom left, rgba(255,45,135,0.07) 0%, transparent 70%)",
      zIndex: 1
    }} />

    <div className="about-flex-container" style={{
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "96px",
      maxWidth: "1400px",
      margin: "0 auto",
      paddingLeft: "clamp(24px, 6vw, 96px)",
      paddingRight: "clamp(24px, 6vw, 96px)"
    }}>
      {/* Left — big number + stats */}
      <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column" }}>
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
        }} style={{ marginBottom: "40px" }}>
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
          <p style={{
            fontFamily: "Figtree",
            fontWeight: 400,
            fontSize: "16px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.40)",
            textTransform: "uppercase",
            margin: 0
          }}>
            Delegates Connected
          </p>
        </motion.div>

        <div className="about-grid-2" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px"
        }}>
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
          }} style={{
            borderLeft: "1px solid rgba(255,255,255,0.10)",
            paddingLeft: "24px",
            paddingTop: "8px",
            paddingBottom: "8px"
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
            <div style={{
              fontFamily: "Figtree",
              fontWeight: 600,
              fontSize: "9px",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.40)",
              textTransform: "uppercase"
            }}>
              {stat.label}
            </div>
          </motion.div>)}
        </div>
      </div>

      {/* Right — text + badges */}
      <div style={{ flex: "1 1 50%", display: "flex", flexDirection: "column" }}>
        <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: "clamp(15px, 1.8vw, 17px)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.55)",
          marginBottom: "32px"
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
        }} style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {REACH_BADGES.map(badge => <div key={badge.label} style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "999px",
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
  return <section style={{
    paddingTop: "clamp(64px, 8vw, 112px)",
    paddingBottom: "clamp(64px, 8vw, 112px)",
    backgroundColor: "#F7F6F2",
    overflow: "hidden"
  }}>
    {/* Header */}
    <div style={{
      maxWidth: "1400px",
      margin: "0 auto",
      paddingLeft: "clamp(24px, 6vw, 96px)",
      paddingRight: "clamp(24px, 6vw, 96px)",
      marginBottom: "48px"
    }}>
      <div className="about-flex-container" style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "48px",
        flexWrap: "wrap"
      }}>
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
        }} style={{ maxWidth: "512px" }}>
          <span style={{
            display: "block",
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#64748b",
            textTransform: "uppercase"
          }}>
            TRUST ARCHITECTURE
          </span>
          <h2 style={{
            marginTop: "12px",
            marginBottom: "0",
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(24px, 3.5vw, 44px)",
            color: "#0A0A0F",
            letterSpacing: "-0.03em",
            lineHeight: 1.1
          }}>
            Trusted by Africa's most respected institutions.
          </h2>
          <p style={{
            marginTop: "16px",
            marginBottom: "0",
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
        }} style={{
          flexShrink: 0,
          paddingLeft: "20px",
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
          <p style={{
            marginTop: "4px",
            marginBottom: "0",
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
    <div style={{ position: "relative" }}>
      <div style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: "clamp(48px, 10vw, 128px)",
        zIndex: 10,
        background: "linear-gradient(to right, #F7F6F2, transparent)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: "clamp(48px, 10vw, 128px)",
        zIndex: 10,
        background: "linear-gradient(to left, #F7F6F2, transparent)",
        pointerEvents: "none"
      }} />

      <div style={{ display: "flex", overflow: "hidden", width: "100%" }}>
        <div className="about-marquee-track" style={{ display: "flex", width: "max-content" }}>
          {doubled.map((logo, idx) => <div key={`${logo.id}-${idx}`} style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            margin: "0 clamp(24px, 3.5vw, 48px)"
          }}>
            <img
              src={logo.src}
              alt={logo.name}
              style={{
                height: "30px",
                width: "auto",
                maxWidth: "120px",
                objectFit: "contain",
                opacity: 0.3,
                filter: "grayscale(100%)",
                transition: "opacity 200ms ease-out, filter 200ms ease-out",
                cursor: "default"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
              }}
            />
          </div>)}
        </div>
      </div>
    </div>

    <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .about-marquee-track {
          animation: marquee 25s linear infinite;
        }
      `}</style>
  </section>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const EmpowaWomenAboutPage: React.FC = () => {
  return <div className="selection:bg-[#FF2D87]/30" style={{
    width: "100%",
    backgroundColor: "#0A0A0F",
    fontFamily: "Figtree"
  }}>
    <HeroSection />
    <MissionBridgeSection />
    <VisionSection />
    <PullQuoteSection />
    <LeadershipStrip />
    <ReachSection />
    <LogoWall />

    <style>{`
        /* Responsive Overrides */
        @media (max-width: 767px) {
          .about-flex-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
          }
          .about-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-order-1-mobile {
            order: 1 !important;
            justify-content: flex-start !important;
            padding-bottom: 48px !important;
          }
          .about-order-2-mobile {
            order: 2 !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-grid-2 {
            gap: 40px !important;
          }
        }
        .about-team-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .about-team-scroll::-webkit-scrollbar-track {
          background: rgba(10,10,15,0.05);
          border-radius: 999px;
        }
        .about-team-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,45,135,0.3);
          border-radius: 999px;
        }
        .about-team-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255,45,135,0.6);
        }
      `}</style>
  </div>;
};