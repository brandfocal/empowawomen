import * as React from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useInView, animate } from "framer-motion";
import { ArrowRight, Check, Menu, X, Link, Camera, Shield } from "lucide-react";
import "./EmpowaWomenSummitPage.css";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}
interface AttendeeRow {
  id: string;
  num: string;
  title: string;
  desc: string;
}
interface WhyRow {
  id: string;
  text: string;
}
interface ExpectBadge {
  id: string;
  label: string;
}
interface AudienceStatItem {
  id: string;
  targetNum: number;
  suffix: string;
  label: string;
  color: string;
}
interface SponsorItem {
  id: string;
  name: string;
}
interface SocialItem {
  id: string;
  label: string;
  Icon: React.ElementType;
}
interface MetaChip {
  id: string;
  icon: string;
  text: string;
}
interface MiniStat {
  id: string;
  value: string;
  label: string;
}
interface RegistrationDetail {
  id: string;
  label: string;
  value: string;
}
interface IncludedItem {
  id: string;
  text: string;
}
interface AgendaItem {
  id: string;
  time: string;
  title: string;
  desc: string;
}
interface PastSpeaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLinkItem[] = [{
  id: "nl-home",
  label: "Home",
  href: "#"
}, {
  id: "nl-about",
  label: "About",
  href: "#"
}, {
  id: "nl-summits",
  label: "Summits",
  href: "#",
  active: true
}, {
  id: "nl-academy",
  label: "Academy",
  href: "#"
}, {
  id: "nl-partnerships",
  label: "Partnerships",
  href: "#"
}, {
  id: "nl-media",
  label: "Media",
  href: "#"
}, {
  id: "nl-contact",
  label: "Contact",
  href: "#"
}];
const HERO_WORDS = ["Leading", "Fearlessly.", "Accelerating", "Growth.", "Transforming", "Economies"];
const SPONSORS: SponsorItem[] = [{
  id: "sp-1",
  name: "ABSA"
}, {
  id: "sp-2",
  name: "STANDARD BANK"
}, {
  id: "sp-3",
  name: "NEDBANK"
}, {
  id: "sp-4",
  name: "ANGLO AMERICAN"
}, {
  id: "sp-5",
  name: "OLD MUTUAL"
}, {
  id: "sp-6",
  name: "MTN"
}, {
  id: "sp-7",
  name: "SASOL"
}, {
  id: "sp-8",
  name: "DEPT. OF WOMEN"
}];
const SPONSORS_EXTENDED: SponsorItem[] = [...SPONSORS, ...SPONSORS, ...SPONSORS];
const META_CHIPS: MetaChip[] = [{
  id: "mc-1",
  icon: "📍",
  text: "The Forum, The Campus, Bryanston, Johannesburg"
}, {
  id: "mc-2",
  icon: "🕐",
  text: "08h00 – 16h00"
}, {
  id: "mc-3",
  icon: "🎀",
  text: "Elegant Pink & White"
}];
const MINI_STATS: MiniStat[] = [{
  id: "ms-1",
  value: "450+",
  label: "Speakers"
}, {
  id: "ms-2",
  value: "1 Day",
  label: "Event Duration"
}, {
  id: "ms-3",
  value: "R1,500",
  label: "Investment"
}];
const ATTENDEE_ROWS: AttendeeRow[] = [{
  id: "ar-1",
  num: "01",
  title: "C-Suite Executives",
  desc: "CEOs, CFOs, COOs, CMOs, CHROs, CIOs"
}, {
  id: "ar-2",
  num: "02",
  title: "Board Members & Directors",
  desc: "Non-Executive Directors and Trustees"
}, {
  id: "ar-3",
  num: "03",
  title: "Entrepreneurs & Business Owners",
  desc: "Founders scaling their impact"
}, {
  id: "ar-4",
  num: "04",
  title: "High-Potential Female Leaders",
  desc: "Emerging executives in leadership pipelines"
}, {
  id: "ar-5",
  num: "05",
  title: "Government Leaders & Policymakers",
  desc: "Driving inclusive policy and governance"
}, {
  id: "ar-6",
  num: "06",
  title: "Investors & Funders",
  desc: "DFIs, VCs, Angels, and development funders"
}, {
  id: "ar-7",
  num: "07",
  title: "Corporate Women in Pipelines",
  desc: "Leaders building the next generation"
}, {
  id: "ar-8",
  num: "08",
  title: "Ambitious Professionals",
  desc: "Those seeking accelerated growth and influence"
}];
const WHY_ROWS: WhyRow[] = [{
  id: "wr-1",
  text: "Access to South Africa's most influential women leaders and decision-makers"
}, {
  id: "wr-2",
  text: "Strategic insights on leadership, governance, entrepreneurship, innovation and economic transformation"
}, {
  id: "wr-3",
  text: "High-value networking and partnership opportunities"
}, {
  id: "wr-4",
  text: "Practical leadership and career acceleration strategies"
}, {
  id: "wr-5",
  text: "Access to investors, funders, corporates and ecosystem leaders"
}, {
  id: "wr-6",
  text: "Inspiration from women who are shaping industries, organisations and economies"
}];
const EXPECT_BADGES: ExpectBadge[] = [{
  id: "eb-1",
  label: "World-Class Keynote Addresses"
}, {
  id: "eb-2",
  label: "Executive Leadership Conversations"
}, {
  id: "eb-3",
  label: "Women on Boards & Governance Sessions"
}, {
  id: "eb-4",
  label: "Entrepreneurship & Funding Insights"
}, {
  id: "eb-5",
  label: "Leadership Masterclasses"
}, {
  id: "eb-6",
  label: "Strategic Networking Experiences"
}, {
  id: "eb-7",
  label: "High-Impact Business Matchmaking"
}, {
  id: "eb-8",
  label: "Premium Delegate Experience"
}];
const AUDIENCE_STATS: AudienceStatItem[] = [{
  id: "as-1",
  targetNum: 500,
  suffix: "+",
  label: "CEOs & Executives",
  color: "#FF2D87"
}, {
  id: "as-2",
  targetNum: 200,
  suffix: "+",
  label: "Board Directors & Founders",
  color: "#00B4A6"
}, {
  id: "as-3",
  targetNum: 150,
  suffix: "+",
  label: "Government Leaders & Investors",
  color: "#D97706"
}, {
  id: "as-4",
  targetNum: 100,
  suffix: "+",
  label: "Media & Industry Influencers",
  color: "#FF2D87"
}];
const SOCIAL_ICONS: SocialItem[] = [{
  id: "si-linkedin",
  label: "LinkedIn",
  Icon: Link
}, {
  id: "si-instagram",
  label: "Instagram",
  Icon: Camera
}];
const REGISTRATION_DETAILS: RegistrationDetail[] = [{
  id: "rd-1",
  label: "Date",
  value: "Saturday, 28 August 2026"
}, {
  id: "rd-2",
  label: "Time",
  value: "08h00 – 16h00"
}, {
  id: "rd-3",
  label: "Venue",
  value: "The Forum, The Campus, Bryanston"
}, {
  id: "rd-4",
  label: "Dress Code",
  value: "Elegant Pink & White"
}, {
  id: "rd-5",
  label: "Investment",
  value: "R1,500 per delegate"
}];
const INCLUDED_ITEMS: IncludedItem[] = [{
  id: "ii-1",
  text: "Full day summit access"
}, {
  id: "ii-2",
  text: "Premium delegate experience"
}, {
  id: "ii-3",
  text: "High-impact networking sessions"
}, {
  id: "ii-4",
  text: "Delegate resource pack"
}];
const AGENDA_ITEMS: AgendaItem[] = [{
  id: "ag-1",
  time: "08h00",
  title: "Delegate Registration & Welcome Coffee",
  desc: "Arrive, connect, and settle in"
}, {
  id: "ag-2",
  time: "09h00",
  title: "Official Opening & Keynote Address",
  desc: "Setting the tone for a decade of leadership"
}, {
  id: "ag-3",
  time: "09h45",
  title: "Executive Leadership Conversations",
  desc: "Panel: C-Suite women on scaling power and impact"
}, {
  id: "ag-4",
  time: "10h30",
  title: "Women on Boards & Governance",
  desc: "Boardroom strategies, NED pathways, and governance excellence"
}, {
  id: "ag-5",
  time: "11h15",
  title: "Entrepreneurship & Funding Insights",
  desc: "Capital pathways, investor roundtables, and scaling frameworks"
}, {
  id: "ag-6",
  time: "12h00",
  title: "Gourmet Networking Lunch",
  desc: "Curated networking with funders, executives, and peers"
}, {
  id: "ag-7",
  time: "13h00",
  title: "Leadership Masterclass Breakouts",
  desc: "Choose your stage: Tech & AI / Green Economy / Finance / Media"
}, {
  id: "ag-8",
  time: "14h30",
  title: "High-Impact Business Matchmaking",
  desc: "1-on-1 structured meetings with investors and corporates"
}, {
  id: "ag-9",
  time: "15h15",
  title: "Closing Keynote & Awards Recognition",
  desc: "Celebrating women who are transforming economies"
}, {
  id: "ag-10",
  time: "16h00",
  title: "Summit Close & Evening Connections",
  desc: "Continue conversations at the networking close"
}];
const PAST_SPEAKERS: PastSpeaker[] = [{
  id: "ps-1",
  name: "Phumzile Mlambo-Ngcuka",
  role: "Former Deputy President",
  company: "South Africa",
  image: "/previous_speakers/Former-Deputy-President-Phumzile-Mlambo-Ngcuka.jpg"
}, {
  id: "ps-2",
  name: "Gugulethu Mfuphi",
  role: "Financial Journalist & Broadcaster",
  company: "Independent",
  image: "/previous_speakers/Gugulethu-Mfuphi.jpg"
}, {
  id: "ps-3",
  name: "Edna Montse",
  role: "Group Exec: Transformation & Sustainability",
  company: "African Bank",
  image: "/previous_speakers/Edna-Montse.jpg"
}, {
  id: "ps-4",
  name: "Gugu Mkhize",
  role: "CEO",
  company: "INSETA",
  image: "/previous_speakers/Gugu-Mkhize.jpg"
}, {
  id: "ps-5",
  name: "Happy MaKhumalo Ngidi",
  role: "Chief Marketing Officer",
  company: "Proudly SA",
  image: "/previous_speakers/Happy-MaKhumalo-Ngidi.jpg"
}, {
  id: "ps-6",
  name: "Immaculata Segooa",
  role: "Head: Integrated Marketing Communication",
  company: "Discovery",
  image: "/previous_speakers/Immaculata-Segooa.jpg"
}, {
  id: "ps-7",
  name: "Jessica Denyschen",
  role: "CEO",
  company: "Arts & Culture Trust",
  image: "/previous_speakers/Jessica-Denyschen.jpg"
}, {
  id: "ps-8",
  name: "Lihle Nqini",
  role: "Managing Director",
  company: "MaXhosa Africa",
  image: "/previous_speakers/Lihle-Nqini.jpg"
}, {
  id: "ps-9",
  name: "Linda Maqoma",
  role: "Vice President: Professionals",
  company: "Black Business Council",
  image: "/previous_speakers/Linda-Maqoma.jpg"
}, {
  id: "ps-10",
  name: "Lungile Mahluza",
  role: "Chief People Officer",
  company: "Deloitte South Africa",
  image: "/previous_speakers/Lungile-Mahluza.jpg"
}, {
  id: "ps-11",
  name: "Maphefo Anno-Frempong",
  role: "CEO",
  company: "TETA",
  image: "/previous_speakers/Maphefo-Anno-Frempong.jpg"
}, {
  id: "ps-12",
  name: "Mesela Nhlapo",
  role: "CEO",
  company: "African Rail Industry Association",
  image: "/previous_speakers/Mesela-Nhlapo.jpg"
}, {
  id: "ps-13",
  name: "Mogau Sebela (CA)",
  role: "CFO",
  company: "AgriSETA",
  image: "/previous_speakers/Mogau-Sebela-(CA).jpg"
}, {
  id: "ps-14",
  name: "Monalisa Zwambila",
  role: "Founder & CEO",
  company: "Riverbed Agency",
  image: "/previous_speakers/Monalisa-Sibongile-Zwambila.jpg"
}, {
  id: "ps-15",
  name: "Nomfundo Mcoyi",
  role: "Group CEO",
  company: "Icebolethu Group",
  image: "/previous_speakers/Nomfundo-Nokubonga-Mcoyi.jpg"
}, {
  id: "ps-16",
  name: "Mbali Sibisi",
  role: "Non-Executive Director",
  company: "SA Women in Mining",
  image: "/previous_speakers/Mbali-Sibisi.jpg"
}, {
  id: "ps-17",
  name: "Sithembile Ntombela maNdaba",
  role: "Acting CEO",
  company: "Brand South Africa",
  image: "/previous_speakers/Sithembile-Ntombela-maNdaba.jpg"
}, {
  id: "ps-18",
  name: "Stavros Nicolaou",
  role: "Group Senior Executive",
  company: "Aspen Pharmacare",
  image: "/previous_speakers/Stavros-Nicolaou.jpg"
}, {
  id: "ps-19",
  name: "Delia Ndlovu",
  role: "Chair",
  company: "Deloitte Africa",
  image: "/previous_speakers/Delia-Ndlovu.jpg"
}, {
  id: "ps-20",
  name: "Dr Pulane Modiha",
  role: "COO: Home & Structured Lending",
  company: "FNB SA",
  image: "/previous_speakers/Dr-Pulane-Modiha.jpg"
}];

