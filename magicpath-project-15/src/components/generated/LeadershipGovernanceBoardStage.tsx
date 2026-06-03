import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Menu, X, ChevronDown, Instagram, Linkedin, Twitter, Youtube, ArrowRight, Clock, Calendar, Shield, Users, Gavel, Award, Target, Briefcase, Sparkles, BrainCircuit, Landmark, BarChart3, Check, ShieldCheck } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLink {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}
interface FooterNavItem {
  id: string;
  label: string;
  href: string;
}
interface SectionLinkRow {
  id: string;
  label: string;
  links: FooterNavItem[];
}
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
interface ProgrammeSessionNew {
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

// ─── Constants ────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [{
  id: "nav-home",
  label: "Home",
  href: "#home"
}, {
  id: "nav-about",
  label: "About",
  href: "#about"
}, {
  id: "nav-summits",
  label: "Summits",
  href: "#summits",
  hasDropdown: true
}, {
  id: "nav-pillars",
  label: "Pillars",
  href: "#pillars",
  hasDropdown: true,
  isActive: true
}, {
  id: "nav-academy",
  label: "Academy",
  href: "#academy"
}, {
  id: "nav-partners",
  label: "Partners",
  href: "#partners"
}, {
  id: "nav-contact",
  label: "Contact",
  href: "#contact"
}];
const FOOTER_SECTION_ROWS: SectionLinkRow[] = [{
  id: "row-pages",
  label: "Pages",
  links: [{
    id: "fp-1",
    label: "About",
    href: "#about"
  }, {
    id: "fp-2",
    label: "Summits",
    href: "#summits"
  }, {
    id: "fp-3",
    label: "Programs",
    href: "#programs"
  }, {
    id: "fp-4",
    label: "Partners",
    href: "#partners"
  }, {
    id: "fp-5",
    label: "Agenda",
    href: "#agenda"
  }, {
    id: "fp-6",
    label: "Contact",
    href: "#contact"
  }]
}, {
  id: "row-programs",
  label: "Programs",
  links: [{
    id: "fp-7",
    label: "EmpowaHER",
    href: "#"
  }, {
    id: "fp-8",
    label: "Partnerships",
    href: "#"
  }, {
    id: "fp-9",
    label: "ESG Programs",
    href: "#"
  }, {
    id: "fp-10",
    label: "Resources",
    href: "#"
  }]
}, {
  id: "row-legal",
  label: "Legal",
  links: [{
    id: "fp-11",
    label: "Privacy Policy",
    href: "#"
  }, {
    id: "fp-12",
    label: "Terms",
    href: "#"
  }, {
    id: "fp-13",
    label: "FAQ",
    href: "#"
  }]
}];
const SOCIAL_LINKS = [{
  id: "s-instagram",
  label: "Instagram",
  Icon: Instagram
}, {
  id: "s-linkedin",
  label: "LinkedIn",
  Icon: Linkedin
}, {
  id: "s-x",
  label: "X",
  Icon: Twitter
}, {
  id: "s-youtube",
  label: "YouTube",
  Icon: Youtube
}];
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Landmark,
  title: "Board Leadership",
  accentColor: "#D4AF37"
}, {
  id: "fa-2",
  icon: Shield,
  title: "Governance Excellence",
  accentColor: "#D4AF37"
}, {
  id: "fa-3",
  icon: Users,
  title: "Women on Boards",
  accentColor: "#FF2D87"
}, {
  id: "fa-4",
  icon: Award,
  title: "Ethical Leadership",
  accentColor: "#FF2D87"
}, {
  id: "fa-5",
  icon: Target,
  title: "Reputation & Stakeholder Trust",
  accentColor: "#00B4A6"
}, {
  id: "fa-6",
  icon: Sparkles,
  title: "Organisational Transformation",
  accentColor: "#00B4A6"
}, {
  id: "fa-7",
  icon: Briefcase,
  title: "Succession Planning",
  accentColor: "#D4AF37"
}, {
  id: "fa-8",
  icon: BrainCircuit,
  title: "Leadership in the AI Era",
  accentColor: "#00B4A6"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Board Readiness & Executive Acceleration",
  value: "340+",
  description: "Women leaders accelerated into high-level governance and board positions."
}, {
  label: "Governance Intelligence",
  value: "Tier 1",
  description: "Access to global governance frameworks and ethical leadership standards."
}, {
  label: "Executive Networking & Mentorship",
  value: "500+",
  description: "Strategic connections with global industry captains and board chairs."
}, {
  label: "Reputation Capital Growth",
  value: "92%",
  description: "Average uplift in professional brand authority and stakeholder trust."
}];
const ACCENT_CYCLE = ["#FF2D87", "#D4AF37", "#00B4A6"];
const PROGRAMME_SESSIONS_NEW: ProgrammeSessionNew[] = [{
  id: "pn-1",
  time: "11:00",
  format: "OPENING KEYNOTE™",
  title: "Women Must Lead the Future of Leadership, Governance & Institutional Transformation",
  subtitle: "Who Will Shape Africa's Future Leadership, Governance Standards & Strategic Decision-Making Power?",
  accentColor: "#FF2D87"
}, {
  id: "pn-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS™",
  title: "Executive Leadership, Board Readiness & the Future of Strategic Influence™",
  subtitle: "The Future Will Belong to Leaders Who Can Influence, Adapt & Govern Through Complexity.",
  accentColor: "#D4AF37"
}, {
  id: "pn-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL™",
  title: "Women, Power & the Future of Governance™",
  subtitle: "The Future of Governance Will Be Defined by Ethical Leadership, Strategic Influence & Institutional Trust.",
  accentColor: "#00B4A6"
}, {
  id: "pn-4",
  time: "12:50",
  format: "NETWORKING LUNCH™",
  title: "Cultivating Influence, Leadership & Strategic Partnerships™",
  subtitle: "Which Relationships, Mentors & Strategic Alliances Will Accelerate Your Leadership Journey?",
  accentColor: "#00B4A6",
  isLunch: true
}, {
  id: "pn-5",
  time: "13:20",
  format: "FIRECHAT™",
  title: "Executive Influence, Reputation & Women-Led Leadership™",
  subtitle: "Leadership Without Influence Limits Long-Term Institutional Impact.",
  accentColor: "#FF2D87"
}, {
  id: "pn-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP™",
  title: "The Business of Governance, Ethical Leadership & Institutional Transformation™",
  subtitle: "The Future of Leadership Will Belong to Institutions That Build Trust, Accountability & Strategic Agility.",
  accentColor: "#00B4A6"
}, {
  id: "pn-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Leadership, Digital Transformation & the Future of Executive Decision-Making™",
  subtitle: "Technology, Innovation & Strategic Agility Are Reshaping Leadership.",
  accentColor: "#D4AF37"
}, {
  id: "pn-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Leadership, Governance & Board Economy™",
  subtitle: "Women Leadership, Governance Excellence & Institutional Influence Will Shape Africa's Economic Future.",
  accentColor: "#FF2D87"
}, {
  id: "pn-9",
  time: "15:50",
  format: "CLOSING KEYNOTE™",
  title: "Africa's Leadership & Governance Future Will Be Led by Women Who Influence, Transform & Build",
  subtitle: "Will You Be One of the Women Defining Africa's Future Leadership & Governance Economy?",
  accentColor: "#D4AF37"
}];
const HERO_LINES = [{
  id: "hl-1",
  words: ["Leadership,", "Governance"]
}, {
  id: "hl-2",
  words: ["&", "Boards."]
}];
const CTA_HEADLINE_WORDS = ["Lead,", "Govern,", "Influence,", "Transform,", "Now."];
const INDUSTRY_OPTIONS = [{
  id: "ind-1",
  label: "Corporate Leadership & Executive Management"
}, {
  id: "ind-2",
  label: "Board Directorship & Governance"
}, {
  id: "ind-3",
  label: "Financial Services & Banking"
}, {
  id: "ind-4",
  label: "Government & Public Sector"
}, {
  id: "ind-5",
  label: "Legal & Compliance"
}, {
  id: "ind-6",
  label: "Institutional Investment"
}, {
  id: "ind-7",
  label: "Academia & Research"
}, {
  id: "ind-8",
  label: "Non-Profit & Development"
}, {
  id: "ind-9",
  label: "Healthcare Leadership"
}, {
  id: "ind-10",
  label: "Technology & Innovation"
}, {
  id: "ind-11",
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
  value: "Leadership, Governance & Boards™"
}, {
  id: "dr-2",
  label: "Date",
  value: "Saturday, 29 August 2026"
}, {
  id: "dr-3",
  label: "Time",
  value: "11:00–16:00"
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
  text: "Full-day Leadership, Governance & Boards Stage access"
}, {
  id: "inc-2",
  text: "Premium executive programme (9 sessions)"
}, {
  id: "inc-3",
  text: "Board readiness masterclass & NED pathways"
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
const MainNavBar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100
  }}>
      <header style={{
      height: "68px",
      backgroundColor: "rgba(10,10,15,0.97)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      alignItems: "center",
      paddingLeft: "clamp(16px, 5vw, 80px)",
      paddingRight: "clamp(16px, 5vw, 80px)",
      position: "relative"
    }}>
        <motion.div style={{
        scaleX,
        transformOrigin: "left",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1.5px",
        backgroundColor: "#FF2D87"
      }} />

        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexShrink: 0
      }}>
          <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
            <div style={{
            height: 32,
            width: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            overflow: "hidden"
          }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="12" r="5" fill="#FF2D87" />
                <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="12" r="8" stroke="#FF2D87" strokeWidth="1" strokeOpacity="0.3" />
              </svg>
            </div>
            <span style={{
            fontFamily: "Figtree",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.01em",
            whiteSpace: "nowrap"
          }}>
              <span style={{
              color: "#FFFFFF"
            }}>Empowa</span>
              <span style={{
              color: "#FF2D87"
            }}>Women</span>
            </span>
          </div>
        </div>

        <nav aria-label="Main navigation" className="hidden lg:flex" style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
          {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
              <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: hoveredLink === link.id || link.isActive ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
            textDecoration: "none",
            padding: "6px 12px",
            transition: "color 150ms ease-out",
            position: "relative",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3px"
          }}>
                <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px"
            }}>
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={11} style={{
                color: hoveredLink === link.id ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.25)",
                transition: "color 150ms ease-out",
                flexShrink: 0
              }} />}
                </span>
                <span style={{
              display: "block",
              height: "1.5px",
              width: "100%",
              backgroundColor: "#FF2D87",
              transformOrigin: "left",
              transform: hoveredLink === link.id || link.isActive ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 200ms ease-out"
            }} />
              </a>
              {idx < NAV_LINKS.length - 1 && <span style={{
            color: "rgba(255,255,255,0.15)",
            fontSize: "8px"
          }}>·</span>}
            </React.Fragment>)}
        </nav>

        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexShrink: 0,
        marginLeft: "auto"
      }}>
          <a href="#register" className="hidden sm:inline-flex" style={{
          fontFamily: "Figtree",
          fontSize: "12px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          borderRadius: "999px",
          padding: "8px 20px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
          transition: "filter 200ms ease-out",
          position: "relative",
          overflow: "hidden",
          alignItems: "center"
        }}>
            <span style={{
            position: "relative",
            zIndex: 1
          }}>Secure Your Seat</span>
          </a>

          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          padding: "4px"
        }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <motion.nav initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} style={{
        backgroundColor: "rgba(10,10,15,0.98)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "24px clamp(16px, 5vw, 80px) 32px",
        display: "flex",
        flexDirection: "column"
      }}>
            {NAV_LINKS.map(link => <a key={link.id} href={link.href} onClick={() => setMobileOpen(false)} style={{
          fontFamily: "Figtree",
          fontSize: "16px",
          fontWeight: link.isActive ? 500 : 400,
          color: link.isActive ? "#FFFFFF" : "rgba(255,255,255,0.60)",
          textDecoration: "none",
          padding: "14px 0",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
                <span>{link.label}</span>
              </a>)}
          </motion.nav>}
      </AnimatePresence>
    </div>;
};
const IndustrialHeroBanner: React.FC = () => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  let wordIndex = 0;
  return <section id="home" style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "68px",
    paddingBottom: "clamp(48px, 8vw, 80px)"
  }}>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute inset-0" initial={{
        scale: 1.06,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 2.4,
        ease: "easeOut"
      }}>
          <motion.div style={{
          y: imageY,
          position: "absolute",
          inset: 0
        }}>
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{
            objectFit: "cover",
            objectPosition: "center 40%"
          }} />
          </motion.div>
        </motion.div>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.75) 0%, rgba(10,10,15,0.45) 40%, rgba(10,10,15,0.95) 100%)"
      }} />
      </div>

      <div style={{
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
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }} style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
          <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "clamp(32px, 5vw, 48px)"
        }}>
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px"
          }}>
              <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#D4AF37",
              display: "inline-block",
              animation: "pulseDot 2s ease-in-out infinite"
            }} />
              <span style={{
              fontFamily: "Figtree",
              fontSize: "clamp(9px, 2vw, 11px)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.60)",
              textTransform: "uppercase"
            }}>
                Leadership, Governance & Boards Stage™
              </span>
            </motion.div>

            <motion.h1 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(40px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto 24px auto"
          }}>
              {HERO_LINES.map(line => <span key={line.id} style={{
              display: "block"
            }}>
                  {line.words.map(word => {
                const idx = wordIndex++;
                const isUnderlined = word.includes(".");
                const cleanWord = isUnderlined ? word.slice(0, -1) : word;
                return <motion.span key={idx} initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 20
                }} animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.4 + idx * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }} style={{
                  display: "inline-block",
                  marginRight: "0.25em"
                }}>
                        {isUnderlined ? <span style={{
                    textDecoration: "underline",
                    textDecorationColor: "#D4AF37",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "6px"
                  }}>{cleanWord}</span> : word}
                        {isUnderlined && <span style={{
                    color: "#D4AF37"
                  }}>.</span>}
                      </motion.span>;
              })}
                </span>)}
            </motion.h1>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1
          }} style={{
            marginBottom: "28px"
          }}>
              <p style={{
              fontFamily: "Figtree",
              fontWeight: 400,
              fontSize: "clamp(12px, 2.5vw, 18px)",
              fontStyle: "italic",
              color: "#D4AF37",
              textAlign: "center"
            }}>
                'The Future Belongs to Ethical, Adaptive & Visionary Women Leaders.'
              </p>
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.2
          }} style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(255,255,255,0.50)",
            maxWidth: "800px",
            margin: "0 auto 36px auto",
            textAlign: "center",
            lineHeight: 1.75
          }}>
              In an era defined by disruption, AI, transformation, and increasing stakeholder expectations, leadership excellence, governance integrity, and board readiness have become strategic imperatives for sustainable growth and institutional resilience.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.4
          }} style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
              <a href="#register" style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF2D87",
              height: "50px",
              padding: "0 32px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              boxShadow: "0 0 32px rgba(255,45,135,0.2)"
            }}>
                Secure Your Seat <ArrowRight size={16} />
              </a>
              <a href="#programme" style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 400,
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.05)",
              height: "50px",
              padding: "0 32px",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
                Explore Programme
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
      pointerEvents: "none",
      zIndex: 2
    }} />
    </section>;
};
const ROIMetricBlock: React.FC<{
  title: string;
  metrics: ROIMetric[];
}> = ({
  title,
  metrics
}) => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  height: "100%"
}}>
    <div style={{
    display: "flex",
    alignItems: "center",
    gap: "12px"
  }}>
      <div style={{
      width: "3px",
      height: "28px",
      backgroundColor: "#D4AF37"
    }} />
      <h3 style={{
      fontFamily: "Figtree",
      fontSize: "18px",
      fontWeight: 700,
      color: "#FFFFFF",
      margin: 0
    }}>{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {metrics.map((metric, idx) => <motion.div key={idx} initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      delay: idx * 0.1
    }} style={{
      backgroundColor: "#0D0D14",
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
          <div style={{
        height: "2px",
        width: "32px",
        backgroundColor: "#D4AF37",
        marginBottom: "8px"
      }} />
          <span style={{
        fontFamily: "Figtree",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#D4AF37"
      }}>{metric.label}</span>
          <span style={{
        fontFamily: "Figtree",
        fontWeight: 300,
        fontSize: "clamp(32px, 4vw, 48px)",
        color: "#FFFFFF",
        letterSpacing: "-0.04em"
      }}>{metric.value}</span>
          <p style={{
        fontFamily: "Figtree",
        fontSize: "13px",
        color: "rgba(255,255,255,0.45)",
        lineHeight: 1.6,
        margin: 0
      }}>{metric.description}</p>
        </motion.div>)}
    </div>
  </div>;
const GlobalFooter: React.FC = () => <footer id="contact" style={{
  backgroundColor: "#0A0A0F",
  color: "#FFFFFF",
  padding: "80px clamp(16px, 5vw, 80px) 48px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}}>
    <div style={{
    width: "100%",
    maxWidth: "1200px"
  }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <SectionLabel>Get Started</SectionLabel>
          <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(32px, 5vw, 56px)",
          color: "#FFFFFF",
          lineHeight: 1.1,
          marginBottom: "24px"
        }}>
            The Future of Board Leadership is <span style={{
            color: "#FF2D87"
          }}>Women.</span>
          </h2>
          <p style={{
          fontFamily: "Figtree",
          fontSize: "16px",
          color: "rgba(255,255,255,0.45)",
          maxWidth: "480px",
          lineHeight: 1.7
        }}>
            Empowering the next generation of board directors and governance experts across Africa.
          </p>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}>
          <div style={{
          display: "flex"
        }}>
            <input type="email" placeholder="Email Address" style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#FFFFFF",
            padding: "14px 20px",
            flex: 1,
            outline: "none"
          }} />
            <button style={{
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            padding: "0 24px",
            border: "none",
            fontWeight: 600
          }}>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-12 border-top border-white/10">
        {FOOTER_SECTION_ROWS.map(row => <div key={row.id}>
            <h4 style={{
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "20px"
        }}>{row.label}</h4>
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}>
              {row.links.map(link => <a key={link.id} href={link.href} style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "13px",
            textDecoration: "none"
          }}>{link.label}</a>)}
            </div>
          </div>)}
        <div>
          <h4 style={{
          color: "#FFFFFF",
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "20px"
        }}>Follow Us</h4>
          <div style={{
          display: "flex",
          gap: "12px"
        }}>
            {SOCIAL_LINKS.map(s => <a key={s.id} href="#" style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF"
          }}>
                <s.Icon size={18} />
              </a>)}
          </div>
        </div>
      </div>

      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      marginTop: "64px",
      paddingTop: "32px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "24px"
    }}>
        <div>
          <span style={{
          fontSize: "18px",
          fontWeight: 600
        }}><span style={{
            color: "#FFFFFF"
          }}>Empowa</span><span style={{
            color: "#FF2D87"
          }}>Women</span></span>
          <p style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "12px",
          marginTop: "8px"
        }}>© {new Date().getFullYear()} EmpowaWomen. All rights reserved.</p>
        </div>
        <p style={{
        color: "#FF2D87",
        fontSize: "12px",
        fontStyle: "italic",
        fontWeight: 500
      }}>Ignite Passion | Foster Growth | Drive Change</p>
      </div>
    </div>
  </footer>;

