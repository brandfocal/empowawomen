import * as React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Sparkles, ShoppingBag, HeartPulse, Brain, Activity, Store, Camera, Dumbbell, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { ROIMetricBlock } from "./ROIMetricBlock";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FocusArea {
  id: string;
  icon: React.ElementType;
  title: string;
  accentColor: string;
}
interface ROIMetric {
  label: string;
  value: string;
  description: string;
}
interface ProgrammeSession {
  id: string;
  time: string;
  format: string;
  title: string;
  subtitle: string;
  accentColor: string;
  accentRgb: string;
}
interface FormState {
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  industry: string;
  email: string;
  phone: string;
  hearAboutUs: string;
  specialRequirements: string;
  agreed: boolean;
}

// ─── Constants & Data ─────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Sparkles,
  title: "Beauty & Personal Care Innovation",
  accentColor: "#FF2D87"
}, {
  id: "fa-2",
  icon: ShoppingBag,
  title: "Fashion & Luxury Markets",
  accentColor: "#D4AF37"
}, {
  id: "fa-3",
  icon: HeartPulse,
  title: "Wellness & Lifestyle Economies",
  accentColor: "#FF2D87"
}, {
  id: "fa-4",
  icon: Brain,
  title: "Mental Health & Corporate Wellness",
  accentColor: "#00B4A6"
}, {
  id: "fa-5",
  icon: Activity,
  title: "Health Innovation & Preventative Care",
  accentColor: "#00B4A6"
}, {
  id: "fa-6",
  icon: Store,
  title: "Women-Led Consumer Brands",
  accentColor: "#FF2D87"
}, {
  id: "fa-7",
  icon: Camera,
  title: "Influencer & Beauty Commerce",
  accentColor: "#D4AF37"
}, {
  id: "fa-8",
  icon: Dumbbell,
  title: "Fitness, Nutrition & Holistic Wellness",
  accentColor: "#00B4A6"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Consumer Brand Growth & Commercialisation",
  value: "78%+",
  description: "Accelerated market entry and revenue scaling for women-owned consumer enterprises."
}, {
  label: "Strategic Retail & Media Partnerships",
  value: "110+",
  description: "Direct connections established between brands and tier-1 retail distributors and media."
}, {
  label: "Wellness Innovation Exposure",
  value: "Tier 1",
  description: "Global visibility for African wellness solutions within international health ecosystems."
}, {
  label: "Women-Led Lifestyle Enterprise Market",
  value: "R8B+",
  description: "Identified market valuation of the collective portfolio within the EmpowaWomen network."
}];
const PROGRAMME_SESSIONS: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00",
  format: "OPENING KEYNOTE™",
  title: "Women Must Lead the Future of Africa's Wellness, Beauty & Lifestyle Economy",
  subtitle: "Who Will Define Africa's Next Consumer, Wellness & Cultural Growth Markets?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS™",
  title: "Beauty Innovation, Digital Commerce & the Future of Consumer Brands™",
  subtitle: "Technology, Consumer Behaviour & Wellness Trends Will Define the Next Era of Lifestyle Growth.",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL™",
  title: "Women, Wellness & the Future of the Consumer Economy™",
  subtitle: "The Future of Wellness Will Be Defined by Innovation, Influence & Consumer Trust.",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-4",
  time: "12:50",
  format: "NETWORKING LUNCH™",
  title: "Cultivating Influence, Partnerships & Lifestyle Market Growth™",
  subtitle: "Which Strategic Relationships Will Accelerate Your Brand, Wellness & Consumer Growth Journey?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-5",
  time: "13:20",
  format: "FIRECHAT™",
  title: "Brand Building, Market Access & Women-Led Lifestyle Enterprises™",
  subtitle: "Influence Without Commercial Scale Is a Missed Economic Opportunity.",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP™",
  title: "The Business of Wellness, Consumer Influence & Brand Monetisation™",
  subtitle: "The Future of Consumer Growth Will Belong to Brands That Build Trust, Wellness & Community.",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Fashion, Beauty, Health & the Future of the Wellness Economy™",
  subtitle: "Wellness, Identity & Lifestyle Influence Are Becoming High-Value Economic Assets.",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Wellness Economy & Women-Led Consumer Transformation™",
  subtitle: "Innovation, Wellness & Women Leadership Will Shape Africa's Consumer Future.",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-9",
  time: "15:50",
  format: "CLOSING KEYNOTE™",
  title: "Africa's Wellness & Consumer Economy Will Be Led by Women Who Build, Influence & Transform",
  subtitle: "Will You Be One of the Women Defining Africa's Future Lifestyle & Consumer Economy?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}];
