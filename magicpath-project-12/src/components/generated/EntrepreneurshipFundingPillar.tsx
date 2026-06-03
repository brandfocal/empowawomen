import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Check, ShieldCheck } from "lucide-react";

// ─── Constants & Data ─────────────────────────────────────────────────────────

const PRIMARY_ACCENT = "#FF2D87";
const SECONDARY_ACCENT = "#00B4A6";
const TERTIARY_ACCENT = "#D4AF37";
const BG_DARK = "#0A0A0F";
const BG_NAV = "rgba(10, 10, 15, 0.97)";
const NAV_LINKS = [{
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
const FOCUS_AREAS = [{
  id: "fa-1",
  title: "Funding Access",
  accent: PRIMARY_ACCENT
}, {
  id: "fa-2",
  title: "Venture Capital & Private Equity",
  accent: TERTIARY_ACCENT
}, {
  id: "fa-3",
  title: "Enterprise Development",
  accent: PRIMARY_ACCENT
}, {
  id: "fa-4",
  title: "Procurement Opportunities",
  accent: SECONDARY_ACCENT
}, {
  id: "fa-5",
  title: "Women & Youth Entrepreneurship",
  accent: PRIMARY_ACCENT
}, {
  id: "fa-6",
  title: "Startup Scaling",
  accent: TERTIARY_ACCENT
}, {
  id: "fa-7",
  title: "Innovation Ecosystems",
  accent: SECONDARY_ACCENT
}, {
  id: "fa-8",
  title: "Financial Inclusion",
  accent: SECONDARY_ACCENT
}];
const ROI_METRICS = [{
  id: "rm-1",
  label: "Investor Access & Funding Opportunities",
  value: "R2.4B+",
  description: "Targeted capital allocation for women-led ventures."
}, {
  id: "rm-2",
  label: "Procurement & Market Access Integration",
  value: "200+",
  description: "Active corporate procurement channel integrations."
}, {
  id: "rm-3",
  label: "Entrepreneurial Growth Strategies",
  value: "Tier 1",
  description: "Standardised high-growth scaling frameworks."
}, {
  id: "rm-4",
  label: "Pan-African Trade Opportunities",
  value: "45+ Markets",
  description: "Direct access to cross-border ecosystem growth."
}];
const PROGRAMME_SESSIONS = [{
  id: "ps-1",
  time: "11:00",
  format: "OPENING KEYNOTE™",
  title: "Women Must Lead the Future of Entrepreneurship, Innovation & Economic Growth",
  subtitle: "Who Will Build, Fund & Scale Africa's Next Generation of Global Enterprises?",
  accentColor: PRIMARY_ACCENT
}, {
  id: "ps-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS™",
  title: "Funding Readiness, Scaling & the Future of High-Growth Enterprises™",
  subtitle: "Capital Will Flow Toward Businesses That Are Scalable, Investment-Ready & Future-Focused.",
  accentColor: TERTIARY_ACCENT
}, {
  id: "ps-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL™",
  title: "Women, Capital & the Future of Economic Participation™",
  subtitle: "The Future Economy Will Belong to Entrepreneurs Who Can Access Capital, Markets & Strategic Networks.",
  accentColor: SECONDARY_ACCENT
}, {
  id: "ps-4",
  time: "12:50",
  format: "NETWORKING LUNCH™",
  title: "Cultivating Capital, Partnerships & Enterprise Growth™",
  subtitle: "Which Relationships, Investors & Ecosystem Partners Will Accelerate Your Business Growth Journey?",
  accentColor: TERTIARY_ACCENT,
  isLunch: true
}, {
  id: "ps-5",
  time: "13:20",
  format: "FIRECHAT™",
  title: "Investment, Market Access & Women-Led Enterprises™",
  subtitle: "Entrepreneurship Without Scale Is a Missed Economic Opportunity.",
  accentColor: PRIMARY_ACCENT
}, {
  id: "ps-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP™",
  title: "The Business of Innovation, Commercialisation & Sustainable Enterprise Growth™",
  subtitle: "The Future of Entrepreneurship Will Belong to Businesses That Can Innovate, Adapt & Scale.",
  accentColor: SECONDARY_ACCENT
}, {
  id: "ps-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Procurement, Digital Economies & the Future of Business Growth™",
  subtitle: "The Next Generation of High-Growth Enterprises Will Be Built Through Strategic Ecosystems, Technology & Market Access.",
  accentColor: TERTIARY_ACCENT
}, {
  id: "ps-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Entrepreneurial Economy & Women-Led Business Transformation™",
  subtitle: "Innovation, Investment & Women Leadership Will Shape Africa's Economic Future.",
  accentColor: PRIMARY_ACCENT
}, {
  id: "ps-9",
  time: "15:50",
  format: "CLOSING KEYNOTE™",
  title: "Africa's Entrepreneurial Future Will Be Led by Women Who Build, Scale & Transform",
  subtitle: "Will You Be One of the Women Defining Africa's Future Enterprise Economy?",
  accentColor: SECONDARY_ACCENT
}];
const PROGRAMME_STATS = [{
  id: "stat-1",
  label: "9 Sessions"
}, {
  id: "stat-2",
  label: "11:00 Start"
}, {
  id: "stat-3",
  label: "16:00 Close"
}];
const INDUSTRY_OPTIONS = [{
  id: "ind-1",
  label: "Entrepreneurship & Startups"
}, {
  id: "ind-2",
  label: "Venture Capital & Private Equity"
}, {
  id: "ind-3",
  label: "Development Finance Institutions"
}, {
  id: "ind-4",
  label: "Corporate & Enterprise"
}, {
  id: "ind-5",
  label: "Procurement & Supply Chain"
}, {
  id: "ind-6",
  label: "Innovation & Technology"
}, {
  id: "ind-7",
  label: "Financial Services"
}, {
  id: "ind-8",
  label: "Government & Policy"
}, {
  id: "ind-9",
  label: "Academia & Research"
}, {
  id: "ind-10",
  label: "NGO & Impact Investing"
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
  value: "Entrepreneurship & Funding™"
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
  text: "Full-day Entrepreneurship & Funding Stage access"
}, {
  id: "inc-2",
  text: "Premium executive programme (9 sessions)"
}, {
  id: "inc-3",
  text: "Investor matchmaking & deal-making sessions"
}, {
  id: "inc-4",
  text: "Delegate resource pack & recordings"
}];
const CTA_HEADLINE_WORDS = ["Build,", "Fund,", "Scale,", "Africa,", "Now."];
const AMBIENT_VENUE_BG = "url('https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2925.jpg')";
const QUICK_LINKS = ["Pillars", "Summits", "Academy", "Partners", "About Us"];
const SOCIAL_ICONS = [1, 2, 3, 4];
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

// ─── Sub-components ───────────────────────────────────────────────────────────

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
      backgroundColor: BG_NAV,
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      alignItems: "center",
      padding: "0 clamp(16px, 5vw, 80px)",
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
        backgroundColor: PRIMARY_ACCENT
      }} />

        {/* Logo */}
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexShrink: 0
      }}>
          <div style={{
          height: 32,
          width: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="12" r="5" fill={PRIMARY_ACCENT} />
              <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke={TERTIARY_ACCENT} strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="12" r="8" stroke={PRIMARY_ACCENT} strokeWidth="1" strokeOpacity="0.3" />
            </svg>
          </div>
          <span style={{
          fontFamily: "Figtree",
          fontSize: 16,
          fontWeight: 500,
          letterSpacing: "0.01em",
          color: "#FFFFFF"
        }}>
            Empowa<span style={{
            color: PRIMARY_ACCENT
          }}>Women</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex" style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: "4px"
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
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={11} style={{
                color: hoveredLink === link.id ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.25)"
              }} />}
                </span>
                <span style={{
              display: "block",
              height: "1.5px",
              width: "100%",
              backgroundColor: PRIMARY_ACCENT,
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

        {/* Right side: CTA pill (hidden on mobile) + hamburger */}
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexShrink: 0,
        marginLeft: "auto"
      }}>
          <a href="#register" className="hidden lg:inline-flex" style={{
          fontFamily: "Figtree",
          fontSize: "12px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: PRIMARY_ACCENT,
          borderRadius: "999px",
          padding: "8px 20px",
          textDecoration: "none",
          letterSpacing: "0.02em",
          alignItems: "center"
        }}>
            Secure Your Seat
          </a>
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#FFFFFF",
          padding: "4px",
          display: "flex",
          alignItems: "center"
        }} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
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
          justifyContent: "space-between",
          alignItems: "center"
        }}>
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown size={14} style={{
            color: "rgba(255,255,255,0.30)"
          }} />}
              </a>)}
            <a href="#register" onClick={() => setMobileOpen(false)} style={{
          fontFamily: "Figtree",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: PRIMARY_ACCENT,
          borderRadius: "999px",
          padding: "14px 24px",
          textDecoration: "none",
          textAlign: "center",
          marginTop: "24px",
          display: "block"
        }}>
              Secure Your Seat
            </a>
          </motion.nav>}
      </AnimatePresence>
    </div>;
};

