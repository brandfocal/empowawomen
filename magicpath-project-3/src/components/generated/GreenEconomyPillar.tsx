import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Wind, Leaf, Mountain, ShieldCheck, Globe, Building2, Cpu, Scale, Coins, Calendar, Clock, ArrowRight } from "lucide-react";
import { MainNavBar } from "./MainNavBar";
import { IndustrialHeroBanner } from "./IndustrialHeroBanner";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { GlobalFooter } from "./GlobalFooter";

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
interface EventPanel {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Wind,
  title: "Renewable Energy",
  accentColor: "#00B4A6"
}, {
  id: "fa-2",
  icon: Leaf,
  title: "Climate Innovation",
  accentColor: "#00B4A6"
}, {
  id: "fa-3",
  icon: Building2,
  title: "Sustainable Infrastructure",
  accentColor: "#00B4A6"
}, {
  id: "fa-4",
  icon: Mountain,
  title: "Critical Minerals & Beneficiation",
  accentColor: "#D4AF37"
}, {
  id: "fa-5",
  icon: ShieldCheck,
  title: "ESG Leadership",
  accentColor: "#D4AF37"
}, {
  id: "fa-6",
  icon: Globe,
  title: "Circular Economies",
  accentColor: "#00B4A6"
}, {
  id: "fa-7",
  icon: Zap,
  title: "Smart Cities",
  accentColor: "#D4AF37"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Green Economy Investment Access",
  value: "85%",
  description: "Targeted increase in ESG-compliant capital flows for women-led industrial projects."
}, {
  label: "Climate-Tech Innovation Partnerships",
  value: "120+",
  description: "Active technology exchange agreements established within our industrial ecosystem."
}, {
  label: "ESG & Sustainable Finance Intelligence",
  value: "Tier 1",
  description: "Direct access to institutional-grade sustainability data and compliance frameworks."
}, {
  label: "Infrastructure Development Opportunities",
  value: "$4.2B",
  description: "Project pipeline identified for sustainable urban and industrial development."
}];
const EVENT_PANELS: EventPanel[] = [{
  id: "ep-1",
  number: "01",
  icon: Cpu,
  title: "Agri-Tech, Digital Farming & Future Food Systems",
  description: "Analyzing how women leverage AI, precision agriculture, and digital transformation to compete within global food channels."
}, {
  id: "ep-2",
  number: "02",
  icon: Coins,
  title: "Women, Agribusiness & Capital Access",
  description: "Driving intentional value-chain integration, procurement inclusion, and investment for enterprises across processing, logistics, and production."
}, {
  id: "ep-3",
  number: "03",
  icon: Scale,
  title: "Climate-Smart Agriculture & ESG Systems",
  description: "Equipping agribusiness leaders with operational models for water resource management, circular food channels, and climate resilience."
}];
const CTA_HEADLINE_WORDS = ["Shape", "Africa's", "Green", "Future", "Now."];

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
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  const eventRef = React.useRef<HTMLDivElement>(null);
  const eventInView = useInView(eventRef, {
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
      <MainNavBar />

      <main>
        {/* ── Hero ── */}
        <IndustrialHeroBanner />

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
          fontWeight: 700,
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
                alignItems: "center",
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
                  flexShrink: 0
                }} />
                    <area.icon size={16} style={{
                  color: "rgba(255,255,255,0.35)",
                  flexShrink: 0
                }} />
                    <span style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.70)",
                  letterSpacing: "0.01em",
                  transition: "color 200ms ease-out"
                }}>
                      {area.title}
                    </span>
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

        {/* ── Event Tracker ── */}
        <section ref={eventRef} style={{
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

          {/* Featured session card */}
          <motion.div initial={{
          opacity: 0,
          y: 24
        }} animate={eventInView ? {
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
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: 0
              }}>
                  Agriculture & Food Security High-Impact Executive Programme
                </h2>

                <div style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "16px"
              }}>
                  {/* Amber time badge */}
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
              width: "100%"
            }} className="register-btn" onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.12)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
            }}>
                <span>Register for Session</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Three panel cards — 1 col mobile, 2 col sm, 3 col lg */}
          <div className="event-panels-grid">
            {EVENT_PANELS.map((panel, idx) => {
            const isTealPanel = panel.number === "03";
            const panelAccent = isTealPanel ? "#00B4A6" : "#FF2D87";
            const panelAccentRgb = isTealPanel ? "0,180,166" : "255,45,135";
            return <motion.div key={panel.id} initial={{
              opacity: 0,
              y: 30
            }} animate={eventInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.6,
              delay: 0.2 + idx * 0.12,
              ease: [0.21, 0.47, 0.32, 0.98]
            }} style={{
              backgroundColor: "#0D0D14",
              border: "1px solid rgba(255,255,255,0.06)",
              borderTop: `3px solid ${panelAccent}`,
              padding: "clamp(20px, 3vw, 32px)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              cursor: "pointer",
              transition: "border-color 300ms"
            }} className="event-panel-card">
                  {/* Number badge */}
                  <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
                    <span style={{
                  fontFamily: "Figtree",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: panelAccent
                }}>
                      {panel.number}
                    </span>
                    <div style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: `rgba(${panelAccentRgb},0.08)`,
                  border: `1px solid rgba(${panelAccentRgb},0.2)`
                }}>
                      <panel.icon size={16} style={{
                    color: panelAccent
                  }} />
                    </div>
                  </div>

                  <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}>
                    <h4 style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                  margin: 0
                }}>
                      {panel.title}
                    </h4>
                    <p style={{
                  fontFamily: "Figtree",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.50)",
                  margin: 0
                }}>
                      {panel.description}
                    </p>
                  </div>

                  <button style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "Figtree",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#FF2D87",
                transition: "gap 200ms ease-out"
              }}>
                    <span>View Module Details</span>
                    <ArrowRight size={12} />
                  </button>
                </motion.div>;
          })}
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
            backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80')",
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
              ...(word === "Now." ? {
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
              Join Africa's most focused platform for green economy intelligence, clean energy transition, ESG
              integration, and sustainable industrial leadership.
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
              borderRadius: 0,
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
              borderRadius: 0,
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

      <GlobalFooter />

      <style>{`
        .focus-area-row:hover span { color: rgba(255,255,255,0.95) !important; }
        .event-panel-card:hover { border-color: rgba(255,45,135,0.25) !important; }

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

        /* Event panels: 1 col mobile, 2 col tablet, 3 col desktop */
        .event-panels-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2.5vw, 32px);
        }
        @media (min-width: 640px) {
          .event-panels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .event-panels-grid {
            grid-template-columns: repeat(3, 1fr);
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