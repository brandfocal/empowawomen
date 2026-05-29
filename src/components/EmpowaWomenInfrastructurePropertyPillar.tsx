import * as React from "react";
import { motion } from "framer-motion";
import { Building2, Home, Truck, Zap, Globe, TrendingUp, DollarSign, ArrowUpRight } from "lucide-react";
import { InfrastructureHeroBanner } from "./InfrastructureHeroBanner";

// ─── Types ────────────────────────────────────────────────────────────────────
interface SegmentCard {
  id: string;
  letter: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: React.ReactNode;
  accentColor: string;
  badgeBg: string;
  metricLabel: string;
  metricSub: string;
  segmentNumber: string;
}
interface ROICard {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
}

// ─── Accent colours ──────────────────────────────────────────────────────────
const ACCENT_CORAL = "#FD5732";
const ACCENT_BURNT = "#DD6236";
const ACCENT_BLUE = "#1655B5";
const ACCENT_TEAL = "#00B4A6";
const ACCENT_AMBER = "#D97706";

// Tags that should receive teal accent
const TEAL_TAGS = new Set(["Smart Cities", "Green Building", "ESG Compliance", "ESG"]);

// ─── Constants ────────────────────────────────────────────────────────────────
const SEGMENTS: SegmentCard[] = [{
  id: "seg-A",
  letter: "A",
  title: "Core Infrastructure Development",
  description: "Convening construction engineering, transport logistics, urban connectivity, and public-private financing networks to accelerate smart city platforms.",
  image: "/core_infra_dev.png",
  tags: ["Engineering", "Smart Cities", "P3 Financing", "Urban Tech"],
  icon: <Building2 size={20} />,
  accentColor: ACCENT_CORAL,
  badgeBg: "rgba(253,87,50,0.12)",
  metricLabel: "47 Projects",
  metricSub: "Active Pipelines",
  segmentNumber: "01"
}, {
  id: "seg-B",
  letter: "B",
  title: "Real Estate & Property Transformation",
  description: "Focusing on land control, affordable housing, property technology (PropTech) investments, mixed-use assets, and green building design models.",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  tags: ["PropTech", "Affordable Housing", "Green Building", "Land Policy"],
  icon: <Home size={20} />,
  accentColor: ACCENT_BURNT,
  badgeBg: "rgba(221,98,54,0.12)",
  metricLabel: "23 PropTech",
  metricSub: "Vetted Partners",
  segmentNumber: "02"
}, {
  id: "seg-C",
  letter: "C",
  title: "Transport & Regional Integration Trade Corridors",
  description: "Analyzing aviation innovation, smart maritime port networks, rail infrastructure finance, and cross-border logistics mapping under AfCFTA alignment.",
  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
  tags: ["Aviation", "Maritime", "Rail Finance", "Logistics"],
  icon: <Truck size={20} />,
  accentColor: ACCENT_BLUE,
  badgeBg: "rgba(22,85,181,0.12)",
  metricLabel: "8 Corridors",
  metricSub: "AfCFTA Routes",
  segmentNumber: "03"
}];

const ROI_CARDS: ROICard[] = [{
  id: "roi-1",
  title: "Urban Planning Innovations",
  description: "Exposure to cutting-edge smart city design methodologies and resource efficiency frameworks targeting 35%+ improvement.",
  value: "35%+",
  icon: <Building2 size={24} />
}, {
  id: "roi-2",
  title: "Public-Private Development Networks",
  description: "Direct access to Tier-1 P3 partnership tender networks and development finance institutions across Africa.",
  value: "Direct",
  icon: <Globe size={24} />
}, {
  id: "roi-3",
  title: "Logistics Supply-Chain Optimization",
  description: "Projected reduction in cross-border logistics friction through integrated transport mapping and AfCFTA alignment.",
  value: "22%",
  icon: <TrendingUp size={24} />
}, {
  id: "roi-4",
  title: "Development Finance Connectivity",
  description: "Global exposure to institutional real estate capital, DFIs, and impact investment ecosystems shaping Africa's built environment.",
  value: "Global",
  icon: <DollarSign size={24} />
}];

const CTA_WORDS = [{
  text: "Build.",
  underline: false
}, {
  text: "Connect.",
  underline: false
}, {
  text: "Transform.",
  underline: true
}];

