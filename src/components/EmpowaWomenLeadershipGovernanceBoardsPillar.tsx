import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Clock, Calendar, Shield, Users, Gavel, Award, Target, Briefcase, Sparkles, BrainCircuit, Landmark, BarChart3, CheckCircle2 } from "lucide-react";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { DelegateRegistrationSection } from "./DelegateRegistrationSection";

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
const FOCUS_AREAS: FocusArea[] = [
  { id: "fa-1", icon: Landmark, title: "Board Leadership", accentColor: "#D4AF37" },
  { id: "fa-2", icon: Shield, title: "Governance Excellence", accentColor: "#D4AF37" },
  { id: "fa-3", icon: Users, title: "Women on Boards", accentColor: "#FF2D87" },
  { id: "fa-4", icon: Award, title: "Ethical Leadership", accentColor: "#FF2D87" },
  { id: "fa-5", icon: Target, title: "Reputation & Stakeholder Trust", accentColor: "#00B4A6" },
  { id: "fa-6", icon: Sparkles, title: "Organisational Transformation", accentColor: "#00B4A6" },
  { id: "fa-7", icon: Briefcase, title: "Succession Planning", accentColor: "#D4AF37" },
  { id: "fa-8", icon: BrainCircuit, title: "Leadership in the AI Era", accentColor: "#00B4A6" }
];

const ROI_METRICS: ROIMetric[] = [
  {
    label: "Board Readiness & Executive Acceleration",
    value: "340+",
    description: "Women leaders accelerated into high-level governance and board positions."
  },
  {
    label: "Governance Intelligence",
    value: "Tier 1",
    description: "Access to global governance frameworks and ethical leadership standards."
  },
  {
    label: "Executive Networking & Mentorship",
    value: "500+",
    description: "Strategic connections with global industry captains and board chairs."
  },
  {
    label: "Reputation Capital Growth",
    value: "92%",
    description: "Average uplift in professional brand authority and stakeholder trust."
  }
];

const PROGRAMME_SESSIONS: ProgrammeSession[] = [
  {
    id: "pn-1",
    time: "11:00",
    format: "OPENING KEYNOTE™",
    title: "Women Must Lead the Future of Leadership, Governance & Institutional Transformation",
    subtitle: "Who Will Shape Africa's Future Leadership, Governance Standards & Strategic Decision-Making Power?",
    accentColor: "#FF2D87"
  },
  {
    id: "pn-2",
    time: "11:20",
    format: "EXECUTIVE MASTERCLASS™",
    title: "Executive Leadership, Board Readiness & the Future of Strategic Influence™",
    subtitle: "How will the future belong to leaders who can influence, adapt, and govern through complexity?",
    accentColor: "#D4AF37"
  },
  {
    id: "pn-3",
    time: "12:00",
    format: "HIGH-IMPACT PANEL™",
    title: "Women, Power & the Future of Governance™",
    subtitle: "Why will the future of governance be defined by ethical leadership, strategic influence, and institutional trust?",
    accentColor: "#00B4A6"
  },
  {
    id: "pn-4",
    time: "12:50",
    format: "NETWORKING LUNCH™",
    title: "Cultivating Influence, Leadership & Strategic Partnerships™",
    subtitle: "Which Relationships, Mentors & Strategic Alliances Will Accelerate Your Leadership Journey?",
    accentColor: "#00B4A6",
    isLunch: true
  },
  {
    id: "pn-5",
    time: "13:20",
    format: "FIRECHAT™",
    title: "Executive Influence, Reputation & Women-Led Leadership™",
    subtitle: "Why does leadership without influence limit long-term institutional impact, and how do we build authority?",
    accentColor: "#FF2D87"
  },
  {
    id: "pn-6",
    time: "14:00",
    format: "STRATEGIC WORKSHOP™",
    title: "The Business of Governance, Ethical Leadership & Institutional Transformation™",
    subtitle: "In what ways will the future of leadership belong to institutions that build trust, accountability, and strategic agility?",
    accentColor: "#00B4A6"
  },
  {
    id: "pn-7",
    time: "14:40",
    format: "HIGH-IMPACT INDUSTRY PANEL™",
    title: "Leadership, Digital Transformation & the Future of Executive Decision-Making™",
    subtitle: "How are technology, innovation, and strategic agility reshaping modern executive leadership?",
    accentColor: "#D4AF37"
  },
  {
    id: "pn-8",
    time: "15:20",
    format: "FUTURE ECONOMY CONVERSATION™",
    title: "The Future of Africa's Leadership, Governance & Board Economy™",
    subtitle: "How will women's leadership, governance excellence, and institutional influence shape Africa's economic future?",
    accentColor: "#FF2D87"
  },
  {
    id: "pn-9",
    time: "15:50",
    format: "CLOSING KEYNOTE™",
    title: "Africa's Leadership & Governance Future Will Be Led by Women Who Influence, Transform & Build",
    subtitle: "Will You Be One of the Women Defining Africa's Future Leadership & Governance Economy?",
    accentColor: "#D4AF37"
  }
];

