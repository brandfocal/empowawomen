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
interface SocialLink {
  id: string;
  label: string;
  Icon: React.FC<{
    size?: number;
  }>;
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
const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];
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
  return <footer id="contact" style={{
    position: "relative",
    width: "100%",
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "clamp(56px, 8vw, 96px)",
    paddingBottom: "48px",
    paddingLeft: "clamp(20px, 6vw, 96px)",
    paddingRight: "clamp(20px, 6vw, 96px)"
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
      <div style={{
      position: "relative",
      zIndex: 1,
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: "0"
    }}>
        {/* CTA Section */}
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
              <h2 style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(36px, 7vw, 96px)",
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: 0
            }}>
                {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-word-${word}`} initial={{
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
              Summit invitations, leadership insights, and curated opportunities for Africa's
              most ambitious women — delivered directly to you.
            </motion.p>
          </div>

          {/* CTA Buttons */}
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
        }} style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px"
        }} className="flex-col sm:flex-row w-full sm:w-auto">
            <button style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)",
            backgroundColor: "#FF2D87",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            border: "none",
            borderRadius: "0",
            cursor: "pointer",
            transition: "filter 200ms ease-out",
            width: "100%"
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
          }}>
              <span>Secure Your Seat</span>
              <ArrowRight size={18} />
            </button>
            <button style={{
            padding: "clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)",
            backgroundColor: "rgba(255,255,255,0.05)",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "0",
            cursor: "pointer",
            transition: "background-color 200ms ease-out",
            width: "100%"
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
        marginTop: "64px"
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
            minWidth: "80px"
          }}>
                {row.label}
              </span>
              <div style={{
            height: "1px",
            flexGrow: 1,
            backgroundColor: "rgba(255,255,255,0.10)"
          }} />
              <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
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
          borderTop: "1px solid rgba(255,255,255,0.08)"
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
              gap: "8px"
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                  <div style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#FF2D87",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                    <span style={{
                    fontFamily: "Figtree",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#FFFFFF"
                  }}>
                      EW
                    </span>
                  </div>
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
                  © {new Date().getFullYear()} EmpowaWomen. All rights reserved.
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
        @media (max-width: 640px) {
          .footer-section-row { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .footer-section-row > div:last-child { justify-content: flex-start !important; }
          .footer-bottom-bar { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>;
};