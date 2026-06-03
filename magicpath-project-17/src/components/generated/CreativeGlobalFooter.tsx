import * as React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
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
const FOOTER_SECTION_ROWS: SectionLinkRow[] = [{
  id: "row-pages",
  label: "Pages",
  links: [{
    id: "fp-1",
    label: "About",
    href: "#about"
  }, {
    id: "fp-2",
    label: "Summits",
    href: "#summits"
  }, {
    id: "fp-3",
    label: "Programs",
    href: "#programs"
  }, {
    id: "fp-4",
    label: "Partners",
    href: "#partners"
  }, {
    id: "fp-5",
    label: "Agenda",
    href: "#agenda"
  }, {
    id: "fp-6",
    label: "Contact",
    href: "#contact"
  }]
}, {
  id: "row-programs",
  label: "Programs",
  links: [{
    id: "fp-7",
    label: "EmpowaHER",
    href: "#"
  }, {
    id: "fp-8",
    label: "Creative Stage",
    href: "#"
  }, {
    id: "fp-9",
    label: "Film & Media Series",
    href: "#"
  }, {
    id: "fp-10",
    label: "Resources",
    href: "#"
  }]
}, {
  id: "row-legal",
  label: "Legal",
  links: [{
    id: "fp-11",
    label: "Privacy Policy",
    href: "#"
  }, {
    id: "fp-12",
    label: "Terms",
    href: "#"
  }, {
    id: "fp-13",
    label: "FAQ",
    href: "#"
  }]
}];
const SOCIAL_LINKS = [{
  id: "s-instagram",
  label: "Instagram",
  Icon: Instagram
}, {
  id: "s-linkedin",
  label: "LinkedIn",
  Icon: Linkedin
}, {
  id: "s-x",
  label: "X",
  Icon: Twitter
}, {
  id: "s-youtube",
  label: "YouTube",
  Icon: Youtube
}];
const FOOTER_HEADLINE_WORDS = ["Own", "the", "story.", "Own", "the", "future."];
export const CreativeGlobalFooter: React.FC = () => {
  const [email, setEmail] = React.useState("");
  return <footer id="contact" style={{
    position: "relative",
    width: "100%",
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "clamp(48px, 8vw, 96px)",
    paddingBottom: "48px",
    paddingLeft: "clamp(16px, 5vw, 80px)",
    paddingRight: "clamp(16px, 5vw, 80px)",
    borderTop: "1px solid rgba(255,255,255,0.06)"
  }}>
      {/* Background image overlay */}
      <div aria-hidden="true" style={{
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: "1400px",
      aspectRatio: "2/1",
      pointerEvents: "none",
      opacity: 0.3,
      userSelect: "none"
    }}>
        <div style={{
        width: "100%",
        height: "100%",
        backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maskImage: "linear-gradient(to top, transparent 0%, black 35%)",
        WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 35%)"
      }} />
      </div>

      <div style={{
      position: "relative",
      zIndex: 1,
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: "0"
    }}>
        {/* Newsletter / CTA block */}
        <section style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(24px, 4vw, 40px)",
        maxWidth: "100%"
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}>
            <motion.p initial={{
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
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.60)",
            margin: 0
          }}>
              Get Involved
            </motion.p>

            <div style={{
            maxWidth: "100%"
          }}>
              <h2 style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(28px, 5vw, 56px)",
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: 0
            }}>
                {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-word-${i}`} initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 20
              }} whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }} style={{
                display: "inline-block",
                marginRight: "0.2em"
              }}>
                    {word}
                  </motion.span>)}
              </h2>
            </div>

            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            delay: 0.8
          }} style={{
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "448px",
            lineHeight: 1.75,
            margin: 0
          }}>
              Summit invitations, stage intelligence, and curated opportunities for Africa&apos;s most ambitious women — delivered directly to you.
            </motion.p>
          </div>

          {/* Email input + subscribe */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 1.0
        }} className="footer-newsletter-form" style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: "0",
          alignItems: "center",
          width: "100%"
        }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Keep me informed" style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRight: "none",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "14px",
            padding: "12px 20px",
            outline: "none",
            flex: 1,
            minWidth: 0
          }} />
            <button style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "12px 20px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "14px",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            transition: "filter 200ms ease-out",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.12)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }}>
              <span style={{
              position: "relative",
              zIndex: 1
            }}>Subscribe</span>
              <ArrowRight size={14} style={{
              position: "relative",
              zIndex: 1
            }} />
              <span style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "40%",
              background: "rgba(255,255,255,0.15)",
              transform: "skewX(-20deg) translateX(-100%)",
              animation: "shimmerSlide 3s linear infinite",
              pointerEvents: "none"
            }} />
            </button>
          </motion.div>
        </section>

        {/* Section link rows */}
        <section style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        width: "100%",
        marginTop: "clamp(40px, 6vw, 64px)"
      }}>
          {FOOTER_SECTION_ROWS.map(row => <div key={row.id} className="footer-section-row" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
          width: "100%"
        }}>
              <span style={{
            fontFamily: "Figtree",
            fontSize: "14px",
            fontWeight: 500,
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            minWidth: "72px"
          }}>
                {row.label}
              </span>
              <div style={{
            height: "1px",
            flexGrow: 1,
            backgroundColor: "rgba(255,255,255,0.10)"
          }} />
              <div className="footer-link-list" style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
            justifyContent: "flex-end"
          }}>
                {row.links.map(link => <a key={link.id} href={link.href} style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              transition: "color 200ms ease-out",
              whiteSpace: "nowrap"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
            }}>
                    {link.label}
                  </a>)}
              </div>
            </div>)}

          {/* Bottom bar */}
          <div style={{
          paddingTop: "32px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0"
        }}>
            <div className="footer-bottom-bar" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            width: "100%"
          }}>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px"
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                  <span style={{
                  fontFamily: "Figtree",
                  fontSize: "18px",
                  fontWeight: 500,
                  letterSpacing: "0.02em"
                }}>
                    <span style={{
                    color: "#FFFFFF"
                  }}>Empowa</span>
                    <span style={{
                    color: "#FF2D87"
                  }}>Women</span>
                  </span>
                </div>
                <p style={{
                fontFamily: "Figtree",
                fontSize: "13px",
                color: "rgba(255,255,255,0.25)",
                margin: 0
              }}>
                  <span>© {new Date().getFullYear()} EmpowaWomen. All rights reserved.</span>
                </p>
                <p style={{
                fontFamily: "Figtree",
                fontSize: "13px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#FF2D87",
                margin: 0
              }}>
                  <span>Ignite Passion | Foster Growth | Drive Change</span>
                </p>
              </div>

              {/* Social icons */}
              <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
                {SOCIAL_LINKS.map(({
                id,
                label,
                Icon
              }) => <a key={id} href="#" aria-label={label} style={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "background-color 300ms, color 300ms"
              }} onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "#FFFFFF";
                el.style.color = "#0A0A0F";
              }} onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(255,255,255,0.05)";
                el.style.color = "#FFFFFF";
              }}>
                    <Icon size={18} />
                  </a>)}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes shimmerSlide {
          0% { transform: skewX(-20deg) translateX(-100%); }
          100% { transform: skewX(-20deg) translateX(350%); }
        }
        @media (max-width: 600px) {
          .footer-section-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .footer-section-row > div:nth-child(2) {
            display: none !important;
          }
          .footer-link-list {
            justify-content: flex-start !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 400px) {
          .footer-newsletter-form {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .footer-newsletter-form input {
            border-right: 1px solid rgba(255,255,255,0.10) !important;
            border-bottom: none !important;
            width: 100% !important;
          }
          .footer-newsletter-form button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>;
};