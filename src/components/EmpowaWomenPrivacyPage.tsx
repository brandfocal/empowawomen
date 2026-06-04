import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, RefreshCw, FileText } from "lucide-react";

export const PrivacyPage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            icon: <Eye className="w-5 h-5 text-[#FF2D87]" />,
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us when registering for summits, subscribing to our newsletter, applying for the EmpowaHER academy, or communicating with us. This includes your name, email address, phone number, company name, job title, and billing information."
        },
        {
            icon: <Lock className="w-5 h-5 text-[#FF2D87]" />,
            title: "2. How We Use Your Information",
            content: "We use the collected information to process summit ticket purchases, manage cohort applications for the academy, deliver newsletters and marketing communications, improve our services, and comply with legal obligations under the Protection of Personal Information Act (POPIA)."
        },
        {
            icon: <Shield className="w-5 h-5 text-[#FF2D87]" />,
            title: "3. Data Sharing & Third Parties",
            content: "We do not sell your personal data. We share information with trusted third-party service providers (such as ticketing platforms like Quicket, payment processors, and hosting services) to facilitate our services. All partners are contractually bound to protect your data."
        },
        {
            icon: <RefreshCw className="w-5 h-5 text-[#FF2D87]" />,
            title: "4. Your Rights & Choice",
            content: "You have the right to access, update, correct, or request deletion of your personal information. You can opt-out of receiving marketing communications at any time by clicking the 'unsubscribe' link in our emails or by contacting info@empowawomen.co.za."
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
                left: "10%",
                width: "40vw",
                height: "40vw",
                backgroundColor: "rgba(255, 45, 135, 0.05)",
                filter: "blur(120px)",
                borderRadius: "50%",
                zIndex: 0,
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute",
                bottom: "10%",
                right: "10%",
                width: "40vw",
                height: "40vw",
                backgroundColor: "rgba(0, 180, 166, 0.03)",
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
                        <FileText size={14} className="text-[#FF2D87]" />
                        <span style={{
                            fontFamily: "Figtree",
                            fontSize: "10px",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            color: "rgba(255, 255, 255, 0.6)",
                            textTransform: "uppercase"
                        }}>
                            LEGAL PLATFORM · POPIA COMPLIANT
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
                        Privacy Policy<span style={{ color: "#FF2D87" }}>.</span>
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
                        Last updated: June 2, 2026. Learn how we handle and protect your personal information at EmpowaWomen.
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

                {/* Bottom Contact Card */}
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
                        Questions about our privacy policy?
                    </h3>
                    <p style={{ fontFamily: "Figtree", fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", margin: "0 0 24px 0" }}>
                        Contact our data protection team for any questions or compliance inquiries.
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
                        Contact Compliance Team
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