// ─── Programme Section ────────────────────────────────────────────────────────

const ProgrammeSection: React.FC = () => {
  return <section id="programme" style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "128px",
    paddingBottom: "128px",
    paddingLeft: "clamp(16px, 5vw, 32px)",
    paddingRight: "clamp(16px, 5vw, 32px)",
    position: "relative",
    overflow: "hidden"
  }}>
      {/* Ambient venue bg */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.06,
      pointerEvents: "none"
    }} />

      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "80rem",
      margin: "0 auto"
    }}>
        {/* Header */}
        <div style={{
        marginBottom: "56px"
      }}>
          <div style={{
          width: "48px",
          height: "3px",
          backgroundColor: "#FF2D87",
          marginBottom: "20px"
        }} />
          <p style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          margin: "0 0 20px 0"
        }}>
            HIGH-IMPACT EXECUTIVE PROGRAMME
          </p>
          <h2 style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(28px, 4vw, 52px)",
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
          lineHeight: 1.1,
          margin: "0 0 20px 0"
        }}>
            A Day of Leadership, Governance & Strategic Influence
          </h2>
          <p style={{
          fontFamily: "Figtree, sans-serif",
          fontSize: "14px",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75,
          margin: 0,
          maxWidth: "720px"
        }}>
            11:00 – 16:00 · Curated for Female CXOs, Board Leaders, Entrepreneurs, Executives, Investors, Academia, Policymakers & Future-Focused Professionals
          </p>
        </div>

        {/* Programme list */}
        <div style={{
        maxWidth: "48rem",
        margin: "0 auto"
      }}>
          {PROGRAMME_SESSIONS_NEW.map((session, i) => {
          const accent = ACCENT_CYCLE[i % ACCENT_CYCLE.length];
          const sessionNumber = String(i + 1).padStart(2, "0");
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
              delay: i * 0.06
            }} style={{
              backgroundColor: "rgba(0,180,166,0.04)",
              border: "1px solid rgba(0,180,166,0.12)",
              borderRadius: "8px",
              padding: "12px 16px",
              margin: "4px 0",
              display: "flex",
              alignItems: "center",
              gap: "24px"
            }}>
                  <div style={{
                width: "80px",
                flexShrink: 0,
                fontFamily: "Figtree, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#00B4A6"
              }}>
                    {session.time}
                  </div>
                  <div style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap"
              }}>
                    <span style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#00B4A6",
                  flexShrink: 0,
                  display: "inline-block"
                }} />
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#FFFFFF"
                }}>
                      {session.title}
                    </span>
                    <span style={{
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
                }}>
                      INCLUDED
                    </span>
                  </div>
                  <span style={{
                width: "36px",
                textAlign: "right",
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.12)",
                flexShrink: 0
              }}>
                    {sessionNumber}
                  </span>
                </motion.div>;
          }
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
            delay: i * 0.06
          }} whileHover={{
            backgroundColor: "rgba(255,255,255,0.025)"
          }} style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            cursor: "pointer",
            borderRadius: "4px",
            transition: "background-color 200ms ease"
          }}>
              {/* Time col */}
              <div style={{
              width: "80px",
              flexShrink: 0,
              fontFamily: "Figtree, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: accent
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
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: accent,
                display: "block"
              }}>
                  {session.format}
                </span>
                <h4 style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                color: "#FFFFFF",
                margin: "4px 0 0 0",
                lineHeight: 1.35
              }}>
                  {session.title}
                </h4>
                <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                margin: "4px 0 0 0",
                lineHeight: 1.55
              }}>
                  {session.subtitle}
                </p>
              </div>

              {/* Number col */}
              <span style={{
              width: "36px",
              textAlign: "right",
              fontFamily: "Figtree, sans-serif",
              fontSize: "11px",
              color: "rgba(255,255,255,0.12)",
              flexShrink: 0
            }}>
                {sessionNumber}
              </span>
            </motion.div>;
        })}
        </div>

        {/* Stats footer */}
        <div style={{
        maxWidth: "48rem",
        margin: "48px auto 0 auto",
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "32px"
      }}>
          {[{
          id: "stat-1",
          label: "9 Sessions"
        }, {
          id: "stat-2",
          label: "11:00 Start"
        }, {
          id: "stat-3",
          label: "16:00 Close"
        }].map(stat => <div key={stat.id} style={{
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
              <span style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: "#FF2D87",
            display: "inline-block"
          }} />
              <span style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.50)",
            letterSpacing: "0.04em"
          }}>{stat.label}</span>
            </div>)}
        </div>
      </div>
    </section>;
};

