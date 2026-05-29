import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
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
interface SocialLink {
  id: string;
  label: string;
  Icon: React.ComponentType<{
    size?: number;
  }>;
}
const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];
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
    label: "Partnerships",
    href: "#"
  }, {
    id: "fp-9",
    label: "ESG Programs",
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
const SOCIAL_LINKS: SocialLink[] = [{
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
export const GlobalFooter: React.FC = () => {
  return <footer id="contact" className="global-footer" style={{
    position: "relative",
    width: "100%",
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      {/* Background image overlay */}
      <div style={{
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

      {/* Inner content */}
      <div className="footer-inner" style={{
      position: "relative",
      zIndex: 1,
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: "0"
    }}>
        {/* CTA section */}
        <section style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
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
              Get Started
            </motion.p>

            <div style={{
            maxWidth: "100%"
          }}>
              <h2 className="footer-headline" style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: 0
            }}>
                {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-word-${word}-${i}`} initial={{
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
              Summit invitations, leadership insights, and curated opportunities
              for Africa&apos;s most ambitious women — delivered directly to you.
            </motion.p>
          </div>

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
        }} className="footer-cta-buttons">
            <button className="footer-btn-primary" style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontWeight: 500,
            border: "none",
            borderRadius: "0",
            cursor: "pointer",
            transition: "filter 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }}>
              <span>Secure Your Seat</span>
              <ArrowRight size={18} />
            </button>
            <button className="footer-btn-secondary" style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "0",
            cursor: "pointer",
            transition: "background-color 200ms ease-out"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.10)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.05)";
          }}>
              About EmpowaWomen
            </button>
          </motion.div>
        </section>

        {/* Section link rows */}
        <section style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        width: "100%",
        marginTop: "72px"
      }}>
          {FOOTER_SECTION_ROWS.map(row => <div key={row.id} className="footer-section-row" style={{
          width: "100%"
        }}>
              <span style={{
            fontFamily: "Figtree",
            fontSize: "14px",
            fontWeight: 500,
            color: "#FFFFFF",
            whiteSpace: "nowrap",
            minWidth: "80px"
          }}>
                {row.label}
              </span>
              <div className="footer-row-divider" style={{
            height: "1px",
            flexGrow: 1,
            backgroundColor: "rgba(255,255,255,0.10)"
          }} />
              <div className="footer-row-links" style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px"
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
            gap: "24px",
            width: "100%"
          }}>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                  <img src="/src/assets/magicpath/context/02-context-image-2-5e4b5ab63ff5.jpg" alt="EmpowaWomen logo mark" style={{
                  height: "28px",
                  width: "auto"
                }} onError={e => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }} />
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
                fontSize: "14px",
                color: "rgba(255,255,255,0.25)",
                margin: 0
              }}>
                  <span>
                    © {new Date().getFullYear()} EmpowaWomen. All rights
                    reserved.
                  </span>
                </p>
                <p style={{
                fontFamily: "Figtree",
                fontSize: "14px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#FF2D87",
                margin: 0
              }}>
                  <span>Ignite Passion | Foster Growth | Drive Change</span>
                </p>
              </div>

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
                transition: "background-color 300ms, color 300ms",
                flexShrink: 0
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

            <p style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "13px",
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
            marginTop: "12px",
            marginBottom: 0
          }}>
              <span>Ignite Passion | Foster Growth | Drive Change</span>
            </p>
          </div>
        </section>
      </div>

      <style>{`
        /* ── Footer outer padding ── */
        .global-footer {
          padding-top: clamp(56px, 8vw, 96px);
          padding-bottom: 48px;
          padding-left: clamp(20px, 6vw, 96px);
          padding-right: clamp(20px, 6vw, 96px);
        }
        @media (max-width: 640px) {
          .global-footer {
            padding-top: 48px;
            padding-bottom: 40px;
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        /* ── Footer inner max-width ── */
        .footer-inner {
          padding: 0;
        }

        /* ── Footer headline size ── */
        .footer-headline {
          font-size: clamp(32px, 7vw, 96px);
        }

        /* ── Footer CTA buttons ── */
        .footer-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .footer-cta-buttons {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
        }

        /* ── Footer button sizes ── */
        .footer-btn-primary,
        .footer-btn-secondary {
          font-size: clamp(14px, 2vw, 17px);
          padding: clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px);
        }
        @media (max-width: 640px) {
          .footer-btn-primary,
          .footer-btn-secondary {
            width: 100%;
            padding: 14px 24px;
            font-size: 15px;
          }
        }

        /* ── Footer section link rows ── */
        .footer-section-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .footer-section-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .footer-row-divider {
            display: none;
          }
          .footer-row-links {
            justify-content: flex-start;
            gap: 12px 16px;
          }
        }

        /* ── Footer bottom bar ── */
        .footer-bottom-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
        }
      `}</style>
    </footer>;
};