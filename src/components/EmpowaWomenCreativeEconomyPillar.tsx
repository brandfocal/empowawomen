import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Film, Tv2, Radio, Wifi, Star, BookOpen, Gamepad2, Cpu, Check, ArrowRight, Clock, CheckCircle2, ShieldCheck } from "lucide-react";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { DelegateRegistrationSection } from "./DelegateRegistrationSection";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FocusArea {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  accentColor: string;
}
interface ProgrammeSession {
  id: string;
  time: string;
  format: string;
  title: string;
  subtitle: string;
  accentColor: string;
  accentRgb: string;
  isLunch?: boolean;
}
interface StrategicBenefit {
  id: string;
  label: string;
}
interface AttendeeItem {
  id: string;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Film,
  title: "Film & Television Production",
  subtitle: "Building world-class African content for global audiences",
  accentColor: "#FF2D87"
}, {
  id: "fa-2",
  icon: Radio,
  title: "Media Leadership & Broadcasting",
  subtitle: "Women commanding airwaves, newsrooms, and networks",
  accentColor: "#FF2D87"
}, {
  id: "fa-3",
  icon: Wifi,
  title: "Streaming & Digital Platforms",
  subtitle: "Owning distribution in the digital-first economy",
  accentColor: "#00B4A6"
}, {
  id: "fa-4",
  icon: Star,
  title: "Creator Economy & Influencer Business",
  subtitle: "Monetising audiences and personal brands at scale",
  accentColor: "#00B4A6"
}, {
  id: "fa-5",
  icon: Tv2,
  title: "Intellectual Property Ownership",
  subtitle: "Building and protecting creative wealth assets",
  accentColor: "#D4AF37"
}, {
  id: "fa-6",
  icon: BookOpen,
  title: "Publishing & Storytelling",
  subtitle: "African narratives for global markets",
  accentColor: "#D4AF37"
}, {
  id: "fa-7",
  icon: Gamepad2,
  title: "Gaming, Animation & Immersive Experiences",
  subtitle: "The frontier of interactive entertainment",
  accentColor: "#FF2D87"
}, {
  id: "fa-8",
  icon: Cpu,
  title: "AI, Technology & Content Innovation",
  subtitle: "Using AI to create, distribute, and monetise content",
  accentColor: "#00B4A6"
}];

