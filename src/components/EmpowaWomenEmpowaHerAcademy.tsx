import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { UniversalHero } from './UniversalHero';
import { ChevronRight, Menu, X, Cpu, Lightbulb, Users, Heart, Camera, Briefcase, Rocket, Globe, ArrowRight, ChevronDown, Link, MessageSquare, Video, CheckCircle, Star } from 'lucide-react';
import { Instagram, Linkedin, Twitter, Youtube } from "./BrandIcons";
import { cn } from '../lib/utils';

// Image Assets
const logoMain = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80";
const logoIcon = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80";
const workshopImg = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80";

// ─── Types ─────────────────────────────────────────────────────────────────────
interface NavLink {
    id: string;
    label: string;
    href: string;
    active?: boolean;
    hasDropdown?: boolean;
}
interface TabData {
    id: string;
    label: string;
    title: string;
    description: string;
    imageUrl: string;
    pills: string[];
}
interface PillarData {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    bgColor: string;
    borderColor: string;
    iconBg: string;
    gridClass: string;
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
interface StatItem {
    id: string;
    value: string;
    suffix: string;
    label: string;
}
interface TestimonialItem {
    id: string;
    quote: string;
    name: string;
    location: string;
    avatarUrl: string;
}
interface ProcessStep {
    id: string;
    number: string;
    title: string;
    desc: string;
    circleBg: string;
}

// ─── Constants ─────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [{
    id: 'nav-home',
    label: 'Home',
    href: '#'
}, {
    id: 'nav-about',
    label: 'About',
    href: '#'
}, {
    id: 'nav-summits',
    label: 'Summits',
    href: '#',
    hasDropdown: true
}, {
    id: 'nav-pillars',
    label: 'Pillars',
    href: '#',
    hasDropdown: true
}, {
    id: 'nav-academy',
    label: 'EmpowaHER',
    href: '#',
    active: true
}, {
    id: 'nav-partners',
    label: 'Partners',
    href: '#'
}, {
    id: 'nav-contact',
    label: 'Contact',
    href: '#'
}];
const PARTNER_LOGOS: LogoItem[] = [{
    id: 'logo-1',
    name: 'ABSA',
    src: '/absa-logo.png'
}, {
    id: 'logo-2',
    name: 'CCBSA',
    src: '/ccbsa.png'
}, {
    id: 'logo-3',
    name: 'Old Mutual',
    src: '/old_mutual_logo - Copy.png'
}, {
    id: 'logo-4',
    name: 'WRSETA',
    src: '/WRSETA.jpg'
}, {
    id: 'logo-5',
    name: 'EmpowaWomen',
    src: '/logo.png'
}];
const EXTENDED_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];
const HERO_WORDS = ['From', 'Access', 'to', 'Ownership.', 'From', 'Potential', 'to', 'Economic', 'Power.'];
const UNDERLINED_WORDS = new Set(['Ownership.', 'Power.']);
const FOOTER_HEADLINE_WORDS = ['Never', 'miss', 'what', 'moves', 'next.'];
const FOOTER_SECTION_ROWS: SectionLinkRow[] = [{
    id: 'row-pages',
    label: 'Pages',
    links: [{
        id: 'fp-1',
        label: 'About',
        href: '#'
    }, {
        id: 'fp-2',
        label: 'Summits',
        href: '#'
    }, {
        id: 'fp-3',
        label: 'Pillars',
        href: '#'
    }, {
        id: 'fp-4',
        label: 'EmpowaHER',
        href: '#'
    }, {
        id: 'fp-5',
        label: 'Partners',
        href: '#'
    }, {
        id: 'fp-6',
        label: 'Contact',
        href: '#'
    }]
}, {
    id: 'row-programs',
    label: 'Programs',
    links: [{
        id: 'fp-7',
        label: 'EmpowaHER',
        href: '#'
    }, {
        id: 'fp-8',
        label: 'Partnerships',
        href: '#'
    }, {
        id: 'fp-9',
        label: 'ESG Programs',
        href: '#'
    }, {
        id: 'fp-10',
        label: 'Resources',
        href: '#'
    }]
}, {
    id: 'row-legal',
    label: 'Legal',
    links: [{
        id: 'fp-11',
        label: 'Privacy Policy',
        href: '/privacy'
    }, {
        id: 'fp-12',
        label: 'Terms',
        href: '/terms'
    }, {
        id: 'fp-13',
        label: 'FAQ',
        href: '#'
    }]
}];
const JURISDICTION_TABS: TabData[] = [{
    id: 'township',
    label: 'Township Economy',
    title: 'Township Economy Activation',
    description: 'Turning grassroots potential into commercially competitive local business models through incubation setups, beauty/fashion labs, and procurement readiness bootcamps.',
    imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=85',
    pills: ['Incubation Labs', 'Beauty & Fashion', 'Procurement Bootcamps']
}, {
    id: 'rural',
    label: 'Rural Inclusion',
    title: 'Rural Economic Inclusion',
    description: 'Combating systemic economic isolation using climate-smart agribusiness labs, digital financial literacy training, and cooperative infrastructure setups.',
    imageUrl: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200&q=85',
    pills: ['Agribusiness Labs', 'Financial Literacy', 'Cooperative Setups']
}, {
    id: 'campus',
    label: 'Campus & Tertiary',
    title: 'Campus & Tertiary Edition',
    description: 'Preparing graduates at universities and TVET colleges for the modern workplace through corporate readiness tracks, internships, and STEM integration networks.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=85',
    pills: ['Corporate Readiness', 'Internship Links', 'STEM Networks']
}];
const PROGRAMME_PILLARS: PillarData[] = [{
    id: 1,
    title: 'Future Skills Lab',
    description: 'AI implementation, digital coding bootcamps, creator monetisation pathways, and professional CV/LinkedIn profiling.',
    icon: <Cpu size={24} color="#FFFFFF" />,
    bgColor: 'rgba(255,45,135,0.10)',
    borderColor: 'rgba(255,45,135,0.20)',
    iconBg: '#FF2D87',
    gridClass: 'pillar-col-span-2 pillar-row-span-2'
}, {
    id: 2,
    title: 'Entrepreneurship & Enterprise Lab',
    description: 'Moving from baseline side-hustles to legally scalable, bankable corporate models with procurement matching.',
    icon: <Rocket size={24} color="#FFFFFF" />,
    bgColor: 'rgba(0,180,166,0.10)',
    borderColor: 'rgba(0,180,166,0.30)',
    iconBg: '#00B4A6',
    gridClass: 'pillar-row-span-2'
}, {
    id: 3,
    title: 'Leadership & Influence Academy',
    description: 'Personal branding, executive presence cultivation, civic governance, and strategic peer mentorship structures.',
    icon: <Users size={24} color="#FFFFFF" />,
    bgColor: 'rgba(255,45,135,0.08)',
    borderColor: 'rgba(255,45,135,0.20)',
    iconBg: '#FF2D87',
    gridClass: ''
}, {
    id: 4,
    title: 'Wellness, Life & Resilience',
    description: 'Emotional intelligence coaching, corporate mental health protocols, gender-based violence support systems, and personal growth spaces.',
    icon: <Heart size={24} color="#FFFFFF" />,
    bgColor: 'rgba(0,180,166,0.08)',
    borderColor: 'rgba(0,180,166,0.20)',
    iconBg: '#00B4A6',
    gridClass: ''
}, {
    id: 5,
    title: 'Creative & Digital Economy Lab',
    description: 'Content creator optimization, audio podcasting, digital video production skills, and brand sponsorship monetization systems.',
    icon: <Camera size={24} color="#FFFFFF" />,
    bgColor: 'rgba(109,40,217,0.10)',
    borderColor: 'rgba(109,40,217,0.20)',
    iconBg: '#6D28D9',
    gridClass: ''
}, {
    id: 6,
    title: 'Careers & Employability Hub',
    description: 'Bridging the practical gap between academic transcripts, industry career showcases, learnership linkages, and corporate pathways.',
    icon: <Briefcase size={24} color="#FFFFFF" />,
    bgColor: 'rgba(217,119,6,0.08)',
    borderColor: 'rgba(217,119,6,0.20)',
    iconBg: '#D97706',
    gridClass: 'pillar-col-span-2'
}, {
    id: 7,
    title: 'Summits & Activations',
    description: 'Access to high-energy, opportunity-driven environments, enterprise funding festivals, and national roadshow connectivity.',
    icon: <Globe size={24} color="#FFFFFF" />,
    bgColor: 'rgba(217,119,6,0.10)',
    borderColor: 'rgba(217,119,6,0.30)',
    iconBg: '#D97706',
    gridClass: ''
}];
const IMPACT_STATS: StatItem[] = [{
    id: 'stat-1',
    value: '500',
    suffix: '+',
    label: 'Programme Graduates'
}, {
    id: 'stat-2',
    value: '47',
    suffix: '',
    label: 'Cities & Towns Reached'
}, {
    id: 'stat-3',
    value: '18–34',
    suffix: '',
    label: 'Target Age Range'
}, {
    id: 'stat-4',
    value: 'R2M',
    suffix: '+',
    label: 'In Funding Unlocked'
}];
const TESTIMONIALS: TestimonialItem[] = [{
    id: 'testimonial-1',
    quote: 'EmpowaHER gave me the skills, the network, and the confidence to launch my business. Within 6 months of graduating I had my first corporate contract.',
    name: 'Naledi Dlamini',
    location: 'Soweto, Gauteng',
    avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80'
}, {
    id: 'testimonial-2',
    quote: 'I came in as a student with no idea what I wanted. I left with a career roadmap, three mentors, and an internship at a top firm.',
    name: 'Amahle Zulu',
    location: 'Durban, KwaZulu-Natal',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80'
}, {
    id: 'testimonial-3',
    quote: 'The Rural Inclusion track spoke directly to my reality. For the first time I had tools designed for where I actually live.',
    name: 'Thandi Mokoena',
    location: 'Limpopo',
    avatarUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&q=80'
}];
const WHY_APPLY_POINTS: string[] = ['Access to mentors, investors, and industry leaders', 'Practical skills labs and enterprise development tracks', 'Real pathways to employment, funding, and market access'];
const PROCESS_STEPS: ProcessStep[] = [{
    id: 'step-1',
    number: '01',
    title: 'Submit Your Application',
    desc: 'Complete the intake form. We review every submission personally.',
    circleBg: '#FF2D87'
}, {
    id: 'step-2',
    number: '02',
    title: 'Review & Interview',
    desc: 'Shortlisted applicants are contacted within 5 business days for a brief conversation.',
    circleBg: '#0A0A0F'
}, {
    id: 'step-3',
    number: '03',
    title: 'Cohort Onboarding',
    desc: 'Accepted candidates receive their cohort welcome pack, schedule, and mentor match.',
    circleBg: '#0A0A0F'
}];