const STRATEGIC_BENEFITS = [
  { id: "sb-1", label: "Board Readiness & Executive Pathways" },
  { id: "sb-2", label: "Governance Intelligence & Frameworks" },
  { id: "sb-3", label: "Strategic Influence & Decision-Making" },
  { id: "sb-4", label: "Boardroom Diversity & Inclusion" },
  { id: "sb-5", label: "Succession Planning & Talent Pipeline" },
  { id: "sb-6", label: "Risk & Reputation Management" },
  { id: "sb-7", label: "Global Boardroom Connections" },
  { id: "sb-8", label: "Executive Authority & Authority Building" }
];

const HERO_LINES = [
  { id: "hl-1", words: ["Leadership,", "Governance"] },
  { id: "hl-2", words: ["&", "Boards."] }
];

const CTA_HEADLINE_WORDS = ["Lead,", "Govern,", "Influence,", "Transform,", "Now."];

const INDUSTRY_OPTIONS = [
  { id: "ind-1", label: "Corporate Leadership & Executive Management" },
  { id: "ind-2", label: "Board Directorship & Governance" },
  { id: "ind-3", label: "Financial Services & Banking" },
  { id: "ind-4", label: "Government & Public Sector" },
  { id: "ind-5", label: "Legal & Compliance" },
  { id: "ind-6", label: "Institutional Investment" },
  { id: "ind-7", label: "Academia & Research" },
  { id: "ind-8", label: "Non-Profit & Development" },
  { id: "ind-9", label: "Healthcare Leadership" },
  { id: "ind-10", label: "Technology & Innovation" },
  { id: "ind-11", label: "Other" }
];

const HEAR_OPTIONS = [
  { id: "h-1", label: "LinkedIn" },
  { id: "h-2", label: "Colleague Referral" },
  { id: "h-3", label: "Email Newsletter" },
  { id: "h-4", label: "EmpowaWomen Website" },
  { id: "h-5", label: "Google Search" },
  { id: "h-6", label: "Event Partner" },
  { id: "h-7", label: "Other" }
];

const DETAILS_ROWS = [
  { id: "dr-1", label: "Stage", value: "Leadership, Governance & Boards™" },
  { id: "dr-2", label: "Date", value: "Saturday, 29 August 2026" },
  { id: "dr-3", label: "Time", value: "11:00–16:00" },
  { id: "dr-4", label: "Venue", value: "The Forum, The Campus, Bryanston" },
  { id: "dr-5", label: "Investment", value: "R1,500" }
];

const INCLUDES = [
  { id: "inc-1", text: "Full-day Leadership, Governance & Boards Stage access" },
  { id: "inc-2", text: "Premium executive programme (9 sessions)" },
  { id: "inc-3", text: "Board readiness masterclass & NED pathways" },
  { id: "inc-4", text: "Delegate resource pack & recordings" }
];

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
  boxSizing: "border-box"
};

const ACCENT_CYCLE = ["#FF2D87", "#D4AF37", "#00B4A6"];

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