// ─── Accent colour helpers ────────────────────────────────────────────────────
const ACCENT_PINK = "#FF2D87";
const ACCENT_TEAL = "#00B4A6";
const ACCENT_AMBER = "#D97706";
const ACCENT_CYCLE = [ACCENT_PINK, ACCENT_TEAL, ACCENT_AMBER];
const AVATAR_BG_CYCLE = ["rgba(255,45,135,0.12)", "rgba(0,180,166,0.12)", "rgba(217,119,6,0.12)"];
function getAccentColor(index: number): string {
  return ACCENT_CYCLE[index % 3];
}

// ─── Live Countdown Timer ─────────────────────────────────────────────────────
const TARGET_DATE = new Date("2026-08-28T00:00:00").getTime();
function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(diff % (1000 * 60) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds
  };
}
const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const units = [{
    id: "cd-days",
    value: timeLeft.days,
    label: "DAYS"
  }, {
    id: "cd-hours",
    value: timeLeft.hours,
    label: "HRS"
  }, {
    id: "cd-minutes",
    value: timeLeft.minutes,
    label: "MIN"
  }, {
    id: "cd-seconds",
    value: timeLeft.seconds,
    label: "SEC"
  }];
  return <div className="flex items-center justify-center gap-3 sm:gap-4 py-8 mb-2">
    {units.map((unit, idx) => <div key={unit.id} className="flex items-start gap-3 sm:gap-4">
      <div className="flex flex-col items-center">
        <span style={{
          fontFamily: "Figtree",
          fontWeight: 200,
          fontSize: "clamp(24px, 6vw, 56px)",
          color: "#FFFFFF",
          letterSpacing: "-0.04em",
          lineHeight: 1
        } as React.CSSProperties}>
          {String(unit.value).padStart(2, "0")}
        </span>
        <span className="uppercase" style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.20em",
          color: "rgba(255,255,255,0.35)",
          marginTop: "4px"
        }}>
          {unit.label}
        </span>
      </div>
      {idx < units.length - 1 && <span style={{
        fontFamily: "Figtree",
        fontWeight: 200,
        fontSize: "clamp(16px, 3vw, 40px)",
        color: "rgba(255,255,255,0.20)",
        lineHeight: 1,
        marginTop: "2px",
        flexShrink: 0
      }}>
        ·
      </span>}
    </div>)}
  </div>;
};

