import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, ShoppingBag, Globe, Link, Truck, MapPin, Zap, Ship, ArrowRight } from "lucide-react";
import { MainNavBar } from "./MainNavBar";
import { IndustrialHeroBanner } from "./IndustrialHeroBanner";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { GlobalFooter } from "./GlobalFooter";
import { WholesaleRegistrationSection } from "./WholesaleRegistrationSection";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FocusArea {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
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
  type: string;
  title: string;
  description: string;
  accent: string;
  accentRgb: string;
  isLunch?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Cpu,
  title: "Smart Manufacturing",
  description: "Leveraging automation, Industry 4.0, and smart technologies to build globally competitive production",
  accentColor: "#D4AF37"
}, {
  id: "fa-2",
  icon: ShoppingBag,
  title: "Retail Innovation",
  description: "Reshaping consumer experiences through digital, omnichannel, and experiential retail",
  accentColor: "#FF2D87"
}, {
  id: "fa-3",
  icon: Globe,
  title: "E-Commerce Growth",
  description: "Building scalable digital commerce platforms and women-led online enterprises",
  accentColor: "#FF2D87"
}, {
  id: "fa-4",
  icon: Link,
  title: "Supply Chain Resilience",
  description: "Designing agile, risk-proof supply chains for Africa's future industrial economy",
  accentColor: "#00B4A6"
}, {
  id: "fa-5",
  icon: Truck,
  title: "Logistics & Distribution",
  description: "Smart logistics systems driving operational efficiency and market reach",
  accentColor: "#D4AF37"
}, {
  id: "fa-6",
  icon: MapPin,
  title: "Localisation",
  description: "Building local production capacity and reducing import dependency across Africa",
  accentColor: "#00B4A6"
}, {
  id: "fa-7",
  icon: Zap,
  title: "Industrial Innovation",
  description: "Driving manufacturing competitiveness through technology and process transformation",
  accentColor: "#D4AF37"
}, {
  id: "fa-8",
  icon: Ship,
  title: "Export Competitiveness",
  description: "Positioning African products in global markets through quality, branding, and trade readiness",
  accentColor: "#FF2D87"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Industrial Growth & Trade Opportunities",
  value: "R18B+",
  description: "Targeted value of identified industrial and trade pipeline for women-led enterprises."
}, {
  label: "Retail & Manufacturing Partnerships",
  value: "180+",
  description: "Strategic off-take agreements and supply chain partnerships established annually."
}, {
  label: "Smart Technology Exposure",
  value: "Tier 1",
  description: "Priority access to cutting-edge manufacturing automation and digital retail solutions."
}, {
  label: "Export Market Intelligence",
  value: "38+ Markets",
  description: "Comprehensive trade data and quality compliance frameworks for continental expansion."
}];
const PROGRAMME: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00",
  type: "OPENING KEYNOTE™",
  title: "Women Must Lead the Future of Africa's Industrial, Retail & Consumer Economy",
  description: "Who Will Build, Manufacture, Supply & Scale Africa's Next Generation of Competitive Industries?",
  accent: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-2",
  time: "11:20",
  type: "EXECUTIVE MASTERCLASS™",
  title: "Smart Manufacturing, Digital Commerce & the Future of Industrial Growth™",
  description: "Technology, Innovation & Operational Agility Will Define the Next Era of Industrial Competitiveness.",
  accent: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-3",
  time: "12:00",
  type: "HIGH-IMPACT PANEL™",
  title: "Women, Industrialisation & the Future of Consumer Economies™",
  description: "The Future of Industrial Growth Will Belong to Businesses That Control Production, Distribution & Consumer Access.",
  accent: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-4",
  time: "12:50",
  type: "NETWORKING LUNCH™",
  title: "Cultivating Partnerships, Industrial Growth & Market Expansion™",
  description: "Which Strategic Relationships Will Accelerate Your Industrial, Retail & Commercial Growth Journey?",
  accent: "#00B4A6",
  accentRgb: "0,180,166",
  isLunch: true
}, {
  id: "ps-5",
  time: "13:20",
  type: "FIRECHAT™",
  title: "Market Access, Procurement & Women-Led Industrial Enterprises™",
  description: "Industrial Growth Without Market Access Is a Missed Commercial Opportunity.",
  accent: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-6",
  time: "14:00",
  type: "STRATEGIC WORKSHOP™",
  title: "The Business of Industrial Innovation, Consumer Growth & Operational Excellence™",
  description: "The Future of Industrial Leadership Will Belong to Businesses That Can Innovate, Adapt & Scale Efficiently.",
  accent: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-7",
  time: "14:40",
  type: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Retail, E-Commerce & the Future of Consumer Engagement™",
  description: "Consumer Behaviour, Technology & Market Access Are Reshaping Africa's Commercial Economy.",
  accent: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-8",
  time: "15:20",
  type: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Industrial & Consumer Economy™",
  description: "Innovation, Industrialisation & Women Leadership Will Shape Africa's Economic Competitiveness.",
  accent: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-9",
  time: "15:50",
  type: "CLOSING KEYNOTE™",
  title: "Africa's Industrial & Consumer Economy Will Be Led by Women Who Build, Manufacture & Scale",
  description: "Will You Be One of the Women Defining Africa's Future Industrial & Commercial Economy?",
  accent: "#FF2D87",
  accentRgb: "255,45,135"
}];
const PROGRAMME_STATS = [{
  id: "stat-1",
  value: "9 Sessions",
  label: "Sessions"
}, {
  id: "stat-2",
  value: "11:00",
  label: "Start"
}, {
  id: "stat-3",
  value: "16:00",
  label: "Close"
}];
const CTA_HEADLINE_WORDS = ["Build.", "Manufacture.", "Scale.", "Lead."];

