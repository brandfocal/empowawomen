import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface UniversalHeroProps {
    bgImage: string;
    bgImagePosition?: string;
    pillText?: string;
    headline: React.ReactNode;
    slogan?: React.ReactNode;
    description: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    bottomSection?: React.ReactNode;
}

export const UniversalHero: React.FC<UniversalHeroProps> = ({
    bgImage,
    bgImagePosition = "center 30%",
    pillText,
    headline,
    slogan,
    description,
    primaryCtaText,
    primaryCtaLink = "#",
    secondaryCtaText,
    secondaryCtaLink = "#",
    bottomSection
}) => {
    const { scrollY } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);

    return (
        <section style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            backgroundColor: "#0A0A0F",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end", // Push content down similar to other pages
            paddingTop: "68px",
            paddingBottom: "80px" // Keep enough padding for bottom items
        }}>
            {/* Optional Grain Overlay (used in home) */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3, opacity: 0.04,
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                backgroundSize: "256px 256px", animation: "grainShift 0.8s steps(1) infinite"
            }} />

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div className="absolute inset-0" initial={{ scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2.4, ease: "easeOut" }}>
                    <motion.div style={{ y: imageY, position: "absolute", inset: 0 }}>
                        <img src={bgImage} alt="" className="w-full h-full object-cover" style={{ objectPosition: bgImagePosition }} />
                    </motion.div>
                </motion.div>
                {/* Gradient Overlays */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)" }} />
            </div>

            <div style={{
                position: "relative",
                zIndex: 10,
                width: "100%",
                maxWidth: "1400px",
                paddingLeft: "clamp(24px, 6vw, 96px)",
                paddingRight: "clamp(24px, 6vw, 96px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "auto"
            }}>
                <motion.div initial={{ y: 90 }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{
                    width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
                }}>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "32px" }}>
                        
                        {/* Pre-heading pill */}
                        {pillText && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{
                                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "24px",
                                backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "8px 16px", borderRadius: "999px"
                            }}>
                                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#FF2D87", display: "inline-block", flexShrink: 0, animation: "pulseDot 2s ease-in-out infinite" }} />
                                <span style={{ fontFamily: "Figtree", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "rgba(255,255,255,0.60)", textTransform: "uppercase" }}>
                                    {pillText}
                                </span>
                            </motion.div>
                        )}

                        {/* Headline */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{
                            fontFamily: "Figtree", fontWeight: 300, fontSize: "clamp(46px, 7vw, 96px)", lineHeight: 1.0, letterSpacing: "-0.04em",
                            color: "#FFFFFF", textAlign: "center", maxWidth: "900px", margin: "0 auto 24px auto"
                        }}>
                            {headline}
                        </motion.div>

                        {/* Slogan (Optional) */}
                        {slogan && (
                            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }} style={{
                                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px"
                            }}>
                                {slogan}
                            </motion.div>
                        )}

                        {/* Description */}
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} style={{
                            fontFamily: "Figtree", fontSize: "17px", fontWeight: 400, color: "rgba(255,255,255,0.50)", maxWidth: "620px",
                            margin: "0 auto 36px auto", textAlign: "center", lineHeight: 1.75
                        }}>
                            {description}
                        </motion.p>

                        {/* CTAs */}
                        {(primaryCtaText || secondaryCtaText) && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }} style={{
                                display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: bottomSection ? "48px" : "0"
                            }}>
                                {primaryCtaText && (
                                    <a href={primaryCtaLink} style={{
                                        fontFamily: "Figtree", fontSize: "15px", fontWeight: 500, color: "#FFFFFF", backgroundColor: "#FF2D87",
                                        height: "50px", padding: "0 32px", display: "inline-flex", alignItems: "center", textDecoration: "none",
                                        letterSpacing: "0.02em", borderRadius: "999px", transition: "all 200ms ease-out", boxShadow: "0 0 32px rgba(255,45,135,0.25)"
                                    }} onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLAnchorElement; el.style.filter = "brightness(1.1)"; el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
                                    }} onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLAnchorElement; el.style.filter = "brightness(1)"; el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
                                    }}>
                                        {primaryCtaText}
                                    </a>
                                )}
                                {secondaryCtaText && (
                                    <a href={secondaryCtaLink} style={{
                                        fontFamily: "Figtree", fontSize: "15px", fontWeight: 400, color: "#FFFFFF", backgroundColor: "transparent",
                                        height: "50px", padding: "0 32px", display: "inline-flex", alignItems: "center", textDecoration: "none",
                                        border: "1px solid rgba(255,255,255,0.20)", letterSpacing: "0.02em", borderRadius: "999px", transition: "all 200ms ease-out"
                                    }} onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "rgba(255,255,255,0.08)"; el.style.borderColor = "rgba(255,255,255,0.40)";
                                    }} onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "transparent"; el.style.borderColor = "rgba(255,255,255,0.20)";
                                    }}>
                                        {secondaryCtaText}
                                    </a>
                                )}
                            </motion.div>
                        )}
                    </div>
                    
                    {/* Bottom Section (Logos, Avatars, etc.) */}
                    {bottomSection && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }} style={{
                            width: "100%"
                        }}>
                            {bottomSection}
                        </motion.div>
                    )}
                </motion.div>
            </div>

            <style>{`
                @keyframes pulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
            `}</style>
        </section>
    );
};
