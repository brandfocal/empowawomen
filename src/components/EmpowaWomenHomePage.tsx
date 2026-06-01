import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { UniversalHero } from "./UniversalHero";
import { ArrowRight, Camera, Link, MessageSquare, Video, Users, Briefcase, Rocket, ChevronDown } from "lucide-react";


// ─── Types ────────────────────────────────────────────────────────────────────
interface FooterNavItem {
    id: string;
    label: string;
    href: string;
}
interface LogoItem {
    id: string;
    name: string;
    src: string;
}
interface NavLink {
    id: string;
    label: string;
    href: string;
    hasDropdown?: boolean;
}
interface PathwayCard {
    id: string;
    category: string;
    title: string;
    description: string;
    ctaLabel: string;
    accentColor: string;
    icon: React.ReactNode;
    path: string;
}
interface SectionLinkRow {
    id: string;
    label: string;
    links: FooterNavItem[];
}
interface FlagshipStat {
    id: string;
    value: string;
    label: string;
}
interface FlagshipMiniStat {
    id: string;
    value: string;
    label: string;
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
    hasDropdown: true
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
const LOGOS: LogoItem[] = [{
    id: "logo-1",
    name: "ABSA",
    src: "/absa-logo.png"
}, {
    id: "logo-2",
    name: "CCBSA",
    src: "/ccbsa.png"
}, {
    id: "logo-3",
    name: "Old Mutual",
    src: "/old_mutual_logo - Copy.png"
}, {
    id: "logo-4",
    name: "WRSETA",
    src: "/WRSETA.jpg"
}, {
    id: "logo-5",
    name: "EmpowaWomen",
    src: "/logo.png"
}];
const EXTENDED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];
const PATHWAY_CARDS: PathwayCard[] = [{
    id: "pathway-1",
    category: "CORPORATE PARTNERS & ESG",
    title: "Convert intentional diversity policies into measurable market execution, thought leadership, and brand authority.",
    description: "Aligned with leading corporate ESG frameworks, our platform positions your brand at the intersection of executive influence and commercial growth.",
    ctaLabel: "Explore Corporate Packages",
    accentColor: "#FF2D87",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    path: "/partnerships"
}, {
    id: "pathway-2",
    category: "EXECUTIVE DELEGATES & CXOs",
    title: "Join premium executive experiences, strategic networking platforms, masterclasses, and industry dialogues.",
    description: "Access Africa's most consequential leadership rooms, cross-sector alliances, and the conversations that shape economic destiny.",
    ctaLabel: "View 2026–2027 Summit Schedules",
    accentColor: "#00B4A6",
    icon: <Users className="w-6 h-6 text-white" />,
    path: "/summits-hub"
}, {
    id: "pathway-3",
    category: "NEXT-GEN LEADERS · AGES 18–34",
    title: "Access youth activation ecosystems bridging the opportunity divide via skills, networks, funding, and mentorship.",
    description: "EmpowaHER™ is Africa's definitive development track for young women ready to own their economic future.",
    ctaLabel: "Apply for EmpowaHER™",
    accentColor: "#D97706",
    icon: <Rocket className="w-6 h-6 text-white" />,
    path: "/academy"
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
const ABOUT_HEADLINE_WORDS = ["Positioning", "Women", "at", "the", "Center", "of", "the", "Future", "Economy."];
const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];
const FLAGSHIP_STATS: FlagshipStat[] = [{
    id: "fs-1",
    value: "2,400+",
    label: "Live Attendees"
}, {
    id: "fs-2",
    value: "3 Days",
    label: "Of Programming"
}, {
    id: "fs-3",
    value: "92%",
    label: "Return Rate"
}];
const FLAGSHIP_MINI_STATS: FlagshipMiniStat[] = [{
    id: "fms-1",
    value: "10,000+",
    label: "Delegates"
}, {
    id: "fms-2",
    value: "450+",
    label: "Speakers"
}];

// ─── Countdown Timer Helpers ──────────────────────────────────────────────────
const TARGET_DATE = new Date("2026-08-28T00:00:00").getTime();
function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, TARGET_DATE - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(diff % (1000 * 60) / 1000);
    return { days, hours, minutes, seconds };
}

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const units = [
        { id: "cd-days", value: timeLeft.days, label: "DAYS" },
        { id: "cd-hours", value: timeLeft.hours, label: "HRS" },
        { id: "cd-minutes", value: timeLeft.minutes, label: "MIN" },
        { id: "cd-seconds", value: timeLeft.seconds, label: "SEC" }
    ];
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(12px, 3vw, 16px)",
            paddingTop: "24px",
            paddingBottom: "24px",
            marginBottom: "8px"
        }}>
            {units.map((unit, idx) => (
                <div key={unit.id} style={{ display: "flex", alignItems: "flex-start", gap: "clamp(12px, 3vw, 16px)" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 200,
                            fontSize: "clamp(24px, 6vw, 56px)",
                            color: "#FFFFFF",
                            letterSpacing: "-0.04em",
                            lineHeight: 1
                        }}>
                            {String(unit.value).padStart(2, "0")}
                        </span>
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.20em",
                            color: "rgba(255,255,255,0.35)",
                            marginTop: "4px",
                            textTransform: "uppercase"
                        }}>
                            {unit.label}
                        </span>
                    </div>
                    {idx < units.length - 1 && (
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 200,
                            fontSize: "clamp(16px, 3vw, 40px)",
                            color: "rgba(255,255,255,0.20)",
                            lineHeight: 1,
                            marginTop: "2px",
                            flexShrink: 0
                        }}>
                            ·
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
    const HERO_LINES = [{
        id: "hl-1",
        words: ["Leading", "Fearlessly."]
    }, {
        id: "hl-2",
        words: ["Accelerating", "Growth."]
    }, {
        id: "hl-3",
        words: ["Transforming", "Economies."]
    }];
    // Words that get pink underline + pink period treatment
    const UNDERLINED_WORDS = new Set(["Fearlessly.", "Growth.", "Economies."]);
    const {
        scrollY
    } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
    const AVATAR_DATA = [{
        id: "av-1",
        src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80",
        alt: "Community member"
    }, {
        id: "av-2",
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&q=80",
        alt: "Community member"
    }, {
        id: "av-3",
        src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80",
        alt: "Community member"
    }, {
        id: "av-4",
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
        alt: "Community member"
    }, {
        id: "av-5",
        src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=80&q=80",
        alt: "Community member"
    }, {
        id: "av-6",
        src: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=80&q=80",
        alt: "Community member"
    }];
    let wordIndex = 0;
    return <section id="home" style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        backgroundColor: "#0A0A0F",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "68px",
        paddingBottom: "40px"
    }}>
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

        <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none"
        }}>
            <motion.div style={{
                position: "absolute",
                inset: 0
            }} initial={{
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
                    <img
                        src="/features-5.jpg"
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center 30%",
                            opacity: 0.55
                        }}
                    />
                </motion.div>
            </motion.div>
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
            }} />
        </div>

        <div style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1400px",
            paddingLeft: "clamp(24px, 3.75vw, 36px)",
            paddingRight: "clamp(24px, 3.75vw, 36px)",
            paddingTop: "80px",
            paddingBottom: "32px",
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
                <div style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "32px"
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        marginBottom: "16px"
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
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.60)",
                            textTransform: "uppercase"
                        }}>
                            AFRICA'S WOMEN-LED ECONOMIC ECOSYSTEM
                        </span>
                    </motion.div>

                    {/* Hero headline — 3 lines, word-by-word stagger */}
                    <motion.h1 initial={{
                        opacity: 0
                    }} animate={{
                        opacity: 1
                    }} transition={{
                        duration: 0.5
                    }} style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "clamp(46px, 7vw, 84px)",
                        lineHeight: 1.0,
                        letterSpacing: "-0.04em",
                        color: "#FFFFFF",
                        textAlign: "center",
                        maxWidth: "900px",
                        margin: "0 auto 16px auto"
                    }}>
                        {HERO_LINES.map(line => <span key={line.id} style={{
                            display: "block"
                        }}>
                            {line.words.map(word => {
                                const currentIndex = wordIndex++;
                                const isUnderlined = UNDERLINED_WORDS.has(word);
                                const wordWithoutPeriod = isUnderlined ? word.slice(0, -1) : word;
                                return <motion.span key={`hero-word-${currentIndex}`} style={{
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
                                    delay: 0.4 + currentIndex * 0.1,
                                    ease: [0.21, 0.47, 0.32, 0.98]
                                }}>
                                    {isUnderlined ? <span style={{
                                        textDecoration: "underline",
                                        textDecorationColor: "#FF2D87",
                                        textDecorationThickness: "3px",
                                        textUnderlineOffset: "6px",
                                        color: "#FFFFFF"
                                    }}>{wordWithoutPeriod}</span> : word}
                                    {isUnderlined && <span style={{
                                        color: "#FF2D87",
                                        textDecoration: "none"
                                    }}>.</span>}
                                </motion.span>;
                            })}
                        </span>)}
                    </motion.h1>

                    {/* Slogan */}
                    <motion.div initial={{
                        opacity: 0,
                        y: 12
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.7,
                        delay: 1.1,
                        ease: "easeOut"
                    }} style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px"
                    }}>
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 400,
                            fontSize: "13px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.40)"
                        }}>
                            Ignite Passion
                        </span>
                        <span style={{
                            display: "inline-block",
                            width: "1px",
                            height: "14px",
                            backgroundColor: "rgba(255,255,255,0.20)",
                            margin: "0 12px",
                            verticalAlign: "middle"
                        }} />
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 400,
                            fontSize: "13px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.40)"
                        }}>
                            Foster Growth
                        </span>
                        <span style={{
                            display: "inline-block",
                            width: "1px",
                            height: "14px",
                            backgroundColor: "rgba(255,255,255,0.20)",
                            margin: "0 12px",
                            verticalAlign: "middle"
                        }} />
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 400,
                            fontSize: "13px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.40)"
                        }}>
                            Drive Change
                        </span>
                    </motion.div>

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
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.50)",
                        maxWidth: "620px",
                        margin: "0 auto 24px auto",
                        textAlign: "center",
                        lineHeight: 1.75
                    }}>
                        EmpowaWomen™ is a high-impact leadership and economic empowerment ecosystem accelerating the rise of women shaping Africa's future industries, institutions, capital flows, and global influence.
                    </motion.p>

                    {/* Countdown timer */}
                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.8,
                        delay: 1.3
                    }}>
                        <CountdownTimer />
                    </motion.div>

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
                    }} style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px"
                    }}>
                        <RouterLink to="/summit" style={{
                            fontFamily: "Figtree",
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "#FFFFFF",
                            backgroundColor: "#FF2D87",
                            height: "50px",
                            padding: "0 32px",
                            display: "inline-flex",
                            alignItems: "center",
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                            borderRadius: "999px",
                            transition: "all 200ms ease-out",
                            boxShadow: "0 0 32px rgba(255,45,135,0.25)"
                        }} onMouseEnter={e => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.filter = "brightness(1.1)";
                            el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
                        }} onMouseLeave={e => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.filter = "brightness(1)";
                            el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
                        }}>
                            Secure Summit Delegate Pass
                        </RouterLink>
                        <RouterLink to="/partnerships" style={{
                            fontFamily: "Figtree",
                            fontSize: "15px",
                            fontWeight: 400,
                            color: "#FFFFFF",
                            backgroundColor: "transparent",
                            height: "50px",
                            padding: "0 32px",
                            display: "inline-flex",
                            alignItems: "center",
                            textDecoration: "none",
                            border: "1px solid rgba(255,255,255,0.20)",
                            letterSpacing: "0.02em",
                            borderRadius: "999px",
                            transition: "all 200ms ease-out"
                        }} onMouseEnter={e => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.backgroundColor = "rgba(255,255,255,0.08)";
                            el.style.borderColor = "rgba(255,255,255,0.40)";
                        }} onMouseLeave={e => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.backgroundColor = "transparent";
                            el.style.borderColor = "rgba(255,255,255,0.20)";
                        }}>
                            Partner With Us
                        </RouterLink>
                    </motion.div>

                    {/* Avatar row */}
                    <motion.div initial={{
                        opacity: 0,
                        y: 12
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.7,
                        delay: 1.6,
                        ease: "easeOut"
                    }} style={{
                        marginTop: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            {AVATAR_DATA.map((av, idx) => <div key={av.id} style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                border: "2px solid #0A0A0F",
                                overflow: "hidden",
                                marginLeft: idx === 0 ? 0 : "-10px",
                                flexShrink: 0
                            }}>
                                <img src={av.src} alt={av.alt} style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }} />
                            </div>)}
                        </div>
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.50)"
                        }}>
                            <span>Join </span>
                            <span style={{
                                fontWeight: 600,
                                color: "rgba(255,255,255,0.80)"
                            }}>10,000+ women</span>
                            <span> already registered</span>
                        </span>
                    </motion.div>
                </div>

                {/* Logo marquee */}
                <motion.div initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1
                }} transition={{
                    duration: 1,
                    delay: 1.8
                }} style={{
                    width: "100%",
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
                        gap: "80px",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        width: "max-content"
                    }}>
                        {EXTENDED_LOGOS.map((logo, i) => <div key={`logo-${logo.id}-${i}`} style={{
                            flexShrink: 0,
                            height: "72px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <img
                                src={logo.src}
                                alt={logo.name}
                                style={{
                                    height: "32px",
                                    width: "auto",
                                    maxWidth: "130px",
                                    objectFit: "contain",
                                    opacity: 0.3,
                                    filter: "grayscale(100%)",
                                    transition: "opacity 200ms ease-out, filter 200ms ease-out",
                                    cursor: "default"
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                                    (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                                    (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
                                }}
                            />
                        </div>)}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>

        <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
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
      `}</style>
    </section>;
};

// ─── About / Mission Section ──────────────────────────────────────────────────
const AboutSection = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    useInView(ref, {
        once: true,
        margin: "-80px"
    });
    const BRAND_PILLARS = [{
        id: "pillar-capital",
        label: "CAPITAL",
        accentColor: "#FF2D87",
        text: "Mobilizing enterprise-level funding and economic infrastructure for women-led ventures."
    }, {
        id: "pillar-influence",
        label: "INFLUENCE",
        accentColor: "#00B4A6",
        text: "Connecting leaders to the networks, stages, and rooms where decisions are made."
    }, {
        id: "pillar-transformation",
        label: "TRANSFORMATION",
        accentColor: "#D97706",
        text: "Creating measurable structural change across industries, governments, and communities."
    }];
    return <section id="about" ref={ref} style={{
        width: "100%",
        backgroundColor: "#F7F6F2",
        paddingTop: 0,
        paddingBottom: "128px",
        overflow: "hidden",
        position: "relative",
        zIndex: 10,
        marginTop: "-72px",
        borderRadius: "40px 40px 0 0",
        boxShadow: "0 -24px 64px rgba(0, 0, 0, 0.55)"
    }}>
        <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.35,
            backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
        }} />

        {/* Full-width interactive banner linked to the summit page */}
        <RouterLink 
            to="/summit"
            style={{
                width: "100%",
                display: "block",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                zIndex: 2,
                marginBottom: "64px"
            }}
        >
            <img 
                src="/empowawomen-banner.jpg" 
                alt="EmpowaWomen Banner" 
                style={{ 
                    width: "100%", 
                    height: "auto", 
                    display: "block",
                    transition: "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.025)";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                }}
            />
            {/* Subtle hover overlay for interactivity */}
            <div 
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(10,10,15,0.1), rgba(10,10,15,0.3))",
                    opacity: 0,
                    transition: "opacity 300ms",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.opacity = "1";
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.opacity = "0";
                }}
            >
                <span style={{
                    backgroundColor: "#FF2D87",
                    color: "#FFFFFF",
                    fontFamily: "Figtree",
                    fontSize: "15px",
                    fontWeight: 500,
                    padding: "12px 28px",
                    borderRadius: "999px",
                    boxShadow: "0 8px 32px rgba(255,45,135,0.35)",
                    letterSpacing: "0.02em"
                }}>
                    Register For the Summit
                </span>
            </div>
        </RouterLink>

        <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "0",
            position: "relative",
            zIndex: 1
        }} className="about-grid">
            {/* Left Column */}
            <div style={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                minHeight: "374px",
                gap: "0"
            }} className="about-left-col">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    <span style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#FF2D87",
                        display: "inline-block",
                        flexShrink: 0
                    }} />
                    <span style={{
                        fontFamily: "Figtree",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#0A0A0F"
                    }}>
                        THE MISSION
                    </span>
                </div>

                <div style={{
                    position: "relative",
                    width: "260px",
                    height: "340px",
                    flexShrink: 0,
                    marginTop: "40px"
                }}>
                    <motion.div initial={{
                        opacity: 0,
                        x: -20
                    }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.9,
                        ease: "easeOut"
                    }} style={{
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}>
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=90" alt="EmpowaWomen delegate in leadership" style={{
                            width: "260px",
                            height: "340px",
                            objectFit: "cover",
                            objectPosition: "center top",
                            borderRadius: "20px"
                        }} />
                    </motion.div>
                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.7,
                        delay: 0.3,
                        ease: "easeOut"
                    }} style={{
                        position: "absolute",
                        bottom: "-24px",
                        right: "-24px"
                    }}>
                        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=85" alt="EmpowaWomen community member" style={{
                            width: "140px",
                            height: "160px",
                            objectFit: "cover",
                            objectPosition: "center",
                            borderRadius: "14px",
                            border: "4px solid #F7F6F2",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
                        }} />
                    </motion.div>
                </div>
            </div>

            {/* Right Column */}
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "48px"
            }}>
                <div style={{
                    maxWidth: "805px"
                }}>
                    <h2 style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "clamp(36px, 4.5vw, 52px)",
                        color: "#0A0A0F",
                        lineHeight: 1.15,
                        letterSpacing: "-0.03em",
                        margin: 0
                    }}>
                        {ABOUT_HEADLINE_WORDS.map((word, index) => <motion.span key={`about-word-${index}`} initial={{
                            opacity: 0,
                            filter: "blur(10px)",
                            y: 10
                        }} whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                            y: 0
                        }} viewport={{
                            once: true
                        }} transition={{
                            duration: 0.5,
                            delay: index * 0.05,
                            ease: "easeOut"
                        }} style={{
                            display: "inline-block",
                            marginRight: "0.3em"
                        }}>
                            {word === "Center" ? <span style={{
                                color: "#FF2D87"
                            }}>{word}</span> : word}
                        </motion.span>)}
                    </h2>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0",
                    flexWrap: "wrap"
                }}>
                    <div style={{
                        width: "260px",
                        flexShrink: 0
                    }}>
                        <div style={{
                            lineHeight: 0.8,
                            letterSpacing: "-0.04em"
                        }}>
                            <span style={{
                                fontFamily: "Figtree",
                                fontWeight: 200,
                                fontSize: "clamp(80px, 12vw, 160px)",
                                color: "#0A0A0F",
                                lineHeight: 0.8
                            }}>
                                6
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontWeight: 200,
                                fontSize: "clamp(40px, 6vw, 80px)",
                                color: "#FF2D87",
                                lineHeight: 0.8
                            }}>
                                +
                            </span>
                        </div>
                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "15px",
                            color: "#64748b",
                            marginTop: "12px",
                            lineHeight: 1.5,
                            maxWidth: "200px"
                        }}>
                            Years of Structural Change
                        </p>
                    </div>

                    <div style={{
                        width: "1px",
                        alignSelf: "stretch",
                        backgroundColor: "rgba(0,0,0,0.08)",
                        margin: "0 48px",
                        flexShrink: 0
                    }} className="about-divider" />

                    <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                        minWidth: "240px"
                    }}>
                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "16px",
                            color: "#64748b",
                            lineHeight: 1.75,
                            maxWidth: "440px",
                            margin: 0
                        }}>
                            We exist to position women at the centre of economic transformation by unlocking leadership acceleration, strategic partnerships, investment access, innovation, and scalable commercial growth across Africa. More than a summit platform, EmpowaWomen™ is a strategic ecosystem where women build influence, unlock opportunities, scale enterprises, shape policy, strengthen industries, and accelerate measurable economic participation.
                        </p>

                        <motion.div whileHover={{
                            scale: 1.02
                        }} whileTap={{
                            scale: 0.98
                        }} style={{
                            width: "fit-content"
                        }}>
                            <RouterLink to="/about" style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                backgroundColor: "#0A0A0F",
                                color: "#FFFFFF",
                                borderRadius: "999px",
                                height: "50px",
                                padding: "0 32px",
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                fontWeight: 500,
                                letterSpacing: "0.02em",
                                textDecoration: "none",
                                transition: "all 200ms ease-out"
                            }}>
                                <span>Our Story</span>
                                <ArrowRight size={16} />
                            </RouterLink>
                        </motion.div>
                    </div>

                    <div style={{
                        marginTop: "48px",
                        borderTop: "1px solid rgba(0,0,0,0.07)",
                        display: "flex",
                        flexDirection: "row",
                        gap: "0",
                        flexWrap: "wrap"
                    }}>
                        {BRAND_PILLARS.map((pillar, index) => <React.Fragment key={pillar.id}>
                            <motion.div initial={{
                                opacity: 0,
                                y: 16
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }} style={{
                                flex: 1,
                                minWidth: "160px",
                                paddingTop: "32px",
                                paddingBottom: "32px",
                                paddingLeft: index === 0 ? "0" : "40px",
                                paddingRight: "40px"
                            }}>
                                <span style={{
                                    fontFamily: "Figtree",
                                    fontSize: "9px",
                                    fontWeight: 600,
                                    letterSpacing: "0.25em",
                                    color: pillar.accentColor,
                                    textTransform: "uppercase" as const,
                                    display: "block"
                                }}>
                                    {pillar.label}
                                </span>
                                <p style={{
                                    fontFamily: "Figtree",
                                    fontSize: "14px",
                                    color: "#64748b",
                                    lineHeight: 1.65,
                                    marginTop: "8px",
                                    marginBottom: 0,
                                    maxWidth: "200px"
                                }}>
                                    {pillar.text}
                                </p>
                            </motion.div>
                            {index < BRAND_PILLARS.length - 1 && <div style={{
                                width: "1px",
                                backgroundColor: "rgba(0,0,0,0.07)",
                                alignSelf: "stretch",
                                marginTop: "32px",
                                marginBottom: "32px",
                                flexShrink: 0
                            }} />}
                        </React.Fragment>)}
                    </div>
                </div>
            </div>
        </div>

        <style>{`
        @media (max-width: 900px) {
          .about-grid { flex-direction: column !important; }
          .about-left-col { width: 100% !important; min-height: auto !important; flex-direction: row !important; align-items: center !important; justify-content: space-between !important; }
          .about-divider { display: none !important; }
        }
      `}</style>
    </section>;
};

// ─── Partner Strip ────────────────────────────────────────────────────────────
const PartnerStrip = () => {
    const doubled = [...LOGOS, ...LOGOS];
    return <section id="partners" style={{
        backgroundColor: "#0A0A0F",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "40px",
        paddingBottom: "40px",
        overflow: "hidden"
    }}>
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <div style={{
                paddingLeft: "clamp(24px, 6vw, 96px)",
                paddingRight: "48px",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0
            }}>
                <p style={{
                    fontFamily: "Figtree",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.20)",
                    fontStyle: "italic",
                    whiteSpace: "nowrap",
                    margin: 0
                }}>
                    Trusted by
                </p>
            </div>
            <div style={{
                flex: 1,
                overflow: "hidden",
                maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "max-content",
                    animation: "marqueeLogos 35s linear infinite"
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
                }}>
                    {doubled.map((logo, i) => <div key={`logo-${logo.id}-${i}`} style={{
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                        marginRight: "48px"
                    }}>
                        <img
                            src={logo.src}
                            alt={logo.name}
                            style={{
                                height: "30px",
                                width: "auto",
                                maxWidth: "120px",
                                objectFit: "contain",
                                opacity: 0.3,
                                filter: "grayscale(100%)",
                                transition: "opacity 200ms ease-out, filter 200ms ease-out",
                                cursor: "default"
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLImageElement).style.opacity = "0.3";
                                (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%)";
                            }}
                        />
                    </div>)}
                </div>
            </div>
            <div style={{
                paddingLeft: "48px",
                paddingRight: "clamp(24px, 6vw, 96px)",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0
            }}>
                <p style={{
                    fontFamily: "Figtree",
                    fontSize: "9px",
                    fontWeight: 400,
                    letterSpacing: "0.3em",
                    color: "rgba(255,255,255,0.15)",
                    whiteSpace: "nowrap",
                    margin: 0,
                    textTransform: "uppercase"
                }}>
                    Est. 2018
                </p>
            </div>
        </div>
        <style>{`
        @keyframes marqueeLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>;
};

// ─── Pathways Section ─────────────────────────────────────────────────────────
const PathwaysSection = () => {
    return <section id="summits" style={{
        position: "relative",
        backgroundColor: "#0A0A0F",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        overflow: "visible",
        minHeight: "100vh"
    }}>
        <div style={{
            maxWidth: "1400px",
            margin: "0 auto"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                gap: "5vw",
                alignItems: "flex-start"
            }} className="pathways-layout">
                <div style={{
                    width: "42%",
                    flexShrink: 0,
                    position: "sticky",
                    top: "120px",
                    alignSelf: "flex-start",
                    height: "fit-content"
                }} className="pathways-left">
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "24px",
                        maxWidth: "480px"
                    }}>
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: "999px",
                            padding: "6px 12px"
                        }}>
                            <div style={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                backgroundColor: "#FF2D87",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                            }}>
                                <span style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    backgroundColor: "white",
                                    display: "inline-block"
                                }} />
                            </div>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "10px",
                                fontWeight: 600,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,1)"
                            }}>
                                Your Pathway
                            </span>
                        </div>

                        <h2 style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "clamp(36px, 4.5vw, 60px)",
                            color: "#FFFFFF",
                            lineHeight: 1.0,
                            letterSpacing: "-0.03em",
                            margin: 0
                        }}>
                            Built for every stage of leadership.
                        </h2>

                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "16px",
                            color: "rgba(255,255,255,0.45)",
                            lineHeight: 1.75,
                            margin: 0
                        }}>
                            From the C-suite to the starting line - EmpowaWomen meets you exactly where you are, and takes you further than you imagined.
                        </p>

                        <RouterLink to="/summits-hub" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            backgroundColor: "#FF2D87",
                            color: "#FFFFFF",
                            borderRadius: "999px",
                            padding: "12px 28px",
                            fontFamily: "Figtree",
                            fontSize: "13px",
                            fontWeight: 500,
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                            transition: "filter 200ms ease-out"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
                        }}>
                            <span>Explore All Pathways</span>
                            <ArrowRight size={16} />
                        </RouterLink>
                    </div>
                </div>

                <div style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    paddingBottom: "80px",
                    overflow: "visible"
                }}>
                    {PATHWAY_CARDS.map((card, index) => {
                        const cardBg = index === 0 ? "#1a0812" : index === 1 ? "#041614" : "#120e04";
                        const cardBorder = index === 0 ? "1px solid rgba(255,45,135,0.25)" : index === 1 ? "1px solid rgba(0,180,166,0.25)" : "1px solid rgba(217,119,6,0.25)";
                        const cardHoverBg = index === 0 ? "#220a17" : index === 1 ? "#061e1b" : "#1a1205";
                        const accentBarColor = index === 0 ? "#FF2D87" : index === 1 ? "#00B4A6" : "#D97706";
                        return <div key={card.id} style={{
                            position: "sticky",
                            top: `${120 + index * 16}px`,
                            zIndex: index + 1
                        }}>
                            <motion.div initial={{
                                opacity: 0,
                                y: 20
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true,
                                margin: "-50px"
                            }} transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }} style={{
                                backgroundColor: cardBg,
                                border: cardBorder,
                                borderRadius: "32px",
                                padding: "40px",
                                transition: "background-color 300ms, transform 300ms",
                                cursor: "default",
                                position: "relative",
                                overflow: "hidden"
                            }} whileHover={{
                                backgroundColor: cardHoverBg,
                                y: -4
                            }}>
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "3px",
                                    borderRadius: "32px 32px 0 0",
                                    backgroundColor: accentBarColor,
                                    pointerEvents: "none"
                                }} />
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0",
                                    width: "100%"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px"
                                    }}>
                                        <div style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            backgroundColor: card.accentColor,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        }}>
                                            {card.icon}
                                        </div>
                                        <span style={{
                                            fontFamily: "Figtree",
                                            fontSize: "9px",
                                            fontWeight: 600,
                                            letterSpacing: "0.28em",
                                            color: "rgba(255,255,255,0.35)",
                                            textTransform: "uppercase"
                                        }}>
                                            {card.category}
                                        </span>
                                    </div>
                                    <h3 style={{
                                        fontFamily: "Figtree",
                                        fontWeight: 300,
                                        fontSize: "26px",
                                        color: "#FFFFFF",
                                        marginTop: "20px",
                                        marginBottom: 0,
                                        lineHeight: 1.15,
                                        letterSpacing: "-0.01em"
                                    }}>
                                        {card.title}
                                    </h3>
                                    <p style={{
                                        fontFamily: "Figtree",
                                        fontSize: "15px",
                                        color: "rgba(255,255,255,0.45)",
                                        marginTop: "12px",
                                        marginBottom: 0,
                                        lineHeight: 1.7,
                                        maxWidth: "480px"
                                    }}>
                                        {card.description}
                                    </p>
                                    <RouterLink to={card.path} style={{
                                        marginTop: "24px",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        fontFamily: "Figtree",
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: card.accentColor,
                                        textDecoration: "none",
                                        letterSpacing: "0.02em",
                                        transition: "opacity 150ms ease-out",
                                        width: "fit-content"
                                    }} onMouseEnter={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75";
                                    }} onMouseLeave={e => {
                                        (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                                    }}>
                                        <span>{card.ctaLabel}</span>
                                        <ArrowRight size={14} />
                                    </RouterLink>
                                </div>
                            </motion.div>
                        </div>;
                    })}
                </div>
            </div>
        </div>
        <style>{`
        @media (max-width: 900px) {
          .pathways-layout { flex-direction: column !important; gap: 48px !important; }
          .pathways-left { width: 100% !important; position: static !important; }
        }
      `}</style>
    </section>;
};

