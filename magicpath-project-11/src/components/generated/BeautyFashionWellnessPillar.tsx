import * as React from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, ShoppingBag, HeartPulse, Brain, Activity, Store, Camera, Dumbbell, ArrowRight, Menu, X, ChevronDown, Instagram, Linkedin, Twitter, Youtube, Quote, Check, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

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
  accentRgb: string;
}
interface NavLink {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
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
const NAV_LINKS: NavLink[] = [{
  id: "nav-home",
  label: "Home",
  href: "#"
}, {
  id: "nav-about",
  label: "About",
  href: "#"
}, {
  id: "nav-summits",
  label: "Summits",
  href: "#",
  hasDropdown: true
}, {
  id: "nav-pillars",
  label: "Pillars",
  href: "#",
  hasDropdown: true,
  isActive: true
}, {
  id: "nav-academy",
  label: "Academy",
  href: "#"
}, {
  id: "nav-partners",
  label: "Partners",
  href: "#"
}, {
  id: "nav-contact",
  label: "Contact",
  href: "#"
}];
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Sparkles,
  title: "Beauty & Personal Care Innovation",
  accentColor: "#FF2D87"
}, {
  id: "fa-2",
  icon: ShoppingBag,
  title: "Fashion & Luxury Markets",
  accentColor: "#D4AF37"
}, {
  id: "fa-3",
  icon: HeartPulse,
  title: "Wellness & Lifestyle Economies",
  accentColor: "#FF2D87"
}, {
  id: "fa-4",
  icon: Brain,
  title: "Mental Health & Corporate Wellness",
  accentColor: "#00B4A6"
}, {
  id: "fa-5",
  icon: Activity,
  title: "Health Innovation & Preventative Care",
  accentColor: "#00B4A6"
}, {
  id: "fa-6",
  icon: Store,
  title: "Women-Led Consumer Brands",
  accentColor: "#FF2D87"
}, {
  id: "fa-7",
  icon: Camera,
  title: "Influencer & Beauty Commerce",
  accentColor: "#D4AF37"
}, {
  id: "fa-8",
  icon: Dumbbell,
  title: "Fitness, Nutrition & Holistic Wellness",
  accentColor: "#00B4A6"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Consumer Brand Growth & Commercialisation",
  value: "78%+",
  description: "Accelerated market entry and revenue scaling for women-owned consumer enterprises."
}, {
  label: "Strategic Retail & Media Partnerships",
  value: "110+",
  description: "Direct connections established between brands and tier-1 retail distributors and media."
}, {
  label: "Wellness Innovation Exposure",
  value: "Tier 1",
  description: "Global visibility for African wellness solutions within international health ecosystems."
}, {
  label: "Women-Led Lifestyle Enterprise Market",
  value: "R8B+",
  description: "Identified market valuation of the collective portfolio within the EmpowaWomen network."
}];
const PROGRAMME_SESSIONS: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00",
  format: "OPENING KEYNOTE™",
  title: "Women Must Lead the Future of Africa's Wellness, Beauty & Lifestyle Economy",
  subtitle: "Who Will Define Africa's Next Consumer, Wellness & Cultural Growth Markets?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS™",
  title: "Beauty Innovation, Digital Commerce & the Future of Consumer Brands™",
  subtitle: "Technology, Consumer Behaviour & Wellness Trends Will Define the Next Era of Lifestyle Growth.",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL™",
  title: "Women, Wellness & the Future of the Consumer Economy™",
  subtitle: "The Future of Wellness Will Be Defined by Innovation, Influence & Consumer Trust.",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-4",
  time: "12:50",
  format: "NETWORKING LUNCH™",
  title: "Cultivating Influence, Partnerships & Lifestyle Market Growth™",
  subtitle: "Which Strategic Relationships Will Accelerate Your Brand, Wellness & Consumer Growth Journey?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-5",
  time: "13:20",
  format: "FIRECHAT™",
  title: "Brand Building, Market Access & Women-Led Lifestyle Enterprises™",
  subtitle: "Influence Without Commercial Scale Is a Missed Economic Opportunity.",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP™",
  title: "The Business of Wellness, Consumer Influence & Brand Monetisation™",
  subtitle: "The Future of Consumer Growth Will Belong to Brands That Build Trust, Wellness & Community.",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Fashion, Beauty, Health & the Future of the Wellness Economy™",
  subtitle: "Wellness, Identity & Lifestyle Influence Are Becoming High-Value Economic Assets.",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Wellness Economy & Women-Led Consumer Transformation™",
  subtitle: "Innovation, Wellness & Women Leadership Will Shape Africa's Consumer Future.",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-9",
  time: "15:50",
  format: "CLOSING KEYNOTE™",
  title: "Africa's Wellness & Consumer Economy Will Be Led by Women Who Build, Influence & Transform",
  subtitle: "Will You Be One of the Women Defining Africa's Future Lifestyle & Consumer Economy?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}];
