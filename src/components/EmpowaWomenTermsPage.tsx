import * as React from "react";
import { motion } from "framer-motion";
import { Scale, BookOpen, AlertCircle, Award, Briefcase } from "lucide-react";

export const TermsPage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            icon: <Scale className="w-5 h-5 text-[#FF2D87]" />,
            title: "1. Acceptance of Terms",
            content: "By accessing or using the EmpowaWomen platform, registering for our economic summits, or applying for academy programmes, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services."
        },
        {
            icon: <Briefcase className="w-5 h-5 text-[#00B4A6]" />,
            title: "2. Summit Registration & Ticket Policy",
            content: "All summit ticket sales (processed via Quicket or direct invoice) are final. Admission is subject to security checks and compliance with the summit code of conduct. Tickets are non-refundable but can be transferred to another individual with prior written consent at least 48 hours before the event."
        },
        {
            icon: <Award className="w-5 h-5 text-[#D97706]" />,
            title: "3. Intellectual Property Rights",
            content: "The content, layout, designs, trademarks, and logos (including EmpowaWomen and EmpowaHER) on this platform are owned by or licensed to EmpowaWorx. Unauthorized duplication, distribution, or commercial exploitation of any materials is strictly prohibited."
        },
        {
            icon: <AlertCircle className="w-5 h-5 text-[#6D28D9]" />,
            title: "4. Limitation of Liability",
            content: "EmpowaWomen is provided 'as is'. While we strive for excellence in our programmes and events, we make no guarantees regarding outcomes, PR values, or business connections. We are not liable for direct, indirect, or consequential damages resulting from platform use or event attendance."
        }
    ];

    return (
        <section style={{
            backgroundColor: "#0A0A0F",
            color: "#FFFFFF",
            minHeight: "100vh",
            paddingTop: "140px",
            paddingBottom: "128px",
            paddingLeft: "clamp(24px, 6vw, 96px)",
            paddingRight: "clamp(24px, 6vw, 96px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1
        }}>
            {/* Ambient Background Glows */}
            <div style={{
                position: "absolute",
                top: "10%",
                right: "10%",
                width: "40vw",
                height: "40vw",
                backgroundColor: "rgba(0, 180, 166, 0.04)",
                filter: "blur(120px)",
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute",
                bottom: "10%",
                left: "10%",
                width: "40vw",
                height: "40vw",
                backgroundColor: "rgba(255, 45, 135, 0.04)",
                filter: "blur(120px)",
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none"
            }} />

            <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "900px" }}>
                {/* Header Block */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }} 
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "999px",
                            padding: "8px 16px",
                            marginBottom: "24px"
                        }}
                    >
                        <BookOpen size={14} className="text-[#FF2D87]" />
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "10px",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            color: "rgba(255, 255, 255, 0.6)",
                            textTransform: "uppercase"
                        }}>
                            PLATFORM GUIDELINES · TERMS OF USE
                        </span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: 300,
                            fontSize: "clamp(36px, 6vw, 64px)",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1,
                            margin: "0 0 16px 0"
                        }}
                    >
                        Terms of Service<span style={{ color: "#FF2D87" }}>.</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            fontFamily: "Figtree",
                            fontSize: "16px",
                            color: "rgba(255, 255, 255, 0.5)",
                            margin: 0,
                            lineHeight: 1.6
                        }}
                    >
                        Last updated: June 2, 2026. Please read these terms carefully before engaging with EmpowaWomen.
                    </motion.p>
                </div>

                {/* Content Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    {sections.map((section, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.02)",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                borderRadius: "16px",
                                padding: "32px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px"
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "8px",
                                    backgroundColor: "rgba(255, 45, 135, 0.05)",
                                    border: "1px solid rgba(255, 45, 135, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    {section.icon}
                                </div>
                                <h2 style={{
                                    fontFamily: "Figtree",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    margin: 0,
                                    letterSpacing: "-0.01em"
                                }}>
                                    {section.title}
                                </h2>
                            </div>
                            <p style={{
                                fontFamily: "Figtree",
                                fontSize: "15px",
                                color: "rgba(255, 255, 255, 0.6)",
                                margin: 0,
                                lineHeight: 1.75
                            }}>
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Legal Support Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        marginTop: "56px",
                        textAlign: "center",
                        padding: "40px",
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, rgba(255,45,135,0.05) 0%, rgba(0,180,166,0.03) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                >
                    <h3 style={{ fontFamily: "Figtree", fontWeight: 400, fontSize: "20px", margin: "0 0 12px 0" }}>
                        Need further clarification?
                    </h3>
                    <p style={{ fontFamily: "Figtree", fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", margin: "0 0 24px 0" }}>
                        Contact our legal department for any inquiries regarding event registrations or partnerships agreements.
                    </p>
                    <a 
                        href="mailto:info@empowawomen.co.za" 
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "#FF2D87",
                            color: "#FFFFFF",
                            fontFamily: "Figtree",
                            fontSize: "14px",
                            fontWeight: 500,
                            height: "44px",
                            padding: "0 24px",
                            borderRadius: "999px",
                            textDecoration: "none",
                            transition: "filter 200ms ease-out"
                        }}
                        onMouseEnter={e => { e.currentTarget.style.filter = "brightness(1.1)"; }}
                        onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; }}
                    >
                        Contact Legal Department
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
