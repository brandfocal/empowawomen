import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Calendar, MapPin, Users, CheckCircle, Loader2, X } from "lucide-react";
const STREAMS_DATA = [{
    id: 1,
    number: "STREAM 01",
    title: "Artificial Intelligence & The Digital Economy",
    date: "Thu 15 Apr 2027",
    accent: "#FF2D87",
    strategicInsight: "AI reshaping leadership, business models, customer ecosystems, and workforce globally.",
    delegateROI: "Digital transformation insights, strategic tech partnerships, AI adoption frameworks, investor access, innovation ecosystems."
}, {
    id: 2,
    number: "STREAM 02",
    title: "Capital Investment & Financial Ecosystems",
    date: "Sat 15 May 2027",
    accent: "#00B4A6",
    strategicInsight: "Capital remains the greatest accelerator of scalable women-led economic participation.",
    delegateROI: "Funding intelligence, investor engagement, deal flow, wealth creation strategies, investment readiness."
}, {
    id: 3,
    number: "STREAM 03",
    title: "Energy Transition Mining & Climate Innovation",
    date: "Thu 17 Jun 2027",
    accent: "#D97706",
    strategicInsight: "Africa energy transition and climate economy present trillion-rand opportunities.",
    delegateROI: "ESG positioning, climate funding, energy partnerships, sustainability leadership, future economy."
}, {
    id: 4,
    number: "STREAM 04",
    title: "Property Infrastructure & Future Cities",
    date: "Sat 17 Jul 2027",
    accent: "#FF2D87",
    strategicInsight: "Urbanisation and infrastructure development remain key drivers of economic growth.",
    delegateROI: "Property investment, infrastructure partnerships, procurement, smart city innovation, development finance."
}, {
    id: 5,
    number: "STREAM 05",
    title: "Agriculture Food Systems & Agri-Innovation",
    date: "Thu 19 Aug 2027",
    accent: "#00B4A6",
    strategicInsight: "Food security, agri-tech and sustainable agriculture becoming strategic priorities globally.",
    delegateROI: "Market access, agri-finance, value-chain partnerships, innovation, rural economic growth."
}, {
    id: 6,
    number: "STREAM 06",
    title: "Healthcare Wellness & The Care Economy",
    date: "Sat 18 Sep 2027",
    accent: "#D97706",
    strategicInsight: "Care economy and healthcare innovation among fastest-growing industries globally.",
    delegateROI: "Healthcare innovation insights, wellness partnerships, healthcare investment access, future care economy."
}, {
    id: 7,
    number: "STREAM 07",
    title: "Media Creative Economies & Cultural Influence",
    date: "Thu 14 Oct 2027",
    accent: "#FF2D87",
    strategicInsight: "Influence, storytelling and creator economies redefining brand power and commercial growth.",
    delegateROI: "Media visibility, strategic collaborations, personal brand positioning, audience growth, monetisation."
}, {
    id: 8,
    number: "STREAM 08",
    title: "Manufacturing Trade & Industrial Transformation",
    date: "Sat 23 Oct 2027",
    accent: "#00B4A6",
    strategicInsight: "Industrialisation and intra-African trade critical pillars for economic competitiveness.",
    delegateROI: "Trade opportunities, supply-chain partnerships, export readiness, AfCFTA insights, industrial growth."
}, {
    id: 9,
    number: "STREAM 09",
    title: "Retail Luxury Tourism & Consumer Economies",
    date: "Thu 11 Nov 2027",
    accent: "#D97706",
    strategicInsight: "Consumer markets evolving through digital commerce, experiential retail, and premium lifestyle.",
    delegateROI: "Customer growth, luxury market positioning, tourism partnerships, retail innovation, consumer intelligence."
}, {
    id: 10,
    number: "STREAM 10",
    title: "Executive Leadership Governance & Enterprise Growth",
    date: "Sat 27 Nov 2027",
    accent: "#FF2D87",
    strategicInsight: "Future belongs to leaders who scale influence, build resilient organisations, and drive transformation.",
    delegateROI: "Board leadership insights, executive positioning, governance excellence, strategic partnerships, enterprise growth."
}];
const HERO_WORDS = ["Industry", "Intelligence.", "Executive", "Execution."];
const META_ITEMS = [{
    id: "meta-calendar",
    Icon: Calendar,
    text: "April – November 2027"
}, {
    id: "meta-location",
    Icon: MapPin,
    text: "EmpowaWorx House, Johannesburg"
}, {
    id: "meta-delegates",
    Icon: Users,
    text: "100 Delegates Per Session"
}];
const HERO_STATS = [{
    id: "stat-streams",
    value: "10",
    suffix: "Streams",
    caption: "Thematic Deep-Dives"
}, {
    id: "stat-months",
    value: "8",
    suffix: "Months",
    caption: "Apr to Nov 2027"
}, {
    id: "stat-delegates",
    value: "100",
    suffix: "Delegates",
    caption: "Per Session Cap"
}];
const TRUST_SIGNALS = [{
    id: "trust-1",
    text: "Curated delegate vetting process"
}, {
    id: "trust-2",
    text: "Confirmation within 48 hours"
}, {
    id: "trust-3",
    text: "Complimentary executive brief on registration"
}];
const INPUT_STYLE: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "8px",
    padding: "12px 16px",
    fontFamily: "Figtree",
    fontSize: "14px",
    color: "#FFFFFF",
    outline: "none",
    transition: "border-color 200ms",
    boxSizing: "border-box"
};
const LABEL_STYLE: React.CSSProperties = {
    fontFamily: "Figtree",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.50)",
    marginBottom: "6px",
    display: "block"
};
type FormData = {
    name: string;
    title: string;
    organisation: string;
    email: string;
    stream: string;
    message: string;
};
type SubmitState = "idle" | "submitting" | "success";
const EMPTY_FORM: FormData = {
    name: "",
    title: "",
    organisation: "",
    email: "",
    stream: "",
    message: ""
};
export const ExecutiveIndustrySeries: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const {
        scrollY
    } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
    const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
    const [submitState, setSubmitState] = useState<SubmitState>("idle");
    const [error, setError] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerStream, setDrawerStream] = useState<number | null>(null);
    const [drawerFormData, setDrawerFormData] = useState<FormData>(EMPTY_FORM);
    const [drawerSubmitState, setDrawerSubmitState] = useState<SubmitState>("idle");
    const [drawerError, setDrawerError] = useState("");

    const handleSubmit = async () => {
        if (!formData.name || !formData.title || !formData.organisation || !formData.email || !formData.stream) {
            setError("Please fill in all required fields.");
            return;
        }

        setError("");
        setSubmitState("submitting");

        const streamObj = STREAMS_DATA.find(s => String(s.id) === formData.stream);
        const streamValue = streamObj ? `${streamObj.number} - ${streamObj.title} (${streamObj.date})`.replace(/ & /g, " &amp; ") : formData.stream;

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    form_id: 18,
                    input_values: {
                        '10': formData.name,
                        'input_10': formData.name,
                        '11': formData.title,
                        'input_11': formData.title,
                        '14': formData.organisation,
                        'input_14': formData.organisation,
                        '4': formData.email,
                        'input_4': formData.email,
                        '13': streamValue,
                        'input_13': streamValue,
                        '9': formData.message,
                        'input_9': formData.message
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit expression of interest.');
            }

            setSubmitState("success");
            setFormData(EMPTY_FORM);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred. Please try again.");
            setSubmitState("idle");
        }
    };

    const handleDrawerSubmit = async () => {
        const streamVal = drawerFormData.stream || (drawerStream !== null ? String(drawerStream) : "");
        if (!drawerFormData.name || !drawerFormData.title || !drawerFormData.organisation || !drawerFormData.email || !streamVal) {
            setDrawerError("Please fill in all required fields.");
            return;
        }

        setDrawerError("");
        setDrawerSubmitState("submitting");

        const streamObj = STREAMS_DATA.find(s => String(s.id) === streamVal);
        const streamValue = streamObj ? `${streamObj.number} - ${streamObj.title} (${streamObj.date})`.replace(/ & /g, " &amp; ") : streamVal;

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    form_id: 18,
                    input_values: {
                        '10': drawerFormData.name,
                        'input_10': drawerFormData.name,
                        '11': drawerFormData.title,
                        'input_11': drawerFormData.title,
                        '14': drawerFormData.organisation,
                        'input_14': drawerFormData.organisation,
                        '4': drawerFormData.email,
                        'input_4': drawerFormData.email,
                        '13': streamValue,
                        'input_13': streamValue,
                        '9': drawerFormData.message,
                        'input_9': drawerFormData.message
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit expression of interest.');
            }

            setDrawerSubmitState("success");
            setDrawerFormData(EMPTY_FORM);
        } catch (err: any) {
            setDrawerError(err.message || "An unexpected error occurred. Please try again.");
            setDrawerSubmitState("idle");
        }
    };

    const openDrawer = (streamId: number | null) => {
        setDrawerStream(streamId);
        const preStream = streamId !== null ? String(streamId) : "";
        setDrawerFormData({
            ...EMPTY_FORM,
            stream: preStream
        });
        setDrawerSubmitState("idle");
        setDrawerError("");
        setDrawerOpen(true);
    };
    const closeDrawer = () => {
        setDrawerOpen(false);
    };
    const drawerStreamObj = drawerStream !== null ? STREAMS_DATA.find(s => s.id === drawerStream) : null;
    return <div style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0F",
        color: "#FFFFFF",
        overflowX: "hidden",
        fontFamily: "Figtree"
    }}>

        {/* ── HERO SECTION ── */}
        <section style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#0A0A0F",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "68px",
            paddingBottom: "80px"
        }}>
            {/* Film grain overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 3,
                opacity: 0.04,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                backgroundSize: "256px 256px",
                animation: "grainShift 0.8s steps(1) infinite"
            }} />

            {/* Background image */}
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
                            src="/features-7.jpg"
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
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

            {/* Bottom fade */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
                pointerEvents: "none",
                zIndex: 2
            }} />

            {/* Content wrapper */}
            <div className="hero-content" style={{
                position: "relative",
                zIndex: 10,
                width: "100%",
                maxWidth: "1400px",
                paddingLeft: "clamp(20px, 5vw, 48px)",
                paddingRight: "clamp(20px, 5vw, 48px)",
                paddingTop: "clamp(80px, 12vw, 128px)",
                paddingBottom: "48px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {/* Eyebrow pill */}
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
                    marginBottom: "20px"
                }}>
                    <span style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#FF2D87",
                        display: "inline-block",
                        flexShrink: 0
                    }} />
                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.60)",
                        margin: 0
                    }}>
                        THEMATIC DEEP-DIVES · 10 SESSIONS 2027
                    </p>
                </motion.div>

                {/* Headline */}
                <h1 style={{
                    fontFamily: "Figtree",
                    fontWeight: 300,
                    fontSize: "clamp(40px, 8vw, 112px)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.0,
                    color: "#FFFFFF",
                    textAlign: "center",
                    margin: 0,
                    marginBottom: "40px"
                }}>
                    {HERO_WORDS.map((word, i) => {
                        const hasPeriod = word.endsWith(".");
                        const wordBase = hasPeriod ? word.slice(0, -1) : word;
                        return <motion.span key={`hero-word-${word}-${i}`} initial={{
                            opacity: 0,
                            filter: "blur(12px)",
                            y: 20
                        }} animate={{
                            opacity: 1,
                            filter: "blur(0px)",
                            y: 0
                        }} transition={{
                            duration: 0.8,
                            delay: 0.4 + i * 0.1,
                            ease: [0.21, 0.47, 0.32, 0.98]
                        }} style={{
                            display: "inline-block",
                            marginRight: "0.2em",
                            position: "relative"
                        }}>
                            {hasPeriod ? <span>
                                {wordBase}
                                <span style={{
                                    color: "#FF2D87"
                                }}>.</span>
                                <motion.span initial={{
                                    scaleX: 0
                                }} animate={{
                                    scaleX: 1
                                }} transition={{
                                    delay: 1.5 + i * 0.2,
                                    duration: 0.8
                                }} style={{
                                    position: "absolute",
                                    bottom: "-2px",
                                    left: 0,
                                    width: "100%",
                                    height: "1.5px",
                                    backgroundColor: "#FF2D87",
                                    transformOrigin: "left",
                                    display: "block"
                                }} />
                            </span> : word}
                        </motion.span>;
                    })}
                </h1>

                {/* Meta strip */}
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.8,
                    delay: 1.0
                }} className="hero-meta-strip" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0",
                    color: "rgba(255,255,255,0.60)",
                    marginBottom: "40px"
                }}>
                    {META_ITEMS.map((item, idx) => <div key={item.id} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        paddingRight: idx < META_ITEMS.length - 1 ? "20px" : "0",
                        paddingLeft: idx > 0 ? "20px" : "0",
                        borderRight: idx < META_ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none",
                        marginBottom: "8px"
                    }}>
                        <item.Icon size={15} color="#FF2D87" />
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "13px"
                        }}>{item.text}</span>
                    </div>)}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1
                }} transition={{
                    duration: 1,
                    delay: 1.4
                }} className="hero-cta-row" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "center",
                    width: "100%"
                }}>
                    <button onClick={() => openDrawer(null)} className="hero-cta-primary" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "16px 32px",
                        backgroundColor: "#FF2D87",
                        color: "#FFFFFF",
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        fontWeight: 500,
                        border: "none",
                        borderRadius: "999px",
                        cursor: "pointer",
                        transition: "filter 200ms ease-out",
                        boxShadow: "0 0 32px rgba(255,45,135,0.25)",
                        letterSpacing: "0.02em"
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                    }}>
                        <span>Reserve Your Stream Seat</span>
                        <ArrowRight size={16} />
                    </button>
                    <button className="hero-cta-secondary" style={{
                        padding: "16px 32px",
                        backgroundColor: "transparent",
                        color: "rgba(255,255,255,0.80)",
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        fontWeight: 400,
                        border: "1px solid rgba(255,255,255,0.20)",
                        borderRadius: "999px",
                        cursor: "pointer",
                        transition: "background-color 200ms ease-out, border-color 200ms ease-out",
                        letterSpacing: "0.02em"
                    }} onMouseEnter={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.backgroundColor = "rgba(255,255,255,0.08)";
                        el.style.borderColor = "rgba(255,255,255,0.40)";
                    }} onMouseLeave={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.backgroundColor = "transparent";
                        el.style.borderColor = "rgba(255,255,255,0.20)";
                    }} onClick={() => {
                        const el = document.querySelector(".streams-grid");
                        if (el) {
                            el.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        } else {
                            const sections = document.querySelectorAll("section");
                            if (sections[1]) sections[1].scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                        }
                    }}>
                        View All Streams
                    </button>
                </motion.div>

                {/* Hero Stats Strip */}
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.8,
                    delay: 1.8
                }} className="hero-stats-strip" style={{
                    marginTop: "56px",
                    paddingTop: "40px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "0",
                    width: "100%",
                    maxWidth: "800px",
                    alignSelf: "center"
                }}>
                    {HERO_STATS.map((stat, idx) => <div key={stat.id} className="hero-stat-item" style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        paddingLeft: "clamp(20px, 4vw, 40px)",
                        paddingRight: "clamp(20px, 4vw, 40px)",
                        borderRight: idx < HERO_STATS.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "4px"
                        }}>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "clamp(36px, 5vw, 52px)",
                                fontWeight: 300,
                                color: "#FFFFFF",
                                letterSpacing: "-0.04em",
                                lineHeight: 1.0
                            }}>
                                {stat.value}
                            </span>
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "13px",
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.50)",
                                letterSpacing: "0.05em",
                                marginLeft: "6px",
                                alignSelf: "flex-end",
                                paddingBottom: "6px"
                            }}>
                                {stat.suffix}
                            </span>
                        </div>
                        <p style={{
                            fontFamily: "Figtree",
                            fontSize: "11px",
                            fontWeight: 400,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.35)",
                            margin: 0,
                            marginTop: "8px"
                        }}>
                            {stat.caption}
                        </p>
                    </div>)}
                </motion.div>
            </div>

            <style>{`
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
          .field-input::placeholder { color: rgba(255,255,255,0.30); }
          .field-input:focus { border-color: #FF2D87 !important; }
          .field-select { color-scheme: dark; }
          .field-select option { background-color: rgba(10,10,15,0.95); color: #FFFFFF; }

          /* ── Mobile ── */
          @media (max-width: 767px) {
            .streams-grid { grid-template-columns: 1fr !important; }
            .register-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .form-name-row { grid-template-columns: 1fr !important; }
            .hero-cta-primary,
            .hero-cta-secondary { width: 100% !important; }
            .hero-cta-row { flex-direction: column !important; }
            .hero-meta-strip > div {
              padding-left: 12px !important;
              padding-right: 12px !important;
              font-size: 12px !important;
            }
            .stream-card-inner { min-height: 220px !important; padding: 24px !important; }
            .stream-date { display: none !important; }
            .streams-bottom-row { flex-direction: column !important; }
            .streams-bottom-btn { width: 100% !important; justify-content: center !important; }
            .cta-section-btns { flex-direction: column !important; }
            .cta-section-btn { width: 100% !important; justify-content: center !important; }
          }

          /* ── Tablet ── */
          @media (min-width: 768px) and (max-width: 1023px) {
            .streams-grid { grid-template-columns: 1fr !important; }
            .register-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          }
        `}</style>
        </section>

        {/* ── INDUSTRY STREAMS — EDITORIAL GRID ── */}
        <section style={{
            backgroundColor: "#0A0A0F",
            paddingTop: "clamp(64px, 10vw, 128px)",
            paddingBottom: "clamp(64px, 10vw, 128px)",
            position: "relative",
            color: "#FFFFFF"
        }}>
            <div style={{
                maxWidth: "1400px",
                margin: "0 auto",
                paddingLeft: "clamp(20px, 5vw, 48px)",
                paddingRight: "clamp(20px, 5vw, 48px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(48px, 6vw, 80px)"
            }}>
                {/* Section heading block */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "24px",
                    marginBottom: "16px"
                }}>
                    <motion.span initial={{
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
                        fontWeight: 700,
                        letterSpacing: "0.3em",
                        color: "#FF2D87",
                        textTransform: "uppercase",
                        display: "block"
                    }}>
                        INDUSTRY STREAMS
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
                        duration: 0.8,
                        delay: 0.1
                    }} style={{
                        fontFamily: "Figtree",
                        fontSize: "clamp(32px, 5vw, 64px)",
                        fontWeight: 300,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        color: "#FFFFFF",
                        margin: 0
                    }}>
                        Ten streams. Ten economic frontiers.
                    </motion.h2>
                    <motion.p initial={{
                        opacity: 0
                    }} whileInView={{
                        opacity: 1
                    }} viewport={{
                        once: true
                    }} transition={{
                        duration: 0.7,
                        delay: 0.25
                    }} style={{
                        fontFamily: "Figtree",
                        fontSize: "clamp(15px, 2vw, 18px)",
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.75,
                        maxWidth: "560px",
                        margin: 0
                    }}>
                        Each session is engineered to deliver strategic intelligence, curated networks, and measurable ROI for
                        executive delegates.
                    </motion.p>
                </div>

                {/* Streams grid */}
                <div className="streams-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1px",
                    backgroundColor: "rgba(255,255,255,0.08)"
                }}>
                    {STREAMS_DATA.map((stream, index) => <div key={stream.id} style={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "#0A0A0F",
                        cursor: "pointer"
                    }} onMouseEnter={() => setHoveredCard(stream.id)} onMouseLeave={() => setHoveredCard(null)}>
                        {/* Accent line on left edge */}
                        <div style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "2px",
                            height: "100%",
                            backgroundColor: stream.accent,
                            opacity: 1,
                            transition: "opacity 300ms",
                            zIndex: 1
                        }} />

                        {/* Card inner wrapper */}
                        <motion.div initial={{
                            opacity: 0,
                            y: 24
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true
                        }} transition={{
                            duration: 0.6,
                            delay: index % 2 * 0.1
                        }} className="stream-card-inner" style={{
                            position: "relative",
                            padding: "clamp(24px, 3vw, 48px)",
                            minHeight: "280px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "24px"
                        }}>
                            {/* Top row */}
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "16px"
                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                }}>
                                    <span style={{
                                        fontFamily: "Figtree",
                                        fontSize: "10px",
                                        fontWeight: 700,
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase",
                                        color: stream.accent
                                    }}>
                                        {stream.number}
                                    </span>
                                    <h3 style={{
                                        fontFamily: "Figtree",
                                        fontSize: "clamp(16px, 1.8vw, 24px)",
                                        fontWeight: 400,
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.2,
                                        color: "#FFFFFF",
                                        margin: 0,
                                        maxWidth: "380px"
                                    }}>
                                        {stream.title}
                                    </h3>
                                </div>
                                <span className="stream-date" style={{
                                    fontFamily: "Figtree",
                                    fontSize: "11px",
                                    fontWeight: 400,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.25)",
                                    flexShrink: 0,
                                    paddingTop: "2px"
                                }}>
                                    {stream.date}
                                </span>
                            </div>

                            {/* Ambient number */}
                            <div style={{
                                position: "absolute",
                                bottom: "-16px",
                                right: "32px",
                                pointerEvents: "none",
                                userSelect: "none"
                            }}>
                                <span style={{
                                    fontFamily: "Figtree",
                                    fontSize: "clamp(60px, 8vw, 120px)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.05em",
                                    color: hoveredCard === stream.id ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
                                    lineHeight: 1,
                                    display: "block",
                                    transition: "color 300ms"
                                }}>
                                    {String(stream.id).padStart(2, "0")}
                                </span>
                            </div>
                        </motion.div>

                        {/* Hover reveal panel */}
                        <AnimatePresence>
                            {hoveredCard === stream.id && <motion.div initial={{
                                y: "100%",
                                opacity: 0
                            }} animate={{
                                y: "0%",
                                opacity: 1
                            }} exit={{
                                y: "100%",
                                opacity: 0
                            }} transition={{
                                duration: 0.35,
                                ease: [0.23, 1, 0.32, 1]
                            }} style={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 10,
                                backgroundColor: stream.accent,
                                padding: "clamp(24px, 3vw, 48px)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",
                                justifyContent: "space-between",
                                height: "100%"
                            }}>
                                {/* Panel top */}
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px"
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
                                    }}>
                                        <span style={{
                                            fontFamily: "Figtree",
                                            fontSize: "9px",
                                            fontWeight: 700,
                                            letterSpacing: "0.3em",
                                            textTransform: "uppercase",
                                            color: "rgba(255,255,255,0.70)"
                                        }}>
                                            STRATEGIC INSIGHT
                                        </span>
                                        <p style={{
                                            fontFamily: "Figtree",
                                            fontSize: "clamp(13px, 1.5vw, 15px)",
                                            color: "#FFFFFF",
                                            lineHeight: 1.7,
                                            margin: 0
                                        }}>
                                            {stream.strategicInsight}
                                        </p>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px"
                                    }}>
                                        <span style={{
                                            fontFamily: "Figtree",
                                            fontSize: "9px",
                                            fontWeight: 700,
                                            letterSpacing: "0.3em",
                                            textTransform: "uppercase",
                                            color: "rgba(255,255,255,0.70)"
                                        }}>
                                            DELEGATE ROI
                                        </span>
                                        <p style={{
                                            fontFamily: "Figtree",
                                            fontSize: "clamp(13px, 1.5vw, 15px)",
                                            color: "#FFFFFF",
                                            lineHeight: 1.7,
                                            margin: 0
                                        }}>
                                            {stream.delegateROI}
                                        </p>
                                    </div>
                                </div>

                                {/* Panel bottom CTA */}
                                <button onClick={() => openDrawer(stream.id)} style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                    backgroundColor: "#FFFFFF",
                                    border: "1px solid rgba(255,255,255,0.40)",
                                    color: stream.accent,
                                    fontFamily: "Figtree",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    borderRadius: "999px",
                                    cursor: "pointer",
                                    transition: "all 200ms",
                                    alignSelf: "flex-start"
                                }} onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLButtonElement;
                                    el.style.backgroundColor = "rgba(255,255,255,0.85)";
                                }} onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLButtonElement;
                                    el.style.backgroundColor = "#FFFFFF";
                                }}>
                                    Reserve Seat for This Stream
                                    <ArrowRight size={14} />
                                </button>
                            </motion.div>}
                        </AnimatePresence>
                    </div>)}
                </div>

                {/* Bottom action row */}
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
                }} className="streams-bottom-row" style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    paddingTop: "clamp(32px, 5vw, 64px)",
                    flexWrap: "wrap"
                }}>
                    <button onClick={() => openDrawer(null)} className="streams-bottom-btn" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "16px 32px",
                        backgroundColor: "#FF2D87",
                        color: "#FFFFFF",
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        fontWeight: 500,
                        border: "none",
                        borderRadius: "999px",
                        cursor: "pointer",
                        transition: "filter 200ms ease-out",
                        boxShadow: "0 0 32px rgba(255,45,135,0.25)"
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                    }}>
                        <span>Reserve Your Stream Seat</span>
                        <ArrowRight size={16} />
                    </button>
                    <button className="streams-bottom-btn" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "16px 32px",
                        backgroundColor: "transparent",
                        color: "rgba(255,255,255,0.70)",
                        fontFamily: "Figtree",
                        fontSize: "15px",
                        fontWeight: 400,
                        border: "1px solid rgba(255,255,255,0.20)",
                        borderRadius: "999px",
                        cursor: "not-allowed",
                        transition: "background-color 200ms ease-out",
                        opacity: 0.35
                    }} aria-disabled="true" disabled>
                        <Download size={16} />
                        <span>Download Stream Calendar</span>
                    </button>
                </motion.div>
            </div>
        </section>

        {/* ── INLINE REGISTRATION SECTION ── */}
        <section id="register" style={{
            backgroundColor: "#0A0A0F",
            paddingTop: "clamp(64px, 10vw, 128px)",
            paddingBottom: "clamp(64px, 10vw, 128px)",
            position: "relative",
            overflow: "hidden",
            color: "#FFFFFF"
        }}>
            {/* Background */}
            <div style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none"
            }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "48px 48px"
                }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, #0A0A0F 0%, transparent 20%, transparent 80%, #0A0A0F 100%)"
                }} />
            </div>

            {/* Inner wrapper */}
            <div className="register-grid" style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "1200px",
                margin: "0 auto",
                paddingLeft: "clamp(20px, 5vw, 48px)",
                paddingRight: "clamp(20px, 5vw, 48px)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(40px, 6vw, 80px)",
                alignItems: "start"
            }}>
                {/* LEFT COLUMN — Editorial intro */}
                <motion.div whileInView={{
                    opacity: 1,
                    y: 0
                }} initial={{
                    opacity: 0,
                    y: 20
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7
                }} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px"
                }}>
                    <span style={{
                        fontFamily: "Figtree",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#FF2D87"
                    }}>
                        DELEGATE REGISTRATION
                    </span>
                    <h2 style={{
                        fontFamily: "Figtree",
                        fontSize: "clamp(28px, 4vw, 56px)",
                        fontWeight: 300,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        color: "#FFFFFF",
                        margin: 0
                    }}>
                        Reserve your seat. Lead the conversation.
                    </h2>
                    <p style={{
                        fontFamily: "Figtree",
                        fontSize: "clamp(15px, 2vw, 18px)",
                        color: "rgba(255,255,255,0.50)",
                        lineHeight: 1.75,
                        margin: 0
                    }}>
                        Each stream is capped at 100 delegates. Submit your expression of interest and our team will confirm your
                        place within 48 hours.
                    </p>
                    {/* Trust signals */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        marginTop: "8px"
                    }}>
                        {TRUST_SIGNALS.map(signal => <div key={signal.id} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px"
                        }}>
                            <CheckCircle size={16} color="#FF2D87" />
                            <span style={{
                                fontFamily: "Figtree",
                                fontSize: "14px",
                                color: "rgba(255,255,255,0.55)"
                            }}>
                                {signal.text}
                            </span>
                        </div>)}
                    </div>
                </motion.div>

                {/* RIGHT COLUMN — Registration form */}
                <motion.div whileInView={{
                    opacity: 1,
                    y: 0
                }} initial={{
                    opacity: 0,
                    y: 24
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7,
                    delay: 0.15
                }}>
                    <div style={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                        padding: "clamp(24px, 4vw, 48px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}>
                        {submitState === "success" ? <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "20px",
                            padding: "48px 24px",
                            textAlign: "center",
                            minHeight: "320px"
                        }}>
                            <CheckCircle size={48} color="#FF2D87" />
                            <h3 style={{
                                fontFamily: "Figtree",
                                fontSize: "24px",
                                fontWeight: 300,
                                color: "#FFFFFF",
                                margin: 0
                            }}>
                                Application received.
                            </h3>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "16px",
                                color: "rgba(255,255,255,0.50)",
                                lineHeight: 1.75,
                                margin: 0
                            }}>
                                Our delegate relations team will be in touch within 48 hours to confirm your seat.
                            </p>
                            <button onClick={() => setSubmitState("idle")} style={{
                                backgroundColor: "transparent",
                                border: "1px solid rgba(255,255,255,0.15)",
                                color: "rgba(255,255,255,0.50)",
                                borderRadius: "999px",
                                padding: "10px 24px",
                                fontFamily: "Figtree",
                                fontSize: "13px",
                                cursor: "pointer"
                            }}>
                                Submit another application
                            </button>
                        </div> : <React.Fragment>
                            {error && (
                                <div style={{
                                    padding: "12px 16px",
                                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                                    border: "1px solid rgba(239, 68, 68, 0.2)",
                                    borderRadius: "12px",
                                    color: "#EF4444",
                                    fontSize: "13px",
                                    fontFamily: "Figtree",
                                    lineHeight: 1.4,
                                    marginBottom: "12px"
                                }}>
                                    {error}
                                </div>
                            )}
                            {/* Name + Title row */}
                            <div className="form-name-row" style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "16px"
                            }}>
                                <div>
                                    <label style={LABEL_STYLE}>Full Name</label>
                                    <input className="field-input" type="text" placeholder="Your full name" value={formData.name} onChange={e => setFormData(prev => ({
                                        ...prev,
                                        name: e.target.value
                                    }))} style={INPUT_STYLE} />
                                </div>
                                <div>
                                    <label style={LABEL_STYLE}>Executive Title</label>
                                    <input className="field-input" type="text" placeholder="CEO, MD, Director…" value={formData.title} onChange={e => setFormData(prev => ({
                                        ...prev,
                                        title: e.target.value
                                    }))} style={INPUT_STYLE} />
                                </div>
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Organisation</label>
                                <input className="field-input" type="text" placeholder="Company or institution" value={formData.organisation} onChange={e => setFormData(prev => ({
                                    ...prev,
                                    organisation: e.target.value
                                }))} style={INPUT_STYLE} />
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Email Address</label>
                                <input className="field-input" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }))} style={INPUT_STYLE} />
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Preferred Stream</label>
                                <select className="field-input field-select" value={formData.stream} onChange={e => setFormData(prev => ({
                                    ...prev,
                                    stream: e.target.value
                                }))} style={{
                                    ...INPUT_STYLE,
                                    backgroundColor: "rgba(10,10,15,0.95)"
                                }}>
                                    <option value="">Select a stream…</option>
                                    {STREAMS_DATA.map(s => <option key={s.id} value={String(s.id)}>
                                        {s.number} - {s.title}
                                    </option>)}
                                </select>
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Message / Special Requirements</label>
                                <textarea className="field-input" rows={3} placeholder="Any special requirements or message…" value={formData.message} onChange={e => setFormData(prev => ({
                                    ...prev,
                                    message: e.target.value
                                }))} style={{
                                    ...INPUT_STYLE,
                                    resize: "none"
                                }} />
                            </div>
                            <button type="button" onClick={handleSubmit} disabled={submitState === "submitting"} style={{
                                width: "100%",
                                backgroundColor: "#FF2D87",
                                color: "#FFFFFF",
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                fontWeight: 500,
                                borderRadius: "999px",
                                padding: "16px 32px",
                                border: "none",
                                cursor: "pointer",
                                transition: "filter 200ms",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                                boxShadow: "0 0 32px rgba(255,45,135,0.25)"
                            }} onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                            }} onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                            }}>
                                {submitState === "submitting" ? <React.Fragment>
                                    <Loader2 size={18} className="animate-spin" />
                                    <span>Submitting…</span>
                                </React.Fragment> : <React.Fragment>
                                    <span>Submit Expression of Interest</span>
                                    <ArrowRight size={18} />
                                </React.Fragment>}
                            </button>
                        </React.Fragment>}
                    </div>
                </motion.div>
            </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section style={{
            backgroundColor: "#0A0A0F",
            paddingTop: "clamp(80px, 12vw, 160px)",
            paddingBottom: "clamp(80px, 12vw, 160px)",
            position: "relative",
            overflow: "hidden"
        }}>
            <div style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                overflow: "hidden"
            }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "repeating-linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "48px 48px"
                }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, #0A0A0F 0%, transparent 20%, transparent 80%, #0A0A0F 100%)"
                }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,45,135,0.04) 0%, transparent 70%)",
                    pointerEvents: "none"
                }} />
            </div>

            <div style={{
                maxWidth: "896px",
                margin: "0 auto",
                paddingLeft: "clamp(20px, 5vw, 48px)",
                paddingRight: "clamp(20px, 5vw, 48px)",
                textAlign: "center",
                position: "relative",
                zIndex: 10
            }}>
                <motion.div initial={{
                    opacity: 0,
                    scale: 0.9
                }} whileInView={{
                    opacity: 1,
                    scale: 1
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.6
                }} style={{
                    marginBottom: "32px",
                    display: "inline-block"
                }}>
                    <span style={{
                        fontFamily: "Figtree",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.4em",
                        color: "#FF2D87",
                        textTransform: "uppercase",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        padding: "8px 16px",
                        borderRadius: "999px",
                        border: "1px solid rgba(255,255,255,0.10)",
                        display: "inline-block"
                    }}>
                        JOIN THE ELITE
                    </span>
                </motion.div>

                <motion.h2 initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(12px)"
                }} whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.9,
                    delay: 0.15,
                    ease: [0.21, 0.47, 0.32, 0.98]
                }} style={{
                    fontFamily: "Figtree",
                    fontSize: "clamp(32px, 7vw, 72px)",
                    fontWeight: 300,
                    letterSpacing: "-0.04em",
                    color: "#FFFFFF",
                    marginBottom: "40px",
                    lineHeight: 1.1
                }}>
                    Reserve your stream seat.
                </motion.h2>

                <motion.p initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.7,
                    delay: 0.3
                }} style={{
                    fontFamily: "Figtree",
                    color: "rgba(255,255,255,0.50)",
                    fontSize: "clamp(15px, 2vw, 20px)",
                    maxWidth: "672px",
                    margin: "0 auto 56px auto",
                    lineHeight: 1.75
                }}>
                    Secure your presence at the economic frontier. Curated intelligence for leaders who demand execution.
                </motion.p>

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
                    delay: 0.5
                }} className="cta-section-btns" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px"
                }}>
                    <button className="cta-section-btn" style={{
                        padding: "18px 40px",
                        backgroundColor: "#FF2D87",
                        color: "#FFFFFF",
                        fontFamily: "Figtree",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        border: "none",
                        borderRadius: "999px",
                        cursor: "pointer",
                        transition: "filter 200ms ease-out",
                        boxShadow: "0 0 48px rgba(255,45,135,0.40)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }} onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                    }} onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                    }} onClick={() => openDrawer(null)}>
                        Reserve Now
                    </button>
                    <button className="cta-section-btn" style={{
                        padding: "18px 40px",
                        backgroundColor: "transparent",
                        color: "#FFFFFF",
                        fontFamily: "Figtree",
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderRadius: "999px",
                        cursor: "not-allowed",
                        transition: "background-color 200ms ease-out",
                        opacity: 0.35,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }} aria-disabled="true" disabled>
                        Download Stream Brochure
                    </button>
                </motion.div>
            </div>
        </section>



        {/* ── SLIDE-IN DRAWER ── */}
        <AnimatePresence>
            {drawerOpen && <React.Fragment>
                {/* Backdrop */}
                <motion.div key="drawer-backdrop" initial={{
                    opacity: 0
                }} animate={{
                    opacity: 1
                }} exit={{
                    opacity: 0
                }} transition={{
                    duration: 0.3
                }} onClick={closeDrawer} style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 200,
                    backgroundColor: "rgba(0,0,0,0.70)",
                    backdropFilter: "blur(4px)"
                }} />

                {/* Drawer panel */}
                <motion.div key="drawer-panel" initial={{
                    x: "100%"
                }} animate={{
                    x: 0
                }} exit={{
                    x: "100%"
                }} transition={{
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1]
                }} style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100%",
                    width: "min(520px, 100vw)",
                    zIndex: 201,
                    backgroundColor: "#111118",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                }}>
                    {/* Drawer header */}
                    <div style={{
                        paddingTop: "28px",
                        paddingBottom: "20px",
                        paddingLeft: "clamp(20px, 5vw, 40px)",
                        paddingRight: "clamp(20px, 5vw, 40px)",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexShrink: 0,
                        gap: "16px"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            minWidth: 0
                        }}>
                            <h3 style={{
                                fontFamily: "Figtree",
                                fontSize: "20px",
                                fontWeight: 400,
                                color: "#FFFFFF",
                                margin: 0
                            }}>
                                Reserve Your Seat
                            </h3>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.40)",
                                margin: 0,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }}>
                                {drawerStreamObj ? `${drawerStreamObj.number} - ${drawerStreamObj.title}` : "All streams, select your preference below"}
                            </p>
                        </div>
                        <button onClick={closeDrawer} style={{
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: "50%",
                            width: "36px",
                            height: "36px",
                            minWidth: "36px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(255,255,255,0.60)",
                            cursor: "pointer",
                            transition: "all 200ms",
                            flexShrink: 0
                        }} onMouseEnter={e => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.backgroundColor = "rgba(255,255,255,0.12)";
                            el.style.color = "#FFFFFF";
                        }} onMouseLeave={e => {
                            const el = e.currentTarget as HTMLButtonElement;
                            el.style.backgroundColor = "rgba(255,255,255,0.06)";
                            el.style.color = "rgba(255,255,255,0.60)";
                        }}>
                            <X size={16} />
                        </button>
                    </div>

                    {/* Drawer body */}
                    <div style={{
                        flex: 1,
                        overflowY: "auto",
                        paddingTop: "28px",
                        paddingBottom: "40px",
                        paddingLeft: "clamp(20px, 5vw, 40px)",
                        paddingRight: "clamp(20px, 5vw, 40px)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "18px"
                    }}>
                        {drawerSubmitState === "success" ? <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "20px",
                            padding: "48px 24px",
                            textAlign: "center",
                            minHeight: "320px"
                        }}>
                            <CheckCircle size={48} color="#FF2D87" />
                            <h3 style={{
                                fontFamily: "Figtree",
                                fontSize: "24px",
                                fontWeight: 300,
                                color: "#FFFFFF",
                                margin: 0
                            }}>
                                Application received.
                            </h3>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "16px",
                                color: "rgba(255,255,255,0.50)",
                                lineHeight: 1.75,
                                margin: 0
                            }}>
                                Our delegate relations team will be in touch within 48 hours to confirm your seat.
                            </p>
                            <button onClick={() => {
                                closeDrawer();
                                setDrawerSubmitState("idle");
                            }} style={{
                                backgroundColor: "transparent",
                                border: "1px solid rgba(255,255,255,0.15)",
                                color: "rgba(255,255,255,0.50)",
                                borderRadius: "999px",
                                padding: "10px 24px",
                                fontFamily: "Figtree",
                                fontSize: "13px",
                                cursor: "pointer"
                            }}>
                                Close
                            </button>
                        </div> : <React.Fragment>
                            {drawerError && (
                                <div style={{
                                    padding: "12px 16px",
                                    backgroundColor: "rgba(239, 68, 68, 0.08)",
                                    border: "1px solid rgba(239, 68, 68, 0.2)",
                                    borderRadius: "12px",
                                    color: "#EF4444",
                                    fontSize: "13px",
                                    fontFamily: "Figtree",
                                    lineHeight: 1.4,
                                    marginBottom: "12px"
                                }}>
                                    {drawerError}
                                </div>
                            )}
                            {/* Name + Title */}
                            <div className="form-name-row" style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "16px"
                            }}>
                                <div>
                                    <label style={LABEL_STYLE}>Full Name</label>
                                    <input className="field-input" type="text" placeholder="Your full name" value={drawerFormData.name} onChange={e => setDrawerFormData(prev => ({
                                        ...prev,
                                        name: e.target.value
                                    }))} style={INPUT_STYLE} />
                                </div>
                                <div>
                                    <label style={LABEL_STYLE}>Executive Title</label>
                                    <input className="field-input" type="text" placeholder="CEO, MD, Director…" value={drawerFormData.title} onChange={e => setDrawerFormData(prev => ({
                                        ...prev,
                                        title: e.target.value
                                    }))} style={INPUT_STYLE} />
                                </div>
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Organisation</label>
                                <input className="field-input" type="text" placeholder="Company or institution" value={drawerFormData.organisation} onChange={e => setDrawerFormData(prev => ({
                                    ...prev,
                                    organisation: e.target.value
                                }))} style={INPUT_STYLE} />
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Email Address</label>
                                <input className="field-input" type="email" placeholder="your@email.com" value={drawerFormData.email} onChange={e => setDrawerFormData(prev => ({
                                    ...prev,
                                    email: e.target.value
                                }))} style={INPUT_STYLE} />
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Preferred Stream</label>
                                <select className="field-input field-select" value={drawerFormData.stream || (drawerStream !== null ? String(drawerStream) : "")} onChange={e => setDrawerFormData(prev => ({
                                    ...prev,
                                    stream: e.target.value
                                }))} style={{
                                    ...INPUT_STYLE,
                                    backgroundColor: "rgba(10,10,15,0.95)"
                                }}>
                                    <option value="">Select a stream…</option>
                                    {STREAMS_DATA.map(s => <option key={s.id} value={String(s.id)}>
                                        {s.number} - {s.title}
                                    </option>)}
                                </select>
                            </div>
                            <div>
                                <label style={LABEL_STYLE}>Message / Special Requirements</label>
                                <textarea className="field-input" rows={3} placeholder="Any special requirements or message…" value={drawerFormData.message} onChange={e => setDrawerFormData(prev => ({
                                    ...prev,
                                    message: e.target.value
                                }))} style={{
                                    ...INPUT_STYLE,
                                    resize: "none"
                                }} />
                            </div>
                            <button type="button" onClick={handleDrawerSubmit} disabled={drawerSubmitState === "submitting"} style={{
                                width: "100%",
                                backgroundColor: "#FF2D87",
                                color: "#FFFFFF",
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                fontWeight: 500,
                                borderRadius: "999px",
                                padding: "16px 32px",
                                border: "none",
                                cursor: "pointer",
                                transition: "filter 200ms",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                                boxShadow: "0 0 32px rgba(255,45,135,0.25)"
                            }} onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
                            }} onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
                            }}>
                                {drawerSubmitState === "submitting" ? <React.Fragment>
                                    <Loader2 size={18} className="animate-spin" />
                                    <span>Submitting…</span>
                                </React.Fragment> : <React.Fragment>
                                    <span>Confirm My Interest</span>
                                    <ArrowRight size={18} />
                                </React.Fragment>}
                            </button>
                        </React.Fragment>}
                    </div>
                </motion.div>
            </React.Fragment>}
        </AnimatePresence>
    </div>;
};
export default ExecutiveIndustrySeries;