// ─── Hero Section ─────────────────────────────────────────────────────────────

const IndustrialHeroBanner: React.FC = () => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  return <section id="home" style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: BG_DARK,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "68px",
    paddingBottom: "clamp(48px, 8vw, 80px)",
    boxSizing: "border-box"
  }}>
      {/* Noise texture */}
      <div style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 3,
      opacity: 0.04,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      backgroundSize: "256px 256px"
    }} />

      {/* Background image */}
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
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80" alt="" style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%"
          }} />
          </motion.div>
        </motion.div>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.7) 0%, rgba(10,10,15,0.4) 40%, rgba(10,10,15,0.95) 100%)"
      }} />
      </div>

      {/* Content */}
      <div style={{
      position: "relative",
      zIndex: 10,
      width: "100%",
      maxWidth: "1400px",
      padding: "0 clamp(16px, 5vw, 36px)",
      textAlign: "center",
      boxSizing: "border-box"
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 60
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}>
          {/* Eyebrow */}
          <div style={{
          marginBottom: "20px"
        }}>
            <div style={{
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
          }}>
              <span style={{
              display: "inline-block",
              width: "24px",
              height: "1.5px",
              backgroundColor: PRIMARY_ACCENT,
              flexShrink: 0
            }} />
              <span>ENTREPRENEURSHIP & FUNDING STAGE™</span>
            </div>
          </div>

          {/* Headline */}
          <h1 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(36px, 8vw, 96px)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          color: "#FFFFFF",
          maxWidth: "1100px",
          margin: "0 auto 28px auto"
        }}>
            <span>{"Africa's Economic Future Will Be Built by "}</span>
            <span style={{
            textDecoration: "underline",
            textDecorationColor: PRIMARY_ACCENT,
            textUnderlineOffset: "8px"
          }}>Entrepreneurs</span>
            <span>{", "}</span>
            <span style={{
            color: PRIMARY_ACCENT
          }}>Innovation</span>
            <span>{" & Access to "}</span>
            <span style={{
            color: PRIMARY_ACCENT
          }}>Capital.</span>
          </h1>

          {/* Meta chips */}
          <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "32px",
          flexWrap: "wrap"
        }}>
            {["Ignite Passion", "Foster Growth", "Drive Change"].map((tag, i) => <React.Fragment key={tag}>
                <span style={{
              fontFamily: "Figtree",
              fontSize: "clamp(10px, 2vw, 13px)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)"
            }}>
                  {tag}
                </span>
                {i < 2 && <div style={{
              width: "1px",
              height: "14px",
              backgroundColor: "rgba(255,255,255,0.2)"
            }} />}
              </React.Fragment>)}
          </div>

          {/* Body */}
          <p style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 17px)",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "780px",
          margin: "0 auto 40px auto",
          lineHeight: 1.7
        }}>
            Entrepreneurship remains one of the most powerful drivers of economic transformation, job creation, innovation, and
            inclusive growth across Africa. This stage convenes female entrepreneurs, investors, corporates, DFIs, venture capital
            firms, accelerators, ecosystem builders, academia, and policymakers to unlock scalable growth, funding access,
            procurement opportunities, and strategic partnerships.
          </p>

          {/* CTA buttons — stacked on mobile, row on sm+ */}
          <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          width: "100%"
        }} className="hero-cta-row">
            <a href="#register" style={{
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
            boxShadow: `0 0 32px rgba(255,45,135,0.25)`,
            width: "100%",
            maxWidth: "340px",
            boxSizing: "border-box"
          }} className="hero-cta-btn">
              <span>Secure Your Seat</span> <ArrowRight size={18} />
            </a>
            <a href="#" style={{
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
            width: "100%",
            maxWidth: "340px",
            boxSizing: "border-box"
          }} className="hero-cta-btn">
              Explore All Pillars
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 40%)",
      pointerEvents: "none",
      zIndex: 2
    }} />
    </section>;
};

