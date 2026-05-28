import * as React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { UniversalHero } from "./UniversalHero";
import { ArrowRight, Check, ChevronDown, ChevronUp, Mail, Building2, Camera, Link, MessageSquare, Video, Users, TrendingUp, Radio, Star } from "lucide-react";

// Assets
const logoMark = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLinkItem {
    id: string;
    label: string;
    href: string;
    hasDropdown?: boolean;
    isActive?: boolean;
}
interface LogoItem {
    id: string;
    name: string;
}
interface SectionLinkRow {
    id: string;
    label: string;
    links: FooterLink[];
}
interface FooterLink {
    id: string;
    label: string;
    href: string;
}
interface CorporateModule {
    id: string;
    title: string;
    description: string;
}
interface SeniorityBar {
    id: string;
    label: string;
    pct: number;
    color: string;
}
interface AudienceStat {
    id: string;
    metric: string;
    label: string;
    accent: string;
}
interface OutcomeCard {
    id: string;
    metric: string;
    accentColor: string;
    iconBg: string;
    label: string;
    desc: string;
}
interface TestimonialItem {
    id: string;
    quote: string;
    name: string;
    title: string;
    company: string;
    logoText: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLinkItem[] = [{
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
    hasDropdown: true
}, {
    id: "nav-academy",
    label: "Academy",
    href: "#"
}, {
    id: "nav-partners",
    label: "Partners",
    href: "#",
    isActive: true
}, {
    id: "nav-contact",
    label: "Contact",
    href: "#"
}];
const LOGOS: LogoItem[] = [{
    id: "logo-1",
    name: "ABSA"
}, {
    id: "logo-2",
    name: "DEPT. OF WOMEN"
}, {
    id: "logo-3",
    name: "STANDARD BANK"
}, {
    id: "logo-4",
    name: "ANGLO AMERICAN"
}, {
    id: "logo-5",
    name: "NEDBANK"
}, {
    id: "logo-6",
    name: "ESKOM"
}, {
    id: "logo-7",
    name: "MTN"
}, {
    id: "logo-8",
    name: "SASOL"
}, {
    id: "logo-9",
    name: "OLD MUTUAL"
}];
const EXTENDED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS];
const CORPORATE_MODULES: CorporateModule[] = [{
    id: "mod-1",
    title: "Masterclass & Workshop Partner",
    description: "Host intensive learning sessions led by your top executives for a curated audience of high-potential leaders."
}, {
    id: "mod-2",
    title: "Category Exclusivity Partner",
    description: "Command sole brand presence within your industry category across all platform touchpoints."
}, {
    id: "mod-3",
    title: "Executive Lounge Partner",
    description: "Exclusive hosting rights to the CXO networking lounge where high-level deals are brokered."
}, {
    id: "mod-4",
    title: "CXO Goodie Bag Partner",
    description: "Direct-to-hand delivery of your brand to Africa's most influential decision-makers."
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
const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];
const SOCIAL_LINKS = [{
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
const SENIORITY_BARS: SeniorityBar[] = [{
    id: "bar-1",
    label: "CXOs & C-Suite Executives",
    pct: 82,
    color: "#FF2D87"
}, {
    id: "bar-2",
    label: "Founders & Entrepreneurs",
    pct: 67,
    color: "#00B4A6"
}, {
    id: "bar-3",
    label: "Board Directors & Chairs",
    pct: 54,
    color: "#D97706"
}, {
    id: "bar-4",
    label: "Investors & Capital Allocators",
    pct: 38,
    color: "#6D28D9"
}];
const AUDIENCE_STATS: AudienceStat[] = [{
    id: "stat-1",
    metric: "10,000+",
    label: "Senior Delegates",
    accent: "#FF2D87"
}, {
    id: "stat-2",
    metric: "6+",
    label: "Annual Platforms",
    accent: "#00B4A6"
}, {
    id: "stat-3",
    metric: "9",
    label: "Provinces Covered",
    accent: "#D97706"
}, {
    id: "stat-4",
    metric: "450+",
    label: "Global Speakers",
    accent: "#6D28D9"
}];
const OUTCOME_CARDS: OutcomeCard[] = [{
    id: "oc-1",
    metric: "10,000+",
    accentColor: "#FF2D87",
    iconBg: "#FF2D87",
    label: "Delegate Impressions",
    desc: "Direct brand exposure to senior decision-makers across every summit touchpoint."
}, {
    id: "oc-2",
    metric: "450+",
    accentColor: "#00B4A6",
    iconBg: "#00B4A6",
    label: "C-Suite Contacts",
    desc: "Face-to-face access to CXOs, board chairs, founders, and investors at executive networking sessions."
}, {
    id: "oc-3",
    metric: "6",
    accentColor: "#D97706",
    iconBg: "#D97706",
    label: "Media Platforms",
    desc: "Cross-platform brand amplification across digital, social, broadcast, and print channels."
}, {
    id: "oc-4",
    metric: "R Millions",
    accentColor: "#6D28D9",
    iconBg: "#6D28D9",
    label: "In PR Value",
    desc: "Earned media value generated through summit coverage, thought leadership, and brand placements."
}];
const TESTIMONIALS: TestimonialItem[] = [{
    id: "t-1",
    quote: "Partnering with EmpowaWomen positioned our brand at the centre of executive conversations that directly shaped our ESG narrative and procurement pipeline.",
    name: "Head of Brand & Marketing",
    title: "Head of Brand & Marketing",
    company: "ABSA",
    logoText: "ABSA"
}, {
    id: "t-2",
    quote: "The delegate profile is unlike any other platform in Africa. These are real decision-makers with real budgets. The ROI from our activation was immediate and measurable.",
    name: "Chief Sustainability Officer",
    title: "Chief Sustainability Officer",
    company: "Standard Bank",
    logoText: "SB"
}, {
    id: "t-3",
    quote: "EmpowaWomen understands how to connect brands with the women shaping Africa's economy. Our partnership delivered thought leadership visibility we could not have achieved anywhere else.",
    name: "Head of Corporate Affairs",
    title: "Head of Corporate Affairs",
    company: "Anglo American",
    logoText: "AA"
}];
const TIER1_BENEFITS = ["Exclusive Naming Rights", "Opening Keynote Delivery", "Curated CXO Introductions", "Strategic PR & Media Amplification"];
const TIER2_BENEFITS = ["High-Impact Panel Participation", "Premium Exhibition Space", "B2B Lead Generation"];
const TIER2_BENEFIT_ROWS = [{
    id: "t2b-1",
    num: "01",
    title: "High-Impact Panel Participation",
    subtitle: "Keynote and panel positioning in front of 10,000+ senior delegates across the summit calendar."
}, {
    id: "t2b-2",
    num: "02",
    title: "Premium Exhibition Space",
    subtitle: "Dedicated brand activation zone within the executive networking floor for direct engagement."
}, {
    id: "t2b-3",
    num: "03",
    title: "B2B Lead Generation",
    subtitle: "Curated introductions and structured networking sessions with pre-qualified women-led enterprises."
}];
const WHAT_TO_EXPECT = ["A 30-minute strategic alignment conversation", "Tailored tier recommendation based on your objectives", "Access to the full 2026-2027 Partnership Prospectus", "Introduction to the EmpowaWomen leadership team"];

// ─── TopNav ───────────────────────────────────────────────────────────────────

const TopNav = () => {
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
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
            paddingLeft: "clamp(16px, 6vw, 80px)",
            paddingRight: "clamp(16px, 6vw, 80px)",
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
                <img src={logoMark} alt="EmpowaWomen logo mark" style={{
                    height: "32px",
                    width: "auto"
                }} />
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
                        color: link.isActive || hoveredLink === link.id ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
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
                            transform: link.isActive || hoveredLink === link.id ? "scaleX(1)" : "scaleX(0)",
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
            }}>
                <a href="#" style={{
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
                    display: "inline-flex",
                    alignItems: "center"
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
                }}>
                    <span style={{
                        position: "relative",
                        zIndex: 1
                    }}>Secure Your Seat</span>
                    <span style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "40%",
                        background: "rgba(255,255,255,0.15)",
                        transform: "skewX(-20deg) translateX(-100%)",
                        animation: "shimmerSlide 3s linear infinite",
                        pointerEvents: "none"
                    }} />
                </a>
            </div>
        </header>

        <style>{`
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
      `}</style>
    </div>;
};

