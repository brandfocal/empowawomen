import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

// --- Types ---

interface ProvincialSummit {
    id: string;
    city: string;
    province: string;
    date: string;
    focusTitle: string;
    strategicDrivers: string[];
    targetDelegate: string;
    sector: 'Creative' | 'Industrial' | 'Agriculture' | 'Energy' | 'Tech' | 'Other';
}

// --- Mock Data ---

const PROVINCIAL_SUMMITS: ProvincialSummit[] = [{
    id: 'ct-2027',
    city: 'Cape Town',
    province: 'Western Cape',
    date: 'Sat 10 Apr 2027',
    focusTitle: 'Creative Tourism & Lifestyle Economy',
    strategicDrivers: ['Tourism', 'Hospitality', 'Creative Industries', 'Tech', 'Wine Economy'],
    targetDelegate: 'Tourism Execs, Hospitality Groups, Media Leaders, Luxury Brands',
    sector: 'Creative'
}, {
    id: 'dbn-2027',
    city: 'Durban',
    province: 'KwaZulu-Natal',
    date: 'Thu 06 May 2027',
    focusTitle: 'Trade Logistics & Industrial Growth',
    strategicDrivers: ['Ports', 'Logistics', 'Manufacturing', 'Maritime', 'Retail'],
    targetDelegate: 'Logistics Execs, Manufacturers, Port Authorities, Supply Chain',
    sector: 'Industrial'
}, {
    id: 'plz-2027',
    city: 'Gqeberha',
    province: 'Eastern Cape',
    date: 'Sat 22 May 2027',
    focusTitle: 'Automotive Agriculture & Industrial',
    strategicDrivers: ['Automotive Manufacturing', 'Ocean Economy', 'Renewable Energy'],
    targetDelegate: 'Automotive Executives, Industrialists, Agri-Business Leaders',
    sector: 'Industrial'
}, {
    id: 'pol-2027',
    city: 'Polokwane',
    province: 'Limpopo',
    date: 'Thu 10 Jun 2027',
    focusTitle: 'Agriculture Mining & Rural Economy',
    strategicDrivers: ['Mining', 'Agriculture', 'Tourism', 'Rural Economies', 'Energy'],
    targetDelegate: 'Mining Executives, Agricultural Leaders, Cooperatives',
    sector: 'Agriculture'
}, {
    id: 'mbo-2027',
    city: 'Mbombela',
    province: 'Mpumalanga',
    date: 'Sat 26 Jun 2027',
    focusTitle: 'Energy Sustainability & Green Economy',
    strategicDrivers: ['Energy transition', 'Climate Innovation', 'Forestry', 'Mining'],
    targetDelegate: 'ESG Leaders, Energy Investors, Climate Innovators',
    sector: 'Energy'
}, {
    id: 'rus-2027',
    city: 'Rustenburg',
    province: 'North West',
    date: 'Thu 15 Jul 2027',
    focusTitle: 'Mining Enterprise & Economic Transformation',
    strategicDrivers: ['Mining Economies', 'Enterprise Development', 'Manufacturing'],
    targetDelegate: 'Mining Leaders, Procurement Executives, Industrialists',
    sector: 'Industrial'
}, {
    id: 'bfn-2027',
    city: 'Bloemfontein',
    province: 'Free State',
    date: 'Sat 31 Jul 2027',
    focusTitle: 'AgriBusiness Education & Future Economy',
    strategicDrivers: ['Agriculture', 'Logistics', 'Education', 'Renewable Energy'],
    targetDelegate: 'Education Leaders, AgriBusiness Execs, Workforce Strategists',
    sector: 'Agriculture'
}, {
    id: 'kim-2027',
    city: 'Kimberley',
    province: 'Northern Cape',
    date: 'Thu 12 Aug 2027',
    focusTitle: 'Mining Energy & Sustainability',
    strategicDrivers: ['Renewable Energy', 'Green Hydrogen', 'Critical Infrastructure'],
    targetDelegate: 'Mining Executives, Green Hydrogen Stakeholders, Investors',
    sector: 'Energy'
}];

// --- Hero Headline Words ---