// ─── Sticky CTA Bar ───────────────────────────────────────────────────────────
const StickyCtaBar: React.FC<{
  heroRef: React.RefObject<HTMLElement | null>;
  footerRef: React.RefObject<HTMLElement | null>;
  scrollToRegistration: () => void;
}> = ({
  heroRef,
  footerRef,
  scrollToRegistration
}) => {
    const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
      let heroGone = false;
      let footerVisible = false;
      const heroObserver = new IntersectionObserver(([entry]) => {
        heroGone = !entry.isIntersecting;
        setVisible(heroGone && !footerVisible);
      }, {
        threshold: 0
      });
      const footerObserver = new IntersectionObserver(([entry]) => {
        footerVisible = entry.isIntersecting;
        setVisible(heroGone && !footerVisible);
      }, {
        threshold: 0
      });
      if (heroRef.current) heroObserver.observe(heroRef.current);
      if (footerRef.current) footerObserver.observe(footerRef.current);
      return () => {
        heroObserver.disconnect();
        footerObserver.disconnect();
      };
    }, [heroRef, footerRef]);
    return <AnimatePresence>
      {visible && <motion.div initial={{
        y: 80,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} exit={{
        y: 80,
        opacity: 0
      }} transition={{
        duration: 0.35,
        ease: "easeOut"
      }} style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(10,10,15,0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 16px"
      }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: date text — visible on mobile too */}
          <span style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            color: "rgba(255,255,255,0.50)",
            whiteSpace: "nowrap",
            flexShrink: 0
          }}>
            <span>Sat, 28 Aug 2026</span>
          </span>
          {/* Center meta text — hidden on mobile */}
          <span className="hidden md:block" style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            color: "rgba(255,255,255,0.40)",
            textAlign: "center",
            flexShrink: 0
          }}>
            📍 The Forum, Bryanston · 🕐 08h00–16h00 · R1,500 per delegate
          </span>
          <button style={{
            backgroundColor: ACCENT_PINK,
            color: "#FFFFFF",
            height: "40px",
            padding: "0 20px",
            borderRadius: "999px",
            fontFamily: "Figtree",
            fontWeight: 500,
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
            transition: "filter 200ms ease-out",
            whiteSpace: "nowrap"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }} onClick={scrollToRegistration}>
            <span>Secure Your Seat →</span>
          </button>
        </div>
      </motion.div>}
    </AnimatePresence>;
  };

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection: React.FC<{
  sectionRef: React.RefObject<HTMLElement | null>;
  scrollToRegistration: () => void;
  scrollToNextSection: () => void;
}> = ({
  sectionRef,
  scrollToRegistration,
  scrollToNextSection
}) => {
    const {
      scrollY
    } = useScroll();
    const bgY = useTransform(scrollY, [0, 600], [0, 240]);
    return <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative w-full flex flex-col items-center justify-end overflow-hidden" style={{
      minHeight: "100vh",
      backgroundColor: "#0A0A0F",
      paddingBottom: "clamp(48px, 8vh, 80px)",
      zIndex: 1
    }}>
      {/* Ken Burns + Parallax background */}
      <motion.div className="pointer-events-none" style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        y: bgY,
        zIndex: 0
      }}>
        <motion.div initial={{
          scale: 1.06
        }} animate={{
          scale: 1.0
        }} transition={{
          duration: 12,
          ease: "easeOut"
        }} style={{
          width: "100%",
          height: "100%"
        }}>
          <img src="/features-6.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{
            objectPosition: "center 30%",
            transform: "scale(1.15)",
            transformOrigin: "center top"
          }} />
        </motion.div>
      </motion.div>

      {/* Dark overlay */}
      <div className="pointer-events-none" style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.30) 0%, rgba(10,10,15,0.55) 30%, rgba(10,10,15,0.80) 65%, #0A0A0F 100%)",
        zIndex: 1
      }} />

      <div className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8" style={{
        zIndex: 10,
        maxWidth: "1400px",
        margin: "0 auto",
        paddingTop: "140px"
      }}>
        <motion.div initial={{
          y: 90
        }} animate={{
          y: 0
        }} transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }} className="w-full flex flex-col items-center">
          {/* h1 animated words */}
          <h1 className="text-white text-center w-full mx-auto" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(36px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            maxWidth: "980px",
            margin: "0 auto 32px auto"
          }}>
            {HERO_WORDS.map((word, i) => {
              const isLast = i === HERO_WORDS.length - 1;
              return <motion.span key={`hw-${word}-${i}`} style={{
                display: "inline-block",
                marginRight: "0.25em"
              }} initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 20
              }} animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}>
                {isLast ? <span>
                  <span style={{
                    textDecoration: "underline",
                    textDecorationColor: "#FF2D87",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "6px",
                    color: "#FFFFFF"
                  }}>
                    {word}
                  </span>
                  <span style={{
                    color: "#FF2D87"
                  }}>.</span>
                </span> : word}
              </motion.span>;
            })}
          </h1>

          {/* CTA buttons — flex-col on mobile, flex-row on sm+ */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.0
          }} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0">
            <a href="#" className="inline-flex items-center justify-center no-underline rounded-full font-medium" style={{
              fontFamily: "Figtree",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF2D87",
              height: "48px",
              padding: "0 28px",
              letterSpacing: "0.02em",
              transition: "all 200ms ease-out",
              boxShadow: "0 0 32px rgba(255,45,135,0.25)"
            }} onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1.1)";
              el.style.boxShadow = "0 0 48px rgba(255,45,135,0.45)";
            }} onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.filter = "brightness(1)";
              el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
            }} onClick={e => {
              e.preventDefault();
              scrollToRegistration();
            }}>
              Register Now - R1,500
            </a>
            <a href="#" className="inline-flex items-center justify-center no-underline rounded-full" style={{
              fontFamily: "Figtree",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 400,
              color: "#FFFFFF",
              height: "48px",
              padding: "0 28px",
              border: "1px solid rgba(255,255,255,0.20)",
              letterSpacing: "0.02em",
              transition: "all 200ms ease-out"
            }} onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "rgba(255,255,255,0.08)";
              el.style.borderColor = "rgba(255,255,255,0.40)";
            }} onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "rgba(255,255,255,0.20)";
            }} onClick={e => {
              e.preventDefault();
              scrollToNextSection();
            }}>
              Learn More
            </a>
          </motion.div>

          {/* Countdown timer */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.2
          }} style={{
            marginTop: "12px"
          }}>
            <CountdownTimer />
          </motion.div>
        </motion.div>
      </div>
    </section>;
  };

// ─── Intro Bridge Section ─────────────────────────────────────────────────────
const INTRO_DETAIL_ROWS = [{
  id: "idr-1",
  dotColor: "#FF2D87",
  labelEmoji: "📍",
  label: "Venue",
  value: "The Forum, Bryanston"
}, {
  id: "idr-2",
  dotColor: "#00B4A6",
  labelEmoji: "🕐",
  label: "Time",
  value: "08h00 – 16h00"
}, {
  id: "idr-3",
  dotColor: "#D97706",
  labelEmoji: "🎀",
  label: "Dress Code",
  value: "Elegant Pink & White"
}];
const IntroBridgeSection: React.FC = () => {
  return <section style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "64px",
    paddingBottom: "64px"
  }} className="px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">
      {/* LEFT COL */}
      <motion.div initial={{
        opacity: 0,
        x: -20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} style={{
        flex: 1
      }}>
        <p style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(18px, 3vw, 32px)",
          color: "#FFFFFF",
          lineHeight: 1.6,
          letterSpacing: "-0.02em",
          margin: 0
        }}>
          A sophisticated celebration of leadership, influence, growth, and excellence - where Africa's most influential women gather to connect, collaborate, and shape the future of business, governance, and society.
        </p>
      </motion.div>

      {/* RIGHT COL */}
      <motion.div initial={{
        opacity: 0,
        x: 20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        delay: 0.15,
        ease: "easeOut"
      }} className="w-full md:w-[280px]" style={{
        flexShrink: 0
      }}>
        <div className="flex flex-col">
          {INTRO_DETAIL_ROWS.map(row => <div key={row.id} className="flex items-center gap-3" style={{
            paddingTop: "14px",
            paddingBottom: "14px",
            borderBottom: "1px solid rgba(255,255,255,0.07)"
          }}>
            <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: row.dotColor,
              flexShrink: 0,
              display: "inline-block"
            }} />
            <span style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              width: "60px",
              flexShrink: 0
            }}>
              <span>{row.labelEmoji}</span> <span>{row.label}</span>
            </span>
            <span style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 500,
              color: "#FFFFFF"
            }}>
              {row.value}
            </span>
          </div>)}
        </div>
      </motion.div>
    </div>
  </section>;
};