const CTA_HEADLINE_WORDS = ["Lead,", "Africa's,", "Wellness,", "Economy,", "Now."];
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
const INDUSTRY_OPTIONS = [{
  id: "ind-1",
  label: "Beauty & Personal Care"
}, {
  id: "ind-2",
  label: "Fashion & Luxury"
}, {
  id: "ind-3",
  label: "Health & Wellness"
}, {
  id: "ind-4",
  label: "Fitness & Nutrition"
}, {
  id: "ind-5",
  label: "Healthcare & Pharmaceuticals"
}, {
  id: "ind-6",
  label: "Retail & E-Commerce"
}, {
  id: "ind-7",
  label: "Media & Influencer Economy"
}, {
  id: "ind-8",
  label: "Investment & Finance"
}, {
  id: "ind-9",
  label: "Academia & Research"
}, {
  id: "ind-10",
  label: "Policymaking & Government"
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
  value: "Beauty, Fashion, Health & Wellness™"
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
  value: "R1,500 per delegate"
}];
const INCLUDES = [{
  id: "inc-1",
  text: "Full-day Beauty, Fashion, Health & Wellness Stage access"
}, {
  id: "inc-2",
  text: "Premium executive programme (9 sessions)"
}, {
  id: "inc-3",
  text: "High-impact networking & brand matchmaking"
}, {
  id: "inc-4",
  text: "Delegate resource pack & recordings"
}];
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
  boxSizing: "border-box" as const
};

// ─── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{
  children: React.ReactNode;
  color?: string;
}> = ({
  children,
  color = "#FF2D87"
}) => <p className="flex items-center gap-3 mb-4 text-[10px] font-semibold tracking-[0.14em] uppercase" style={{
  fontFamily: "Figtree",
  color
}}>
    <span className="inline-block w-6 h-[1.5px]" style={{
    backgroundColor: color
  }} />
    <span>{children}</span>
  </p>;