const HERO_WORDS = [{
    id: 'hw-0',
    text: 'Building'
}, {
    id: 'hw-1',
    text: "Africa's"
}, {
    id: 'hw-2',
    text: 'Premier'
}, {
    id: 'hw-3',
    text: 'Provincial'
}, {
    id: 'hw-4',
    text: 'Executive'
}, {
    id: 'hw-5',
    text: 'Ecosystem.'
}];

// --- Stats Data ---

const HERO_STATS = [{
    id: 'hs-1',
    value: '8 Cities',
    caption: 'Across South Africa'
}, {
    id: 'hs-2',
    value: '20+ Sectors',
    caption: 'Represented'
}, {
    id: 'hs-3',
    value: '500+ Delegates',
    caption: 'Total Capacity'
}];

// --- Filter Options ---

const FILTER_OPTIONS = ['All', 'By City', 'By Sector'] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

// --- Stat Value Parser ---

function parseStatValue(value: string): {
    numeric: string;
    suffix: string;
} {
    const match = value.match(/^(\d+\+?)(.*)$/);
    if (match) {
        return {
            numeric: match[1].trim(),
            suffix: match[2].trim()
        };
    }
    return {
        numeric: value,
        suffix: ''
    };
}

// --- Main Page Component ---

export const ProvincialSummitSeries = () => {
    const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
    const {
        scrollY
    } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], ['0%', '20%']);
    const filteredSummits = useMemo(() => {
        if (activeFilter === 'All') return PROVINCIAL_SUMMITS;
        if (activeFilter === 'By City') {
            return [...PROVINCIAL_SUMMITS].sort((a, b) => a.city.localeCompare(b.city));
        }
        if (activeFilter === 'By Sector') {
            return [...PROVINCIAL_SUMMITS].sort((a, b) => a.sector.localeCompare(b.sector));
        }
        return PROVINCIAL_SUMMITS;
    }, [activeFilter]);
    return <div style={{
        backgroundColor: '#0A0A0F',
        minHeight: '100vh',
        color: '#FFFFFF',
        fontFamily: 'Figtree'
    }}>
        {/* ── Hero Section ─────────────────────────────────────────────────── */}
        <section style={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#0A0A0F',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '68px'
        }}>
            {/* Film grain texture */}
            <div style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 3,
                opacity: 0.04,
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                backgroundSize: '256px 256px',
                animation: 'grainShift 0.8s steps(1) infinite'
            }} />

            {/* Background image with parallax */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>
                <motion.div initial={{
                    scale: 1.06,
                    opacity: 0
                }} animate={{
                    scale: 1,
                    opacity: 1
                }} transition={{
                    duration: 2.4,
                    ease: 'easeOut'
                }} style={{
                    position: 'absolute',
                    inset: 0
                }}>
                    <motion.div style={{
                        y: imageY,
                        position: 'absolute',
                        inset: 0
                    }}>
                        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90" alt="Cityscape" style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                    </motion.div>
                </motion.div>

                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)'
                }} />
            </div>

            {/* Hero content */}
            <div className="relative z-10 w-full max-w-[1200px] px-6 sm:px-10 lg:px-20 pt-16 pb-16 md:pt-20 md:pb-20 flex flex-col items-center text-center">
                {/* Eyebrow */}
                <motion.p initial={{
                    opacity: 0,
                    y: 10
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.6,
                    delay: 0.2
                }} className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-6 md:mb-8" style={{
                    color: 'rgba(255,255,255,0.60)'
                }}>
                    SUMMIT SERIES 2027
                </motion.p>

                {/* Headline */}
                <h1 className="font-light leading-none tracking-tight mb-10 md:mb-12 flex flex-wrap justify-center" style={{
                    fontSize: 'clamp(44px, 8vw, 112px)',
                    letterSpacing: '-0.04em',
                    gap: '0.22em'
                }}>
                    {HERO_WORDS.map((item, i) => <motion.span key={item.id} initial={{
                        opacity: 0,
                        filter: 'blur(12px)',
                        y: 20
                    }} animate={{
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0
                    }} transition={{
                        duration: 0.8,
                        delay: 0.4 + i * 0.1,
                        ease: [0.215, 0.61, 0.355, 1]
                    }} style={{
                        display: 'inline-block',
                        position: 'relative'
                    }}>
                        {item.text}
                        {item.id === 'hw-3' && <motion.span initial={{
                            width: 0
                        }} animate={{
                            width: '100%'
                        }} transition={{
                            duration: 0.8,
                            delay: 1.5,
                            ease: 'easeOut'
                        }} style={{
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0,
                            height: '1.5px',
                            backgroundColor: '#FF2D87',
                            display: 'block'
                        }} />}
                    </motion.span>)}
                </h1>

                {/* CTAs */}
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.8,
                    delay: 1.2
                }} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 w-full sm:w-auto">
                    <button className="w-full sm:w-auto" style={{
                        fontFamily: 'Figtree',
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        backgroundColor: '#FF2D87',
                        border: 'none',
                        borderRadius: '999px',
                        height: '50px',
                        padding: '0 32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 200ms ease-out',
                        letterSpacing: '0.02em',
                        boxShadow: '0 0 32px rgba(255,45,135,0.25)'
                    }} onMouseEnter={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.filter = 'brightness(1.1)';
                        el.style.boxShadow = '0 0 48px rgba(255,45,135,0.40)';
                    }} onMouseLeave={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.filter = 'brightness(1)';
                        el.style.boxShadow = '0 0 32px rgba(255,45,135,0.25)';
                    }}>
                        Register Now
                    </button>
                    <button className="w-full sm:w-auto" style={{
                        fontFamily: 'Figtree',
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255,255,255,0.20)',
                        borderRadius: '999px',
                        height: '50px',
                        padding: '0 32px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 200ms ease-out',
                        letterSpacing: '0.02em'
                    }} onMouseEnter={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.backgroundColor = 'rgba(255,255,255,0.08)';
                        el.style.borderColor = 'rgba(255,255,255,0.40)';
                    }} onMouseLeave={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.backgroundColor = 'transparent';
                        el.style.borderColor = 'rgba(255,255,255,0.20)';
                    }}>
                        View All Summits
                    </button>
                </motion.div>

                {/* Stats strip */}
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.8,
                    delay: 1.4
                }} className="flex flex-row items-center justify-center flex-wrap gap-0 w-full">
                    {HERO_STATS.map((stat, idx) => {
                        const {
                            numeric,
                            suffix
                        } = parseStatValue(stat.value);
                        return <React.Fragment key={stat.id}>
                            <div className="flex flex-col items-center px-5 sm:px-8 py-4 sm:py-0">
                                <div className="flex items-baseline gap-[2px]">
                                    <span className="font-light leading-none" style={{
                                        fontFamily: 'Figtree',
                                        fontSize: 'clamp(36px, 6vw, 52px)',
                                        letterSpacing: '-0.04em',
                                        color: '#FFFFFF'
                                    }}>
                                        {numeric}
                                    </span>
                                    {suffix && <span style={{
                                        fontFamily: 'Figtree',
                                        fontSize: '13px',
                                        fontWeight: 400,
                                        color: 'rgba(255,255,255,0.50)',
                                        letterSpacing: '0.05em',
                                        marginLeft: '6px',
                                        alignSelf: 'flex-end',
                                        paddingBottom: '6px'
                                    }}>
                                        {suffix}
                                    </span>}
                                </div>
                                <span style={{
                                    fontFamily: 'Figtree',
                                    fontSize: '11px',
                                    fontWeight: 400,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.45)',
                                    marginTop: '4px'
                                }}>
                                    {stat.caption}
                                </span>
                            </div>
                            {idx < HERO_STATS.length - 1 && <div style={{
                                width: '1px',
                                height: '48px',
                                backgroundColor: 'rgba(255,255,255,0.10)',
                                flexShrink: 0
                            }} />}
                        </React.Fragment>;
                    })}
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '120px',
                background: 'linear-gradient(to top, #0A0A0F 0%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 4
            }} />
        </section>

        {/* ── Provincial Matrix Section ─────────────────────────────────────── */}
        <section style={{
            backgroundColor: '#F7F6F2',
            paddingTop: '80px',
            paddingBottom: '80px',
            color: '#0A0A0F'
        }} className="md:pt-[128px] md:pb-[128px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                {/* Heading block */}
                <div className="mb-12 md:mb-20">
                    <motion.div initial={{
                        opacity: 0,
                        y: 10
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.6
                    }}>
                        <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF2D87] uppercase block mb-4">
                            THE PROVINCIAL MATRIX
                        </span>
                    </motion.div>
                    <motion.h2 initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.8,
                        delay: 0.1
                    }} className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight" style={{
                        lineHeight: 1.1
                    }}>
                        Nine provinces. One ecosystem.
                    </motion.h2>
                </div>

                {/* Animated toggle bar */}
                <div className="flex w-full rounded-xl p-1 mb-12 md:mb-16" style={{
                    backgroundColor: 'rgba(0,0,0,0.06)',
                    position: 'relative'
                }}>
                    <AnimatePresence>
                        {FILTER_OPTIONS.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} style={{
                            flex: 1,
                            padding: '10px 0',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1,
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            fontFamily: 'Figtree',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: activeFilter === filter ? '#FFFFFF' : 'rgba(0,0,0,0.40)',
                            transition: 'color 200ms ease-out'
                        }} onMouseEnter={e => {
                            if (activeFilter !== filter) {
                                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,0,0,0.70)';
                            }
                        }} onMouseLeave={e => {
                            if (activeFilter !== filter) {
                                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(0,0,0,0.40)';
                            }
                        }}>
                            {activeFilter === filter && <motion.div layoutId="sliding-indicator" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: '#0A0A0F',
                                borderRadius: '9px',
                                zIndex: -1
                            }} transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 35
                            }} />}
                            {filter}
                        </button>)}
                    </AnimatePresence>
                </div>

                {/* Provincial Cards List */}
                <div className="space-y-0">
                    <AnimatePresence mode="popLayout">
                        {filteredSummits.map((summit, index) => <motion.div key={summit.id} layout initial={{
                            opacity: 0,
                            y: 20
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} transition={{
                            duration: 0.5,
                            delay: index * 0.05
                        }} className="group summit-card" style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderBottom: '1px solid rgba(0,0,0,0.10)',
                            borderRadius: '12px',
                            transition: 'background 300ms ease-out'
                        }} onMouseEnter={e => {
                            (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(135deg, rgba(255,45,135,0.04) 0%, rgba(255,255,255,0.60) 100%)';
                        }} onMouseLeave={e => {
                            (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                        }}>
                            {/* Left accent line */}
                            <div className="card-accent-line" style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                width: '2px',
                                height: '100%',
                                backgroundColor: '#FF2D87',
                                transform: 'scaleY(0)',
                                transformOrigin: 'top',
                                transition: 'transform 400ms ease-out'
                            }} />

                            {/* Index number */}
                            <div className="hidden sm:block" style={{
                                position: 'absolute',
                                top: '16px',
                                left: '20px',
                                fontFamily: 'Figtree',
                                fontSize: '11px',
                                fontWeight: 400,
                                letterSpacing: '0.1em',
                                color: 'rgba(0,0,0,0.20)'
                            }}>
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            {/* Card inner layout: stacks on mobile, row on desktop */}
                            <div className="flex flex-col lg:flex-row lg:items-center px-4 sm:px-6 lg:px-4 py-8 sm:py-10 lg:py-10 gap-6 lg:gap-0">
                                {/* Left Column: City & Date */}
                                <div className="w-full lg:w-56 shrink-0 lg:pl-2">
                                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-2 text-[#0A0A0F]">
                                        {summit.city}
                                    </h3>
                                    <div className="text-[13px] text-[#64748b] font-medium mb-3">
                                        {summit.date}
                                    </div>
                                    <div className="inline-flex bg-[#FF2D87]/10 text-[#FF2D87] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                                        {summit.province}
                                    </div>
                                </div>

                                {/* Divider (Desktop) */}
                                <div className="hidden lg:block w-px h-24 bg-black/5 mx-8 shrink-0" />

                                {/* Center Column: Summit Focus */}
                                <div className="flex-1 w-full lg:px-8">
                                    <h4 className="text-lg sm:text-xl font-semibold text-[#0A0A0F] mb-4" style={{
                                        lineHeight: 1.3
                                    }}>
                                        {summit.focusTitle}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {summit.strategicDrivers.map(driver => <span key={driver} className="px-3 py-1 rounded-full border border-black/10 text-[11px] text-[#64748b] font-medium">
                                            {driver}
                                        </span>)}
                                    </div>
                                </div>

                                {/* Divider (Desktop) */}
                                <div className="hidden lg:block w-px h-24 bg-black/5 mx-8 shrink-0" />

                                {/* Right Column: Target Delegate & Action */}
                                <div className="w-full lg:w-64 shrink-0">
                                    <div className="text-[14px] text-[#64748b] leading-relaxed mb-5 font-medium">
                                        <span className="text-[#0A0A0F]/40 text-[10px] font-bold uppercase tracking-widest block mb-1">
                                            Target Profile
                                        </span>
                                        {summit.targetDelegate}
                                    </div>
                                    <button className="w-full flex items-center justify-between group/btn px-6 py-3 bg-[#FF2D87] text-white rounded-full font-bold text-[13px] tracking-wide transition-all hover:bg-[#0A0A0F] hover:shadow-lg">
                                        Apply for Seat
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>)}
                    </AnimatePresence>
                </div>
            </div>
        </section>

        {/* ── CTA Section ──────────────────────────────────────────────────── */}
        <section style={{
            backgroundColor: '#0A0A0F',
            paddingTop: '80px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
        }} className="md:pt-[128px] md:pb-[128px]">
            {/* Architectural grid background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: ['repeating-linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'].join(', '),
                    backgroundSize: '48px 48px'
                }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, #0A0A0F 0%, transparent 20%, transparent 80%, #0A0A0F 100%)'
                }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
                {/* Eyebrow */}
                <motion.div initial={{
                    opacity: 0,
                    y: 10
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.6
                }}>
                    <span style={{
                        fontFamily: 'Figtree',
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#FF2D87',
                        display: 'block',
                        marginBottom: '32px'
                    }}>
                        APPLY FOR A PROVINCIAL SEAT
                    </span>
                </motion.div>

                {/* CTA h2 */}
                <motion.h2 initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.8,
                    delay: 0.15
                }} style={{
                    fontFamily: 'Figtree',
                    fontWeight: 300,
                    fontSize: 'clamp(36px, 7vw, 96px)',
                    color: '#FFFFFF',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.05,
                    marginBottom: '48px'
                }}>
                    Find your province.
                    <br />
                    Claim your seat.
                </motion.h2>

                {/* CTA buttons */}
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
                    delay: 0.3
                }} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
                    <button className="w-full sm:w-auto" style={{
                        fontFamily: 'Figtree',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        backgroundColor: '#FF2D87',
                        border: 'none',
                        borderRadius: '999px',
                        padding: '0 40px',
                        height: '50px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'filter 200ms ease-out',
                        letterSpacing: '0.02em'
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)';
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)';
                    }}>
                        Apply Now
                    </button>
                    <button className="w-full sm:w-auto" style={{
                        fontFamily: 'Figtree',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.70)',
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(255,255,255,0.20)',
                        borderRadius: '999px',
                        padding: '0 40px',
                        height: '50px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        transition: 'background-color 200ms ease-out',
                        letterSpacing: '0.02em'
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                    }}>
                        <Download size={16} />
                        Download Calendar
                    </button>
                </motion.div>
            </div>
        </section>

        <style>{`
        @keyframes grainShift {
          0%   { background-position: 0 0; }
          10%  { background-position: -5% -10%; }
          20%  { background-position: -15% 5%; }
          30%  { background-position: 7% -25%; }
          40%  { background-position: 20% 0%; }
          50%  { background-position: -25% 10%; }
          60%  { background-position: 15% 5%; }
          70%  { background-position: 0% 15%; }
          80%  { background-position: 25% 35%; }
          90%  { background-position: -10% 10%; }
          100% { background-position: 0 0; }
        }

        .group:hover .card-accent-line {
          transform: scaleY(1) !important;
        }
      `}</style>
    </div>;
};
export default ProvincialSummitSeries;