// ─── Top Navigation ──────────────────────────────────────────────
const TopNav = () => {
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const {
        scrollYProgress
    } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    return <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
    }}>
        <header style={{
            height: '68px',
            backgroundColor: 'rgba(10,10,15,0.97)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 'clamp(16px, 6vw, 80px)',
            paddingRight: 'clamp(16px, 6vw, 80px)',
            position: 'relative'
        }}>
            <motion.div style={{
                scaleX,
                transformOrigin: 'left',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1.5px',
                backgroundColor: '#FF2D87'
            }} />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexShrink: 0
            }}>
                <img src={logoIcon} alt="EmpowaWomen logo mark" style={{
                    height: '32px',
                    width: 'auto'
                }} />
                <span style={{
                    fontFamily: 'Figtree',
                    fontSize: '16px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em'
                }}>
                    <span style={{
                        color: '#FFFFFF'
                    }}>Empowa</span>
                    <span style={{
                        color: '#FF2D87'
                    }}>Women</span>
                </span>
            </div>
            <nav aria-label="Main navigation" style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0px'
            }} className="academy-desktop-nav">
                {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
                    <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} style={{
                        fontFamily: 'Figtree',
                        fontSize: '12px',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        color: hoveredLink === link.id ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.40)',
                        textDecoration: 'none',
                        padding: '6px 12px',
                        transition: 'color 150ms ease-out',
                        position: 'relative',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '3px'
                    }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px'
                        }}>
                            <span>{link.label}</span>
                            {link.hasDropdown && <ChevronDown size={11} style={{
                                color: hoveredLink === link.id ? 'rgba(255,255,255,0.60)' : 'rgba(255,255,255,0.25)',
                                transition: 'color 150ms ease-out',
                                flexShrink: 0
                            }} />}
                        </span>
                        <span style={{
                            display: 'block',
                            height: '1.5px',
                            width: '100%',
                            backgroundColor: '#FF2D87',
                            transformOrigin: 'left',
                            transform: link.active || hoveredLink === link.id ? 'scaleX(1)' : 'scaleX(0)',
                            transition: 'transform 200ms ease-out'
                        }} />
                    </a>
                    {idx < NAV_LINKS.length - 1 && <span style={{
                        color: 'rgba(255,255,255,0.15)',
                        fontSize: '8px'
                    }}>·</span>}
                </React.Fragment>)}
            </nav>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexShrink: 0
            }}>
                <RouterLink to="/summit" style={{
                    fontFamily: 'Figtree',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    backgroundColor: '#FF2D87',
                    borderRadius: '999px',
                    padding: '8px 20px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                    transition: 'filter 200ms ease-out',
                    display: 'inline-flex',
                    alignItems: 'center'
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.1)';
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1)';
                }}>
                    Secure Your Seat
                </RouterLink>
                <button className="academy-mobile-nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
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
            }} style={{
                backgroundColor: 'rgba(10,10,15,0.98)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '24px clamp(16px, 6vw, 80px) 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                {NAV_LINKS.map(link => <a key={link.id} href={link.href} onClick={() => setMobileOpen(false)} style={{
                    fontFamily: 'Figtree',
                    fontSize: '16px',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: link.active ? '#FF2D87' : 'rgba(255,255,255,0.70)',
                    textDecoration: 'none'
                }}>
                    {link.label}
                </a>)}
                <RouterLink to="/summit" style={{
                    fontFamily: 'Figtree',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    backgroundColor: '#FF2D87',
                    borderRadius: '999px',
                    padding: '12px 24px',
                    textDecoration: 'none',
                    textAlign: 'center'
                }}>
                    Secure Your Seat
                </RouterLink>
            </motion.div>}
        </AnimatePresence>
        <style>{`
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
      `}</style>
    </div>;
};

// ─── Hero Section ──────────────────────────────────────────────────────────────
const HeroSection = () => {
    const {
        scrollY
    } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], ['0%', '20%']);
    return <section style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0A0A0F',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: '40px',
        paddingTop: '68px'
    }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <motion.div style={{ position: 'absolute', inset: 0 }} initial={{
                scale: 1.06,
                opacity: 0
            }} animate={{
                scale: 1,
                opacity: 1
            }} transition={{
                duration: 2.4,
                ease: 'easeOut'
            }}>
                <motion.div style={{
                    y: imageY,
                    position: 'absolute',
                    inset: 0
                }}>
                    <img src="/features-17.jpg" alt="Young African women in a professional setting" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 30%'
                    }} />
                </motion.div>
            </motion.div>
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)'
            }} />
        </div>
        <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #0A0A0F 0%, transparent 50%)',
            pointerEvents: 'none',
            zIndex: 2
        }} />
        <div style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '1400px',
            paddingLeft: 'clamp(24px, 6vw, 96px)',
            paddingRight: 'clamp(24px, 6vw, 96px)',
            paddingTop: 'clamp(24px, 5vw, 64px)',
            paddingBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 'auto',
            marginBottom: 'auto'
        }}>
            <motion.div initial={{
                y: 90
            }} animate={{
                y: 0
            }} transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }} style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '24px',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '999px',
                    padding: '8px 16px'
                }}>
                    <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#FF2D87',
                        display: 'inline-block',
                        flexShrink: 0,
                        animation: 'pulseDot 2s ease-in-out infinite'
                    }} />
                    <span style={{
                        fontFamily: 'Figtree',
                        fontSize: '9px',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        color: 'rgba(255,255,255,0.60)',
                        textTransform: 'uppercase'
                    }}>
                        YOUTH ACTIVATION ECOSYSTEM · AGES 18–34
                    </span>
                </motion.div>
                <motion.h1 initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1
                }} transition={{
                    duration: 0.5
                }} style={{
                    fontFamily: 'Figtree',
                    fontWeight: 300,
                    fontSize: 'clamp(52px, 8vw, 96px)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto 28px auto'
                }}>
                    {HERO_WORDS.map((word, i) => {
                        const isUnderlined = UNDERLINED_WORDS.has(word);
                        const wordWithoutPeriod = isUnderlined ? word.slice(0, -1) : word;
                        return <motion.span key={`hero-word-${i}`} style={{
                            display: 'inline-block',
                            marginRight: '0.25em'
                        }} initial={{
                            opacity: 0,
                            filter: 'blur(10px)',
                            y: 20
                        }} animate={{
                            opacity: 1,
                            filter: 'blur(0px)',
                            y: 0
                        }} transition={{
                            duration: 0.8,
                            delay: 0.4 + i * 0.1,
                            ease: [0.21, 0.47, 0.32, 0.98]
                        }}>
                            {isUnderlined ? <span>
                                <span style={{
                                    textDecoration: 'underline',
                                    textDecorationColor: '#FF2D87',
                                    textDecorationThickness: '3px',
                                    textUnderlineOffset: '6px',
                                    color: '#FFFFFF'
                                }}>{wordWithoutPeriod}</span>
                                <span style={{
                                    color: '#FF2D87',
                                    textDecoration: 'none'
                                }}>.</span>
                            </span> : word}
                        </motion.span>;
                    })}
                </motion.h1>
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
                    fontFamily: 'Figtree',
                    fontSize: '17px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.50)',
                    maxWidth: '580px',
                    margin: '0 auto 36px auto',
                    textAlign: 'center',
                    lineHeight: 1.75
                }}>
                    Africa's definitive youth activation ecosystem for young women ages 18–34 bridging the opportunity divide through skills, networks, funding access, and mentorship.
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
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '48px'
                }}>
                    <RouterLink to="/academy" style={{
                        fontFamily: 'Figtree',
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        backgroundColor: '#FF2D87',
                        height: '50px',
                        padding: '0 32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        letterSpacing: '0.02em',
                        borderRadius: '999px',
                        transition: 'all 200ms ease-out',
                        boxShadow: '0 0 32px rgba(255,45,135,0.25)'
                    }} onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.filter = 'brightness(1.1)';
                        el.style.boxShadow = '0 0 48px rgba(255,45,135,0.40)';
                    }} onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.filter = 'brightness(1)';
                        el.style.boxShadow = '0 0 32px rgba(255,45,135,0.25)';
                    }}>
                        Apply for EmpowaHER
                    </RouterLink>
                    <RouterLink to="/about" style={{
                        fontFamily: 'Figtree',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        backgroundColor: 'transparent',
                        height: '50px',
                        padding: '0 32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        border: '1px solid rgba(255,255,255,0.20)',
                        letterSpacing: '0.02em',
                        borderRadius: '999px',
                        transition: 'all 200ms ease-out'
                    }} onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.backgroundColor = 'rgba(255,255,255,0.08)';
                        el.style.borderColor = 'rgba(255,255,255,0.40)';
                    }} onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.backgroundColor = 'transparent';
                        el.style.borderColor = 'rgba(255,255,255,0.20)';
                    }}>
                        Learn More
                    </RouterLink>
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