// ─── Bento Grid Section ───────────────────────────────────────────────────────

const BentoSection: React.FC = () => {
  return <section style={{
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "clamp(64px, 10vw, 120px) clamp(16px, 5vw, 96px)",
    boxSizing: "border-box"
  }}>
      {/* Eyebrow */}
      <div style={{
      fontFamily: "Figtree, sans-serif",
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: PRIMARY_ACCENT,
      margin: "0 0 16px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
        <span style={{
        display: "inline-block",
        width: "24px",
        height: "1.5px",
        backgroundColor: PRIMARY_ACCENT,
        flexShrink: 0
      }} />
        <span>Focus Areas & Strategic ROI</span>
      </div>

      <h2 style={{
      fontFamily: "Figtree",
      fontWeight: 700,
      fontSize: "clamp(28px, 4.5vw, 52px)",
      lineHeight: 1.1,
      letterSpacing: "-0.025em",
      margin: "0 0 clamp(40px, 6vw, 60px) 0",
      maxWidth: "800px"
    }}>
        Accelerating the Future of Women-Led High-Growth Enterprises
      </h2>

      {/* Two-column grid: 1 col mobile, 2 col desktop */}
      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "clamp(32px, 5vw, 40px)"
    }} className="bento-grid">
        {/* Focus Areas */}
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} style={{
        backgroundColor: "#0D0D14",
        border: "1px solid rgba(255,255,255,0.06)",
        padding: "clamp(20px, 4vw, 32px)"
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
            backgroundColor: PRIMARY_ACCENT,
            flexShrink: 0
          }} />
            <h3 style={{
            fontFamily: "Figtree",
            fontSize: "18px",
            fontWeight: 700,
            margin: 0
          }}>Strategic Focus Pillars</h3>
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
            padding: "16px 0",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            cursor: "pointer"
          }}>
                <div style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: area.accent,
              flexShrink: 0
            }} />
                <span style={{
              fontFamily: "Figtree",
              fontSize: "15px",
              color: "rgba(255,255,255,0.7)"
            }}>{area.title}</span>
              </motion.div>)}
          </div>
        </motion.div>

        {/* ROI Metrics */}
        <motion.div initial={{
        opacity: 0,
        x: 30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        delay: 0.15
      }} style={{
        borderTop: `3px solid ${TERTIARY_ACCENT}`
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px"
        }}>
            <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
              <div style={{
              width: "3px",
              height: "28px",
              backgroundColor: TERTIARY_ACCENT,
              flexShrink: 0
            }} />
              <h3 style={{
              fontFamily: "Figtree",
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0
            }}>
                Partner Value & ROI Metrics
              </h3>
            </div>
            {/* ROI grid: 1 col mobile, 2 col sm+, 4 col lg+ — via inline class override in style tag */}
            <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px"
          }} className="roi-grid">
              {ROI_METRICS.map((metric, idx) => <motion.div key={metric.id} initial={{
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
              backgroundColor: "#111118",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "clamp(20px, 3vw, 28px)",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
                  <div style={{
                height: "2px",
                width: "32px",
                backgroundColor: TERTIARY_ACCENT,
                marginBottom: "8px"
              }} />
                  <span style={{
                fontFamily: "Figtree",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: TERTIARY_ACCENT
              }}>
                    {metric.label}
                  </span>
                  <span style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(28px, 5vw, 56px)",
                color: "#FFFFFF",
                letterSpacing: "-0.04em",
                lineHeight: 1
              }}>
                    {metric.value}
                  </span>
                  <p style={{
                fontFamily: "Figtree",
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
                margin: 0
              }}>
                    {metric.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

// ─── Programme Section ────────────────────────────────────────────────────────

const ProgrammeSection: React.FC = () => {
  return <section style={{
    backgroundColor: BG_DARK,
    padding: "clamp(64px, 10vw, 128px) clamp(16px, 5vw, 32px)",
    position: "relative",
    boxSizing: "border-box",
    width: "100%"
  }}>
      {/* Ambient venue background */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      backgroundImage: AMBIENT_VENUE_BG,
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
        textAlign: "center",
        marginBottom: "clamp(40px, 6vw, 64px)"
      }}>
          <div style={{
          width: "48px",
          height: "3px",
          backgroundColor: PRIMARY_ACCENT,
          margin: "0 auto 20px auto"
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
            HIGH-IMPACT EXECUTIVE PROGRAMME
          </p>
          <h2 style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px, 3.5vw, 44px)",
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
          lineHeight: 1.15,
          margin: "0 0 16px 0"
        }}>
            A Day of Capital, Innovation & Enterprise Growth
          </h2>
          <p style={{
          fontFamily: "Figtree, sans-serif",
          color: "rgba(255,255,255,0.45)",
          fontSize: "14px",
          lineHeight: 1.75,
          margin: "0 auto",
          maxWidth: "680px"
        }}>
            11:00 – 16:00 · Curated for Female CXOs, Entrepreneurs, Investors, DFIs, Venture Capitalists, Academia, Policymakers &
            Future-Focused Professionals
          </p>
        </div>

        {/* Sessions list */}
        <div style={{
        maxWidth: "48rem",
        margin: "0 auto"
      }}>
          {PROGRAMME_SESSIONS.map((session, i) => {
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
              delay: i * 0.06
            }} whileHover={{
              backgroundColor: "rgba(0,180,166,0.06)"
            }} style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 3vw, 24px)",
              backgroundColor: "rgba(0,180,166,0.04)",
              border: "1px solid rgba(0,180,166,0.12)",
              borderRadius: "8px",
              padding: "12px clamp(12px, 2vw, 16px)",
              margin: "4px 0",
              cursor: "default"
            }}>
                  <div style={{
                width: "52px",
                flexShrink: 0
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: SECONDARY_ACCENT
                }}>
                      {session.time}
                    </span>
                  </div>
                  <div style={{
                flex: 1,
                minWidth: 0
              }}>
                    <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap"
                }}>
                      <span style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: SECONDARY_ACCENT,
                    flexShrink: 0
                  }} />
                      <span style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "clamp(13px, 2vw, 15px)",
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
                    color: SECONDARY_ACCENT,
                    backgroundColor: "rgba(0,180,166,0.12)",
                    border: "1px solid rgba(0,180,166,0.25)",
                    borderRadius: "999px",
                    padding: "2px 10px"
                  }}>
                        INCLUDED
                      </span>
                    </div>
                    <p style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.35)",
                  margin: "4px 0 0 18px",
                  lineHeight: 1.5
                }}>
                      {session.subtitle}
                    </p>
                  </div>
                  <div style={{
                width: "28px",
                flexShrink: 0,
                textAlign: "right"
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.12)"
                }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
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
            delay: i * 0.06
          }} whileHover={{
            backgroundColor: "rgba(255,255,255,0.025)"
          }} style={{
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
          }}>
                <div style={{
              width: "52px",
              flexShrink: 0
            }}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: session.accentColor
              }}>
                    {session.time}
                  </span>
                </div>
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
                color: session.accentColor,
                display: "block"
              }}>
                    {session.format}
                  </span>
                  <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "clamp(13px, 2vw, 15px)",
                fontWeight: 500,
                color: "#FFFFFF",
                margin: "4px 0 0 0",
                lineHeight: 1.3
              }}>
                    {session.title}
                  </p>
                  <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                margin: "4px 0 0 0",
                lineHeight: 1.5
              }}>
                    {session.subtitle}
                  </p>
                </div>
                <div style={{
              width: "28px",
              flexShrink: 0,
              textAlign: "right"
            }}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.12)"
              }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>;
        })}
        </div>

        {/* Stats footer */}
        <div style={{
        maxWidth: "48rem",
        margin: "48px auto 0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "clamp(16px, 5vw, 80px)",
        paddingTop: "32px",
        borderTop: "1px solid rgba(255,255,255,0.06)"
      }}>
          {PROGRAMME_STATS.map(stat => <div key={stat.id} style={{
          textAlign: "center"
        }}>
              <span style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(12px, 2vw, 14px)",
            fontWeight: 600,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.04em"
          }}>
                {stat.label}
              </span>
            </div>)}
        </div>
      </div>
    </section>;
};

