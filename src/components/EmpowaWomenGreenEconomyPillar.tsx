import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Wind, Leaf, Mountain, ShieldCheck, Globe, Building2, Cpu, Pickaxe, Coins, Calendar, Clock, ArrowRight, Users, CheckCircle2 } from "lucide-react";
import { IndustrialHeroBanner } from "./IndustrialHeroBanner";
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Wind,
  title: "Renewable Energy",
  subtitle: "Accelerating Africa's transition to clean, sustainable energy systems",
  accentColor: "#00B4A6"
}, {
  id: "fa-2",
  icon: Leaf,
  title: "Climate Innovation",
  subtitle: "Pioneering solutions for climate resilience and sustainable growth",
  accentColor: "#00B4A6"
}, {
  id: "fa-3",
  icon: Building2,
  title: "Sustainable Infrastructure",
  subtitle: "Building smart, green, and future-ready development systems",
  accentColor: "#00B4A6"
}, {
  id: "fa-4",
  icon: Zap,
  title: "Energy Transition",
  subtitle: "Leading Africa's shift from fossil fuels to clean energy economies",
  accentColor: "#D4AF37"
}, {
  id: "fa-5",
  icon: Mountain,
  title: "Critical Minerals & Beneficiation",
  subtitle: "Unlocking the value of Africa's critical minerals value chain",
  accentColor: "#D4AF37"
}, {
  id: "fa-6",
  icon: Leaf,
  title: "Circular Resource Systems",
  subtitle: "Transforming resource usage through circular economics and waste innovation",
  accentColor: "#D4AF37"
}, {
  id: "fa-7",
  icon: ShieldCheck,
  title: "ESG Leadership & Green Finance",
  subtitle: "Embedding sustainability into enterprise and investment",
  accentColor: "#FF2D87"
}, {
  id: "fa-8",
  icon: Users,
  title: "Women in Energy & Sustainability Leadership",
  subtitle: "Positioning women at the forefront of Africa's green industrial economy",
  accentColor: "#FF2D87"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Green Economy Investment Access",
  value: "R340B+",
  description: "Capital pipeline targeted toward ESG-compliant women-led industrial projects across Africa."
}, {
  label: "Climate-Tech Innovation Partnerships",
  value: "120+",
  description: "Active technology exchange agreements established within our industrial ecosystem."
}, {
  label: "ESG & Sustainable Finance Intelligence",
  value: "Tier 1",
  description: "Direct access to institutional-grade sustainability data and compliance frameworks."
}, {
  label: "Leadership Visibility in High-Growth Industries",
  value: "2000+",
  description: "Executives and decision-makers engaged across clean tech, energy, and sustainability sectors."
}];
const PROGRAMME_SESSIONS: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00 – 11:20",
  format: "OPENING KEYNOTE™",
  title: "Women Must Lead Africa's Green Transition, Energy Future & Sustainable Industrial Growth",
  subtitle: "Who Will Power Africa's Future Economy, Energy Security & Sustainable Competitiveness?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-2",
  time: "11:20 – 12:00",
  format: "EXECUTIVE MASTERCLASS™",
  title: "Climate Innovation, Clean Energy & the Future of Sustainable Enterprise™",
  subtitle: "How will sustainability, innovation, and the energy transition define the next era of industrial growth, and how can women leverage clean technologies to build future-focused enterprises?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-3",
  time: "12:00 – 12:50",
  format: "HIGH-IMPACT PANEL™",
  title: "Women, Energy & the Future of the Green Economy™",
  subtitle: "How will leadership, inclusion, and resource innovation shape the future of sustainable economic growth across Africa?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-4",
  time: "12:50 – 13:20",
  format: "EXECUTIVE NETWORKING LUNCH™",
  title: "Cultivating Partnerships, Investment & Sustainable Growth",
  subtitle: "Which Strategic Relationships Will Accelerate Your Sustainability, Energy & Infrastructure Growth Journey?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-5",
  time: "13:20 – 14:00",
  format: "FIRECHAT™",
  title: "Green Finance, Market Access & Women-Led Enterprises™",
  subtitle: "Why is sustainability without commercialisation a missed economic opportunity, and how can green enterprises scale successfully?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-6",
  time: "14:00 – 14:40",
  format: "STRATEGIC WORKSHOP™",
  title: "ESG, Climate Resilience & Sustainable Industrial Competitiveness™",
  subtitle: "How can organisations embed sustainability into their growth models to secure the future of business?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-7",
  time: "14:40 – 15:20",
  format: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Clean Energy, Infrastructure & the Future of Industrial Transformation™",
  subtitle: "How will the green economy create the next generation of African industrial leaders, and what role will women play?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-8",
  time: "15:20 – 15:50",
  format: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Green Economy & Women-Led Sustainable Transformation™",
  subtitle: "In what ways will innovation, sustainability, and women's leadership shape the future of Africa's economy?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-9",
  time: "15:50 – 16:00",
  format: "CLOSING KEYNOTE™",
  title: "Africa's Green Economy Future Will Be Led by Women Who Build, Innovate & Transform",
  subtitle: "Will You Be One of the Women Defining Africa's Sustainable Economic Future?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}];