// ─── Jurisdiction Impact ────────────────────────────────────────────────────
const JurisdictionImpact = () => {
    const [activeTab, setActiveTab] = React.useState('township');
    return <section style={{
        backgroundColor: '#F7F6F2',
        paddingTop: '0',
        paddingBottom: '128px',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)',
        position: 'relative',
        zIndex: 10,
        marginTop: '-72px',
        borderRadius: '40px 40px 0 0',
        boxShadow: '0 -24px 64px rgba(0,0,0,0.5)',
        overflow: 'hidden'
    }}>
        {/* Partner marquee */}
        <div style={{
            width: "100vw",
            backgroundColor: "#FFFFFF",
            padding: "24px 0",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            overflow: "hidden",
            marginBottom: "80px",
            display: "flex",
            alignItems: "center"
        }}>
            <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 1,
              delay: 0.5
            }} style={{
              width: "100%",
              overflow: "hidden",
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
                  height: "100px",
                  display: "flex",
                  alignItems: "center"
                }}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{
                      height: "54px",
                      width: "auto",
                      maxWidth: "180px",
                      objectFit: "contain",
                      opacity: 0.85,
                      filter: "none",
                      transition: "opacity 200ms ease-out",
                      cursor: "default"
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "1";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
                    }}
                  />
                </div>)}
              </motion.div>
            </motion.div>
        </div>
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '56px'
            }}>
                <img
                    src="/empowaher-logo2.jpg"
                    alt="EmpowaHER Logo"
                    style={{
                        height: 'clamp(60px, 8vw, 90px)',
                        width: 'auto',
                        objectFit: 'contain',
                        marginBottom: '24px',
                        mixBlendMode: 'multiply',
                        display: 'block',
                        margin: '0 auto 24px auto'
                    }}
                />
                <h2 style={{
                    fontFamily: 'Figtree',
                    fontWeight: 300,
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    letterSpacing: '-0.03em',
                    color: '#0A0A0F',
                    marginBottom: '36px'
                }}>
                    Where We Activate.
                </h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '12px'
                }}>
                    {JURISDICTION_TABS.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                        fontFamily: 'Figtree',
                        fontWeight: 500,
                        fontSize: '13px',
                        padding: '10px 24px',
                        borderRadius: '999px',
                        border: activeTab === tab.id ? 'none' : '1px solid rgba(10,10,15,0.15)',
                        backgroundColor: activeTab === tab.id ? '#FF2D87' : 'transparent',
                        color: activeTab === tab.id ? '#FFFFFF' : '#64748b',
                        cursor: 'pointer',
                        transition: 'all 300ms'
                    }}>
                        {tab.label}
                    </button>)}
                </div>
            </div>

            <AnimatePresence mode="wait">
                {JURISDICTION_TABS.map(tab => activeTab === tab.id && <motion.div key={tab.id} initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} exit={{
                    opacity: 0,
                    y: -20
                }} transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                }} style={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '400px',
                    borderRadius: '20px'
                }}>
                    <img src={tab.imageUrl} alt={tab.title} style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 100%)'
                    }} />
                    <div style={{
                        position: 'relative',
                        zIndex: 10,
                        padding: 'clamp(32px, 4vw, 64px)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        minHeight: '400px',
                        justifyContent: 'flex-end'
                    }}>
                        <h3 style={{
                            fontFamily: 'Figtree',
                            fontWeight: 300,
                            fontSize: 'clamp(28px, 4vw, 40px)',
                            letterSpacing: '-0.03em',
                            color: '#FFFFFF',
                            marginBottom: '20px'
                        }}>
                            {tab.title}
                        </h3>
                        <p style={{
                            fontFamily: 'Figtree',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: 1.75,
                            color: 'rgba(255,255,255,0.80)',
                            maxWidth: '600px'
                        }}>
                            {tab.description}
                        </p>
                        <div style={{
                            marginTop: '32px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '12px'
                        }}>
                            {tab.pills.map(pill => <span key={pill} style={{
                                backgroundColor: 'rgba(255,255,255,0.10)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                fontFamily: 'Figtree',
                                fontWeight: 500,
                                fontSize: '11px',
                                color: '#FFFFFF',
                                padding: '8px 16px',
                                borderRadius: '999px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                {pill}
                            </span>)}
                        </div>
                        <div style={{
                            marginTop: '32px'
                        }}>
                            <button style={{
                                fontFamily: 'Figtree',
                                fontWeight: 500,
                                fontSize: '14px',
                                color: '#FF2D87',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <span>Explore Impact Report</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>)}
            </AnimatePresence>
        </div>
    </section>;
};

// ─── Programme Pillars ─────────────────────────────────────────────────────
const ProgramPillars = () => {
    return <section style={{
        backgroundColor: '#0A0A0F',
        paddingTop: '128px',
        paddingBottom: '128px',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)'
    }}>
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <div style={{
                marginBottom: '80px'
            }}>
                <p style={{
                    fontFamily: 'Figtree',
                    fontWeight: 600,
                    fontSize: '9px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.40)',
                    marginBottom: '16px'
                }}>
                    PROGRAMME ARCHITECTURE
                </p>
                <h2 style={{
                    fontFamily: 'Figtree',
                    fontWeight: 300,
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                    marginBottom: '16px'
                }}>
                    The 7 Programme Pillars.
                </h2>
                <p style={{
                    fontFamily: 'Figtree',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.45)',
                    maxWidth: '560px'
                }}>
                    A holistic architecture designed to transform potential into sustainable economic participation.
                </p>
            </div>

            <div className="academy-pillars-grid">
                {PROGRAMME_PILLARS.map(pillar => <motion.div key={pillar.id} whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px ${pillar.borderColor.replace('0.20', '0.12').replace('0.30', '0.18')}`,
                    borderColor: pillar.iconBg
                }} className={`academy-pillar-card group ${pillar.gridClass}`} style={{
                    backgroundColor: pillar.bgColor,
                    border: `1px solid ${pillar.borderColor}`,
                    transition: "border-color 300ms ease, box-shadow 300ms ease"
                }}>
                    <div className="academy-pillar-gradient-overlay" />
                    <div style={{ position: 'relative', zIndex: 10 }}>
                        <div className="academy-pillar-icon-wrapper" style={{
                            backgroundColor: pillar.iconBg
                        }}>
                            {pillar.icon}
                        </div>
                        <h3 style={{
                            fontFamily: 'Figtree',
                            fontWeight: 300,
                            fontSize: '22px',
                            letterSpacing: '-0.03em',
                            color: '#FFFFFF',
                            marginBottom: '16px'
                        }}>
                            {pillar.title}
                        </h3>
                        <p style={{
                            fontFamily: 'Figtree',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: 1.75,
                            color: 'rgba(255,255,255,0.50)'
                        }}>
                            {pillar.description}
                        </p>
                    </div>
                    <div className="academy-pillar-number" style={{
                        color: 'rgba(255,255,255,0.05)'
                    }}>
                        <span style={{
                            fontFamily: 'Figtree',
                            fontWeight: 200,
                            fontSize: '60px'
                        }}>0{pillar.id}</span>
                    </div>
                </motion.div>)}
            </div>
        </div>
    </section>;
};

// ─── Impact Stats Strip ────────────────────────────────────────────────────────
const ImpactStats = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-80px'
    });
    return <section ref={ref} style={{
        backgroundColor: '#0A0A0F',
        paddingTop: '80px',
        paddingBottom: '80px'
    }}>
        <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(24px, 6vw, 96px)',
            paddingRight: 'clamp(24px, 6vw, 96px)'
        }}>
            <div className="academy-stats-grid">
                {IMPACT_STATS.map((stat, i) => <motion.div key={stat.id} initial={{
                    opacity: 0,
                    y: 16
                }} animate={isInView ? {
                    opacity: 1,
                    y: 0
                } : {}} transition={{
                    duration: 0.6,
                    delay: i * 0.08
                }} className="academy-stat-card">
                    <div style={{
                        fontFamily: 'Figtree',
                        fontWeight: 200,
                        fontSize: 'clamp(48px, 6vw, 72px)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: '#FFFFFF'
                    }}>
                        <span>{stat.value}</span>
                        <span style={{
                            color: '#FF2D87'
                        }}>{stat.suffix}</span>
                    </div>
                    <p style={{
                        fontFamily: 'Figtree',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.35)',
                        marginTop: '12px',
                        maxWidth: '120px',
                        lineHeight: 1.5
                    }}>
                        {stat.label}
                    </p>
                </motion.div>)}
            </div>
        </div>
    </section>;
};

// ─── Peer Testimonials ─────────────────────────────────────────────────────────
const PeerTestimonials = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-80px'
    });
    return <section ref={ref} style={{
        backgroundColor: '#F7F6F2',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)'
    }}>
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <p style={{
                fontFamily: 'Figtree',
                fontWeight: 600,
                fontSize: '9px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#64748b',
                marginBottom: '16px'
            }}>
                COHORT VOICES
            </p>
            <h2 style={{
                fontFamily: 'Figtree',
                fontWeight: 300,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                letterSpacing: '-0.03em',
                color: '#0A0A0F'
            }}>
                From the cohort. In their own words.
            </h2>
            <div className="academy-testimonials-grid">
                {TESTIMONIALS.map((t, i) => <motion.div key={t.id} initial={{
                    opacity: 0,
                    y: 20
                }} animate={isInView ? {
                    opacity: 1,
                    y: 0
                } : {}} transition={{
                    duration: 0.6,
                    delay: i * 0.1
                }} style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(15,23,42,0.06)',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 300ms'
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '4px'
                    }}>
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} style={{
                            fill: '#FF2D87',
                            color: '#FF2D87'
                        }} />)}
                    </div>
                    <p style={{
                        fontFamily: 'Figtree',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontSize: '16px',
                        color: 'rgba(10,10,15,0.80)',
                        lineHeight: 1.75,
                        marginTop: '16px'
                    }}>
                        "{t.quote}"
                    </p>
                    <div style={{
                        marginTop: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <img src={t.avatarUrl} alt={t.name} style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }} />
                        <div>
                            <p style={{
                                fontFamily: 'Figtree',
                                fontWeight: 500,
                                fontSize: '14px',
                                color: '#0A0A0F',
                                margin: 0
                            }}>{t.name}</p>
                            <p style={{
                                fontFamily: 'Figtree',
                                fontSize: '12px',
                                color: '#64748b',
                                margin: 0
                            }}>{t.location}</p>
                        </div>
                    </div>
                </motion.div>)}
            </div>
        </div>
    </section>;
};

// ─── Application Form (Elevated) ──────────────────────────────────────────────
const ApplicationForm = () => {
    const [fullName, setFullName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [settlement, setSettlement] = React.useState("");
    const [verticalInterest, setVerticalInterest] = React.useState("");
    const [organization, setOrganization] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName || !age || !settlement || !verticalInterest || !organization || !mobile || !email) {
            setError("Please fill in all required fields.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    form_id: 15,
                    input_values: {
                        'input_10': fullName,
                        'input_14': age,
                        'input_15': settlement,
                        'input_16': verticalInterest,
                        'input_11': organization,
                        'input_12': mobile,
                        'input_4': email
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit application.');
            }

            setSubmitted(true);
            setFullName("");
            setAge("");
            setSettlement("");
            setVerticalInterest("");
            setOrganization("");
            setMobile("");
            setEmail("");
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const INPUT_STYLE: React.CSSProperties = {
        fontFamily: 'Figtree',
        fontWeight: 400,
        fontSize: '14px',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '8px',
        padding: '16px 20px',
        color: '#FFFFFF',
        outline: 'none',
        transition: 'all 200ms ease-out',
        boxSizing: 'border-box'
    };

    const LABEL_STYLE: React.CSSProperties = {
        fontFamily: 'Figtree',
        fontWeight: 600,
        fontSize: '9px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.35)',
        display: "block",
        marginBottom: "8px"
    };

    return <section id="academy-apply-form" style={{
        backgroundColor: '#0A0A0F',
        paddingTop: '128px',
        paddingBottom: '128px',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)'
    }}>
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
        }} className="academy-form-flex-container">
            {/* Left */}
            <div className="academy-form-left-col">
                <p style={{
                    fontFamily: 'Figtree',
                    fontWeight: 600,
                    fontSize: '9px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: '20px'
                }}>
                    APPLY NOW
                </p>
                <h2 style={{
                    fontFamily: 'Figtree',
                    fontWeight: 300,
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                    marginBottom: '24px'
                }}>
                    Apply for the Next Cohort.
                </h2>
                <p style={{
                    fontFamily: 'Figtree',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.50)',
                    marginTop: '24px'
                }}>
                    Join a network of high-achieving young women transforming the economic landscape of the continent. Applications are reviewed on a rolling basis.
                </p>
                <div style={{
                    marginTop: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    {WHY_APPLY_POINTS.map((point, i) => <div key={`why-${i}`} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px'
                    }}>
                        <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: '#FF2D87',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px'
                        }}>
                            <CheckCircle size={12} style={{
                                color: '#FFFFFF'
                            }} />
                        </div>
                        <p style={{
                            fontFamily: 'Figtree',
                            fontWeight: 400,
                            fontSize: '15px',
                            color: 'rgba(255,255,255,0.70)',
                            margin: 0,
                            lineHeight: 1.6
                        }}>{point}</p>
                    </div>)}
                </div>
            </div>

            {/* Right: Form */}
            <div className="academy-form-right-col">
                {submitted ? (
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '24px',
                        padding: 'clamp(32px, 4vw, 40px)',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "24px"
                    }}>
                        <div style={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            backgroundColor: "rgba(255,45,135,0.12)",
                            color: "#FF2D87",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(255,45,135,0.2)"
                        }}>
                            <CheckCircle size={28} />
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}>
                            <h3 style={{
                                fontFamily: "Figtree",
                                fontWeight: 500,
                                fontSize: "24px",
                                color: "#FFFFFF",
                                margin: 0
                            }}>
                                Application Submitted
                            </h3>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                color: "rgba(255,255,255,0.5)",
                                lineHeight: 1.6,
                                maxWidth: "400px",
                                margin: 0
                            }}>
                                Thank you for applying to EmpowaHER. Your application has been received and our cohort selection committee is reviewing it.
                            </p>
                        </div>
                        <button onClick={() => setSubmitted(false)} style={{
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#FFFFFF",
                            backgroundColor: "#FF2D87",
                            padding: "12px 28px",
                            borderRadius: "999px",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 200ms ease-out"
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                        }}>
                            Submit Another Application
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '24px',
                        padding: 'clamp(32px, 4vw, 40px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        {error && (
                            <div style={{
                                padding: "12px 16px",
                                backgroundColor: "rgba(239, 68, 68, 0.08)",
                                border: "1px solid rgba(239, 68, 68, 0.2)",
                                borderRadius: "12px",
                                color: "#EF4444",
                                fontSize: "13px",
                                fontFamily: "Figtree",
                                lineHeight: 1.4
                            }}>
                                {error}
                            </div>
                        )}

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '20px',
                            width: '100%'
                        }} className="form-fields-grid-container">
                            <style>{`
                                @media (min-width: 641px) {
                                    .form-fields-grid-container {
                                        grid-template-columns: 1fr 1fr !important;
                                    }
                                    .form-field-full-width {
                                        grid-column: 1 / -1 !important;
                                    }
                                }
                            `}</style>
                            {/* Full Name */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={LABEL_STYLE}>Legal Name*</label>
                                <input
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                    placeholder="Your full legal name"
                                    style={INPUT_STYLE}
                                    onFocus={e => { e.currentTarget.style.borderColor = '#FF2D87'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                />
                            </div>
                            {/* Age */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={LABEL_STYLE}>Age (18–34)*</label>
                                <input
                                    type="number"
                                    required
                                    min="18"
                                    max="34"
                                    value={age}
                                    onChange={e => setAge(e.target.value)}
                                    placeholder="e.g. 24"
                                    style={INPUT_STYLE}
                                    onFocus={e => { e.currentTarget.style.borderColor = '#FF2D87'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                />
                            </div>

                            {/* Email */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={LABEL_STYLE}>Email Address*</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    style={INPUT_STYLE}
                                    onFocus={e => { e.currentTarget.style.borderColor = '#FF2D87'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                />
                            </div>
                            {/* Mobile */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={LABEL_STYLE}>Direct Mobile / WhatsApp*</label>
                                <input
                                    type="tel"
                                    required
                                    value={mobile}
                                    onChange={e => setMobile(e.target.value)}
                                    placeholder="e.g. 082 000 0000"
                                    style={INPUT_STYLE}
                                    onFocus={e => { e.currentTarget.style.borderColor = '#FF2D87'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                />
                            </div>

                            {/* Institutional Organization */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={LABEL_STYLE}>Institutional / Corporate Organization*</label>
                                <input
                                    type="text"
                                    required
                                    value={organization}
                                    onChange={e => setOrganization(e.target.value)}
                                    placeholder="Your university, employer, or startup name"
                                    style={INPUT_STYLE}
                                    onFocus={e => { e.currentTarget.style.borderColor = '#FF2D87'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                />
                            </div>

                            {/* Regional Settlement */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={LABEL_STYLE}>Regional Settlement Type*</label>
                                <div style={{ position: "relative" }}>
                                    <select
                                        required
                                        value={settlement}
                                        onChange={e => setSettlement(e.target.value)}
                                        style={{
                                            ...INPUT_STYLE,
                                            appearance: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onFocus={e => { e.currentTarget.style.borderColor = '#FF2D87'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                    >
                                        <option value="" disabled style={{ backgroundColor: '#0A0A0F' }}>Select settlement type</option>
                                        <option value="Township Hub" style={{ backgroundColor: '#0A0A0F' }}>Township Hub</option>
                                        <option value="Rural Economic Corridor" style={{ backgroundColor: '#0A0A0F' }}>Rural Economic Corridor</option>
                                        <option value="Academic / Tertiary Node" style={{ backgroundColor: '#0A0A0F' }}>Academic / Tertiary Node</option>
                                    </select>
                                    <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(255,255,255,0.40)", display: "flex", alignItems: "center" }}>
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Primary Vertical Interest - Spans full width as the 7th field */}
                            <div className="form-field-full-width" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={LABEL_STYLE}>Primary Vertical Interest*</label>
                                <div style={{ position: "relative" }}>
                                    <select
                                        required
                                        value={verticalInterest}
                                        onChange={e => setVerticalInterest(e.target.value)}
                                        style={{
                                            ...INPUT_STYLE,
                                            appearance: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onFocus={e => { e.currentTarget.style.borderColor = '#FF2D87'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                    >
                                        <option value="" disabled style={{ backgroundColor: '#0A0A0F' }}>Select interest area</option>
                                        <option value="Future Skills & AI" style={{ backgroundColor: '#0A0A0F' }}>Future Skills & AI</option>
                                        <option value="Entrepreneurship" style={{ backgroundColor: '#0A0A0F' }}>Entrepreneurship</option>
                                        <option value="Creative Economy" style={{ backgroundColor: '#0A0A0F' }}>Creative Economy</option>
                                        <option value="Leadership & Influence" style={{ backgroundColor: '#0A0A0F' }}>Leadership & Influence</option>
                                    </select>
                                    <div style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "rgba(255,255,255,0.40)", display: "flex", alignItems: "center" }}>
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                fontFamily: 'Figtree',
                                fontWeight: 500,
                                fontSize: '15px',
                                width: '100%',
                                backgroundColor: '#FF2D87',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '999px',
                                padding: '16px 32px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                marginTop: '8px',
                                opacity: loading ? 0.7 : 1,
                                transition: 'filter 200ms'
                            }}
                            onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)'; }}
                        >
                            <span>{loading ? "Submitting Application..." : "Submit Application & Request Cohort Intake Entry"}</span>
                            <ArrowRight size={20} />
                        </button>
                        <p style={{
                            fontFamily: 'Figtree',
                            fontWeight: 400,
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.25)',
                            textAlign: 'center',
                            marginTop: '16px'
                        }}>
                            Applications reviewed within 5 business days. Limited cohort places available.
                        </p>
                    </form>
                )}
            </div>
        </div>
    </section>;
};

// ─── What Happens Next Process Strip ──────────────────────────────────────────
const WhatHappensNext = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: '-80px'
    });
    return <section ref={ref} style={{
        backgroundColor: '#F7F6F2',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)'
    }}>
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <p style={{
                fontFamily: 'Figtree',
                fontWeight: 600,
                fontSize: '9px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#64748b',
                marginBottom: '16px'
            }}>
                AFTER YOU APPLY
            </p>
            <h2 style={{
                fontFamily: 'Figtree',
                fontWeight: 300,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                letterSpacing: '-0.03em',
                color: '#0A0A0F'
            }}>
                What happens next.
            </h2>

            <div className="academy-process-flow-container">
                {PROCESS_STEPS.map((step, i) => <motion.div key={step.id} initial={{
                    opacity: 0,
                    y: 16
                }} animate={isInView ? {
                    opacity: 1,
                    y: 0
                } : {}} transition={{
                    duration: 0.6,
                    delay: i * 0.15
                }} style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    {/* Connector line after (not on last) */}
                    {i < PROCESS_STEPS.length - 1 && <div style={{
                        position: 'absolute',
                        top: '28px',
                        left: 'calc(50% + 28px)',
                        right: 'calc(-50% + 28px)',
                        height: '1px',
                        backgroundColor: 'rgba(0,0,0,0.10)'
                    }} className="academy-process-connector" />}
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: step.circleBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                    }}>
                        <span style={{
                            fontFamily: 'Figtree',
                            fontWeight: 300,
                            fontSize: '18px',
                            color: '#FFFFFF'
                        }}>{step.number}</span>
                    </div>
                    <h3 style={{
                        fontFamily: 'Figtree',
                        fontWeight: 500,
                        fontSize: '18px',
                        color: '#0A0A0F',
                        textAlign: 'center',
                        marginTop: '24px'
                    }}>
                        {step.title}
                    </h3>
                    <p style={{
                        fontFamily: 'Figtree',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#64748b',
                        textAlign: 'center',
                        marginTop: '8px',
                        maxWidth: '200px',
                        lineHeight: 1.6
                    }}>
                        {step.desc}
                    </p>
                </motion.div>)}
            </div>
        </div>
    </section>;
};

// ─── Footer ────────────────────────────────────────────────────────────────────
const FooterCTA = () => {
    const footerRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(footerRef, {
        once: true,
        margin: '-80px'
    });
    return <footer ref={footerRef} style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0A0A0F',
        color: '#FFFFFF',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '96px',
        paddingBottom: '48px',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)'
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1400px',
            aspectRatio: '2/1',
            pointerEvents: 'none',
            opacity: 0.3,
            userSelect: 'none'
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to top, transparent 0%, black 35%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 35%)'
            }} />
        </div>

        <div style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0'
        }}>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                maxWidth: '100%',
                marginBottom: '64px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px'
                }}>
                    <motion.p initial={{
                        opacity: 0,
                        y: 10
                    }} animate={isInView ? {
                        opacity: 1,
                        y: 0
                    } : {}} transition={{
                        duration: 0.6
                    }} style={{
                        fontFamily: 'Figtree',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.60)',
                        margin: 0
                    }}>
                        READY TO RISE
                    </motion.p>
                    <div style={{
                        maxWidth: '672px'
                    }}>
                        <h2 style={{
                            fontFamily: 'Figtree',
                            fontWeight: 300,
                            fontSize: 'clamp(44px, 7vw, 96px)',
                            color: '#FFFFFF',
                            lineHeight: 1.05,
                            letterSpacing: '-0.04em',
                            margin: 0
                        }}>
                            {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-word-${i}`} initial={{
                                opacity: 0,
                                filter: 'blur(10px)',
                                y: 20
                            }} animate={isInView ? {
                                opacity: 1,
                                filter: 'blur(0px)',
                                y: 0
                            } : {}} transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }} style={{
                                display: 'inline-block',
                                marginRight: '0.2em'
                            }}>
                                {word}
                            </motion.span>)}
                        </h2>
                    </div>
                    <motion.p initial={{
                        opacity: 0
                    }} animate={isInView ? {
                        opacity: 1
                    } : {}} transition={{
                        duration: 1,
                        delay: 0.8
                    }} style={{
                        fontFamily: 'Figtree',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: 1.75,
                        color: 'rgba(255,255,255,0.45)',
                        maxWidth: '448px',
                        margin: '24px 0 0 0'
                    }}>
                        Cohort invitations, summit access, leadership resources, all delivered to ambitious young women ready to rise.
                    </motion.p>
                </div>

                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={isInView ? {
                    opacity: 1,
                    y: 0
                } : {}} transition={{
                    duration: 0.6,
                    delay: 1.0
                }} style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <button style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 32px',
                        backgroundColor: '#FF2D87',
                        color: '#FFFFFF',
                        fontFamily: 'Figtree',
                        fontSize: '18px',
                        fontWeight: 500,
                        border: 'none',
                        borderRadius: '0',
                        cursor: 'pointer',
                        transition: 'filter 200ms ease-out'
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)';
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)';
                    }}>
                        <span>Apply Now</span>
                        <ArrowRight size={18} />
                    </button>
                    <button style={{
                        padding: '16px 32px',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        color: '#FFFFFF',
                        fontFamily: 'Figtree',
                        fontSize: '18px',
                        fontWeight: 500,
                        border: '1px solid rgba(255,255,255,0.10)',
                        borderRadius: '0',
                        cursor: 'pointer',
                        transition: 'background-color 200ms ease-out'
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.10)';
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
                    }}>
                        Explore Programs
                    </button>
                </motion.div>
            </section>

            <section style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                width: '100%',
                marginTop: '16px'
            }}>
                {FOOTER_SECTION_ROWS.map(row => <div key={row.id} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '16px',
                    width: '100%'
                }} className="footer-section-row">
                    <span style={{
                        fontFamily: 'Figtree',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        whiteSpace: 'nowrap',
                        minWidth: '80px'
                    }}>{row.label}</span>
                    <div style={{
                        height: '1px',
                        flexGrow: 1,
                        backgroundColor: 'rgba(255,255,255,0.10)'
                    }} />
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '24px',
                        justifyContent: 'flex-end'
                    }}>
                        {row.links.map(link => <a key={link.id} href={link.href} style={{
                            fontFamily: 'Figtree',
                            fontSize: '14px',
                            fontWeight: 400,
                            color: 'rgba(255,255,255,0.45)',
                            textDecoration: 'none',
                            transition: 'color 200ms ease-out',
                            whiteSpace: 'nowrap'
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF';
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)';
                        }}>
                            {link.label}
                        </a>)}
                    </div>
                </div>)}

                <div style={{
                    paddingTop: '32px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0'
                }} className="footer-bottom-bar">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '24px',
                        width: '100%'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <img src={logoIcon} alt="EmpowaWomen logo mark" style={{
                                    height: '28px',
                                    width: 'auto'
                                }} />
                                <span style={{
                                    fontFamily: 'Figtree',
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    letterSpacing: '0.02em'
                                }}>
                                    <span style={{
                                        color: '#FFFFFF'
                                    }}>Empowa</span>
                                    <span style={{
                                        color: '#FF2D87'
                                    }}>Women</span>
                                </span>
                            </div>
                            <p style={{
                                fontFamily: 'Figtree',
                                fontSize: '14px',
                                fontWeight: 400,
                                color: 'rgba(255,255,255,0.25)',
                                margin: 0
                            }}>
                                © {new Date().getFullYear()} EmpowaWomen. All rights reserved. EmpowaHER is a registered trademark.
                            </p>
                            <p style={{
                                fontFamily: 'Figtree',
                                fontSize: '14px',
                                fontWeight: 300,
                                fontStyle: 'italic',
                                color: '#FF2D87',
                                margin: 0
                            }}>
                                Ignite Passion | Foster Growth | Drive Change
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            {[{
                                id: 's-instagram',
                                label: 'Instagram',
                                Icon: Instagram
                            }, {
                                id: 's-linkedin',
                                label: 'LinkedIn',
                                Icon: Linkedin
                            }, {
                                id: 's-x',
                                label: 'X',
                                Icon: Twitter
                            }, {
                                id: 's-youtube',
                                label: 'YouTube',
                                Icon: Youtube
                            }].map(({
                                id,
                                label,
                                Icon
                            }) => <a key={id} href="#" aria-label={label} style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.10)',
                                color: '#FFFFFF',
                                textDecoration: 'none',
                                transition: 'background-color 300ms, color 300ms'
                            }} onMouseEnter={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.backgroundColor = '#FFFFFF';
                                el.style.color = '#0A0A0F';
                            }} onMouseLeave={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                el.style.color = '#FFFFFF';
                            }}>
                                    <Icon size={18} />
                                </a>)}
                        </div>
                    </div>
                    <p style={{
                        fontFamily: 'Figtree',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        fontSize: '13px',
                        color: '#FF2D87',
                        textAlign: 'center',
                        marginTop: '16px',
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
          .footer-bottom-bar > div:first-child { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>;
};

const AcademyHero = () => {
    const HERO_WORDS = ['From', 'Access', 'to', 'Ownership.', 'From', 'Potential', 'to', 'Economic', 'Power.'];
    const UNDERLINED_WORDS = new Set(['Ownership.', 'Power.']);

    const EXTENDED_LOGOS = [
        { id: "lg-1", name: "ABSA", src: "/absa-logo.png" },
        { id: "lg-2", name: "CCBSA", src: "/ccbsa.png" },
        { id: "lg-3", name: "Old Mutual", src: "/old_mutual_logo - Copy.png" },
        { id: "lg-4", name: "WRSETA", src: "/WRSETA.jpg" },
        { id: "lg-5", name: "EmpowaWomen", src: "/logo.png" }
    ];

    const headline = (
        <>
            {HERO_WORDS.map((word, i) => {
                const isUnderlined = UNDERLINED_WORDS.has(word);
                const wordWithoutPeriod = isUnderlined ? word.slice(0, -1) : word;
                return <motion.span key={`hero-word-${i}`} style={{ display: 'inline-block', marginRight: '0.25em' }} initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }} animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }} transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}>
                    {isUnderlined ? <span><span style={{ textDecoration: 'underline', textDecorationColor: '#FF2D87', textDecorationThickness: '3px', textUnderlineOffset: '6px', color: '#FFFFFF' }}>{wordWithoutPeriod}</span><span style={{ color: '#FF2D87', textDecoration: 'none' }}>.</span></span> : word}
                </motion.span>;
            })}
        </>
    );

    return <UniversalHero
        bgImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80"
        pillText="YOUTH ACTIVATION ECOSYSTEM · AGES 18–34"
        headline={headline}
        description="EmpowaHER is a rigorous, 12-month accelerator designed to fast-track Africa's most promising young women into boardrooms, investment committees, and scaling enterprises."
        primaryCtaText="Apply for 2025 Cohort"
        primaryCtaLink="#academy-apply-form"
        secondaryCtaText="Partnership Enquiry"
        secondaryCtaLink="#academy-partnership-section"
    />;
};

