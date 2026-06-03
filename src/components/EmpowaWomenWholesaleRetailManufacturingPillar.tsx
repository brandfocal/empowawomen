import * as React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Cpu, ShoppingBag, Globe, Link, Truck, MapPin, Zap, Ship, ArrowRight, CheckCircle2 } from "lucide-react";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { WholesaleRegistrationSection } from "./WholesaleDelegateRegistrationSection";

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
const FOCUS_AREAS: FocusArea[] = [
  {
    id: "fa-1",
    icon: Cpu,
    title: "Smart Manufacturing",
    description: "Leveraging automation, Industry 4.0, and smart technologies to build globally competitive production",
    accentColor: "#D4AF37"
  },
  {
    id: "fa-2",
    icon: ShoppingBag,
    title: "Retail Innovation",
    description: "Reshaping consumer experiences through digital, omnichannel, and experiential retail",
    accentColor: "#FF2D87"
  },
  {
    id: "fa-3",
    icon: Globe,
    title: "E-Commerce Growth",
    description: "Building scalable digital commerce platforms and women-led online enterprises",
    accentColor: "#FF2D87"
  },
  {
    id: "fa-4",
    icon: Link,
    title: "Supply Chain Resilience",
    description: "Designing agile, risk-proof supply chains for Africa's future industrial economy",
    accentColor: "#00B4A6"
  },
  {
    id: "fa-5",
    icon: Truck,
    title: "Logistics & Distribution",
    description: "Smart logistics systems driving operational efficiency and market reach",
    accentColor: "#D4AF37"
  },
  {
    id: "fa-6",
    icon: MapPin,
    title: "Localisation",
    description: "Building local production capacity and reducing import dependency across Africa",
    accentColor: "#00B4A6"
  },
  {
    id: "fa-7",
    icon: Zap,
    title: "Industrial Innovation",
    description: "Driving manufacturing competitiveness through technology and process transformation",
    accentColor: "#D4AF37"
  },
  {
    id: "fa-8",
    icon: Ship,
    title: "Export Competitiveness",
    description: "Positioning African products in global markets through quality, branding, and trade readiness",
    accentColor: "#FF2D87"
  }
];

const ROI_METRICS: ROIMetric[] = [
  {
    label: "Industrial Growth & Trade Opportunities",
    value: "R18B+",
    description: "Targeted value of identified industrial and trade pipeline for women-led enterprises."
  },
  {
    label: "Retail & Manufacturing Partnerships",
    value: "180+",
    description: "Strategic off-take agreements and supply chain partnerships established annually."
  },
  {
    label: "Smart Technology Exposure",
    value: "Tier 1",
    description: "Priority access to cutting-edge manufacturing automation and digital retail solutions."
  },
  {
    label: "Export Market Intelligence",
    value: "38+ Markets",
    description: "Comprehensive trade data and quality compliance frameworks for continental expansion."
  }
];