const PROGRAMME_SESSIONS: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00",
  format: "OPENING KEYNOTE",
  title: "Women Must Lead Africa's Creative & Cultural Economy",
  subtitle: "Who Will Own the Story, The Audience, The Platform and The Intellectual Property?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS",
  title: "AI, Streaming & the Future of Content Creation",
  subtitle: "How will AI, streaming platforms, and digital innovation transform film, television, content creation, and audience monetisation?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL",
  title: "Women, Storytelling & the Business of Cultural Influence",
  subtitle: "How can women commercialise creativity, scale creative enterprises, and build sustainable media brands?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-4",
  time: "12:50",
  format: "NETWORKING LUNCH",
  title: "Cultivating Influence, Partnerships & Creative Collaboration",
  subtitle: "Which strategic partnerships, content collaborations, and investment conversations will drive your next scale phase?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166",
  isLunch: true
}, {
  id: "ps-5",
  time: "13:20",
  format: "FIRECHAT",
  title: "Content Commercialisation, Streaming & Global Market Access",
  subtitle: "How can women-led creative businesses unlock new revenue streams and access international markets?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP",
  title: "The Business of Intellectual Property, Content Ownership & Creative Wealth",
  subtitle: "How will women build, protect, and monetise creative assets in a decentralized economy?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL",
  title: "Film, Media, Entertainment & the Future of Africa's Creative Economy",
  subtitle: "Why is Africa's greatest export its storytelling, and how do we capture its commercial value?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION",
  title: "The Future of Africa's Creative, Media & Influence Economy",
  subtitle: "How will the next generation of economic power be built through creativity, technology and influence?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-9",
  time: "15:50",
  format: "CLOSING KEYNOTE",
  title: "Africa's Creative Economy Will Be Led by Women Who Create, Own, Scale & Influence",
  subtitle: "Will you be among the women who transform creativity into absolute economic power?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}];

const STRATEGIC_BENEFITS: StrategicBenefit[] = [{
  id: "sb-1",
  label: "Intellectual Property Commercialisation"
}, {
  id: "sb-2",
  label: "Content Funding & Investment Access"
}, {
  id: "sb-3",
  label: "Strategic Media Partnerships"
}, {
  id: "sb-4",
  label: "Global Distribution & Market Access"
}, {
  id: "sb-5",
  label: "Brand Building & Audience Growth"
}, {
  id: "sb-6",
  label: "Digital Revenue Generation"
}, {
  id: "sb-7",
  label: "Cross-Border Collaboration Opportunities"
}, {
  id: "sb-8",
  label: "Executive Visibility & Industry Influence"
}];

const ATTENDEE_LIST: AttendeeItem[] = [{
  id: "at-1",
  label: "Female CXOs"
}, {
  id: "at-2",
  label: "Media Executives"
}, {
  id: "at-3",
  label: "Filmmakers & Producers"
}, {
  id: "at-4",
  label: "Broadcasters"
}, {
  id: "at-5",
  label: "Content Creators"
}, {
  id: "at-6",
  label: "Entrepreneurs & Investors"
}, {
  id: "at-7",
  label: "Policymakers"
}, {
  id: "at-8",
  label: "Academia & Innovators"
}];

const CTA_HEADLINE_WORDS = ["Own", "the", "Story.", "Own", "the", "Influence."];

const CREATIVE_METRICS = [{
  label: "IP Commercialisation",
  value: "$100B+",
  description: "Global creative economy generating over $100B annually, growing rapidly across Africa."
}, {
  label: "Content Funding & Investment",
  value: "R28B+",
  description: "South Africa's creative industries are among the continent's most commercially advanced."
}, {
  label: "Strategic Media Partnerships",
  value: "120+",
  description: "Active media collaboration agreements established within the EmpowaWomen ecosystem."
}, {
  label: "Global Distribution & Market Access",
  value: "15+ Countries",
  description: "Targeted distribution partnerships linking African content creators to international broadcast networks."
}];

// ─── Shared Sub-components ────────────────────────────────────────────────────
const SectionLabel: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => (
  <p style={{
    fontFamily: "Figtree",
    fontSize: "10px",
    fontWeight: 300,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#FF2D87",
    margin: "0 0 16px 0",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  }}>
    <span style={{
      display: "inline-block",
      width: "24px",
      height: "1.5px",
      backgroundColor: "#FF2D87",
      flexShrink: 0
    }} />
    <span>{children}</span>
  </p>
);

// ─── Hero Section ─────────────────────────────────────────────────────────────
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

const CreativeHeroBanner: React.FC = () => {
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
  return (
    <section id="home" style={{
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
          scale: 1.06
        }} animate={{
          scale: 1.0
        }} transition={{
          duration: 12,
          ease: "easeOut"
        }}>
          <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1600&q=80" alt="" aria-hidden="true" className="w-full h-full" style={{
            objectFit: "cover",
            objectPosition: "center 40%",
            width: "100%",
            height: "100%"
          }} />
        </motion.div>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,15,0.35) 0%, rgba(10,10,15,0.60) 40%, rgba(10,10,15,0.85) 75%, #0A0A0F 100%)"
        }} />
      </div>

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
            fontWeight: 300,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.60)",
            textTransform: "uppercase"
          }}>
            CREATIVE ECONOMY, FILM, MEDIA &amp; ENTERTAINMENT
          </span>
        </motion.div>

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
            return (
              <motion.span key={word.id} initial={{
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
                {isLast ? (
                  <span>
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
                  </span>
                ) : word.text}
              </motion.span>
            );
          })}
        </motion.h1>

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
            fontWeight: 300,
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
            fontWeight: 300,
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
            fontWeight: 300,
            fontSize: "clamp(10px, 2vw, 13px)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.40)"
          }}>
            Drive Change
          </span>
        </motion.div>

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
          fontWeight: 300,
          fontSize: "clamp(14px, 2.2vw, 17px)",
          color: "rgba(255,255,255,0.50)",
          lineHeight: 1.75,
          textAlign: "center",
          maxWidth: "560px",
          margin: "0 auto 0"
        }}>
          The Creative Economy, Film, Media &amp; Entertainment Stage, where Africa&apos;s most
          influential women build studios, launch platforms, and own the narrative.
        </motion.p>

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
            borderRadius: "999px",
            height: "50px",
            padding: "0 28px",
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(13px, 2vw, 15px)",
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            transition: "filter 200ms ease-out",
            boxShadow: "0 0 32px rgba(255,45,135,0.25)"
          }} onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.filter = "brightness(1.1)";
            el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.filter = "brightness(1)";
            el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
          }}>
            Secure Your Seat
            <ArrowRight size={16} />
          </button>

          <button onClick={handleProgrammeClick} style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "999px",
            height: "50px",
            padding: "0 28px",
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
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


      </div>
    </section>
  );
};


