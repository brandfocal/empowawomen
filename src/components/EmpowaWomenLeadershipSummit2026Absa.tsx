import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, Briefcase, CheckCircle2, AlertCircle, Loader2, Calendar, MapPin, Clock, ShieldCheck } from "lucide-react";

export const EmpowaWomenLeadershipSummit2026Absa: React.FC = () => {
    const [name, setName] = React.useState("");
    const [contact, setContact] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [designation, setDesignation] = React.useState("");
    const [attending, setAttending] = React.useState<"Yes" | "No" | "">("");
    
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name.trim()) return setError("Full Name is required.");
        if (!contact.trim()) return setError("Contact Number is required.");
        if (!email.trim()) return setError("Email Address is required.");
        if (!designation.trim()) return setError("Designation is required.");
        if (!attending) return setError("Please indicate if you are attending.");

        setStatus("submitting");

        // Split Name for potential Name field structure
        const nameParts = name.trim().split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || firstName;

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    form_id: 22,
                    input_values: {
                        // Standard field mappings
                        "input_10": name,
                        "input_15": contact,
                        "input_4": email,
                        "input_14": designation,
                        "input_11": attending,

                        // Name compound field sub-inputs (in case Field 10 is a Name field type)
                        "input_10_3": firstName,
                        "input_10_6": lastName,

                        // Checkbox option field sub-input (in case Field 11 is a Checkbox field type)
                        "input_11_1": attending
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit registration request.");
            }

            setStatus("success");
            setName("");
            setContact("");
            setEmail("");
            setDesignation("");
            setAttending("");
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred. Please try again.");
            setStatus("idle");
        }
    };

    return (
        <main style={{
            backgroundColor: "#050508",
            color: "#FFFFFF",
            minHeight: "100vh",
            paddingTop: "120px",
            paddingBottom: "100px",
            paddingLeft: "clamp(16px, 5vw, 64px)",
            paddingRight: "clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Ambient Background Glows */}
            <div style={{
                position: "absolute",
                top: "10%",
                left: "-10%",
                width: "50vw",
                height: "50vw",
                backgroundColor: "rgba(255, 45, 135, 0.04)",
                filter: "blur(140px)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0
            }} />
            <div style={{
                position: "absolute",
                bottom: "10%",
                right: "-10%",
                width: "50vw",
                height: "50vw",
                backgroundColor: "rgba(0, 180, 166, 0.03)",
                filter: "blur(140px)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0
            }} />

            <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1200px" }}>
                {/* Branding Headers */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "48px",
                    gap: "24px",
                    flexWrap: "wrap"
                }}>
                    <img 
                        src="/empowawomen-logo-wh.png" 
                        alt="EmpowaWomen Logo" 
                        style={{ height: "40px", objectFit: "contain" }} 
                    />
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Proudly Partnered with</span>
                        <img 
                            src="/absa-logo.png" 
                            alt="ABSA Logo" 
                            style={{ height: "35px", objectFit: "contain" }} 
                        />
                    </div>
                </div>

                <div className="grid-container" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "48px",
                    alignItems: "start"
                }}>
                    
                    {/* Left Column: Artwork and Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: "flex", flexDirection: "column", gap: "28px" }}
                    >
                        <div style={{
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.5)"
                        }}>
                            <img 
                                src="/invite/06-08-2026/EmpowaWomen-banner.png" 
                                alt="EmpowaWomen Leadership Summit 2026 - ABSA" 
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>

                        {/* Event Details Card */}
                        <div style={{
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.06)",
                            borderRadius: "16px",
                            padding: "24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <ShieldCheck className="text-[#00B4A6]" size={18} />
                                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: "#00B4A6", textTransform: "uppercase" }}>
                                    Exclusive Invitation-Only
                                </span>
                            </div>
                            
                            <h1 style={{
                                fontFamily: "Montserrat",
                                fontSize: "28px",
                                fontWeight: 900,
                                lineHeight: 1.2,
                                background: "linear-gradient(to right, #FFFFFF, #FF2D87)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                                Leadership Summit 2026
                            </h1>

                            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                                You are cordially invited to participate in an exclusive leadership dialogue, empowering women to lead fearlessly, accelerate growth, and drive economic transformation.
                            </p>

                            <div style={{
                                borderTop: "1px solid rgba(255,255,255,0.08)",
                                paddingTop: "16px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <Calendar size={16} className="text-[#FF2D87]" />
                                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)" }}>Date: Saturday, 29 August 2026</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <Clock size={16} className="text-[#FF2D87]" />
                                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)" }}>Time: 8am – 3:30pm</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "start", gap: "12px" }}>
                                    <MapPin size={16} className="text-[#FF2D87]" style={{ marginTop: "2px", flexShrink: 0 }} />
                                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
                                        Venue: EmpowaWorx House, 364 Pine Avenue, Ferndale, Randburg
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Registration Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div style={{
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            backdropFilter: "blur(16px)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "20px",
                            padding: "36px",
                            boxShadow: "0 32px 64px -16px rgba(0,0,0,0.6)"
                        }}>
                            <h2 style={{
                                fontFamily: "Montserrat",
                                fontSize: "20px",
                                fontWeight: 700,
                                marginBottom: "8px",
                                color: "#FFFFFF"
                            }}>
                                Register Attendance
                            </h2>
                            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "28px" }}>
                                Please confirm your details below to secure your seat.
                            </p>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        style={{
                                            textAlign: "center",
                                            padding: "40px 20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "16px"
                                        }}
                                    >
                                        <div style={{
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "50%",
                                            backgroundColor: "rgba(0, 180, 166, 0.1)",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#00B4A6",
                                            marginBottom: "8px"
                                        }}>
                                            <CheckCircle2 size={36} />
                                        </div>
                                        <h3 style={{ fontFamily: "Montserrat", fontSize: "22px", fontWeight: 700 }}>Registration Successful</h3>
                                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: "340px" }}>
                                            Thank you for registering. Your details have been submitted, and your seat will be reserved. We look forward to hosting you.
                                        </p>
                                        <button 
                                            onClick={() => setStatus("idle")}
                                            style={{
                                                marginTop: "16px",
                                                backgroundColor: "transparent",
                                                border: "1px solid rgba(255,255,255,0.2)",
                                                color: "#FFFFFF",
                                                padding: "10px 24px",
                                                borderRadius: "8px",
                                                fontSize: "13px",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                                transition: "all 0.2s"
                                            }}
                                        >
                                            Register Another Attendee
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                        
                                        {/* Error Alert */}
                                        {error && (
                                            <div style={{
                                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                                                border: "1px solid rgba(239, 68, 68, 0.2)",
                                                borderRadius: "8px",
                                                padding: "12px 16px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                color: "#EF4444",
                                                fontSize: "13px"
                                            }}>
                                                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                                                <span>{error}</span>
                                            </div>
                                        )}

                                        {/* Full Name */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>
                                                Full Name
                                            </label>
                                            <div style={{ position: "relative" }}>
                                                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }}>
                                                    <User size={16} />
                                                </span>
                                                <input 
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Enter your full name"
                                                    disabled={status === "submitting"}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        {/* Contact Number */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>
                                                Contact Number
                                            </label>
                                            <div style={{ position: "relative" }}>
                                                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }}>
                                                    <Phone size={16} />
                                                </span>
                                                <input 
                                                    type="tel"
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)}
                                                    placeholder="e.g. +27 82 123 4567"
                                                    disabled={status === "submitting"}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        {/* Email Address */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>
                                                Email Address
                                            </label>
                                            <div style={{ position: "relative" }}>
                                                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }}>
                                                    <Mail size={16} />
                                                </span>
                                                <input 
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="name@company.com"
                                                    disabled={status === "submitting"}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        {/* Designation */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>
                                                Designation / Job Title
                                            </label>
                                            <div style={{ position: "relative" }}>
                                                <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)" }}>
                                                    <Briefcase size={16} />
                                                </span>
                                                <input 
                                                    type="text"
                                                    value={designation}
                                                    onChange={(e) => setDesignation(e.target.value)}
                                                    placeholder="e.g. Chief Executive Officer"
                                                    disabled={status === "submitting"}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        {/* Attending (Yes/No field) */}
                                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                            <label style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>
                                                Will you be attending?
                                            </label>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                <button
                                                    type="button"
                                                    onClick={() => setAttending("Yes")}
                                                    disabled={status === "submitting"}
                                                    style={{
                                                        ...optionButtonStyle,
                                                        backgroundColor: attending === "Yes" ? "#FF2D87" : "rgba(255,255,255,0.02)",
                                                        borderColor: attending === "Yes" ? "#FF2D87" : "rgba(255,255,255,0.1)",
                                                        color: attending === "Yes" ? "#FFFFFF" : "rgba(255,255,255,0.7)"
                                                    }}
                                                >
                                                    Yes, I will attend
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setAttending("No")}
                                                    disabled={status === "submitting"}
                                                    style={{
                                                        ...optionButtonStyle,
                                                        backgroundColor: attending === "No" ? "#FF2D87" : "rgba(255,255,255,0.02)",
                                                        borderColor: attending === "No" ? "#FF2D87" : "rgba(255,255,255,0.1)",
                                                        color: attending === "No" ? "#FFFFFF" : "rgba(255,255,255,0.7)"
                                                    }}
                                                >
                                                    No, I cannot attend
                                                </button>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            style={{
                                                backgroundColor: "#FF2D87",
                                                color: "#FFFFFF",
                                                border: "none",
                                                borderRadius: "8px",
                                                padding: "14px 20px",
                                                fontSize: "14px",
                                                fontWeight: 700,
                                                cursor: status === "submitting" ? "not-allowed" : "pointer",
                                                marginTop: "12px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                gap: "8px",
                                                boxShadow: "0 8px 24px rgba(255, 45, 135, 0.3)",
                                                transition: "all 0.2s"
                                            }}
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    <span>Submitting...</span>
                                                </>
                                            ) : (
                                                <span>Confirm Registration</span>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Local Styles for Responsiveness */}
            <style>{`
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 768px) {
                    .grid-container {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </main>
    );
};

// Internal reusable CSS Styles
const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "12px 14px 12px 42px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "Figtree",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s"
};

const optionButtonStyle: React.CSSProperties = {
    flex: 1,
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    textAlign: "center"
};