const STRATEGIC_BENEFITS = [{
  id: "sb-1",
  label: "Green Economy Investment Access"
}, {
  id: "sb-2",
  label: "Climate-Tech Innovation Partnerships"
}, {
  id: "sb-3",
  label: "ESG & Sustainable Finance Intelligence"
}, {
  id: "sb-4",
  label: "Infrastructure Development Opportunities"
}, {
  id: "sb-5",
  label: "Green Workforce & Skills Development"
}, {
  id: "sb-6",
  label: "Cross-Sector Collaboration"
}, {
  id: "sb-7",
  label: "Future Energy Innovation Ecosystems"
}, {
  id: "sb-8",
  label: "Leadership Visibility in High-Growth Industries"
}];
const CTA_HEADLINE_WORDS = ["Power", "Africa's", "Sustainable", "Future."];

// ─── Sub-components ────────────────────────────────────────────────────────────
const SectionLabel: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => <p style={{
  fontFamily: "Figtree",
  fontSize: "10px",
  fontWeight: 600,
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
  </p>;

// ─── Main Component ────────────────────────────────────────────────────────────
export const GreenEconomyPillar: React.FC = () => {
  const overviewRef = React.useRef<HTMLDivElement>(null);
  const overviewInView = useInView(overviewRef, {
    once: true,
    margin: "-80px"
  });
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
  return <div style={{
    width: "100%",
    backgroundColor: "#0A0A0F",
    fontFamily: "Figtree, sans-serif"
  }}>
      <main>
        {/* ── Hero ── */}
        <IndustrialHeroBanner />

        {/* ── Pillar Overview Section ── */}
        <section id="overview" ref={overviewRef} style={{
        paddingTop: "clamp(48px, 8vw, 96px)",
        paddingBottom: "clamp(40px, 6vw, 80px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
          <SectionLabel>Pillar Overview</SectionLabel>
          <div className="overview-grid">
            <motion.h2 initial={{
            opacity: 0,
            y: 30
          }} animate={overviewInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(24px, 4vw, 52px)",
            color: "#FFFFFF",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            margin: 0
          }}>
              Green Economy,<br />
              Energy &<br />
              Sustainability
            </motion.h2>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={overviewInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
              <div style={{
              width: "32px",
              height: "3px",
              backgroundColor: "#00B4A6"
            }} />
              <p style={{
              fontFamily: "Figtree",
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "rgba(255,255,255,0.60)",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "640px"
            }}>
                As the world accelerates toward cleaner energy systems, sustainable industrialisation, ESG integration,
                and climate resilience, Africa is uniquely positioned to become a global leader within the green economy
                and critical minerals value chain. This platform explores how renewable energy, climate innovation,
                clean technology, energy transition, sustainable infrastructure, and ESG-driven leadership are reshaping Africa's
                future economic landscape while creating transformative opportunities for women leaders and
                future-focused enterprises.
              </p>
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
          background: "linear-gradient(to right, rgba(0,180,166,0.5), rgba(212,175,55,0.2) 50%, rgba(215,119,6,0.5))"
        }} />
        </div>

        {/* ── Bento Grid: Focus Areas & ROI ── */}
        <section ref={bentoRef} style={{
        paddingTop: "clamp(48px, 8vw, 120px)",
        paddingBottom: "clamp(48px, 8vw, 120px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
          <SectionLabel>Focus Areas & Strategic ROI</SectionLabel>
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
            Industrial Resilience Through Sustainability
          </h2>

          {/* Two-column bento grid — stacked on mobile, side-by-side on lg+ */}
          <div className="bento-grid">
            {/* Column A — Focus Areas */}
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
                backgroundColor: "#D4AF37",
                flexShrink: 0
              }} />
                <h3 style={{
                fontFamily: "Figtree",
                fontSize: "18px",
                fontWeight: 700,
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
                {FOCUS_AREAS.map(area => <motion.div key={area.id} whileHover={{
                x: 8
              }} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer"
              }} className="focus-area-row">
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
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.80)",
                    letterSpacing: "0.01em",
                    transition: "color 200ms ease-out"
                  }}>
                        {area.title}
                      </span>
                      <span style={{
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.5
                  }}>
                        {area.subtitle}
                      </span>
                    </div>
                  </motion.div>)}
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
            borderTop: "3px solid #D97706"
          }}>
              <ROIMetricBlock title="Partner Value & ROI Metrics" metrics={ROI_METRICS} icon="chart" />
            </motion.div>
          </div>
        </section>

        {/* ── Separator: teal → gold → amber ── */}
        <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)"
      }}>
          <div style={{
          height: "1px",
          background: "linear-gradient(to right, rgba(0,180,166,0.5), rgba(212,175,55,0.2) 50%, rgba(215,119,6,0.5))"
        }} />
        </div>

        {/* ── Programme Section ── */}
        <section ref={programmeRef} style={{
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
          backgroundColor: "#00B4A6",
          borderRadius: 0,
          marginBottom: "16px"
        }} />
          <SectionLabel>Deep-Dive Event Tracker</SectionLabel>

          {/* Featured session header card */}
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
          borderLeft: "3px solid #D4AF37",
          padding: "clamp(20px, 3vw, 32px) clamp(20px, 3vw, 36px)",
          marginBottom: "clamp(32px, 5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
            <div className="featured-session-inner" style={{
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
                  Green Economy, Energy &amp; Sustainability High-Impact Executive Programme
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
                  backgroundColor: "rgba(217,119,6,0.12)",
                  border: "1px solid rgba(217,119,6,0.3)",
                  borderRadius: "999px",
                  padding: "5px 14px"
                }}>
                    <Clock size={12} style={{
                    color: "#D97706"
                  }} />
                    <span style={{
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#D97706"
                  }}>
                      11:00 – 16:00 (GMT+2)
                    </span>
                  </div>
                  <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                    <Calendar size={13} style={{
                    color: "rgba(255,255,255,0.35)"
                  }} />
                    <span style={{
                    fontFamily: "Figtree",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.50)"
                  }}>
                      Cohort Session 2024
                    </span>
                  </div>
                </div>
              </div>
              <button style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 28px",
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "filter 200ms ease-out",
              flexShrink: 0,
              alignSelf: "flex-start",
              width: "100%",
              borderRadius: "999px"
            }} className="register-btn" onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.12)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
            }} onClick={e => {
              e.preventDefault();
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
            }}>
                <span>Register for Session</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Programme sessions list */}
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0"
        }}>
            {PROGRAMME_SESSIONS.map((session, idx) => <motion.div key={session.id} initial={{
            opacity: 0,
            y: 20
          }} animate={programmeInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.1 + idx * 0.07,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} className="programme-session-row" style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            padding: "clamp(18px, 2.5vw, 28px) 0",
            cursor: "pointer"
          }}>
                <div className="session-inner" style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(16px, 3vw, 32px)"
            }}>
                  {/* Time column */}
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
                    fontWeight: 600,
                    color: session.accentColor,
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap"
                  }}>
                        {session.time}
                      </span>
                    </div>
                  </div>

                  {/* Content column */}
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
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: session.accentColor
                }}>
                      {session.format}
                    </span>
                    <h4 style={{
                  fontFamily: "Figtree",
                  fontSize: "clamp(14px, 2vw, 17px)",
                  fontWeight: 600,
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

                  {/* Right accent bar */}
                  <div style={{
                width: "3px",
                alignSelf: "stretch",
                backgroundColor: `rgba(${session.accentRgb},0.30)`,
                flexShrink: 0
              }} />
                </div>
              </motion.div>)}
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

        {/* ── Strategic ROI / Benefits Section ── */}
        <section ref={roiRef} style={{
        paddingTop: "clamp(48px, 8vw, 100px)",
        paddingBottom: "clamp(48px, 8vw, 100px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
          <SectionLabel>Strategic ROI</SectionLabel>

          <div className="roi-benefits-grid">
            {/* Left: Heading */}
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
                What You Gain as a Delegate
              </h2>
              <p style={{
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "380px"
            }}>
                Access Africa's most strategically curated green economy platform — designed to accelerate
                your impact, visibility, and growth in sustainable industries.
              </p>
            </motion.div>

            {/* Right: Benefits list */}
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
            borderTop: "3px solid #00B4A6",
            padding: "clamp(24px, 3vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: "0"
          }}>
              {STRATEGIC_BENEFITS.map((benefit, idx) => <motion.div key={benefit.id} initial={{
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
              borderBottom: idx < STRATEGIC_BENEFITS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none"
            }}>
                  <CheckCircle2 size={15} style={{
                color: "#00B4A6",
                flexShrink: 0
              }} />
                  <span style={{
                fontFamily: "Figtree",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.01em"
              }}>
                    {benefit.label}
                  </span>
                </motion.div>)}
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

        {/* ── CTA Section ── */}
        <section style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A0A0F",
        paddingTop: "clamp(64px, 10vw, 140px)",
        paddingBottom: "clamp(64px, 10vw, 140px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)"
      }}>
          {/* Thin top border line */}
          <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,45,135,0.40), transparent)",
          pointerEvents: "none"
        }} />

          {/* Background image overlay */}
          <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1400px",
          aspectRatio: "2 / 1",
          pointerEvents: "none",
          opacity: 0.25
        }}>
            <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to top, transparent 0%, black 40%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 40%)"
          }} />
          </div>

          {/* Pink gradient blur orb */}
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

          {/* Content */}
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
            fontWeight: 600,
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
              {CTA_HEADLINE_WORDS.map((word, i) => <motion.span key={`cta-word-${word}-${i}`} initial={{
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
              ...(word === "Future." ? {
                textDecoration: "underline",
                textDecorationColor: "#FF2D87",
                textDecorationThickness: "3px",
                textUnderlineOffset: "8px"
              } : {})
            }}>
                  {word}
                </motion.span>)}
            </h2>

            <p style={{
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "560px",
            lineHeight: 1.75,
            margin: 0
          }}>
              Leading Africa's Green Transition. Driving Industrial Growth. Building Sustainable Economies.
            </p>

            {/* CTA button row — stack on mobile, row on sm+ */}
            <div className="cta-btn-group">
              {/* Primary CTA */}
              <button className="cta-btn-primary" style={{
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 500,
              padding: "clamp(14px, 2vw, 18px) clamp(28px, 3vw, 40px)",
              borderRadius: "999px",
              border: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "filter 200ms ease-out",
              width: "100%"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
            }} onClick={e => {
              e.preventDefault();
              document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
            }}>
                <span style={{
                position: "relative",
                zIndex: 1
              }}>Secure Your Seat</span>
                <ArrowRight size={18} style={{
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

              {/* Secondary CTA */}
              <button className="cta-btn-secondary" style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#FFFFFF",
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 500,
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

      <DelegateRegistrationSection />

      <style>{`
        .focus-area-row:hover span:first-child { color: rgba(255,255,255,0.95) !important; }
        .programme-session-row:hover { background-color: rgba(255,255,255,0.015); }
        .programme-session-row { transition: background-color 200ms ease-out; }

        /* Pillar Overview grid: single col mobile, two col desktop */
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 4vw, 56px);
        }
        @media (min-width: 1024px) {
          .overview-grid {
            grid-template-columns: 1fr 1.2fr;
            align-items: start;
          }
        }

        /* Bento grid: single column mobile, two column desktop */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 3vw, 40px);
        }
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
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

        /* Session inner layout: stack mobile, row tablet+ */
        .session-inner {
          flex-direction: row !important;
        }
        @media (max-width: 600px) {
          .session-inner {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }

        /* Featured session: stacked mobile, row on md+ */
        @media (min-width: 768px) {
          .featured-session-inner {
            flex-direction: row !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
          }
          .register-btn {
            width: auto !important;
            flex-shrink: 0 !important;
          }
        }

        /* CTA button group */
        .cta-btn-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
          max-width: 380px;
        }
        @media (min-width: 480px) {
          .cta-btn-group {
            flex-direction: row;
            width: auto;
            max-width: none;
          }
          .cta-btn-primary,
          .cta-btn-secondary {
            width: auto !important;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;900&display=swap');
      `}</style>
    </div>;
};
