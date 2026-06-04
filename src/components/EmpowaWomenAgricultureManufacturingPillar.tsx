import * as React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Leaf, Sprout, Globe, Building2, Coins, Cpu, ArrowRight, Tractor, Target, CheckCircle2 } from "lucide-react";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { AgriDelegateRegistrationSection } from "./AgriDelegateRegistrationSection";

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
  isLunch?: boolean;
  sessionNumber: string;
}

// ─── Constants & Data ─────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Cpu,
  title: "Agri-Tech",
  accentColor: "#00B4A6"
}, {
  id: "fa-2",
  icon: Leaf,
  title: "Climate-Smart Farming",
  accentColor: "#00B4A6"
}, {
  id: "fa-3",
  icon: Tractor,
  title: "Agro-Processing",
  accentColor: "#D4AF37"
}, {
  id: "fa-4",
  icon: Sprout,
  title: "Food Innovation",
  accentColor: "#00B4A6"
}, {
  id: "fa-5",
  icon: Coins,
  title: "Agricultural Funding",
  accentColor: "#FF2D87"
}, {
  id: "fa-6",
  icon: Building2,
  title: "Rural Economies",
  accentColor: "#D4AF37"
}, {
  id: "fa-7",
  icon: Target,
  title: "Women in Agribusiness",
  accentColor: "#FF2D87"
}, {
  id: "fa-8",
  icon: Globe,
  title: "Agricultural Trade & Export Markets",
  accentColor: "#D4AF37"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Agricultural Investment Access",
  value: "65%+",
  description: "Projected growth in capital allocation for women-led agricultural projects."
}, {
  label: "Agribusiness Partnerships",
  value: "90+",
  description: "New strategic enterprise connections established through the Stage ecosystem."
}, {
  label: "Agri-Tech Innovation Exposure",
  value: "Tier 1",
  description: "Exclusive access to top-tier digital farming solutions and processing technologies."
}, {
  label: "Export & Trade Opportunities",
  value: "R12B+",
  description: "Identified market potential within regional and international agricultural channels."
}];
const PROGRAMME_SESSIONS: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00",
  format: "OPENING KEYNOTE",
  title: "Women Must Lead the Future of Food Security, Sustainability & Agricultural Innovation",
  subtitle: "Who Will Feed, Innovate, Industrialise & Sustain Africa's Future Economy?",
  accentColor: "#FF2D87",
  sessionNumber: "01"
}, {
  id: "ps-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS",
  title: "Agri-Tech, Digital Farming & Future Food Systems",
  subtitle: "How will technology define the next era of agricultural competitiveness, and how can women build scalable digital farming enterprises?",
  accentColor: "#D4AF37",
  sessionNumber: "02"
}, {
  id: "ps-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL",
  title: "Women, Agribusiness & the Future of Food Security",
  subtitle: "Why will inclusive economic participation define the future of agriculture, and how do we unlock capital access for women?",
  accentColor: "#00B4A6",
  sessionNumber: "03"
}, {
  id: "ps-4",
  time: "12:50",
  format: "NETWORKING LUNCH",
  title: "Cultivating Partnerships, Investment & Sustainable Growth",
  subtitle: "Which Strategic Relationships Will Shape Your Next Growth Opportunity?",
  accentColor: "#00B4A6",
  sessionNumber: "04",
  isLunch: true
}, {
  id: "ps-5",
  time: "13:20",
  format: "FIRECHAT",
  title: "Agricultural Funding, Market Access & Women-Led Enterprises",
  subtitle: "How can women-led agribusinesses move beyond survival and scale into globally competitive commercial enterprises?",
  accentColor: "#FF2D87",
  sessionNumber: "05"
}, {
  id: "ps-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP",
  title: "Climate-Smart Agriculture & Sustainable Food Systems",
  subtitle: "How will sustainability define the future of agriculture, and how can women build climate-resilient farming models?",
  accentColor: "#00B4A6",
  sessionNumber: "06"
}, {
  id: "ps-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL",
  title: "Agro-Processing, Retail & Food Innovation",
  subtitle: "How can women capture greater commercial value by controlling processing, distribution, and consumer markets?",
  accentColor: "#D4AF37",
  sessionNumber: "07"
}, {
  id: "ps-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION",
  title: "The Future of African Agriculture & Women-Led Economic Transformation",
  subtitle: "How will food systems, innovation, and women's leadership shape Africa's economic future?",
  accentColor: "#FF2D87",
  sessionNumber: "08"
}, {
  id: "ps-9",
  time: "15:50",
  format: "CLOSING KEYNOTE",
  title: "The Future of Food Security Will Be Led by Women Who Build, Innovate & Scale",
  subtitle: "Will You Be One of the Women Defining Africa's Agricultural Future?",
  accentColor: "#00B4A6",
  sessionNumber: "09"
}];

