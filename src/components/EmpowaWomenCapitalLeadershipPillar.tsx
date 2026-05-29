import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CapitalLeadershipHeroBanner } from "./CapitalLeadershipHeroBanner";

interface MatrixCard {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor: string;
}

const MATRIX_CARDS: MatrixCard[] = [{
  id: "m-01",
  number: "01",
  title: "Entrepreneurship & Funding Architecture",
  description: "Venture capital access points, private equity matchmakings, enterprise acceleration, procurement pathways, and startup scaling solutions for the modern founder.",
  accentColor: "#FF2D87"
}, {
  id: "m-02",
  number: "02",
  title: "Leadership, Governance & Boards Ecosystem",
  description: "Executive leadership positioning frameworks, board readiness training, stakeholder relationship compliance systems, succession mapping, and ethical leadership validation.",
  accentColor: "#FD5732"
}, {
  id: "m-03",
  number: "03",
  title: "Communications, Advertising, Marketing & Brand Strategy",
  description: "AI-powered marketing models, digital PR control systems, reputation management frameworks, and consumer behavior intelligence tracking for dominant brand presence.",
  accentColor: "#DD6236"
}, {
  id: "m-04",
  number: "04",
  title: "The Creative & Digital Economy Stage",
  description: "Intellectual property monetization frameworks, fashion/film streaming licensing networks, content creation business frameworks, and digital storytelling influence metrics.",
  accentColor: "#1655B5"
}];

const INTRO_WORDS = ["A", "Unified", "Framework", "for", "Executive", "Dominance"];

// ─── Introduction Section ─────────────────────────────────────────────────────
const IntroSection = () => {
  return <section style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)"
  }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p initial={{
        opacity: 0,
        y: 10
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} style={{
        fontFamily: "Figtree, sans-serif",
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#FD5732",
        margin: "0 0 20px 0"
      }}>
          Systemic Integration
        </motion.p>

        <h2 style={{
        fontFamily: "Figtree, sans-serif",
        fontWeight: 300,
        fontSize: "clamp(28px, 5vw, 64px)",
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "#FFFFFF",
        maxWidth: 720,
        marginBottom: "40px",
        marginTop: 0
      }}>
          {INTRO_WORDS.map((word, i) => <motion.span key={`iw-${i}`} style={{
          display: "inline-block",
          marginRight: "0.22em"
        }} initial={{
          opacity: 0,
          filter: "blur(10px)",
          y: 20
        }} whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: i * 0.08,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}>
              {word === "Dominance" ? <span style={{
            color: "#FF2D87"
          }}>{word}</span> : word}
            </motion.span>)}
        </h2>

        <div className="capital-grid-2">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <p style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.70)",
            lineHeight: 1.75,
            marginBottom: "40px",
            marginTop: 0
          }}>
              Pillar 4.4 represents the command center of the Future Economy Growth Hub. By
              integrating capital access with strategic leadership and brand authority, we ensure
              women leaders don't just participate in the economy - they define its future trajectory.
            </p>

            <div style={{ display: "flex", gap: "48px" }}>
              <div>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#FD5732",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "8px",
                marginTop: 0
              }}>
                  250+
                </p>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                margin: 0
              }}>
                  Global Partnerships
                </p>
              </div>
              <div>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#FF2D87",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "8px",
                marginTop: 0
              }}>
                  40%
                </p>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                margin: 0
              }}>
                  Capital Uplift
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.96
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }} style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1674" alt="Executive Strategy" style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            aspectRatio: "16/10"
          }} />
            <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,15,0.90) 0%, transparent 60%)"
          }} />
            <div style={{
            position: "absolute",
            bottom: "24px",
            left: "24px",
            right: "24px",
            borderLeft: "2px solid #DD6236",
            paddingLeft: "16px",
            paddingTop: "8px",
            paddingBottom: "8px"
          }}>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "13px",
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.55,
              margin: 0
            }}>
                "Control over the narrative is as critical as control over the capital. We provide the
                systems to master both."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