// ─── Sponsor Marquee Strip ────────────────────────────────────────────────────
const SponsorMarqueeStrip: React.FC = () => {
  return <div style={{
    backgroundColor: "#0A0A0F",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: "24px",
    paddingBottom: "24px",
    width: "100%",
    overflow: "hidden"
  }}>
    <motion.div style={{
      maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      overflow: "hidden"
    }}>
      <motion.div animate={{
        x: ["0%", "-33.333%"]
      }} transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity
      }} style={{
        display: "flex",
        gap: "clamp(32px, 7vw, 90px)",
        alignItems: "center",
        whiteSpace: "nowrap",
        width: "max-content"
      }}>
        {SPONSORS_EXTENDED.map((sp, i) => <span key={`strip-sp-${sp.id}-${i}`} className="shrink-0 cursor-default transition-colors duration-200 uppercase" style={{
          fontFamily: "Figtree",
          fontSize: "clamp(10px, 1.4vw, 12px)",
          fontWeight: 600,
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.20)"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.60)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.20)";
        }}>
          {sp.name}
        </span>)}
      </motion.div>
    </motion.div>
  </div>;
};

// ─── Summit Intelligence Section ──────────────────────────────────────────────
const SummitIntelligenceSection: React.FC = () => {
  const miniStatBorders = [`3px solid ${ACCENT_PINK}`, `3px solid ${ACCENT_TEAL}`, `3px solid ${ACCENT_AMBER}`];
  return <section className="relative" style={{
    backgroundColor: "#F7F6F2",
    zIndex: 10
  }}>
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
      <motion.div initial={{
        opacity: 0,
        x: -20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="flex flex-col w-full lg:w-[55%]">
        <div className="shrink-0 mb-5" style={{
          width: "48px",
          height: "3px",
          backgroundColor: "#FF2D87"
        }} />
        <span className="uppercase" style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "#64748b"
        }}>
          SUMMIT INTELLIGENCE
        </span>
        <h2 className="mt-4 mb-0" style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(26px, 4.5vw, 60px)",
          color: "#0A0A0F",
          letterSpacing: "-0.03em",
          lineHeight: 1.05
        }}>
          Leading Fearlessly. Accelerating Growth. Transforming Economies.
        </h2>
        <p className="mt-6 mb-0" style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          fontWeight: 400,
          color: "#64748b",
          lineHeight: 1.75
        }}>
          EmpowaWomen Leadership Summit 2026 is a sophisticated, high-impact executive experience intentionally designed for Africa's most influential women. This is the premier platform where women who lead, govern, build, and invest come together to accelerate economic transformation.
        </p>
      </motion.div>

      <motion.div initial={{
        opacity: 0,
        x: 20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="flex flex-col w-full lg:w-[45%]">
        <div style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          marginBottom: "32px"
        }}>
          <img src="https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2615.jpg" alt="EmpowaWomen Summit" style={{
            width: "100%",
            height: "280px",
            objectFit: "cover",
            objectPosition: "center 30%",
            display: "block"
          }} />
          <div style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            backgroundColor: "rgba(10,10,15,0.80)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: "20px",
            padding: "6px 14px",
            fontSize: "11px",
            color: "white",
            fontWeight: 500,
            fontFamily: "Figtree"
          }}>
            📸 EmpowaWomen Leadership Summit
          </div>
        </div>
        <div>
          <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(56px, 12vw, 140px)",
            color: "#0A0A0F",
            letterSpacing: "-0.05em",
            lineHeight: 1
          }}>
            <span>2000</span>
            <span style={{
              color: "#FF2D87"
            }}>+</span>
          </span>
          <p className="mt-2 mb-0" style={{
            fontFamily: "Figtree",
            fontSize: "15px",
            fontWeight: 400,
            color: "#64748b"
          }}>
            Senior Leaders, Entrepreneurs &amp; Decision-Makers
          </p>
        </div>
        <div className="my-8" style={{
          height: "1px",
          backgroundColor: "rgba(0,0,0,0.08)"
        }} />
        <div className="flex flex-row gap-4 sm:gap-8 flex-wrap">
          {MINI_STATS.map((stat, statIdx) => <div key={stat.id} className="flex flex-col" style={{
            borderLeft: miniStatBorders[statIdx],
            paddingLeft: "12px"
          }}>
            <span style={{
              fontFamily: "Figtree",
              fontWeight: 200,
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#0A0A0F",
              letterSpacing: "-0.03em",
              lineHeight: 1
            }}>
              {stat.value}
            </span>
            <span className="mt-1" style={{
              fontFamily: "Figtree",
              fontSize: "12px",
              fontWeight: 400,
              color: "#64748b"
            }}>
              {stat.label}
            </span>
          </div>)}
        </div>
      </motion.div>
    </div>
  </section>;
};

// ─── Agenda Section ───────────────────────────────────────────────────────────
const AgendaSection: React.FC = () => {
  return <section style={{
    backgroundColor: "#0A0A0F",
    backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/06/34706.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 10,
    position: "relative"
  }} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
    {/* Dark overlay */}
    <div style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(10,10,15,0.94)",
      zIndex: 0
    }} />

    <div className="max-w-5xl mx-auto" style={{
      position: "relative",
      zIndex: 1
    }}>
      {/* Section header */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="mb-14">
        <div style={{
          width: "48px",
          height: "3px",
          backgroundColor: ACCENT_PINK,
          marginBottom: "20px"
        }} />
        <span className="uppercase block mb-4" style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.35)"
        }}>
          SUMMIT AGENDA
        </span>
        <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(26px, 4.5vw, 60px)",
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: "0 0 16px 0"
        }}>
          A Day Designed for Impact
        </h2>
        <p style={{
          fontFamily: "Figtree",
          fontSize: "15px",
          fontWeight: 400,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.75,
          margin: 0
        }}>
          Saturday, 28 August 2026 · 08h00 – 16h00 · The Forum, Bryanston
        </p>
      </motion.div>

      {/* Agenda list */}
      <div className="max-w-3xl mx-auto flex flex-col">
        {AGENDA_ITEMS.map((item, i) => {
          const isLunch = i === 5;
          if (isLunch) {
            return <div key={item.id} style={{
              backgroundColor: "rgba(0,180,166,0.04)",
              border: "1px solid rgba(0,180,166,0.12)",
              borderRadius: "8px",
              padding: "12px 16px",
              margin: "4px 0",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#00B4A6",
                flexShrink: 0,
                display: "inline-block"
              }} />
              <span style={{
                fontFamily: "Figtree",
                fontSize: "13px",
                color: "rgba(255,255,255,0.50)",
                flex: 1,
                lineHeight: 1.4
              }}>
                12h00 - Gourmet Networking Lunch
              </span>
              <span className="uppercase" style={{
                fontFamily: "Figtree",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "#00B4A6",
                flexShrink: 0
              }}>
                INCLUDED
              </span>
            </div>;
          }
          return <motion.div key={item.id} initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-40px"
          }} transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} whileHover={{
            backgroundColor: "rgba(255,255,255,0.025)",
            transition: {
              duration: 0.15
            }
          }} style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            paddingTop: "18px",
            paddingBottom: "18px",
            paddingLeft: "8px",
            paddingRight: "8px",
            marginLeft: "-8px",
            marginRight: "-8px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "4px",
            cursor: "default"
          }}>
            <span style={{
              width: "56px",
              flexShrink: 0,
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: getAccentColor(i),
              lineHeight: 1
            }}>
              {item.time}
            </span>
            <div style={{
              flex: 1,
              minWidth: 0
            }}>
              <p style={{
                fontFamily: "Figtree",
                fontWeight: 400,
                fontSize: "clamp(13px, 2vw, 15px)",
                color: "#FFFFFF",
                lineHeight: 1.3,
                margin: 0
              }}>
                {item.title}
              </p>
              <p style={{
                fontFamily: "Figtree",
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.5,
                margin: "4px 0 0 0"
              }}>
                {item.desc}
              </p>
            </div>
            <span className="hidden sm:block" style={{
              width: "36px",
              flexShrink: 0,
              textAlign: "right",
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.12)",
              letterSpacing: "0.1em"
            }}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>;
        })}
      </div>

      {/* 3-stat footer row */}
      <motion.div initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-40px"
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="max-w-3xl mx-auto flex justify-between items-center" style={{
        marginTop: "48px",
        paddingTop: "32px",
        borderTop: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
          <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(24px, 4vw, 32px)",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1
          }}>
            10
          </span>
          <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.30)",
            marginTop: "4px"
          }}>
            Sessions
          </span>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}>
          <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(24px, 4vw, 32px)",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1
          }}>
            08h00
          </span>
          <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.30)",
            marginTop: "4px"
          }}>
            Doors Open
          </span>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end"
        }}>
          <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(24px, 4vw, 32px)",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1
          }}>
            16h00
          </span>
          <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.30)",
            marginTop: "4px"
          }}>
            Summit Close
          </span>
        </div>
      </motion.div>
    </div>
  </section>;
};