const HeroBanner: React.FC = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
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
        paddingTop: "84px", // Aligned to global nav height
        paddingBottom: "clamp(48px, 8vw, 80px)"
      }}
    >
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
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
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
              "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 40%, rgba(10,10,15,0.92) 100%)"
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1400px",
          paddingLeft: "clamp(16px, 5vw, 36px)",
          paddingRight: "clamp(16px, 5vw, 36px)",
          paddingTop: "clamp(48px, 8vw, 128px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "20px"
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#D4AF37",
                  display: "inline-block",
                  animation: "pulseDot 2s ease-in-out infinite"
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
                Leadership, Governance &amp; Boards Stage™
              </span>
            </motion.div>

            {/* Standardized header fontWeight: 300 */}
            <motion.h1
              style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(40px, 8vw, 96px)",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
                textAlign: "center",
                maxWidth: "1000px",
                margin: "0 auto 24px auto"
              }}
            >
              {HERO_LINES.map(line => (
                <span key={line.id} style={{ display: "block" }}>
                  {line.words.map(word => {
                    const idx = wordIndex++;
                    const isUnderlined = word.includes(".");
                    const cleanWord = isUnderlined ? word.slice(0, -1) : word;
                    return (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + idx * 0.1,
                          ease: [0.21, 0.47, 0.32, 0.98]
                        }}
                        style={{
                          display: "inline-block",
                          marginRight: "0.25em"
                        }}
                      >
                        {isUnderlined ? (
                          <span
                            style={{
                              textDecoration: "underline",
                              textDecorationColor: "#D4AF37",
                              textDecorationThickness: "3px",
                              textUnderlineOffset: "8px"
                            }}
                          >
                            {cleanWord}
                          </span>
                        ) : (
                          word
                        )}
                        {isUnderlined && <span style={{ color: "#D4AF37" }}>.</span>}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ marginBottom: "28px" }}
            >
              <p
                style={{
                  fontFamily: "Figtree",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 2.5vw, 18px)",
                  fontStyle: "italic",
                  color: "#D4AF37",
                  textAlign: "center"
                }}
              >
                'The Future Belongs to Ethical, Adaptive &amp; Visionary Women Leaders.'
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                fontFamily: "Figtree",
                fontSize: "clamp(14px, 2vw, 16px)",
                color: "rgba(255,255,255,0.50)",
                maxWidth: "800px",
                margin: "0 auto 36px auto",
                textAlign: "center",
                lineHeight: 1.75
              }}
            >
              In an era defined by disruption, AI, transformation, and increasing stakeholder expectations, leadership excellence,
              governance integrity, and board readiness have become strategic imperatives for sustainable growth and institutional
              resilience.
            </motion.p>

            {/* Standardized CTA Row: Pill-shaped */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                maxWidth: "320px"
              }}
              className="hero-cta-group"
            >
              <a
                href="#register"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  backgroundColor: "#FF2D87",
                  height: "50px",
                  padding: "0 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  textDecoration: "none",
                  borderRadius: "999px",
                  boxShadow: "0 0 32px rgba(255,45,135,0.2)"
                }}
                className="animate-hover"
              >
                Secure Your Seat <ArrowRight size={16} />
              </a>
              <a
                href="#programme"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  height: "50px",
                  padding: "0 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}
                className="animate-hover"
              >
                Explore Programme
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
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