// ─── Sub-components ────────────────────────────────────────────────────────────
const SectionLabel: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => <div style={{
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
  </div>;

// ─── Main Component ────────────────────────────────────────────────────────────
export const WholesaleRetailManufacturingPillar: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  const programmeRef = React.useRef<HTMLDivElement>(null);
  const colARef = React.useRef<HTMLDivElement>(null);
  const colAInView = useInView(colARef, {
    once: false,
    margin: "-80px",
    amount: 0.1
  });
  return <div style={{
    width: "100%",
    backgroundColor: "#0A0A0F",
    fontFamily: "Figtree, sans-serif",
    color: "#FFFFFF"
  }}>
      <MainNavBar />

      <main>
        {/* ── Hero ── */}
        <IndustrialHeroBanner />

        {/* ── Focus Areas & ROI ── */}
        <section ref={bentoRef} style={{
        paddingTop: "clamp(48px, 8vw, 120px)",
        paddingBottom: "clamp(48px, 8vw, 120px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box"
      }}>
          <SectionLabel>Focus Areas &amp; Strategic ROI</SectionLabel>
          <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 700,
          fontSize: "clamp(24px, 4vw, 52px)",
          color: "#FFFFFF",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          margin: "0 0 clamp(32px, 5vw, 56px) 0",
          maxWidth: "800px"
        }}>
            Building Africa's Industrial &amp; Consumer Future
          </h2>

          <div className="bento-grid">
            {/* Column A — Focus Areas */}
            <motion.div ref={colARef} initial={{
            opacity: 0,
            x: -40
          }} animate={colAInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} style={{
            backgroundColor: "#0D0D14",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(16px, 3vw, 32px)"
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
                margin: 0
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
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer"
              }} className="focus-area-row">
                    <div style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: `${area.accentColor}15`,
                  border: `1px solid ${area.accentColor}30`,
                  flexShrink: 0
                }}>
                      <area.icon size={16} style={{
                    color: area.accentColor
                  }} />
                    </div>
                    <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: 0
                }}>
                      <span style={{
                    fontFamily: "Figtree",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.90)"
                  }}>
                        {area.title}
                      </span>
                      <span style={{
                    fontFamily: "Figtree",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.5
                  }}>
                        {area.description}
                      </span>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Column B — ROI Metrics */}
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
            borderTop: "3px solid #D4AF37"
          }}>
              <ROIMetricBlock title="Industrial ROI & Metrics" metrics={ROI_METRICS} />
            </motion.div>
          </div>
        </section>

        {/* ── Separator ── */}
        <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        boxSizing: "border-box"
      }}>
          <div style={{
          height: "1px",
          background: "linear-gradient(to right, rgba(212,175,55,0.5), rgba(255,45,135,0.2) 50%, rgba(0,180,166,0.5))"
        }} />
        </div>

        {/* ── Programme Section ── */}
        <section id="programme" ref={programmeRef} style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "clamp(64px, 10vw, 128px)",
        paddingBottom: "clamp(64px, 10vw, 128px)",
        paddingLeft: "clamp(16px, 5vw, 32px)",
        paddingRight: "clamp(16px, 5vw, 32px)",
        position: "relative",
        boxSizing: "border-box"
      }}>
          {/* Ambient venue bg */}
          <div aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2835.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          pointerEvents: "none"
        }} />

          <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1024px",
          margin: "0 auto",
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
            fontSize: "clamp(24px, 3.5vw, 44px)",
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            lineHeight: 1.15,
            margin: "0 0 12px 0"
          }}>
              A Day of Industrial Innovation, Consumer Growth &amp; Market Leadership
            </h2>
            <p style={{
            fontFamily: "Figtree, sans-serif",
            color: "rgba(255,255,255,0.45)",
            fontSize: "14px",
            lineHeight: 1.75,
            margin: "0 0 48px 0",
            maxWidth: "720px"
          }}>
              11:00 – 16:00 · Curated for Female CXOs, Entrepreneurs, Retail Executives,
              Manufacturers, Investors, Academia, Policymakers &amp; Future-Focused Professionals
            </p>

            {/* Programme list — single column, px-4 on mobile */}
            <div style={{
            width: "100%",
            maxWidth: "768px",
            margin: "0 auto"
          }}>
              {PROGRAMME.map((session, idx) => {
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
                  delay: idx * 0.06
                }} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(12px, 3vw, 24px)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  margin: "4px 0"
                }}>
                      {/* Time col */}
                      <div style={{
                    width: "clamp(44px, 10vw, 80px)",
                    flexShrink: 0,
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "#00B4A6"
                  }}>
                        {session.time}
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
                      padding: "12px 16px"
                    }}>
                          <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap"
                      }}>
                            <div style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#00B4A6",
                          flexShrink: 0
                        }} />
                            <span style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#00B4A6"
                        }}>
                              {session.type}
                            </span>
                            <span style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#00B4A6",
                          border: "1px solid rgba(0,180,166,0.40)",
                          borderRadius: "4px",
                          padding: "2px 6px"
                        }}>
                              INCLUDED
                            </span>
                          </div>
                          <p style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "clamp(13px, 2vw, 15px)",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        margin: "6px 0 4px 0",
                        lineHeight: 1.3
                      }}>
                            {session.title}
                          </p>
                          <p style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.35)",
                        margin: 0,
                        lineHeight: 1.5
                      }}>
                            {session.description}
                          </p>
                        </div>
                      </div>

                      {/* Number col */}
                      <div style={{
                    width: "clamp(24px, 5vw, 36px)",
                    flexShrink: 0,
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.12)",
                    textAlign: "right"
                  }}>
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </motion.div>;
              }
              const accentColors = ["#FF2D87", "#00B4A6", "#D4AF37"];
              const timeColor = accentColors[idx % accentColors.length];
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
                delay: idx * 0.06
              }} whileHover={{
                backgroundColor: "rgba(255,255,255,0.025)"
              }} style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(12px, 3vw, 24px)",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)"
              }}>
                    {/* Time col */}
                    <div style={{
                  width: "clamp(44px, 10vw, 80px)",
                  flexShrink: 0,
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: timeColor
                }}>
                      {session.time}
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
                    color: session.accent,
                    display: "block"
                  }}>
                        {session.type}
                      </span>
                      <p style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "clamp(13px, 2vw, 15px)",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    margin: "4px 0",
                    lineHeight: 1.3
                  }}>
                        {session.title}
                      </p>
                      <p style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                        {session.description}
                      </p>
                    </div>

                    {/* Number col */}
                    <div style={{
                  width: "clamp(24px, 5vw, 36px)",
                  flexShrink: 0,
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.12)",
                  textAlign: "right"
                }}>
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </motion.div>;
            })}
            </div>

            {/* Stats footer */}
            <div style={{
            maxWidth: "768px",
            margin: "48px auto 0 auto",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px"
          }}>
              {PROGRAMME_STATS.map(stat => <div key={stat.id} style={{
              display: "flex",
              flexDirection: "column"
            }}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 200,
                fontSize: "clamp(24px, 4vw, 32px)",
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1
              }}>
                    {stat.value}
                  </span>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.30)",
                marginTop: "4px"
              }}>
                    {stat.label}
                  </span>
                </div>)}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section style={{
        position: "relative",
        backgroundColor: "#0A0A0F",
        paddingTop: "clamp(64px, 10vw, 140px)",
        paddingBottom: "clamp(64px, 10vw, 140px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        overflow: "hidden",
        boxSizing: "border-box"
      }}>
          {/* Background visuals */}
          <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(255,45,135,0.05) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

          <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          width: "100%"
        }}>
            <SectionLabel>TAKE THE NEXT STEP</SectionLabel>
            <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(32px, 7vw, 80px)",
            lineHeight: 1.05,
            color: "#FFFFFF",
            margin: "24px 0"
          }}>
              {CTA_HEADLINE_WORDS.map((word, i) => <motion.span key={word} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1,
              duration: 0.8
            }} style={{
              display: "inline-block",
              marginRight: "0.2em",
              fontWeight: i === 3 ? 700 : 300
            }}>
                  {word}
                </motion.span>)}
            </h2>
            <p style={{
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "600px",
            margin: "0 auto 48px auto",
            lineHeight: 1.75
          }}>
              Africa's next industrial era will be built by women who own the supply chain, command
              the retail floor, and manufacture the future.
            </p>

            <div className="cta-button-group">
              <button style={{
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 600,
              padding: "16px 40px",
              border: "none",
              cursor: "pointer",
              transition: "filter 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              justifyContent: "center"
            }} onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.1)"} onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}>
                Register — R1,500 <ArrowRight size={18} />
              </button>
              <button style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#FFFFFF",
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 500,
              padding: "16px 40px",
              cursor: "pointer",
              transition: "background 0.2s",
              width: "100%",
              justifyContent: "center"
            }} onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"} onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"}>
                View Full Programme
              </button>
            </div>
          </div>
        </section>

        {/* ── Registration Form ── */}
        <WholesaleRegistrationSection />
      </main>

      <GlobalFooter />

      <style>{`
        /* ── Bento grid ── */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ── CTA buttons ── */
        .cta-button-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        @media (min-width: 480px) {
          .cta-button-group {
            flex-direction: row;
            align-items: center;
            max-width: none;
            width: auto;
          }
          .cta-button-group button {
            width: auto !important;
          }
        }

        /* ── Focus area hover ── */
        .focus-area-row:hover span:first-child {
          color: #FFFFFF !important;
        }
        .focus-area-row:hover div:first-child {
          background-color: rgba(255,255,255,0.1) !important;
        }
      `}</style>
    </div>;
};