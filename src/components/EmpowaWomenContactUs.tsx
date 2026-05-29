import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { UniversalHero } from "./UniversalHero";
import { Briefcase, Mic, Ticket, GraduationCap, MapPin, Phone, Clock, Navigation, ChevronRight, ChevronDown, Menu, X, ArrowRight, Camera, Link, MessageSquare, Video, Send, Zap, Calendar, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
interface RouteItem {
    id: string;
    label: string;
    icon: React.ElementType;
    description: string;
    accent: string;
}
interface NavLinkItem {
    id: string;
    label: string;
    href: string;
    active?: boolean;
}
interface InfraCard {
    id: string;
    icon: React.ElementType;
    color: string;
    eyebrow: string;
    title: React.ReactNode;
    hoverBorder: string;
    hoverBg: string;
}
interface LogoItem {
    id: string;
    name: string;
    src: string;
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
interface SocialItem {
    id: string;
    label: string;
    Icon: React.ElementType;
}
interface SlaCol {
    id: string;
    iconBg: string;
    label: string;
    labelBg: string;
    labelColor: string;
    time: string;
    route: string;
    desc: string;
}
interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const ROUTES: RouteItem[] = [{
    id: "sponsorship",
    label: "Sponsorship & Corporate Alliances",
    icon: Briefcase,
    description: "For organizations looking to partner with EmpowaWomen.",
    accent: "#FF2D87"
}, {
    id: "speaker",
    label: "Speaker Submissions",
    icon: Mic,
    description: "Submit your proposal to share your expertise on our stage.",
    accent: "#00B4A6"
}, {
    id: "delegate",
    label: "Delegate Reservations",
    icon: Ticket,
    description: "Secure your presence at our upcoming economic summits.",
    accent: "#D97706"
}, {
    id: "academy",
    label: "EmpowaHER™ Academy",
    icon: GraduationCap,
    description: "Enquire about our specialized leadership training programs.",
    accent: "#6D28D9"
}];
const NAV_LINKS: NavLinkItem[] = [{
    id: "nav-about",
    label: "About",
    href: "#"
}, {
    id: "nav-summits",
    label: "Summits",
    href: "#"
}, {
    id: "nav-pillars",
    label: "Pillars",
    href: "#"
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
    href: "#",
    active: true
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
const INFRA_CARDS: InfraCard[] = [{
    id: "card-hq",
    icon: MapPin,
    color: "#FF2D87",
    eyebrow: "HEADQUARTERS",
    title: "EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg, 2196 · South Africa",
    hoverBorder: "rgba(255,45,135,0.30)",
    hoverBg: "rgba(255,45,135,0.06)"
}, {
    id: "card-phone",
    icon: Phone,
    color: "#00B4A6",
    eyebrow: "DIRECT LINE",
    title: <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px"
    }}>
        <span>+27 (0) 11 482 7256</span>
        <span>+27 (0) 11 482 7257</span>
    </div>,
    hoverBorder: "rgba(0,180,166,0.30)",
    hoverBg: "rgba(0,180,166,0.06)"
}, {
    id: "card-time",
    icon: Clock,
    color: "#D97706",
    eyebrow: "RESPONSE TIME",
    title: "Executive enquiries routed within 24 hours",
    hoverBorder: "rgba(217,119,6,0.30)",
    hoverBg: "rgba(217,119,6,0.06)"
}];
const SLA_COLS: SlaCol[] = [{
    id: "sla-priority",
    iconBg: "#FF2D87",
    label: "PRIORITY",
    labelBg: "rgba(255,45,135,0.10)",
    labelColor: "#FF2D87",
    time: "2hrs",
    route: "Sponsorship & Corporate",
    desc: "Executive partnership enquiries receive immediate routing to our commercial team."
}, {
    id: "sla-standard",
    iconBg: "#0A0A0F",
    label: "STANDARD",
    labelBg: "rgba(10,10,15,0.08)",
    labelColor: "#0A0A0F",
    time: "24hrs",
    route: "Delegate & Speaker",
    desc: "All delegate and speaker enquiries processed within one business day."
}, {
    id: "sla-academy",
    iconBg: "#00B4A6",
    label: "ACADEMY",
    labelBg: "rgba(0,180,166,0.10)",
    labelColor: "#00B4A6",
    time: "48hrs",
    route: "EmpowaHER™ Applications",
    desc: "Cohort applications reviewed by the programme team within two business days."
}];
const FAQ_ITEMS: FaqItem[] = [{
    id: "faq-1",
    question: "How do I register for an EmpowaWomen summit?",
    answer: "Visit the Summits page to view the full 2026–2027 calendar and select your preferred event. All registrations are processed through our delegate reservation system with limited seats per summit."
}, {
    id: "faq-2",
    question: "What is the cost to attend as a delegate?",
    answer: "Delegate pass pricing varies by summit format and tier. Contact our Delegate Reservations team using the form above and we will provide a tailored investment summary."
}, {
    id: "faq-3",
    question: "Where is EmpowaWorx House located?",
    answer: "EmpowaWorx House is located at 364 Pine Avenue, Ferndale, Randburg, 2196 · South Africa and serves as the primary venue for all Johannesburg-based summits and executive series events. Use the map below for directions."
}, {
    id: "faq-4",
    question: "How do I apply for the EmpowaHER™ Academy?",
    answer: "Visit the Academy page to access the cohort application form. Applications are reviewed by the programme team and shortlisted candidates are contacted within 48 hours. Intake is limited per cohort."
}];
const FOOTER_SECTION_ROWS: SectionLinkRow[] = [{
    id: "row-pages",
    label: "Pages",
    links: [{
        id: "fp-1",
        label: "About",
        href: "#"
    }, {
        id: "fp-2",
        label: "Summits",
        href: "#"
    }, {
        id: "fp-3",
        label: "Pillars",
        href: "#"
    }, {
        id: "fp-4",
        label: "Academy",
        href: "#"
    }, {
        id: "fp-5",
        label: "Partners",
        href: "#"
    }, {
        id: "fp-6",
        label: "Contact",
        href: "#"
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
const SOCIAL_ITEMS: SocialItem[] = [{
    id: "s-instagram",
    label: "Instagram",
    Icon: Camera
}, {
    id: "s-linkedin",
    label: "LinkedIn",
    Icon: Link
}, {
    id: "s-x",
    label: "X",
    Icon: MessageSquare
}, {
    id: "s-Video",
    label: "Video",
    Icon: Video
}];
const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];
const HERO_WORDS = ["Join", "the", "Room", "Shaping", "Africa\u2019s", "Economic", "Destiny."];

// ─── Inline SVG Logomark ──────────────────────────────────────────────────────
const EwLogomark = ({
    size = 28
}: {
    size?: number;
}) => <svg viewBox="0 0 60 40" height={size} width="auto" aria-hidden="true" style={{
    flexShrink: 0
}}>
        <circle cx="15" cy="20" r="13" fill="none" stroke="#FF2D87" strokeWidth="6" />
        <rect x="2" y="17" width="18" height="6" fill="#0A0A0F" />
        <path d="M28 6 L33 34 L39 18 L45 34 L50 6" fill="none" stroke="#3B9EFF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 6 L41 34 L47 18 L53 34 L58 6" fill="none" stroke="#7B5EA7" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;

// ─── Top Navigation ───────────────────────────────────────────────────────────
const TopNav = () => {
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const {
        scrollYProgress
    } = useScroll();
    return <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50
    }}>
        <header style={{
            height: "68px",
            backgroundColor: "rgba(10,10,15,0.97)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "clamp(16px,6vw,80px)",
            paddingRight: "clamp(16px,6vw,80px)",
            position: "relative"
        }}>
            <motion.div style={{
                scaleX: scrollYProgress,
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
                <EwLogomark size={28} />
                <span style={{
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.02em"
                }}>
                    <span style={{
                        color: "#FFFFFF"
                    }}>Empowa</span>
                    <span style={{
                        color: "#FF2D87"
                    }}>Women</span>
                </span>
            </div>

            <nav aria-label="Main navigation" style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0px"
            }} className="hidden md:flex">
                {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
                    <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} style={{
                        fontFamily: "Figtree",
                        fontSize: "12px",
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                        color: link.active || hoveredLink === link.id ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
                        textDecoration: "none",
                        padding: "6px 12px",
                        transition: "color 150ms ease-out",
                        position: "relative",
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "3px"
                    }}>
                        <span>{link.label}</span>
                        <span style={{
                            display: "block",
                            height: "1.5px",
                            width: "100%",
                            backgroundColor: "#FF2D87",
                            transformOrigin: "left",
                            transform: link.active || hoveredLink === link.id ? "scaleX(1)" : "scaleX(0)",
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
                flexShrink: 0
            }} className="hidden md:flex">
                <RouterLink to="/summit" style={{
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
                    display: "inline-flex",
                    alignItems: "center"
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
                }}>
                    Secure Your Seat
                </RouterLink>
            </div>

            <button className="md:hidden ml-auto" style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#FFFFFF"
            }} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </header>

        <AnimatePresence>
            {isOpen && <motion.div initial={{
                opacity: 0,
                height: 0
            }} animate={{
                opacity: 1,
                height: "auto"
            }} exit={{
                opacity: 0,
                height: 0
            }} style={{
                backgroundColor: "rgba(10,10,15,0.98)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden"
            }} className="md:hidden">
                <div style={{
                    padding: "32px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px"
                }}>
                    {NAV_LINKS.map(link => <a key={link.id} href={link.href} style={{
                        fontFamily: "Figtree",
                        fontSize: "18px",
                        fontWeight: 400,
                        color: link.active ? "#FF2D87" : "rgba(255,255,255,0.70)",
                        textDecoration: "none"
                    }} onClick={() => setIsOpen(false)}>
                        {link.label}
                    </a>)}
                    <RouterLink to="/summit" style={{
                        fontFamily: "Figtree",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        backgroundColor: "#FF2D87",
                        borderRadius: "999px",
                        padding: "12px 24px",
                        textDecoration: "none",
                        textAlign: "center"
                    }}>
                        Secure Your Seat
                    </RouterLink>
                </div>
            </motion.div>}
        </AnimatePresence>
    </div>;
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
    return <section style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0A0A0F",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: "80px"
    }}>
        <motion.div initial={{
            scale: 1.06,
            opacity: 0
        }} animate={{
            scale: 1,
            opacity: 1
        }} transition={{
            duration: 2.4,
            ease: "easeOut"
        }} style={{
            position: "absolute",
            inset: 0,
            zIndex: 0
        }}>
            <img src="/features.jpg" alt="" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%"
            }} />
        </motion.div>

        <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
        }} />
        <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background: "linear-gradient(to top, #0A0A0F 0%, transparent 40%)",
            pointerEvents: "none"
        }} />

        <div style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(24px,6vw,96px)",
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
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    marginBottom: "32px"
                }}>
                    <span style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#FF2D87",
                        flexShrink: 0,
                        display: "inline-block",
                        animation: "pulseDot 2s ease-in-out infinite"
                    }} />
                    <span style={{
                        fontFamily: "Figtree",
                        fontWeight: 600,
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        color: "rgba(255,255,255,0.6)",
                        textTransform: "uppercase"
                    }}>
                        ROUTING HEADQUARTERS &middot; CONTACT US
                    </span>
                </motion.div>

                <h1 style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(52px,8vw,96px)",
                    color: "white",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.0,
                    textAlign: "center",
                    maxWidth: "900px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "0 12px",
                    margin: "0 auto 36px auto"
                }}>
                    {HERO_WORDS.map((word, index) => {
                        const isDestiny = word === "Destiny.";
                        return <motion.span key={`hero-word-${index}`} initial={{
                            opacity: 0,
                            filter: "blur(10px)",
                            y: 20
                        }} animate={{
                            opacity: 1,
                            filter: "blur(0px)",
                            y: 0
                        }} transition={{
                            duration: 0.8,
                            delay: 0.4 + index * 0.1,
                            ease: [0.21, 0.47, 0.32, 0.98]
                        }} style={{
                            display: "inline-block"
                        }}>
                            {isDestiny ? <span>
                                <span style={{
                                    textDecoration: "underline",
                                    textDecorationColor: "#FF2D87",
                                    textDecorationThickness: "3px",
                                    textUnderlineOffset: "6px",
                                    color: "#FFFFFF"
                                }}>
                                    Destiny
                                </span>
                                <span style={{
                                    color: "#FF2D87"
                                }}>.</span>
                            </span> : word}
                        </motion.span>;
                    })}
                </h1>

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
                    fontWeight: 400,
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.5)",
                    maxWidth: "580px",
                    textAlign: "center",
                    lineHeight: 1.75,
                    marginBottom: "40px"
                }}>
                    Connect with the correct executive team directly. Every enquiry is routed to the right desk within 24 hours.
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
                    flexWrap: "wrap",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "80px"
                }}>
                    <a href="#contact-form" style={{
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
                        borderRadius: "999px",
                        transition: "all 200ms ease-out",
                        boxShadow: "0 0 32px rgba(255,45,135,0.25)"
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
                    }} onClick={e => {
                        e.preventDefault();
                        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                    }}>
                        Get in Touch
                    </a>
                    <RouterLink to="/summits-hub" style={{
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
                        View Our Summits
                    </RouterLink>
                </motion.div>

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
                        x: ["0%", "-33.33%"]
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

        <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
      `}</style>
    </section>;
};

// ─── Smart Routing Form ───────────────────────────────────────────────────────
// Improvement 1: per-card accent colours
// Improvement 3: shimmer submit button
const SmartRoutingForm = () => {
    const [selectedRoute, setSelectedRoute] = React.useState(ROUTES[0].id);
    const getRouteAccent = (routeId: string) => {
        const r = ROUTES.find(x => x.id === routeId);
        return r ? r.accent : "#FF2D87";
    };
    return <section id="contact-form" style={{
        position: "relative",
        zIndex: 10,
        backgroundColor: "#F7F6F2",
        marginTop: "-72px",
        borderRadius: "40px 40px 0 0",
        overflow: "hidden",
        boxShadow: "0 -24px 64px rgba(0,0,0,0.5)",
        paddingTop: "96px",
        paddingBottom: "128px"
    }}>
        <div style={{
            position: "relative",
            zIndex: 20,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(24px,4vw,64px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(48px,6vw,96px)"
        }}>
            {/* Left Column */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "48px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px"
                }}>
                    <span style={{
                        color: "#FF2D87",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        fontFamily: "Figtree"
                    }}>
                        Get in touch
                    </span>
                    <h2 style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "clamp(36px,5vw,56px)",
                        color: "#0A0A0F",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        margin: 0
                    }}>
                        Send us a message.
                    </h2>
                    <p style={{
                        fontFamily: "Figtree",
                        fontWeight: 400,
                        fontSize: "17px",
                        color: "#64748b",
                        lineHeight: 1.75,
                        maxWidth: "400px",
                        margin: 0
                    }}>
                        Select your enquiry type below and we will route your message directly to the correct executive team.
                    </p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    gap: "16px"
                }}>
                    {ROUTES.map(route => {
                        const Icon = route.icon;
                        const isActive = selectedRoute === route.id;
                        const accent = route.accent;
                        return <motion.div key={route.id} whileHover={{
                            scale: 1.02
                        }} whileTap={{
                            scale: 0.98
                        }} onClick={() => setSelectedRoute(route.id)} style={{
                            padding: "24px",
                            borderRadius: "16px",
                            border: isActive ? `1px solid ${accent}` : "1px solid rgba(0,0,0,0.06)",
                            backgroundColor: isActive ? `${accent}1A` : "#FFFFFF",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            transition: "all 200ms ease-out",
                            boxShadow: isActive ? `0 8px 24px ${accent}18` : "none"
                        }} onMouseEnter={e => {
                            if (!isActive) {
                                (e.currentTarget as HTMLDivElement).style.backgroundColor = `${accent}0D`;
                                (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}26`;
                            }
                        }} onMouseLeave={e => {
                            if (!isActive) {
                                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#FFFFFF";
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.06)";
                            }
                        }}>
                            <div style={{
                                width: 48,
                                height: 48,
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: isActive ? accent : "rgba(247,246,242,1)",
                                color: isActive ? "#FFFFFF" : "#0A0A0F",
                                transition: "all 200ms ease-out"
                            }}>
                                <Icon size={22} />
                            </div>
                            <h4 style={{
                                fontFamily: "Figtree",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: isActive ? accent : "#0A0A0F",
                                margin: 0,
                                lineHeight: 1.4,
                                transition: "color 200ms ease-out"
                            }}>
                                {route.label}
                            </h4>
                        </motion.div>;
                    })}
                </div>
            </div>

            {/* Right Column: Form */}
            <div style={{
                position: "relative"
            }}>
                <motion.div initial={{
                    opacity: 0,
                    x: 20
                }} whileInView={{
                    opacity: 1,
                    x: 0
                }} viewport={{
                    once: true
                }} style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "32px",
                    padding: "clamp(32px,4vw,48px)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.04)"
                }}>
                    <form id="contact-form" style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px"
                    }} onSubmit={e => e.preventDefault()}>
                        {[{
                            label: "Full Name",
                            type: "text",
                            placeholder: "e.g. Sarah Jenkins"
                        }, {
                            label: "Institutional Organization",
                            type: "text",
                            placeholder: "e.g. African Development Bank"
                        }, {
                            label: "Direct Mobile / WhatsApp",
                            type: "tel",
                            placeholder: "+27 00 000 0000"
                        }].map(field => <div key={field.label} style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}>
                            <label style={{
                                fontFamily: "Figtree",
                                fontSize: "10px",
                                fontWeight: 600,
                                color: "rgba(10,10,15,0.40)",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em"
                            }}>
                                {field.label}
                            </label>
                            <input type={field.type} placeholder={field.placeholder} style={{
                                width: "100%",
                                padding: "16px 20px",
                                backgroundColor: "#F7F6F2",
                                border: "none",
                                borderRadius: "12px",
                                outline: "none",
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                color: "#0A0A0F",
                                boxSizing: "border-box"
                            }} />
                        </div>)}

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}>
                            <label style={{
                                fontFamily: "Figtree",
                                fontSize: "10px",
                                fontWeight: 600,
                                color: "rgba(10,10,15,0.40)",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em"
                            }}>
                                Selected Route
                            </label>
                            <div style={{
                                position: "relative"
                            }}>
                                <select value={selectedRoute} onChange={e => setSelectedRoute(e.target.value)} style={{
                                    width: "100%",
                                    padding: "16px 20px",
                                    backgroundColor: "#F7F6F2",
                                    border: "none",
                                    borderRadius: "12px",
                                    outline: "none",
                                    fontFamily: "Figtree",
                                    fontSize: "15px",
                                    color: "#0A0A0F",
                                    appearance: "none",
                                    cursor: "pointer",
                                    boxSizing: "border-box"
                                }}>
                                    {ROUTES.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                                </select>
                                <div style={{
                                    position: "absolute",
                                    right: "20px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    pointerEvents: "none",
                                    color: "rgba(10,10,15,0.40)"
                                }}>
                                    <ChevronRight size={18} style={{
                                        transform: "rotate(90deg)"
                                    }} />
                                </div>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}>
                            <label style={{
                                fontFamily: "Figtree",
                                fontSize: "10px",
                                fontWeight: 600,
                                color: "rgba(10,10,15,0.40)",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em"
                            }}>
                                Message
                            </label>
                            <textarea rows={4} placeholder="Please summarize your proposal briefly to ensure immediate routing to the correct executive tier." style={{
                                width: "100%",
                                padding: "16px 20px",
                                backgroundColor: "#F7F6F2",
                                border: "none",
                                borderRadius: "12px",
                                outline: "none",
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                color: "#0A0A0F",
                                resize: "none",
                                boxSizing: "border-box"
                            }} />
                        </div>

                        {/* Shimmer submit button */}
                        <button type="submit" style={{
                            width: "100%",
                            padding: "20px",
                            backgroundColor: getRouteAccent(selectedRoute),
                            color: "#FFFFFF",
                            border: "none",
                            borderRadius: "999px",
                            fontFamily: "Figtree",
                            fontWeight: 500,
                            fontSize: "16px",
                            cursor: "pointer",
                            transition: "all 200ms",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            position: "relative",
                            overflow: "hidden"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 8px 32px ${getRouteAccent(selectedRoute)}4D`;
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                        }}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "40%",
                                background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
                                transform: "skewX(-20deg)",
                                animation: "shimmerBtn 3s linear infinite"
                            }} />
                            <span>Send Your Enquiry</span>
                            <ArrowRight size={16} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>

        <style>{`
        @keyframes shimmerBtn {
          0% { transform: skewX(-20deg) translateX(-200%); }
          100% { transform: skewX(-20deg) translateX(500%); }
        }
      `}</style>
    </section>;
};

// ─── Response SLA Strip ───────────────────────────────────────────────────────
// Improvement 2
const SlaStrip = () => {
    return <section style={{
        backgroundColor: "#F7F6F2",
        paddingTop: "64px",
        paddingBottom: "64px"
    }}>
        <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(24px,6vw,96px)"
        }}>
            <p style={{
                fontFamily: "Figtree",
                fontWeight: 600,
                fontSize: "9px",
                letterSpacing: "0.28em",
                color: "#64748b",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: 0
            }}>
                HOW WE RESPOND
            </p>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                justifyContent: "center"
            }}>
                {SLA_COLS.map((col, idx) => <motion.div key={col.id} initial={{
                    opacity: 0,
                    y: 16
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut"
                }} style={{
                    flex: "1 1 260px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(10,10,15,0.06)",
                    borderRadius: "16px",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                }}>
                    <div style={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        backgroundColor: col.iconBg,
                        marginBottom: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Clock size={22} color="#FFFFFF" />
                    </div>
                    <span style={{
                        display: "inline-block",
                        backgroundColor: col.labelBg,
                        color: col.labelColor,
                        fontFamily: "Figtree",
                        fontWeight: 600,
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        marginBottom: "12px",
                        textTransform: "uppercase"
                    }}>
                        {col.label}
                    </span>
                    <p style={{
                        fontFamily: "Figtree",
                        fontWeight: 200,
                        fontSize: "clamp(36px,4vw,52px)",
                        color: "#0A0A0F",
                        lineHeight: 1,
                        margin: 0
                    }}>
                        {col.time}
                    </p>
                    <p style={{
                        fontFamily: "Figtree",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#0A0A0F",
                        marginTop: "8px",
                        marginBottom: 0
                    }}>
                        {col.route}
                    </p>
                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "13px",
                        color: "#64748b",
                        lineHeight: 1.6,
                        marginTop: "8px",
                        marginBottom: 0
                    }}>
                        {col.desc}
                    </p>
                </motion.div>)}
            </div>
        </div>
    </section>;
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
// Improvement 4
const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);
    return <section style={{
        backgroundColor: "#F7F6F2",
        paddingTop: "96px",
        paddingBottom: "96px"
    }}>
        <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 clamp(24px,6vw,96px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "start"
        }}>
            {/* Left */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}>
                <span style={{
                    fontFamily: "Figtree",
                    fontWeight: 600,
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    color: "#64748b",
                    textTransform: "uppercase"
                }}>
                    QUICK ANSWERS
                </span>
                <h2 style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(28px,3.5vw,44px)",
                    color: "#0A0A0F",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    margin: 0
                }}>
                    Common questions answered.
                </h2>
                <p style={{
                    fontFamily: "Figtree",
                    fontSize: "15px",
                    color: "#64748b",
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: "360px"
                }}>
                    If your question is not answered here, complete the contact form and we will route your enquiry directly.
                </p>
            </div>

            {/* Right: accordion */}
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                {FAQ_ITEMS.map((item, idx) => <motion.div key={item.id} initial={{
                    opacity: 0,
                    y: 12
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: "easeOut"
                }} style={{
                    borderBottom: "1px solid rgba(10,10,15,0.08)"
                }}>
                    <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "20px 0",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left"
                    }}>
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#0A0A0F",
                            paddingRight: "16px"
                        }}>
                            {item.question}
                        </span>
                        <ChevronDown size={18} style={{
                            flexShrink: 0,
                            color: "#64748b",
                            transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 200ms ease-out"
                        }} />
                    </button>
                    <AnimatePresence initial={false}>
                        {openIndex === idx && <motion.div key={`faq-answer-${item.id}`} initial={{
                            height: 0,
                            opacity: 0
                        }} animate={{
                            height: "auto",
                            opacity: 1
                        }} exit={{
                            height: 0,
                            opacity: 0
                        }} transition={{
                            duration: 0.25,
                            ease: "easeInOut"
                        }} style={{
                            overflow: "hidden"
                        }}>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                color: "#64748b",
                                lineHeight: 1.75,
                                margin: 0,
                                paddingBottom: "16px"
                            }}>
                                {item.answer}
                            </p>
                        </motion.div>}
                    </AnimatePresence>
                </motion.div>)}
            </div>
        </div>
    </section>;
};

// ─── Physical Infrastructure ──────────────────────────────────────────────────
// Improvement 5: background image + glow layers + per-card hover colours
const PhysicalInfrastructure = () => {
    return <section style={{
        backgroundColor: "#0A0A0F",
        padding: "128px 0",
        position: "relative",
        overflow: "hidden"
    }}>
        {/* Background image */}
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85" alt="" aria-hidden="true" style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.10,
            mixBlendMode: "luminosity",
            zIndex: 0,
            pointerEvents: "none"
        }} />
        {/* Pink radial glow */}
        <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "50%",
            height: "75%",
            background: "radial-gradient(ellipse at bottom left, rgba(255,45,135,0.08) 0%, transparent 70%)",
            zIndex: 1,
            pointerEvents: "none"
        }} />
        {/* Teal radial glow */}
        <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "33%",
            height: "50%",
            background: "radial-gradient(ellipse at top right, rgba(0,180,166,0.06) 0%, transparent 70%)",
            zIndex: 1,
            pointerEvents: "none"
        }} />

        <div style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(24px,4vw,64px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px"
        }}>
            {INFRA_CARDS.map((card, idx) => {
                const Icon = card.icon;
                return <motion.div key={card.id} initial={{
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
                    position: "relative",
                    zIndex: 2,
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "24px",
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    transition: "all 250ms ease-out"
                }} onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.backgroundColor = card.hoverBg;
                    el.style.borderColor = card.hoverBorder;
                }} onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.backgroundColor = "rgba(255,255,255,0.04)";
                    el.style.borderColor = "rgba(255,255,255,0.10)";
                }}>
                    <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: `${card.color}18`,
                        color: card.color
                    }}>
                        <Icon size={26} />
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                    }}>
                        <span style={{
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "9px",
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.40)",
                            textTransform: "uppercase"
                        }}>
                            {card.eyebrow}
                        </span>
                        <div style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "20px",
                            color: "#FFFFFF",
                            lineHeight: 1.5
                        }}>
                            {card.title}
                        </div>
                    </div>
                </motion.div>;
            })}
        </div>
    </section>;
};

// ─── Map Section ──────────────────────────────────────────────────────────────
// Improvement 6: floating info card
const MapSection = () => {
    const handleOpenMaps = () => {
        window.open("https://www.google.com/maps/place/Johannesburg,+South+Africa", "_blank");
    };
    return <section style={{
        backgroundColor: "#F7F6F2",
        position: "relative"
    }}>
        <div style={{
            width: "100%",
            height: "540px",
            position: "relative",
            overflow: "hidden"
        }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7!2d28.0473!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1" width="100%" height="100%" style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) grayscale(0.2)"
            }} allowFullScreen loading="lazy" title="EmpowaWorx House Location" />

            {/* Floating info card */}
            <motion.div initial={{
                opacity: 0,
                x: -16
            }} whileInView={{
                opacity: 1,
                x: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.6,
                delay: 0.3
            }} style={{
                position: "absolute",
                bottom: "32px",
                left: "32px",
                zIndex: 10,
                backgroundColor: "rgba(10,10,15,0.90)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "16px",
                padding: "20px 24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                minWidth: "240px",
                maxWidth: "320px"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <MapPin size={16} style={{
                        color: "#FF2D87",
                        marginRight: "8px",
                        flexShrink: 0
                    }} />
                    <span style={{
                        fontFamily: "Figtree",
                        fontWeight: 600,
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        color: "rgba(255,255,255,0.40)",
                        textTransform: "uppercase"
                    }}>
                        EMPOWAWORX HOUSE
                    </span>
                </div>
                <p style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "18px",
                    color: "#FFFFFF",
                    margin: "8px 0 0 0",
                    lineHeight: 1.3
                }}>
                    364 Pine Avenue, Ferndale<br />
                    Randburg, 2196 &middot; South Africa
                </p>
                <div style={{
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    margin: "16px 0"
                }} />
                <button onClick={handleOpenMaps} style={{
                    backgroundColor: "#FF2D87",
                    color: "#FFFFFF",
                    fontFamily: "Figtree",
                    fontWeight: 500,
                    fontSize: "13px",
                    border: "none",
                    borderRadius: "999px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    transition: "filter 200ms ease-out",
                    display: "inline-flex",
                    alignItems: "center"
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                }}>
                    <span>Get Directions →</span>
                </button>
            </motion.div>

            <button onClick={handleOpenMaps} style={{
                position: "fixed",
                bottom: "32px",
                right: "32px",
                zIndex: 60,
                backgroundColor: "#FF2D87",
                color: "#FFFFFF",
                fontFamily: "Figtree",
                fontWeight: 500,
                fontSize: "13px",
                borderRadius: "999px",
                padding: "16px 32px",
                boxShadow: "0 8px 32px rgba(255,45,135,0.40)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "transform 200ms"
            }} onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
            }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}>
                <Navigation size={18} />
                <span>Launch GPS Directions</span>
            </button>
        </div>
    </section>;
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const FooterSection = () => {
    return <footer style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#0A0A0F",
        color: "#FFFFFF",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "96px",
        paddingBottom: "48px",
        paddingLeft: "clamp(24px,6vw,96px)",
        paddingRight: "clamp(24px,6vw,96px)"
    }}>
        <div style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1400px",
            aspectRatio: "2/1",
            pointerEvents: "none",
            opacity: 0.3,
            userSelect: "none"
        }}>
            <div style={{
                width: "100%",
                height: "100%",
                backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                maskImage: "linear-gradient(to top, transparent 0%, black 35%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 35%)"
            }} />
        </div>

        <div style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            gap: "0"
        }}>
            <section style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                maxWidth: "100%",
                marginBottom: "64px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px"
                }}>
                    <motion.p initial={{
                        opacity: 0,
                        y: 10
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.6
                    }} style={{
                        fontFamily: "Figtree",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.60)",
                        margin: 0
                    }}>
                        JOIN THE ECOSYSTEM
                    </motion.p>

                    <div style={{
                        maxWidth: "672px"
                    }}>
                        <h2 style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "clamp(44px,7vw,96px)",
                            color: "#FFFFFF",
                            lineHeight: 1.05,
                            letterSpacing: "-0.04em",
                            margin: 0
                        }}>
                            {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-word-${i}`} initial={{
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
                            }} style={{
                                display: "inline-block",
                                marginRight: "0.2em"
                            }}>
                                {word}
                            </motion.span>)}
                        </h2>
                    </div>

                    <motion.p initial={{
                        opacity: 0
                    }} whileInView={{
                        opacity: 1
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 1,
                        delay: 0.8
                    }} style={{
                        fontFamily: "Figtree",
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.45)",
                        maxWidth: "448px",
                        lineHeight: 1.75,
                        margin: 0
                    }}>
                        Summit invitations, leadership insights, and curated opportunities for Africa&apos;s most ambitious women - delivered directly to you.
                    </motion.p>
                </div>

                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.6,
                    delay: 1.0
                }} style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px"
                }}>
                    <button style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "16px 32px",
                        backgroundColor: "#FF2D87",
                        color: "#FFFFFF",
                        fontFamily: "Figtree",
                        fontSize: "18px",
                        fontWeight: 500,
                        border: "none",
                        borderRadius: "0",
                        cursor: "pointer",
                        transition: "filter 200ms ease-out"
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                    }}>
                        <span>Get in Touch</span>
                        <ArrowRight size={18} />
                    </button>
                    <button style={{
                        padding: "16px 32px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "#FFFFFF",
                        fontFamily: "Figtree",
                        fontSize: "18px",
                        fontWeight: 500,
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderRadius: "0",
                        cursor: "pointer",
                        transition: "background-color 200ms ease-out"
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                    }}>
                        About EmpowaWomen
                    </button>
                </motion.div>
            </section>

            <section style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                width: "100%"
            }}>
                {FOOTER_SECTION_ROWS.map(row => <div key={row.id} style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%"
                }} className="footer-section-row">
                    <span style={{
                        fontFamily: "Figtree",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.50)",
                        whiteSpace: "nowrap",
                        minWidth: "72px"
                    }}>
                        {row.label}
                    </span>
                    <div style={{
                        height: "1px",
                        flexGrow: 1,
                        backgroundColor: "rgba(255,255,255,0.10)"
                    }} />
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "24px",
                        justifyContent: "flex-end"
                    }}>
                        {row.links.map(link => <a key={link.id} href={link.href} style={{
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.45)",
                            textDecoration: "none",
                            transition: "color 200ms ease-out",
                            whiteSpace: "nowrap"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
                        }}>
                            {link.label}
                        </a>)}
                    </div>
                </div>)}

                <div style={{
                    paddingTop: "32px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0"
                }} className="footer-bottom-bar">
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "24px",
                        width: "100%"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px"
                        }}>
                            <EwLogomark size={28} />
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "18px",
                                fontWeight: 500,
                                letterSpacing: "0.02em"
                            }}>
                                <span style={{
                                    color: "#FFFFFF"
                                }}>Empowa</span>
                                <span style={{
                                    color: "#FF2D87"
                                }}>Women</span>
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.20)",
                                marginLeft: "8px"
                            }}>
                                © 2025 EmpowaWomen.
                            </span>
                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px"
                        }}>
                            {SOCIAL_ITEMS.map(({
                                id,
                                label,
                                Icon
                            }) => <a key={id} href="#" aria-label={label} style={{
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.10)",
                                color: "#FFFFFF",
                                textDecoration: "none",
                                transition: "background-color 300ms, color 300ms"
                            }} onMouseEnter={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.backgroundColor = "#FFFFFF";
                                el.style.color = "#0A0A0F";
                            }} onMouseLeave={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.backgroundColor = "rgba(255,255,255,0.05)";
                                el.style.color = "#FFFFFF";
                            }}>
                                    <Icon size={18} />
                                </a>)}
                        </div>
                    </div>

                    <p style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontStyle: "italic",
                        fontSize: "14px",
                        color: "#FF2D87",
                        textAlign: "center",
                        marginTop: "16px",
                        marginBottom: 0
                    }}>
                        Ignite Passion | Foster Growth | Drive Change
                    </p>
                </div>
            </section>
        </div>

        <style>{`
        @media (max-width: 767px) {
          .footer-section-row { flex-direction: column !important; align-items: flex-start !important; }
          .footer-bottom-bar > div { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>;
};

const ContactHero = () => {
    const HERO_WORDS = ["Join", "the", "Room", "Shaping", "Africa’s", "Economic", "Destiny."];

    const EXTENDED_LOGOS = [
        { id: "lg-1", name: "ABSA", src: "/absa-logo.png" },
        { id: "lg-2", name: "CCBSA", src: "/ccbsa.png" },
        { id: "lg-3", name: "Old Mutual", src: "/old_mutual_logo - Copy.png" },
        { id: "lg-4", name: "WRSETA", src: "/WRSETA.jpg" },
        { id: "lg-5", name: "EmpowaWomen", src: "/logo.png" }
    ];

    const headline = (
        <>
            {HERO_WORDS.map((word, index) => {
                const isDestiny = word === "Destiny.";
                return <motion.span key={`hero-word-${index}`} initial={{ opacity: 0, filter: "blur(10px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }} style={{ display: "inline-block", marginRight: "0.25em" }}>
                    {isDestiny ? <span><span style={{ textDecoration: "underline", textDecorationColor: "#FF2D87", textDecorationThickness: "3px", textUnderlineOffset: "6px", color: "#FFFFFF" }}>Destiny</span><span style={{ color: "#FF2D87" }}>.</span></span> : word}
                </motion.span>;
            })}
        </>
    );

    const bottomSection = (
        <div style={{ width: "100%", overflow: "hidden", position: "relative", maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 35, ease: "linear", repeat: Infinity }} style={{ display: "flex", gap: "80px", alignItems: "center", whiteSpace: "nowrap", width: "max-content" }}>
                {EXTENDED_LOGOS.map((logo, i) => <div key={`logo-${logo.id}-${i}`} style={{ flexShrink: 0, height: "72px", display: "flex", alignItems: "center" }}>
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
        </div>
    );

    return <UniversalHero
        bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=90"
        pillText="ROUTING HEADQUARTERS · CONTACT US"
        headline={headline}
        description="Whether you're exploring enterprise partnerships, inquiring about speaking opportunities, or looking to join our executive network, direct your inquiry below."
        primaryCtaText="Explore Programs"
        bottomSection={bottomSection}
    />;
};

// ─── Main Page Component ──────────────────────────────────────────────────────
export const EmpowaWomenContact = () => {
    return <div style={{
        minHeight: "100vh",
        fontFamily: "Figtree"
    }} className="selection:bg-[#FF2D87]/20 selection:text-[#FF2D87]">
        <main>
            <ContactHero />
            <SmartRoutingForm />
            <SlaStrip />
            <FaqAccordion />
            <PhysicalInfrastructure />
            <MapSection />
        </main>
    </div>;
};