const STRATEGIC_BENEFITS = [{
  id: "sb-1",
  label: "Agricultural Investment Access"
}, {
  id: "sb-2",
  label: "Agribusiness Partnerships"
}, {
  id: "sb-3",
  label: "Agri-Tech Innovation Exposure"
}, {
  id: "sb-4",
  label: "Food Systems Intelligence"
}, {
  id: "sb-5",
  label: "Rural Enterprise Development"
}, {
  id: "sb-6",
  label: "Export & Trade Opportunities"
}, {
  id: "sb-7",
  label: "Women-Led Agribusiness Growth"
}, {
  id: "sb-8",
  label: "Sustainable Agriculture Leadership"
}];

const ATTENDEE_LIST = [{
  id: "at-1",
  label: "Agribusiness Founders & Agropreneurs"
}, {
  id: "at-2",
  label: "Agri-Tech Innovators & Digital Farming Pioneers"
}, {
  id: "at-3",
  label: "Food Processors, Retailers & Value-Chain Partners"
}, {
  id: "at-4",
  label: "Climate-Smart Farming & Sustainability Directors"
}, {
  id: "at-5",
  label: "Investors, Funders & Development Finance Institutions (DFIs)"
}, {
  id: "at-6",
  label: "Agricultural Policy Makers & Development Specialists"
}];