// ─── Hero Section ─────────────────────────────────────────────────────────────

const HeroSection = () => {
    const HERO_WORDS = [{
        id: "hw-1",
        text: "Beyond",
        pink: false
    }, {
        id: "hw-2",
        text: "Event",
        pink: false
    }, {
        id: "hw-3",
        text: "Branding",
        pink: true
    }, {
        id: "hw-4",
        text: "Meaningful",
        pink: false
    }, {
        id: "hw-5",
        text: "Executive",
        pink: false
    }, {
        id: "hw-6",
        text: "Engagement",
        pink: true
    }];
    return <section style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0A0A0F",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: "80px"
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
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1920&q=90" alt="" className="w-full h-full object-cover" style={{
                    objectPosition: "center"
                }} />
            </motion.div>
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)"
            }} />
        </div>

        <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 2
        }} />

        <div style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "1400px",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
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
                    borderRadius: "999px",
                    padding: "8px 16px",
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
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        color: "rgba(255,255,255,0.60)",
                        textTransform: "uppercase"
                    }}>
                        CORPORATE BUDGET PORTAL · B2B ESG
                    </span>
                </motion.div>

                <h1 style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(52px, 8vw, 96px)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                    color: "#FFFFFF",
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto 28px auto"
                }}>
                    {HERO_WORDS.map((word, i) => <motion.span key={word.id} style={{
                        display: "inline-block",
                        marginRight: "0.22em"
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
                        {word.pink ? <span>
                            <span style={{
                                textDecoration: "underline",
                                textDecorationColor: "#FF2D87",
                                textDecorationThickness: "3px",
                                textUnderlineOffset: "6px",
                                color: "#FFFFFF"
                            }}>
                                {word.text}
                            </span>
                            <span style={{
                                color: "#FF2D87"
                            }}>.</span>
                        </span> : word.text}
                    </motion.span>)}
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
                    fontSize: "17px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.50)",
                    maxWidth: "580px",
                    margin: "0 auto 36px auto",
                    textAlign: "center",
                    lineHeight: 1.75
                }}>
                    Our platform delivers measurable commercial value through strategic visibility, thought leadership,
                    procurement integration, and long-term ecosystem positioning.
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
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    marginBottom: "48px"
                }}>
                    <a href="#" style={{
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
                        Download Partnership Prospectus
                    </a>
                    <a href="#" style={{
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
                        Book Discovery Call
                    </a>
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
                        x: ["0%", "-33.333%"]
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
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "12px",
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

        <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>;
};

// ─── 1. Delegate Audience Profile ─────────────────────────────────────────────

const DelegateAudienceProfile = () => {
    return <section style={{
        backgroundColor: "#F7F6F2",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        position: "relative",
        zIndex: 10,
        marginTop: "-72px",
        borderRadius: "40px 40px 0 0",
        boxShadow: "0 -24px 64px rgba(0,0,0,0.5)",
        overflow: "hidden"
    }}>
        <div style={{
            maxWidth: "1400px",
            margin: "0 auto"
        }}>
            {/* Top row */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "64px",
                flexWrap: "wrap",
                gap: "24px"
            }}>
                <div>
                    <motion.span initial={{
                        opacity: 0
                    }} whileInView={{
                        opacity: 1
                    }} viewport={{
                        once: true
                    }} style={{
                        fontFamily: "Figtree",
                        fontSize: "9px",
                        fontWeight: 600,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "#64748b",
                        display: "block"
                    }}>
                        WHO YOU REACH
                    </motion.span>
                    <motion.h2 initial={{
                        opacity: 0,
                        y: 16
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.7,
                        delay: 0.1
                    }} style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "clamp(32px, 4vw, 56px)",
                        letterSpacing: "-0.03em",
                        color: "#0A0A0F",
                        lineHeight: 1.1,
                        marginTop: "12px",
                        marginBottom: 0,
                        maxWidth: "640px"
                    }}>
                        Africa's most influential women decision-makers. In one room.
                    </motion.h2>
                </div>
                <motion.p initial={{
                    opacity: 0
                }} whileInView={{
                    opacity: 1
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7,
                    delay: 0.2
                }} style={{
                    fontFamily: "Figtree",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#64748b",
                    maxWidth: "340px",
                    lineHeight: 1.75,
                    margin: 0
                }}>
                    Every delegate is a senior decision-maker with direct purchasing authority, board influence, or
                    enterprise leadership responsibility.
                </motion.p>
            </div>

            {/* Two-column content */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "45fr 55fr",
                gap: "clamp(48px, 6vw, 80px)",
                alignItems: "start"
            }} className="audience-grid">
                {/* Left: Seniority bars */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "28px"
                }}>
                    {SENIORITY_BARS.map((bar, i) => <div key={bar.id}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "8px"
                        }}>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#0A0A0F"
                            }}>
                                {bar.label}
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "13px",
                                fontWeight: 300,
                                color: "#64748b"
                            }}>
                                {bar.pct}%
                            </span>
                        </div>
                        <div style={{
                            height: "10px",
                            backgroundColor: "rgba(15,23,42,0.08)",
                            borderRadius: "999px",
                            overflow: "hidden"
                        }}>
                            <motion.div initial={{
                                width: 0
                            }} whileInView={{
                                width: `${bar.pct}%`
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 1.2,
                                delay: i * 0.15,
                                ease: "easeOut"
                            }} style={{
                                height: "100%",
                                backgroundColor: bar.color,
                                borderRadius: "999px"
                            }} />
                        </div>
                    </div>)}
                </div>

                {/* Right: 2x2 stat cards */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px"
                }}>
                    {AUDIENCE_STATS.map((stat, i) => <motion.div key={stat.id} initial={{
                        opacity: 0,
                        y: 16
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.6,
                        delay: i * 0.1
                    }} whileHover={{
                        backgroundColor: i === 0 ? "rgba(255,45,135,0.06)" : i === 1 ? "rgba(0,180,166,0.06)" : i === 2 ? "rgba(217,119,6,0.06)" : "rgba(109,40,217,0.06)",
                        borderColor: i === 0 ? "rgba(255,45,135,0.25)" : i === 1 ? "rgba(0,180,166,0.25)" : i === 2 ? "rgba(217,119,6,0.25)" : "rgba(109,40,217,0.25)",
                        transition: {
                            duration: 0.25,
                            ease: "easeOut"
                        }
                    }} style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid rgba(15,23,42,0.06)",
                        borderRadius: "16px",
                        padding: "32px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        position: "relative",
                        cursor: "default"
                    }}>
                        <motion.div whileHover={{
                            scale: 1.25
                        }} transition={{
                            duration: 0.25,
                            ease: "easeOut"
                        }} style={{
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: stat.accent
                        }} />
                        <motion.p whileHover={{
                            color: stat.accent
                        }} transition={{
                            duration: 0.25,
                            ease: "easeOut"
                        }} style={{
                            fontFamily: "Figtree",
                            fontWeight: 200,
                            fontSize: "44px",
                            color: "#0A0A0F",
                            margin: 0,
                            letterSpacing: "-0.03em",
                            lineHeight: 1
                        }}>
                            {stat.metric}
                        </motion.p>
                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "13px",
                            fontWeight: 400,
                            color: "#64748b",
                            marginTop: "8px",
                            marginBottom: 0
                        }}>
                            {stat.label}
                        </p>
                    </motion.div>)}
                </div>
            </div>
        </div>

        <style>{`
        @media (max-width: 768px) {
          .audience-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>;
};

// ─── 3. Partner ROI Outcomes Strip ────────────────────────────────────────────

const PartnerROIOutcomesStrip = () => {
    const ICONS = [Users, TrendingUp, Radio, Star];
    return <section style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "96px",
        paddingBottom: "96px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)"
    }}>
        <div style={{
            maxWidth: "1400px",
            margin: "0 auto"
        }}>
            <motion.span initial={{
                opacity: 0
            }} whileInView={{
                opacity: 1
            }} viewport={{
                once: true
            }} style={{
                fontFamily: "Figtree",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                display: "block"
            }}>
                WHAT YOUR INVESTMENT DELIVERS
            </motion.span>
            <motion.h2 initial={{
                opacity: 0,
                y: 16
            }} whileInView={{
                opacity: 1,
                y: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.7,
                delay: 0.1
            }} style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 48px)",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: "64px"
            }}>
                Measurable outcomes. Not just visibility.
            </motion.h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px"
            }} className="roi-grid">
                {OUTCOME_CARDS.map((card, i) => {
                    const Icon = ICONS[i];
                    return <motion.div key={card.id} initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.6,
                        delay: i * 0.1
                    }} style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "20px",
                        padding: "32px",
                        transition: "background-color 300ms ease",
                        cursor: "default"
                    }} whileHover={{
                        backgroundColor: "rgba(255,255,255,0.07)"
                    }}>
                        <div style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            backgroundColor: card.iconBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Icon size={22} color="#FFFFFF" />
                        </div>
                        <p style={{
                            fontFamily: "Figtree",
                            fontWeight: 200,
                            fontSize: "clamp(32px, 3.5vw, 48px)",
                            color: card.accentColor,
                            letterSpacing: "-0.03em",
                            margin: "24px 0 0 0",
                            lineHeight: 1
                        }}>
                            {card.metric}
                        </p>
                        <p style={{
                            fontFamily: "Figtree",
                            fontWeight: 500,
                            fontSize: "14px",
                            color: "#FFFFFF",
                            marginTop: "8px",
                            marginBottom: 0
                        }}>
                            {card.label}
                        </p>
                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.40)",
                            marginTop: "8px",
                            marginBottom: 0,
                            lineHeight: 1.65
                        }}>
                            {card.desc}
                        </p>
                    </motion.div>;
                })}
            </div>
        </div>

        <style>{`
        @media (max-width: 900px) {
          .roi-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .roi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>;
};

// ─── 2. Partner Package Matrix (rebuilt) ──────────────────────────────────────

const PartnerPackageMatrix = () => {
    const [openAccordion, setOpenAccordion] = React.useState<string | null>("mod-1");
    return <section style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)"
    }}>
        <div style={{
            maxWidth: "1400px",
            margin: "0 auto"
        }}>
            {/* Header */}
            <motion.span initial={{
                opacity: 0
            }} whileInView={{
                opacity: 1
            }} viewport={{
                once: true
            }} style={{
                fontFamily: "Figtree",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                display: "block"
            }}>
                PARTNERSHIP TIERS
            </motion.span>
            <motion.h2 initial={{
                opacity: 0,
                y: 16
            }} whileInView={{
                opacity: 1,
                y: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.7,
                delay: 0.1
            }} style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(32px, 4vw, 56px)",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: 0
            }}>
                Choose your level of influence.
            </motion.h2>

            {/* TIER 1 — Full width architectural statement */}
            <motion.div initial={{
                opacity: 0,
                y: 24
            }} whileInView={{
                opacity: 1,
                y: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.8,
                delay: 0.2
            }} style={{
                marginTop: "64px",
                position: "relative",
                overflow: "hidden",
                minHeight: "360px",
                background: "linear-gradient(135deg, #1a0812 0%, #0A0A0F 60%)",
                border: "1px solid rgba(255,45,135,0.25)",
                borderRadius: "24px",
                padding: "clamp(40px, 5vw, 72px)",
                display: "flex",
                alignItems: "center"
            }}>
                {/* BG image */}
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1400&q=85" alt="" style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.10,
                    mixBlendMode: "luminosity",
                    pointerEvents: "none"
                }} />
                {/* Pink glow */}
                <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "384px",
                    height: "384px",
                    background: "radial-gradient(circle, rgba(255,45,135,0.12) 0%, transparent 70%)",
                    pointerEvents: "none"
                }} />

                {/* Content — left 60% */}
                <div style={{
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                    maxWidth: "60%"
                }} className="tier1-content">
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap"
                    }}>
                        <span style={{
                            backgroundColor: "#FF2D87",
                            color: "#FFFFFF",
                            fontFamily: "Figtree",
                            fontWeight: 600,
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            padding: "6px 16px",
                            borderRadius: "999px",
                            textTransform: "uppercase"
                        }}>
                            TIER 1
                        </span>
                        <h3 style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "28px",
                            color: "#FFFFFF",
                            letterSpacing: "-0.02em",
                            margin: 0
                        }}>
                            Title &amp; Naming Rights Partner™
                        </h3>
                    </div>

                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.75,
                        marginTop: "16px",
                        marginBottom: 0,
                        maxWidth: "520px"
                    }}>
                        The highest level of partnership positioning your organisation as the leading force driving women
                        leadership and economic growth within the selected industry stage.
                    </p>

                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginTop: "32px"
                    }}>
                        {TIER1_BENEFITS.map(benefit => <span key={benefit} style={{
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            fontFamily: "Figtree",
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.70)",
                            padding: "8px 16px",
                            borderRadius: "999px"
                        }}>
                            {benefit}
                        </span>)}
                    </div>

                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.40)",
                        fontStyle: "italic",
                        marginTop: "24px",
                        marginBottom: 0
                    }}>
                        ROI: Industry dominance, market authority, brand influence, and ecosystem leadership.
                    </p>
                </div>

                {/* CTA — right side */}
                <div style={{
                    position: "absolute",
                    right: "clamp(40px, 5vw, 72px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    flexShrink: 0
                }} className="tier1-cta">
                    <button style={{
                        backgroundColor: "#FF2D87",
                        color: "#FFFFFF",
                        fontFamily: "Figtree",
                        fontWeight: 500,
                        fontSize: "13px",
                        borderRadius: "999px",
                        padding: "12px 28px",
                        border: "none",
                        cursor: "pointer",
                        transition: "filter 200ms ease, box-shadow 200ms ease",
                        whiteSpace: "nowrap",
                        boxShadow: "0 4px 24px rgba(255,45,135,0.25)"
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(255,45,135,0.40)";
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(255,45,135,0.25)";
                    }}>
                        Enquire About Tier 1
                    </button>
                </div>
            </motion.div>

            {/* TIER 2 + TIER 3 — Two columns */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginTop: "16px"
            }} className="tier-lower-grid">
                {/* Tier 2 */}
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
                    delay: 0.1
                }} style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,180,166,0.25)",
                    borderRadius: "20px",
                    padding: "clamp(32px, 4vw, 40px)",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <span style={{
                        backgroundColor: "rgba(0,180,166,0.15)",
                        color: "#00B4A6",
                        fontFamily: "Figtree",
                        fontWeight: 600,
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        padding: "6px 16px",
                        borderRadius: "999px",
                        textTransform: "uppercase",
                        display: "inline-block",
                        alignSelf: "flex-start"
                    }}>
                        TIER 2
                    </span>
                    <h3 style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "24px",
                        color: "#FFFFFF",
                        letterSpacing: "-0.02em",
                        marginTop: "12px",
                        marginBottom: 0
                    }}>
                        Platinum Industry Partner™
                    </h3>
                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.50)",
                        lineHeight: 1.75,
                        marginTop: "16px",
                        marginBottom: 0
                    }}>
                        High-impact industry positioning with premium visibility, executive access, and measurable lead
                        generation across all summit platforms.
                    </p>
                    <div style={{
                        marginTop: "24px",
                        flexGrow: 1
                    }}>
                        {TIER2_BENEFIT_ROWS.map((row, idx) => <motion.div key={row.id} whileHover={{
                            backgroundColor: "rgba(0,180,166,0.05)"
                        }} transition={{
                            duration: 0.15,
                            ease: "easeOut"
                        }} style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "16px",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            borderTop: idx === 0 ? "none" : "1px solid rgba(0,180,166,0.12)",
                            cursor: "pointer"
                        }}>
                            <div style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "rgba(0,180,166,0.15)",
                                border: "1px solid rgba(0,180,166,0.30)",
                                borderRadius: "6px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                            }}>
                                <span style={{
                                    fontFamily: "Figtree",
                                    fontWeight: 300,
                                    fontSize: "13px",
                                    color: "#00B4A6"
                                }}>{row.num}</span>
                            </div>
                            <div>
                                <p style={{
                                    fontFamily: "Figtree",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    color: "#FFFFFF",
                                    margin: 0
                                }}>{row.title}</p>
                                <p style={{
                                    fontFamily: "Figtree",
                                    fontSize: "13px",
                                    color: "rgba(255,255,255,0.40)",
                                    marginTop: "2px",
                                    marginBottom: 0,
                                    lineHeight: 1.6
                                }}>{row.subtitle}</p>
                            </div>
                        </motion.div>)}
                    </div>
                    <div style={{
                        marginTop: "32px"
                    }}>
                        <button style={{
                            border: "1px solid #00B4A6",
                            color: "#00B4A6",
                            backgroundColor: "transparent",
                            fontFamily: "Figtree",
                            fontWeight: 500,
                            fontSize: "13px",
                            borderRadius: "999px",
                            padding: "12px 28px",
                            cursor: "pointer",
                            transition: "background-color 200ms ease"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(0,180,166,0.10)";
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                        }}>
                            Enquire About Tier 2
                        </button>
                    </div>
                </motion.div>

                {/* Tier 3 */}
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
                    delay: 0.2
                }} style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(217,119,6,0.25)",
                    borderRadius: "20px",
                    padding: "clamp(32px, 4vw, 40px)",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <span style={{
                        backgroundColor: "rgba(217,119,6,0.15)",
                        color: "#D97706",
                        fontFamily: "Figtree",
                        fontWeight: 600,
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        padding: "6px 16px",
                        borderRadius: "999px",
                        textTransform: "uppercase",
                        display: "inline-block",
                        alignSelf: "flex-start"
                    }}>
                        TIER 3
                    </span>
                    <h3 style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontSize: "24px",
                        color: "#FFFFFF",
                        letterSpacing: "-0.02em",
                        marginTop: "12px",
                        marginBottom: 0
                    }}>
                        Specialized Corporate Activation™
                    </h3>

                    <div style={{
                        marginTop: "24px",
                        flexGrow: 1
                    }}>
                        {CORPORATE_MODULES.map(module => <div key={module.id} style={{
                            borderBottom: "1px solid rgba(255,255,255,0.06)"
                        }}>
                            <button onClick={() => setOpenAccordion(openAccordion === module.id ? null : module.id)} style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "12px 0",
                                textAlign: "left"
                            }}>
                                <span style={{
                                    fontFamily: "Figtree",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    color: openAccordion === module.id ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.60)",
                                    transition: "color 150ms ease"
                                }}>
                                    {module.title}
                                </span>
                                {openAccordion === module.id ? <ChevronUp style={{
                                    width: "15px",
                                    height: "15px",
                                    color: "#D97706",
                                    flexShrink: 0
                                }} /> : <ChevronDown style={{
                                    width: "15px",
                                    height: "15px",
                                    color: "rgba(255,255,255,0.30)",
                                    flexShrink: 0
                                }} />}
                            </button>
                            <AnimatePresence>
                                {openAccordion === module.id && <motion.div initial={{
                                    height: 0,
                                    opacity: 0
                                }} animate={{
                                    height: "auto",
                                    opacity: 1
                                }} exit={{
                                    height: 0,
                                    opacity: 0
                                }} style={{
                                    overflow: "hidden"
                                }}>
                                    <p style={{
                                        fontFamily: "Figtree",
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.45)",
                                        lineHeight: 1.7,
                                        paddingBottom: "12px",
                                        marginTop: 0,
                                        marginBottom: 0
                                    }}>
                                        {module.description}
                                    </p>
                                </motion.div>}
                            </AnimatePresence>
                        </div>)}
                    </div>

                    <div style={{
                        marginTop: "32px"
                    }}>
                        <button style={{
                            border: "1px solid #D97706",
                            color: "#D97706",
                            backgroundColor: "transparent",
                            fontFamily: "Figtree",
                            fontWeight: 500,
                            fontSize: "13px",
                            borderRadius: "999px",
                            padding: "12px 28px",
                            cursor: "pointer",
                            transition: "background-color 200ms ease"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(217,119,6,0.10)";
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                        }}>
                            Explore Modules
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>

        <style>{`
        @media (max-width: 768px) {
          .tier-lower-grid { grid-template-columns: 1fr !important; }
          .tier1-content { max-width: 100% !important; }
          .tier1-cta { position: relative !important; top: auto !important; right: auto !important; transform: none !important; margin-top: 32px !important; }
        }
      `}</style>
    </section>;
};

