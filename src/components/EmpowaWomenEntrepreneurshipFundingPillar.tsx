import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Coins, Briefcase, Building2, ClipboardList, Users, Zap, Cpu, Wallet, CheckCircle2 } from "lucide-react";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { DelegateRegistrationSection as SharedDelegateRegistrationSection } from "./DelegateRegistrationSection";

// ─── Constants & Data ─────────────────────────────────────────────────────────

const PRIMARY_ACCENT = "#FF2D87";
const SECONDARY_ACCENT = "#00B4A6";
const TERTIARY_ACCENT = "#D4AF37";
const BG_DARK = "#0A0A0F";

interface FocusArea {
  id: string;
  icon: React.ElementType;
  title: string;
  accent: string;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    id: "fa-1",
    icon: Coins,
    title: "Funding Access",
    accent: PRIMARY_ACCENT
  },
  {
    id: "fa-2",
    icon: Briefcase,
    title: "Venture Capital & Private Equity",
    accent: TERTIARY_ACCENT
  },
  {
    id: "fa-3",
    icon: Building2,
    title: "Enterprise Development",
    accent: PRIMARY_ACCENT
  },
  {
    id: "fa-4",
    icon: ClipboardList,
    title: "Procurement Opportunities",
    accent: SECONDARY_ACCENT
  },
  {
    id: "fa-5",
    icon: Users,
    title: "Women & Youth Entrepreneurship",
    accent: PRIMARY_ACCENT
  },
  {
    id: "fa-6",
    icon: Zap,
    title: "Startup Scaling",
    accent: TERTIARY_ACCENT
  },
  {
    id: "fa-7",
    icon: Cpu,
    title: "Innovation Ecosystems",
    accent: SECONDARY_ACCENT
  },
  {
    id: "fa-8",
    icon: Wallet,
    title: "Financial Inclusion",
    accent: SECONDARY_ACCENT
  }
];

const ROI_METRICS = [
  {
    label: "Investor Access & Funding Opportunities",
    value: "R2.4B+",
    description: "Targeted capital allocation for women-led ventures."
  },
  {
    label: "Procurement & Market Access Integration",
    value: "200+",
    description: "Active corporate procurement channel integrations."
  },
  {
    label: "Entrepreneurial Growth Strategies",
    value: "Tier 1",
    description: "Standardised high-growth scaling frameworks."
  },
  {
    label: "Pan-African Trade Opportunities",
    value: "45+ Markets",
    description: "Direct access to cross-border ecosystem growth."
  }
];

const PROGRAMME_SESSIONS = [
  {
    id: "ps-1",
    time: "11:00",
    format: "OPENING KEYNOTE",
    title: "Women Must Lead the Future of Entrepreneurship, Innovation & Economic Growth",
    subtitle: "Who Will Build, Fund & Scale Africa's Next Generation of Global Enterprises?",
    accentColor: PRIMARY_ACCENT
  },
  {
    id: "ps-2",
    time: "11:20",
    format: "EXECUTIVE MASTERCLASS",
    title: "Funding Readiness, Scaling & the Future of High-Growth Enterprises",
    subtitle: "How will capital flow toward scalable, investment-ready, and future-focused businesses, and how do women prepare?",
    accentColor: TERTIARY_ACCENT
  },
  {
    id: "ps-3",
    time: "12:00",
    format: "HIGH-IMPACT PANEL",
    title: "Women, Capital & the Future of Economic Participation",
    subtitle: "Why will the future economy belong to entrepreneurs with access to capital, markets, and strategic networks?",
    accentColor: SECONDARY_ACCENT
  },
  {
    id: "ps-4",
    time: "12:50",
    format: "NETWORKING LUNCH",
    title: "Cultivating Capital, Partnerships & Enterprise Growth",
    subtitle: "Which Relationships, Investors & Ecosystem Partners Will Accelerate Your Business Growth Journey?",
    accentColor: TERTIARY_ACCENT,
    isLunch: true
  },
  {
    id: "ps-5",
    time: "13:20",
    format: "FIRECHAT",
    title: "Investment, Market Access & Women-Led Enterprises",
    subtitle: "Why is entrepreneurship without scale a missed economic opportunity, and how do we unlock scaling paths?",
    accentColor: PRIMARY_ACCENT
  },
  {
    id: "ps-6",
    time: "14:00",
    format: "STRATEGIC WORKSHOP",
    title: "The Business of Innovation, Commercialisation & Sustainable Enterprise Growth",
    subtitle: "In what ways will the future of entrepreneurship belong to businesses that can innovate, adapt, and scale?",
    accentColor: SECONDARY_ACCENT
  },
  {
    id: "ps-7",
    time: "14:40",
    format: "HIGH-IMPACT INDUSTRY PANEL",
    title: "Procurement, Digital Economies & the Future of Business Growth",
    subtitle: "How will the next generation of high-growth enterprises be built through strategic ecosystems, technology, and market access?",
    accentColor: TERTIARY_ACCENT
  },
  {
    id: "ps-8",
    time: "15:20",
    format: "FUTURE ECONOMY CONVERSATION",
    title: "The Future of Africa's Entrepreneurial Economy & Women-Led Business Transformation",
    subtitle: "How will innovation, investment, and women's leadership shape Africa's economic future?",
    accentColor: PRIMARY_ACCENT
  },
  {
    id: "ps-9",
    time: "15:50",
    format: "CLOSING KEYNOTE",
    title: "Africa's Entrepreneurial Future Will Be Led by Women Who Build, Scale & Transform",
    subtitle: "Will You Be One of the Women Defining Africa's Future Enterprise Economy?",
    accentColor: SECONDARY_ACCENT
  }
];