// ─── Who Should Attend ────────────────────────────────────────────────────────
const WhoShouldAttendSection: React.FC<{
  scrollToRegistration: () => void;
}> = ({
  scrollToRegistration
}) => {
    const rowNumColors = ["rgba(255,45,135,0.25)", "rgba(0,180,166,0.25)", "rgba(217,119,6,0.25)", "rgba(255,45,135,0.25)", "rgba(0,180,166,0.25)", "rgba(217,119,6,0.25)", "rgba(255,45,135,0.25)", "rgba(0,180,166,0.25)"];
    const rowHoverColors = [ACCENT_PINK, ACCENT_TEAL, ACCENT_AMBER, ACCENT_PINK, ACCENT_TEAL, ACCENT_AMBER, ACCENT_PINK, ACCENT_TEAL];
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, {
      stiffness: 150,
      damping: 20
    });
    const springY = useSpring(mouseY, {
      stiffness: 150,
      damping: 20
    });
    const rotateY = useTransform(springX, [-1, 1], [-5, 5]);
    const rotateX = useTransform(springY, [-1, 1], [5, -5]);
    const cardRef = React.useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) / (rect.width / 2));
      mouseY.set((e.clientY - cy) / (rect.height / 2));
    };
    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    return <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32" style={{
      backgroundColor: "#0A0A0F",
      zIndex: 10
    }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-80px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="mb-16">
          <div className="shrink-0 mb-5" style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#FF2D87"
          }} />
          <span className="uppercase block mb-4" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)"
          }}>
            WHO SHOULD ATTEND
          </span>
          <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(26px, 4.5vw, 60px)",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 20px 0",
            maxWidth: "780px"
          }}>
            Intentionally Curated for Africa's Most Influential Women
          </h2>
          <p style={{
            fontFamily: "Figtree",
            fontSize: "16px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            margin: 0,
            maxWidth: "560px"
          }}>
            This summit is designed for leaders who move markets, shape policy, and transform economies.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Featured card — full width on mobile */}
          <motion.div initial={{
            opacity: 0,
            x: -24
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-60px"
          }} transition={{
            duration: 0.7,
            ease: "easeOut"
          }} className="w-full lg:w-[38%]">
            <motion.div ref={cardRef as any} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
              rotateX,
              rotateY,
              transformPerspective: 800
            }}>
              <div style={{
                backgroundColor: "rgba(255,45,135,0.06)",
                border: "1px solid rgba(255,45,135,0.20)",
                borderRadius: "24px",
                padding: "clamp(24px, 5vw, 40px)",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                <div>
                  <div style={{
                    fontFamily: "Figtree",
                    fontWeight: 200,
                    fontSize: "clamp(48px, 8vw, 96px)",
                    letterSpacing: "-0.05em",
                    color: "#FFFFFF",
                    lineHeight: 1
                  }}>
                    <span>2000</span>
                    <span style={{
                      color: "#FF2D87"
                    }}>+</span>
                  </div>
                  <p style={{
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.50)",
                    margin: "8px 0 0 0"
                  }}>
                    Leaders Expected
                  </p>
                  <p style={{
                    fontFamily: "Figtree",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                    margin: "24px 0 0 0"
                  }}>
                    From C-suites to boardrooms, government halls to startup ecosystems - this is the room where decisions are made and futures are shaped.
                  </p>
                </div>
                <button style={{
                  marginTop: "28px",
                  alignSelf: "flex-start",
                  borderRadius: "999px",
                  height: "44px",
                  padding: "0 24px",
                  backgroundColor: "#FF2D87",
                  color: "#FFFFFF",
                  fontFamily: "Figtree",
                  fontWeight: 500,
                  fontSize: "14px",
                  border: "none",
                  cursor: "pointer",
                  transition: "filter 200ms ease-out"
                }} onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                }} onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                }} onClick={scrollToRegistration}>
                  Secure Your Seat
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Row list */}
          <motion.div initial={{
            opacity: 0,
            x: 24
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-60px"
          }} transition={{
            duration: 0.7,
            ease: "easeOut"
          }} className="flex-1 flex flex-col">
            {ATTENDEE_ROWS.map((row, i) => <AttendeeRowItem key={row.id} row={row} numColor={rowNumColors[i]} hoverColor={rowHoverColors[i]} index={i} />)}
          </motion.div>
        </div>
      </div>
    </section>;
  };
const AttendeeRowItem: React.FC<{
  row: AttendeeRow;
  numColor: string;
  hoverColor: string;
  index: number;
}> = ({
  row,
  numColor,
  hoverColor,
  index
}) => {
    const [hovered, setHovered] = React.useState(false);
    return <motion.div initial={{
      opacity: 0,
      y: 16
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-20px"
    }} transition={{
      duration: 0.45,
      delay: index * 0.05,
      ease: "easeOut"
    }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      paddingTop: "16px",
      paddingBottom: "16px",
      paddingLeft: "12px",
      paddingRight: "12px",
      marginLeft: "-12px",
      marginRight: "-12px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      cursor: "pointer",
      borderRadius: "8px",
      backgroundColor: hovered ? "rgba(255,255,255,0.03)" : "transparent",
      transition: "background-color 0.2s ease"
    }}>
      <span style={{
        fontFamily: "Figtree",
        fontWeight: 200,
        fontSize: "clamp(32px, 5vw, 48px)",
        color: numColor,
        width: "48px",
        flexShrink: 0,
        lineHeight: 1,
        userSelect: "none"
      }}>
        {row.num}
      </span>
      <div style={{
        width: "1px",
        height: "36px",
        backgroundColor: "rgba(255,255,255,0.08)",
        flexShrink: 0,
        margin: "0 4px"
      }} />
      <div className="flex flex-col min-w-0">
        <span style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: "clamp(13px, 2vw, 16px)",
          color: hovered ? hoverColor : "#FFFFFF",
          lineHeight: 1.3,
          transition: "color 0.2s ease"
        }}>
          {row.title}
        </span>
        <span className="mt-1" style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: "12px",
          color: "rgba(255,255,255,0.40)",
          lineHeight: 1.5
        }}>
          {row.desc}
        </span>
      </div>
    </motion.div>;
  };