// ─── Four Operational Matrices Grid ──────────────────────────────────────────
const MatricesSection = () => {
  return <section id="matrices" style={{
    position: "relative",
    zIndex: 10,
    backgroundColor: "#F7F6F2",
    borderRadius: "20px 20px 0 0",
    boxShadow: "0 -24px 64px rgba(0,0,0,0.4)",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)"
  }}>
      <div className="matrices-section-rounded" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 8vw, 72px)" }}>
          <motion.p initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#FD5732",
          margin: "0 0 16px 0"
        }}>
            Operational Framework
          </motion.p>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px, 4vw, 52px)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#0A0A0F",
          maxWidth: 600,
          margin: "0 0 16px 0"
        }}>
            Four Integrated Operational Matrices
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: "clamp(14px, 2vw, 16px)",
          color: "#64748b",
          maxWidth: 560,
          lineHeight: 1.75,
          margin: 0
        }}>
            High-performance frameworks designed for the modern enterprise ecosystem, ensuring
            scalability and sustainable influence.
          </motion.p>
        </div>

        {/* Premium grid of distinct rounded cards (consistent 16px borderRadius) */}
        <div className="capital-matrix-grid">
          {MATRIX_CARDS.map((card, idx) => <motion.div key={card.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: idx * 0.1
        }} style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: "16px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          transition: "border-color 300ms ease-out, box-shadow 300ms ease-out",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "clamp(24px, 4vw, 48px)",
          cursor: "default"
        }} onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(253,87,50,0.30)";
          el.style.boxShadow = "0 8px 32px rgba(253,87,50,0.08)";
        }} onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(0,0,0,0.08)";
          el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
        }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{
              width: "3px",
              height: "36px",
              backgroundColor: card.accentColor,
              display: "block",
              flexShrink: 0
            }} />
                <span style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              color: card.accentColor,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              display: "block"
            }}>
                  {card.number}
                </span>
              </div>
              <h3 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: "#0A0A0F",
            lineHeight: 1.25,
            margin: 0,
            letterSpacing: "-0.01em"
          }}>
                {card.title}
              </h3>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(13px, 1.8vw, 15px)",
            fontWeight: 400,
            color: "#64748b",
            lineHeight: 1.7,
            margin: 0
          }}>
                {card.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};

// ─── B2B Action Strip ─────────────────────────────────────────────────────────
const ActionStrip = () => {
  return <section style={{
    position: "relative",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)",
    backgroundColor: "#0A0A0F",
    borderTop: "1px solid rgba(255,255,255,0.06)"
  }}>
      <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "1px",
      background: "linear-gradient(to right, transparent 0%, #FD5732 30%, transparent 100%)"
    }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div>
            <motion.p initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#FD5732",
            marginBottom: "20px",
            marginTop: 0
          }}>
              Exclusive Access
            </motion.p>
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            maxWidth: 800,
            marginBottom: "20px",
            marginTop: 0
          }}>
              Access Exclusive Pillar Intelligence &amp; Partnership Opportunities
            </motion.h2>
            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 560,
            lineHeight: 1.75,
            margin: 0
          }}>
              Secure your position at the forefront of the future economy. Our strategic tracks are
              limited to high-potential leaders and enterprise partners.
            </motion.p>
          </div>

          {/* Standardized Pill-shaped CTAs with minHeight: "54px" and width: "220px" (wrap-safe) */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          once: true,
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "flex-start"
        }} className="capital-action-buttons">
            <button style={{
            padding: "12px 28px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            border: "none",
            borderRadius: "999px",
            minHeight: "54px",
            width: "320px",
            maxWidth: "100%",
            cursor: "pointer",
            transition: "filter 200ms ease-out",
            position: "relative",
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }}>
              <span style={{ zIndex: 1 }} className="flex items-center gap-2">
                <span>Request Pillar Keynote Materials</span>
                <ArrowRight size={16} />
              </span>
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

            <button style={{
            padding: "12px 28px",
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#FFFFFF",
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "999px",
            minHeight: "54px",
            width: "220px",
            cursor: "pointer",
            transition: "background-color 200ms ease-out",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
          }}>
              <span>Sponsor Vertical Track</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const CapitalLeadershipPillar = () => {
  return <div className="w-full" style={{
    backgroundColor: "#0A0A0F"
  }}>
      <CapitalLeadershipHeroBanner />
      <IntroSection />
      <MatricesSection />
      <ActionStrip />

      <style>{`
        .capital-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(24px, 5vw, 80px);
          align-items: start;
          margin-top: 24px;
        }
        .capital-matrix-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 768px) {
          .capital-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 32px;
          }
        }
        @media (max-width: 640px) {
          .capital-matrix-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
          .capital-action-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .capital-action-buttons button {
            width: 100% !important;
          }
        }
      `}</style>
    </div>;
};
