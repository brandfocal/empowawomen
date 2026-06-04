import * as React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, Calendar, Globe, Zap, MessageSquare, Award, Users, ShieldCheck, Smartphone, TrendingUp, Tv, Cpu, Target, Check, CheckCircle2 } from "lucide-react";
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
  accentRgb?: string;
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

// ─── Data & Constants ─────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Cpu,
  title: "AI-Powered Marketing",
  accentColor: "#FF2D87"
}, {
  id: "fa-2",
  icon: Users,
  title: "Consumer Behaviour & Intelligence",
  accentColor: "#00B4A6"
}, {
  id: "fa-3",
  icon: MessageSquare,
  title: "Strategic Communications",
  accentColor: "#FF2D87"
}, {
  id: "fa-4",
  icon: Award,
  title: "Brand Leadership",
  accentColor: "#D4AF37"
}, {
  id: "fa-5",
  icon: Smartphone,
  title: "Creator & Influencer Economies",
  accentColor: "#FF2D87"
}, {
  id: "fa-6",
  icon: ShieldCheck,
  title: "Digital PR & Reputation Management",
  accentColor: "#00B4A6"
}, {
  id: "fa-7",
  icon: Tv,
  title: "Media Innovation",
  accentColor: "#D4AF37"
}, {
  id: "fa-8",
  icon: TrendingUp,
  title: "Commercial Brand Expansion",
  accentColor: "#00B4A6"
}];

const ROI_METRICS: ROIMetric[] = [{
  label: "Brand Visibility & Executive Positioning",
  value: "88%+",
  description: "Enhanced global market presence and executive voice for women-led brands."
}, {
  label: "Strategic Media Partnerships",
  value: "150+",
  description: "High-value cross-border media and advertising collaboration agreements."
}, {
  label: "Consumer Intelligence Insights",
  value: "Tier 1",
  description: "Access to priority data and predictive analytics for African market landscapes."
}, {
  label: "Commercial Brand Expansion",
  value: "R6.5B+",
  description: "Projected economic impact and revenue growth within the media ecosystem."
}];