// ─── 4. Partner Testimonials ──────────────────────────────────────────────────

const PartnerTestimonials = () => {
    return <section style={{
        backgroundColor: "#F7F6F2",
        paddingTop: "96px",
        paddingBottom: "96px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)"
    }}>
        <div style={{
            maxWidth: "1400px",
            margin: "0 auto"
        }}>
            <motion.span initial={{
                opacity: 0
            }} whileInView={{
                opacity: 1
            }} viewport={{
                once: true
            }} style={{
                fontFamily: "Figtree",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#64748b",
                display: "block"
            }}>
                PARTNER VOICES
            </motion.span>
            <motion.h2 initial={{
                opacity: 0,
                y: 16
            }} whileInView={{
                opacity: 1,
                y: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.7,
                delay: 0.1
            }} style={{
                fontFamily: "Figtree",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 48px)",
                letterSpacing: "-0.03em",
                color: "#0A0A0F",
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: 0
            }}>
                What our partners say.
            </motion.h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                marginTop: "48px"
            }} className="testimonials-grid">
                {TESTIMONIALS.map((t, i) => <motion.div key={t.id} initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.6,
                    delay: i * 0.1
                }} style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(15,23,42,0.06)",
                    borderRadius: "16px",
                    padding: "32px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    transition: "box-shadow 300ms ease",
                    display: "flex",
                    flexDirection: "column"
                }} whileHover={{
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                }}>
                    {/* 5 stars */}
                    <div style={{
                        display: "flex",
                        gap: "4px"
                    }}>
                        {[1, 2, 3, 4, 5].map(s => <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#FF2D87" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>)}
                    </div>

                    <p style={{
                        fontFamily: "Figtree",
                        fontWeight: 300,
                        fontStyle: "italic",
                        fontSize: "16px",
                        color: "rgba(10,10,15,0.80)",
                        lineHeight: 1.75,
                        marginTop: "16px",
                        marginBottom: 0,
                        flexGrow: 1
                    }}>
                        "{t.quote}"
                    </p>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginTop: "24px"
                    }}>
                        <div style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "8px",
                            backgroundColor: "rgba(15,23,42,0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        }}>
                            <span style={{
                                fontFamily: "Figtree",
                                fontWeight: 700,
                                fontSize: "9px",
                                color: "#64748b",
                                letterSpacing: "0.05em"
                            }}>
                                {t.logoText}
                            </span>
                        </div>
                        <div>
                            <p style={{
                                fontFamily: "Figtree",
                                fontWeight: 500,
                                fontSize: "14px",
                                color: "#0A0A0F",
                                margin: 0
                            }}>
                                {t.name}
                            </p>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "12px",
                                color: "#64748b",
                                margin: "2px 0 0 0"
                            }}>
                                {t.company}
                            </p>
                        </div>
                    </div>
                </motion.div>)}
            </div>
        </div>

        <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>;
};