// ─── Core Pillars Carousel Section ────────────────────────────────────────────
const PILLAR_CARDS = [{
    id: "pc-1",
    number: "01",
    label: "Creative Economy",
    image: "/creative_economy.png"
}, {
    id: "pc-2",
    number: "02",
    label: "Green Economy & Mining",
    image: "/green_economy.png"
}, {
    id: "pc-3",
    number: "03",
    label: "Beauty & Fashion",
    image: "/beauty_fashion.png"
}, {
    id: "pc-4",
    number: "04",
    label: "Entrepreneurship & Funding",
    image: "/entrepreneurship_funding.png"
}, {
    id: "pc-5",
    number: "05",
    label: "Leadership & Governance",
    image: "/leadership_governance.png"
}, {
    id: "pc-6",
    number: "06",
    label: "Communications & Media",
    image: "/communications_media.png"
}, {
    id: "pc-7",
    number: "07",
    label: "Wholesale & Manufacturing",
    image: "/wholesale_manufacturing.png"
}, {
    id: "pc-8",
    number: "08",
    label: "Agriculture & Food Security",
    image: "/agriculture_food.png"
}];
const TRIPLED_PILLAR_CARDS = [...PILLAR_CARDS, ...PILLAR_CARDS, ...PILLAR_CARDS];
const CorePillarsSection = () => {
    return <section id="pillars" style={{
        backgroundColor: "#F7F6F2",
        paddingTop: "96px",
        paddingBottom: "96px",
        overflow: "hidden",
        position: "relative"
    }}>
        <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.35,
            backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
        }} />

        <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
            position: "relative",
            zIndex: 1
        }}>
            {/* Section header */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "48px",
                flexWrap: "wrap"
            }}>
                <div style={{
                    maxWidth: "520px"
                }}>
                    <span style={{
                        fontFamily: "Figtree",
                        fontWeight: 600,
                        fontSize: "9px",
                        letterSpacing: "0.28em",
                        color: "#64748b",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "16px"
                    }}>
                        GROWTH PILLARS
                    </span>
                    <h2 style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "clamp(32px, 4vw, 52px)",
                        color: "#0A0A0F",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        margin: 0
                    }}>
                        The Future Economy Growth Pillars™.
                    </h2>
                </div>

                <div style={{
                    maxWidth: "360px",
                    paddingTop: "40px"
                }}>
                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        color: "#64748b",
                        lineHeight: 1.7,
                        margin: 0
                    }}>
                        Africa's premier industry platforms shaping the future of leadership, innovation, influence, and economic growth.
                    </p>
                </div>
            </div>
        </div>

        {/* Image card carousel — full width, CSS marquee with native hover pause */}
        <div className="pillar-carousel" style={{
            marginTop: "48px",
            overflow: "hidden",
            position: "relative",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
        }}>
            <div className="pillar-track" style={{
                display: "flex",
                gap: "20px",
                width: "max-content",
                animation: "pillarMarquee 40s linear infinite"
            }}>
                {TRIPLED_PILLAR_CARDS.map((card, i) => <PillarCard key={`${card.id}-${i}`} card={card} />)}
            </div>
        </div>

        {/* CTA link */}
        <div style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 1
        }}>
            <RouterLink to="/summits-hub" style={{
                fontFamily: "Figtree",
                fontWeight: 500,
                fontSize: "14px",
                color: "#FF2D87",
                textDecoration: "none",
                transition: "opacity 200ms ease-out",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
            }} onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.70";
            }} onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}>
                <span>Explore All Growth Pillars →</span>
            </RouterLink>
        </div>

        <style>{`
        @keyframes pillarMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .pillar-carousel:hover .pillar-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>;
};
const PillarCard = ({
    card
}: {
    card: typeof PILLAR_CARDS[0];
}) => {
    const [hovered, setHovered] = React.useState(false);
    return <motion.div onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)} animate={{
        scale: hovered ? 1.03 : 1,
        boxShadow: hovered ? "0 24px 48px rgba(0,0,0,0.18)" : "0 0 0 rgba(0,0,0,0)"
    }} transition={{
        duration: 0.2,
        ease: "easeOut"
    }} style={{
        width: "280px",
        height: "360px",
        flexShrink: 0,
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer"
    }}>
        <img src={card.image} alt={card.label} style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }} />
        <div style={{
            position: "absolute",
            inset: 0,
            background: hovered ? "linear-gradient(to bottom, rgba(10,10,15,0.05) 0%, rgba(10,10,15,0.72) 100%)" : "linear-gradient(to bottom, rgba(10,10,15,0.15) 0%, rgba(10,10,15,0.85) 100%)",
            transition: "background 200ms ease-out"
        }} />
        <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "24px"
        }}>
            <span style={{
                fontFamily: "Figtree",
                fontWeight: 200,
                fontSize: "48px",
                color: "rgba(255,255,255,0.15)",
                lineHeight: 1,
                display: "block"
            }}>
                {card.number}
            </span>
            <span style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "18px",
                color: "#FFFFFF",
                lineHeight: 1.2,
                marginTop: "4px",
                display: "block"
            }}>
                {card.label}
            </span>
            <div style={{
                marginTop: "12px"
            }}>
                <ArrowRight size={14} color={hovered ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.40)"} style={{
                    transition: "color 200ms ease-out"
                }} />
            </div>
        </div>
    </motion.div>;
};

// ─── Video Section ────────────────────────────────────────────────────────────
const VideoSection = () => {
    const playlist = ["s_RGYF3-fO4", "w5p9v_9Htes", "YdrNRk5IDiM"];
    const [currentVideoId, setCurrentVideoId] = React.useState(playlist[0]);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isHoveringPlay, setIsHoveringPlay] = React.useState(false);
    const VIDEO_HEADLINE_WORDS = ["See", "what", "happened", "last", "year."];
    const STATS_DATA = [{
        id: "vs-1",
        value: "10,000+",
        label: "Delegates Connected"
    }, {
        id: "vs-2",
        value: "2,400+",
        label: "Live Attendees"
    }, {
        id: "vs-3",
        value: "3 Days",
        label: "Of Programming"
    }, {
        id: "vs-4",
        value: "92%",
        label: "Delegate Return Rate"
    }];
    return <section style={{
        backgroundColor: "#F7F6F2",
        paddingTop: "clamp(80px,10vw,140px)",
        paddingBottom: "clamp(80px,10vw,140px)",
        position: "relative",
        overflow: "hidden"
    }}>
        <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.4,
            backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
        }} />

        <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(24px,6vw,96px)",
            paddingRight: "clamp(24px,6vw,96px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "clamp(40px,5vw,64px)",
            flexWrap: "wrap",
            gap: "40px",
            position: "relative",
            zIndex: 1
        }}>
            <div style={{
                maxWidth: "52%"
            }}>
                <div style={{
                    width: "64px",
                    height: "3px",
                    backgroundColor: "#00B4A6"
                }} />
                <div style={{
                    width: "24px",
                    height: "1px",
                    backgroundColor: "rgba(0,180,166,0.3)",
                    marginTop: "4px"
                }} />
                <span style={{
                    fontFamily: "Figtree",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.28em",
                    color: "#64748b",
                    textTransform: "uppercase",
                    display: "block",
                    marginTop: "32px"
                }}>
                    IN THE ROOM
                </span>
                <h2 style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(40px,6vw,80px)",
                    color: "#0A0A0F",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.95,
                    margin: "16px 0 0 0"
                }}>
                    {VIDEO_HEADLINE_WORDS.map((word, i) => <motion.span key={`vsw-${i}`} initial={{
                        opacity: 0,
                        filter: "blur(10px)",
                        y: 16
                    }} whileInView={{
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.7,
                        delay: i * 0.05,
                        ease: "easeOut"
                    }} style={{
                        display: "inline-block",
                        marginRight: "0.25em"
                    }}>
                        {word === "happened" ? <span style={{
                            color: "#00B4A6"
                        }}>{word}</span> : word}
                    </motion.span>)}
                </h2>
            </div>

            <div style={{
                maxWidth: "38%",
                alignSelf: "flex-end",
                display: "flex",
                flexDirection: "column",
                gap: "0"
            }} className="video-header-right">
                <p style={{
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    color: "#64748b",
                    lineHeight: 1.75,
                    margin: 0
                }}>
                    Packed stages. Historic deals. Defining conversations. The EmpowaWomen Annual Leadership Summit - captured in two minutes.
                </p>
                <a href="#" style={{
                    marginTop: "24px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "Figtree",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "rgba(10,10,15,0.55)",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    transition: "color 150ms ease-out"
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(10,10,15,0.9)";
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(10,10,15,0.55)";
                }} onClick={e => {
                    e.preventDefault();
                    document.getElementById("home-video-player")?.scrollIntoView({ behavior: "smooth" });
                }}>
                    <span>Watch the full reel</span>
                    <ArrowRight size={14} />
                </a>
            </div>
        </div>

        <motion.div initial={{
            opacity: 0,
            y: 32
        }} whileInView={{
            opacity: 1,
            y: 0
        }} viewport={{
            once: true
        }} transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut"
        }} style={{
            maxWidth: "1100px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(24px,6vw,96px)",
            paddingRight: "clamp(24px,6vw,96px)",
            position: "relative",
            zIndex: 1
        }}>
            <div id="home-video-player" style={{
                aspectRatio: "16/9",
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.15)"
            }}>
                {isPlaying ? <iframe src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} title="Summit highlight reel" allow="autoplay; fullscreen" style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                }} /> : <div style={{
                    position: "absolute",
                    inset: 0
                }}>
                    <img src={`https://img.youtube.com/vi/${currentVideoId}/maxresdefault.jpg`} alt="Summit highlight reel" style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }} />
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,15,0.80) 100%)"
                    }} />
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to right, rgba(10,10,15,0.25) 0%, transparent 30%)"
                    }} />
                    <div style={{
                        position: "absolute",
                        top: "24px",
                        left: "24px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "rgba(10,10,15,0.6)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        padding: "6px 12px",
                        borderRadius: "999px"
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
                            fontWeight: 600,
                            fontSize: "9px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.50)"
                        }}>
                            SUMMIT 2024 · HIGHLIGHT REEL
                        </span>
                    </div>
                    <div style={{
                        position: "absolute",
                        bottom: "24px",
                        right: "24px",
                        fontFamily: "Figtree",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.40)"
                    }}>
                        2:14
                    </div>
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }} onClick={() => setIsPlaying(true)} onMouseEnter={() => setIsHoveringPlay(true)} onMouseLeave={() => setIsHoveringPlay(false)}>
                        <div style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            border: isHoveringPlay ? "2px solid rgba(255,255,255,0.40)" : "2px solid rgba(255,255,255,0.15)",
                            backgroundColor: "rgba(0,0,0,0.20)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 200ms ease-out",
                            transform: isHoveringPlay ? "scale(1.05)" : "scale(1)",
                            cursor: "pointer"
                        }}>
                            <div style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                backgroundColor: "#FF2D87",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                                    <path d="M3 2L13 8L3 14V2Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </motion.div>

        {/* Video Playlist */}
        <div style={{
            maxWidth: "1100px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "clamp(24px,6vw,96px)",
            paddingRight: "clamp(24px,6vw,96px)",
            marginTop: "24px",
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollbarWidth: "none",
            zIndex: 1,
            position: "relative"
        }}>
            {playlist.map((vid) => (
                <div key={vid} onClick={() => { setCurrentVideoId(vid); setIsPlaying(true); }} style={{
                    minWidth: "160px",
                    width: "25%",
                    aspectRatio: "16/9",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: currentVideoId === vid ? "2px solid #FF2D87" : "2px solid transparent",
                    transition: "all 0.2s ease",
                    position: "relative"
                }}>
                    <img src={`https://img.youtube.com/vi/${vid}/mqdefault.jpg`} alt="thumbnail" style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: currentVideoId === vid ? 1 : 0.6
                    }} />
                    {currentVideoId !== vid && <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.2)"
                    }} />}
                </div>
            ))}
        </div>

        <div style={{
            maxWidth: "1100px",
            margin: "48px auto 0 auto",
            paddingLeft: "clamp(24px,6vw,96px)",
            paddingRight: "clamp(24px,6vw,96px)",
            position: "relative",
            zIndex: 1
        }}>
            <div style={{
                borderTop: "1px solid rgba(0,0,0,0.07)",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                paddingTop: "32px",
                paddingBottom: "32px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start"
            }} className="video-stats-strip">
                {STATS_DATA.map((stat, idx) => <motion.div key={stat.id} initial={{
                    opacity: 0,
                    y: 16
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.6,
                    delay: idx * 0.08,
                    ease: "easeOut"
                }} style={{
                    flex: 1,
                    paddingLeft: idx === 0 ? "0" : "32px",
                    paddingRight: "32px",
                    borderLeft: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.07)",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <span style={{
                        fontFamily: "Figtree",
                        fontWeight: 200,
                        fontSize: "clamp(36px,4vw,52px)",
                        color: "#0A0A0F",
                        letterSpacing: "-0.03em",
                        lineHeight: 1
                    }}>
                        {stat.value}
                    </span>
                    <span style={{
                        fontFamily: "Figtree",
                        fontSize: "12px",
                        color: "#64748b",
                        marginTop: "8px",
                        display: "block"
                    }}>
                        {stat.label}
                    </span>
                </motion.div>)}
            </div>
        </div>

        <style>{`
        @media (max-width: 767px) {
          .video-header-right { max-width: 100% !important; }
          .video-stats-strip { flex-wrap: wrap !important; gap: 24px 0 !important; }
          .video-stats-strip > div { min-width: 50% !important; border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(0,0,0,0.07) !important; padding-top: 20px !important; }
          .video-stats-strip > div:nth-child(1), .video-stats-strip > div:nth-child(2) { border-top: none !important; padding-top: 0 !important; }
        }
      `}</style>
    </section>;
};