const StrategicROISection: React.FC = () => {
  const roiRef = React.useRef<HTMLDivElement>(null);
  const roiInView = useInView(roiRef, {
    once: true,
    margin: "-80px"
  });

  return (
    <section
      ref={roiRef}
      style={{
        paddingTop: "clamp(48px, 8vw, 100px)",
        paddingBottom: "clamp(48px, 8vw, 100px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto"
      }}
    >
      <SectionLabel>Strategic ROI &amp; Opportunities</SectionLabel>

      <div className="roi-benefits-grid">
        {/* Left Column: Why Attend & Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={roiInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
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
            Access Africa's most strategically curated agribusiness platform, designed to accelerate your impact, visibility, and growth in sustainable food systems.
          </p>

          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column" }}>
            {STRATEGIC_BENEFITS.map((benefit, idx) => {
              const accent = idx % 3 === 0 ? "#FF2D87" : idx % 3 === 1 ? "#00B4A6" : "#D4AF37";
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={roiInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.07 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)"
                  }}
                >
                  <CheckCircle2 size={15} style={{ color: accent, flexShrink: 0 }} />
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

        {/* Right Column: Who Should Attend Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={roiInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            backgroundColor: "#0D0D14",
            border: "1px solid rgba(255,255,255,0.06)",
            borderTop: "3px solid #FF2D87",
            padding: "clamp(24px, 3vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: "0"
          }}
        >
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
              <motion.div
                key={attendee.id}
                initial={{ opacity: 0, x: 16 }}
                animate={roiInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.07 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 0",
                  borderBottom: idx < ATTENDEE_LIST.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none"
                }}
              >
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
  );
};
const CTA_HEADLINE_WORDS = ["Build,", "Africa's,", "Food,", "Future,", "Now."];
const PROGRAMME_STATS = [{
  id: "stat-1",
  label: "9 Sessions"
}, {
  id: "stat-2",
  label: "11:00 Start"
}, {
  id: "stat-3",
  label: "16:00 Close"
}];

// ─── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{
  children: React.ReactNode;
  centered?: boolean;
}> = ({
  children,
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
  color: "#FF2D87",
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
    backgroundColor: "#FF2D87",
    flexShrink: 0
  }} />
    <span>{children}</span>
    {centered && <span style={{
      display: "inline-block",
      width: "24px",
      height: "1.5px",
      backgroundColor: "#FF2D87",
      flexShrink: 0
    }} />}
  </motion.div>;

const HeroBanner: React.FC = () => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const heroLines = [{
    id: "h1",
    words: ["Food", "Security", "Is"]
  }, {
    id: "h2",
    words: ["Africa's", "Greatest"]
  }, {
    id: "h3",
    words: ["Opportunity."]
  }];
  const underlinedWords = new Set(["Opportunity."]);
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
      {/* Background Image with Parallax */}
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
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=85" alt="" aria-hidden="true" style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%"
            }} />
          </motion.div>
        </motion.div>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,15,0.75) 0%, rgba(10,10,15,0.45) 40%, rgba(10,10,15,0.95) 100%)"
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "1400px",
        padding: "clamp(16px, 5vw, 36px)",
        textAlign: "center"
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
            flexWrap: "wrap"
          }}>
            <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#00B4A6",
              display: "inline-block",
              boxShadow: "0 0 10px #00B4A6",
              flexShrink: 0
            }} />
            <span style={{
              fontFamily: "Figtree",
              fontSize: "clamp(9px, 2vw, 11px)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.60)",
              textTransform: "uppercase"
            }}>
              AGRICULTURE & FOOD SECURITY
            </span>
          </motion.div>

          {/* Hero headline */}
          <h1 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(36px, 8vw, 84px)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            maxWidth: "1100px",
            margin: "0 auto 24px auto"
          }}>
            {heroLines.map(line => {
              return <span key={line.id} style={{
                display: "block"
              }}>
                  {line.words.map(word => {
                    const idx = wordIndex++;
                    const isUnderlined = underlinedWords.has(word);
                    const wordText = isUnderlined ? word.slice(0, -1) : word;
                    return <motion.span key={`h-word-${idx}`} initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                      y: 20
                    }} animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0
                    }} transition={{
                      duration: 0.8,
                      delay: 0.4 + idx * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    }} style={{
                      display: "inline-block",
                      marginRight: "0.25em"
                    }}>
                        {isUnderlined ? <span style={{
                          textDecoration: "underline",
                          textDecorationColor: "#00B4A6",
                          textDecorationThickness: "3px",
                          textUnderlineOffset: "6px"
                        }}>
                            {wordText}
                          </span> : word}
                        {isUnderlined && <span style={{
                          color: "#00B4A6"
                        }}>.</span>}
                      </motion.span>;
                  })}
                </span>;
            })}
          </h1>

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
            color: "rgba(255,255,255,0.55)",
            maxWidth: "720px",
            margin: "0 auto 36px auto",
            lineHeight: 1.75
          }}>
            Agriculture remains central to Africa's economic sustainability, food resilience,
            employment creation, and industrial development. This stage explores how agri-tech,
            climate-smart farming, agro-processing, food systems innovation, and rural
            industrialisation are reshaping the future of agriculture across the continent.
          </motion.p>

          {/* CTA Group — stacked on mobile, row on sm+ */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.4
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{
            width: "100%"
          }}>
            <a href="#registration" onClick={e => {
              e.preventDefault();
              document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
            }} className="w-full sm:w-auto" style={{
              fontFamily: "Figtree",
              fontSize: "15px",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#00B4A6",
              height: "50px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
              borderRadius: "999px",
              boxShadow: "0 0 32px rgba(0,180,166,0.25)",
              position: "relative",
              overflow: "hidden"
            }}>
              <span>Secure Your Seat</span>
              <ArrowRight size={16} />
            </a>
            <a href="#focus-areas" onClick={e => {
              e.preventDefault();
              document.getElementById("focus-areas")?.scrollIntoView({ behavior: "smooth" });
            }} className="w-full sm:w-auto" style={{
              fontFamily: "Figtree",
              fontSize: "15px",
              fontWeight: 400,
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.05)",
              height: "50px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.10)"
            }}>
              Explore Programme
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};

// ─── Main Component ────────────────────────────────────────────────────────────