const CTA_HEADLINE_WORDS = ["Lead,", "Africa's,", "Wellness,", "Economy,", "Now."];
const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  company: "",
  industry: "",
  email: "",
  phone: "",
  hearAboutUs: "",
  specialRequirements: "",
  agreed: false
};
const INDUSTRY_OPTIONS = [{
  id: "ind-1",
  label: "Beauty & Personal Care"
}, {
  id: "ind-2",
  label: "Fashion & Luxury"
}, {
  id: "ind-3",
  label: "Health & Wellness"
}, {
  id: "ind-4",
  label: "Fitness & Nutrition"
}, {
  id: "ind-5",
  label: "Healthcare & Pharmaceuticals"
}, {
  id: "ind-6",
  label: "Retail & E-Commerce"
}, {
  id: "ind-7",
  label: "Media & Influencer Economy"
}, {
  id: "ind-8",
  label: "Investment & Finance"
}, {
  id: "ind-9",
  label: "Academia & Research"
}, {
  id: "ind-10",
  label: "Policymaking & Government"
}, {
  id: "ind-11",
  label: "Other"
}];
const HEAR_OPTIONS = [{
  id: "h-1",
  label: "LinkedIn"
}, {
  id: "h-2",
  label: "Colleague Referral"
}, {
  id: "h-3",
  label: "Email Newsletter"
}, {
  id: "h-4",
  label: "EmpowaWomen Website"
}, {
  id: "h-5",
  label: "Google Search"
}, {
  id: "h-6",
  label: "Event Partner"
}, {
  id: "h-7",
  label: "Other"
}];
const DETAILS_ROWS = [{
  id: "dr-1",
  label: "Stage",
  value: "Beauty, Fashion, Health & Wellness™"
}, {
  id: "dr-2",
  label: "Date",
  value: "Saturday, 29 August 2026"
}, {
  id: "dr-3",
  label: "Time",
  value: "11:00–16:00"
}, {
  id: "dr-4",
  label: "Venue",
  value: "The Forum, The Campus, Bryanston"
}, {
  id: "dr-5",
  label: "Investment",
  value: "R1,500 per delegate"
}];
const INCLUDES = [{
  id: "inc-1",
  text: "Full-day Beauty, Fashion, Health & Wellness Stage access"
}, {
  id: "inc-2",
  text: "Premium executive programme (9 sessions)"
}, {
  id: "inc-3",
  text: "High-impact networking & brand matchmaking"
}, {
  id: "inc-4",
  text: "Delegate resource pack & recordings"
}];
const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "8px",
  padding: "13px 16px",
  color: "white",
  fontSize: "14px",
  fontFamily: "Figtree, sans-serif",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const
};

// ─── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{
  children: React.ReactNode;
  color?: string;
  centered?: boolean;
}> = ({
  children,
  color = "#FF2D87",
  centered
}) => <motion.div initial={{
  opacity: 0,
  x: centered ? 0 : -20,
  y: centered ? 10 : 0
}} whileInView={{
  opacity: 1,
  x: 0,
  y: 0
}} viewport={{
  once: true
}} style={{
  fontFamily: "Figtree",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color,
  margin: "0 0 16px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: centered ? "center" : "flex-start",
  gap: "10px"
}}>
    <span style={{
    display: "inline-block",
    width: "24px",
    height: "1.5px",
    backgroundColor: color,
    flexShrink: 0
  }} />
    <span>{children}</span>
    {centered && <span style={{
      display: "inline-block",
      width: "24px",
      height: "1.5px",
      backgroundColor: color,
      flexShrink: 0
    }} />}
  </motion.div>;

