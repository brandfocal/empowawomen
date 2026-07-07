import * as React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";

interface DelegateRegistrationSectionProps {
  stageName: string;
  includes: string[];
}

export const DelegateRegistrationSection: React.FC<DelegateRegistrationSectionProps> = ({
  stageName,
  includes
}) => {
  const checkColors = ["#FF2D87", "#00B4A6", "#D4AF37", "#FF2D87", "#00B4A6"];
  const checkBgColors = ["rgba(255,45,135,0.15)", "rgba(0,180,166,0.15)", "rgba(212,175,55,0.15)", "rgba(255,45,135,0.15)", "rgba(0,180,166,0.15)"];
  const checkBorderColors = ["rgba(255,45,135,0.40)", "rgba(0,180,166,0.40)", "rgba(212,175,55,0.40)", "rgba(255,45,135,0.40)", "rgba(0,180,166,0.40)"];

  const DETAILS_ROWS = [
    { id: "dr-1", label: "Stage", value: stageName },
    { id: "dr-2", label: "Date", value: "Saturday, 29 August 2026" },
    { id: "dr-3", label: "Time", value: "11:00 – 16:00" },
    { id: "dr-4", label: "Venue", value: "Empowaworx House, 364 Pine Avenue, Ferndale, Randburg" },
    { id: "dr-5", label: "Investment", value: "R1,500 per delegate" }
  ];

  return (
    <motion.section
      id="registration"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: "#0A0A0F",
        position: "relative",
        overflow: "hidden",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "clamp(16px, 5vw, 32px)",
        paddingRight: "clamp(16px, 5vw, 32px)",
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(255,45,135,0.05) 0%, transparent 65%)",
          pointerEvents: "none"
        }}
      />

      {/* Inner */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1024px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
          alignItems: "start"
        }}
        className="reg-layout"
      >
        {/* ── LEFT COLUMN: Quicket Register CTA ── */}
        <div style={{ flex: 1, minWidth: 0, width: "100%" }}>
          {/* Header */}
          <div style={{ width: "48px", height: "3px", backgroundColor: "#FF2D87", marginBottom: "16px" }} />
          <p
            style={{
              fontFamily: "Figtree, sans-serif",
              textTransform: "uppercase",
              fontSize: "9px",
              fontWeight: 300,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.35)",
              margin: "0 0 16px 0"
            }}
          >
            DELEGATE REGISTRATION
          </p>
          <h2
            style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(24px, 3.5vw, 44px)",
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: "0 0 12px 0"
            }}
          >
            Secure Your Place at Africa&apos;s {stageName}
          </h2>
          <p
            style={{
              fontFamily: "Figtree, sans-serif",
              color: "rgba(255,255,255,0.45)",
              fontSize: "15px",
              lineHeight: 1.75,
              margin: "0 0 32px 0"
            }}
          >
            Johannesburg’s premier platform for empowering women leaders returns. Secure your place now via Quicket to gain access to exclusive masterclass experiences, keynote presentations, networking dinners, and high-impact industry panels.
          </p>

          <a 
            href="https://www.quicket.co.za/events/344315-empowawomen-leadership-summit-2026/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              height: "56px",
              padding: "0 40px",
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              borderRadius: "999px",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              textDecoration: "none",
              transition: "filter 200ms ease-out",
              alignSelf: "flex-start",
              boxShadow: "0 8px 32px rgba(255,45,135,0.25)"
            }} 
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
            }} 
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
            }}
          >
            <span>Register Now on Quicket →</span>
          </a>
        </div>

        {/* ── RIGHT COLUMN: Summary Card ── */}
        <div className="reg-card-col" style={{ width: "100%", flexShrink: 0 }}>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden"
            }}
          >
            {/* Top image strip */}
            <div
              style={{
                height: "180px",
                backgroundImage: "url('/bubbles_nibbles_gallery/DSC_2948.JPG')",
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
                position: "relative"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.90) 100%)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "20px",
                  backgroundColor: "rgba(10,10,15,0.80)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  fontSize: "10px",
                  color: "#FFFFFF",
                  fontWeight: 300,
                  letterSpacing: "0.08em",
                  fontFamily: "Figtree, sans-serif"
                }}
              >
                📅 Saturday, 29 August 2026
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: "28px" }}>
              <p
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "9px",
                  fontWeight: 300,
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.30)",
                  textTransform: "uppercase",
                  margin: "0 0 12px 0"
                }}
              >
                YOUR REGISTRATION INCLUDES
              </p>
              <p
                style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "#FFFFFF",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: 1.4,
                  margin: "0 0 4px 0"
                }}
              >
                EmpowaWomen Leadership Summit 2026
              </p>

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(255,45,135,0.25)", margin: "20px 0" }} />

              {/* Details */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {DETAILS_ROWS.map((row, idx) => (
                  <div
                    key={row.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      borderBottom: idx < DETAILS_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        flexShrink: 0,
                        marginRight: "16px"
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        color: "#FFFFFF",
                        fontSize: "13px",
                        fontWeight: 300,
                        textAlign: "right"
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(255,45,135,0.25)", margin: "20px 0 16px 0" }} />

              <p
                style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "9px",
                  fontWeight: 300,
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.30)",
                  textTransform: "uppercase",
                  margin: "0 0 16px 0"
                }}
              >
                WHAT&apos;S INCLUDED
              </p>

              {/* Includes */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {includes.map((text, itemIdx) => (
                  <div
                    key={`inc-${itemIdx}`}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      paddingTop: "8px",
                      paddingBottom: "8px"
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: checkBgColors[itemIdx % 5],
                        border: `1px solid ${checkBorderColors[itemIdx % 5]}`,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Check size={10} color={checkColors[itemIdx % 5]} />
                    </div>
                    <span
                      style={{
                        fontFamily: "Figtree, sans-serif",
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "13px",
                        lineHeight: 1.5
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Badge row */}
              <div
                style={{
                  marginTop: "24px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <ShieldCheck size={12} color="rgba(255,255,255,0.25)" />
                <span style={{ fontFamily: "Figtree, sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>
                  Secure · Confidential · Confirmed within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .reg-layout {
            flex-direction: row !important;
          }
          .reg-card-col {
            width: 420px !important;
            position: sticky;
            top: 32px;
            align-self: flex-start;
          }
        }
      `}</style>
    </motion.section>
  );
};