export const AgricultureManufacturingPillar: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  return <div style={{
    width: "100%",
    backgroundColor: "#0A0A0F",
    fontFamily: "Figtree, sans-serif",
    color: "#FFFFFF"
  }}>
      <main>
        {/* Hero Section */}
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
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(28px, 4.5vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "800px",
              margin: 0
            }}>
              Building Resilient Food Systems Across the Continent
            </h2>
          </div>

          <div className="agri-bento-grid" style={{
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
                  backgroundColor: "#00B4A6"
                }} />
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: 300,
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
                }}>
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
                    }} />
                    <span style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      transition: "color 0.2s"
                    }}>
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
              <ROIMetricBlock title="Commercial ROI & Impact Metrics" metrics={ROI_METRICS} />
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
            background: "linear-gradient(to right, transparent, rgba(0,180,166,0.3) 50%, transparent)"
          }} />
        </div>

        {/* ── Programme Section ── */}
        <section id="programme" style={{
          backgroundColor: "#0A0A0F",
          paddingTop: "clamp(64px, 10vw, 128px)",
          paddingBottom: "clamp(64px, 10vw, 128px)",
          paddingLeft: "clamp(16px, 4vw, 32px)",
          paddingRight: "clamp(16px, 4vw, 32px)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Ambient venue background image */}
          <div aria-hidden="true" style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.06,
            pointerEvents: "none"
          }} />

          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            boxSizing: "border-box"
          }}>
            {/* Header */}
            <div style={{
              marginBottom: "56px"
            }}>
              <div style={{
                width: "48px",
                height: "3px",
                backgroundColor: "#FF2D87",
                marginBottom: "20px"
              }} />
              <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                margin: "0 0 16px 0"
              }}>
                HIGH-IMPACT EXECUTIVE PROGRAMME
              </p>
              <h2 style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                margin: "0 0 16px 0",
                maxWidth: "720px"
              }}>
                A Day of Innovation, Investment &amp; Agricultural Growth
              </h2>
              <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                margin: 0,
                maxWidth: "680px"
              }}>
                11:00 – 16:00 · Curated for Female CXOs, Entrepreneurs, Agribusiness
                Leaders, Investors, Academia, Policymakers &amp; Future-Focused Professionals
              </p>
            </div>

            {/* Sessions List */}
            <div style={{
              maxWidth: "960px",
              margin: "0 auto",
              width: "100%"
            }}>
              <div style={{
                display: "flex",
                flexDirection: "column"
              }}>
                {PROGRAMME_SESSIONS.map((session, i) => {
                  if (session.isLunch) {
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
                    }} style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      padding: "4px 0"
                    }}>
                      <div style={{
                        backgroundColor: "rgba(0,180,166,0.04)",
                        border: "1px solid rgba(0,180,166,0.12)",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        margin: "4px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap"
                      }}>
                        {/* Time col */}
                        <div style={{
                          width: "60px",
                          flexShrink: 0,
                          fontSize: "12px",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                          color: "#00B4A6",
                          fontFamily: "Figtree, sans-serif"
                        }}>
                          {session.time}
                        </div>
                        {/* Center col */}
                        <div style={{
                          flex: 1,
                          minWidth: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: "12px"
                        }}>
                          <div style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "#00B4A6",
                            flexShrink: 0,
                            boxShadow: "0 0 8px rgba(0,180,166,0.5)"
                          }} />
                          <div style={{
                            minWidth: 0
                          }}>
                            <p style={{
                              fontFamily: "Figtree, sans-serif",
                              fontSize: "9px",
                              fontWeight: 600,
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "#00B4A6",
                              margin: "0 0 2px 0"
                            }}>
                              {session.format}
                            </p>
                            <p style={{
                              fontFamily: "Figtree, sans-serif",
                              fontSize: "15px",
                              fontWeight: 500,
                              color: "#FFFFFF",
                              margin: "0 0 2px 0",
                              lineHeight: 1.3
                            }}>
                              {session.title}
                            </p>
                            <p style={{
                              fontFamily: "Figtree, sans-serif",
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.35)",
                              margin: 0,
                              lineHeight: 1.4
                            }}>
                              {session.subtitle}
                            </p>
                          </div>
                        </div>
                        {/* Badge */}
                        <div style={{
                          flexShrink: 0,
                          backgroundColor: "rgba(0,180,166,0.15)",
                          border: "1px solid rgba(0,180,166,0.30)",
                          borderRadius: "4px",
                          padding: "3px 8px",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          color: "#00B4A6",
                          fontFamily: "Figtree, sans-serif",
                          textTransform: "uppercase"
                        }}>
                          INCLUDED
                        </div>
                        {/* Session number */}
                        <div style={{
                          width: "36px",
                          flexShrink: 0,
                          textAlign: "right",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.12)",
                          fontFamily: "Figtree, sans-serif"
                        }}>
                          {session.sessionNumber}
                        </div>
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
                    gap: "16px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    cursor: "default"
                  }}>
                      {/* Col 1: time */}
                      <div style={{
                        width: "60px",
                        flexShrink: 0,
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        color: session.accentColor,
                        fontFamily: "Figtree, sans-serif"
                      }}>
                        {session.time}
                      </div>

                      {/* Col 2: content */}
                      <div style={{
                        flex: 1,
                        minWidth: 0
                      }}>
                        <p style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: session.accentColor,
                          margin: "0 0 4px 0"
                        }}>
                          {session.format}
                        </p>
                        <p style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "clamp(13px, 2vw, 15px)",
                          fontWeight: 500,
                          color: "#FFFFFF",
                          margin: "0 0 4px 0",
                          lineHeight: 1.3
                        }}>
                          {session.title}
                        </p>
                        <p style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.35)",
                          margin: 0,
                          lineHeight: 1.4
                        }}>
                          {session.subtitle}
                        </p>
                      </div>

                      {/* Col 3: session number */}
                      <div style={{
                        width: "36px",
                        flexShrink: 0,
                        textAlign: "right",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.12)",
                        fontFamily: "Figtree, sans-serif"
                      }}>
                        {session.sessionNumber}
                      </div>
                    </motion.div>;
                })}
              </div>

              {/* Stats footer */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                flexWrap: "wrap",
                gap: "12px"
              }}>
                {PROGRAMME_STATS.map(stat => <div key={stat.id} style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "clamp(11px, 2vw, 13px)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.05em"
                }}>
                  {stat.label}
                </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
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

      <StrategicROISection />

        {/* CTA Section */}
        <section style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0A0A0F",
          padding: "clamp(80px, 12vw, 160px) clamp(16px, 5vw, 96px)",
          textAlign: "center"
        }}>
          {/* Visual Flourish Background */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(800px, 100vw)",
            height: "min(800px, 100vw)",
            background: "radial-gradient(circle, rgba(0,180,166,0.1) 0%, transparent 70%)",
            pointerEvents: "none"
          }} />

          <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%"
          }}>
            <SectionLabel centered>Take the Lead</SectionLabel>
            <h2 style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(32px, 8vw, 84px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: "24px 0"
            }}>
              {CTA_HEADLINE_WORDS.map((word, i) => <motion.span key={`cta-${i}`} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.1
              }} style={{
                display: "inline-block",
                marginRight: "0.22em",
                ...(word === "Now." ? {
                  color: "#FF2D87"
                } : {})
              }}>
                  {word}
                </motion.span>)}
            </h2>

            <p style={{
              fontFamily: "Figtree",
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
              maxWidth: "600px",
              margin: "0 auto 40px auto"
            }}>
              Join Africa's most focused platform for agricultural intelligence, supply
              chain excellence, and women-led industrial transformation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{
              width: "100%"
            }}>
              <button onClick={e => {
                e.preventDefault();
                document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
              }} className="w-full sm:w-auto" style={{
                backgroundColor: "#FF2D87",
                color: "#FFFFFF",
                fontFamily: "Figtree",
                fontSize: "16px",
                fontWeight: 600,
                padding: "16px 40px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
                boxShadow: "0 0 40px rgba(255,45,135,0.3)"
              }}>
                <span>Secure Your Seat</span>
                <ArrowRight size={20} />
              </button>
              <button onClick={e => {
                e.preventDefault();
                document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
              }} className="w-full sm:w-auto" style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontFamily: "Figtree",
                fontSize: "16px",
                fontWeight: 500,
                padding: "16px 40px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "999px",
                cursor: "pointer"
              }}>
                View Full Agenda
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Registration Form */}
      <div id="registration">
        <AgriDelegateRegistrationSection />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');

        @keyframes shimmerSlide {
          from { transform: skewX(-20deg) translateX(-100%); }
          to { transform: skewX(-20deg) translateX(300%); }
        }

        .cta-shimmer {
          animation: shimmerSlide 3s linear infinite;
        }

        @media (max-width: 1024px) {
          .agri-bento-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        /* ROI benefits grid */
        .roi-benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 4vw, 56px);
          margin-top: clamp(24px, 3vw, 40px);
        }
        @media (min-width: 1024px) {
          .roi-benefits-grid {
            grid-template-columns: 1fr 1.3fr;
            align-items: start;
          }
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0A0A0F; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
    </div>;
};