// ─── Why Attend ───────────────────────────────────────────────────────────────
const WhyAttendSection: React.FC = () => {
  const tickAccents = [ACCENT_PINK, ACCENT_TEAL, ACCENT_AMBER, ACCENT_PINK, ACCENT_TEAL, ACCENT_AMBER];
  const tickBgAccents = ["rgba(255,45,135,0.12)", "rgba(0,180,166,0.12)", "rgba(217,119,6,0.12)", "rgba(255,45,135,0.12)", "rgba(0,180,166,0.12)", "rgba(217,119,6,0.12)"];
  const badgeAccents = [{
    border: "rgba(255,45,135,0.30)",
    color: ACCENT_PINK
  }, {
    border: "rgba(0,180,166,0.30)",
    color: ACCENT_TEAL
  }, {
    border: "rgba(217,119,6,0.30)",
    color: ACCENT_AMBER
  }, {
    border: "rgba(255,45,135,0.30)",
    color: ACCENT_PINK
  }, {
    border: "rgba(0,180,166,0.30)",
    color: ACCENT_TEAL
  }, {
    border: "rgba(217,119,6,0.30)",
    color: ACCENT_AMBER
  }, {
    border: "rgba(255,45,135,0.30)",
    color: ACCENT_PINK
  }, {
    border: "rgba(0,180,166,0.30)",
    color: ACCENT_TEAL
  }];
  return <section className="relative" style={{
    backgroundColor: "#F7F6F2",
    zIndex: 10
  }}>
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
      <motion.div initial={{
        opacity: 0,
        x: -20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="flex flex-col w-full lg:w-[52%]">
        <div className="shrink-0 mb-5" style={{
          width: "48px",
          height: "3px",
          backgroundColor: "#FF2D87"
        }} />
        <span className="uppercase mb-4" style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "#64748b"
        }}>
          WHY ATTEND
        </span>
        <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(26px, 4.5vw, 60px)",
          color: "#0A0A0F",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: "0 0 32px 0",
          maxWidth: "520px"
        }}>
          Where Ambitious Women Connect with Opportunity, Influence and Action
        </h2>
        <div className="flex flex-col gap-5">
          {WHY_ROWS.map((row, i) => <motion.div key={row.id} initial={{
            opacity: 0,
            x: -16
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: "-40px"
          }} transition={{
            duration: 0.5,
            delay: i * 0.07,
            ease: "easeOut"
          }} className="flex items-start gap-3">
            <div className="shrink-0 flex items-center justify-center rounded-full mt-0.5" style={{
              width: "20px",
              height: "20px",
              backgroundColor: tickBgAccents[i]
            }}>
              <Check size={11} style={{
                color: tickAccents[i],
                strokeWidth: 2.5
              }} />
            </div>
            <p className="m-0" style={{
              fontFamily: "Figtree",
              fontSize: "clamp(13px, 1.6vw, 16px)",
              fontWeight: 400,
              color: "#0A0A0F",
              lineHeight: 1.65
            }}>
              {row.text}
            </p>
          </motion.div>)}
        </div>
      </motion.div>

      <motion.div initial={{
        opacity: 0,
        x: 20
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="w-full lg:w-[48%]">
        <div className="rounded-2xl p-6 sm:p-8 lg:p-10" style={{
          backgroundColor: "#0A0A0F",
          boxShadow: "0 0 60px rgba(255,45,135,0.15)"
        }}>
          <h3 className="mb-7" style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(20px, 3vw, 32px)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: "0 0 28px 0",
            lineHeight: 1.2
          }}>
            What to Expect
          </h3>
          <div className="flex flex-wrap gap-3">
            {EXPECT_BADGES.map((badge, badgeIdx) => <span key={badge.id} className="inline-block rounded-full" style={{
              padding: "6px 14px",
              border: `1px solid ${badgeAccents[badgeIdx].border}`,
              color: badgeAccents[badgeIdx].color,
              fontFamily: "Figtree",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.01em"
            }}>
              {badge.label}
            </span>)}
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
};

// ─── Animated Count-Up Stat ───────────────────────────────────────────────────
const AnimatedStat: React.FC<{
  stat: AudienceStatItem;
  dividerColor: string;
}> = ({
  stat,
  dividerColor
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "-40px"
    });
    const count = useMotionValue(0);
    const [displayVal, setDisplayVal] = React.useState(0);
    React.useEffect(() => {
      if (!isInView) return;
      const controls = animate(count, stat.targetNum, {
        duration: 2,
        ease: "easeOut",
        onUpdate: v => setDisplayVal(Math.round(v))
      });
      return controls.stop;
    }, [isInView, count, stat.targetNum]);
    return <motion.div ref={ref} initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true,
      margin: "-40px"
    }} transition={{
      duration: 0.5,
      ease: "easeOut"
    }} className="flex flex-col items-center text-center py-8 sm:py-10 px-4 sm:px-6" style={{
      borderLeft: dividerColor ? `1px solid ${dividerColor}` : "none"
    }}>
      <span style={{
        fontFamily: "Figtree",
        fontWeight: 200,
        fontSize: "clamp(36px, 6vw, 72px)",
        color: stat.color,
        letterSpacing: "-0.04em",
        lineHeight: 1
      }}>
        {displayVal}{stat.suffix}
      </span>
      <span className="mt-3" style={{
        fontFamily: "Figtree",
        fontSize: "13px",
        fontWeight: 400,
        color: "rgba(255,255,255,0.40)",
        lineHeight: 1.5,
        maxWidth: "140px"
      }}>
        {stat.label}
      </span>
    </motion.div>;
  };