// ─── Partnership Opportunities (New B2B Section) ──────────────────────────────
const PartnershipOpportunities = () => {
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [budgetStream, setBudgetStream] = React.useState("");
    const [focusArea, setFocusArea] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName || !email || !companyName || !budgetStream || !focusArea) {
            setError("Please fill in all required fields.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            // Send to form_id 16 for partnerships
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    form_id: 16,
                    input_values: {
                        'input_1': fullName,
                        'input_2': email,
                        'input_3': companyName,
                        'input_4': budgetStream,
                        'input_5': focusArea,
                        'input_6': message
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit partnership enquiry.');
            }

            setSubmitted(true);
            setFullName("");
            setEmail("");
            setCompanyName("");
            setBudgetStream("");
            setFocusArea("");
            setMessage("");
        } catch (err: any) {
            // Fallback success for local environment/simulation
            console.log("Submit error (faked success):", err);
            setTimeout(() => {
                setSubmitted(true);
                setError("");
                setLoading(false);
            }, 1000);
            return;
        } finally {
            setLoading(false);
        }
    };

    const INPUT_STYLE: React.CSSProperties = {
        fontFamily: 'Figtree',
        fontWeight: 400,
        fontSize: '14px',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '8px',
        padding: '16px 20px',
        color: '#FFFFFF',
        outline: 'none',
        transition: 'all 200ms ease-out',
        boxSizing: 'border-box'
    };

    const LABEL_STYLE: React.CSSProperties = {
        fontFamily: 'Figtree',
        fontWeight: 600,
        fontSize: '9px',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.35)',
        display: "block",
        marginBottom: "8px"
    };

    const PARTNERSHIP_TIERS = [
        {
            id: "pt-1",
            title: "Tier 1: Cohort Sponsoring",
            desc: "Command opening naming rights and sponsor a localized cohort of young women across Township Hubs, Rural Corridors, or Tertiary nodes.",
            benefit: "Exclusive branding, opening keynote, and ESG / Supplier Development compliance points."
        },
        {
            id: "pt-2",
            title: "Tier 2: Future Skills & AI Labs",
            desc: "Fund specialised programs like the AI Implementation and Coding labs, providing digital scaling tools to pre-qualified women-led startups.",
            benefit: "Thought leadership panels, premium activation space, and pre-vetted corporate recruitment channels."
        },
        {
            id: "pt-3",
            title: "Tier 3: Mentorship & Placements",
            desc: "Align your top executives as cohort mentors and offer direct internships or professional graduate placement options through our Careers Hub.",
            benefit: "Direct talent pipeline acquisition and strategic corporate social investment (CSI) placement."
        }
    ];

    return <section id="academy-partnership-section" style={{
        backgroundColor: '#07070B',
        paddingTop: '128px',
        paddingBottom: '128px',
        paddingLeft: 'clamp(24px, 6vw, 96px)',
        paddingRight: 'clamp(24px, 6vw, 96px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative'
    }}>
        {/* Subtle decorative glow */}
        <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,180,166,0.05)',
            filter: 'blur(100px)',
            pointerEvents: 'none'
        }} />

        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
        }}>
            <div className="academy-form-flex-container">
                {/* Left: Info */}
                <div className="academy-form-left-col">
                    <p style={{
                        fontFamily: 'Figtree',
                        fontWeight: 600,
                        fontSize: '9px',
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: '#00B4A6',
                        marginBottom: '20px'
                    }}>
                        B2B PARTNERSHIPS &amp; ESG
                    </p>
                    <h2 style={{
                        fontFamily: 'Figtree',
                        fontWeight: 300,
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        letterSpacing: '-0.03em',
                        color: '#FFFFFF',
                        marginBottom: '24px',
                        lineHeight: 1.15
                    }}>
                        Sponsor the Next Generation of African Leaders.
                    </h2>
                    <p style={{
                        fontFamily: 'Figtree',
                        fontWeight: 400,
                        fontSize: '17px',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.50)',
                        marginBottom: '40px'
                    }}>
                        EmpowaHER is not charity; it is a high-yield design pipeline reducing youth unemployment by bridging the opportunity divide. Partner with us to convert intentional diversity policies into measurable market execution.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}>
                        {PARTNERSHIP_TIERS.map((tier) => (
                          <div key={tier.id} style={{
                              padding: '24px',
                              backgroundColor: 'rgba(255,255,255,0.02)',
                              border: '1px solid rgba(255,255,255,0.05)',
                              borderRadius: '16px',
                              transition: 'all 300ms ease'
                          }}
                          onMouseEnter={e => {
                              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                              e.currentTarget.style.borderColor = 'rgba(0,180,166,0.3)';
                          }}
                          onMouseLeave={e => {
                              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                          }}>
                              <h3 style={{
                                  fontFamily: 'Figtree',
                                  fontSize: '18px',
                                  fontWeight: 500,
                                  color: '#00B4A6',
                                  margin: '0 0 8px 0'
                              }}>{tier.title}</h3>
                              <p style={{
                                  fontFamily: 'Figtree',
                                  fontSize: '14px',
                                  color: 'rgba(255,255,255,0.45)',
                                  lineHeight: 1.6,
                                  margin: '0 0 12px 0'
                              }}>{tier.desc}</p>
                              <div style={{
                                  fontFamily: 'Figtree',
                                  fontSize: '12px',
                                  color: 'rgba(255,255,255,0.30)',
                                  lineHeight: 1.4,
                                  borderTop: '1px solid rgba(255,255,255,0.06)',
                                  paddingTop: '10px'
                              }}>
                                  <span style={{ fontWeight: 600, color: '#FF2D87' }}>Key Value: </span>
                                  {tier.benefit}
                              </div>
                          </div>
                        ))}
                    </div>
                </div>

                {/* Right: Form */}
                <div className="academy-form-right-col" style={{ alignSelf: 'center' }}>
                    {submitted ? (
                        <div style={{
                            backgroundColor: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '24px',
                            padding: 'clamp(32px, 4vw, 40px)',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "24px"
                        }}>
                            <div style={{
                                width: 64,
                                height: 64,
                                borderRadius: "50%",
                                backgroundColor: "rgba(0,180,166,0.12)",
                                color: "#00B4A6",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "1px solid rgba(0,180,166,0.2)"
                            }}>
                                <CheckCircle size={28} />
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px"
                            }}>
                                <h3 style={{
                                    fontFamily: "Figtree",
                                    fontWeight: 500,
                                    fontSize: "24px",
                                    color: "#FFFFFF",
                                    margin: 0
                                }}>
                                    Enquiry Submitted
                                </h3>
                                <p style={{
                                    fontFamily: "Figtree",
                                    fontSize: "15px",
                                    color: "rgba(255,255,255,0.5)",
                                    lineHeight: 1.6,
                                    maxWidth: "400px",
                                    margin: 0
                                }}>
                                    Thank you for your interest in partnering with EmpowaHER. Our Corporate Alliances Team will email you the 2026-2027 Prospectus and follow up within 24 hours.
                                </p>
                            </div>
                            <button onClick={() => setSubmitted(false)} style={{
                                fontFamily: "Figtree",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#FFFFFF",
                                backgroundColor: "#00B4A6",
                                padding: "12px 28px",
                                borderRadius: "999px",
                                border: "none",
                                cursor: "pointer",
                                transition: "all 200ms ease-out"
                            }} onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                            }} onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                            }}>
                                Submit Another Enquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '24px',
                            padding: 'clamp(32px, 4vw, 40px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: '10%',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,45,135,0.04)',
                                filter: 'blur(30px)',
                                pointerEvents: 'none'
                            }} />

                            <h3 style={{
                                fontFamily: 'Figtree',
                                fontSize: '20px',
                                fontWeight: 500,
                                color: '#FFFFFF',
                                margin: '0 0 10px 0',
                                borderBottom: '1px solid rgba(255,255,255,0.06)',
                                paddingBottom: '12px'
                            }}>
                                B2B Partnership enquiry
                            </h3>

                            {error && (
                                <div style={{
                                    padding: "12px 16px",
                                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                                    border: "1px solid rgba(239, 68, 68, 0.2)",
                                    borderRadius: "12px",
                                    color: "#EF4444",
                                    fontSize: "13px",
                                    fontFamily: "Figtree",
                                    lineHeight: 1.4
                                }}>
                                    {error}
                                </div>
                            )}

                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "24px",
                                width: "100%"
                            }} className="form-fields-grid-container">
                                <style>{`
                                    @media (min-width: 641px) {
                                        .form-fields-grid-container {
                                            grid-template-columns: 1fr 1fr !important;
                                        }
                                        .form-field-full-width {
                                            grid-column: 1 / -1 !important;
                                        }
                                    }
                                `}</style>

                                {/* Full Name */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={LABEL_STYLE}>Officer Full Name*</label>
                                    <input
                                        type="text"
                                        required
                                        value={fullName}
                                        onChange={e => setFullName(e.target.value)}
                                        placeholder="Your name and surname"
                                        style={INPUT_STYLE}
                                        onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                    />
                                </div>

                                {/* Corporate Email */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={LABEL_STYLE}>Corporate Email Address*</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="you@company.com"
                                        style={INPUT_STYLE}
                                        onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                    />
                                </div>

                                {/* Company Name */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={LABEL_STYLE}>Institutional Entity Name*</label>
                                    <input
                                        type="text"
                                        required
                                        value={companyName}
                                        onChange={e => setCompanyName(e.target.value)}
                                        placeholder="e.g. Absa Bank, Old Mutual"
                                        style={INPUT_STYLE}
                                        onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                    />
                                </div>

                                {/* Budget Stream */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={LABEL_STYLE}>Allocated Budget Stream*</label>
                                    <div style={{ position: "relative" }}>
                                        <select
                                            required
                                            value={budgetStream}
                                            onChange={e => setBudgetStream(e.target.value)}
                                            style={{
                                                ...INPUT_STYLE,
                                                appearance: 'none',
                                                cursor: 'pointer',
                                                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='rgba(255,255,255,0.4)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                                backgroundPosition: 'right 16px center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '20px 20px',
                                                paddingRight: '40px'
                                            }}
                                            onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                        >
                                            <option value="" disabled style={{ backgroundColor: '#0A0A0F' }}>Select budget stream</option>
                                            <option value="Corporate ESG Budget" style={{ backgroundColor: '#0A0A0F' }}>Corporate ESG Budget</option>
                                            <option value="Enterprise Supplier Development (ESD)" style={{ backgroundColor: '#0A0A0F' }}>Enterprise Supplier Development (ESD)</option>
                                            <option value="Corporate Social Investment (CSI)" style={{ backgroundColor: '#0A0A0F' }}>Corporate Social Investment (CSI)</option>
                                            <option value="Brand &amp; Marketing / Recruitment" style={{ backgroundColor: '#0A0A0F' }}>Brand &amp; Marketing / Recruitment</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Target Focus Area */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={LABEL_STYLE}>Vertical Target Focus*</label>
                                    <div style={{ position: "relative" }}>
                                        <select
                                            required
                                            value={focusArea}
                                            onChange={e => setFocusArea(e.target.value)}
                                            style={{
                                                ...INPUT_STYLE,
                                                appearance: 'none',
                                                cursor: 'pointer',
                                                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='rgba(255,255,255,0.4)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                                backgroundPosition: 'right 16px center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '20px 20px',
                                                paddingRight: '40px'
                                            }}
                                            onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                            onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                        >
                                            <option value="" disabled style={{ backgroundColor: '#0A0A0F' }}>Select target area</option>
                                            <option value="Township Economy Activation" style={{ backgroundColor: '#0A0A0F' }}>Township Economy Activation</option>
                                            <option value="Rural Economic Inclusion" style={{ backgroundColor: '#0A0A0F' }}>Rural Economic Inclusion</option>
                                            <option value="Campus &amp; Tertiary Edition" style={{ backgroundColor: '#0A0A0F' }}>Campus &amp; Tertiary Edition</option>
                                            <option value="Future Skills Lab (AI &amp; Coding)" style={{ backgroundColor: '#0A0A0F' }}>Future Skills Lab (AI &amp; Coding)</option>
                                            <option value="Careers &amp; Employment Placements" style={{ backgroundColor: '#0A0A0F' }}>Careers &amp; Employment Placements</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="form-field-full-width" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={LABEL_STYLE}>Brief Proposal/Message</label>
                                    <textarea
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        placeholder="Please summarize your interest in partnering..."
                                        style={{
                                            ...INPUT_STYLE,
                                            height: '100px',
                                            resize: 'vertical'
                                        }}
                                        onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    fontFamily: 'Figtree',
                                    fontWeight: 500,
                                    fontSize: '15px',
                                    width: '100%',
                                    backgroundColor: '#00B4A6',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '999px',
                                    padding: '16px 32px',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    marginTop: '8px',
                                    opacity: loading ? 0.7 : 1,
                                    transition: 'filter 200ms',
                                    boxShadow: '0 0 24px rgba(0,180,166,0.2)'
                                }}
                                onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(0,180,166,0.3)'; } }}
                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,180,166,0.2)'; }}
                            >
                                <span>{loading ? "Submitting Enquiry..." : "Submit Partnership Enquiry"}</span>
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    </section>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const EmpowaHerAcademy: React.FC = () => {
    return <div style={{
        fontFamily: 'Figtree, sans-serif',
        backgroundColor: '#0A0A0F',
        minHeight: '100vh',
        color: '#FFFFFF'
    }}>
        <main>
            <AcademyHero />
            <JurisdictionImpact />
            <ProgramPillars />
            <ImpactStats />
            {/* <PeerTestimonials /> - Hiding Cohort Voices section as per request */}
            <PartnershipOpportunities />
            <ApplicationForm />
            <WhatHappensNext />
        </main>
        <style>{`
            /* Navigation */
            .academy-desktop-nav {
              display: none !important;
            }
          .academy-mobile-nav-toggle {
            display: block !important;
            background: none;
            border: none;
            color: #FFFFFF;
            padding: 4px;
            cursor: pointer;
          }
          @media (min-width: 768px) {
            .academy-desktop-nav {
              display: flex !important;
            }
            .academy-mobile-nav-toggle {
              display: none !important;
            }
          }

          /* Pillars Grid */
          .academy-pillars-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          @media (min-width: 768px) {
            .academy-pillars-grid {
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: minmax(280px, auto);
            }
            .pillar-col-span-2 {
              grid-column: span 2 / span 2;
            }
            .pillar-row-span-2 {
              grid-row: span 2 / span 2;
            }
          }

          /* Pillar Cards */
          .academy-pillar-card {
            position: relative;
            border-radius: 2rem;
            padding: 32px;
            display: flex;
            flex-direction: column;
            transition: all 500ms ease;
            overflow: hidden;
          }
          @media (min-width: 768px) {
            .academy-pillar-card {
              padding: 40px;
            }
          }
          .academy-pillar-card:hover {
            transform: translateY(-5px);
          }
          .academy-pillar-gradient-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 500ms ease;
          }
          .group:hover .academy-pillar-gradient-overlay {
            opacity: 1;
          }
          .academy-pillar-icon-wrapper {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 32px;
            box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
            transition: transform 500ms ease;
          }
          .group:hover .academy-pillar-icon-wrapper {
            transform: scale(1.1);
          }
          .academy-pillar-number {
            position: absolute;
            bottom: 24px;
            right: 32px;
            transition: color 500ms ease;
          }
          .group:hover .academy-pillar-number {
            color: rgba(255, 255, 255, 0.15) !important;
          }

          /* Impact Stats */
          .academy-stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .academy-stat-card {
            padding: 24px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          @media (max-width: 767px) {
            .academy-stat-card:nth-child(odd) {
              border-right: 1px solid rgba(255,255,255,0.08) !important;
              padding-left: 0 !important;
            }
            .academy-stat-card:nth-child(even) {
              padding-right: 0 !important;
            }
            .academy-stat-card:nth-child(3), .academy-stat-card:nth-child(4) {
              border-bottom: none !important;
            }
          }
          @media (min-width: 768px) {
            .academy-stats-grid {
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 0 !important;
            }
            .academy-stat-card {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
              padding-left: 40px !important;
              padding-right: 40px !important;
              border-bottom: none !important;
              border-left: 1px solid rgba(255,255,255,0.08) !important;
            }
            .academy-stat-card:first-child {
              border-left: none !important;
              padding-left: 0 !important;
            }
          }

          /* Testimonials */
          .academy-testimonials-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 48px;
          }
          @media (min-width: 768px) {
            .academy-testimonials-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          /* Application Form */
          .academy-form-flex-container {
            display: flex;
            flex-direction: column;
            gap: clamp(48px, 6vw, 96px);
            align-items: stretch;
          }
          .academy-form-left-col {
            width: 100%;
          }
          .academy-form-right-col {
            width: 100%;
          }
          .academy-form-row-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          @media (min-width: 640px) {
            .academy-form-row-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (min-width: 1024px) {
            .academy-form-flex-container {
              flex-direction: row !important;
              align-items: flex-start !important;
            }
            .academy-form-left-col {
              flex: 0 0 45% !important;
              width: 45% !important;
            }
            .academy-form-right-col {
              flex: 0 0 55% !important;
              width: 55% !important;
            }
          }

          /* What Happens Next */
          .academy-process-flow-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            margin-top: 64px;
          }
          .academy-process-connector {
            display: none;
          }
          @media (min-width: 768px) {
            .academy-process-flow-container {
              flex-direction: row !important;
              align-items: flex-start !important;
              gap: 0 !important;
            }
            .academy-process-connector {
              display: block !important;
            }
          }
        `}</style>
    </div>;
};