const HeroBanner: React.FC = () => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const lines = [{
    words: ["Beauty,", "Wellness"]
  }, {
    words: ["&", "Fashion."]
  }, {
    words: ["Growth."]
  }];
  let wordCounter = 0;
  return <section style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "68px",
    paddingBottom: "80px"
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

      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none"
      }}>
        <motion.div initial={{
          scale: 1.05,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 2.5,
          ease: "easeOut"
        }} style={{
          position: "absolute",
          inset: 0
        }}>
          <motion.div style={{
            y: imageY,
            position: "absolute",
            inset: 0
          }}>
            <img src="https://images.unsplash.com/photo-1608748010899-18f300247112?w=1600&q=80" alt="Beauty, Fashion & Wellness" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.4,
              filter: "grayscale(20%)"
            }} />
          </motion.div>
        </motion.div>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,15,0.65) 0%, rgba(10,10,15,0.35) 40%, rgba(10,10,15,0.95) 100%)"
        }} />
      </div>

      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "1400px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "clamp(48px, 12vw, 128px)",
        paddingBottom: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}>
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
          fontSize: "clamp(10px, 2vw, 11px)",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.60)"
        }}>
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#FF2D87",
            display: "inline-block",
            animation: "pulseDot 2s ease-in-out infinite"
          }} />
          BEAUTY, FASHION, HEALTH & WELLNESS STAGE™
        </motion.div>

        <h1 style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(40px, 8vw, 96px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#FFFFFF",
          marginBottom: "32px",
          maxWidth: "1000px"
        }}>
          {lines.map((line, i) => <span key={i} style={{
            display: "block",
            overflow: "hidden",
            paddingBottom: "4px"
          }}>
              {line.words.map((word, j) => {
                const index = wordCounter++;
                const isDecorated = word.includes('.') || word.includes(',');
                const cleanWord = isDecorated ? word.slice(0, -1) : word;
                const punctuation = isDecorated ? word.slice(-1) : "";
                return <motion.span key={j} initial={{
                  opacity: 0,
                  y: 50,
                  filter: "blur(10px)"
                }} animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)"
                }} transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }} style={{
                  display: "inline-block",
                  marginRight: "0.25em"
                }}>
                    {isDecorated ? <>
                        <span style={{
                          textDecoration: "underline",
                          textDecorationColor: "#FF2D87",
                          textDecorationThickness: "3px",
                          textUnderlineOffset: "8px"
                        }}>
                          {cleanWord}
                        </span>
                        <span style={{ color: "#FF2D87" }}>{punctuation}</span>
                      </> : word}
                  </motion.span>;
              })}
            </span>)}
        </h1>

        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 1.2
        }} style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
          fontSize: "clamp(10px, 2vw, 13px)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.40)"
        }}>
          <span>Identity</span>
          <span style={{ display: "inline-block", width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.2)" }} />
          <span>Lifestyle</span>
          <span style={{ display: "inline-block", width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.2)" }} />
          <span>Influence</span>
          <span style={{ display: "inline-block", width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.2)" }} />
          <span>Enterprise</span>
        </motion.div>

        <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "rgba(255,255,255,0.50)",
          maxWidth: "700px",
          lineHeight: 1.6,
          marginBottom: "40px",
          paddingLeft: "16px",
          paddingRight: "16px"
        }}>
          The global wellness economy continues to redefine consumer behaviour, health consciousness, beauty innovation, fashion influence, and lifestyle-driven commerce. This stage explores the rise of these powerful economic drivers shaping women-led growth across Africa.
        </motion.p>

        {/* Standardised CTAs with borderRadius 999px and smooth scroll */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.6
        }} style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          width: "auto",
          paddingLeft: "24px",
          paddingRight: "24px"
        }} className="hero-cta-container">
          <button onClick={e => {
            e.preventDefault();
            document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
          }} style={{
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            padding: "16px 32px",
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 2vw, 15px)",
            fontWeight: 500,
            letterSpacing: "0.02em",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            cursor: "pointer",
            border: "none",
            borderRadius: "999px",
            boxShadow: "0 0 32px rgba(255,45,135,0.25)",
            position: "relative",
            overflow: "hidden"
          }} className="group">
            <span style={{ position: "relative", zIndex: 10 }}>Secure Your Seat</span>
            <ArrowRight size={16} style={{ position: "relative", zIndex: 10 }} className="group-hover:translate-x-1 transition-transform" />
            <span style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.15)",
              transform: "skewX(-20deg) translateX(-100%)",
              animation: "shimmerSlide 3s linear infinite",
              pointerEvents: "none"
            }} />
          </button>
          <button onClick={e => {
            e.preventDefault();
            document.getElementById("focus-areas")?.scrollIntoView({ behavior: "smooth" });
          }} style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "#FFFFFF",
            padding: "16px 32px",
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 2vw, 15px)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            borderRadius: "999px",
            cursor: "pointer"
          }} className="hover:bg-white/10 transition-all">
            Explore Programme
          </button>
        </motion.div>

        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 2
        }} style={{
          marginTop: "clamp(48px, 8vw, 80px)",
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }}>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            {[
              "1531123897727-8f129e1688ce",
              "1520813792240-56fc4a3765a7",
              "1502685104226-ee32379fefbe",
              "1567532939604-b6b5b0db2604",
              "1573496359142-b8d87734a5a2",
              "1580489944761-15a19d654956"
            ].map((id, index) => <img key={id} src={`https://images.unsplash.com/photo-${id}?w=80&q=80`} alt="Participant" style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "2px solid #0A0A0F",
              objectFit: "cover",
              marginLeft: index === 0 ? 0 : -10,
              display: "block"
            }} />)}
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600 }}>10,000+ Women</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px" }}>Leading Africa's Wellness Economy</div>
          </div>
        </motion.div>
      </div>

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
        pointerEvents: "none",
        zIndex: 2
      }} />
  </section>;
};