// ─── Expected Audience ────────────────────────────────────────────────────────
const ExpectedAudienceSection: React.FC = () => {
  const dividerColors = ["none", "rgba(255,45,135,0.20)", "rgba(0,180,166,0.20)", "rgba(255,45,135,0.20)"];
  return <section className="relative" style={{
    backgroundColor: "#0A0A0F",
    zIndex: 10
  }}>
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="flex flex-col items-center text-center mb-14">
        <div className="shrink-0 mb-5" style={{
          width: "48px",
          height: "3px",
          backgroundColor: "#FF2D87"
        }} />
        <span className="uppercase mb-5" style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.35)"
        }}>
          EXPECTED AUDIENCE
        </span>
        <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(26px, 4.5vw, 60px)",
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: 0,
          maxWidth: "760px"
        }}>
          2000+ Senior Leaders, Entrepreneurs and Decision-Makers
        </h2>
      </motion.div>

      {/* 2-col on mobile, 4-col on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {AUDIENCE_STATS.map((stat, i) => <AnimatedStat key={stat.id} stat={stat} dividerColor={i === 0 ? "none" : dividerColors[i]} />)}
      </div>
    </div>
  </section>;
};

// ─── Past Speakers Showcase ───────────────────────────────────────────────────
const PastSpeakersShowcase: React.FC = () => {
  const row1 = [...PAST_SPEAKERS.slice(0, 10), ...PAST_SPEAKERS.slice(0, 10)];
  const row2 = [...PAST_SPEAKERS.slice(10), ...PAST_SPEAKERS.slice(10)];

  return <section style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "clamp(64px, 8vw, 128px)",
    paddingBottom: "clamp(64px, 8vw, 128px)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    overflow: "hidden",
    position: "relative",
    zIndex: 10
  }}>
    {/* CSS Styles for Pause on Hover and Endless Keyframes */}
    <style>{`
      @keyframes speakerMarqueeLeft {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-50%, 0, 0); }
      }

      @keyframes speakerMarqueeRight {
        0% { transform: translate3d(-50%, 0, 0); }
        100% { transform: translate3d(0, 0, 0); }
      }

      .speaker-marquee-row-1 {
        display: flex;
        gap: 24px;
        width: max-content;
        animation: speakerMarqueeLeft 55s linear infinite;
      }

      .speaker-marquee-row-2 {
        display: flex;
        gap: 24px;
        width: max-content;
        animation: speakerMarqueeRight 55s linear infinite;
      }

      .speaker-card-prominent {
        transition: all 350ms cubic-bezier(0.21, 0.47, 0.32, 0.98) !important;
      }

      .speaker-card-prominent:hover {
        background-color: rgba(255,255,255,0.05) !important;
        border-color: #FF2D87 !important;
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 12px 30px rgba(255, 45, 135, 0.15) !important;
      }

      .speaker-card-prominent:hover img {
        transform: scale(1.05);
      }
    `}</style>

    <div style={{
      maxWidth: "1400px",
      margin: "0 auto",
      paddingLeft: "clamp(24px, 6vw, 96px)",
      paddingRight: "clamp(24px, 6vw, 96px)"
    }}>
      <span style={{
        display: "block",
        fontFamily: "Figtree",
        fontSize: "9px",
        fontWeight: 600,
        letterSpacing: "0.28em",
        color: "#FF2D87",
        textTransform: "uppercase"
      }}>
        PAST SUMMIT LUMINARIES
      </span>
      <h2 style={{
        marginTop: "16px",
        marginBottom: "0",
        fontFamily: "Figtree",
        fontWeight: 300,
        fontSize: "clamp(28px, 4vw, 52px)",
        color: "#FFFFFF",
        letterSpacing: "-0.03em",
        lineHeight: 1.1
      }}>
        Visionary Voices. Pioneers of Progress.
      </h2>
      <p style={{
        marginTop: "20px",
        marginBottom: "48px",
        fontFamily: "Figtree",
        fontSize: "clamp(15px, 1.8vw, 17px)",
        fontWeight: 400,
        color: "rgba(255,255,255,0.45)",
        lineHeight: 1.6,
        maxWidth: "800px"
      }}>
        EmpowaWomen has hosted exceptional change-makers, industry pioneers, and senior executives from leading institutions across Africa—raising the benchmark for women-led economic transformation.
      </p>
    </div>

    {/* Dual Row Infinite Marquee */}
    <div className="speaker-marquee-container" style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      width: "100%",
      position: "relative"
    }}>
      {/* Fade Gradients left/right */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, #0A0A0F, transparent 15%, transparent 85%, #0A0A0F)",
        pointerEvents: "none",
        zIndex: 2
      }} />

      {/* Row 1: Left Scrolling */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="speaker-marquee-row-1">
          {row1.map((sp, i) => (
            <div
              key={`row1-sp-${sp.id}-${i}`}
              className="speaker-card-prominent"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                padding: "16px",
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                cursor: "default"
              }}
            >
              {/* Prominent Image Header */}
              <div style={{
                position: "relative",
                width: "100%",
                height: "260px",
                borderRadius: "14px",
                overflow: "hidden",
                border: `1px solid rgba(255,255,255,0.08)`,
                backgroundColor: "rgba(255,255,255,0.02)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {sp.image && (
                  <img
                    src={sp.image}
                    alt={sp.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      transition: "transform 500ms ease-out"
                    }}
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                      if (fallback) {
                        (fallback as HTMLDivElement).style.display = "flex";
                      }
                    }}
                  />
                )}
                <div
                  className="avatar-fallback"
                  style={{
                    display: sp.image ? "none" : "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: AVATAR_BG_CYCLE[i % 3],
                    color: "#FFFFFF",
                    fontWeight: 200,
                    fontFamily: "Figtree",
                    fontSize: "36px",
                    letterSpacing: "0.05em"
                  }}
                >
                  {sp.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
              </div>

              {/* Speaker Metadata details */}
              <div style={{ padding: "16px 4px 8px 4px", display: "flex", flexDirection: "column" }}>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: getAccentColor(i),
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {sp.company}
                </span>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical"
                }}>
                  {sp.name}
                </span>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "6px",
                  lineHeight: 1.4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  minHeight: "36px"
                }}>
                  {sp.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right Scrolling */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="speaker-marquee-row-2">
          {row2.map((sp, i) => (
            <div
              key={`row2-sp-${sp.id}-${i}`}
              className="speaker-card-prominent"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                padding: "16px",
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                cursor: "default"
              }}
            >
              {/* Prominent Image Header */}
              <div style={{
                position: "relative",
                width: "100%",
                height: "260px",
                borderRadius: "14px",
                overflow: "hidden",
                border: `1px solid rgba(255,255,255,0.08)`,
                backgroundColor: "rgba(255,255,255,0.02)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {sp.image && (
                  <img
                    src={sp.image}
                    alt={sp.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      transition: "transform 500ms ease-out"
                    }}
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                      if (fallback) {
                        (fallback as HTMLDivElement).style.display = "flex";
                      }
                    }}
                  />
                )}
                <div
                  className="avatar-fallback"
                  style={{
                    display: sp.image ? "none" : "flex",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: AVATAR_BG_CYCLE[(i + 1) % 3],
                    color: "#FFFFFF",
                    fontWeight: 200,
                    fontFamily: "Figtree",
                    fontSize: "36px",
                    letterSpacing: "0.05em"
                  }}
                >
                  {sp.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </div>
              </div>

              {/* Speaker Metadata details */}
              <div style={{ padding: "16px 4px 8px 4px", display: "flex", flexDirection: "column" }}>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: getAccentColor(i + 1),
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {sp.company}
                </span>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical"
                }}>
                  {sp.name}
                </span>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  marginTop: "6px",
                  lineHeight: 1.4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  minHeight: "36px"
                }}>
                  {sp.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>;
};

// ─── Countdown CTA ────────────────────────────────────────────────────────────
const CountdownCtaSection: React.FC<{
  scrollToRegistration: () => void;
}> = ({
  scrollToRegistration
}) => {
    return <section className="relative" style={{
      backgroundColor: "#0A0A0F",
      zIndex: 10
    }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-80px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="flex flex-col items-center">
          <div className="shrink-0 mb-5" style={{
            width: "48px",
            height: "3px",
            background: `linear-gradient(to right, ${ACCENT_PINK}, ${ACCENT_TEAL}, ${ACCENT_AMBER})`
          }} />
          <span className="uppercase mb-5" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)"
          }}>
            EVENT COUNTDOWN
          </span>
          <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(28px, 6vw, 80px)",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            margin: "0 0 20px 0"
          }}>
            Countless Opportunities.
          </h2>
          <p style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 0 40px 0"
          }}>
            The future belongs to women who lead with courage, build with purpose, and create with impact. Your seat at the table is waiting.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
            <a href="#" className="inline-flex items-center justify-center gap-2 no-underline" style={{
              padding: "14px 28px",
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 500,
              borderRadius: "999px",
              transition: "filter 200ms ease-out",
              textDecoration: "none"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
            }} onClick={e => {
              e.preventDefault();
              scrollToRegistration();
            }}>
              <span>Register Now - R1,500</span>
              <ArrowRight size={18} />
            </a>
            <a href="#" className="inline-flex items-center justify-center no-underline" style={{
              padding: "14px 28px",
              backgroundColor: "rgba(255,255,255,0.04)",
              color: "#FFFFFF",
              fontFamily: "Figtree",
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 400,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              transition: "background-color 200ms ease-out"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.04)";
            }}>
              The Forum · Bryanston
            </a>
          </div>

          <p style={{
            fontFamily: "Figtree",
            fontStyle: "italic",
            fontSize: "clamp(13px, 1.6vw, 15px)",
            fontWeight: 300,
            margin: 0
          }}>
            <span style={{
              color: ACCENT_PINK
            }}>Lead Fearlessly.</span>
            <span style={{
              color: "rgba(255,255,255,0.30)",
              margin: "0 6px"
            }}>·</span>
            <span style={{
              color: ACCENT_TEAL
            }}>Accelerate Growth.</span>
            <span style={{
              color: "rgba(255,255,255,0.30)",
              margin: "0 6px"
            }}>·</span>
            <span style={{
              color: ACCENT_AMBER
            }}>Transform Economies.</span>
          </p>
        </motion.div>
      </div>
    </section>;
  };

