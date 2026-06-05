import React, { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
interface LogoItem {
    id: string;
    name: string;
    src: string;
}
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

// ─── Provincial Enquiry Form ──────────────────────────────────────────────────
interface ProvincialEnquiryFormProps {
    province: string;
    setProvince: React.Dispatch<React.SetStateAction<string>>;
}

const INPUT_STYLE: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "8px",
    padding: "14px 16px",
    fontFamily: "Figtree, sans-serif",
    fontSize: "14px",
    color: "#FFFFFF",
    outline: "none",
    transition: "all 200ms ease",
    boxSizing: "border-box"
};

const LABEL_STYLE: React.CSSProperties = {
    fontSize: "12px",
    fontWeight: 500,
    color: "rgba(255,255,255,0.6)",
    fontFamily: "Figtree, sans-serif"
};

const BUTTON_STYLE: React.CSSProperties = {
    height: "52px",
    backgroundColor: "#FF2D87",
    color: "#FFFFFF",
    fontFamily: "Figtree, sans-serif",
    fontSize: "15px",
    fontWeight: 600,
    border: "none",
    borderRadius: "999px",
    cursor: "pointer",
    transition: "all 200ms ease-out",
    boxShadow: "0 0 32px rgba(255,45,135,0.25)"
};

const ProvincialEnquiryForm: React.FC<ProvincialEnquiryFormProps> = ({ province, setProvince }) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
            setName("");
            setEmail("");
            setCompany("");
            setProvince("");
            setMessage("");
        }, 1500);
    };

    return (
        <section id="provincial-enquiry-form" style={{
            backgroundColor: "#0F0F15",
            paddingTop: "clamp(64px, 10vw, 120px)",
            paddingBottom: "clamp(64px, 10vw, 120px)",
            paddingLeft: "clamp(16px, 5vw, 96px)",
            paddingRight: "clamp(16px, 5vw, 96px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "#FFFFFF"
        }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: 600, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', textAlign: "center", marginBottom: "16px" }}>
                    PROVINCIAL SUMMIT REGISTRATION
                </span>
                <h2 style={{ fontFamily: 'Figtree', fontWeight: 300, color: '#FFFFFF', fontSize: 'clamp(24px, 3.5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1, textAlign: "center", marginBottom: "48px" }}>
                    Register Your Interest for 2027 Summits
                </h2>

                {status === "success" ? (
                    <div style={{ textAlign: "center", padding: "40px", backgroundColor: "rgba(0,180,166,0.1)", border: "1px solid #00B4A6", borderRadius: "8px" }}>
                        <h3 style={{ color: "#00B4A6", marginBottom: "12px", fontSize: "20px" }}>Thank You!</h3>
                        <p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>Your registration enquiry has been successfully submitted. Our team will contact you shortly.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={LABEL_STYLE}>Full Name</label>
                                <input type="text" required value={name} onChange={e => setName(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={LABEL_STYLE}>Email Address</label>
                                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={LABEL_STYLE}>Company Name</label>
                                <input type="text" required value={company} onChange={e => setCompany(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={LABEL_STYLE}>Preferred Province</label>
                                <select required value={province} onChange={e => setProvince(e.target.value)} style={{ ...INPUT_STYLE, appearance: 'none', cursor: 'pointer', backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='rgba(255,255,255,0.4)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat', backgroundSize: '20px 20px', paddingRight: '40px' }} onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }}>
                                    <option value="" disabled style={{ backgroundColor: "#0F0F15" }}>Select a province</option>
                                    <option value="Gauteng" style={{ backgroundColor: "#0F0F15" }}>Gauteng</option>
                                    <option value="KwaZulu-Natal" style={{ backgroundColor: "#0F0F15" }}>KwaZulu-Natal</option>
                                    <option value="Western Cape" style={{ backgroundColor: "#0F0F15" }}>Western Cape</option>
                                    <option value="Eastern Cape" style={{ backgroundColor: "#0F0F15" }}>Eastern Cape</option>
                                    <option value="Free State" style={{ backgroundColor: "#0F0F15" }}>Free State</option>
                                    <option value="Limpopo" style={{ backgroundColor: "#0F0F15" }}>Limpopo</option>
                                    <option value="Mpumalanga" style={{ backgroundColor: "#0F0F15" }}>Mpumalanga</option>
                                    <option value="North West" style={{ backgroundColor: "#0F0F15" }}>North West</option>
                                    <option value="Northern Cape" style={{ backgroundColor: "#0F0F15" }}>Northern Cape</option>
                                </select>
                            </div>
                            <div className="form-field-full-width" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={LABEL_STYLE}>Your Message / Enquiry Details</label>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} style={{ ...INPUT_STYLE, resize: "vertical" }} onFocus={e => { e.currentTarget.style.borderColor = '#00B4A6'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} />
                            </div>
                        </div>
                        <button type="submit" disabled={status === "submitting"} style={{
                            ...BUTTON_STYLE,
                            backgroundColor: "#00B4A6",
                            boxShadow: "0 0 32px rgba(0,180,166,0.25)",
                            opacity: status === "submitting" ? 0.7 : 1,
                            cursor: status === "submitting" ? "not-allowed" : "pointer"
                        }} onMouseEnter={e => { if (status !== "submitting") { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(0,180,166,0.40)"; } }} onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(0,180,166,0.25)"; }}>
                            {status === "submitting" ? "Submitting..." : "Submit Registration Request"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export const ProvincialSummitSeries = () => {
    const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
    const [province, setProvince] = useState<string>('');
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'clamp(100px, 12vh, 140px)',
            paddingBottom: 'clamp(60px, 8vh, 100px)',
            overflow: 'hidden'
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
                zIndex: 1,
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
                        <img src="/features-18.jpg" alt="Cityscape" style={{
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
            <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", paddingLeft: "clamp(24px, 6vw, 80px)", paddingRight: "clamp(24px, 6vw, 80px)", paddingTop: "clamp(64px, 10vw, 96px)", paddingBottom: "clamp(64px, 10vw, 96px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
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
                }} style={{
                    fontFamily: 'Figtree',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '28px',
                    color: 'rgba(255,255,255,0.60)'
                }}>
                    SUMMIT SERIES 2027
                </motion.p>

                {/* Headline */}
                <h1 style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(44px, 8vw, 112px)",
                    letterSpacing: "-0.04em",
                    gap: "0.22em",
                    lineHeight: 1.0,
                    marginBottom: "40px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center"
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
                }} className="cta-container" style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center", marginBottom: "48px" }}>
                    <button onClick={e => {
                        e.preventDefault();
                        document.getElementById("provincial-enquiry-form")?.scrollIntoView({ behavior: "smooth" });
                    }} className="cta-button" style={{
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
                        boxShadow: '0 0 32px rgba(255,45,135,0.25)',
                        width: '200px'
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
                    <button onClick={e => {
                        e.preventDefault();
                        document.getElementById("provincial-matrix")?.scrollIntoView({ behavior: "smooth" });
                    }} className="cta-button" style={{
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
                        letterSpacing: '0.02em',
                        width: '200px'
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
                }} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                    {HERO_STATS.map((stat, idx) => {
                        const {
                            numeric,
                            suffix
                        } = parseStatValue(stat.value);
                        return <React.Fragment key={stat.id}>
                            <div className="stat-box" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 32px" }}>
                                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                                    <span style={{
                                        fontFamily: 'Figtree',
                                        fontSize: 'clamp(36px, 6vw, 52px)',
                                        fontWeight: 300,
                                        lineHeight: 1.0,
                                        color: '#FFFFFF',
                                        letterSpacing: '-0.04em'
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
        <section id="provincial-matrix" style={{
            backgroundColor: '#F7F6F2',
            paddingTop: '0',
            paddingBottom: '80px',
            color: '#0A0A0F'
        }} className="provincial-section-pad">
            {/* Partner marquee */}
            <div style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                padding: "24px 0",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                overflow: "hidden",
                marginBottom: "80px"
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
                    x: ["0%", "-50%"]
                  }} transition={{
                    duration: 35,
                    ease: "linear",
                    repeat: Infinity
                  }} style={{
                    display: "flex",
                    gap: "clamp(40px, 6vw, 80px)",
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
            <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "clamp(24px, 6vw, 48px)", paddingRight: "clamp(24px, 6vw, 48px)" }}>
                {/* Heading block */}
                <div style={{ marginBottom: "48px" }}>
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
                        <span style={{ fontFamily: "Figtree", fontSize: "10px", fontWeight: 700, letterSpacing: "0.25em", color: "#FF2D87", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>
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
                    }} style={{ fontFamily: "Figtree", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0, color: "#0A0A0F" }}>
                        Nine provinces. One ecosystem.
                    </motion.h2>
                </div>

                {/* Animated toggle bar */}
                <div style={{ display: "flex", width: "100%", borderRadius: "12px", padding: "4px", marginBottom: "48px", backgroundColor: "rgba(0,0,0,0.06)", position: "relative" }}>
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
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
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
                            <div className="summit-index-badge" style={{
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
                            <div className="summit-inner-layout" style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "32px 16px", gap: "24px" }}>
                                {/* Left Column: City & Date */}
                                <div className="summit-left-col" style={{ width: "240px", flexShrink: 0 }}>
                                    <h3 style={{ fontFamily: "Figtree", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 300, letterSpacing: "-0.02em", color: "#0A0A0F", margin: "0 0 8px 0" }}>
                                        {summit.city}
                                    </h3>
                                    <div style={{ fontFamily: "Figtree", fontSize: "13px", color: "#64748b", fontWeight: 500, marginBottom: "12px" }}>
                                        {summit.date}
                                    </div>
                                    <div style={{ display: "inline-flex", backgroundColor: "rgba(255, 45, 135, 0.1)", color: "#FF2D87", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "999px" }}>
                                        {summit.province}
                                    </div>
                                </div>

                                {/* Divider (Desktop) */}
                                <div className="summit-vertical-divider" style={{ width: "1px", height: "96px", backgroundColor: "rgba(0,0,0,0.06)", margin: "0 24px", flexShrink: 0 }} />

                                {/* Center Column: Summit Focus */}
                                <div className="summit-center-col" style={{ flex: 1 }}>
                                    <h4 style={{ fontFamily: "Figtree", fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 600, color: "#0A0A0F", margin: "0 0 16px 0", lineHeight: 1.35 }}>
                                        {summit.focusTitle}
                                    </h4>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        {summit.strategicDrivers.map(driver => <span key={driver} style={{ display: "inline-flex", padding: "4px 12px", borderRadius: "999px", border: "1px solid rgba(0,0,0,0.1)", fontSize: "11px", color: "#64748b", fontWeight: 500 }}>
                                            {driver}
                                        </span>)}
                                    </div>
                                </div>

                                {/* Divider (Desktop) */}
                                <div className="summit-vertical-divider" style={{ width: "1px", height: "96px", backgroundColor: "rgba(0,0,0,0.06)", margin: "0 24px", flexShrink: 0 }} />

                                {/* Right Column: Target Delegate & Action */}
                                <div className="summit-right-col" style={{ width: "260px", flexShrink: 0 }}>
                                    <div style={{ fontFamily: "Figtree", fontSize: "14px", color: "#64748b", lineHeight: 1.6, marginBottom: "20px", fontWeight: 500 }}>
                                        <span style={{ fontFamily: "Figtree", fontSize: "10px", color: "rgba(10,10,15,0.4)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "4px" }}>
                                            Target Profile
                                        </span>
                                        {summit.targetDelegate}
                                    </div>
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setProvince(summit.province);
                                        document.getElementById("provincial-enquiry-form")?.scrollIntoView({ behavior: "smooth" });
                                    }} className="summit-action-btn" style={{ width: "100%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", backgroundColor: "#FF2D87", border: "none", color: "#FFFFFF", borderRadius: "999px", fontWeight: 700, fontSize: "13px", letterSpacing: "0.05em", cursor: "pointer", transition: "all 200ms ease-out" }}>
                                        Apply for Seat
                                        <ArrowRight size={15} style={{ transition: "transform 200ms" }} className="summit-arrow-icon" />
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
        }} className="provincial-section-pad">
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

            <div style={{ position: "relative", zIndex: 10, maxWidth: "896px", margin: "0 auto", paddingLeft: "clamp(24px, 5vw, 40px)", paddingRight: "clamp(24px, 5vw, 40px)", textAlign: "center" }}>
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
                }} className="cta-container" style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center" }}>
                    <button onClick={e => {
                        e.preventDefault();
                        document.getElementById("provincial-enquiry-form")?.scrollIntoView({ behavior: "smooth" });
                    }} className="cta-button" style={{
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
                        letterSpacing: '0.02em',
                        width: '200px'
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1.1)';
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = 'brightness(1)';
                    }}>
                        Apply Now
                    </button>
                </motion.div>
            </div>
        </section>

        <ProvincialEnquiryForm province={province} setProvince={setProvince} />

        {/* ── Corporate Partnerships Section ── */}
        <section style={{
            position: 'relative',
            backgroundColor: '#0A0A0F',
            paddingTop: 'clamp(64px, 10vw, 120px)',
            paddingBottom: 'clamp(64px, 10vw, 120px)',
            paddingLeft: 'clamp(16px, 5vw, 96px)',
            paddingRight: 'clamp(16px, 5vw, 96px)',
            borderTop: '1px solid rgba(255,255,255,0.06)'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '48px',
                flexWrap: 'wrap'
            }} className="summits-flex-container">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ maxWidth: '600px', flex: '1 1 50%', minWidth: '300px' }}>
                    <span style={{ display: 'block', fontSize: '9px', fontWeight: 600, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
                        CORPORATE PARTNERSHIPS
                    </span>
                    <h2 style={{ fontFamily: 'Figtree', fontWeight: 300, color: '#FFFFFF', fontSize: 'clamp(24px, 3.5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '16px', marginBottom: 0 }}>
                        Partner with Africa's most influential women's executive platform.
                    </h2>
                    <p style={{ fontFamily: 'Figtree', fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '32rem', marginTop: '16px', marginBottom: 0 }}>
                        Unlock strategic visibility, thought leadership positioning, and direct access to senior decision-makers across our 2026–2027 summit calendar.
                    </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1 1 30%', minWidth: '240px' }} className="summits-cta-container">
                    <RouterLink to="/partnerships" style={{ textDecoration: 'none', width: '100%' }}>
                        <button style={{ width: '100%', fontFamily: 'Figtree', fontSize: 'clamp(14px, 1.5vw, 15px)', fontWeight: 500, color: '#FFFFFF', backgroundColor: '#FF2D87', borderRadius: '999px', padding: '16px 32px', border: 'none', cursor: 'pointer', transition: 'filter 200ms ease-out' }} onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}>
                            Explore Partnership Packages →
                        </button>
                    </RouterLink>
                    <RouterLink to="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                        <button style={{ width: '100%', fontFamily: 'Figtree', fontSize: 'clamp(13px, 1.5vw, 14px)', fontWeight: 400, color: 'rgba(255,255,255,0.60)', backgroundColor: 'transparent', borderRadius: '999px', padding: '12px 32px', border: '1px solid rgba(255,255,255,0.20)', cursor: 'pointer', transition: 'background-color 200ms ease-out' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                            Contact Our Partnerships Team
                        </button>
                    </RouterLink>
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
        .summit-action-btn:hover .summit-arrow-icon {
          transform: translateX(4px);
        }
        .provincial-section-pad {
          padding-top: 80px !important;
          padding-bottom: 80px !important;
        }
        .summit-index-badge {
          display: none !important;
        }
        @media (min-width: 768px) {
          .provincial-section-pad {
            padding-top: 128px !important;
            padding-bottom: 128px !important;
          }
        }
        @media (min-width: 640px) {
          .summit-index-badge {
            display: block !important;
          }
        }
        @media (max-width: 991px) {
            .summit-inner-layout {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 24px !important;
                padding: 24px 16px !important;
            }
            .summit-left-col, .summit-center-col, .summit-right-col {
                width: 100% !important;
            }
            .summit-vertical-divider {
                display: none !important;
            }
        }
        @media (max-width: 640px) {
            .cta-container {
                flex-direction: column !important;
                width: 100% !important;
            }
            .cta-button, .stat-box {
                width: 100% !important;
            }
        }
      `}</style>
    </div>;
};

export default ProvincialSummitSeries;