const ProgrammeSection: React.FC = () => {
  const progRef = React.useRef<HTMLDivElement>(null);
  const progInView = useInView(progRef, {
    once: true,
    margin: "-80px"
  });
  return <section id="programme" ref={progRef} style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "128px",
    paddingBottom: "128px",
    paddingLeft: "16px",
    paddingRight: "16px",
    position: "relative",
    overflow: "hidden"
  }}>
      {/* Ambient venue background image */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.06,
      pointerEvents: "none"
    }} />

      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "1024px",
      margin: "0 auto"
    }}>
        {/* Header */}
        <div style={{
        width: "48px",
        height: "3px",
        backgroundColor: "#FF2D87",
        marginBottom: "20px"
      }} />
        <p style={{
        fontFamily: "Figtree, sans-serif",
        fontSize: "9px",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.40)",
        margin: "0 0 20px 0"
      }}>
          HIGH-IMPACT EXECUTIVE PROGRAMME
        </p>
        <motion.h2 initial={{
        opacity: 0,
        y: 24
      }} animate={progInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98]
      }} style={{
        fontFamily: "Figtree, sans-serif",
        fontWeight: 300,
        fontSize: "clamp(26px, 4vw, 48px)",
        color: "#FFFFFF",
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        margin: "0 0 16px 0"
      }}>
          A Day of Innovation, Influence & Consumer Growth
        </motion.h2>
        <p style={{
        fontFamily: "Figtree, sans-serif",
        color: "rgba(255,255,255,0.45)",
        fontSize: "14px",
        lineHeight: 1.75,
        margin: "0 0 56px 0",
        maxWidth: "760px"
      }}>
          11:00 – 16:00 · Curated for Female CXOs, Entrepreneurs, Beauty Executives, Wellness Leaders, Investors, Media, Academia, Policymakers &amp; Future-Focused Professionals
        </p>

        {/* Sessions list */}
        <div style={{
        maxWidth: "768px",
        margin: "0 auto"
      }}>
          {PROGRAMME_SESSIONS.map((session, i) => {
          const isLunch = session.id === "ps-4";
          if (isLunch) {
            return <motion.div key={session.id} initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: i * 0.06
            }} whileHover={{
              backgroundColor: "rgba(255,255,255,0.025)"
            }} style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)"
            }}>
                  {/* Time col */}
                  <div style={{
                width: "80px",
                flexShrink: 0
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "#00B4A6"
                }}>
                      {session.time}
                    </span>
                  </div>
                  {/* Content col */}
                  <div style={{
                flex: 1,
                minWidth: 0
              }}>
                    <div style={{
                  backgroundColor: "rgba(0,180,166,0.04)",
                  border: "1px solid rgba(0,180,166,0.12)",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  margin: "4px 0",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px"
                }}>
                      <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#00B4A6",
                    flexShrink: 0,
                    marginTop: "5px"
                  }} />
                      <div>
                        <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap"
                    }}>
                          <span style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#00B4A6"
                      }}>
                            {session.format}
                          </span>
                          <span style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#00B4A6",
                        backgroundColor: "rgba(0,180,166,0.10)",
                        border: "1px solid rgba(0,180,166,0.25)",
                        borderRadius: "4px",
                        padding: "2px 6px"
                      }}>
                            INCLUDED
                          </span>
                        </div>
                        <p style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: "4px 0 0 0",
                      lineHeight: 1.4
                    }}>
                          {session.title}
                        </p>
                        <p style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.35)",
                      margin: "4px 0 0 0",
                      lineHeight: 1.5
                    }}>
                          {session.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Session number col */}
                  <div style={{
                width: "36px",
                flexShrink: 0,
                textAlign: "right"
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.12)"
                }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>;
          }
          return <motion.div key={session.id} initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: i * 0.06
          }} whileHover={{
            backgroundColor: "rgba(255,255,255,0.025)"
          }} style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            cursor: "default"
          }}>
                {/* Time col */}
                <div style={{
              width: "80px",
              flexShrink: 0
            }}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: session.accentColor
              }}>
                    {session.time}
                  </span>
                </div>
                {/* Content col */}
                <div style={{
              flex: 1,
              minWidth: 0
            }}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: session.accentColor,
                display: "block"
              }}>
                {session.format}
              </span>
                  <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                color: "#FFFFFF",
                margin: "4px 0 0 0",
                lineHeight: 1.4
              }}>
                    {session.title}
                  </p>
                  <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                margin: "4px 0 0 0",
                lineHeight: 1.5
              }}>
                    {session.subtitle}
                  </p>
                </div>
                {/* Session number col */}
                <div style={{
              width: "36px",
              flexShrink: 0,
              textAlign: "right"
            }}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.12)"
              }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>;
        })}
        </div>

        {/* Stats footer */}
        <div style={{
        maxWidth: "768px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "48px",
        paddingTop: "32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        flexWrap: "wrap",
        gap: "16px"
      }}>
          {[{
          label: "9 Sessions"
        }, {
          label: "11:00 Start"
        }, {
          label: "16:00 Close"
        }].map(stat => <div key={stat.label} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px"
        }}>
              <span style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.04em"
          }}>
                {stat.label}
              </span>
            </div>)}
        </div>
      </div>
    </section>;
};