// ─── Main Component ────────────────────────────────────────────────────────────
export const CreativeEconomyPillar: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  const programmeRef = React.useRef<HTMLDivElement>(null);
  const programmeInView = useInView(programmeRef, {
    once: true,
    margin: "-80px"
  });
  const roiRef = React.useRef<HTMLDivElement>(null);
  const roiInView = useInView(roiRef, {
    once: true,
    margin: "-80px"
  });
  const colARef = React.useRef<HTMLDivElement>(null);
  const colAInView = useInView(colARef, {
    once: false,
    margin: "-80px",
    amount: 0.15
  });

  return (
    <div style={{
      width: "100%",
      backgroundColor: "#0A0A0F",
      fontFamily: "Figtree, sans-serif"
    }}>
      <main>
        {/* ── 1. Hero Banner ── */}
        <CreativeHeroBanner />





        {/* ── 3. Key Focus Areas — Bento Grid ── */}
        <section ref={bentoRef} style={{
          paddingTop: "clamp(48px, 8vw, 120px)",
          paddingBottom: "clamp(48px, 8vw, 120px)",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <SectionLabel>Key Focus Areas</SectionLabel>
          <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(24px, 4vw, 52px)",
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            margin: "0 0 clamp(32px, 5vw, 56px) 0",
            maxWidth: "700px"
          }}>
            Where Creativity Meets Commerce
          </h2>

          <div className="creative-bento-grid">
            {/* Column A — Focus Areas list */}
            <motion.div ref={colARef} initial={{
              opacity: 0,
              x: -40
            }} animate={colAInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -40
            }} transition={{
              duration: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98]
            }} style={{
              backgroundColor: "#0D0D14",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "clamp(20px, 3vw, 32px)"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px"
              }}>
                <div style={{
                  width: "3px",
                  height: "28px",
                  backgroundColor: "#FF2D87",
                  flexShrink: 0
                }} />
                <h3 style={{
                  fontFamily: "Figtree",
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  margin: 0,
                  letterSpacing: "-0.01em"
                }}>
                  Key Focus Areas
                </h3>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column"
              }}>
                {FOCUS_AREAS.map(area => (
                  <motion.div key={area.id} whileHover={{
                    x: 8
                  }} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    cursor: "pointer"
                  }} className="creative-focus-area-row">
                    <div style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: area.accentColor,
                      flexShrink: 0,
                      marginTop: "4px"
                    }} />
                    <area.icon size={16} style={{
                      color: "rgba(255,255,255,0.35)",
                      flexShrink: 0,
                      marginTop: "1px"
                    }} />
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px"
                    }}>
                      <span style={{
                        fontFamily: "Figtree",
                        fontSize: "14px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.80)",
                        letterSpacing: "0.01em",
                        transition: "color 200ms ease-out"
                      }}>
                        {area.title}
                      </span>
                      <span style={{
                        fontFamily: "Figtree",
                        fontSize: "12px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.35)",
                        lineHeight: 1.5
                      }}>
                        {area.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column B: ROI Metrics */}
            <motion.div initial={{
              opacity: 0,
              x: 24
            }} animate={bentoInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98]
            }} style={{
              borderTop: "3px solid #FF2D87"
            }}>
              <ROIMetricBlock title="Creative ROI & Metrics" metrics={CREATIVE_METRICS} />
            </motion.div>
          </div>
        </section>



        {/* ── Thin separator ── */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)"
        }}>
          <div style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(255,45,135,0.4) 30%, rgba(212,175,55,0.4) 70%, transparent)"
          }} />
        </div>

        {/* ── 5. Programme Section ── */}
        <section ref={programmeRef} id="programme" style={{
          paddingTop: "clamp(48px, 8vw, 120px)",
          paddingBottom: "clamp(48px, 8vw, 120px)",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <div style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#FF2D87",
            marginBottom: "16px"
          }} />
          <SectionLabel>High-Impact Executive Programme</SectionLabel>

          <motion.div initial={{
            opacity: 0,
            y: 24
          }} animate={programmeInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} style={{
            backgroundColor: "#0D0D14",
            border: "1px solid rgba(255,255,255,0.06)",
            borderLeft: "3px solid #FF2D87",
            padding: "clamp(20px, 3vw, 32px) clamp(20px, 3vw, 36px)",
            marginBottom: "clamp(32px, 5vw, 48px)",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
            <div className="creative-featured-session-inner" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px"
            }}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flex: 1,
                minWidth: 0
              }}>
                <h2 style={{
                  fontFamily: "Figtree",
                  fontSize: "clamp(18px, 2.8vw, 30px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  margin: 0
                }}>
                  Creative Economy, Film, Media &amp; Entertainment High-Impact Executive Programme
                </h2>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "16px"
                }}>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "rgba(255,45,135,0.12)",
                    border: "1px solid rgba(255,45,135,0.3)",
                    borderRadius: "999px",
                    padding: "5px 14px"
                  }}>
                    <Clock size={12} style={{
                      color: "#FF2D87"
                    }} />
                    <span style={{
                      fontFamily: "Figtree",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "#FF2D87"
                    }}>11:00 – 16:00 (GMT+2)</span>
                  </div>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <span style={{
                      fontFamily: "Figtree",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.50)"
                    }}>Saturday, 29 August 2026</span>
                  </div>
                </div>
              </div>
              <button onClick={() => {
                const el = document.getElementById("registration");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }} style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 28px",
                backgroundColor: "#FF2D87",
                color: "#FFFFFF",
                fontFamily: "Figtree",
                fontSize: "13px",
                fontWeight: 300,
                letterSpacing: "0.04em",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "filter 200ms ease-out",
                flexShrink: 0,
                alignSelf: "flex-start",
                width: "100%"
              }} className="creative-register-btn" onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.12)";
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
              }}>
                <span>Register for Session</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0"
          }}>
            {PROGRAMME_SESSIONS.map((session, idx) => {
              if (session.isLunch) {
                return (
                  <motion.div key={session.id} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={programmeInView ? {
                    opacity: 1,
                    y: 0
                  } : {}} transition={{
                    duration: 0.5,
                    delay: 0.1 + idx * 0.07,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }} style={{
                    backgroundColor: "rgba(0,180,166,0.04)",
                    border: "1px solid rgba(0,180,166,0.12)",
                    borderRadius: "8px",
                    padding: "16px",
                    margin: "4px 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0"
                  }}>
                    <div className="creative-session-inner" style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "clamp(16px, 3vw, 32px)"
                    }}>
                      <div style={{
                        flexShrink: 0,
                        minWidth: "clamp(90px, 12vw, 130px)"
                      }}>
                        <div style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          backgroundColor: "rgba(0,180,166,0.08)",
                          border: "1px solid rgba(0,180,166,0.20)",
                          borderRadius: "999px",
                          padding: "4px 10px"
                        }}>
                          <Clock size={10} style={{
                            color: "#00B4A6",
                            flexShrink: 0
                          }} />
                          <span style={{
                            fontFamily: "Figtree",
                            fontSize: "10px",
                            fontWeight: 300,
                            color: "#00B4A6",
                            letterSpacing: "0.05em",
                            whiteSpace: "nowrap"
                          }}>
                            {session.time}
                          </span>
                        </div>
                      </div>
                      <div style={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px"
                      }}>
                        <span style={{
                          fontFamily: "Figtree",
                          fontSize: "9px",
                          fontWeight: 300,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#00B4A6"
                        }}>
                          {session.format} · INCLUDED
                        </span>
                        <h4 style={{
                          fontFamily: "Figtree",
                          fontSize: "clamp(14px, 2vw, 17px)",
                          fontWeight: 300,
                          color: "#FFFFFF",
                          lineHeight: 1.3,
                          letterSpacing: "-0.01em",
                          margin: 0
                        }}>
                          {session.title}
                        </h4>
                        <p style={{
                          fontFamily: "Figtree",
                          fontSize: "clamp(12px, 1.5vw, 13px)",
                          color: "rgba(255,255,255,0.40)",
                          lineHeight: 1.6,
                          margin: 0,
                          fontStyle: "italic"
                        }}>
                          {session.subtitle}
                        </p>
                      </div>
                      <div style={{
                        width: "3px",
                        alignSelf: "stretch",
                        backgroundColor: "rgba(0,180,166,0.30)",
                        flexShrink: 0
                      }} />
                    </div>
                  </motion.div>
                );
              }
              return (
                <motion.div key={session.id} initial={{
                  opacity: 0,
                  y: 20
                }} animate={programmeInView ? {
                  opacity: 1,
                  y: 0
                } : {}} transition={{
                  duration: 0.5,
                  delay: 0.1 + idx * 0.07,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }} className="creative-programme-session-row" style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  padding: "clamp(18px, 2.5vw, 28px) 0",
                  cursor: "pointer"
                }}>
                  <div className="creative-session-inner" style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "clamp(16px, 3vw, 32px)"
                  }}>
                    <div style={{
                      flexShrink: 0,
                      minWidth: "clamp(90px, 12vw, 130px)"
                    }}>
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        backgroundColor: `rgba(${session.accentRgb},0.08)`,
                        border: `1px solid rgba(${session.accentRgb},0.20)`,
                        borderRadius: "999px",
                        padding: "4px 10px"
                      }}>
                        <Clock size={10} style={{
                          color: session.accentColor,
                          flexShrink: 0
                        }} />
                        <span style={{
                          fontFamily: "Figtree",
                          fontSize: "10px",
                          fontWeight: 300,
                          color: session.accentColor,
                          letterSpacing: "0.05em",
                          whiteSpace: "nowrap"
                        }}>
                          {session.time}
                        </span>
                      </div>
                    </div>
                    <div style={{
                      flex: 1,
                      minWidth: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px"
                    }}>
                      <span style={{
                        fontFamily: "Figtree",
                        fontSize: "9px",
                        fontWeight: 300,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: session.accentColor
                      }}>
                        {session.format}
                      </span>
                      <h4 style={{
                        fontFamily: "Figtree",
                        fontSize: "clamp(14px, 2vw, 17px)",
                        fontWeight: 300,
                        color: "#FFFFFF",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        margin: 0
                      }}>
                        {session.title}
                      </h4>
                      <p style={{
                        fontFamily: "Figtree",
                        fontSize: "clamp(12px, 1.5vw, 13px)",
                        color: "rgba(255,255,255,0.40)",
                        lineHeight: 1.6,
                        margin: 0,
                        fontStyle: "italic"
                      }}>
                        {session.subtitle}
                      </p>
                    </div>
                    <div style={{
                      width: "3px",
                      alignSelf: "stretch",
                      backgroundColor: `rgba(${session.accentRgb},0.30)`,
                      flexShrink: 0
                    }} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(24px, 4vw, 48px)",
            marginTop: "clamp(32px, 4vw, 48px)",
            paddingTop: "clamp(24px, 3vw, 32px)",
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}>
            {[{
              value: "9 Sessions",
              label: "Total Sessions"
            }, {
              value: "11:00 Start",
              label: "Doors Open"
            }, {
              value: "16:00 Close",
              label: "Summit Ends"
            }].map(stat => (
              <div key={stat.label}>
                <p style={{
                  fontFamily: "Figtree",
                  fontWeight: 200,
                  fontSize: "clamp(24px, 4vw, 32px)",
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  margin: 0,
                  lineHeight: 1
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "10px",
                  fontWeight: 300,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.30)",
                  marginTop: "4px",
                  margin: "4px 0 0 0"
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Separator ── */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)"
        }}>
          <div style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(255,45,135,0.4) 30%, rgba(212,175,55,0.4) 70%, transparent)"
          }} />
        </div>

        {/* ── 6. Strategic ROI / Benefits Section ── */}
        <section ref={roiRef} style={{
          paddingTop: "clamp(48px, 8vw, 100px)",
          paddingBottom: "clamp(48px, 8vw, 100px)",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <SectionLabel>Strategic ROI &amp; Opportunities</SectionLabel>

          <div className="creative-roi-benefits-grid">
            <motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={roiInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}>
              <h2 style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(24px, 4vw, 48px)",
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                margin: "0 0 24px 0",
                maxWidth: "440px"
              }}>
                Why Attend This Stage
              </h2>
              <p style={{
                fontFamily: "Figtree",
                fontSize: "clamp(14px, 1.8vw, 16px)",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                margin: 0,
                maxWidth: "380px"
              }}>
                Unlock access to the relationships, intelligence, and opportunities that drive Africa&apos;s creative economy forward.
              </p>

              <div style={{
                marginTop: "32px",
                display: "flex",
                flexDirection: "column"
              }}>
                {STRATEGIC_BENEFITS.map((benefit, idx) => {
                  const accent = idx % 3 === 0 ? "#FF2D87" : idx % 3 === 1 ? "#00B4A6" : "#D4AF37";
                  return (
                    <motion.div key={benefit.id} initial={{
                      opacity: 0,
                      x: -16
                    }} animate={roiInView ? {
                      opacity: 1,
                      x: 0
                    } : {}} transition={{
                      duration: 0.5,
                      delay: 0.1 + idx * 0.07
                    }} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)"
                    }}>
                      <CheckCircle2 size={15} style={{
                        color: accent,
                        flexShrink: 0
                      }} />
                      <span style={{
                        fontFamily: "Figtree",
                        fontSize: "14px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.75)",
                        letterSpacing: "0.01em"
                      }}>
                        {benefit.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={roiInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.21, 0.47, 0.32, 0.98]
            }} style={{
              backgroundColor: "#0D0D14",
              border: "1px solid rgba(255,255,255,0.06)",
              borderTop: "3px solid #FF2D87",
              padding: "clamp(24px, 3vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: "0"
            }}>
              <p style={{
                fontFamily: "Figtree",
                fontSize: "9px",
                fontWeight: 300,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.30)",
                textTransform: "uppercase",
                margin: "0 0 20px 0"
              }}>
                WHO SHOULD ATTEND
              </p>
              {ATTENDEE_LIST.map((attendee, idx) => {
                const accent = idx % 3 === 0 ? "#FF2D87" : idx % 3 === 1 ? "#00B4A6" : "#D4AF37";
                return (
                  <motion.div key={attendee.id} initial={{
                    opacity: 0,
                    x: 16
                  }} animate={roiInView ? {
                    opacity: 1,
                    x: 0
                  } : {}} transition={{
                    duration: 0.5,
                    delay: 0.2 + idx * 0.07
                  }} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 0",
                    borderBottom: idx < ATTENDEE_LIST.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none"
                  }}>
                    <span style={{
                      fontFamily: "Figtree",
                      fontWeight: 300,
                      fontSize: "14px",
                      color: accent,
                      width: 20,
                      flexShrink: 0
                    }}>→</span>
                    <span style={{
                      fontFamily: "Figtree",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.75)",
                      letterSpacing: "0.01em"
                    }}>
                      {attendee.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Separator ── */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)"
        }}>
          <div style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(255,45,135,0.4) 30%, rgba(212,175,55,0.4) 70%, transparent)"
          }} />
        </div>

        {/* ── 7. CTA Section ── */}
        <section style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0A0A0F",
          paddingTop: "clamp(64px, 10vw, 140px)",
          paddingBottom: "clamp(64px, 10vw, 140px)",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1400px",
            aspectRatio: "2 / 1",
            pointerEvents: "none",
            opacity: 0.20
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1400&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage: "linear-gradient(to top, transparent 0%, black 40%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 40%)"
            }} />
          </div>

          <div style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,45,135,0.08) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />

          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "clamp(24px, 3vw, 32px)"
          }}>
            <p style={{
              fontFamily: "Figtree",
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FF2D87",
              margin: 0
            }}>
              TAKE THE NEXT STEP
            </p>

            <h2 style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(32px, 7vw, 80px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              margin: 0
            }}>
              {CTA_HEADLINE_WORDS.map((word, i) => (
                <motion.span key={`cta-word-${word}-${i}`} initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0
                }} viewport={{
                  once: true,
                  margin: "-80px"
                }} transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }} style={{
                  display: "inline-block",
                  marginRight: "0.22em",
                  ...(word === "Influence." ? {
                    textDecoration: "underline",
                    textDecorationColor: "#FF2D87",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "8px"
                  } : {})
                }}>
                  {word}
                </motion.span>
              ))}
            </h2>

            <p style={{
              fontFamily: "Figtree",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "560px",
              lineHeight: 1.75,
              margin: 0
            }}>
              Building Africa&apos;s Creative Economy Through Storytelling, Ownership and Cultural Influence.
            </p>

            <div className="creative-cta-btn-group">
              <button className="creative-cta-btn-primary" onClick={() => {
                const el = document.getElementById("registration");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }} style={{
                backgroundColor: "#FF2D87",
                color: "#FFFFFF",
                fontFamily: "Figtree",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 300,
                padding: "clamp(14px, 2vw, 18px) clamp(28px, 3vw, 40px)",
                borderRadius: "999px",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer",
                transition: "filter 200ms ease-out",
                width: "100%"
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
              }}>
                Secure Your Seat
                <ArrowRight size={18} />
              </button>

              <button className="creative-cta-btn-secondary" onClick={() => {
                const el = document.getElementById("programme");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }} style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#FFFFFF",
                fontFamily: "Figtree",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 300,
                padding: "clamp(14px, 2vw, 18px) clamp(28px, 3vw, 40px)",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 200ms ease-out",
                width: "100%"
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
              }}>
                Download Programme Overview
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── 8. Delegate Registration ── */}
      <DelegateRegistrationSection
        stageName="The Creative Economy"
        includes={[
          "Full-day Creative Economy Stage access",
          "Premium executive programme (9 sessions)",
          "High-impact networking & creative matchmaking",
          "Delegate resource pack & recordings"
        ]}
      />

      <style>{`
        .creative-focus-area-row:hover span:first-child { color: rgba(255,255,255,0.95) !important; }
        .creative-programme-session-row:hover { background-color: rgba(255,255,255,0.015); }
        .creative-programme-session-row { transition: background-color 200ms ease-out; }

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

        @keyframes shimmerSlide {
          0% { transform: skewX(-20deg) translateX(-100%); }
          100% { transform: skewX(-20deg) translateX(350%); }
        }

        /* Overview grid */
        .creative-overview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 64px);
          margin-top: 24px;
        }
        @media (min-width: 1024px) {
          .creative-overview-grid {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }

        /* Bento grid */
        .creative-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 3vw, 40px);
        }
        @media (min-width: 1024px) {
          .creative-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ROI benefits grid */
        .creative-roi-benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 4vw, 56px);
          margin-top: clamp(24px, 3vw, 40px);
        }
        @media (min-width: 1024px) {
          .creative-roi-benefits-grid {
            grid-template-columns: 1fr 1.3fr;
            align-items: start;
          }
        }

        /* Session inner layout */
        .creative-session-inner {
          flex-direction: row !important;
        }
        @media (max-width: 600px) {
          .creative-session-inner {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }

        /* Featured session */
        @media (min-width: 768px) {
          .creative-featured-session-inner {
            flex-direction: row !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
          }
          .creative-register-btn {
            width: auto !important;
            flex-shrink: 0 !important;
          }
        }

        /* CTA button group */
        .creative-cta-btn-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 380px;
        }
        @media (min-width: 480px) {
          .creative-cta-btn-group {
            flex-direction: row;
            width: auto;
            max-width: none;
          }
          .creative-cta-btn-primary,
          .creative-cta-btn-secondary {
            width: auto !important;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@200;300;400;500;600;700;900&display=swap');
      `}</style>
    </div>
  );
};