// ─── Registration Section ────────────────────────────────────────────────────

const DelegateRegistrationSection: React.FC = () => {
  const [form, setForm] = React.useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = React.useState(false);
  const [focused, setFocused] = React.useState<string | null>(null);
  function handleChange(field: keyof FormState, value: string | boolean) {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }
  function getInputStyle(fieldName: string): React.CSSProperties {
    return {
      ...inputStyle,
      borderColor: focused === fieldName ? "#FF2D87" : "rgba(255,255,255,0.10)"
    };
  }
  return <motion.section id="register" initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6
  }} style={{
    backgroundColor: "#0A0A0F",
    position: "relative",
    overflow: "hidden",
    paddingTop: "128px",
    paddingBottom: "128px",
    paddingLeft: "clamp(16px, 5vw, 32px)",
    paddingRight: "clamp(16px, 5vw, 32px)"
  }}>
      {/* Radial glow */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(255,45,135,0.05) 0%, transparent 65%)",
      pointerEvents: "none"
    }} />

      {/* Inner */}
      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "1024px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "64px",
      alignItems: "start"
    }} className="reg-layout">
        {/* ── LEFT COLUMN ── */}
        <div style={{
        flex: 1,
        minWidth: 0,
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
          textTransform: "uppercase",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.35)",
          margin: "0 0 16px 0"
        }}>
            DELEGATE REGISTRATION
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
            Secure Your Place at Africa's Leadership, Governance & Boards Stage™
          </h2>
          <p style={{
          fontFamily: "Figtree, sans-serif",
          color: "rgba(255,255,255,0.45)",
          fontSize: "14px",
          lineHeight: 1.75,
          margin: "0 0 32px 0"
        }}>
            Investment: R1,500 per delegate. Complete the form below and our team will confirm your registration within 24 hours.
          </p>

          {/* ── FORM or SUCCESS STATE ── */}
          {submitted ? <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          paddingTop: "64px",
          paddingBottom: "64px"
        }}>
              <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }} style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,45,135,0.10)",
            border: "2px solid #FF2D87",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
                <Check size={36} color="#FF2D87" />
              </motion.div>
              <h3 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 3.5vw, 36px)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: 0,
            textAlign: "center"
          }}>
                Registration Submitted!
              </h3>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            color: "rgba(255,255,255,0.50)",
            fontSize: "15px",
            textAlign: "center",
            maxWidth: "480px",
            lineHeight: 1.75,
            margin: 0
          }}>
                Thank you for registering for the Leadership, Governance & Boards Stage™. Our team will confirm your delegate place within 24 hours. Please check your inbox.
              </p>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "11px",
            color: "rgba(255,45,135,0.70)",
            letterSpacing: "0.08em",
            marginTop: "4px",
            textAlign: "center"
          }}>
                #LeadWithPurpose · #EmpowaWomen · #WomenOnBoards
              </p>
              <div style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
                <button style={{
              height: "44px",
              padding: "0 24px",
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 500,
              fontSize: "14px"
            }}>
                  Add to Calendar
                </button>
                <button onClick={() => setSubmitted(false)} style={{
              height: "44px",
              padding: "0 24px",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.20)",
              cursor: "pointer",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 500,
              fontSize: "14px"
            }}>
                  Back to Stage Info
                </button>
              </div>
            </div> : <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
              {/* Row 1: First Name | Last Name */}
              <div className="reg-name-row" style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }}>
                <input type="text" placeholder="First Name" value={form.firstName} onChange={e => handleChange("firstName", e.target.value)} onFocus={() => setFocused("firstName")} onBlur={() => setFocused(null)} style={getInputStyle("firstName")} required />
                <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => handleChange("lastName", e.target.value)} onFocus={() => setFocused("lastName")} onBlur={() => setFocused(null)} style={getInputStyle("lastName")} required />
              </div>

              {/* Row 2: Job Title */}
              <input type="text" placeholder="Job Title / Designation" value={form.jobTitle} onChange={e => handleChange("jobTitle", e.target.value)} onFocus={() => setFocused("jobTitle")} onBlur={() => setFocused(null)} style={getInputStyle("jobTitle")} required />

              {/* Row 3: Company | Industry */}
              <div className="reg-company-row" style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }}>
                <input type="text" placeholder="Company / Organisation" value={form.company} onChange={e => handleChange("company", e.target.value)} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} style={getInputStyle("company")} required />
                <select value={form.industry} onChange={e => handleChange("industry", e.target.value)} onFocus={() => setFocused("industry")} onBlur={() => setFocused(null)} style={{
              ...getInputStyle("industry"),
              appearance: "none",
              WebkitAppearance: "none",
              color: form.industry ? "#FFFFFF" : "rgba(255,255,255,0.25)"
            }} required>
                  <option value="" disabled style={{
                color: "rgba(255,255,255,0.25)",
                backgroundColor: "#111118"
              }}>Industry</option>
                  {INDUSTRY_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
                color: "#FFFFFF",
                backgroundColor: "#111118"
              }}>
                      {opt.label}
                    </option>)}
                </select>
              </div>

              {/* Row 4: Email */}
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => handleChange("email", e.target.value)} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={getInputStyle("email")} required />

              {/* Row 5: Phone */}
              <input type="tel" placeholder="+27 ..." value={form.phone} onChange={e => handleChange("phone", e.target.value)} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={getInputStyle("phone")} />

              {/* Row 6: How did you hear */}
              <select value={form.hearAboutUs} onChange={e => handleChange("hearAboutUs", e.target.value)} onFocus={() => setFocused("hearAboutUs")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("hearAboutUs"),
            appearance: "none",
            WebkitAppearance: "none",
            color: form.hearAboutUs ? "#FFFFFF" : "rgba(255,255,255,0.25)"
          }}>
                <option value="" disabled style={{
              color: "rgba(255,255,255,0.25)",
              backgroundColor: "#111118"
            }}>How did you hear about us?</option>
                {HEAR_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
              color: "#FFFFFF",
              backgroundColor: "#111118"
            }}>
                    {opt.label}
                  </option>)}
              </select>

              {/* Row 7: Special requirements */}
              <textarea rows={3} placeholder="Any special requirements, dietary needs, or questions for our team?" value={form.specialRequirements} onChange={e => handleChange("specialRequirements", e.target.value)} onFocus={() => setFocused("specialRequirements")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("specialRequirements"),
            resize: "vertical",
            lineHeight: 1.6
          }} />

              {/* Checkbox */}
              <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px"
          }}>
                <input type="checkbox" id="reg-agree" checked={form.agreed} onChange={e => handleChange("agreed", e.target.checked)} required style={{
              accentColor: "#FF2D87",
              marginTop: "2px",
              flexShrink: 0,
              width: "16px",
              height: "16px",
              cursor: "pointer"
            }} />
                <label htmlFor="reg-agree" style={{
              fontFamily: "Figtree, sans-serif",
              color: "rgba(255,255,255,0.45)",
              fontSize: "12px",
              lineHeight: 1.6,
              cursor: "pointer"
            }}>
                  I agree to the EmpowaWomen™ Privacy Policy and Terms & Conditions. I consent to receiving summit-related communications.
                </label>
              </div>

              {/* Submit */}
              <button type="submit" style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            fontFamily: "Figtree, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            letterSpacing: "0.02em",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e0006f";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF2D87";
          }}>
                Submit Registration →
              </button>

              <p style={{
            fontFamily: "Figtree, sans-serif",
            textAlign: "center",
            fontSize: "11px",
            color: "rgba(255,255,255,0.20)",
            marginTop: "4px"
          }}>
                Your information is encrypted, secure, and will never be shared with third parties.
              </p>
            </form>}
        </div>

        {/* ── RIGHT COLUMN: Summary Card ── */}
        <div className="reg-card-col" style={{
        width: "100%",
        flexShrink: 0
      }}>
          <div style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          overflow: "hidden"
        }}>
            {/* Top image strip */}
            <div style={{
            height: "180px",
            backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2791.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            position: "relative"
          }}>
              <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.90) 100%)"
            }} />
              <div style={{
              position: "absolute",
              bottom: "16px",
              left: "20px",
              backgroundColor: "rgba(10,10,15,0.80)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              borderRadius: "20px",
              padding: "4px 12px",
              fontSize: "10px",
              color: "#FFFFFF",
              fontWeight: 500,
              letterSpacing: "0.08em",
              fontFamily: "Figtree, sans-serif"
            }}>
                📅 Saturday, 29 August 2026
              </div>
            </div>

            {/* Card body */}
            <div style={{
            padding: "28px"
          }}>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase",
              margin: "0 0 12px 0"
            }}>
                YOUR REGISTRATION INCLUDES
              </p>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: 1.4,
              margin: "0 0 4px 0"
            }}>
                Leadership, Governance & Boards™
              </p>

              {/* Divider */}
              <div style={{
              borderTop: "1px solid rgba(255,45,135,0.25)",
              margin: "20px 0"
            }} />

              {/* Details */}
              <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                {DETAILS_ROWS.map((row, idx) => <div key={row.id} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: "12px",
                paddingBottom: "12px",
                borderBottom: idx < DETAILS_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                  marginRight: "16px"
                }}>
                      {row.label}
                    </span>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 500,
                  textAlign: "right"
                }}>
                      {row.value}
                    </span>
                  </div>)}
              </div>

              {/* Divider */}
              <div style={{
              borderTop: "1px solid rgba(255,45,135,0.25)",
              margin: "20px 0 16px 0"
            }} />

              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase",
              margin: "0 0 16px 0"
            }}>
                WHAT'S INCLUDED
              </p>

              {/* Includes */}
              <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                {INCLUDES.map(item => <div key={item.id} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                paddingTop: "8px",
                paddingBottom: "8px"
              }}>
                    <div style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(255,45,135,0.10)",
                  border: "1px solid rgba(255,45,135,0.30)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                      <Check size={10} color="#FF2D87" />
                    </div>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  lineHeight: 1.5
                }}>
                      {item.text}
                    </span>
                  </div>)}
              </div>

              {/* Badge row */}
              <div style={{
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
                <ShieldCheck size={12} color="rgba(255,255,255,0.25)" />
                <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.25)"
              }}>
                  Secure · Confidential · Confirmed within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .reg-layout {
            flex-direction: row !important;
          }
          .reg-card-col {
            width: 420px !important;
            position: sticky;
            top: 32px;
            align-self: flex-start;
          }
        }
        @media (min-width: 640px) {
          .reg-name-row {
            flex-direction: row !important;
          }
          .reg-company-row {
            flex-direction: row !important;
          }
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
        select option {
          background-color: #111118;
        }
      `}</style>
    </motion.section>;
};

// ─── Main Component ────────────────────────────────────────────────────────────

export const LeadershipGovernanceBoardStage: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  return <div style={{
    width: "100%",
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF",
    fontFamily: "'Figtree', sans-serif"
  }}>
      <MainNavBar />

      <main>
        <IndustrialHeroBanner />

        {/* ── Focus Areas & ROI ── */}
        <section ref={bentoRef} style={{
        padding: "100px clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
          <SectionLabel>Strategic Impact & ROI</SectionLabel>
          <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 700,
          fontSize: "clamp(28px, 4vw, 52px)",
          lineHeight: 1.1,
          marginBottom: "60px",
          maxWidth: "800px"
        }}>
            Institutional Resilience Through <span style={{
            color: "#D4AF37"
          }}>Board Excellence</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Focus Areas Bento */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={bentoInView ? {
            opacity: 1,
            x: 0
          } : {}} style={{
            backgroundColor: "#0D0D14",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "40px"
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
                backgroundColor: "#FF2D87"
              }} />
                <h3 style={{
                fontSize: "20px",
                fontWeight: 700
              }}>Key Focus Areas</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {FOCUS_AREAS.map(area => <motion.div key={area.id} whileHover={{
                x: 6
              }} style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
              }}>
                    <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: area.accentColor
                }} />
                    <area.icon size={16} style={{
                  color: "rgba(255,255,255,0.3)"
                }} />
                    <span style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.7)"
                }}>{area.title}</span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* ROI Metrics */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={bentoInView ? {
            opacity: 1,
            x: 0
          } : {}} style={{
            borderTop: "3px solid #D4AF37",
            paddingTop: "2px"
          }}>
              <ROIMetricBlock title="Leadership Acceleration Metrics" metrics={ROI_METRICS} />
            </motion.div>
          </div>
        </section>

        {/* ── Separator ── */}
        <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 96px"
      }}>
          <div style={{
          height: "1px",
          background: "linear-gradient(to right, rgba(255,45,135,0.3), rgba(212,175,55,0.3), rgba(0,180,166,0.3))"
        }} />
        </div>

        {/* ── Programme Section (new format) ── */}
        <ProgrammeSection />

        {/* ── CTA Final ── */}
        <section style={{
        position: "relative",
        padding: "140px clamp(16px, 5vw, 96px)",
        backgroundColor: "#0A0A0F",
        textAlign: "center",
        overflow: "hidden"
      }}>
          <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15
        }}>
             <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)"
          }} />
          </div>
          <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto"
        }}>
            <SectionLabel>Take The Next Step</SectionLabel>
            <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(32px, 6vw, 72px)",
            lineHeight: 1.05,
            marginBottom: "32px"
          }}>
              {CTA_HEADLINE_WORDS.map((word, i) => <motion.span key={i} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} style={{
              display: "inline-block",
              marginRight: "0.2em",
              ...(word === "Now." ? {
                textDecoration: "underline",
                textDecorationColor: "#FF2D87",
                textDecorationThickness: "4px",
                textUnderlineOffset: "8px"
              } : {})
            }}>
                  {word}
                </motion.span>)}
            </h2>
            <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "48px",
            maxWidth: "600px",
            margin: "0 auto 48px auto",
            lineHeight: 1.6
          }}>
              Join the elite collective of women leaders shaping the future of global governance and organizational transformation.
            </p>
            <div style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}>
              <button style={{
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              padding: "18px 48px",
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 40px rgba(255,45,135,0.3)"
            }}>
                Secure Your Seat
              </button>
              <button style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "18px 48px",
              fontSize: "16px",
              fontWeight: 500,
              cursor: "pointer"
            }}>
                Download Prospectus
              </button>
            </div>
          </div>
        </section>

        {/* ── Registration Section ── */}
        <DelegateRegistrationSection />
      </main>

      <GlobalFooter />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #0A0A0F;
          overflow-x: hidden;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .shimmer {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transform: translateX(-100%);
          animation: shimmerSlide 3s infinite;
        }

        @keyframes shimmerSlide {
          0% { transform: translateX(-100%) skewX(-20deg); }
          50%, 100% { transform: translateX(250%) skewX(-20deg); }
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
      `}</style>
    </div>;
};