const STRATEGIC_BENEFITS = [{
  id: "sb-1",
  label: "Investor Access & Funding Opportunities"
}, {
  id: "sb-2",
  label: "Procurement & Market Access Integration"
}, {
  id: "sb-3",
  label: "Entrepreneurial Growth Strategies"
}, {
  id: "sb-4",
  label: "Innovation Commercialisation"
}, {
  id: "sb-5",
  label: "Ecosystem Collaboration"
}, {
  id: "sb-6",
  label: "Pan-African Trade Opportunities"
}, {
  id: "sb-7",
  label: "Leadership Visibility"
}, {
  id: "sb-8",
  label: "Strategic Business Expansion"
}];

const ATTENDEE_LIST = [
  { id: "at-1", label: "Scale-up Founders & Entrepreneurs" },
  { id: "at-2", label: "Venture Capitalists & Angel Investors" },
  { id: "at-3", label: "Corporate ESD & Procurement Leaders" },
  { id: "at-4", label: "DFI Specialists & Development Bankers" },
  { id: "at-5", label: "Business Advisors & Growth Strategists" },
  { id: "at-6", label: "SME Policy Makers & Ecosystem Builders" }
];


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
      <SectionLabel>Strategic ROI</SectionLabel>

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
            Access Africa's premier platform for capital access, venture scaling, and strategic ecosystem connectivity designed for women entrepreneurs and investors.
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
            borderTop: `3px solid ${PRIMARY_ACCENT}`,
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


const PROGRAMME_STATS = [
  { id: "stat-1", label: "9 Sessions" },
  { id: "stat-2", label: "11:00 Start" },
  { id: "stat-3", label: "16:00 Close" }
];

const INCLUDES = [
  { id: "inc-1", text: "Full-day Entrepreneurship & Funding Stage access" },
  { id: "inc-2", text: "Premium executive programme (9 sessions)" },
  { id: "inc-3", text: "Investor matchmaking & deal-making sessions" },
  { id: "inc-4", text: "Delegate resource pack & recordings" }
];

const CTA_HEADLINE_WORDS = ["Build,", "Fund,", "Scale,", "Africa,", "Now."];
const AMBIENT_VENUE_BG = "url('https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2925.jpg')";

// ─── Sub-components ───────────────────────────────────────────────────────────

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
      color: PRIMARY_ACCENT,
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
        backgroundColor: PRIMARY_ACCENT,
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
          backgroundColor: PRIMARY_ACCENT,
          flexShrink: 0
        }}
      />
    )}
  </motion.div>
);

