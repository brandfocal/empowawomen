import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Star, Users, TrendingUp, Award, BookOpen, CheckCircle } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface AgendaItem {
    id: string;
    time: string;
    title: string;
    description: string;
    type: string;
    accentColor: string;
}
interface WhoAttendsCard {
    id: string;
    accentColor: string;
    label: string;
    sub: string;
    imageUrl: string;
}
interface WhyAttendCard {
    id: string;
    iconColor: string;
    title: string;
    description: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const HERO_WORDS = ["More", "Than", "A", "Celebration."];
const LOGOS = [{
    id: "lg-1",
    name: "ABSA"
}, {
    id: "lg-2",
    name: "DEPT. OF WOMEN"
}, {
    id: "lg-3",
    name: "STANDARD BANK"
}, {
    id: "lg-4",
    name: "ANGLO AMERICAN"
}, {
    id: "lg-5",
    name: "NEDBANK"
}, {
    id: "lg-6",
    name: "ESKOM"
}, {
    id: "lg-7",
    name: "MTN"
}, {
    id: "lg-8",
    name: "SASOL"
}, {
    id: "lg-9",
    name: "OLD MUTUAL"
}];
const EXTENDED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];
const AGENDA_ITEMS: AgendaItem[] = [{
    id: "ag-1",
    time: "10h00 – 10h30",
    title: "Executive Arrival Networking & Cultural Welcome Experience™",
    description: "Executive media interviews, curated introductions, and red carpet photography.",
    type: "NETWORKING",
    accentColor: "#00B4A6"
}, {
    id: "ag-2",
    time: "10h30 – 10h45",
    title: "Official Opening & International Women's Day Address™",
    description: "A formal commencement setting the strategic tone for the day's high-level deliberations.",
    type: "CEREMONY",
    accentColor: "#D97706"
}, {
    id: "ag-3",
    time: "10h45 – 11h15",
    title: "Global Future Economy Keynote™",
    description: "Insightful analysis of emerging economic shifts and the pivotal role of women in steering global growth.",
    type: "KEYNOTE",
    accentColor: "#FF2D87"
}, {
    id: "ag-4",
    time: "11h15 – 11h55",
    title: "Executive Leadership Conversation™",
    description: "Interactive dialogue featuring industry titans on navigating leadership challenges in complex markets.",
    type: "CONVERSATION",
    accentColor: "#00B4A6"
}, {
    id: "ag-5",
    time: "11h55 – 12h15",
    title: "Cultural Performance & Creative Showcase™",
    description: "A multisensory celebration of African creative excellence and heritage.",
    type: "CULTURAL",
    accentColor: "#6D28D9"
}, {
    id: "ag-6",
    time: "12h15 – 12h45",
    title: "Women, Capital & Economic Transformation Fireside Chat™",
    description: "Exploring strategies for bridging the capital gap and driving systemic economic change.",
    type: "FIRESIDE",
    accentColor: "#FF2D87"
}, {
    id: "ag-7",
    time: "12h45 – 13h15",
    title: "Executive Networking Lunch & Luxury Brand Experience™",
    description: "Curated gastronomic journey paired with exclusive high-end brand showcases.",
    type: "NETWORKING",
    accentColor: "#00B4A6"
}, {
    id: "ag-8",
    time: "13h15 – 13h45",
    title: "Future Industries & Innovation Keynote™",
    description: "Preparing for the fourth industrial revolution and beyond.",
    type: "KEYNOTE",
    accentColor: "#FF2D87"
}, {
    id: "ag-9",
    time: "13h45 – 14h00",
    title: "Closing Reflections & Strategic Networking Session™",
    description: "Synthesis of key outcomes and final high-value connections.",
    type: "CLOSING",
    accentColor: "#D97706"
}];
const DELEGATE_BENEFITS = [{
    id: "db-1",
    text: "VIP Red Carpet Experience"
}, {
    id: "db-2",
    text: "Strategic Industry Insights Report"
}, {
    id: "db-3",
    text: "Executive Networking Directory"
}, {
    id: "db-4",
    text: "Gourmet Networking Lunch"
}, {
    id: "db-5",
    text: "Private Cultural Showcase"
}, {
    id: "db-6",
    text: "Luxury Gift Experience™"
}];
const WHO_ATTENDS_CARDS: WhoAttendsCard[] = [{
    id: "wa-1",
    accentColor: "#FF2D87",
    label: "CXOs & C-Suite",
    sub: "Chief Executives & Officers",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=85"
}, {
    id: "wa-2",
    accentColor: "#00B4A6",
    label: "Board Directors",
    sub: "Chairs & Non-Executives",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=85"
}, {
    id: "wa-3",
    accentColor: "#D97706",
    label: "Founders",
    sub: "Entrepreneurs & Investors",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=85"
}, {
    id: "wa-4",
    accentColor: "#6D28D9",
    label: "Policymakers",
    sub: "Government & Regulators",
    imageUrl: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=85"
}, {
    id: "wa-5",
    accentColor: "rgba(255,255,255,0.3)",
    label: "Industry Leaders",
    sub: "Sector Executives",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85"
}];
const WHY_ATTEND_CARDS: WhyAttendCard[] = [{
    id: "wr-1",
    iconColor: "#FF2D87",
    title: "Strategic Partnerships",
    description: "Form high-value connections with Africa's most influential business leaders, board members, and institutional decision-makers in one curated room."
}, {
    id: "wr-2",
    iconColor: "#00B4A6",
    title: "Capital & Market Access",
    description: "Unlock pathways to capital, investment networks, and cross-sector market opportunities through structured executive introductions."
}, {
    id: "wr-3",
    iconColor: "#D97706",
    title: "Executive Positioning",
    description: "Elevate your personal brand through keynote exposure, media coverage, and placement in our widely-distributed Executive Directory."
}, {
    id: "wr-4",
    iconColor: "#6D28D9",
    title: "Industry Intelligence",
    description: "Receive curated insights from global economic keynotes, fireside conversations, and the exclusive post-summit Strategic Insights Report."
}];
const CTA_TRUST_ITEMS = [{
    id: "tr-1",
    label: "Reviewed within 48hrs"
}, {
    id: "tr-2",
    label: "Invitation-only"
}, {
    id: "tr-3",
    label: "Limited to 200"
}];

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
    const {
        scrollY
    } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
    return <section style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0A0A0F",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "68px",
        paddingBottom: "80px"
    }}>
        {/* Grain noise layer */}
        <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 3,
            opacity: 0.04,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
            animation: "grainShift 0.8s steps(1) infinite"
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
                    <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=90" alt="IWD Summit 2027" className="w-full h-full object-cover" style={{
                        objectPosition: "center 30%"
                    }} />
                </motion.div>
            </motion.div>
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
            }} />
        </div>

        {/* Content wrapper */}
        <div style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1400px",
            paddingLeft: "clamp(20px, 5vw, 60px)",
            paddingRight: "clamp(20px, 5vw, 60px)",
            paddingTop: "clamp(80px, 12vw, 128px)",
            paddingBottom: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <motion.div initial={{
                y: 90
            }} animate={{
                y: 0
            }} transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }} style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {/* Pre-heading pill */}
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
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    marginBottom: "28px"
                }}>
                    <span style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#FF2D87",
                        display: "inline-block",
                        flexShrink: 0,
                        animation: "pulseDot 2s ease-in-out infinite"
                    }} />
                    <span style={{
                        fontFamily: "Figtree",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        color: "rgba(255,255,255,0.60)",
                        textTransform: "uppercase"
                    }}>
                        PRESTIGE SERIES · 08 MARCH 2027
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1 initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1
                }} transition={{
                    duration: 0.5
                }} style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(40px, 8vw, 96px)",
                    color: "#FFFFFF",
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.0,
                    marginBottom: "24px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "0.25em"
                }}>
                    {HERO_WORDS.map((word, i) => {
                        const isCelebration = word === "Celebration.";
                        const wordWithoutPeriod = isCelebration ? word.slice(0, -1) : word;
                        return <motion.span key={`hero-word-${word}-${i}`} style={{
                            display: "inline-block"
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
                            {isCelebration ? <span>
                                <span style={{
                                    textDecoration: "underline",
                                    textDecorationColor: "#FF2D87",
                                    textDecorationThickness: "3px",
                                    textUnderlineOffset: "6px",
                                    color: "#FFFFFF"
                                }}>
                                    {wordWithoutPeriod}
                                </span>
                                <span style={{
                                    color: "#FF2D87",
                                    textDecoration: "none"
                                }}>.</span>
                            </span> : <span>{word}</span>}
                        </motion.span>;
                    })}
                </motion.h1>

                {/* Description */}
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
                    fontSize: "clamp(15px, 2.5vw, 17px)",
                    color: "rgba(255,255,255,0.50)",
                    maxWidth: "580px",
                    margin: "0 auto 36px auto",
                    textAlign: "center",
                    lineHeight: 1.75,
                    paddingLeft: "8px",
                    paddingRight: "8px"
                }}>
                    A High-Impact Leadership &amp; Economic Influence Platform For Women Shaping Africa's Future.
                </motion.p>

                {/* CTAs */}
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.8,
                    delay: 1.4
                }} className="w-full sm:w-auto" style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "40px",
                    paddingLeft: "clamp(16px, 5vw, 0px)",
                    paddingRight: "clamp(16px, 5vw, 0px)"
                }}>
                    <a href="#" className="w-full sm:w-auto" style={{
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        backgroundColor: "#FF2D87",
                        height: "50px",
                        padding: "0 32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                        borderRadius: "999px",
                        transition: "all 200ms ease-out",
                        boxShadow: "0 0 32px rgba(255,45,135,0.25)",
                        width: "100%",
                        maxWidth: "400px"
                    }} onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.filter = "brightness(1.1)";
                        el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
                    }} onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.filter = "brightness(1)";
                        el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
                    }}>
                        Request Delegate Seat
                    </a>
                    <a href="#" className="w-full sm:w-auto" style={{
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        backgroundColor: "transparent",
                        height: "50px",
                        padding: "0 32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.20)",
                        letterSpacing: "0.02em",
                        borderRadius: "999px",
                        transition: "all 200ms ease-out",
                        width: "100%",
                        maxWidth: "400px"
                    }} onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.backgroundColor = "rgba(255,255,255,0.08)";
                        el.style.borderColor = "rgba(255,255,255,0.40)";
                    }} onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.backgroundColor = "transparent";
                        el.style.borderColor = "rgba(255,255,255,0.20)";
                    }}>
                        View Agenda
                    </a>
                </motion.div>

                {/* Logo scroller */}
                <motion.div initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1
                }} transition={{
                    duration: 1,
                    delay: 1.8
                }} style={{
                    width: "100%",
                    marginTop: "40px",
                    overflow: "hidden",
                    position: "relative",
                    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}>
                    <motion.div animate={{
                        x: ["0%", "-50%"]
                    }} transition={{
                        duration: 35,
                        ease: "linear",
                        repeat: Infinity
                    }} style={{
                        display: "flex",
                        gap: "60px",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        width: "max-content"
                    }}>
                        {EXTENDED_LOGOS.map((logo, i) => <div key={`logo-${logo.id}-${i}`} style={{
                            flexShrink: 0,
                            height: "60px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.18em",
                                color: "rgba(255,255,255,0.20)",
                                cursor: "default",
                                textTransform: "uppercase",
                                transition: "color 200ms ease-out"
                            }} onMouseEnter={e => {
                                (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.60)";
                            }} onMouseLeave={e => {
                                (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.20)";
                            }}>
                                {logo.name}
                            </span>
                        </div>)}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>

        {/* Bottom gradient */}
        <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0A0A0F 0%, transparent 40%)",
            pointerEvents: "none",
            zIndex: 2
        }} />

        <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes grainShift {
          0%   { transform: translate(0, 0); }
          10%  { transform: translate(-2px, 1px); }
          20%  { transform: translate(2px, -1px); }
          30%  { transform: translate(-1px, 2px); }
          40%  { transform: translate(1px, -2px); }
          50%  { transform: translate(0, 1px); }
          60%  { transform: translate(-2px, -1px); }
          70%  { transform: translate(2px, 2px); }
          80%  { transform: translate(-1px, -2px); }
          90%  { transform: translate(1px, 0); }
          100% { transform: translate(0, 0); }
        }
        @keyframes pulseDotPink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const IWDSummitDetail = () => {
    return <div className="bg-[#0A0A0F] min-h-screen text-foreground selection:bg-[#FF2D87]/30">
        <HeroSection />

        {/* ── 1. POSITIONING SECTION ── */}
        <section style={{
            backgroundColor: "#F7F6F2",
            overflow: "hidden",
            position: "relative",
            marginTop: "-72px",
            borderRadius: "40px 40px 0 0",
            zIndex: 10,
            boxShadow: "0 -24px 64px rgba(0,0,0,0.5)",
            paddingTop: "0",
            paddingBottom: "clamp(64px, 10vw, 128px)"
        }}>
            <div style={{
                position: "relative",
                zIndex: 1
            }}>
                {/* Tagline bar */}
                <div style={{
                    backgroundColor: "#FF2D87",
                    padding: "20px clamp(20px, 6vw, 96px)",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "40px"
                }}>
                    <p style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontStyle: "italic",
                        fontSize: "clamp(14px, 2vw, 22px)",
                        color: "rgba(255,255,255,1)",
                        textAlign: "center",
                        margin: 0,
                        lineHeight: 1.6
                    }}>
                        More Than A Celebration. A High-Impact Leadership &amp; Economic Influence Platform For Women Shaping Africa's Future.
                    </p>
                </div>

                {/* Main content */}
                <div style={{
                    paddingTop: "clamp(32px, 5vw, 56px)"
                }} className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <div className="lg:col-span-7">
                        <motion.span initial={{
                            opacity: 0,
                            x: -20
                        }} whileInView={{
                            opacity: 1,
                            x: 0
                        }} viewport={{
                            once: true
                        }} style={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "9px",
                            letterSpacing: "0.28em",
                            color: "#64748b",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "20px"
                        }}>
                            CORE THEME
                        </motion.span>
                        <motion.h2 initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} className="text-4xl md:text-6xl font-light text-[#0A0A0F] leading-tight mb-6 tracking-tight">
                            The Future Economy Will Be Led By Women Who Build Influence, Innovation &amp; Inclusive Growth.
                        </motion.h2>
                        <motion.p initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-xl">
                            At the heart of the International Women's Day Summit 2027 is a commitment to shifting from mere
                            celebration to strategic economic participation. We gather global leaders to engineer the future.
                        </motion.p>
                    </div>
                    <div className="lg:col-span-5">
                        <motion.div initial={{
                            opacity: 0,
                            scale: 0.95
                        }} whileInView={{
                            opacity: 1,
                            scale: 1
                        }} viewport={{
                            once: true
                        }} className="bg-[#0A0A0F] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2D87]/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-0">
                                "More Than A Celebration. A High-Impact Leadership &amp; Economic Influence Platform For Women Shaping Africa's Future."
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-[1px] bg-[#FF2D87]" />
                                <span style={{
                                    fontFamily: "Figtree",
                                    fontWeight: 600,
                                    fontSize: "9px",
                                    letterSpacing: "0.28em",
                                    color: "rgba(255,255,255,0.35)",
                                    textTransform: "uppercase"
                                }}>
                                    Executive Mandate
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* ── 2. LOGISTICS GRID ── */}
        <section style={{
            backgroundColor: "#0A0A0F",
            padding: "48px clamp(20px, 6vw, 96px)"
        }}>
            {/* Header */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                marginBottom: "32px"
            }}>
                <div style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#FF2D87"
                }} />
                <span style={{
                    fontFamily: "Figtree",
                    fontWeight: 600,
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase"
                }}>
                    LOGISTICS SUMMARY
                </span>
            </div>

            {/* 3-col grid — stacks on mobile */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
                    {/* DATE */}
                    <div className="py-8 sm:pr-10 sm:pl-0 px-0">
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "9px",
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.35)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "12px"
                        }}>
                            DATE
                        </span>
                        <p style={{
                            fontFamily: "Figtree",
                            fontWeight: 200,
                            fontSize: "clamp(22px, 3vw, 36px)",
                            color: "#FFFFFF",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            margin: "0 0 8px 0"
                        }}>
                            Monday, 08 March 2027
                        </p>
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.35)",
                            display: "block"
                        }}>
                            International Women's Day
                        </span>
                    </div>
                    {/* TIME */}
                    <div className="py-8 sm:px-10 px-0">
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "9px",
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.35)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "12px"
                        }}>
                            TIME
                        </span>
                        <p style={{
                            fontFamily: "Figtree",
                            fontWeight: 200,
                            fontSize: "clamp(22px, 3vw, 36px)",
                            color: "#FFFFFF",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            margin: "0 0 8px 0"
                        }}>
                            10h00 – 14h00
                        </p>
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.35)",
                            display: "block"
                        }}>
                            Executive Programme Duration
                        </span>
                    </div>
                    {/* VENUE */}
                    <div className="py-8 sm:pl-10 sm:pr-0 px-0">
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "9px",
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.35)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "12px"
                        }}>
                            VENUE
                        </span>
                        <p style={{
                            fontFamily: "Figtree",
                            fontWeight: 200,
                            fontSize: "clamp(22px, 3vw, 36px)",
                            color: "#FFFFFF",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                            margin: "0 0 8px 0"
                        }}>
                            EmpowaWorx House
                        </p>
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.35)",
                            display: "block"
                        }}>
                            Johannesburg, South Africa
                        </span>
                    </div>
                </div>
            </div>
        </section>

        {/* ── 3. WHO ATTENDS ── */}
        <section style={{
            backgroundColor: "#F7F6F2",
            paddingTop: "clamp(64px, 8vw, 96px)",
            paddingBottom: "clamp(64px, 8vw, 96px)"
        }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.span initial={{
                    opacity: 0,
                    y: 10
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} style={{
                    fontFamily: "Figtree",
                    fontWeight: 600,
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    color: "#64748b",
                    textTransform: "uppercase",
                    display: "block"
                }}>
                    WHO ATTENDS
                </motion.span>
                <motion.h2 initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(28px, 4vw, 52px)",
                    color: "#0A0A0F",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    marginTop: "16px",
                    marginBottom: 0
                }}>
                    Africa's most senior women decision-makers. In one room.
                </motion.h2>
                <motion.p initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} style={{
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    color: "#64748b",
                    marginTop: "16px",
                    lineHeight: 1.75,
                    maxWidth: "560px"
                }}>
                    The IWD Summit 2027 convenes a deliberately curated cross-section of Africa's most influential women across business, government, and civil society.
                </motion.p>

                {/* Image-backed cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
                    {WHO_ATTENDS_CARDS.map(card => <motion.div key={card.id} initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} whileHover={{
                        scale: 1.02
                    }} transition={{
                        duration: 0.3
                    }} style={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "20px",
                        minHeight: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        cursor: "pointer"
                    }}>
                        <img src={card.imageUrl} alt={card.label} style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center top"
                        }} />
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.50) 60%, transparent 100%)"
                        }} />
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            backgroundColor: card.accentColor
                        }} />
                        <div style={{
                            position: "relative",
                            zIndex: 10,
                            padding: "16px"
                        }}>
                            <p style={{
                                fontFamily: "Figtree",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: "#FFFFFF",
                                margin: "0 0 2px 0"
                            }}>
                                {card.label}
                            </p>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.55)",
                                margin: 0,
                                marginTop: "2px"
                            }}>
                                {card.sub}
                            </p>
                        </div>
                    </motion.div>)}
                </div>

                {/* Access pill */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "32px"
                }}>
                    <div style={{
                        background: "rgba(255,45,135,0.08)",
                        border: "1px solid rgba(255,45,135,0.20)",
                        padding: "10px 20px",
                        borderRadius: "999px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <span style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "#FF2D87",
                            display: "inline-block",
                            flexShrink: 0,
                            animation: "pulseDotPink 2s ease-in-out infinite"
                        }} />
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "12px",
                            color: "#FF2D87"
                        }}>
                            Strictly Invitation-Only · Limited to 200 Delegates
                        </span>
                    </div>
                </div>
            </div>
        </section>

        {/* ── 4. WHY ATTEND ── */}
        <section style={{
            backgroundColor: "#0A0A0F",
            paddingTop: "clamp(64px, 10vw, 128px)",
            paddingBottom: "clamp(64px, 10vw, 128px)"
        }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.span initial={{
                    opacity: 0,
                    y: 10
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} style={{
                    fontFamily: "Figtree",
                    fontWeight: 600,
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    display: "block"
                }}>
                    WHY ATTEND
                </motion.span>
                <motion.h2 initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(28px, 4vw, 52px)",
                    color: "#FFFFFF",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.15,
                    marginTop: "16px",
                    marginBottom: 0
                }}>
                    What you will leave with.
                </motion.h2>
                <motion.p initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} style={{
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: "16px",
                    lineHeight: 1.75,
                    maxWidth: "512px"
                }}>
                    Every seat is an investment. Here is the tangible return every delegate walks away with from the IWD Summit 2027.
                </motion.p>

                {/* 2×2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 lg:mt-16">
                    {WHY_ATTEND_CARDS.map((card, i) => <motion.div key={card.id} initial={{
                        opacity: 0,
                        y: 30
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.6,
                        delay: i * 0.1
                    }} whileHover={{
                        backgroundColor: "rgba(255,255,255,0.07)"
                    }} style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "24px",
                        padding: "clamp(24px, 4vw, 40px)",
                        transition: "background-color 300ms"
                    }}>
                        <div style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            backgroundColor: card.iconColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "20px"
                        }}>
                            {i === 0 && <Users size={22} color="#fff" />}
                            {i === 1 && <TrendingUp size={22} color="#fff" />}
                            {i === 2 && <Award size={22} color="#fff" />}
                            {i === 3 && <BookOpen size={22} color="#fff" />}
                        </div>
                        <h3 style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "clamp(20px, 2.5vw, 24px)",
                            color: "#FFFFFF",
                            letterSpacing: "-0.02em",
                            margin: "0 0 12px 0"
                        }}>
                            {card.title}
                        </h3>
                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.45)",
                            lineHeight: 1.7,
                            margin: 0
                        }}>
                            {card.description}
                        </p>
                    </motion.div>)}
                </div>
            </div>
        </section>

        {/* ── 5. AGENDA TIMELINE ── */}
        <section className="bg-[#0A0A0F] py-20 md:py-32 lg:py-48 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF2D87]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8">
                    <div className="max-w-2xl">
                        <motion.span initial={{
                            opacity: 0,
                            y: 10
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} style={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "9px",
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.35)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "16px"
                        }}>
                            CHRONOLOGICAL AGENDA
                        </motion.span>
                        <motion.h2 initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "clamp(32px, 4vw, 48px)",
                            color: "#FFFFFF",
                            letterSpacing: "-0.03em",
                            margin: "0 0 12px 0"
                        }}>
                            The Programme.
                        </motion.h2>
                        <motion.p initial={{
                            opacity: 0,
                            y: 10
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} style={{
                            fontFamily: "Figtree",
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.45)",
                            margin: 0
                        }}>
                            A meticulously curated 4-hour executive experience.
                        </motion.p>
                    </div>
                    <motion.div initial={{
                        opacity: 0
                    }} whileInView={{
                        opacity: 1
                    }} viewport={{
                        once: true
                    }} className="flex items-center gap-3 text-white/40 text-sm font-light">
                        <ShieldCheck className="text-[#FF2D87] shrink-0" size={18} />
                        <span>Executive Access Protocol Observed</span>
                    </motion.div>
                </div>

                {/* Agenda rows + sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-8">
                        <div>
                            {AGENDA_ITEMS.map(item => <motion.div key={item.id} initial={{
                                opacity: 0,
                                y: 16
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.5
                            }} className="group" style={{
                                paddingTop: "20px",
                                paddingBottom: "20px",
                                paddingLeft: "8px",
                                paddingRight: "8px",
                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                                borderRadius: "8px",
                                transition: "background-color 200ms"
                            }} whileHover={{
                                backgroundColor: "rgba(255,255,255,0.02)"
                            }}>
                                {/* Mobile: stacked layout */}
                                <div className="flex flex-col sm:hidden gap-2">
                                    <div className="flex items-center gap-3">
                                        <div style={{
                                            width: "8px",
                                            height: "8px",
                                            borderRadius: "50%",
                                            backgroundColor: item.accentColor,
                                            flexShrink: 0
                                        }} />
                                        <span style={{
                                            fontFamily: "Figtree",
                                            fontWeight: 300,
                                            fontSize: "13px",
                                            color: "rgba(255,255,255,0.60)"
                                        }}>
                                            {item.time}
                                        </span>
                                        <div style={{
                                            backgroundColor: `${item.accentColor}26`,
                                            color: item.accentColor,
                                            fontFamily: "Figtree",
                                            fontWeight: 600,
                                            fontSize: "9px",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            padding: "3px 10px",
                                            borderRadius: "999px"
                                        }}>
                                            {item.type}
                                        </div>
                                    </div>
                                    <p style={{
                                        fontFamily: "Figtree",
                                        fontWeight: 500,
                                        fontSize: "16px",
                                        color: "#FFFFFF",
                                        margin: 0,
                                        lineHeight: 1.4
                                    }} className="group-hover:text-[#FF2D87]">
                                        {item.title}
                                    </p>
                                    <p style={{
                                        fontFamily: "Figtree",
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.40)",
                                        margin: 0,
                                        lineHeight: 1.6
                                    }}>
                                        {item.description}
                                    </p>
                                </div>

                                {/* Desktop: horizontal layout */}
                                <div className="hidden sm:flex items-start gap-5">
                                    <div style={{
                                        width: "112px",
                                        flexShrink: 0,
                                        fontFamily: "Figtree",
                                        fontWeight: 300,
                                        fontSize: "14px",
                                        color: "rgba(255,255,255,0.60)",
                                        lineHeight: 1.4,
                                        paddingTop: "2px"
                                    }}>
                                        {item.time}
                                    </div>
                                    <div style={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: item.accentColor,
                                        flexShrink: 0,
                                        marginTop: "6px"
                                    }} />
                                    <div style={{
                                        flexShrink: 0,
                                        backgroundColor: `${item.accentColor}26`,
                                        color: item.accentColor,
                                        fontFamily: "Figtree",
                                        fontWeight: 600,
                                        fontSize: "9px",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        padding: "4px 12px",
                                        borderRadius: "999px",
                                        minWidth: "100px",
                                        textAlign: "center",
                                        marginTop: "2px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        {item.type}
                                    </div>
                                    <div style={{
                                        flex: 1
                                    }}>
                                        <p style={{
                                            fontFamily: "Figtree",
                                            fontWeight: 500,
                                            fontSize: "17px",
                                            color: "#FFFFFF",
                                            margin: "0 0 4px 0",
                                            lineHeight: 1.4,
                                            transition: "color 200ms"
                                        }} className="group-hover:text-[#FF2D87]">
                                            {item.title}
                                        </p>
                                        <p style={{
                                            fontFamily: "Figtree",
                                            fontSize: "14px",
                                            color: "rgba(255,255,255,0.40)",
                                            margin: 0,
                                            lineHeight: 1.6
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>)}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <motion.div initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 lg:sticky lg:top-32">
                            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-3">
                                <Star className="text-[#FF2D87]" size={20} />
                                <span>Delegate Inclusions</span>
                            </h4>
                            <ul className="space-y-4">
                                {DELEGATE_BENEFITS.map(benefit => <li key={benefit.id} className="flex items-start gap-3 text-sm text-white/60">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D87] mt-1.5 shrink-0" />
                                    <span>{benefit.text}</span>
                                </li>)}
                            </ul>
                            <button className="w-full mt-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">
                                Download Full Brief
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* ── 6. CTA SECTION ── */}
        <section style={{
            backgroundColor: "#0A0A0F",
            paddingTop: "clamp(64px, 10vw, 128px)",
            paddingBottom: "clamp(64px, 10vw, 128px)",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Ghost 2027 */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
                pointerEvents: "none",
                fontFamily: "Figtree",
                fontWeight: 200,
                fontSize: "clamp(120px, 25vw, 380px)",
                color: "rgba(255,255,255,0.025)",
                letterSpacing: "-0.05em",
                lineHeight: 1,
                whiteSpace: "nowrap",
                userSelect: "none"
            }}>
                2027
            </div>
            {/* Pink glow */}
            <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle at top right, rgba(255,45,135,0.08) 0%, transparent 60%)",
                zIndex: 0,
                pointerEvents: "none"
            }} />

            {/* Content */}
            <div style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 clamp(20px, 6vw, 96px)",
                display: "flex",
                flexWrap: "wrap",
                gap: "clamp(48px, 6vw, 96px)",
                alignItems: "flex-start"
            }}>
                {/* LEFT */}
                <motion.div initial={{
                    opacity: 0,
                    x: -24
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7
                }} style={{
                    flex: "1 1 300px",
                    minWidth: 0
                }}>
                    <span style={{
                        fontFamily: "Figtree",
                        fontWeight: 600,
                        fontSize: "9px",
                        letterSpacing: "0.28em",
                        color: "rgba(255,255,255,0.35)",
                        textTransform: "uppercase",
                        display: "block"
                    }}>
                        SECURE YOUR SEAT
                    </span>
                    <h2 style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "clamp(32px, 5vw, 72px)",
                        color: "#FFFFFF",
                        letterSpacing: "-0.04em",
                        lineHeight: 0.95,
                        marginTop: "16px",
                        marginBottom: 0
                    }}>
                        <span>The most </span>
                        <span style={{
                            textDecoration: "underline",
                            textDecorationColor: "#FF2D87",
                            textDecorationThickness: "3px",
                            textUnderlineOffset: "6px"
                        }}>
                            powerful
                        </span>
                        <span> room in the country.</span>
                    </h2>
                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "16px",
                        color: "rgba(255,255,255,0.50)",
                        maxWidth: "448px",
                        marginTop: "28px",
                        lineHeight: 1.75
                    }}>
                        Strictly limited to 200 invitation-only delegates. This is not a general admission event. Every seat is allocated based on seniority and strategic alignment.
                    </p>

                    {/* Seat availability */}
                    <div style={{
                        marginTop: "36px",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "8px"
                        }}>
                            <span style={{
                                fontFamily: "Figtree",
                                fontWeight: 200,
                                fontSize: "clamp(40px, 5vw, 52px)",
                                color: "#FFFFFF",
                                lineHeight: 1
                            }}>47</span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.35)",
                                lineHeight: 1.3,
                                marginLeft: "8px"
                            }}>
                                Seats<br />Remaining
                            </span>
                        </div>
                        <div style={{
                            width: "1px",
                            height: "48px",
                            backgroundColor: "rgba(255,255,255,0.15)",
                            marginLeft: "8px",
                            marginRight: "8px"
                        }} />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px"
                        }}>
                            <div style={{
                                maxWidth: "160px",
                                height: "6px",
                                backgroundColor: "rgba(255,255,255,0.10)",
                                borderRadius: "999px",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    width: "76%",
                                    height: "100%",
                                    backgroundColor: "#FF2D87",
                                    borderRadius: "999px"
                                }} />
                            </div>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.25)",
                                fontStyle: "italic"
                            }}>
                                Registration closes 28 February 2027
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT — Form card */}
                <motion.div initial={{
                    opacity: 0,
                    x: 24
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7
                }} style={{
                    flex: "1 1 300px",
                    minWidth: 0
                }}>
                    <div style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "24px",
                        padding: "clamp(24px, 4vw, 40px)"
                    }}>
                        <h3 style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "clamp(20px, 2.5vw, 24px)",
                            color: "#FFFFFF",
                            margin: "0 0 8px 0"
                        }}>
                            Request Your Delegate Seat
                        </h3>
                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.40)",
                            margin: "0 0 28px 0"
                        }}>
                            Our team will review your application within 48 hours.
                        </p>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px"
                        }}>
                            {(["Full Name", "Email Address", "Organisation", "Role / Title"] as const).map((placeholder, idx) => <input key={`field-${idx}`} type={placeholder === "Email Address" ? "email" : "text"} placeholder={placeholder} style={{
                                width: "100%",
                                backgroundColor: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.10)",
                                borderRadius: "12px",
                                padding: "14px 18px",
                                fontFamily: "Figtree",
                                fontSize: "14px",
                                color: "#FFFFFF",
                                outline: "none",
                                boxSizing: "border-box",
                                transition: "border-color 200ms, background-color 200ms"
                            }} onFocus={e => {
                                (e.currentTarget as HTMLInputElement).style.borderColor = "#FF2D87";
                                (e.currentTarget as HTMLInputElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                            }} onBlur={e => {
                                (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.10)";
                                (e.currentTarget as HTMLInputElement).style.backgroundColor = "rgba(255,255,255,0.06)";
                            }} />)}
                        </div>

                        <button style={{
                            width: "100%",
                            marginTop: "16px",
                            backgroundColor: "#FF2D87",
                            color: "#FFFFFF",
                            borderRadius: "999px",
                            padding: "16px 32px",
                            fontFamily: "Figtree",
                            fontWeight: 500,
                            fontSize: "15px",
                            border: "none",
                            cursor: "pointer",
                            transition: "filter 200ms, transform 100ms",
                            boxSizing: "border-box"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.10)";
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                        }} onMouseDown={e => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.97)";
                        }} onMouseUp={e => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                        }}>
                            Submit Delegate Request
                        </button>

                        {/* Trust row */}
                        <div style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "16px",
                            flexWrap: "wrap"
                        }}>
                            {CTA_TRUST_ITEMS.map(item => <div key={item.id} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px"
                            }}>
                                <CheckCircle size={14} color="rgba(255,255,255,0.20)" />
                                <span style={{
                                    fontFamily: "Figtree",
                                    fontSize: "11px",
                                    color: "rgba(255,255,255,0.25)"
                                }}>
                                    {item.label}
                                </span>
                            </div>)}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>;
};