const RegistrationSection: React.FC = () => {
  const [form, setForm] = React.useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = React.useState(false);
  const [focused, setFocused] = React.useState<string | null>(null);
  function handleChange(field: keyof FormState, value: string | boolean) {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }
  function getInputStyle(fieldName: string): React.CSSProperties {
    return {
      ...inputStyle,
      borderColor: focused === fieldName ? "#FF2D87" : "rgba(255,255,255,0.10)"
    };
  }
  return <motion.section id="registration" initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6
  }} style={{
    backgroundColor: "#0A0A0F",
    position: "relative",
    overflow: "hidden",
    paddingTop: "128px",
    paddingBottom: "128px",
    paddingLeft: "clamp(16px, 5vw, 32px)",
    paddingRight: "clamp(16px, 5vw, 32px)"
  }}>
      {/* Radial pink glow */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(255,45,135,0.05) 0%, transparent 65%)",
      pointerEvents: "none"
    }} />

      {/* Inner layout */}
      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "1024px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "64px",
      alignItems: "start"
    }} className="reg-layout">
        {/* ── LEFT COLUMN ── */}
        <div style={{
        flex: 1,
        minWidth: 0,
        width: "100%"
      }}>
          {/* Header */}
          <div style={{
          width: "48px",
          height: "3px",
          backgroundColor: "#FF2D87",
          marginBottom: "16px"
        }} />
          <p style={{
          fontFamily: "Figtree, sans-serif",
          textTransform: "uppercase",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.35)",
          margin: "0 0 16px 0"
        }}>
            DELEGATE REGISTRATION
          </p>
          <h2 style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px, 3.5vw, 44px)",
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
          lineHeight: 1.15,
          margin: "0 0 12px 0"
        }}>
            Secure Your Place at Africa's Beauty, Fashion, Health &amp; Wellness Stage™
          </h2>
          <p style={{
          fontFamily: "Figtree, sans-serif",
          color: "rgba(255,255,255,0.45)",
          fontSize: "14px",
          lineHeight: 1.75,
          margin: "0 0 32px 0"
        }}>
            Investment: R1,500 per delegate. Complete the form below and our team will confirm your registration within 24 hours.
          </p>

          {/* ── FORM or SUCCESS STATE ── */}
          {submitted ? <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          paddingTop: "64px",
          paddingBottom: "64px"
        }}>
              <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }} style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,45,135,0.10)",
            border: "2px solid #FF2D87",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
                <Check size={36} color="#FF2D87" />
              </motion.div>
              <h3 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 3.5vw, 36px)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: 0,
            textAlign: "center"
          }}>
                Registration Submitted!
              </h3>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            color: "rgba(255,255,255,0.50)",
            fontSize: "15px",
            textAlign: "center",
            maxWidth: "480px",
            lineHeight: 1.75,
            margin: 0
          }}>
                Thank you for registering for the Beauty, Fashion, Health &amp; Wellness Stage™. Our team will confirm your delegate place within 24 hours. Please check your inbox.
              </p>
              <div style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
                <button style={{
              height: "44px",
              padding: "0 24px",
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 500,
              fontSize: "14px"
            }}>
                  Add to Calendar
                </button>
                <button onClick={() => setSubmitted(false)} style={{
              height: "44px",
              padding: "0 24px",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.20)",
              cursor: "pointer",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 500,
              fontSize: "14px"
            }}>
                  Back to Stage Info
                </button>
              </div>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "11px",
            color: "rgba(255,45,135,0.50)",
            letterSpacing: "0.08em",
            marginTop: "8px",
            textAlign: "center"
          }}>
                #WellnessEconomy · #EmpowaWomen · #WomenInBeauty
              </p>
            </div> : <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%"
        }}>
              {/* Row 1: First Name | Last Name */}
              <div className="reg-name-row" style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }}>
                <input type="text" placeholder="First Name" value={form.firstName} onChange={e => handleChange("firstName", e.target.value)} onFocus={() => setFocused("firstName")} onBlur={() => setFocused(null)} style={getInputStyle("firstName")} required />
                <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => handleChange("lastName", e.target.value)} onFocus={() => setFocused("lastName")} onBlur={() => setFocused(null)} style={getInputStyle("lastName")} required />
              </div>

              {/* Row 2: Job Title */}
              <input type="text" placeholder="Job Title / Designation" value={form.jobTitle} onChange={e => handleChange("jobTitle", e.target.value)} onFocus={() => setFocused("jobTitle")} onBlur={() => setFocused(null)} style={getInputStyle("jobTitle")} required />

              {/* Row 3: Company | Industry */}
              <div className="reg-company-row" style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }}>
                <input type="text" placeholder="Company / Organisation" value={form.company} onChange={e => handleChange("company", e.target.value)} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} style={getInputStyle("company")} required />
                <select value={form.industry} onChange={e => handleChange("industry", e.target.value)} onFocus={() => setFocused("industry")} onBlur={() => setFocused(null)} style={{
              ...getInputStyle("industry"),
              appearance: "none",
              WebkitAppearance: "none",
              color: form.industry ? "#FFFFFF" : "rgba(255,255,255,0.25)"
            }} required>
                  <option value="" disabled style={{
                color: "rgba(255,255,255,0.25)",
                backgroundColor: "#111118"
              }}>Industry</option>
                  {INDUSTRY_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
                color: "#FFFFFF",
                backgroundColor: "#111118"
              }}>
                      {opt.label}
                    </option>)}
                </select>
              </div>

              {/* Row 4: Email */}
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => handleChange("email", e.target.value)} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={getInputStyle("email")} required />

              {/* Row 5: Phone */}
              <input type="tel" placeholder="+27 ..." value={form.phone} onChange={e => handleChange("phone", e.target.value)} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={getInputStyle("phone")} />

              {/* Row 6: How did you hear */}
              <select value={form.hearAboutUs} onChange={e => handleChange("hearAboutUs", e.target.value)} onFocus={() => setFocused("hearAboutUs")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("hearAboutUs"),
            appearance: "none",
            WebkitAppearance: "none",
            color: form.hearAboutUs ? "#FFFFFF" : "rgba(255,255,255,0.25)"
          }}>
                <option value="" disabled style={{
              color: "rgba(255,255,255,0.25)",
              backgroundColor: "#111118"
            }}>How did you hear about us?</option>
                {HEAR_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
              color: "#FFFFFF",
              backgroundColor: "#111118"
            }}>
                    {opt.label}
                  </option>)}
              </select>

              {/* Row 7: Special requirements */}
              <textarea rows={3} placeholder="Any special requirements, dietary needs, or questions for our team?" value={form.specialRequirements} onChange={e => handleChange("specialRequirements", e.target.value)} onFocus={() => setFocused("specialRequirements")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("specialRequirements"),
            resize: "vertical",
            lineHeight: 1.6,
            width: "100%",
            boxSizing: "border-box"
          }} />

              {/* Checkbox */}
              <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px"
          }}>
                <input type="checkbox" id="reg-agree" checked={form.agreed} onChange={e => handleChange("agreed", e.target.checked)} required style={{
              accentColor: "#FF2D87",
              marginTop: "2px",
              flexShrink: 0,
              width: "16px",
              height: "16px",
              cursor: "pointer"
            }} />
                <label htmlFor="reg-agree" style={{
              fontFamily: "Figtree, sans-serif",
              color: "rgba(255,255,255,0.45)",
              fontSize: "12px",
              lineHeight: 1.6,
              cursor: "pointer"
            }}>
                  I agree to the EmpowaWomen™ Privacy Policy and Terms &amp; Conditions. I consent to receiving summit-related communications.
                </label>
              </div>

              {/* Submit */}
              <button type="submit" style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "999px",
            fontFamily: "Figtree, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            letterSpacing: "0.02em",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e0006f";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF2D87";
          }}>
                Submit Registration →
              </button>

              <p style={{
            fontFamily: "Figtree, sans-serif",
            textAlign: "center",
            fontSize: "11px",
            color: "rgba(255,255,255,0.20)",
            marginTop: "4px"
          }}>
                Your information is encrypted, secure, and will never be shared with third parties.
              </p>
            </form>}
        </div>

        {/* ── RIGHT COLUMN: Summary Card ── */}
        <div className="reg-card-col" style={{
        width: "100%",
        flexShrink: 0
      }}>
          <div style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          overflow: "hidden"
        }}>
            {/* Top image strip */}
            <div style={{
            height: "180px",
            backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2948.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            position: "relative"
          }}>
              <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.90) 100%)"
            }} />
              <div style={{
              position: "absolute",
              bottom: "16px",
              left: "20px",
              backgroundColor: "rgba(10,10,15,0.80)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              borderRadius: "20px",
              padding: "4px 12px",
              fontSize: "10px",
              color: "#FFFFFF",
              fontWeight: 500,
              letterSpacing: "0.08em",
              fontFamily: "Figtree, sans-serif"
            }}>
                📅 Saturday, 29 August 2026
              </div>
            </div>

            {/* Card body */}
            <div style={{
            padding: "28px"
          }}>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase",
              margin: "0 0 12px 0"
            }}>
                YOUR REGISTRATION INCLUDES
              </p>
              <p style={{
                fontFamily: "Figtree, sans-serif",
                color: "#FFFFFF",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: 1.4,
                margin: "0 0 4px 0"
              }}>
                Beauty, Fashion, Health &amp; Wellness Stage™
              </p>

              {/* Divider */}
              <div style={{
              borderTop: "1px solid rgba(255,45,135,0.25)",
              margin: "20px 0"
            }} />

              {/* Details */}
              <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                {DETAILS_ROWS.map((row, idx) => <div key={row.id} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: "12px",
                paddingBottom: "12px",
                borderBottom: idx < DETAILS_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                  marginRight: "16px"
                }}>
                      {row.label}
                    </span>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 500,
                  textAlign: "right"
                }}>
                      {row.value}
                    </span>
                  </div>)}
              </div>

              {/* Divider */}
              <div style={{
              borderTop: "1px solid rgba(255,45,135,0.25)",
              margin: "20px 0 16px 0"
            }} />

              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase",
              margin: "0 0 16px 0"
            }}>
                WHAT'S INCLUDED
              </p>

              {/* Includes */}
              <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                {INCLUDES.map(item => <div key={item.id} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                paddingTop: "8px",
                paddingBottom: "8px"
              }}>
                    <div style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(255,45,135,0.10)",
                  border: "1px solid rgba(255,45,135,0.30)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                      <Check size={10} color="#FF2D87" />
                    </div>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  lineHeight: 1.5
                }}>
                      {item.text}
                    </span>
                  </div>)}
              </div>

              {/* Shield badge row */}
              <div style={{
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
                <ShieldCheck size={12} color="rgba(255,255,255,0.25)" />
                <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.25)"
              }}>
                  Secure · Confidential · Confirmed within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .reg-layout {
            flex-direction: row !important;
          }
          .reg-card-col {
            width: 420px !important;
            position: sticky;
            top: 32px;
            align-self: flex-start;
          }
        }
        @media (min-width: 640px) {
          .reg-name-row {
            flex-direction: row !important;
          }
          .reg-company-row {
            flex-direction: row !important;
          }
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
        select option {
          background-color: #111118;
        }
      `}</style>
    </motion.section>;
};

// ─── Main Component ────────────────────────────────────────────────────────────

export const BeautyFashionWellnessPillar: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  return <div style={{ width: "100%", backgroundColor: "#0A0A0F", color: "white" }}>
      <main>
        <HeroBanner />

        {/* Bento Grid: Focus Areas & ROI */}
        <section id="focus-areas" ref={bentoRef} style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
          paddingLeft: "clamp(16px, 5vw, 96px)",
          paddingRight: "clamp(16px, 5vw, 96px)",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box"
        }}>
          <SectionLabel>Strategic Impact & Focus</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <h2 style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 4.5vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "800px",
              margin: 0
            }}>
              Building Resilience Through High-Growth Consumer Sectors
            </h2>
          </div>

          <div className="beauty-bento-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "32px"
          }}>
            {/* Focus Areas Bento */}
            <motion.div initial={{
              opacity: 0,
              x: -40
            }} animate={bentoInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.8,
              ease: "easeOut"
            }} style={{
              backgroundColor: "#0D0D14",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "clamp(24px, 4vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: "32px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <div style={{
                  width: "3px",
                  height: "24px",
                  backgroundColor: "#FF2D87"
                }} />
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: 0
                }}>
                  Key Focus Areas
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {FOCUS_AREAS.map(area => <motion.div key={area.id} whileHover={{
                  x: 6
                }} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  cursor: "pointer"
                }} className="focus-area-row">
                    <div style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: area.accentColor,
                      flexShrink: 0
                    }} />
                    <area.icon size={18} style={{
                      color: "rgba(255,255,255,0.3)",
                      flexShrink: 0
                    }} className="focus-area-icon" />
                    <span style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      transition: "color 0.2s"
                    }} className="focus-area-text">
                      {area.title}
                    </span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* ROI Metrics Bento */}
            <motion.div initial={{
              opacity: 0,
              x: 40
            }} animate={bentoInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }} style={{
              borderTop: "3px solid #D4AF37"
            }}>
              <ROIMetricBlock title="Partner Value & ROI Metrics" metrics={ROI_METRICS} />
            </motion.div>
          </div>
        </section>

        {/* Separator Line */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 96px)"
        }}>
          <div style={{
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(255,45,135,0.3) 50%, transparent)"
          }} />
        </div>

        {/* ── Programme Section ── */}
        <ProgrammeSection />

        {/* ── Final CTA Section ── */}
        <section style={{
          position: "relative",
          paddingTop: "128px",
          paddingBottom: "128px",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
          overflow: "hidden",
          backgroundColor: "#0A0A0F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(to right, transparent, rgba(255,45,135,0.4), transparent)"
          }} />
          
          <div style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1400px",
            aspectRatio: "2 / 1",
            opacity: 0.25,
            pointerEvents: "none",
            userSelect: "none"
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              backgroundImage: "url('https://images.unsplash.com/photo-1608748010899-18f300247112?w=1600&q=80')",
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
            background: "radial-gradient(circle, rgba(255,45,135,0.08) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />

          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "960px"
          }}>
            <SectionLabel color="#FF2D87" centered>Take The Next Step</SectionLabel>
            <h2 style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(32px, 7vw, 80px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              marginBottom: "40px"
            }}>
              {CTA_HEADLINE_WORDS.map((word, i) => {
                const isNow = word === "Now.";
                return (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      y: 20
                    }}
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                    style={{
                      display: "inline-block",
                      marginRight: "0.22em",
                      textDecoration: isNow ? "underline" : "none",
                      textDecorationColor: isNow ? "#FF2D87" : "transparent",
                      textDecorationThickness: isNow ? "3px" : "auto",
                      textUnderlineOffset: isNow ? "8px" : "auto"
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h2>
            <p style={{
              fontFamily: "Figtree",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "600px",
              margin: "0 auto 48px auto",
              lineHeight: 1.6
            }}>
              Join Africa's most focused platform for wellness innovation, lifestyle brand scaling, and women-led enterprise growth.
            </p>
            
            <div className="final-cta-btn-container" style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px"
            }}>
              <button onClick={e => {
                e.preventDefault();
                document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
              }} style={{
                backgroundColor: "#FF2D87",
                color: "#FFFFFF",
                padding: "20px 40px",
                fontFamily: "Figtree",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                cursor: "pointer",
                border: "none",
                boxShadow: "0 0 32px rgba(255,45,135,0.25)",
                position: "relative",
                overflow: "hidden"
              }} className="group">
                <span style={{ position: "relative", zIndex: 10 }}>Secure Your Seat</span>
                <ArrowRight size={18} style={{ position: "relative", zIndex: 10 }} className="group-hover:translate-x-1 transition-transform" />
                <span style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(255,255,255,0.15)",
                  transform: "skewX(-20deg) translateX(-100%)",
                  animation: "shimmerSlide 3s linear infinite",
                  pointerEvents: "none"
                }} />
              </button>
              <button onClick={e => {
                e.preventDefault();
                document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
              }} style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#FFFFFF",
                padding: "20px 40px",
                fontFamily: "Figtree",
                fontSize: "15px",
                fontWeight: 300,
                letterSpacing: "0.02em",
                borderRadius: "999px",
                cursor: "pointer"
              }} className="hover:bg-white/10 transition-all">
                Download Programme Overview
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Registration Section ── */}
      <RegistrationSection />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes shimmerSlide {
          0% { transform: skewX(-20deg) translateX(-150%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes grainShift {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }

        @media (max-width: 1023px) {
          .beauty-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 639px) {
          .beauty-roi-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-cta-container {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-container button {
            width: 100% !important;
          }
          .final-cta-btn-container {
            flex-direction: column !important;
            width: 100% !important;
          }
          .final-cta-btn-container button {
            width: 100% !important;
          }
        }

        .focus-area-row:hover .focus-area-icon {
          color: rgba(255,255,255,0.7) !important;
        }
        .focus-area-row:hover .focus-area-text {
          color: #FFFFFF !important;
        }
      `}</style>
    </div>;
};