const HeroBanner: React.FC = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: BG_DARK,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "84px", // Matches global navbar height
        paddingBottom: "clamp(48px, 8vw, 80px)",
        boxSizing: "border-box"
      }}
    >
      {/* Noise texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px"
        }}
      />

      {/* Parallax background image with nested layers to prevent jitter */}
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
              src="/partnerships.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%"
              }}
            />
          </motion.div>
        </motion.div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,10,15,0.7) 0%, rgba(10,10,15,0.4) 40%, rgba(10,10,15,0.95) 100%)"
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
          padding: "0 clamp(16px, 5vw, 36px)",
          textAlign: "center",
          boxSizing: "border-box"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Eyebrow */}
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: PRIMARY_ACCENT,
                margin: "0 0 16px 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center"
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1.5px",
                  backgroundColor: PRIMARY_ACCENT,
                  flexShrink: 0
                }}
              />
              <span>ENTREPRENEURSHIP & FUNDING STAGE</span>
            </div>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(36px, 8vw, 96px)",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              maxWidth: "1100px",
              margin: "0 auto 28px auto"
            }}
          >
            <span>{"Africa's Economic Future Will Be Built by "}</span>
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: PRIMARY_ACCENT,
                textDecorationThickness: "3px",
                textUnderlineOffset: "8px"
              }}
            >
              Entrepreneurs
            </span>
            <span>{", "}</span>
            <span style={{ color: PRIMARY_ACCENT }}>Innovation</span>
            <span>{" & Access to "}</span>
            <span style={{ color: PRIMARY_ACCENT }}>Capital.</span>
          </h1>

          {/* Meta chips */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
              flexWrap: "wrap"
            }}
          >
            {["Ignite Passion", "Foster Growth", "Drive Change"].map((tag, i) => (
              <React.Fragment key={tag}>
                <span
                  style={{
                    fontFamily: "Figtree",
                    fontSize: "clamp(10px, 2vw, 13px)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)"
                  }}
                >
                  {tag}
                </span>
                {i < 2 && (
                  <div
                    style={{
                      width: "1px",
                      height: "14px",
                      backgroundColor: "rgba(255,255,255,0.2)"
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Body Paragraph */}
          <p
            style={{
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 2vw, 17px)",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "780px",
              margin: "0 auto 40px auto",
              lineHeight: 1.7
            }}
          >
            Entrepreneurship remains one of the most powerful drivers of economic transformation, job creation, innovation, and
            inclusive growth across Africa. This stage convenes female entrepreneurs, investors, corporates, DFIs, venture capital
            firms, accelerators, ecosystem builders, academia, and policymakers to unlock scalable growth, funding access,
            procurement opportunities, and strategic partnerships.
          </p>

          {/* CTA Group: Standardised with pill-shaped borderRadius */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              width: "100%"
            }}
            className="hero-cta-row"
          >
            <a
              href="#registration"
              onClick={e => {
                e.preventDefault();
                document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                backgroundColor: PRIMARY_ACCENT,
                color: "#FFFFFF",
                height: "54px",
                padding: "0 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
                fontFamily: "Figtree",
                fontSize: "15px",
                fontWeight: 500,
                borderRadius: "999px",
                boxShadow: `0 0 32px rgba(255,45,135,0.25)`,
                width: "100%",
                maxWidth: "340px",
                boxSizing: "border-box"
              }}
              className="hero-cta-btn animate-hover"
            >
              <span>Secure Your Seat</span> <ArrowRight size={18} />
            </a>
            <a
              href="#focus-areas"
              onClick={e => {
                e.preventDefault();
                document.getElementById("focus-areas")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#FFFFFF",
                height: "54px",
                padding: "0 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontFamily: "Figtree",
                fontSize: "15px",
                borderRadius: "999px",
                width: "100%",
                maxWidth: "340px",
                boxSizing: "border-box"
              }}
              className="hero-cta-btn animate-hover"
            >
              Explore Focus Areas
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom overlay fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #0A0A0F 0%, transparent 40%)",
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
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(64px, 10vw, 120px) clamp(16px, 5vw, 96px)",
        boxSizing: "border-box"
      }}
    >
      <SectionLabel>Strategic Impact & Focus</SectionLabel>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <h2
          style={{
            fontFamily: "Figtree",
            fontWeight: 300, // Standardised elegant heading
            fontSize: "clamp(28px, 4.5vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 clamp(40px, 6vw, 60px) 0",
            maxWidth: "800px"
          }}
        >
          Accelerating the Future of Women-Led High-Growth Enterprises
        </h2>
      </div>

      {/* Realigned Bento Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px"
        }}
        className="entrepreneurship-bento-grid"
      >
        {/* Left Column: Focus Areas */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={bentoInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            backgroundColor: "#0D0D14",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(24px, 4vw, 40px)",
            display: "flex",
            flexDirection: "column",
            gap: "32px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "3px",
                height: "24px",
                backgroundColor: PRIMARY_ACCENT
              }}
            />
            <h3
              style={{
                fontFamily: "Figtree",
                fontSize: "20px",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                margin: 0
              }}
            >
              Key Focus Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {FOCUS_AREAS.map(area => (
              <motion.div
                key={area.id}
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  cursor: "pointer"
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: area.accent,
                    flexShrink: 0
                  }}
                />
                <area.icon
                  size={18}
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    flexShrink: 0
                  }}
                />
                <span
                  style={{
                    fontFamily: "Figtree",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 0.2s"
                  }}
                >
                  {area.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Shared ROIMetricBlock component */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={bentoInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ borderTop: `3px solid ${TERTIARY_ACCENT}` }}
        >
          <ROIMetricBlock title="Partner Value & ROI Metrics" metrics={ROI_METRICS} />
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
        backgroundColor: BG_DARK,
        padding: "clamp(64px, 10vw, 128px) clamp(16px, 5vw, 32px)",
        position: "relative",
        boxSizing: "border-box",
        width: "100%"
      }}
    >
      {/* Ambient venue background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: AMBIENT_VENUE_BG,
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
          maxWidth: "80rem",
          margin: "0 auto"
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
          <div
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: PRIMARY_ACCENT,
              margin: "0 auto 20px auto"
            }}
          />
          <p
            style={{
              fontFamily: "Figtree, sans-serif",
              textTransform: "uppercase",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
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
              margin: "0 0 16px 0"
            }}
          >
            A Day of Capital, Innovation & Enterprise Growth
          </h2>
          <p
            style={{
              fontFamily: "Figtree, sans-serif",
              color: "rgba(255,255,255,0.45)",
              fontSize: "14px",
              lineHeight: 1.75,
              margin: "0 auto",
              maxWidth: "680px"
            }}
          >
            11:00 – 16:00 · Curated for Female CXOs, Entrepreneurs, Investors, DFIs, Venture Capitalists, Academia, Policymakers &
            Future-Focused Professionals
          </p>
        </div>

        {/* Sessions list */}
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          {PROGRAMME_SESSIONS.map((session, i) => {
            if (session.isLunch) {
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ backgroundColor: "rgba(0,180,166,0.06)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(12px, 3vw, 24px)",
                    backgroundColor: "rgba(0,180,166,0.04)",
                    border: "1px solid rgba(0,180,166,0.12)",
                    borderRadius: "8px",
                    padding: "12px clamp(12px, 2vw, 16px)",
                    margin: "4px 0",
                    cursor: "default"
                  }}
                >
                  <div style={{ width: "52px", flexShrink: 0 }}>
                    <span
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        color: SECONDARY_ACCENT
                      }}
                    >
                      {session.time}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: SECONDARY_ACCENT,
                          flexShrink: 0
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "clamp(13px, 2vw, 15px)",
                          fontWeight: 500,
                          color: "#FFFFFF"
                        }}
                      >
                        {session.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "Figtree, sans-serif",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: SECONDARY_ACCENT,
                          backgroundColor: "rgba(0,180,166,0.12)",
                          border: "1px solid rgba(0,180,166,0.25)",
                          borderRadius: "999px",
                          padding: "2px 10px"
                        }}
                      >
                        INCLUDED
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.35)",
                        margin: "4px 0 0 18px",
                        lineHeight: 1.5
                      }}
                    >
                      {session.subtitle}
                    </p>
                  </div>
                  <div style={{ width: "28px", flexShrink: 0, textAlign: "right" }}>
                    <span
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.12)"
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.025)" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(12px, 3vw, 24px)",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "clamp(4px, 1vw, 8px)",
                  paddingRight: "clamp(4px, 1vw, 8px)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "default",
                  borderRadius: "4px"
                }}
              >
                <div style={{ width: "52px", flexShrink: 0 }}>
                  <span
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      color: session.accentColor
                    }}
                  >
                    {session.time}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: session.accentColor,
                      display: "block"
                    }}
                  >
                    {session.format}
                  </span>
                  <p
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "clamp(13px, 2vw, 15px)",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: "4px 0 0 0",
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
                      margin: "4px 0 0 0",
                      lineHeight: 1.5
                    }}
                  >
                    {session.subtitle}
                  </p>
                </div>
                <div style={{ width: "28px", flexShrink: 0, textAlign: "right" }}>
                  <span
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.12)"
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats footer */}
        <div
          style={{
            maxWidth: "48rem",
            margin: "48px auto 0 auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "clamp(16px, 5vw, 80px)",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          {PROGRAMME_STATS.map(stat => (
            <div key={stat.id} style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "clamp(12px, 2vw, 14px)",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.04em"
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

// ─── Registration Section ─────────────────────────────────────────────────────

const DelegateRegistrationSection: React.FC = () => {
  return (
    <SharedDelegateRegistrationSection
      stageName="Entrepreneurship & Funding Stage"
      includes={INCLUDES.map(inc => inc.text)}
    />
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const EntrepreneurshipFundingPillar: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
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
        backgroundColor: BG_DARK,
        color: "#FFFFFF"
      }}
    >
      <main style={{ width: "100%" }}>
        <HeroBanner />

        {/* Bento Grid: Focus Areas & ROI */}
        <div ref={bentoRef}>
          <BentoSection bentoInView={bentoInView} />
        </div>

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
              background: `linear-gradient(to right, transparent, rgba(255,45,135,0.3) 50%, transparent)`
            }}
          />
        </div>

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

        {/* Take the Next Step CTA Section */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "clamp(80px, 15vw, 160px) clamp(16px, 5vw, 96px)",
            textAlign: "center",
            boxSizing: "border-box",
            width: "100%"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1573161559521-4830bb58ebff?w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
              filter: "grayscale(1) brightness(0.5)",
              zIndex: 0
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at center, transparent 0%, ${BG_DARK} 100%)`,
              zIndex: 0
            }}
          />

          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1
            }}
          >
            <div
              style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: PRIMARY_ACCENT,
                margin: "0 0 24px 0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center"
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1.5px",
                  backgroundColor: PRIMARY_ACCENT
                }}
              />
              <span>Take the Next Step</span>
            </div>
            <h2
              style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(40px, 8vw, 96px)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                marginBottom: "32px"
              }}
            >
              {CTA_HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={`cta-${word}-${i}`}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "inline-block",
                    marginRight: "0.2em",
                    ...(word === "Now."
                      ? {
                          textDecoration: "underline",
                          textDecorationColor: PRIMARY_ACCENT,
                          textUnderlineOffset: "8px"
                        }
                      : {})
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <p
              style={{
                fontFamily: "Figtree",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "600px",
                margin: "0 auto 48px auto",
                lineHeight: 1.6
              }}
            >
              The future of Africa's entrepreneurial economy is women-led. Secure your place at the forefront of this transformation.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                width: "100%"
              }}
              className="cta-btn-row"
            >
              <a
                href="#registration"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  backgroundColor: PRIMARY_ACCENT,
                  color: "#FFFFFF",
                  padding: "20px 48px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  borderRadius: "999px", // Standardised pill-shaped
                  boxShadow: `0 0 40px ${PRIMARY_ACCENT}44`,
                  width: "100%",
                  maxWidth: "340px",
                  boxSizing: "border-box",
                  textAlign: "center"
                }}
                className="cta-btn animate-hover"
              >
                Secure Your Seat Now
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
                  padding: "20px 48px",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "999px", // Standardised pill-shaped
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "340px",
                  boxSizing: "border-box"
                }}
                className="cta-btn animate-hover"
              >
                View Full Agenda
              </button>
            </div>
          </div>
        </section>

        <DelegateRegistrationSection />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        
        .animate-hover {
          transition: transform 200ms ease, filter 200ms ease, background-color 200ms ease !important;
        }
        .animate-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }

        /* Hero CTA buttons: stacked on mobile, row on sm+ */
        @media (min-width: 640px) {
          .hero-cta-row { flex-direction: row !important; }
          .hero-cta-btn { width: auto !important; max-width: none !important; }
        }

        /* Bento: 1 col mobile, 2 col lg+ */
        @media (max-width: 1024px) {
          .entrepreneurship-bento-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }

        /* Registration */
        @media (min-width: 1024px) {
          .reg-layout { flex-direction: row !important; }
          .reg-card-col {
            width: 420px !important;
            position: sticky;
            top: 100px;
            align-self: flex-start;
          }
        }
        @media (min-width: 640px) {
          .reg-name-row { flex-direction: row !important; }
          .reg-company-row { flex-direction: row !important; }
        }

        /* CTA section buttons: stacked on mobile, row on sm+ */
        @media (min-width: 640px) {
          .cta-btn-row { flex-direction: row !important; }
          .cta-btn { width: auto !important; max-width: none !important; }
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
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        select option { background-color: #111118; }
        img { max-width: 100%; }
      `}</style>
    </div>
  );
};