const PROGRAMME_SESSIONS: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00",
  format: "OPENING KEYNOTE™",
  title: "Women Must Lead the Future of Africa's Influence, Media & Communications Economy",
  subtitle: "Who Will Shape Africa's Consumer Influence, Brand Narratives & Media Power in the Digital Era?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS™",
  title: "AI, Digital Media & the Future of Brand Influence™",
  subtitle: "How will technology, consumer intelligence, and digital platforms define the next era of brand growth?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL™",
  title: "Women, Media & the Future of Brand Power™",
  subtitle: "Why will the future of marketing belong to brands that build trust, influence, and cultural relevance?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-4",
  time: "12:50",
  format: "NETWORKING LUNCH™",
  title: "Cultivating Influence, Partnerships & Brand Growth™",
  subtitle: "Which Strategic Relationships Will Accelerate Your Media, Marketing & Brand Leadership Journey?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55",
  isLunch: true
}, {
  id: "ps-5",
  time: "13:20",
  format: "FIRECHAT™",
  title: "Brand Commercialisation, Digital Influence & Market Expansion™",
  subtitle: "Why does visibility without a commercial strategy limit growth, and how can brands capitalize on it?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP™",
  title: "The Business of Consumer Influence, Storytelling & Brand Monetisation™",
  subtitle: "In what ways will the future of brand growth belong to organisations that understand culture, data, and consumer trust?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Advertising, Digital Culture & the Future of Consumer Engagement™",
  subtitle: "How are consumer attention, culture, and digital influence becoming high-value commercial assets?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Communications, Media & Influence Economy™",
  subtitle: "How will innovation, storytelling, and women's leadership shape the future of Africa's global brand influence?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-9",
  time: "15:50",
  format: "CLOSING KEYNOTE™",
  title: "Africa's Communications & Influence Economy Will Be Led by Women Who Build, Influence & Transform",
  subtitle: "Will You Be One of the Women Defining Africa's Future Brand, Media & Consumer Economy?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}];

const STRATEGIC_BENEFITS = [
  { id: "sb-1", label: "Brand Visibility & Executive Positioning" },
  { id: "sb-2", label: "Strategic Media Partnerships" },
  { id: "sb-3", label: "Consumer Intelligence Insights" },
  { id: "sb-4", label: "Digital Reputation Management" },
  { id: "sb-5", label: "Creator Economy Collaboration" },
  { id: "sb-6", label: "Marketing Innovation Exposure" },
  { id: "sb-7", label: "Thought Leadership Opportunities" },
  { id: "sb-8", label: "Commercial Brand Expansion" }
];

const ATTENDEE_LIST = [
  { id: "at-1", label: "CMOs & Brand Executives" },
  { id: "at-2", label: "Media Owners & Publishers" },
  { id: "at-3", label: "Advertising & Marketing Directors" },
  { id: "at-4", label: "PR Specialists & Reputation Managers" },
  { id: "at-5", label: "Digital Strategists & Creator Leaders" },
  { id: "at-6", label: "Communications Directors & Spokespersons" }
];


const AVATAR_URLS: { id: string; url: string }[] = [
  { id: "av-1", url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80" },
  { id: "av-2", url: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&q=80" },
  { id: "av-3", url: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&q=80" },
  { id: "av-4", url: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&q=80" },
  { id: "av-5", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80" },
  { id: "av-6", url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80" }
];

const HERO_LINES = [{
  id: "hl-1",
  words: ["Shape", "Africa's"]
}, {
  id: "hl-2",
  words: ["Brand", "Narrative."]
}];

const CTA_HEADLINE_WORDS = ["Shape", "Africa's", "Brand", "Narrative", "Now."];

const INDUSTRY_OPTIONS = [{
  id: "ind-1",
  label: "Advertising & Creative Agencies"
}, {
  id: "ind-2",
  label: "Digital Marketing & SEO"
}, {
  id: "ind-3",
  label: "Public Relations & Communications"
}, {
  id: "ind-4",
  label: "Broadcasting & Television"
}, {
  id: "ind-5",
  label: "Print & Digital Media"
}, {
  id: "ind-6",
  label: "Social Media & Influencer Economy"
}, {
  id: "ind-7",
  label: "Brand Management & Strategy"
}, {
  id: "ind-8",
  label: "Content Creation & Publishing"
}, {
  id: "ind-9",
  label: "Market Research & Consumer Intelligence"
}, {
  id: "ind-10",
  label: "Technology & MarTech"
}, {
  id: "ind-11",
  label: "Academia & Research"
}, {
  id: "ind-12",
  label: "Other"
}];

const HEAR_OPTIONS = [{
  id: "h-1",
  label: "LinkedIn"
}, {
  id: "h-2",
  label: "Colleague Referral"
}, {
  id: "h-3",
  label: "Email Newsletter"
}, {
  id: "h-4",
  label: "EmpowaWomen Website"
}, {
  id: "h-5",
  label: "Google Search"
}, {
  id: "h-6",
  label: "Event Partner"
}, {
  id: "h-7",
  label: "Other"
}];

const DETAILS_ROWS = [{
  id: "dr-1",
  label: "Stage",
  value: "Communications, Advertising, Marketing & Media™"
}, {
  id: "dr-2",
  label: "Date",
  value: "Saturday, 29 August 2026"
}, {
  id: "dr-3",
  label: "Time",
  value: "11:00 – 16:00"
}, {
  id: "dr-4",
  label: "Venue",
  value: "The Forum, The Campus, Bryanston"
}, {
  id: "dr-5",
  label: "Investment",
  value: "R1,500"
}];

const INCLUDES = [{
  id: "inc-1",
  text: "Full-day CAMM Stage access"
}, {
  id: "inc-2",
  text: "Premium executive programme (9 sessions)"
}, {
  id: "inc-3",
  text: "Brand & media matchmaking"
}, {
  id: "inc-4",
  text: "Delegate resource pack & recordings"
}];

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
  color?: string;
}> = ({ children, centered, color = "#FF2D87" }) => (
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
      color: color,
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
        backgroundColor: color,
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
          backgroundColor: color,
          flexShrink: 0
        }}
      />
    )}
  </motion.div>
);

const CommunicationsHero: React.FC = () => {
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

      {/* Background image */}
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
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80"
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
                marginBottom: "20px",
                textAlign: "center"
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#FF2D87",
                  display: "inline-block"
                }}
              />
              <span
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "clamp(9px, 2vw, 11px)",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.60)",
                  textTransform: "uppercase"
                }}
              >
                Communications, Advertising, Marketing &amp; Media Stage™
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(40px, 9vw, 96px)",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
                textAlign: "center",
                maxWidth: "900px",
                margin: "0 auto 24px auto"
              }}
            >
              {HERO_LINES.map(line => (
                <span key={line.id} style={{ display: "block" }}>
                  {line.words.map(word => {
                    const currentIndex = wordIndex++;
                    const isUnderlined = word.includes(".");
                    const cleanWord = isUnderlined ? word.slice(0, -1) : word;
                    return (
                      <motion.span
                        key={`hero-word-${currentIndex}`}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + currentIndex * 0.1,
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
                              textDecorationColor: "#FF2D87",
                              textDecorationThickness: "3px",
                              textUnderlineOffset: "8px",
                              color: "#FFFFFF"
                            }}
                          >
                            {cleanWord}
                          </span>
                        ) : (
                          word
                        )}
                        {isUnderlined && <span style={{ color: "#FF2D87" }}>.</span>}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "28px",
                gap: "12px",
                color: "rgba(255,255,255,0.40)",
                textTransform: "uppercase",
                fontSize: "clamp(10px, 2vw, 13px)",
                letterSpacing: "0.18em"
              }}
            >
              <span>'Brands That Shape Culture Will Shape Markets.'</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.60)",
                maxWidth: "780px",
                margin: "0 auto 36px auto",
                textAlign: "center",
                lineHeight: 1.75
              }}
            >
              As consumer behaviour, technology, media consumption, and digital ecosystems continue to evolve, strategic communications, storytelling, brand influence, and reputation management have become central to commercial growth and market leadership. This platform explores the future of media, strategic communications, digital influence, AI-powered marketing, consumer intelligence, and brand leadership within a rapidly changing global marketplace.
            </motion.p>

            {/* Standardised CTAs with pill shapes */}
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
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "clamp(13px, 2vw, 15px)",
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
                  letterSpacing: "0.02em",
                  borderRadius: "999px",
                  boxShadow: "0 0 32px rgba(255,45,135,0.25)",
                  transition: "all 200ms"
                }}
                className="animate-hover"
              >
                <span>Secure Your Seat</span> <ArrowRight size={16} />
              </a>
              <a
                href="#programme"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "clamp(13px, 2vw, 15px)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  height: "50px",
                  padding: "0 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.10)",
                  letterSpacing: "0.02em",
                  borderRadius: "999px",
                  transition: "all 200ms"
                }}
                className="animate-hover"
              >
                Explore Sessions
              </a>
            </motion.div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "clamp(24px, 4vw, 40px)"
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex"
                }}
              >
                {AVATAR_URLS.map((avatar, index) => (
                  <img
                    key={avatar.id}
                    src={avatar.url}
                    alt=""
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "2px solid #0A0A0F",
                      objectFit: "cover",
                      marginLeft: index === 0 ? 0 : -10
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px"
                }}
              >
                <span
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FFFFFF"
                  }}
                >
                  10,000+ Women
                </span>
                <span
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.45)"
                  }}
                >
                  shaping Africa's media landscape
                </span>
              </div>
            </div>
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
            Access Africa's premier platform for executive visibility, brand expansion, and media intelligence.
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