const StrategicROISection: React.FC = () => {
  return (
    <section
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
        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2
            style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(24px, 4vw, 48px)",
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: "0 0 24px 0",
              maxWidth: "440px"
            }}
          >
            What You Gain as a Delegate
          </h2>
          <p
            style={{
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "380px"
            }}
          >
            Access Africa's premier platform for executive development, boardroom pathways, and governance intelligence.
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
              <span
                style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.01em"
                }}
              >
                {benefit.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProgrammeSection: React.FC = () => {
  return (
    <section
      id="programme"
      style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "clamp(16px, 5vw, 32px)",
        paddingRight: "clamp(16px, 5vw, 32px)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Ambient venue bg */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80')",
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
        <div style={{ marginBottom: "56px" }}>
          <div
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: "#FF2D87",
              marginBottom: "20px"
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
              margin: "0 0 20px 0"
            }}
          >
            HIGH-IMPACT EXECUTIVE PROGRAMME
          </p>
          <h2
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300, // Standardized
              fontSize: "clamp(28px, 4vw, 52px)",
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: "0 0 20px 0"
            }}
          >
            A Day of Leadership, Governance &amp; Strategic Influence
          </h2>
          <p
            style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "720px"
            }}
          >
            11:00 – 16:00 · Curated for Female CXOs, Board Leaders, Entrepreneurs, Executives, Investors, Academia, Policymakers &amp;
            Future-Focused Professionals
          </p>
        </div>

        {/* Programme list */}
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          {PROGRAMME_SESSIONS.map((session, i) => {
            const accent = ACCENT_CYCLE[i % ACCENT_CYCLE.length];
            const sessionNumber = String(i + 1).padStart(2, "0");
            if (session.isLunch) {
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{
                    backgroundColor: "rgba(0,180,166,0.04)",
                    border: "1px solid rgba(0,180,166,0.12)",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    margin: "4px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "24px"
                  }}
                >
                  <div
                    style={{
                      width: "80px",
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
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flexWrap: "wrap"
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#00B4A6",
                        flexShrink: 0,
                        display: "inline-block"
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "15px",
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
                        color: "#00B4A6",
                        backgroundColor: "rgba(0,180,166,0.12)",
                        border: "1px solid rgba(0,180,166,0.25)",
                        borderRadius: "4px",
                        padding: "2px 8px"
                      }}
                    >
                      INCLUDED
                    </span>
                  </div>
                  <span
                    style={{
                      width: "36px",
                      textAlign: "right",
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.12)",
                      flexShrink: 0
                    }}
                  >
                    {sessionNumber}
                  </span>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.025)" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "background-color 200ms ease"
                }}
              >
                {/* Time col */}
                <div
                  style={{
                    width: "80px",
                    flexShrink: 0,
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: accent
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
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: accent,
                      display: "block"
                    }}
                  >
                    {session.format}
                  </span>
                  <h4
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: "4px 0 0 0",
                      lineHeight: 1.35
                    }}
                  >
                    {session.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.35)",
                      margin: "4px 0 0 0",
                      lineHeight: 1.55
                    }}
                  >
                    {session.subtitle}
                  </p>
                </div>

                {/* Number col */}
                <span
                  style={{
                    width: "36px",
                    textAlign: "right",
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.12)",
                    flexShrink: 0
                  }}
                >
                  {sessionNumber}
                </span>
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
            gap: "40px",
            flexWrap: "wrap",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px"
          }}
        >
          {[
            { id: "stat-1", label: "9 Sessions" },
            { id: "stat-2", label: "11:00 Start" },
            { id: "stat-3", label: "16:00 Close" }
          ].map(stat => (
            <div key={stat.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "#FF2D87",
                  display: "inline-block"
                }}
              />
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.50)",
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

// Registration section is now imported from ./DelegateRegistrationSection


export const LeadershipGovernanceBoardStage: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const [bentoInView, setBentoInView] = React.useState(false);

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
        color: "#FFFFFF",
        fontFamily: "'Figtree', sans-serif"
      }}
    >
      <main>
        <HeroBanner />

        {/* ── Focus Areas & ROI ── */}
        <section
          ref={bentoRef}
          style={{
            padding: "100px clamp(16px, 5vw, 96px)",
            maxWidth: "1400px",
            margin: "0 auto"
          }}
        >
          <SectionLabel>Strategic Impact &amp; ROI</SectionLabel>
          <h2
            style={{
              fontFamily: "Figtree",
              fontWeight: 300, // Standardized
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.1,
              marginBottom: "60px",
              maxWidth: "800px"
            }}
          >
            Institutional Resilience Through <span style={{ color: "#D4AF37" }}>Board Excellence</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Focus Areas Bento */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={bentoInView ? { opacity: 1, x: 0 } : {}}
              style={{
                backgroundColor: "#0D0D14",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "40px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                <div
                  style={{
                    width: "3px",
                    height: "28px",
                    backgroundColor: "#FF2D87"
                  }}
                />
                <h3 style={{ fontSize: "20px", fontWeight: 300 }}>Key Focus Areas</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {FOCUS_AREAS.map(area => (
                  <motion.div
                    key={area.id}
                    whileHover={{ x: 6 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)"
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: area.accentColor
                      }}
                    />
                    <area.icon size={16} style={{ color: "rgba(255,255,255,0.3)" }} />
                    <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{area.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ROI Metrics using shared ROIMetricBlock */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={bentoInView ? { opacity: 1, x: 0 } : {}}
              style={{ borderTop: "3px solid #D4AF37", paddingTop: "2px" }}
            >
              <ROIMetricBlock title="Leadership Acceleration Metrics" metrics={ROI_METRICS} />
            </motion.div>
          </div>
        </section>

        {/* ── Separator ── */}
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 96px" }}>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(255,45,135,0.3), rgba(212,175,55,0.3), rgba(0,180,166,0.3))"
            }}
          />
        </div>

        {/* ── Programme Section ── */}
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

        {/* Strategic ROI Checklist Section */}
        <StrategicROISection />

        {/* ── CTA Final ── */}
        <section
          style={{
            position: "relative",
            padding: "140px clamp(16px, 5vw, 96px)",
            backgroundColor: "#0A0A0F",
            textAlign: "center",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%)"
              }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "0 auto" }}>
            <SectionLabel centered>Take The Next Step</SectionLabel>
            <h2
              style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(32px, 6vw, 72px)",
                lineHeight: 1.05,
                marginBottom: "32px"
              }}
            >
              {CTA_HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "inline-block",
                    marginRight: "0.2em",
                    ...(word === "Now."
                      ? {
                        textDecoration: "underline",
                        textDecorationColor: "#FF2D87",
                        textDecorationThickness: "4px",
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
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "48px",
                maxWidth: "600px",
                margin: "0 auto 48px auto",
                lineHeight: 1.6
              }}
            >
              Join the elite collective of women leaders shaping the future of global governance and organizational transformation.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              {/* Standardized: Pill-shaped */}
              <button
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  backgroundColor: "#FF2D87",
                  color: "#FFFFFF",
                  padding: "18px 48px",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  boxShadow: "0 10px 40px rgba(255,45,135,0.3)"
                }}
                className="animate-hover"
              >
                Secure Your Seat
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "18px 48px",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderRadius: "999px",
                  cursor: "pointer"
                }}
                className="animate-hover"
              >
                View Full Programme
              </button>
            </div>
          </div>
        </section>

        {/* ── Registration Section ── */}
        <DelegateRegistrationSection
          stageName="Leadership, Governance & Boards Stage™"
          includes={[
            "Full-day Leadership, Governance & Boards Stage access",
            "Premium executive programme (9 sessions)",
            "Board readiness masterclass & NED pathways",
            "Delegate resource pack & recordings"
          ]}
        />
      </main>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .animate-hover {
          transition: transform 200ms ease, filter 200ms ease, background-color 200ms ease !important;
        }
        .animate-hover:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
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

        /* Responsive Grid Utilities */
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-8 { gap: 2rem; }
        .gap-12 { gap: 3rem; }
        .gap-y-4 { row-gap: 1rem; }
        .gap-x-8 { column-gap: 2rem; }
        
        .hidden { display: none; }
        @media (min-width: 640px) { .sm\\:inline-flex { display: inline-flex; } }
        @media (min-width: 1024px) { .lg\\:flex { display: flex; } .lg\\:hidden { display: none; } }

        .mb-16 { margin-bottom: 4rem; }
        .pt-12 { padding-top: 3rem; }

        /* Hero CTA media query */
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
          }
          .hero-cta-group a {
            width: auto !important;
          }
        }
      `}</style>
    </div>
  );
};