// ─── Registration Form Section ────────────────────────────────────────────────
const RegistrationFormSection: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [referral, setReferral] = React.useState("");
  const [requirements, setRequirements] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "8px",
    padding: "14px 16px",
    color: "white",
    fontSize: "14px",
    fontFamily: "Figtree",
    width: "100%",
    outline: "none",
    boxSizing: "border-box"
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const checkColors = [ACCENT_PINK, ACCENT_TEAL, ACCENT_AMBER, ACCENT_PINK];
  const checkBgColors = ["rgba(255,45,135,0.15)", "rgba(0,180,166,0.15)", "rgba(217,119,6,0.15)", "rgba(255,45,135,0.15)"];
  const checkBorderColors = ["rgba(255,45,135,0.40)", "rgba(0,180,166,0.40)", "rgba(217,119,6,0.40)", "rgba(255,45,135,0.40)"];
  return <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32" style={{
    backgroundColor: "#0A0A0F",
    background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,45,135,0.06) 0%, transparent 70%), #0A0A0F",
    zIndex: 10,
    position: "relative"
  }}>
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* LEFT — Form or Success */}
      <motion.div initial={{
        opacity: 0,
        x: -24
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="flex-1" style={{
        minWidth: 0
      }}>
        {submitted ? <div className="flex flex-col items-center py-16 gap-6 text-center">
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
            backgroundColor: "rgba(255,45,135,0.12)",
            border: "2px solid #FF2D87",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}>
            <Check size={36} style={{
              color: "#FF2D87"
            }} />
          </motion.div>
          <h3 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(24px, 4vw, 40px)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: 0
          }}>
            You're Registered!
          </h3>
          <p style={{
            fontFamily: "Figtree",
            fontSize: "15px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            maxWidth: "480px",
            margin: 0
          }}>
            Thank you! Our team will confirm your registration within 24 hours. Check your inbox for a confirmation email.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button style={{
              padding: "12px 28px",
              backgroundColor: ACCENT_PINK,
              color: "#FFFFFF",
              borderRadius: "999px",
              fontFamily: "Figtree",
              fontWeight: 500,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              transition: "filter 200ms ease-out"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
            }}>
              Add to Calendar
            </button>
            <button onClick={() => setSubmitted(false)} style={{
              padding: "12px 28px",
              backgroundColor: "rgba(255,255,255,0.04)",
              color: "#FFFFFF",
              borderRadius: "999px",
              fontFamily: "Figtree",
              fontWeight: 400,
              fontSize: "15px",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              transition: "background-color 200ms ease-out"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.04)";
            }}>
              Back to Summit Info
            </button>
          </div>
          <p className="mt-4" style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "rgba(255,45,135,0.60)",
            margin: 0
          }}>
            #LeadFearlessly · #AccelerateGrowth · #TransformEconomies
          </p>
        </div> : <div>
          <div style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#FF2D87",
            marginBottom: "16px"
          }} />
          <span className="uppercase block" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "16px"
          }}>
            DELEGATE REGISTRATION
          </span>
          <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(24px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            margin: "0 0 16px 0",
            lineHeight: 1.1
          }}>
            Secure Your Seat at the Table
          </h2>
          <p style={{
            fontFamily: "Figtree",
            fontSize: "14px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.50)",
            lineHeight: 1.75,
            margin: "0 0 32px 0"
          }}>
            Investment: R1,500 per delegate. Fill in your details and our team will confirm your registration within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Two-col rows collapse to one-col on mobile */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} style={inputStyle} />
              <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} style={inputStyle} />
            </div>
            <input type="text" placeholder="Job Title" value={jobTitle} onChange={e => setJobTitle(e.target.value)} style={inputStyle} />
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} style={inputStyle} />
              <select value={industry} onChange={e => setIndustry(e.target.value)} style={{
                ...inputStyle,
                appearance: "none",
                WebkitAppearance: "none"
              }}>
                <option value="" disabled>Industry</option>
                <option value="financial-services">Financial Services</option>
                <option value="mining-energy">Mining &amp; Energy</option>
                <option value="government-policy">Government &amp; Policy</option>
                <option value="technology">Technology</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="healthcare">Healthcare</option>
                <option value="legal">Legal &amp; Professional Services</option>
                <option value="media">Media &amp; Communications</option>
                <option value="other">Other</option>
              </select>
            </div>
            <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
            <input type="tel" placeholder="+27 ..." value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
            <select value={referral} onChange={e => setReferral(e.target.value)} style={{
              ...inputStyle,
              appearance: "none",
              WebkitAppearance: "none"
            }}>
              <option value="" disabled>How did you hear about us?</option>
              <option value="linkedin">LinkedIn</option>
              <option value="colleague">Colleague Referral</option>
              <option value="newsletter">Email Newsletter</option>
              <option value="google">Google Search</option>
              <option value="partner">Event Partner</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Special requirements (optional)" rows={3} value={requirements} onChange={e => setRequirements(e.target.value)} style={{
              ...inputStyle,
              resize: "vertical"
            }} />
            <div className="flex items-start gap-3">
              <input type="checkbox" id="reg-agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{
                accentColor: "#FF2D87",
                marginTop: "2px",
                flexShrink: 0,
                cursor: "pointer"
              }} />
              <label htmlFor="reg-agree" style={{
                fontFamily: "Figtree",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.50)",
                lineHeight: 1.6,
                cursor: "pointer"
              }}>
                I agree to the EmpowaWomen Privacy Policy and Terms &amp; Conditions
              </label>
            </div>
            <button type="submit" style={{
              width: "100%",
              height: "52px",
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              borderRadius: "999px",
              fontFamily: "Figtree",
              fontWeight: 500,
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 200ms ease-out",
              marginTop: "4px"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e0006f";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF2D87";
            }}>
              Submit Registration →
            </button>
            <p style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.25)",
              textAlign: "center",
              margin: "12px 0 0 0"
            }}>
              Your information is secure and will never be shared.
            </p>
          </form>
        </div>}
      </motion.div>

      {/* RIGHT — Summary card */}
      <motion.div initial={{
        opacity: 0,
        x: 24
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-80px"
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="w-full lg:w-[40%] self-start" style={{
        flexShrink: 0
      }}>
        <div style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "0",
          overflow: "hidden"
        }}>
          <img src="https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2948.jpg" alt="EmpowaWomen delegates" style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            objectPosition: "center 20%",
            borderRadius: "12px 12px 0 0",
            display: "block"
          }} />
          <div style={{
            padding: "24px sm:32px"
          }} className="p-6 sm:p-8">
            <span className="block uppercase" style={{
              fontFamily: "Figtree",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "12px"
            }}>
              YOUR REGISTRATION INCLUDES
            </span>
            <p style={{
              fontFamily: "Figtree",
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF",
              margin: "0 0 4px 0",
              lineHeight: 1.3
            }}>
              EmpowaWomen Leadership Summit 2026
            </p>
            <div style={{
              height: "1px",
              backgroundColor: "rgba(255,45,135,0.30)",
              margin: "24px 0"
            }} />
            <div className="flex flex-col">
              {REGISTRATION_DETAILS.map(detail => <div key={detail.id} className="flex justify-between gap-4" style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.06)"
              }}>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.40)",
                  flexShrink: 0
                }}>{detail.label}</span>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  textAlign: "right"
                }}>{detail.value}</span>
              </div>)}
            </div>
            <div style={{
              height: "1px",
              backgroundColor: "rgba(255,45,135,0.30)",
              margin: "24px 0"
            }} />
            <span className="block uppercase" style={{
              fontFamily: "Figtree",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "16px"
            }}>
              WHAT IS INCLUDED
            </span>
            <div className="flex flex-col gap-3">
              {INCLUDED_ITEMS.map((item, itemIdx) => <div key={item.id} className="flex items-start gap-3">
                <div style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: checkBgColors[itemIdx],
                  border: `1px solid ${checkBorderColors[itemIdx]}`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px"
                }}>
                  <Check size={10} style={{
                    color: checkColors[itemIdx]
                  }} />
                </div>
                <span style={{
                  fontFamily: "Figtree",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.70)",
                  lineHeight: 1.5
                }}>{item.text}</span>
              </div>)}
            </div>
            <div className="flex items-center gap-2" style={{
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.06)"
            }}>
              <Shield size={12} style={{
                color: "rgba(255,255,255,0.30)",
                flexShrink: 0
              }} />
              <span style={{
                fontFamily: "Figtree",
                fontSize: "11px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.25)"
              }}>
                Secure · Confidential · Confirmed within 24hrs
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const EmpowaWomenSummitPage: React.FC = () => {
  const heroRef = React.useRef<HTMLElement | null>(null);
  const footerRef = React.useRef<HTMLElement | null>(null);
  const registrationRef = React.useRef<HTMLDivElement>(null);
  const nextSectionRef = React.useRef<HTMLDivElement>(null);
  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return <main className="selection:bg-[#FF2D87]/30" style={{
    minHeight: "100vh",
    fontFamily: "Figtree"
  }}>
    <HeroSection sectionRef={heroRef} scrollToRegistration={scrollToRegistration} scrollToNextSection={scrollToNextSection} />
    <div ref={nextSectionRef}>
      <SponsorMarqueeStrip />
    </div>
    <IntroBridgeSection />
    <SummitIntelligenceSection />
    <AgendaSection />
    <WhoShouldAttendSection scrollToRegistration={scrollToRegistration} />
    <WhyAttendSection />
    <ExpectedAudienceSection />
    <PastSpeakersShowcase />
    <CountdownCtaSection scrollToRegistration={scrollToRegistration} />
    <div ref={registrationRef}>
      <RegistrationFormSection />
    </div>
    <div ref={footerRef as React.RefObject<HTMLDivElement>} style={{ height: "1px" }} />
    <StickyCtaBar heroRef={heroRef} footerRef={footerRef} scrollToRegistration={scrollToRegistration} />
  </main>;
};