// ─── Segment Cards Section ─────────────────────────────────────────────────────
const CoreSegmentsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  return <section id="segments" className="segments-light-section" style={{
    backgroundColor: "#F7F6F2",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)"
  }}>
      <div style={{
      maxWidth: "1400px",
      margin: "0 auto"
    }}>
        {/* Section header */}
        <div style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}>
          <div style={{
          width: "48px",
          height: "3px",
          backgroundColor: "#FF2D87",
          marginBottom: "16px"
        }} />

          <motion.div initial={{
          opacity: 0,
          y: 8
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false,
          margin: "-60px"
        }} transition={{
          duration: 0.5
        }} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          border: "1px solid rgba(255,45,135,0.35)",
          borderRadius: "999px",
          padding: "5px 14px",
          marginBottom: "20px"
        }}>
            <span style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "#FF2D87",
            display: "inline-block"
          }} />
            <span style={{
            fontFamily: "Figtree",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "#64748b",
            textTransform: "uppercase"
          }}>
              Core Segments
            </span>
          </motion.div>

          <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px"
        }}>
            <motion.h2 initial={{
            opacity: 0,
            y: 12
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: false,
            margin: "-60px"
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(28px, 5vw, 64px)",
            color: "#0A0A0F",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            margin: 0
          }}>
              Core Industry Focus Areas
            </motion.h2>
            <span style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            color: "rgba(10,10,15,0.25)",
            letterSpacing: "0.08em",
            flexShrink: 0
          }}>
              SECTIONS <span style={{
              color: "#FF2D87"
            }}>01-03</span>
            </span>
          </div>

          <motion.p initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false,
          margin: "-60px"
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} style={{
          fontFamily: "Figtree",
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "#64748b",
          maxWidth: "560px",
          lineHeight: 1.75,
          marginTop: "16px",
          marginBottom: 0
        }}>
            Navigating the complex intersection of physical assets and digital innovation to drive sustainable economic growth.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="infra-grid-3" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginTop: "48px"
        }}>
          {SEGMENTS.map((segment, index) => <motion.div key={segment.id} initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false,
          margin: "-60px"
        }} transition={{
          duration: 0.6,
          delay: index * 0.12
        }} onMouseEnter={() => setHoveredCard(segment.id)} onMouseLeave={() => setHoveredCard(null)} style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(10,10,15,0.08)",
          borderTop: `3px solid ${segment.accentColor}`,
          borderRadius: "16px",
          padding: "clamp(20px, 3vw, 36px)",
          display: "flex",
          flexDirection: "column",
          boxShadow: hoveredCard === segment.id ? "0 8px 32px rgba(0,0,0,0.12)" : "0 1px 3px rgba(0,0,0,0.06)",
          transition: "box-shadow 300ms ease-out, transform 300ms ease-out",
          cursor: "default"
        }}>
              <div style={{
            width: "48px",
            height: "3px",
            backgroundColor: segment.accentColor,
            marginBottom: "16px",
            flexShrink: 0
          }} />

              <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "28px"
          }}>
                <div style={{
              width: "44px",
              height: "44px",
              backgroundColor: segment.badgeBg,
              border: `1px solid ${segment.accentColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              flexShrink: 0
            }}>
                  <span style={{
                fontFamily: "Figtree",
                fontWeight: 700,
                fontSize: "18px",
                color: segment.accentColor,
                letterSpacing: "-0.01em"
              }}>
                    {segment.letter}
                  </span>
                </div>
                <span style={{
              fontFamily: "Figtree",
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "rgba(10,10,15,0.20)",
              textTransform: "uppercase"
            }}>
                  PILLAR-4.2-{segment.letter}
                </span>
              </div>

              <h3 style={{
            fontFamily: "Figtree",
            fontWeight: 600,
            fontSize: "clamp(17px, 2.5vw, 24px)",
            color: "#0A0A0F",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            margin: "0 0 12px 0"
          }}>
                {segment.title}
              </h3>

              <p style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 1.8vw, 16px)",
            fontWeight: 400,
            color: "#64748b",
            lineHeight: 1.7,
            margin: "0 0 24px 0",
            flex: 1
          }}>
                {segment.description}
              </p>

              <div style={{
            height: "clamp(180px, 22vw, 280px)",
            overflow: "hidden",
            borderRadius: "16px",
            marginBottom: "20px",
            transition: "box-shadow 500ms ease-out",
            position: "relative"
          }}>
                <img src={segment.image} alt={segment.title} style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hoveredCard === segment.id ? "scale(1.04)" : "scale(1)",
              transition: "transform 600ms ease-out",
              display: "block"
            }} />
                <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.35) 100%)",
              pointerEvents: "none"
            }} />
              </div>

              <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "20px"
          }}>
                {segment.tags.map(tag => <span key={tag} style={{
              fontFamily: "Figtree",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: TEAL_TAGS.has(tag) ? ACCENT_TEAL : "rgba(10,10,15,0.45)",
              backgroundColor: TEAL_TAGS.has(tag) ? "rgba(0,180,166,0.08)" : "rgba(10,10,15,0.04)",
              border: `1px solid ${TEAL_TAGS.has(tag) ? "rgba(0,180,166,0.25)" : "rgba(10,10,15,0.08)"}`,
              padding: "3px 8px",
              borderRadius: "4px"
            }}>
                    {tag}
                  </span>)}
              </div>

              <button style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "Figtree",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: segment.accentColor,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0
          }}>
                <span>View Full Spectrum</span>
                <ArrowUpRight size={14} />
              </button>

              <div style={{
            borderTop: "1px solid rgba(10,10,15,0.08)",
            paddingTop: "16px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
                <div>
                  <div style={{
                fontFamily: "Figtree",
                fontSize: "16px",
                fontWeight: 700,
                color: segment.accentColor,
                lineHeight: 1.2
              }}>
                    {segment.metricLabel}
                  </div>
                  <div style={{
                fontFamily: "Figtree",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(10,10,15,0.40)",
                marginTop: "2px"
              }}>
                    {segment.metricSub}
                  </div>
                </div>
                <div style={{
              fontFamily: "Figtree",
              fontWeight: 900,
              fontSize: "48px",
              color: "rgba(10,10,15,0.06)",
              letterSpacing: "-0.05em",
              lineHeight: 1
            }}>
                  {segment.segmentNumber}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>

      <style>{`
        .segments-light-section {
          border-radius: 20px 20px 0 0;
        }
        @media (min-width: 640px) {
          .segments-light-section {
            border-radius: 40px 40px 0 0;
          }
        }
      `}</style>
    </section>;
};

// ─── Section Separator ────────────────────────────────────────────────────────
const SegmentToROISeparator: React.FC = () => {
  return <div style={{
    width: "100%",
    height: "1px",
    background: `linear-gradient(to right, rgba(253,87,50,0.4), rgba(22,85,181,0.3), rgba(221,98,54,0.4))`
  }} />;
};

// ─── ROI Parameters Section ────────────────────────────────────────────────────
const ROIParametersSection: React.FC = () => {
  return <section style={{
    backgroundColor: "#0A0A0F",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)"
  }}>
      <div style={{
      maxWidth: "1400px",
      margin: "0 auto"
    }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}>
          <motion.div initial={{
          opacity: 0,
          y: 8
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          border: "1px solid rgba(255,45,135,0.35)",
          borderRadius: "999px",
          padding: "5px 14px",
          marginBottom: "20px"
        }}>
            <span style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "#FF2D87",
            display: "inline-block"
          }} />
            <span style={{
            fontFamily: "Figtree",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.20em",
            color: "#FF2D87",
            textTransform: "uppercase"
          }}>
              Investment Metrics
            </span>
          </motion.div>

          <motion.h2 initial={{
          opacity: 0,
          y: 12
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(26px, 4vw, 52px)",
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: "0 0 16px 0"
        }}>
            Strategic ROI Parameters
          </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 17px)",
          color: "rgba(255,255,255,0.50)",
          maxWidth: "560px",
          lineHeight: 1.7,
          margin: 0
        }}>
            Measurable impact indicators across Africa's infrastructure, real estate, and transport ecosystems.
          </motion.p>
        </div>

        {/* ROI grid: 1 col mobile → 2 col tablet → 4 col desktop */}
        <div className="infra-grid-4" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "48px"
        }}>
          {ROI_CARDS.map((card, index) => <motion.div key={card.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false,
          margin: "-80px"
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} style={{
          backgroundColor: "#111117",
          border: "1px solid rgba(255,255,255,0.06)",
          borderTop: `2px solid rgba(215,119,6,0.6)`,
          borderRadius: "16px",
          padding: "clamp(20px, 3vw, 32px)",
          display: "flex",
          flexDirection: "column"
        }}>
              <div style={{
            width: "44px",
            height: "44px",
            backgroundColor: "rgba(217,119,6,0.10)",
            border: "1px solid rgba(217,119,6,0.20)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: ACCENT_AMBER,
            marginBottom: "20px",
            flexShrink: 0
          }}>
                {card.icon}
              </div>

              <div style={{
            width: "32px",
            height: "3px",
            backgroundColor: ACCENT_AMBER,
            marginBottom: "8px",
            flexShrink: 0
          }} />

              <span style={{
            fontFamily: "Figtree",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: ACCENT_AMBER,
            marginBottom: "8px",
            display: "block"
          }}>
                {card.title.split(" ").slice(0, 2).join(" ")}
              </span>

              <span style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "12px",
            display: "block"
          }}>
                {card.value}
              </span>

              <h4 style={{
            fontFamily: "Figtree",
            fontWeight: 600,
            fontSize: "clamp(13px, 1.5vw, 15px)",
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
            margin: "0 0 10px 0"
          }}>
                {card.title}
              </h4>

              <p style={{
            fontFamily: "Figtree",
            fontSize: "clamp(12px, 1.3vw, 14px)",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.65,
            margin: 0,
            flex: 1
          }}>
                {card.description}
              </p>
            </motion.div>)}
        </div>

        {/* Supplementary callout row */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        delay: 0.4
      }} style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "32px",
        marginTop: "48px"
      }}>
          <div style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          flex: "1 1 300px"
        }}>
            <div style={{
            width: "44px",
            height: "44px",
            flexShrink: 0,
            backgroundColor: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.20)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D4AF37"
          }}>
              <Zap size={20} />
            </div>
            <div>
              <h4 style={{
              fontFamily: "Figtree",
              fontWeight: 600,
              fontSize: "15px",
              color: "#FFFFFF",
              margin: "0 0 6px 0"
            }}>
                Technological Integration
              </h4>
              <p style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.65,
              margin: 0
            }}>
                Measuring the deployment of PropTech and IoT infrastructure in large-scale urban connectivity projects.
              </p>
            </div>
          </div>

          <div style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          flex: "1 1 300px"
        }}>
            <div style={{
            width: "44px",
            height: "44px",
            flexShrink: 0,
            backgroundColor: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.20)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D4AF37"
          }}>
              <Globe size={20} />
            </div>
            <div>
              <h4 style={{
              fontFamily: "Figtree",
              fontWeight: 600,
              fontSize: "15px",
              color: "#FFFFFF",
              margin: "0 0 6px 0"
            }}>
                Regulatory Alignment
              </h4>
              <p style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.65,
              margin: 0
            }}>
                Ensuring all developments meet regional integration standards and AfCFTA trade corridor requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

// ─── CTA Section ───────────────────────────────────────────────────────────────
const CTASection: React.FC = () => {
  return <section style={{
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#0A0A0F",
    paddingTop: "clamp(80px, 10vw, 160px)",
    paddingBottom: "clamp(80px, 10vw, 160px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)"
  }}>
      {/* Thin top border gradient */}
      <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "1px",
      background: "linear-gradient(to right, transparent, rgba(253,87,50,0.50), rgba(255,45,135,0.50), rgba(22,85,181,0.50), transparent)",
      pointerEvents: "none"
    }} />

      {/* Background aerial image overlay */}
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
        backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        maskImage: "linear-gradient(to top, transparent 0%, black 45%)",
        WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 45%)"
      }} />
      </div>

      {/* Accent blur orbs */}
      <div style={{
      position: "absolute",
      top: "-160px",
      left: "-80px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(253,87,50,0.07) 0%, transparent 70%)",
      pointerEvents: "none"
    }} />
      <div style={{
      position: "absolute",
      bottom: "-160px",
      right: "-80px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(22,85,181,0.07) 0%, transparent 70%)",
      pointerEvents: "none"
    }} />
      <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "800px",
      height: "400px",
      borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(255,45,135,0.05) 0%, transparent 70%)",
      pointerEvents: "none"
    }} />

      {/* Content */}
      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "32px"
    }}>
        {/* Pre-label */}
        <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px"
      }}>
          <div style={{
          height: "3px",
          width: "48px",
          backgroundColor: "#FF2D87"
        }} />
          <span style={{
          fontFamily: "Figtree",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.50)"
        }}>
            SHAPE AFRICA'S FUTURE
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
        fontFamily: "Figtree",
        fontWeight: 300,
        fontSize: "clamp(36px, 7vw, 88px)",
        lineHeight: 1.0,
        letterSpacing: "-0.04em",
        color: "#FFFFFF",
        margin: 0
      }}>
          {CTA_WORDS.map((word, i) => <motion.span key={word.text} initial={{
          opacity: 0,
          y: 16,
          filter: "blur(8px)"
        }} whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }} viewport={{
          once: false,
          margin: "-80px"
        }} transition={{
          duration: 0.7,
          delay: i * 0.08,
          ease: [0.21, 0.47, 0.32, 0.98]
        }} style={{
          display: "block",
          textDecoration: word.underline ? "underline" : "none",
          textDecorationColor: word.underline ? "#FF2D87" : "transparent",
          textDecorationThickness: word.underline ? "3px" : undefined,
          textUnderlineOffset: word.underline ? "10px" : undefined
        }}>
              {word.text}
            </motion.span>)}
        </h2>

        {/* Subtext */}
        <p style={{
        fontFamily: "Figtree",
        fontSize: "clamp(15px, 2vw, 18px)",
        color: "rgba(255,255,255,0.45)",
        maxWidth: "520px",
        lineHeight: 1.75,
        margin: 0
      }}>
          Join the exclusive cohort of leaders and investors transforming Africa's infrastructure landscape through innovation, capital, and strategic connectivity.
        </p>

        {/* CTA Buttons — stack on mobile, row on sm+ */}
        <div className="infra-cta-group" style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "480px"
        }}>
          <button style={{
          position: "relative",
          overflow: "hidden",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          minHeight: "54px",
          padding: "12px clamp(16px, 2.5vw, 24px)",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          letterSpacing: "0.02em",
          transition: "filter 200ms ease-out",
          width: "100%",
          flex: "1 1 200px"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
        }}>
            <span style={{
            position: "relative",
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}>
              Apply for Cohort
              <ArrowUpRight size={18} />
            </span>
            <span style={{
            position: "absolute",
            inset: 0,
            width: "33%",
            background: "rgba(255,255,255,0.15)",
            transform: "skewX(-20deg)",
            animation: "shimmerSlide 3s linear infinite",
            pointerEvents: "none"
          }} />
          </button>

          <button style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "rgba(255,255,255,0.05)",
          minHeight: "54px",
          padding: "12px clamp(16px, 2.5vw, 24px)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "999px",
          cursor: "pointer",
          letterSpacing: "0.02em",
          transition: "background-color 200ms ease-out",
          width: "100%",
          flex: "1 1 200px"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
        }}>
            Download Overview
          </button>
        </div>
      </div>
    </section>;
};

// ─── Main Export ───────────────────────────────────────────────────────────────
export const InfrastructurePropertyPillar: React.FC = () => {
  return <div style={{
    width: "100%",
    backgroundColor: "#0A0A0F"
  }}>
      <main style={{ minHeight: "100vh" }}>
        <InfrastructureHeroBanner />
        <CoreSegmentsSection />
        <SegmentToROISeparator />
        <ROIParametersSection />
        <CTASection />
      </main>

      <style>{`
        /* Responsive Grid & Spacing Overrides */
        @media (max-width: 767px) {
          .infra-grid-3 {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .infra-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 639px) {
          .infra-grid-4 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .infra-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 599px) {
          .infra-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .infra-cta-group button {
            width: 100% !important;
          }
        }
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
      `}</style>
    </div>;
};
export default InfrastructurePropertyPillar;