const PROGRAMME: ProgrammeSession[] = [
  {
    id: "ps-1",
    time: "11:00",
    type: "OPENING KEYNOTE™",
    title: "Women Must Lead the Future of Africa's Industrial, Retail & Consumer Economy",
    description: "Who Will Build, Manufacture, Supply & Scale Africa's Next Generation of Competitive Industries?",
    accent: "#FF2D87",
    accentRgb: "255,45,135"
  },
  {
    id: "ps-2",
    time: "11:20",
    type: "EXECUTIVE MASTERCLASS™",
    title: "Smart Manufacturing, Digital Commerce & the Future of Industrial Growth™",
    description: "How will technology, innovation, and operational agility define the next era of industrial competitiveness?",
    accent: "#D4AF37",
    accentRgb: "212,175,55"
  },
  {
    id: "ps-3",
    time: "12:00",
    type: "HIGH-IMPACT PANEL™",
    title: "Women, Industrialisation & the Future of Consumer Economies™",
    description: "Why will the future of industrial growth belong to businesses that control production, distribution, and consumer access?",
    accent: "#00B4A6",
    accentRgb: "0,180,166"
  },
  {
    id: "ps-4",
    time: "12:50",
    type: "NETWORKING LUNCH™",
    title: "Cultivating Partnerships, Industrial Growth & Market Expansion™",
    description: "Which Strategic Relationships Will Accelerate Your Industrial, Retail & Commercial Growth Journey?",
    accent: "#00B4A6",
    accentRgb: "0,180,166",
    isLunch: true
  },
  {
    id: "ps-5",
    time: "13:20",
    type: "FIRECHAT™",
    title: "Market Access, Procurement & Women-Led Industrial Enterprises™",
    description: "Why is industrial growth without market access a missed commercial opportunity, and how do we unlock supply chain partnerships?",
    accent: "#FF2D87",
    accentRgb: "255,45,135"
  },
  {
    id: "ps-6",
    time: "14:00",
    type: "STRATEGIC WORKSHOP™",
    title: "The Business of Industrial Innovation, Consumer Growth & Operational Excellence™",
    description: "In what ways will the future of industrial leadership belong to businesses that can innovate, adapt, and scale efficiently?",
    accent: "#00B4A6",
    accentRgb: "0,180,166"
  },
  {
    id: "ps-7",
    time: "14:40",
    type: "HIGH-IMPACT INDUSTRY PANEL™",
    title: "Retail, E-Commerce & the Future of Consumer Engagement™",
    description: "How are consumer behaviour, technology, and market access reshaping Africa's commercial economy?",
    accent: "#FF2D87",
    accentRgb: "255,45,135"
  },
  {
    id: "ps-8",
    time: "15:20",
    type: "FUTURE ECONOMY CONVERSATION™",
    title: "The Future of Africa's Industrial & Consumer Economy™",
    description: "How will innovation, industrialisation, and women's leadership shape Africa's economic competitiveness?",
    accent: "#D4AF37",
    accentRgb: "212,175,55"
  },
  {
    id: "ps-9",
    time: "15:50",
    type: "CLOSING KEYNOTE™",
    title: "Africa's Industrial & Consumer Economy Will Be Led by Women Who Build, Manufacture & Scale",
    description: "Will You Be One of the Women Defining Africa's Future Industrial & Commercial Economy?",
    accent: "#FF2D87",
    accentRgb: "255,45,135"
  }
];

const PROGRAMME_STATS = [
  { id: "stat-1", value: "9 Sessions", label: "Sessions" },
  { id: "stat-2", value: "11:00", label: "Start" },
  { id: "stat-3", value: "16:00", label: "Close" }
];

const CTA_HEADLINE_WORDS = ["Build.", "Manufacture.", "Scale.", "Lead."];

// ─── Sub-components ────────────────────────────────────────────────────────────
const SectionLabel: React.FC<{
  children: React.ReactNode;
  centered?: boolean;
}> = ({ children, centered }) => (
  <motion.div
    initial={{ opacity: 0, x: centered ? 0 : -20, y: centered ? 10 : 0 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true }}
    style={{
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
    }}
  >
    <span
      style={{
        display: "inline-block",
        width: "24px",
        height: "1.5px",
        backgroundColor: "#FF2D87",
        flexShrink: 0
      }}
    />
    <span>{children}</span>
    {centered && (
      <span
        style={{
          display: "inline-block",
          width: "24px",
          height: "1.5px",
          backgroundColor: "#FF2D87",
          flexShrink: 0
        }}
      />
    )}
  </motion.div>
);

const STRATEGIC_BENEFITS = [
  { id: "sb-1", label: "Industrial Growth & Trade Opportunities" },
  { id: "sb-2", label: "Smart Technology Exposure" },
  { id: "sb-3", label: "Retail & Manufacturing Partnerships" },
  { id: "sb-4", label: "Supply Chain Collaboration" },
  { id: "sb-5", label: "Export Market Intelligence" },
  { id: "sb-6", label: "Operational Innovation" },
  { id: "sb-7", label: "Market Expansion Strategies" },
  { id: "sb-8", label: "Executive Visibility" }
];

