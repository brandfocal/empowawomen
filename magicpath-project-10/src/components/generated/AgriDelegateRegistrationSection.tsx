import * as React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
interface FormState {
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  industry: string;
  email: string;
  phone: string;
  hearAboutUs: string;
  specialRequirements: string;
  agreed: boolean;
}
const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  company: "",
  industry: "",
  email: "",
  phone: "",
  hearAboutUs: "",
  specialRequirements: "",
  agreed: false
};
const INDUSTRY_OPTIONS = [{
  id: "ind-1",
  label: "Agribusiness & Farming"
}, {
  id: "ind-2",
  label: "Agro-Processing & Food Manufacturing"
}, {
  id: "ind-3",
  label: "Agricultural Finance & Investment"
}, {
  id: "ind-4",
  label: "Agri-Tech & Innovation"
}, {
  id: "ind-5",
  label: "Food Retail & Distribution"
}, {
  id: "ind-6",
  label: "Government & Policy"
}, {
  id: "ind-7",
  label: "Agricultural Trade & Exports"
}, {
  id: "ind-8",
  label: "Rural Development"
}, {
  id: "ind-9",
  label: "Academia & Research"
}, {
  id: "ind-10",
  label: "Other"
}];
const HEAR_OPTIONS = [{
  id: "h-1",
  label: "LinkedIn"
}, {
  id: "h-2",
  label: "Colleague Referral"
}, {
  id: "h-3",
  label: "Email Newsletter"
}, {
  id: "h-4",
  label: "EmpowaWomen Website"
}, {
  id: "h-5",
  label: "Google Search"
}, {
  id: "h-6",
  label: "Event Partner"
}, {
  id: "h-7",
  label: "Other"
}];
const DETAILS_ROWS = [{
  id: "dr-1",
  label: "Stage",
  value: "Agriculture & Food Security™"
}, {
  id: "dr-2",
  label: "Date",
  value: "Saturday, 29 August 2026"
}, {
  id: "dr-3",
  label: "Time",
  value: "11:00–16:00"
}, {
  id: "dr-4",
  label: "Venue",
  value: "The Forum, The Campus, Bryanston"
}, {
  id: "dr-5",
  label: "Investment",
  value: "R1,500 per delegate"
}];
const INCLUDES = [{
  id: "inc-1",
  text: "Full-day Agriculture & Food Security Stage access"
}, {
  id: "inc-2",
  text: "Premium executive programme (9 sessions)"
}, {
  id: "inc-3",
  text: "High-impact networking & agribusiness matchmaking"
}, {
  id: "inc-4",
  text: "Delegate resource pack & recordings"
}];
const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "8px",
  padding: "13px 16px",
  color: "white",
  fontSize: "14px",
  fontFamily: "Figtree, sans-serif",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box"
};
export const AgriDelegateRegistrationSection: React.FC = () => {
  const [form, setForm] = React.useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = React.useState(false);
  const [focused, setFocused] = React.useState<string | null>(null);
  function handleChange(field: keyof FormState, value: string | boolean) {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }
  function getInputStyle(fieldName: string): React.CSSProperties {
    return {
      ...inputStyle,
      borderColor: focused === fieldName ? "#FF2D87" : "rgba(255,255,255,0.10)"
    };
  }
  return <motion.section initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6
  }} style={{
    backgroundColor: "#0A0A0F",
    position: "relative",
    overflow: "hidden",
    paddingTop: "clamp(64px, 10vw, 128px)",
    paddingBottom: "clamp(64px, 10vw, 128px)",
    paddingLeft: "clamp(16px, 5vw, 32px)",
    paddingRight: "clamp(16px, 5vw, 32px)"
  }}>
      {/* Radial glow */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(255,45,135,0.05) 0%, transparent 65%)",
      pointerEvents: "none"
    }} />

      {/* Inner */}
      <div style={{
      position: "relative",
      zIndex: 1,
      maxWidth: "1024px",
      margin: "0 auto",
      width: "100%",
      boxSizing: "border-box"
    }} className="agri-reg-layout">
        {/* ── FORM COLUMN (first on mobile) ── */}
        <div style={{
        flex: 1,
        minWidth: 0,
        width: "100%"
      }}>
          {/* Header */}
          <div style={{
          width: "48px",
          height: "3px",
          backgroundColor: "#FF2D87",
          marginBottom: "16px"
        }} />
          <p style={{
          fontFamily: "Figtree, sans-serif",
          textTransform: "uppercase",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.35)",
          margin: "0 0 16px 0"
        }}>
            DELEGATE REGISTRATION
          </p>
          <h2 style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(24px, 3.5vw, 44px)",
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
          lineHeight: 1.15,
          margin: "0 0 12px 0"
        }}>
            Secure Your Place at Africa's Agriculture &amp; Food Security Stage™
          </h2>
          <p style={{
          fontFamily: "Figtree, sans-serif",
          color: "rgba(255,255,255,0.45)",
          fontSize: "14px",
          lineHeight: 1.75,
          margin: "0 0 32px 0"
        }}>
            Investment: R1,500 per delegate. Complete the form below and our team will
            confirm your registration within 24 hours.
          </p>

          {/* ── FORM or SUCCESS STATE ── */}
          {submitted ? <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          paddingTop: "64px",
          paddingBottom: "64px"
        }}>
              <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            type: "spring",
            stiffness: 200,
            damping: 15
          }} style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,45,135,0.10)",
            border: "2px solid #FF2D87",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
                <Check size={36} color="#FF2D87" />
              </motion.div>
              <h3 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(24px, 3.5vw, 36px)",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: 0,
            textAlign: "center"
          }}>
                Registration Submitted!
              </h3>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            color: "rgba(255,255,255,0.50)",
            fontSize: "15px",
            textAlign: "center",
            maxWidth: "480px",
            lineHeight: 1.75,
            margin: 0
          }}>
                Thank you for registering for the Agriculture &amp; Food Security Stage™. Our
                team will confirm your delegate place within 24 hours. Please check your inbox.
              </p>
              <div style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
                <button style={{
              height: "44px",
              padding: "0 24px",
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 500,
              fontSize: "14px"
            }}>
                  Add to Calendar
                </button>
                <button onClick={() => setSubmitted(false)} style={{
              height: "44px",
              padding: "0 24px",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.20)",
              cursor: "pointer",
              fontFamily: "Figtree, sans-serif",
              fontWeight: 500,
              fontSize: "14px"
            }}>
                  Back to Stage Info
                </button>
              </div>
              <p style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "11px",
            color: "rgba(255,45,135,0.50)",
            letterSpacing: "0.08em",
            marginTop: "8px",
            textAlign: "center"
          }}>
                #AgricultureLeads · #EmpowaWomen · #FoodSecurity
              </p>
            </div> : <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%"
        }}>
              {/* Row 1: First Name | Last Name — flex-col on mobile, flex-row on sm+ */}
              <div className="agri-reg-name-row" style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }}>
                <input type="text" placeholder="First Name" value={form.firstName} onChange={e => handleChange("firstName", e.target.value)} onFocus={() => setFocused("firstName")} onBlur={() => setFocused(null)} style={getInputStyle("firstName")} required />
                <input type="text" placeholder="Last Name" value={form.lastName} onChange={e => handleChange("lastName", e.target.value)} onFocus={() => setFocused("lastName")} onBlur={() => setFocused(null)} style={getInputStyle("lastName")} required />
              </div>

              {/* Row 2: Job Title */}
              <input type="text" placeholder="Job Title / Designation" value={form.jobTitle} onChange={e => handleChange("jobTitle", e.target.value)} onFocus={() => setFocused("jobTitle")} onBlur={() => setFocused(null)} style={getInputStyle("jobTitle")} required />

              {/* Row 3: Company | Industry — flex-col on mobile, flex-row on sm+ */}
              <div className="agri-reg-company-row" style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column"
          }}>
                <input type="text" placeholder="Company / Organisation" value={form.company} onChange={e => handleChange("company", e.target.value)} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} style={getInputStyle("company")} required />
                <select value={form.industry} onChange={e => handleChange("industry", e.target.value)} onFocus={() => setFocused("industry")} onBlur={() => setFocused(null)} style={{
              ...getInputStyle("industry"),
              appearance: "none",
              WebkitAppearance: "none",
              color: form.industry ? "#FFFFFF" : "rgba(255,255,255,0.25)"
            }} required>
                  <option value="" disabled style={{
                color: "rgba(255,255,255,0.25)",
                backgroundColor: "#111118"
              }}>
                    Industry
                  </option>
                  {INDUSTRY_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
                color: "#FFFFFF",
                backgroundColor: "#111118"
              }}>
                      {opt.label}
                    </option>)}
                </select>
              </div>

              {/* Row 4: Email */}
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => handleChange("email", e.target.value)} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={getInputStyle("email")} required />

              {/* Row 5: Phone */}
              <input type="tel" placeholder="+27 ..." value={form.phone} onChange={e => handleChange("phone", e.target.value)} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={getInputStyle("phone")} />

              {/* Row 6: How did you hear */}
              <select value={form.hearAboutUs} onChange={e => handleChange("hearAboutUs", e.target.value)} onFocus={() => setFocused("hearAboutUs")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("hearAboutUs"),
            appearance: "none",
            WebkitAppearance: "none",
            color: form.hearAboutUs ? "#FFFFFF" : "rgba(255,255,255,0.25)"
          }}>
                <option value="" disabled style={{
              color: "rgba(255,255,255,0.25)",
              backgroundColor: "#111118"
            }}>
                  How did you hear about us?
                </option>
                {HEAR_OPTIONS.map(opt => <option key={opt.id} value={opt.label} style={{
              color: "#FFFFFF",
              backgroundColor: "#111118"
            }}>
                    {opt.label}
                  </option>)}
              </select>

              {/* Row 7: Special requirements — full width textarea */}
              <textarea rows={3} placeholder="Any special requirements, dietary needs, or questions for our team?" value={form.specialRequirements} onChange={e => handleChange("specialRequirements", e.target.value)} onFocus={() => setFocused("specialRequirements")} onBlur={() => setFocused(null)} style={{
            ...getInputStyle("specialRequirements"),
            resize: "vertical",
            lineHeight: 1.6,
            width: "100%",
            boxSizing: "border-box"
          }} />

              {/* Checkbox */}
              <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px"
          }}>
                <input type="checkbox" id="agri-reg-agree" checked={form.agreed} onChange={e => handleChange("agreed", e.target.checked)} required style={{
              accentColor: "#FF2D87",
              marginTop: "2px",
              flexShrink: 0,
              width: "16px",
              height: "16px",
              cursor: "pointer"
            }} />
                <label htmlFor="agri-reg-agree" style={{
              fontFamily: "Figtree, sans-serif",
              color: "rgba(255,255,255,0.45)",
              fontSize: "12px",
              lineHeight: 1.6,
              cursor: "pointer"
            }}>
                  I agree to the EmpowaWomen™ Privacy Policy and Terms &amp; Conditions. I
                  consent to receiving summit-related communications.
                </label>
              </div>

              {/* Submit */}
              <button type="submit" style={{
            width: "100%",
            height: "52px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            fontFamily: "Figtree, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            letterSpacing: "0.02em",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e0006f";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF2D87";
          }}>
                Submit Registration →
              </button>

              <p style={{
            fontFamily: "Figtree, sans-serif",
            textAlign: "center",
            fontSize: "11px",
            color: "rgba(255,255,255,0.20)",
            marginTop: "4px"
          }}>
                Your information is encrypted, secure, and will never be shared with third
                parties.
              </p>
            </form>}
        </div>

        {/* ── SUMMARY CARD COLUMN (below form on mobile) ── */}
        <div className="agri-reg-card-col" style={{
        width: "100%",
        flexShrink: 0
      }}>
          <div style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          overflow: "hidden"
        }}>
            {/* Top image strip */}
            <div style={{
            height: "180px",
            backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            position: "relative"
          }}>
              <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.90) 100%)"
            }} />
              <div style={{
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
              fontWeight: 500,
              letterSpacing: "0.08em",
              fontFamily: "Figtree, sans-serif"
            }}>
                📅 Saturday, 29 August 2026
              </div>
            </div>

            {/* Card body */}
            <div style={{
            padding: "28px"
          }}>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase",
              margin: "0 0 12px 0"
            }}>
                YOUR REGISTRATION INCLUDES
              </p>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: 1.4,
              margin: "0 0 4px 0"
            }}>
                Agriculture &amp; Food Security Stage™
              </p>

              {/* Divider */}
              <div style={{
              borderTop: "1px solid rgba(255,45,135,0.25)",
              margin: "20px 0"
            }} />

              {/* Details */}
              <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                {DETAILS_ROWS.map((row, idx) => <div key={row.id} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: "12px",
                paddingBottom: "12px",
                borderBottom: idx < DETAILS_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                  marginRight: "16px"
                }}>
                      {row.label}
                    </span>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 500,
                  textAlign: "right"
                }}>
                      {row.value}
                    </span>
                  </div>)}
              </div>

              {/* Divider */}
              <div style={{
              borderTop: "1px solid rgba(255,45,135,0.25)",
              margin: "20px 0 16px 0"
            }} />

              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase",
              margin: "0 0 16px 0"
            }}>
                WHAT'S INCLUDED
              </p>

              {/* Includes */}
              <div style={{
              display: "flex",
              flexDirection: "column"
            }}>
                {INCLUDES.map(item => <div key={item.id} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                paddingTop: "8px",
                paddingBottom: "8px"
              }}>
                    <div style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "rgba(255,45,135,0.10)",
                  border: "1px solid rgba(255,45,135,0.30)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                      <Check size={10} color="#FF2D87" />
                    </div>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  lineHeight: 1.5
                }}>
                      {item.text}
                    </span>
                  </div>)}
              </div>

              {/* Badge row */}
              <div style={{
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
                <ShieldCheck size={12} color="rgba(255,255,255,0.25)" />
                <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.25)"
              }}>
                  Secure · Confidential · Confirmed within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Layout: stacked on mobile (form first, card below), side-by-side on lg+ */
        .agri-reg-layout {
          display: flex;
          flex-direction: column;
          gap: 48px;
          align-items: stretch;
        }
        @media (min-width: 1024px) {
          .agri-reg-layout {
            flex-direction: row !important;
            gap: 64px;
            align-items: flex-start;
          }
          .agri-reg-card-col {
            width: 420px !important;
            position: sticky;
            top: 32px;
            align-self: flex-start;
          }
        }
        /* Two-col form rows on sm+ */
        @media (min-width: 640px) {
          .agri-reg-name-row {
            flex-direction: row !important;
          }
          .agri-reg-company-row {
            flex-direction: row !important;
          }
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
        select option {
          background-color: #111118;
        }
      `}</style>
    </motion.section>;
};