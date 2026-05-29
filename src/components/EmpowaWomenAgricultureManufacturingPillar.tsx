import * as React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Building2, Zap, ArrowRight } from "lucide-react";
import { AgricultureManufacturingHeroBanner } from "./AgricultureManufacturingHeroBanner";
import { ROIMetricBlock } from "./ROIMetricBlock";

interface FocusTrack {
  id: string;
  number: string;
  numberColor: string;
  accentColor: string;
  title: string;
  content: string;
  image: string;
  icon: React.ReactNode;
  tagLabel: string;
}

interface ROIBlock {
  id: string;
  title: string;
  icon: "trend" | "target" | "chart" | "users";
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

const FOCUS_TRACKS: FocusTrack[] = [{
  id: "track-1",
  number: "01",
  numberColor: "#FD5732",
  accentColor: "#FD5732",
  tagLabel: "Manufacturing & Logistics",
  title: "Smart Manufacturing & Wholesale Logistics",
  content: "Operational efficiency tracking, localisation strategies, supply chain resilience, e-commerce transformation, and export competitiveness parameters. We focus on digitising the factory floor and optimising the path from production to global market delivery.",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  icon: <Building2 size={20} />
}, {
  id: "track-2",
  number: "02",
  numberColor: "#DD6236",
  accentColor: "#DD6236",
  tagLabel: "Consumer & Lifestyle Markets",
  title: "Beauty, Fashion, Health & Wellness Economy",
  content: "Reshaping consumer behavior through personal care innovation, luxury retail partnerships, wellness technology tracking, and mental health corporate wellness systems. Tapping into the multi-billion dollar African lifestyle market through premium branding.",
  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
  icon: <ShoppingBag size={20} />
}];

const ROI_BLOCKS: ROIBlock[] = [{
  id: "roi-1",
  title: "Consumer Brand Scaling Intelligence",
  icon: "trend",
  metrics: [{
    label: "Market Penetration",
    value: "+42%",
    description: "Expansion across regional trade blocs and pan-African consumer segments."
  }, {
    label: "Brand Equity",
    value: "High",
    description: "Premium positioning and commercialisation intelligence for local brands."
  }]
}, {
  id: "roi-2",
  title: "Advanced Distribution Loop Setups",
  icon: "chart",
  metrics: [{
    label: "Supply Velocity",
    value: "3.5x",
    description: "Reduced lead times through integrated distribution loop setups."
  }, {
    label: "Logistics Efficiency",
    value: "98%",
    description: "Optimized last-mile delivery and cold-chain resilience."
  }]
}, {
  id: "roi-3",
  title: "Cross-Industry Retail Partnerships",
  icon: "users",
  metrics: [{
    label: "Cross-Industry Alliances",
    value: "12+",
    description: "Strategic alliances between luxury retail and wellness technology."
  }, {
    label: "Partner Value",
    value: "Premium",
    description: "Tier-1 commercial visibility and co-investment frameworks."
  }]
}];

export const AgricultureManufacturingPillar: React.FC = () => {
  return <div style={{
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF",
    fontFamily: "Figtree, sans-serif"
  }}>
      {/* Hero */}
      <AgricultureManufacturingHeroBanner pillarTitle="Pillar 4.3 — Agriculture, Manufacturing & Consumer Markets" quote="Africa Must Shift From Consumption Economies to Industrial Competitiveness" narrative="The evolution of the African economy relies on the strategic integration of sophisticated manufacturing capabilities with the rapidly expanding consumer markets. By fostering industrial resilience and retail excellence, we create a sustainable blueprint for continental wealth." bgImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=85" />

      {/* ─── Focus Tracks — LIGHT SECTION ─────────────────────────────── */}
      <section id="focus-tracks" className="focus-tracks-section" style={{
      backgroundColor: "#F7F6F2",
      position: "relative",
      zIndex: 10,
      marginTop: "-40px",
      overflow: "hidden"
    }}>
        {/* Subtle warm accent orb */}
        <div style={{
        position: "absolute",
        top: "-80px",
        right: "-80px",
        width: "420px",
        height: "420px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(253,87,50,0.07) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

        <div className="section-inner" style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
          {/* Section header */}
          <div className="section-header-mb">
            <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px"
          }}>
              <div style={{
              width: "24px",
              height: "1.5px",
              backgroundColor: "#FD5732"
            }} />
              <span style={{
              fontFamily: "Figtree",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#64748b"
            }}>
                Deep-Dive Focus Tracks
              </span>
            </div>
            <h2 className="section-heading" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            color: "#0A0A0F",
            margin: 0,
            lineHeight: 1.05
          }}>
              Strategic Industrial{" "}
              <span style={{
              textDecoration: "underline",
              textDecorationColor: "#FD5732",
              textDecorationThickness: "2px",
              textUnderlineOffset: "6px"
            }}>
                Pathways
              </span>
            </h2>
          </div>

          {/* Track cards */}
          <div className="tracks-stack">
            {FOCUS_TRACKS.map((track, index) => <motion.div key={track.id} initial={{
            opacity: 0,
            y: 48
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-80px"
          }} transition={{
            duration: 0.8,
            delay: index * 0.15,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} className={`focus-track-row ${index % 2 === 1 ? "track-reverse" : ""}`}>
                {/* Image panel with standardized 16px borderRadius */}
                <div className="focus-track-image" style={{ borderRadius: "16px" }}>
                  <img src={track.image} alt={track.title} style={{
                width: "100%",
                height: "100%",
                minHeight: "260px",
                objectFit: "cover",
                display: "block",
                filter: "grayscale(20%) brightness(0.96)",
                transition: "filter 600ms ease, transform 600ms ease"
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) brightness(1)";
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(20%) brightness(0.96)";
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
              }} />

                  {/* Large number overlay */}
                  <div className="track-number-overlay" style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                fontFamily: "Figtree",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1,
                opacity: 0.85,
                letterSpacing: "-0.04em",
                textShadow: "0 2px 24px rgba(0,0,0,0.5)"
              }}>
                    {track.number}
                  </div>
                </div>

                {/* Content panel with standardized 16px borderRadius */}
                <div className="focus-track-content" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.07)",
              borderTop: `3px solid ${track.accentColor}`,
              borderRadius: "16px",
              gap: "18px"
            }}>
                  {/* Tag chip */}
                  <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                alignSelf: "flex-start"
              }}>
                    <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: track.accentColor === "#FD5732" ? "rgba(253,87,50,0.10)" : "rgba(221,98,54,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: track.accentColor,
                  flexShrink: 0
                }}>
                      {track.icon}
                    </div>
                    <span style={{
                  fontFamily: "Figtree",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: track.accentColor,
                  padding: "4px 10px",
                  border: `1px solid ${track.accentColor}`,
                  borderRadius: "999px"
                }}>
                      {track.tagLabel}
                    </span>
                  </div>

                  <h3 className="track-title" style={{
                fontFamily: "Figtree",
                fontWeight: 700,
                color: "#0A0A0F",
                margin: 0,
                lineHeight: 1.2,
                letterSpacing: "-0.02em"
              }}>
                    {track.title}
                  </h3>

                  <p style={{
                fontFamily: "Figtree",
                fontWeight: 400,
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "#64748b",
                lineHeight: 1.75,
                margin: 0
              }}>
                    {track.content}
                  </p>

                  <div style={{
                paddingTop: "4px"
              }}>
                    <button style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "Figtree",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: track.accentColor,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "opacity 200ms"
                }} onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.70";
                }} onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}>
                      <span>Explore Framework</span>
                      <Zap size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* ─── Strategic ROI blocks — DARK SECTION ─────────────────────────── */}
      <section className="roi-section" style={{
      backgroundColor: "#060608",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
        <div className="section-inner" style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
          {/* Header */}
          <div className="roi-header-mb" style={{
          textAlign: "center"
        }}>
            <span style={{
            fontFamily: "Figtree",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#FD5732",
            display: "block",
            marginBottom: "16px"
          }}>
              Value Proposition
            </span>
            <h2 className="section-heading" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            lineHeight: 1.1
          }}>
              Thematic Strategic ROI
            </h2>
            <p style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 2vw, 16px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.40)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.65
          }}>
              Measuring the tangible economic impact and industrial transformation
              of our strategic interventions across the pillar.
            </p>
          </div>

          {/* 3-column grid — responsive with standardized 16px border-radius in card parameters */}
          <div className="roi-grid">
            {ROI_BLOCKS.map(block => <ROIMetricBlock key={block.id} title={block.title} metrics={block.metrics} icon={block.icon} variant="dark" />)}
          </div>
        </div>
      </section>

      {/* ─── CTA Band ───────────────────────────────────────────────────── */}
      <section className="cta-section" style={{
      backgroundColor: "#0A0A0F",
      position: "relative",
      overflow: "hidden"
    }}>
        {/* Glow orb */}
        <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "300px",
        background: "radial-gradient(ellipse, rgba(255,45,135,0.08) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

        <div className="cta-inner" style={{
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
        zIndex: 1
      }}>
          <motion.div initial={{
          opacity: 0,
          y: 32
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: [0.21, 0.47, 0.32, 0.98]
        }} className="cta-box" style={{
          border: "1px solid rgba(255,45,135,0.20)",
          backgroundColor: "rgba(255,45,135,0.03)",
          borderRadius: "16px"
        }}>
            <span style={{
            fontFamily: "Figtree",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.40)",
            display: "block",
            marginBottom: "24px"
          }}>
              Open Enrollment
            </span>
            <h2 className="cta-heading" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "20px"
          }}>
              Ready to Reshape the Future Economy?
            </h2>
            <p style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 auto 40px auto"
          }}>
              Join the cohort of industrial leaders and retail visionaries
              building the next chapter of African economic excellence. Our next
              summit on Manufacturing &amp; Consumer Trends is now open for
              registration.
            </p>

            <div className="cta-buttons">
              <button className="cta-btn-primary" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "Figtree",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF2D87",
              border: "none",
              borderRadius: "999px",
              minHeight: "54px",
              width: "220px",
              cursor: "pointer",
              transition: "filter 200ms ease-out"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
            }}>
                <span>Join The Cohort</span>
                <ArrowRight size={18} />
              </button>
              <button className="cta-btn-secondary" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Figtree",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "rgba(22,85,181,0.15)",
              border: "1px solid rgba(22,85,181,0.45)",
              borderRadius: "999px",
              minHeight: "54px",
              width: "220px",
              cursor: "pointer",
              transition: "background-color 200ms ease-out, border-color 200ms ease-out"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(22,85,181,0.28)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(22,85,181,0.70)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(22,85,181,0.15)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(22,85,181,0.45)";
            }}>
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ── Focus Tracks section padding ── */
        .focus-tracks-section {
          border-radius: 40px 40px 0 0;
          padding: 80px clamp(20px, 6vw, 96px);
        }
        @media (max-width: 640px) {
          .focus-tracks-section {
            border-radius: 20px 20px 0 0;
            padding: 48px 20px 56px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .focus-tracks-section {
            border-radius: 28px 28px 0 0;
            padding: 64px clamp(24px, 5vw, 56px);
          }
        }

        /* ── Section inner padding ── */
        .section-inner {
          padding: 0;
        }

        /* ── Section header margin ── */
        .section-header-mb {
          margin-bottom: clamp(40px, 8vw, 80px);
        }

        /* ── Shared section heading size ── */
        .section-heading {
          font-size: clamp(28px, 5vw, 56px);
        }

        /* ── Track cards stack ── */
        .tracks-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 8vw, 72px);
        }

        /* ── Individual track row ── */
        .focus-track-row {
          display: flex;
          flex-direction: row;
          gap: clamp(20px, 4vw, 56px);
          align-items: stretch;
        }
        .focus-track-row.track-reverse {
          flex-direction: row-reverse;
        }
        @media (max-width: 1024px) {
          .focus-track-row,
          .focus-track-row.track-reverse {
            flex-direction: column !important;
          }
        }

        /* ── Track image panel ── */
        .focus-track-image {
          flex: 0 0 48%;
          max-width: 48%;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.08);
        }
        @media (max-width: 1024px) {
          .focus-track-image {
            flex: none !important;
            max-width: 100% !important;
            width: 100%;
          }
          .focus-track-image img {
            min-height: 220px !important;
            max-height: 300px;
          }
        }

        /* ── Track number overlay size ── */
        .track-number-overlay {
          font-size: clamp(48px, 8vw, 96px);
        }

        /* ── Track content panel ── */
        .focus-track-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: clamp(24px, 4vw, 48px);
        }

        /* ── Track title ── */
        .track-title {
          font-size: clamp(18px, 3vw, 28px);
        }

        /* ── ROI section padding ── */
        .roi-section {
          padding: clamp(56px, 10vw, 100px) clamp(20px, 6vw, 96px);
        }
        @media (max-width: 640px) {
          .roi-section {
            padding: 48px 20px;
          }
        }

        /* ── ROI header margin ── */
        .roi-header-mb {
          margin-bottom: clamp(36px, 8vw, 72px);
        }

        /* ── ROI grid ── */
        .roi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 640px) {
          .roi-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .roi-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* ── CTA section padding ── */
        .cta-section {
          padding: clamp(56px, 10vw, 100px) clamp(20px, 6vw, 96px);
        }
        @media (max-width: 640px) {
          .cta-section {
            padding: 48px 20px;
          }
        }

        /* ── CTA inner ── */
        .cta-inner {
          width: 100%;
        }

        /* ── CTA box padding ── */
        .cta-box {
          padding: clamp(32px, 6vw, 72px) clamp(24px, 5vw, 64px);
        }
        @media (max-width: 640px) {
          .cta-box {
            padding: 36px 24px;
          }
        }

        /* ── CTA heading size ── */
        .cta-heading {
          font-size: clamp(24px, 5vw, 48px);
        }

        /* ── CTA buttons ── */
        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }
        @media (max-width: 640px) {
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        }

        /* ── CTA button sizes ── */
        .cta-btn-primary,
        .cta-btn-secondary {
          font-size: clamp(14px, 2vw, 17px);
          padding: clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px);
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .cta-btn-primary,
          .cta-btn-secondary {
            width: 220px !important;
            padding: 14px 24px;
            font-size: 15px;
            justify-content: center;
          }
        }
      `}</style>
    </div>;
};