const NavBar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <nav className="fixed top-0 left-0 right-0 z-[100]">
      <header className="h-[68px] bg-[#0A0A0F]/97 backdrop-blur-md border-b border-white/6 flex items-center justify-between px-4 md:px-12 lg:px-20 relative">
        <motion.div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#FF2D87] origin-left" style={{
        scaleX
      }} />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="12" r="5" fill="#FF2D87" />
              <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <circle cx="16" cy="12" r="8" stroke="#FF2D87" strokeWidth="1" strokeOpacity="0.3" />
            </svg>
          </div>
          <span className="font-['Figtree'] text-base font-medium tracking-tight whitespace-nowrap">
            <span className="text-white">Empowa</span>
            <span className="text-[#FF2D87]">Women</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-0">
          {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
              <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} className={cn("px-3 py-1.5 font-['Figtree'] text-[12px] tracking-widest transition-colors flex flex-col items-center gap-0.5", hoveredLink === link.id || link.isActive ? "text-white/80" : "text-white/40")}>
                <span className="flex items-center gap-1">
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={11} className={hoveredLink === link.id ? "text-white/60" : "text-white/25"} />}
                </span>
                <span className={cn("h-[1.5px] w-full bg-[#FF2D87] origin-left transition-transform duration-200", hoveredLink === link.id || link.isActive ? "scale-x-100" : "scale-x-0")} />
              </a>
              {idx < NAV_LINKS.length - 1 && <span className="text-white/15 text-[8px]">·</span>}
            </React.Fragment>)}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex bg-[#FF2D87] text-white px-5 py-2 rounded-full font-['Figtree'] text-[12px] font-medium tracking-tight hover:brightness-110 transition-all relative overflow-hidden">
            <span className="relative z-10">Secure Your Seat</span>
            <span className="absolute inset-0 bg-white/15 skew-x-[-20deg] translate-x-[-100%] animate-[shimmerSlide_3s_linear_infinite]" />
          </button>
          <button className="lg:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} className="lg:hidden bg-[#0A0A0F]/98 border-b border-white/6 px-4 md:px-12 py-6 flex flex-col">
            {NAV_LINKS.map(link => <a key={link.id} href={link.href} className={cn("py-3.5 border-b border-white/5 font-['Figtree'] text-base tracking-wide flex items-center justify-between", link.isActive ? "text-white font-medium" : "text-white/60")} onClick={() => setMobileOpen(false)}>
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} className="text-white/30" />}
              </a>)}
            <button className="mt-6 bg-[#FF2D87] text-white py-3.5 rounded-full font-['Figtree'] text-sm font-medium tracking-wide">
              Secure Your Seat
            </button>
          </motion.div>}
      </AnimatePresence>
    </nav>;
};
const HeroBanner: React.FC = () => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const lines = [{
    words: ["Beauty,", "Wellness"]
  }, {
    words: ["&", "Fashion."]
  }, {
    words: ["Growth."]
  }];
  let wordCounter = 0;
  return <section className="relative w-full min-h-screen bg-[#0A0A0F] overflow-hidden flex flex-col items-center justify-center pt-[68px] pb-12 md:pb-20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div initial={{
        scale: 1.05,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 2.5,
        ease: "easeOut"
      }} style={{
        y: imageY
      }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80" alt="Wellness Culture" className="w-full h-full object-cover opacity-40 grayscale-[20%]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/65 via-[#0A0A0F]/35 to-[#0A0A0F]/95" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] px-6 lg:px-12 pt-12 md:pt-32 pb-8 flex flex-col items-center text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="flex items-center gap-2.5 mb-6 text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D87] animate-pulse" />
          BEAUTY, FASHION, HEALTH & WELLNESS STAGE™
        </motion.div>

        <h1 className="font-['Figtree'] font-light text-[40px] md:text-[72px] lg:text-[96px] leading-none tracking-[-0.04em] text-white mb-8 max-w-[1000px]">
          {lines.map((line, i) => <span key={i} className="block overflow-hidden pb-1">
              {line.words.map((word, j) => {
            const index = wordCounter++;
            const isDecorated = word.includes('.') || word.includes(',');
            const cleanWord = isDecorated ? word.slice(0, -1) : word;
            const punctuation = isDecorated ? word.slice(-1) : "";
            return <motion.span key={j} initial={{
              opacity: 0,
              y: 50,
              filter: "blur(10px)"
            }} animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)"
            }} transition={{
              duration: 0.8,
              delay: 0.4 + index * 0.12,
              ease: [0.21, 0.47, 0.32, 0.98]
            }} className="inline-block mr-[0.25em]">
                    {isDecorated ? <>
                        <span className="underline decoration-[#FF2D87] decoration-[3px] underline-offset-8">
                          {cleanWord}
                        </span>
                        <span className="text-[#FF2D87]">{punctuation}</span>
                      </> : word}
                  </motion.span>;
          })}
            </span>)}
        </h1>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.2
      }} className="flex flex-wrap justify-center items-center gap-3 mb-8 text-[10px] md:text-[13px] tracking-[0.18em] uppercase text-white/40">
          <span>Identity</span>
          <span className="w-px h-3.5 bg-white/20" />
          <span>Lifestyle</span>
          <span className="w-px h-3.5 bg-white/20" />
          <span>Influence</span>
          <span className="w-px h-3.5 bg-white/20" />
          <span>Enterprise</span>
        </motion.div>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.4
      }} className="font-['Figtree'] text-[14px] md:text-[16px] text-white/50 max-w-[700px] leading-relaxed mb-10 px-4">
          The global wellness economy continues to redefine consumer behaviour, health consciousness, beauty innovation, fashion influence, and lifestyle-driven commerce. This stage explores the rise of these powerful economic drivers shaping women-led growth across Africa.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.6
      }} className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto px-6">
          <button className="w-full sm:w-auto bg-[#FF2D87] text-white px-8 py-4 font-['Figtree'] text-[14px] md:text-[15px] font-medium tracking-wide flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_32px_rgba(255,45,135,0.25)] relative overflow-hidden group">
            <span className="relative z-10">Secure Your Seat</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-white/15 skew-x-[-20deg] translate-x-[-100%] animate-[shimmerSlide_3s_linear_infinite]" />
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 font-['Figtree'] text-[14px] md:text-[15px] font-light tracking-wide hover:bg-white/10 transition-all">
            Explore Programme
          </button>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 2
      }} className="mt-12 md:mt-20 flex items-center gap-4">
          <div className="flex -space-x-2.5">
            {[1, 2, 3, 4, 5, 6].map(i => <img key={i} src={`https://images.unsplash.com/photo-${["1531123897727-8f129e1688ce", "1520813792240-56fc4a3765a7", "1502685104226-ee32379fefbe", "1567532939604-b6b5b0db2604", "1573496359142-b8d87734a5a2", "1580489944761-15a19d654956"][i - 1]}?w=80&q=80`} alt="Participant" className="w-9 h-9 rounded-full border-2 border-[#0A0A0F] object-cover" />)}
          </div>
          <div className="text-left">
            <div className="text-white text-sm font-semibold">10,000+ Women</div>
            <div className="text-white/45 text-[11px]">Leading Africa's Wellness Economy</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent pointer-events-none z-[2]" />
    </section>;
};
const ProgrammeSection: React.FC = () => {
  const progRef = React.useRef<HTMLDivElement>(null);
  const progInView = useInView(progRef, {
    once: true,
    margin: "-80px"
  });
  return <section ref={progRef} style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "128px",
    paddingBottom: "128px",
    paddingLeft: "16px",
    paddingRight: "16px",
    position: "relative",
    overflow: "hidden"
  }}>
      {/* Ambient venue background image */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.06,
      pointerEvents: "none"
    }} />

      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "1024px",
      margin: "0 auto"
    }}>
        {/* Header */}
        <div style={{
        width: "48px",
        height: "3px",
        backgroundColor: "#FF2D87",
        marginBottom: "20px"
      }} />
        <p style={{
        fontFamily: "Figtree, sans-serif",
        fontSize: "9px",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.40)",
        margin: "0 0 20px 0"
      }}>
          HIGH-IMPACT EXECUTIVE PROGRAMME
        </p>
        <motion.h2 initial={{
        opacity: 0,
        y: 24
      }} animate={progInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98]
      }} style={{
        fontFamily: "Figtree, sans-serif",
        fontWeight: 300,
        fontSize: "clamp(26px, 4vw, 48px)",
        color: "#FFFFFF",
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        margin: "0 0 16px 0"
      }}>
          A Day of Innovation, Influence & Consumer Growth
        </motion.h2>
        <p style={{
        fontFamily: "Figtree, sans-serif",
        color: "rgba(255,255,255,0.45)",
        fontSize: "14px",
        lineHeight: 1.75,
        margin: "0 0 56px 0",
        maxWidth: "760px"
      }}>
          11:00 – 16:00 · Curated for Female CXOs, Entrepreneurs, Beauty Executives, Wellness Leaders, Investors, Media, Academia, Policymakers &amp; Future-Focused Professionals
        </p>

        {/* Sessions list */}
        <div style={{
        maxWidth: "768px",
        margin: "0 auto"
      }}>
          {PROGRAMME_SESSIONS.map((session, i) => {
          const isLunch = session.id === "ps-4";
          if (isLunch) {
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
              borderBottom: "1px solid rgba(255,255,255,0.06)"
            }}>
                  {/* Time col */}
                  <div style={{
                width: "80px",
                flexShrink: 0
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "#00B4A6"
                }}>
                      {session.time}
                    </span>
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
                  padding: "12px 16px",
                  margin: "4px 0",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px"
                }}>
                      <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#00B4A6",
                    flexShrink: 0,
                    marginTop: "5px"
                  }} />
                      <div>
                        <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap"
                    }}>
                          <span style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#00B4A6"
                      }}>
                            {session.format}
                          </span>
                          <span style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#00B4A6",
                        backgroundColor: "rgba(0,180,166,0.10)",
                        border: "1px solid rgba(0,180,166,0.25)",
                        borderRadius: "4px",
                        padding: "2px 6px"
                      }}>
                            INCLUDED
                          </span>
                        </div>
                        <p style={{
                      fontFamily: "Figtree, sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      margin: "4px 0 0 0",
                      lineHeight: 1.4
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
                    </div>
                  </div>
                  {/* Session number col */}
                  <div style={{
                width: "36px",
                flexShrink: 0,
                textAlign: "right"
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
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
            borderBottom: "1px solid rgba(255,255,255,0.06)"
          }}>
                {/* Time col */}
                <div style={{
              width: "80px",
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
                color: session.accentColor,
                display: "block"
              }}>
                    {session.format}
                  </span>
                  <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                color: "#FFFFFF",
                margin: "4px 0 0 0",
                lineHeight: 1.4
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
                {/* Session number col */}
                <div style={{
              width: "36px",
              flexShrink: 0,
              textAlign: "right"
            }}>
                  <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
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
        maxWidth: "768px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "48px",
        paddingTop: "32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        flexWrap: "wrap",
        gap: "16px"
      }}>
          {[{
          label: "9 Sessions"
        }, {
          label: "11:00 Start"
        }, {
          label: "16:00 Close"
        }].map(stat => <div key={stat.label} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px"
        }}>
              <span style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "13px",
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
const RegistrationSection: React.FC = () => {
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
  return <motion.section initial={{
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
      {/* Radial pink glow */}
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
            Secure Your Place at Africa's Beauty, Fashion, Health &amp; Wellness Stage™
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
                Thank you for registering for the Beauty, Fashion, Health &amp; Wellness Stage™. Our team will confirm your delegate place within 24 hours. Please check your inbox.
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
                #WellnessEconomy · #EmpowaWomen · #WomenInBeauty
              </p>
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
                  I agree to the EmpowaWomen™ Privacy Policy and Terms &amp; Conditions. I consent to receiving summit-related communications.
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
            backgroundImage: "url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1600&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
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
                Beauty, Fashion, Health &amp; Wellness Stage™
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

              {/* Shield badge row */}
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
const Footer: React.FC = () => {
  return <footer className="relative w-full bg-[#0A0A0F] text-white border-t border-white/6 px-4 md:px-12 lg:px-20 pt-20 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] aspect-[2/1] opacity-25 pointer-events-none select-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')] bg-cover bg-center [mask-image:linear-gradient(to_top,transparent_0%,black_35%)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <SectionLabel color="rgba(255,255,255,0.6)">Stay Influential</SectionLabel>
            <h2 className="font-['Figtree'] font-light text-[28px] md:text-[56px] leading-[1.05] tracking-[-0.04em] mb-6">
              {["Join", "the", "lifestyle", "transformation.", "Now."].map((word, i) => <motion.span key={i} initial={{
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
              delay: i * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98]
            }} className="inline-block mr-[0.2em]">
                  {word}
                </motion.span>)}
            </h2>
            <p className="font-['Figtree'] text-[15px] md:text-[18px] text-white/45 max-w-[450px] leading-relaxed">
              Leadership insights, beauty innovation reports, and curated investment opportunities for Africa's most ambitious lifestyle entrepreneurs.
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex w-full">
              <input type="email" placeholder="Your email address" className="flex-1 bg-white/5 border border-white/10 border-r-0 px-5 py-4 outline-none font-['Figtree'] text-sm focus:bg-white/10 transition-colors" />
              <button className="bg-[#FF2D87] text-white px-8 py-4 font-['Figtree'] font-medium text-sm hover:brightness-110 transition-all flex items-center gap-2 relative overflow-hidden">
                <span className="relative z-10">Subscribe</span>
                <ArrowRight size={14} className="relative z-10" />
                <span className="absolute inset-0 bg-white/15 skew-x-[-20deg] translate-x-[-100%] animate-[shimmerSlide_3s_linear_infinite]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 mb-12">
          {[{
          label: "Pages",
          links: ["About", "Summits", "Programs", "Partners", "Agenda", "Contact"]
        }, {
          label: "Programs",
          links: ["EmpowaHER", "Beauty Accelerator", "Wellness Fund", "Style Masterclass"]
        }, {
          label: "Legal",
          links: ["Privacy Policy", "Terms of Use", "Cookie Settings"]
        }].map((row, i) => <div key={i} className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-['Figtree'] text-sm font-medium min-w-[100px]">{row.label}</span>
              <div className="hidden md:block flex-1 h-px bg-white/10" />
              <div className="flex flex-wrap gap-4 md:gap-6 justify-start md:justify-end">
                {row.links.map((link, j) => <a key={j} href="#" className="font-['Figtree'] text-[14px] text-white/45 hover:text-white transition-colors">{link}</a>)}
              </div>
            </div>)}
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-['Figtree'] text-lg font-medium tracking-tight">
                <span className="text-white">Empowa</span>
                <span className="text-[#FF2D87]">Women</span>
              </span>
            </div>
            <p className="text-[12px] text-white/25">© {new Date().getFullYear()} EmpowaWomen. All rights reserved.</p>
            <p className="text-[12px] font-light italic text-[#FF2D87]">Ignite Passion | Foster Growth | Drive Change</p>
          </div>

          <div className="flex items-center gap-3">
            {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white hover:text-[#0A0A0F] transition-all duration-300">
                <Icon size={18} />
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};

// ─── Main Component ────────────────────────────────────────────────────────────

export const BeautyFashionWellnessPillar: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  return <div className="w-full bg-[#0A0A0F] text-white selection:bg-[#FF2D87]/30">
      <NavBar />

      <main>
        <HeroBanner />

        {/* ── Quote Section ── */}
        <section className="px-6 md:px-12 lg:px-20 py-24 md:py-40 flex justify-center text-center">
          <div className="max-w-[1000px]">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1
          }}>
              <Quote className="mx-auto mb-8 text-[#FF2D87]/40" size={48} />
              <h2 className="font-['Figtree'] font-light text-[28px] md:text-[42px] lg:text-[52px] leading-tight italic text-white/90">
                "The Wellness Economy Is Reshaping Consumer Markets, Identity, Lifestyle & Women-Led Enterprise Growth."
              </h2>
            </motion.div>
          </div>
        </section>

        {/* ── Bento Grid: Focus Areas & ROI ── */}
        <section ref={bentoRef} className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 md:py-32">
          <SectionLabel>Focus Areas & Strategic ROI</SectionLabel>
          <h2 className="font-['Figtree'] font-bold text-[32px] md:text-[52px] leading-[1.1] tracking-tight mb-12 md:mb-16 max-w-[750px]">
            Building Resilience Through High-Growth Consumer Sectors
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Column A — Focus Areas */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={bentoInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} className="bg-[#0D0D14] border border-white/6 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-1 h-7 bg-[#D4AF37]" />
                <h3 className="font-['Figtree'] text-xl font-bold">Key Focus Areas</h3>
              </div>

              <div className="flex flex-col">
                {FOCUS_AREAS.map(area => <motion.div key={area.id} whileHover={{
                x: 8
              }} className="flex items-center gap-5 py-4 border-b border-white/5 cursor-pointer group">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{
                  backgroundColor: area.accentColor
                }} />
                    <area.icon size={18} className="text-white/30 group-hover:text-white/60 transition-colors" />
                    <span className="font-['Figtree'] text-[15px] font-normal text-white/70 group-hover:text-white transition-colors">
                      {area.title}
                    </span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Column B — ROI Metrics */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={bentoInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} className="flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <div className="w-1 h-7 bg-[#FF2D87]" />
                <h3 className="font-['Figtree'] text-xl font-bold">Partner Value & ROI Metrics</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
                {ROI_METRICS.map((metric, idx) => <motion.div key={idx} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: idx * 0.1
              }} className="bg-[#111118] border border-white/8 p-8 flex flex-col gap-3 relative overflow-hidden">
                    <div className="w-10 h-[2px] bg-[#D4AF37] mb-2" />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#D4AF37]">
                      {metric.label}
                    </span>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">
                      {metric.value}
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed max-w-[200px]">
                      {metric.description}
                    </p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Programme Section ── */}
        <ProgrammeSection />

        {/* ── Final CTA Section ── */}
        <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden bg-[#0A0A0F] flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2D87]/40 to-transparent" />
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] aspect-[2/1] opacity-25 pointer-events-none select-none">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80')] bg-cover bg-center [mask-image:linear-gradient(to_top,transparent_0%,black_40%)]" />
          </div>

          <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-radial-gradient from-[#FF2D87]/8 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-[960px]">
            <SectionLabel color="#FF2D87">Take The Next Step</SectionLabel>
            <h2 className="font-['Figtree'] font-light text-[32px] md:text-[80px] leading-none tracking-[-0.04em] text-white mb-10">
              {CTA_HEADLINE_WORDS.map((word, i) => <motion.span key={i} initial={{
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
              delay: i * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98]
            }} className={cn("inline-block mr-[0.22em]", word === "Now." && "underline decoration-[#FF2D87] decoration-[3px] underline-offset-[8px]")}>
                  {word}
                </motion.span>)}
            </h2>
            <p className="font-['Figtree'] text-base md:text-lg text-white/45 max-w-[600px] mx-auto leading-relaxed mb-12">
              Join Africa's most focused platform for wellness innovation, lifestyle brand scaling, and women-led enterprise growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto bg-[#FF2D87] text-white px-10 py-5 font-['Figtree'] text-[15px] font-medium tracking-wide flex items-center justify-center gap-2 hover:brightness-110 transition-all relative overflow-hidden group shadow-[0_0_32px_rgba(255,45,135,0.25)]">
                <span className="relative z-10">Secure Your Seat</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-white/15 skew-x-[-20deg] translate-x-[-100%] animate-[shimmerSlide_3s_linear_infinite]" />
              </button>
              <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 font-['Figtree'] text-[15px] font-light tracking-wide hover:bg-white/10 transition-all">
                Download Programme Overview
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ── Registration Section ── */}
      <RegistrationSection />

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&display=swap');
        
        @keyframes shimmerSlide {
          0% { transform: skewX(-20deg) translateX(-150%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </div>;
};