const CommunicationsRegistrationSection: React.FC = () => {
  return (
    <DelegateRegistrationSection
      stageName="Communications, Advertising, Marketing & Media Stage™"
      includes={[
        "Full-day CAMM Stage access",
        "Premium executive programme (9 sessions)",
        "Brand & media matchmaking",
        "Delegate resource pack & recordings"
      ]}
    />
  );
};

const ProgrammeSection: React.FC = () => {
  const programmeRef = React.useRef<HTMLDivElement>(null);
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
          backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
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
        {/* Section header */}
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
              margin: "0 0 16px 0"
            }}
          >
            HIGH-IMPACT EXECUTIVE PROGRAMME
          </p>
          <h2
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: "0 0 16px 0"
            }}
          >
            A Day of Influence, Brand Power &amp; Media Leadership
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
            11:00 – 16:00 · Curated for Female CXOs, Marketing Executives, Media Leaders, Entrepreneurs, Creatives, Investors, Academia, Policymakers &amp; Future-Focused Professionals
          </p>
        </div>

        {/* Programme list */}
        <div
          ref={programmeRef}
          style={{
            maxWidth: "48rem",
            margin: "0 auto"
          }}
        >
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

// ─── Main Component ────────────────────────────────────────────────────────────
export const CommunicationsPillarPage: React.FC = () => {
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
        <CommunicationsHero />

        {/* Bento Grid Focus Areas & Metrics */}
        <section
          ref={bentoRef}
          style={{
            paddingTop: "clamp(64px, 10vw, 120px)",
            paddingBottom: "clamp(64px, 10vw, 120px)",
            paddingLeft: "clamp(16px, 5vw, 96px)",
            paddingRight: "clamp(16px, 5vw, 96px)",
            maxWidth: "1400px",
            margin: "0 auto"
          }}
        >
          <SectionLabel>Focus Areas &amp; Commercial Impact</SectionLabel>
          <h2
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300, // Thin styling default
              fontSize: "clamp(24px, 4vw, 52px)",
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              margin: "0 0 clamp(32px, 5vw, 56px) 0",
              maxWidth: "800px"
            }}
          >
            Driving Market Leadership through <span style={{ color: "#D4AF37" }}>Cultural Influence</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Column A: Focus Areas */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={bentoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{
                backgroundColor: "#0D0D14",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "clamp(20px, 3vw, 40px)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                <div style={{ width: "3px", height: "28px", backgroundColor: "#FF2D87", flexShrink: 0 }} />
                <h3 style={{ fontFamily: "Figtree, sans-serif", fontSize: "20px", fontWeight: 300, margin: 0 }}>
                  Strategic Focus Pillars
                </h3>
              </div>
              <div className="flex flex-col gap-1">
                {FOCUS_AREAS.map(area => (
                  <motion.div
                    key={area.id}
                    whileHover={{ x: 8 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: area.accentColor, flexShrink: 0 }} />
                    <area.icon size={18} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
                    <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", transition: "color 0.2s" }} className="hover:text-white">
                      {area.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Column B: ROI Metrics Block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={bentoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ borderTop: "4px solid #D4AF37", paddingTop: "2px" }}
            >
              <ROIMetricBlock title="Commercial ROI &amp; Brand Growth" metrics={ROI_METRICS} />
            </motion.div>
          </div>
        </section>

        {/* Separator Line */}
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px, 5vw, 96px)" }}>
          <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,45,135,0.5), rgba(212,175,55,0.2) 50%, rgba(0,180,166,0.5))" }} />
        </div>

        {/* Programme Section */}
        <ProgrammeSection />

        {/* Separator Line */}
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(16px, 5vw, 96px)" }}>
          <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,45,135,0.3), rgba(212,175,55,0.3), rgba(0,180,166,0.3))" }} />
        </div>

        {/* Strategic ROI Checklist Section */}
        <StrategicROISection />

        {/* ── Final CTA Section ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#0A0A0F",
            padding: "clamp(80px, 12vw, 160px) clamp(16px, 5vw, 96px)",
            textAlign: "center"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "1400px",
              aspectRatio: "2/1",
              opacity: 0.2,
              pointerEvents: "none"
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
                backgroundSize: "cover",
                maskImage: "linear-gradient(to top, transparent, black)",
                WebkitMaskImage: "linear-gradient(to top, transparent, black)"
              }}
            />
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto" }}>
            <SectionLabel centered color="#D4AF37">Collaborate &amp; Expand</SectionLabel>
            <h2
              style={{
                fontFamily: "Figtree, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(32px, 8vw, 88px)",
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
                marginBottom: "32px"
              }}
            >
              {CTA_HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={`footer-cta-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "inline-block",
                    marginRight: "0.2em",
                    ...(word === "Now."
                      ? {
                          color: "#FF2D87",
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
                color: "rgba(255,255,255,0.5)",
                maxWidth: "640px",
                margin: "0 auto 48px auto",
                lineHeight: 1.6
              }}
            >
              Join the most influential network of women shaping Africa's communications, media, and digital marketing landscape.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              {/* Standardised CTAs with pill shapes */}
              <button
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  backgroundColor: "#FF2D87",
                  color: "#FFFFFF",
                  padding: "20px 48px",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  boxShadow: "0 0 40px rgba(255,45,135,0.3)"
                }}
                className="animate-hover"
              >
                Register for Stage Access
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  padding: "20px 48px",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "999px",
                  cursor: "pointer"
                }}
                className="animate-hover"
              >
                Become a Partner
              </button>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <CommunicationsRegistrationSection />
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
        .gap-10 { gap: 2.5rem; }
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