// ─── Registration Section ─────────────────────────────────────────────────────

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
    padding: "clamp(64px, 10vw, 128px) clamp(16px, 5vw, 32px)",
    boxSizing: "border-box",
    width: "100%"
  }}>
      {/* Radial glow */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(255,45,135,0.05) 0%, transparent 65%)",
      pointerEvents: "none"
    }} />

      {/* Inner layout */}
      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "1024px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(40px, 6vw, 64px)",
      alignItems: "start",
      width: "100%"
    }} className="reg-layout">
        {/* LEFT: Form */}
        <div style={{
        flex: 1,
        minWidth: 0,
        width: "100%"
      }}>
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
            Secure Your Place at Africa's Entrepreneurship & Funding Stage™
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
                Thank you for registering for the Entrepreneurship &amp; Funding Stage™. Our team will confirm your delegate place
                within 24 hours. Please check your inbox.
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
              <p style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "11px",
            color: "rgba(255,45,135,0.50)",
            letterSpacing: "0.08em",
            marginTop: "8px",
            textAlign: "center"
          }}>
                #EntrepreneurshipLeads · #EmpowaWomen · #WomenInBusiness
              </p>
            </div> : <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%"
        }}>
              {/* Row 1: First Name | Last Name — stacked on mobile */}
              <div style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }} className="reg-name-row">
                <input type="text" placeholder="First Name" value={form.firstName} onChange={e => handleChange("firstName", e.target.value)} onFocus={() => setFocused("firstName")} onBlur={() => setFocused(null)} style={getInputStyle("firstName")} required />
                <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => handleChange("lastName", e.target.value)} onFocus={() => setFocused("lastName")} onBlur={() => setFocused(null)} style={getInputStyle("lastName")} required />
              </div>

              {/* Job Title */}
              <input type="text" placeholder="Job Title / Designation" value={form.jobTitle} onChange={e => handleChange("jobTitle", e.target.value)} onFocus={() => setFocused("jobTitle")} onBlur={() => setFocused(null)} style={getInputStyle("jobTitle")} required />

              {/* Company | Industry — stacked on mobile */}
              <div style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }} className="reg-company-row">
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
              }}>
                    Industry
                  </option>
                  {INDUSTRY_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
                color: "#FFFFFF",
                backgroundColor: "#111118"
              }}>
                      {opt.label}
                    </option>)}
                </select>
              </div>

              {/* Email */}
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => handleChange("email", e.target.value)} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={getInputStyle("email")} required />

              {/* Phone */}
              <input type="tel" placeholder="+27 ..." value={form.phone} onChange={e => handleChange("phone", e.target.value)} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={getInputStyle("phone")} />

              {/* How did you hear */}
              <select value={form.hearAboutUs} onChange={e => handleChange("hearAboutUs", e.target.value)} onFocus={() => setFocused("hearAboutUs")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("hearAboutUs"),
            appearance: "none",
            WebkitAppearance: "none",
            color: form.hearAboutUs ? "#FFFFFF" : "rgba(255,255,255,0.25)"
          }}>
                <option value="" disabled style={{
              color: "rgba(255,255,255,0.25)",
              backgroundColor: "#111118"
            }}>
                  How did you hear about us?
                </option>
                {HEAR_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
              color: "#FFFFFF",
              backgroundColor: "#111118"
            }}>
                    {opt.label}
                  </option>)}
              </select>

              {/* Special requirements */}
              <textarea rows={3} placeholder="Any special requirements, dietary needs, or questions for our team?" value={form.specialRequirements} onChange={e => handleChange("specialRequirements", e.target.value)} onFocus={() => setFocused("specialRequirements")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("specialRequirements"),
            resize: "vertical",
            lineHeight: 1.6,
            width: "100%"
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
                  I agree to the EmpowaWomen™ Privacy Policy and Terms &amp; Conditions. I consent to receiving summit-related
                  communications.
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

        {/* RIGHT: Summary Card */}
        <div style={{
        width: "100%",
        flexShrink: 0
      }} className="reg-card-col">
          <div style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          overflow: "hidden"
        }}>
            {/* Top image strip */}
            <div style={{
            height: "180px",
            backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2925.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            width: "100%"
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
            padding: "clamp(20px, 3vw, 28px)"
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
                Entrepreneurship &amp; Funding Stage™
              </p>

              <div style={{
              borderTop: "1px solid rgba(255,45,135,0.25)",
              margin: "20px 0"
            }} />

              {/* Details rows */}
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
          .reg-layout { flex-direction: row !important; }
          .reg-card-col {
            width: 420px !important;
            position: sticky;
            top: 32px;
            align-self: flex-start;
          }
        }
        @media (min-width: 640px) {
          .reg-name-row { flex-direction: row !important; }
          .reg-company-row { flex-direction: row !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        select option { background-color: #111118; }
      `}</style>
    </motion.section>;
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const EntrepreneurshipFundingPillar: React.FC = () => {
  return <div style={{
    width: "100%",
    backgroundColor: BG_DARK,
    color: "#FFFFFF",
    minHeight: "100vh",
    overflowX: "hidden"
  }}>
      <MainNavBar />

      <main>
        <IndustrialHeroBanner />
        <BentoSection />
        <ProgrammeSection />

        {/* CTA Section */}
        <section style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 15vw, 160px) clamp(16px, 5vw, 96px)",
        textAlign: "center",
        boxSizing: "border-box",
        width: "100%"
      }}>
          <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1573161559521-4830bb58ebff?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          filter: "grayscale(1) brightness(0.5)",
          zIndex: 0
        }} />
          <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, transparent 0%, ${BG_DARK} 100%)`,
          zIndex: 0
        }} />

          <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1
        }}>
            <div style={{
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
          }}>
              <span style={{
              display: "inline-block",
              width: "24px",
              height: "1.5px",
              backgroundColor: PRIMARY_ACCENT
            }} />
              <span>Take the Next Step</span>
            </div>
            <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(40px, 8vw, 96px)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            marginBottom: "32px"
          }}>
              {CTA_HEADLINE_WORDS.map((word, i) => <motion.span key={`cta-${word}-${i}`} initial={{
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
              delay: i * 0.1
            }} style={{
              display: "inline-block",
              marginRight: "0.2em",
              ...(word === "Now." ? {
                textDecoration: "underline",
                textDecorationColor: PRIMARY_ACCENT,
                textUnderlineOffset: "8px"
              } : {})
            }}>
                  {word}
                </motion.span>)}
            </h2>
            <p style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "600px",
            margin: "0 auto 48px auto",
            lineHeight: 1.6
          }}>
              The future of Africa's entrepreneurial economy is women-led. Secure your place at the forefront of this transformation.
            </p>

            <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            width: "100%"
          }} className="cta-btn-row">
              <a href="#register" style={{
              backgroundColor: PRIMARY_ACCENT,
              color: "#FFFFFF",
              padding: "20px 48px",
              fontSize: "16px",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
              boxShadow: `0 0 40px ${PRIMARY_ACCENT}44`,
              width: "100%",
              maxWidth: "340px",
              boxSizing: "border-box",
              textAlign: "center"
            }} className="cta-btn">
                Secure Your Seat Now
              </a>
              <button style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#FFFFFF",
              padding: "20px 48px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
              maxWidth: "340px",
              boxSizing: "border-box"
            }} className="cta-btn">
                Download Prospectus
              </button>
            </div>
          </div>
        </section>

        <DelegateRegistrationSection />
      </main>

      {/* Footer */}
      <footer style={{
      backgroundColor: "#050508",
      padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 80px) 40px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      boxSizing: "border-box",
      width: "100%"
    }}>
        <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "clamp(40px, 6vw, 60px)"
      }} className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px"
          }}>
              <span style={{
              fontFamily: "Figtree",
              fontSize: "clamp(20px, 4vw, 28px)",
              fontWeight: 700,
              color: "#FFFFFF"
            }}>
                Empowa<span style={{
                color: PRIMARY_ACCENT
              }}>Women</span>
              </span>
            </div>
            <p style={{
            color: "rgba(255,255,255,0.4)",
            maxWidth: "400px",
            lineHeight: 1.7,
            marginBottom: "32px",
            fontSize: "14px"
          }}>
              The leading pan-African platform dedicated to elevating women in the growth economy through intelligence, capital, and
              strategic ecosystems.
            </p>
            <div style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap"
          }}>
              {SOCIAL_ICONS.map(i => <div key={i} style={{
              width: "36px",
              height: "36px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }} />)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
            fontWeight: 700,
            marginBottom: "24px",
            color: "#FFFFFF",
            fontSize: "15px"
          }}>Quick Links</h4>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}>
              {QUICK_LINKS.map(link => <a key={link} href="#" style={{
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontSize: "14px"
            }}>
                  {link}
                </a>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
            fontWeight: 700,
            marginBottom: "24px",
            color: "#FFFFFF",
            fontSize: "15px"
          }}>Contact</h4>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "14px"
          }}>
              <span>Sandton, Johannesburg, RSA</span>
              <span>info@empowawomen.co.za</span>
              <span>+27 (0) 11 000 0000</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
        marginTop: "clamp(40px, 6vw, 80px)",
        paddingTop: "32px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center"
      }} className="footer-bottom">
          <span style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "12px"
        }}>
            © {new Date().getFullYear()} EmpowaWomen. All Rights Reserved.
          </span>
          <div style={{
          display: "flex",
          gap: "24px"
        }}>
            <a href="#" style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "12px",
            textDecoration: "none"
          }}>
              Privacy Policy
            </a>
            <a href="#" style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "12px",
            textDecoration: "none"
          }}>
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background-color: ${BG_DARK}; overflow-x: hidden; }

        /* Hero CTA buttons: stacked on mobile, row on sm+ */
        @media (min-width: 640px) {
          .hero-cta-row { flex-direction: row !important; }
          .hero-cta-btn { width: auto !important; max-width: none !important; }
        }

        /* Bento: 1 col mobile, 2 col lg+ */
        @media (min-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr 1fr !important; }
        }

        /* ROI metrics: 1 col mobile, 2 col sm+, 2 col inside bento */
        @media (min-width: 640px) {
          .roi-grid { grid-template-columns: 1fr 1fr !important; }
        }

        /* Registration */
        @media (min-width: 1024px) {
          .reg-layout { flex-direction: row !important; }
          .reg-card-col {
            width: 420px !important;
            position: sticky;
            top: 32px;
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

        /* Footer grid: 1 col mobile, 2 col sm+, 3 col lg+ */
        @media (min-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-brand { grid-column: span 2; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr !important; }
          .footer-brand { grid-column: span 1 !important; }
        }

        /* Footer bottom bar: stacked on mobile, horizontal on md+ */
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row !important;
            justify-content: space-between !important;
            text-align: left !important;
          }
        }

        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        select option { background-color: #111118; }

        img { max-width: 100%; }
      `}</style>
    </div>;
};