const StrategicROISection: React.FC = () => {
  return (
    <section style={{
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
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
            Access Africa's premier platform for retail innovation, smart manufacturing, trade integration, and supply chain excellence.
          </p>
        </motion.div>

        {/* Right: Benefits list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
          {STRATEGIC_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.07 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 0",
                borderBottom: idx < STRATEGIC_BENEFITS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none"
              }}
            >
              <CheckCircle2 size={15} style={{ color: "#FF2D87", flexShrink: 0 }} />
              <span style={{
                fontFamily: "Figtree",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.01em"
              }}>
                {benefit.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const HeroBanner: React.FC = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);

  const heroLines = [
    { id: "hl-1", words: ["Industrial", "Growth."] },
    { id: "hl-2", words: ["Consumer", "Power."] },
    { id: "hl-3", words: ["Scale."] }
  ];
  const underlinedWords = new Set(["Growth.", "Power.", "Scale."]);

  const avatarUrls = [
    { id: "av-1", url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80" },
    { id: "av-2", url: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&q=80" },
    { id: "av-3", url: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&q=80" },
    { id: "av-4", url: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&q=80" },
    { id: "av-5", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80" },
    { id: "av-6", url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80" }
  ];

  let wordIndex = 0;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0A0A0F",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "84px", // Matches standard navbar height
        paddingBottom: "clamp(48px, 8vw, 80px)",
        boxSizing: "border-box"
      }}
    >
      {/* Grain noise overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          opacity: 0.04,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundSize: "256px 256px"
        }}
      />

      {/* Background image with nested parallax layers to prevent jitter */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none"
        }}
      >
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        >
          <motion.div style={{ y: imageY, position: "absolute", inset: 0 }}>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
              alt=""
              aria-hidden="true"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 40%",
                display: "block"
              }}
            />
          </motion.div>
        </motion.div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,10,15,0.65) 0%, rgba(10,10,15,0.35) 40%, rgba(10,10,15,0.90) 100%)"
          }}
        />
      </div>

      {/* Content wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1400px",
          paddingLeft: "clamp(16px, 5vw, 36px)",
          paddingRight: "clamp(16px, 5vw, 36px)",
          paddingTop: "clamp(48px, 8vw, 128px)",
          paddingBottom: "clamp(32px, 5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "clamp(32px, 5vw, 48px)"
            }}
          >
            {/* Pre-heading pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "20px",
                flexWrap: "wrap",
                textAlign: "center",
                paddingLeft: "8px",
                paddingRight: "8px"
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#D4AF37",
                  display: "inline-block",
                  flexShrink: 0
                }}
              />
              <span
                style={{
                  fontFamily: "Figtree",
                  fontSize: "clamp(9px, 2vw, 11px)",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.60)",
                  textTransform: "uppercase"
                }}
              >
                Wholesale, Retail &amp; Manufacturing Stage™
              </span>
            </div>

            {/* Hero headline: Standardised fontWeight: 300 */}
            <h1
              style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(36px, 8vw, 96px)",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
                textAlign: "center",
                maxWidth: "1000px",
                margin: "0 auto 24px auto"
              }}
            >
              {heroLines.map(line => (
                <span key={line.id} style={{ display: "block" }}>
                  {line.words.map(word => {
                    const currentIndex = wordIndex++;
                    const isUnderlined = underlinedWords.has(word);
                    const wordWithoutPeriod = isUnderlined ? word.slice(0, -1) : word;
                    return (
                      <motion.span
                        key={`hero-word-${currentIndex}`}
                        style={{ display: "inline-block", marginRight: "0.25em" }}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + currentIndex * 0.1,
                          ease: [0.21, 0.47, 0.32, 0.98]
                        }}
                      >
                        {isUnderlined ? (
                          <span
                            style={{
                              textDecoration: "underline",
                              textDecorationColor: "#FF2D87",
                              textDecorationThickness: "3px", // Standardised thickness
                              textUnderlineOffset: "8px",     // Standardised offset
                              color: "#FFFFFF"
                            }}
                          >
                            {wordWithoutPeriod}
                          </span>
                        ) : (
                          word
                        )}
                        {isUnderlined && <span style={{ color: "#FF2D87", textDecoration: "none" }}>.</span>}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h1>

            {/* Slogan strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "28px",
                flexWrap: "wrap",
                gap: "4px",
                paddingLeft: "8px",
                paddingRight: "8px"
              }}
            >
              {["Ignite Passion", "Foster Growth", "Drive Change"].map((slogan, i) => (
                <React.Fragment key={slogan}>
                  <span
                    style={{
                      fontFamily: "Figtree",
                      fontWeight: 400,
                      fontSize: "clamp(10px, 2vw, 13px)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.40)"
                    }}
                  >
                    {slogan}
                  </span>
                  {i < 2 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "1px",
                        height: "14px",
                        backgroundColor: "rgba(255,255,255,0.20)",
                        margin: "0 12px",
                        verticalAlign: "middle"
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "Figtree",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.50)",
                maxWidth: "720px",
                margin: "0 auto 36px auto",
                textAlign: "center",
                lineHeight: 1.75,
                paddingLeft: "8px",
                paddingRight: "8px"
              }}
            >
              This stage focuses on the transformation of retail, manufacturing, logistics,
              localisation, and supply chains through innovation, smart technologies, operational
              efficiency, and continental trade integration.
            </p>

            {/* CTAs: Standardised to pill-shaped */}
            <div
              className="hero-cta-group"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: "12px",
                width: "100%",
                maxWidth: "320px",
                paddingLeft: "16px",
                paddingRight: "16px"
              }}
            >
              <a
                href="#registration"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "clamp(13px, 2vw, 15px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  backgroundColor: "#FF2D87",
                  height: "50px",
                  padding: "0 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  borderRadius: "999px", // Standardised pill-shaped
                  transition: "filter 200ms ease-out",
                  boxShadow: "0 0 32px rgba(255,45,135,0.25)",
                  whiteSpace: "nowrap",
                  position: "relative",
                  overflow: "hidden"
                }}
                className="animate-hover"
              >
                <span style={{ position: "relative", zIndex: 1 }}>Register Now</span>
                <ArrowRight size={16} style={{ position: "relative", zIndex: 1 }} />
              </a>
              <a
                href="#programme"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "clamp(13px, 2vw, 15px)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  height: "50px",
                  padding: "0 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.10)",
                  letterSpacing: "0.02em",
                  borderRadius: "999px", // Standardised pill-shaped
                  transition: "all 200ms ease-out",
                  whiteSpace: "nowrap"
                }}
                className="animate-hover"
              >
                View Programme
              </a>
            </div>

            {/* Social proof strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "clamp(24px, 4vw, 40px)",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <div style={{ position: "relative", display: "flex" }}>
                {avatarUrls.map((avatar, index) => (
                  <img
                    key={avatar.id}
                    src={avatar.url}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "2px solid #0A0A0F",
                      objectFit: "cover",
                      marginLeft: index === 0 ? 0 : -10,
                      display: "block"
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "Figtree",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FFFFFF"
                  }}
                >
                  10,000+ Women
                </span>
                <span
                  style={{
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)"
                  }}
                >
                  shaping Africa's industrial future
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 2
        }}
      />
    </section>
  );
};

// ─── Bento Grid Section ───────────────────────────────────────────────────────

const BentoSection: React.FC<{ bentoInView: boolean }> = ({ bentoInView }) => {
  return (
    <section
      id="focus-areas"
      style={{
        paddingTop: "clamp(48px, 8vw, 120px)",
        paddingBottom: "clamp(48px, 8vw, 120px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <SectionLabel>Focus Areas &amp; Strategic ROI</SectionLabel>
      <h2
        style={{
          fontFamily: "Figtree",
          fontWeight: 300, // Standardised elegant heading
          fontSize: "clamp(24px, 4vw, 52px)",
          color: "#FFFFFF",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          margin: "0 0 clamp(32px, 5vw, 56px) 0",
          maxWidth: "800px"
        }}
      >
        Building Africa's Industrial &amp; Consumer Future
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px"
        }}
        className="wrm-bento-grid"
      >
        {/* Column A — Focus Areas */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={bentoInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            backgroundColor: "#0D0D14",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(16px, 3vw, 32px)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
            <div
              style={{
                width: "3px",
                height: "28px",
                backgroundColor: "#D4AF37",
                flexShrink: 0
              }}
            />
            <h3
              style={{
                fontFamily: "Figtree",
                fontSize: "18px",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: 0
              }}
            >
              Key Focus Areas
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {FOCUS_AREAS.map(area => (
              <motion.div
                key={area.id}
                whileHover={{ x: 8 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  cursor: "pointer"
                }}
                className="focus-area-row"
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${area.accentColor}15`,
                    border: `1px solid ${area.accentColor}30`,
                    flexShrink: 0
                  }}
                >
                  <area.icon size={16} style={{ color: area.accentColor }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "Figtree",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.90)"
                    }}
                  >
                    {area.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "Figtree",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.5
                    }}
                  >
                    {area.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Column B — Shared ROIMetricBlock component */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={bentoInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ borderTop: "3px solid #D4AF37" }}
        >
          <ROIMetricBlock title="Industrial ROI & Metrics" metrics={ROI_METRICS} />
        </motion.div>
      </div>
    </section>
  );
};

// ─── Programme Section ────────────────────────────────────────────────────────

const ProgrammeSection: React.FC = () => {
  return (
    <section
      id="programme"
      style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "clamp(64px, 10vw, 128px)",
        paddingBottom: "clamp(64px, 10vw, 128px)",
        paddingLeft: "clamp(16px, 5vw, 32px)",
        paddingRight: "clamp(16px, 5vw, 32px)",
        position: "relative",
        boxSizing: "border-box",
        width: "100%"
      }}
    >
      {/* Ambient venue bg */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2835.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1024px",
          margin: "0 auto",
          width: "100%"
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#FF2D87",
            marginBottom: "16px"
          }}
        />
        <p
          style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            margin: "0 0 16px 0"
          }}
        >
          HIGH-IMPACT EXECUTIVE PROGRAMME
        </p>
        <h2
          style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 3.5vw, 44px)",
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            lineHeight: 1.15,
            margin: "0 0 12px 0"
          }}
        >
          A Day of Industrial Innovation, Consumer Growth &amp; Market Leadership
        </h2>
        <p
          style={{
            fontFamily: "Figtree, sans-serif",
            color: "rgba(255,255,255,0.45)",
            fontSize: "14px",
            lineHeight: 1.75,
            margin: "0 0 48px 0",
            maxWidth: "720px"
          }}
        >
          11:00 – 16:00 · Curated for Female CXOs, Entrepreneurs, Retail Executives,
          Manufacturers, Investors, Academia, Policymakers &amp; Future-Focused Professionals
        </p>

        {/* Programme list */}
        <div style={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
          {PROGRAMME.map((session, idx) => {
            if (session.isLunch) {
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(12px, 3vw, 24px)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    margin: "4px 0"
                  }}
                >
                  {/* Time col */}
                  <div
                    style={{
                      width: "clamp(44px, 10vw, 80px)",
                      flexShrink: 0,
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: "#00B4A6"
                    }}
                  >
                    {session.time}
                  </div>

                  {/* Content col */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        backgroundColor: "rgba(0,180,166,0.04)",
                        border: "1px solid rgba(0,180,166,0.12)",
                        borderRadius: "8px",
                        padding: "12px 16px"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "#00B4A6",
                            flexShrink: 0
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "Figtree, sans-serif",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#00B4A6"
                          }}
                        >
                          {session.type}
                        </span>
                        <span
                          style={{
                            fontFamily: "Figtree, sans-serif",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#00B4A6",
                            border: "1px solid rgba(0,180,166,0.40)",
                            borderRadius: "4px",
                            padding: "2px 6px"
                          }}
                        >
                          INCLUDED
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "clamp(13px, 2vw, 15px)",
                          fontWeight: 500,
                          color: "#FFFFFF",
                          margin: "6px 0 4px 0",
                          lineHeight: 1.3
                        }}
                      >
                        {session.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.35)",
                          margin: 0,
                          lineHeight: 1.5
                        }}
                      >
                        {session.description}
                      </p>
                    </div>
                  </div>

                  {/* Number col */}
                  <div
                    style={{
                      width: "clamp(24px, 5vw, 36px)",
                      flexShrink: 0,
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.12)",
                      textAlign: "right"
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </motion.div>
              );
            }
            const accentColors = ["#FF2D87", "#00B4A6", "#D4AF37"];
            const timeColor = accentColors[idx % accentColors.length];
            return (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.025)" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(12px, 3vw, 24px)",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)"
                }}
              >
                {/* Time col */}
                <div
                  style={{
                    width: "clamp(44px, 10vw, 80px)",
                    flexShrink: 0,
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: timeColor
                  }}
                >
                  {session.time}
                </div>

                {/* Content col */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: session.accent,
                      display: "block"
                    }}
                  >
                    {session.type}
                  </span>
                  <p
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "clamp(13px, 2vw, 15px)",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: "4px 0",
                      lineHeight: 1.3
                    }}
                  >
                    {session.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.35)",
                      margin: 0,
                      lineHeight: 1.5
                    }}
                  >
                    {session.description}
                  </p>
                </div>

                {/* Number col */}
                <div
                  style={{
                    width: "clamp(24px, 5vw, 36px)",
                    flexShrink: 0,
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.12)",
                    textAlign: "right"
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats footer */}
        <div
          style={{
            maxWidth: "768px",
            margin: "48px auto 0 auto",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px"
          }}
        >
          {PROGRAMME_STATS.map(stat => (
            <div key={stat.id} style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontWeight: 200,
                  fontSize: "clamp(24px, 4vw, 32px)",
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  lineHeight: 1
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.30)",
                  marginTop: "4px"
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
export const WholesaleRetailManufacturingPillar: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const [bentoInView, setBentoInView] = React.useState(false);

  // Monitor visibility of the bento section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBentoInView(true);
        }
      },
      { threshold: 0.15 }
    );
    if (bentoRef.current) {
      observer.observe(bentoRef.current);
    }
    return () => {
      if (bentoRef.current) {
        observer.unobserve(bentoRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0A0A0F",
        fontFamily: "Figtree, sans-serif",
        color: "#FFFFFF"
      }}
    >
      <main style={{ width: "100%" }}>
        {/* Hero Section */}
        <HeroBanner />

        {/* Focus Areas & ROI Bento */}
        <div ref={bentoRef}>
          <BentoSection bentoInView={bentoInView} />
        </div>

        {/* Separator Line */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(16px, 5vw, 96px)",
            paddingRight: "clamp(16px, 5vw, 96px)",
            boxSizing: "border-box"
          }}
        >
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(212,175,55,0.5), rgba(255,45,135,0.2) 50%, rgba(0,180,166,0.5))"
            }}
          />
        </div>

        {/* Programme Schedule */}
        <ProgrammeSection />

        {/* Separator Line with Pink Gradient */}
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 96px)"
          }}
        >
          <div
            style={{
              height: "1px",
              background: `linear-gradient(to right, transparent, rgba(255,45,135,0.4) 30%, rgba(212,175,55,0.4) 70%, transparent)`
            }}
          />
        </div>

        <StrategicROISection />

        {/* Take the Next Step CTA */}
        <section
          style={{
            position: "relative",
            backgroundColor: "#0A0A0F",
            paddingTop: "clamp(64px, 10vw, 140px)",
            paddingBottom: "clamp(64px, 10vw, 140px)",
            paddingLeft: "clamp(16px, 5vw, 96px)",
            paddingRight: "clamp(16px, 5vw, 96px)",
            overflow: "hidden",
            boxSizing: "border-box"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 50% 50%, rgba(255,45,135,0.05) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              width: "100%"
            }}
          >
            <SectionLabel centered>TAKE THE NEXT STEP</SectionLabel>
            <h2
              style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(32px, 7vw, 80px)",
                lineHeight: 1.05,
                color: "#FFFFFF",
                margin: "24px 0"
              }}
            >
              {CTA_HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  style={{
                    display: "inline-block",
                    marginRight: "0.2em",
                    fontWeight: 300
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <p
              style={{
                fontFamily: "Figtree",
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "rgba(255,255,255,0.45)",
                maxWidth: "600px",
                margin: "0 auto 48px auto",
                lineHeight: 1.75
              }}
            >
              Africa's next industrial era will be built by women who own the supply chain, command
              the retail floor, and manufacture the future.
            </p>

            <div className="cta-button-group">
              <a
                href="#registration"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  backgroundColor: "#FF2D87",
                  color: "#FFFFFF",
                  fontFamily: "Figtree",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  fontWeight: 600,
                  padding: "16px 40px",
                  border: "none",
                  borderRadius: "999px", // Standardised pill-shaped
                  cursor: "pointer",
                  transition: "filter 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  justifyContent: "center",
                  textDecoration: "none"
                }}
                className="animate-hover"
              >
                Register — R1,500 <ArrowRight size={18} />
              </a>
              <button
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#FFFFFF",
                  fontFamily: "Figtree",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  fontWeight: 500,
                  padding: "16px 40px",
                  borderRadius: "999px", // Standardised pill-shaped
                  cursor: "pointer",
                  transition: "background 0.2s",
                  width: "100%",
                  justifyContent: "center"
                }}
                className="animate-hover"
              >
                View Full Programme
              </button>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <WholesaleRegistrationSection />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');

        .animate-hover {
          transition: transform 200ms ease, filter 200ms ease, background-color 200ms ease !important;
        }
        .animate-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }

        /* ── Bento grid ── */
        .wrm-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 1024px) {
          .wrm-bento-grid {
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
          .cta-button-group a,
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

        /* ── Hero CTA media query ── */
        .hero-cta-group {
          flex-direction: column !important;
          align-items: stretch !important;
          max-width: 320px !important;
          width: 100% !important;
        }
        @media (min-width: 480px) {
          .hero-cta-group {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            max-width: none !important;
            width: auto !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .hero-cta-group a {
            width: auto !important;
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
      `}</style>
    </div>
  );
};