// ─── Testimonial ──────────────────────────────────────────────────────────────
const Testimonial = () => {
    const STAR_IDS_LARGE = ["sl1", "sl2", "sl3", "sl4", "sl5"];
    const STAR_IDS_A = ["sa1", "sa2", "sa3", "sa4", "sa5"];
    const STAR_IDS_B = ["sb1", "sb2", "sb3", "sb4", "sb5"];
    return <section style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "clamp(80px,10vw,140px)",
        paddingBottom: "clamp(80px,10vw,140px)",
        position: "relative",
        overflow: "hidden"
    }}>
        <div aria-hidden="true" style={{
            position: "absolute",
            top: "32px",
            left: "32px",
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(160px,20vw,280px)",
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0
        }}>
            "
        </div>

        <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(24px,6vw,96px)",
            paddingRight: "clamp(24px,6vw,96px)",
            marginBottom: "clamp(48px,6vw,80px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
            position: "relative",
            zIndex: 1
        }}>
            <div>
                <span style={{
                    fontFamily: "Figtree",
                    fontWeight: 600,
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    display: "block"
                }}>
                    COMMUNITY VOICES
                </span>
                <h2 style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(32px,4vw,52px)",
                    color: "#FFFFFF",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.0,
                    margin: "12px 0 0 0"
                }}>
                    From the room's most powerful voices.
                </h2>
                <p style={{
                    fontFamily: "Figtree",
                    fontSize: "17px",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.80)",
                    lineHeight: 1.65,
                    marginTop: "24px",
                    marginBottom: 0,
                    maxWidth: "720px",
                    borderLeft: "2px solid #FF2D87",
                    paddingLeft: "20px"
                }}>
                    "EmpowaWomen is where Africa's most influential women gather to shape the future. I left with strategic partnerships, invaluable insights, and a renewed conviction that when women unite around leadership and impact, entire economies move forward."
                </p>
            </div>
            <p style={{
                fontFamily: "Figtree",
                fontSize: "15px",
                color: "rgba(255,255,255,0.40)",
                maxWidth: "280px",
                lineHeight: 1.65,
                margin: "8px 0 0 0"
            }}>
                Real words from the delegates, executives, and leaders who have sat at the table.
            </p>
        </div>

        <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(24px,6vw,96px)",
            paddingRight: "clamp(24px,6vw,96px)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(16px,2vw,24px)",
            alignItems: "start",
            position: "relative",
            zIndex: 1
        }} className="testimonials-grid">
            <motion.div initial={{
                opacity: 0,
                x: -24
            }} whileInView={{
                opacity: 1,
                x: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.7,
                ease: "easeOut"
            }} style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "clamp(32px,4vw,56px)",
                position: "relative",
                overflow: "hidden",
                minHeight: "480px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <img src="/Sindisiwe-Chikunga.jpg" alt="" aria-hidden="true" style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.08,
                    mixBlendMode: "luminosity",
                    pointerEvents: "none",
                    zIndex: 0
                }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,15,0.95) 100%)",
                    pointerEvents: "none",
                    zIndex: 0
                }} />

                <div style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px"
                    }}>
                        {STAR_IDS_LARGE.map(sid => <svg key={sid} width="16" height="16" viewBox="0 0 16 16" fill="#FF2D87">
                            <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                        </svg>)}
                    </div>
                    <blockquote style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontStyle: "italic",
                        fontSize: "clamp(18px,2.5vw,26px)",
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.5,
                        marginTop: "24px",
                        marginBottom: 0
                    }}>
                        EmpowaWomen represents the bold leadership platform Africa needs. By uniting exceptional leaders, policymakers, and innovators, it accelerates economic participation, strengthens strategic networks, and empowers women to lead with purpose.
                    </blockquote>
                    <div style={{
                        marginTop: "auto",
                        paddingTop: "32px",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px"
                    }}>
                        <img src="/Sindisiwe-Chikunga.jpg" alt="Sindisiwe Chikunga" style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid rgba(255,255,255,0.15)",
                            flexShrink: 0
                        }} />
                        <div>
                            <span style={{
                                fontFamily: "Figtree",
                                fontWeight: 500,
                                fontSize: "15px",
                                color: "#FFFFFF",
                                display: "block"
                            }}>
                                Ms Sindisiwe Chikunga
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.40)",
                                display: "block"
                            }}>
                                Minister in the Presidency for Women, Youth and Persons with Disabilities
                                Republic of South Africa

                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(16px,2vw,24px)"
            }}>
                <motion.div initial={{
                    opacity: 0,
                    x: 24
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: "easeOut"
                }} style={{
                    backgroundColor: "#FF2D87",
                    borderRadius: "28px",
                    padding: "clamp(28px,3vw,40px)",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div aria-hidden="true" style={{
                        position: "absolute",
                        top: "16px",
                        right: "24px",
                        fontFamily: "Figtree",
                        fontWeight: 200,
                        fontSize: "80px",
                        color: "rgba(255,255,255,0.15)",
                        lineHeight: 1,
                        pointerEvents: "none",
                        userSelect: "none"
                    }}>
                        "
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px"
                    }}>
                        {STAR_IDS_A.map(sid => <svg key={sid} width="14" height="14" viewBox="0 0 16 16" fill="white">
                            <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                        </svg>)}
                    </div>
                    <blockquote style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontStyle: "italic",
                        fontSize: "17px",
                        color: "rgba(255,255,255,0.90)",
                        lineHeight: 1.55,
                        marginTop: "16px",
                        marginBottom: 0
                    }}>
                        EmpowaWomen represents the future of women’s leadership in Africa. It is a rare space where governance, business excellence, and social impact intersect, enabling ambitious women to forge powerful partnerships, expand their influence, and accelerate their legacy.
                    </blockquote>
                    <div style={{
                        marginTop: "24px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                    }}>
                        <img src="/Delia-Ndlovu.jpg" alt="Delia Ndlovu" style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid rgba(255,255,255,0.30)",
                            flexShrink: 0
                        }} />
                        <div>
                            <span style={{
                                fontFamily: "Figtree",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: "#FFFFFF",
                                display: "block"
                            }}>
                                Delia Ndlovu
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.60)",
                                display: "block"
                            }}>
                                Former Chair, Deloitte Africa Board
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{
                    opacity: 0,
                    x: 24
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: "easeOut"
                }} style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "28px",
                    padding: "clamp(28px,3vw,40px)"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "2px"
                    }}>
                        {STAR_IDS_B.map(sid => <svg key={sid} width="14" height="14" viewBox="0 0 16 16" fill="#FF2D87">
                            <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
                        </svg>)}
                    </div>
                    <blockquote style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontStyle: "italic",
                        fontSize: "17px",
                        color: "rgba(255,255,255,0.80)",
                        lineHeight: 1.55,
                        marginTop: "16px",
                        marginBottom: 0
                    }}>
                        EmpowaWomen is where vision meets execution. By bringing together leaders committed to transforming economies, this platform inspires bold thinking and practical action, empowering every woman to lead fearlessly and grow intentionally.
                    </blockquote>
                    <div style={{
                        marginTop: "24px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                    }}>
                        <img src="/Tryphosa-Ramano.jpg" alt="Tryphosa Ramano" style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid rgba(255,255,255,0.15)",
                            flexShrink: 0
                        }} />
                        <div>
                            <span style={{
                                fontFamily: "Figtree",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: "#FFFFFF",
                                display: "block"
                            }}>
                                Tryphosa Ramano
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.40)",
                                display: "block"
                            }}>
                                Independent Non-Executive Director, Public Investment Corporation (PIC)
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

        <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "clamp(24px,6vw,96px)",
            paddingRight: "clamp(24px,6vw,96px)",
            marginTop: "clamp(48px,6vw,80px)",
            position: "relative",
            zIndex: 1
        }}>
            <div style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "24px"
            }}>
                <p style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "22px",
                    color: "rgba(255,255,255,0.60)",
                    fontStyle: "italic",
                    margin: 0
                }}>
                    10,000+ women have already found their place at the table.
                </p>
                <RouterLink to="/contact" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#FF2D87",
                    color: "#FFFFFF",
                    fontFamily: "Figtree",
                    fontWeight: 500,
                    fontSize: "13px",
                    borderRadius: "999px",
                    padding: "12px 28px",
                    textDecoration: "none",
                    transition: "filter 200ms ease-out",
                    whiteSpace: "nowrap"
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
                }}>
                    Join the Community →
                </RouterLink>
            </div>
        </div>

        <style>{`
        @media (max-width: 767px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const EmpowaWomenHome = () => {
    return <div className="w-full" style={{
        backgroundColor: "#0A0A0F"
    }}>
        <HeroSection />
        <AboutSection />
        <PartnerStrip />
        <PathwaysSection />
        <CorePillarsSection />
        <VideoSection />
        <Testimonial />
    </div>;
};