// ─── 5. Lead Gen Form (elevated, no calendar) ─────────────────────────────────

const LeadGenForm = () => {
    return <section style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        position: "relative",
        overflow: "hidden"
    }}>
        {/* Decorative orbs */}
        <div style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,45,135,0.08)",
            filter: "blur(150px)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none"
        }} />
        <div style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(109,40,217,0.06)",
            filter: "blur(180px)",
            transform: "translate(25%, 25%)",
            pointerEvents: "none"
        }} />

        <div style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "42fr 58fr",
            gap: "clamp(48px, 6vw, 80px)",
            alignItems: "flex-start"
        }} className="leadgen-grid">
            {/* Left column */}
            <div>
                <motion.span initial={{
                    opacity: 0
                }} whileInView={{
                    opacity: 1
                }} viewport={{
                    once: true
                }} style={{
                    fontFamily: "Figtree",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    display: "block"
                }}>
                    START THE CONVERSATION
                </motion.span>
                <motion.h2 initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7,
                    delay: 0.1
                }} style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(32px, 4vw, 52px)",
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    marginTop: "16px",
                    marginBottom: 0
                }}>
                    Book a Partnership Discovery Session.
                </motion.h2>
                <motion.p initial={{
                    opacity: 0
                }} whileInView={{
                    opacity: 1
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7,
                    delay: 0.2
                }} style={{
                    fontFamily: "Figtree",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.50)",
                    lineHeight: 1.75,
                    marginTop: "24px",
                    marginBottom: 0,
                    maxWidth: "420px"
                }}>
                    Complete the form and a member of our partnerships team will contact you within 24 hours to
                    discuss your objectives, budget alignment, and the right partnership tier for your organisation.
                </motion.p>

                <div style={{
                    marginTop: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px"
                }}>
                    {WHAT_TO_EXPECT.map((item, i) => <motion.div key={item} initial={{
                        opacity: 0,
                        x: -12
                    }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.1
                    }} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px"
                    }}>
                        <div style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#FF2D87",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "2px"
                        }}>
                            <Check size={11} color="#FFFFFF" />
                        </div>
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.6
                        }}>
                            {item}
                        </span>
                    </motion.div>)}
                </div>

                <div style={{
                    marginTop: "48px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px"
                    }}>
                        <div style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        }}>
                            <Mail size={18} color="#FF2D87" />
                        </div>
                        <div>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "9px",
                                fontWeight: 600,
                                letterSpacing: "0.28em",
                                color: "rgba(255,255,255,0.30)",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: "3px"
                            }}>
                                EMAIL US
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.80)"
                            }}>
                                partnerships@empowawomen.co.za
                            </span>
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px"
                    }}>
                        <div style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "12px",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0
                        }}>
                            <Building2 size={18} color="#00B4A6" />
                        </div>
                        <div>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "9px",
                                fontWeight: 600,
                                letterSpacing: "0.28em",
                                color: "rgba(255,255,255,0.30)",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: "3px"
                            }}>
                                HEADQUARTERS
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.80)"
                            }}>
                                Sandton, Johannesburg
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right column — form card */}
            <motion.form initial={{
                opacity: 0,
                scale: 0.97
            }} whileInView={{
                opacity: 1,
                scale: 1
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.7,
                delay: 0.2
            }} style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "clamp(32px, 5vw, 40px)"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    {/* Email */}
                    <div>
                        <label style={{
                            fontFamily: "Figtree",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.40)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "8px",
                            marginLeft: "4px"
                        }}>
                            Corporate Officer Email
                        </label>
                        <input type="email" placeholder="your@company.com" style={{
                            width: "100%",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: "12px",
                            padding: "16px 20px",
                            color: "#FFFFFF",
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            outline: "none",
                            boxSizing: "border-box",
                            transition: "border-color 200ms ease"
                        }} onFocus={e => {
                            (e.currentTarget as HTMLInputElement).style.borderColor = "#FF2D87";
                        }} onBlur={e => {
                            (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.10)";
                        }} />
                    </div>

                    {/* Org name */}
                    <div>
                        <label style={{
                            fontFamily: "Figtree",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.40)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "8px",
                            marginLeft: "4px"
                        }}>
                            Institutional Entity Name
                        </label>
                        <input type="text" placeholder="Organisation name" style={{
                            width: "100%",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: "12px",
                            padding: "16px 20px",
                            color: "#FFFFFF",
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            outline: "none",
                            boxSizing: "border-box",
                            transition: "border-color 200ms ease"
                        }} onFocus={e => {
                            (e.currentTarget as HTMLInputElement).style.borderColor = "#FF2D87";
                        }} onBlur={e => {
                            (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.10)";
                        }} />
                    </div>

                    {/* Budget Stream */}
                    <div>
                        <label style={{
                            fontFamily: "Figtree",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.40)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "8px",
                            marginLeft: "4px"
                        }}>
                            Allocated Budget Stream
                        </label>
                        <select style={{
                            width: "100%",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: "12px",
                            padding: "16px 20px",
                            color: "rgba(255,255,255,0.80)",
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            outline: "none",
                            appearance: "none",
                            boxSizing: "border-box",
                            cursor: "pointer"
                        }}>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Select Budget Stream</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Corporate ESG Budget</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Enterprise Supplier Development</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Brand Marketing Budget</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>CSI Budget</option>
                        </select>
                    </div>

                    {/* Vertical Focus */}
                    <div>
                        <label style={{
                            fontFamily: "Figtree",
                            fontSize: "9px",
                            fontWeight: 600,
                            letterSpacing: "0.28em",
                            color: "rgba(255,255,255,0.40)",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "8px",
                            marginLeft: "4px"
                        }}>
                            Vertical Target Focus
                        </label>
                        <select style={{
                            width: "100%",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: "12px",
                            padding: "16px 20px",
                            color: "rgba(255,255,255,0.80)",
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            outline: "none",
                            appearance: "none",
                            boxSizing: "border-box",
                            cursor: "pointer"
                        }}>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Select Vertical</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Green Economy &amp; Mining</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>AI &amp; Digital Economy</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Capital &amp; Investment</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Infrastructure &amp; Property</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Agriculture</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Healthcare</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Media &amp; Creative</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Manufacturing &amp; Trade</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Retail &amp; Consumer</option>
                            <option style={{
                                backgroundColor: "#0A0A0F"
                            }}>Leadership &amp; Governance</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <div style={{
                        marginTop: "8px"
                    }}>
                        <button type="submit" style={{
                            width: "100%",
                            backgroundColor: "#FF2D87",
                            color: "#FFFFFF",
                            borderRadius: "999px",
                            padding: "16px 32px",
                            fontFamily: "Figtree",
                            fontWeight: 500,
                            fontSize: "15px",
                            border: "none",
                            cursor: "pointer",
                            transition: "filter 200ms ease",
                            boxShadow: "0 4px 24px rgba(255,45,135,0.20)"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                        }}>
                            Schedule My Discovery Session
                        </button>

                        <div style={{
                            textAlign: "center",
                            marginTop: "16px"
                        }}>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.40)",
                                margin: 0
                            }}>
                                <span>Prefer to download first? </span>
                                <a href="#" style={{
                                    color: "rgba(255,255,255,0.40)",
                                    textDecoration: "none",
                                    transition: "color 200ms ease"
                                }} onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.70)";
                                }} onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.40)";
                                }}>
                                    Download the 2026-2027 Prospectus →
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.form>
        </div>

        <style>{`
        @media (max-width: 900px) {
          .leadgen-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>;
};

// ─── Footer ────────────────────────────────────────────────────────────────────

const FooterCTA = () => {
    return <footer id="contact" style={{
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
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)"
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
                        START THE CONVERSATION
                    </motion.p>

                    <div style={{
                        maxWidth: "672px"
                    }}>
                        <h2 style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "clamp(44px, 7vw, 96px)",
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
                        Partnership opportunities, summit sponsorships, and ESG engagement frameworks — delivered to the
                        right corporate decision-maker.
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
                        <span>Download Prospectus</span>
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
                        Book a Discovery Call
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
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        whiteSpace: "nowrap",
                        minWidth: "80px"
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
                            fontWeight: 400,
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
                    marginTop: "16px",
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
                            flexDirection: "column",
                            gap: "8px"
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <img src={logoMark} alt="EmpowaWomen logo mark" style={{
                                    height: "28px",
                                    width: "auto"
                                }} />
                                <span style={{
                                    fontFamily: "Figtree",
                                    fontSize: "16px",
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
                            </div>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.25)",
                                margin: 0
                            }}>
                                © {new Date().getFullYear()} EmpowaWomen. All rights reserved.
                            </p>
                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px"
                        }}>
                            {SOCIAL_LINKS.map(({
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
          .footer-bottom-bar { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>;
};

const PartnershipsHero = () => {
    const HERO_WORDS = [
        { id: "hw-1", text: "Beyond", pink: false },
        { id: "hw-2", text: "Event", pink: false },
        { id: "hw-3", text: "Branding", pink: true },
        { id: "hw-4", text: "Meaningful", pink: false },
        { id: "hw-5", text: "Executive", pink: false },
        { id: "hw-6", text: "Engagement", pink: true }
    ];

    const EXTENDED_LOGOS = [
        { id: "lg-1", name: "GOOGLE" }, { id: "lg-2", name: "GOLDMAN SACHS" }, { id: "lg-3", name: "COCA-COLA" },
        { id: "lg-4", name: "FORBES" }, { id: "lg-5", name: "VOGUE" }, { id: "lg-6", name: "BLOOMBERG" },
        { id: "lg-7", name: "MCKINSEY" }, { id: "lg-8", name: "WORLD BANK" }
    ];

    const headline = (
        <>
            {HERO_WORDS.map((word, i) => <motion.span key={word.id} style={{ display: "inline-block", marginRight: "0.22em" }} initial={{ opacity: 0, filter: "blur(10px)", y: 20 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }} transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}>
                {word.pink ? <span><span style={{ textDecoration: "underline", textDecorationColor: "#FF2D87", textDecorationThickness: "3px", textUnderlineOffset: "6px", color: "#FFFFFF" }}>{word.text}</span><span style={{ color: "#FF2D87" }}>.</span></span> : word.text}
            </motion.span>)}
        </>
    );

    const bottomSection = (
        <div style={{ width: "100%", overflow: "hidden", position: "relative", maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 35, ease: "linear", repeat: Infinity }} style={{ display: "flex", gap: "80px", alignItems: "center", whiteSpace: "nowrap", width: "max-content" }}>
                {EXTENDED_LOGOS.map((logo, i) => <div key={`logo-${logo.id}-${i}`} style={{ flexShrink: 0, height: "72px", display: "flex", alignItems: "center" }}>
                    <span style={{ fontFamily: "Figtree", fontSize: "12px", fontWeight: 600, letterSpacing: "0.18em", color: "rgba(255,255,255,0.20)", cursor: "default", textTransform: "uppercase", transition: "color 200ms ease-out" }} onMouseEnter={e => { (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.60)"; }} onMouseLeave={e => { (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.20)"; }}>
                        {logo.name}
                    </span>
                </div>)}
            </motion.div>
        </div>
    );

    return <UniversalHero 
        bgImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1920&q=90"
        pillText="CORPORATE BUDGET PORTAL · B2B ESG"
        headline={headline}
        description="Our platform delivers measurable commercial value through strategic visibility, thought leadership, procurement integration, and long-term ecosystem positioning."
        primaryCtaText="Download Partnership Prospectus"
        secondaryCtaText="Book Discovery Call"
        bottomSection={bottomSection}
    />;
};

// ─── Main Page Component ───────────────────────────────────────────────────────

export const EmpowaWomenPartnerships = () => {
    return <div className="min-h-screen w-full" style={{
        backgroundColor: "#0A0A0F",
        color: "#FFFFFF",
        fontFamily: "Figtree, sans-serif"
    }}>
        <main>
            <PartnershipsHero />

            {/* 1. Delegate Audience Profile */}
            <DelegateAudienceProfile />

            {/* 3. ROI Outcomes Strip */}
            <PartnerROIOutcomesStrip />

            {/* 2. Partner Package Matrix */}
            <div id="tiers">
                <PartnerPackageMatrix />
            </div>

            {/* 4. Testimonials */}
            <PartnerTestimonials />

            {/* 5. Lead Gen Form */}
            <LeadGenForm />
        </main>
    </div>;
};
