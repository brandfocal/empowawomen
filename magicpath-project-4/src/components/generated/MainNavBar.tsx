import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
interface NavLink {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}
const NAV_LINKS: NavLink[] = [{
  id: "nav-home",
  label: "Home",
  href: "#home"
}, {
  id: "nav-about",
  label: "About",
  href: "#about"
}, {
  id: "nav-summits",
  label: "Summits",
  href: "#summits",
  hasDropdown: true
}, {
  id: "nav-pillars",
  label: "Pillars",
  href: "#pillars",
  hasDropdown: true,
  isActive: true
}, {
  id: "nav-academy",
  label: "Academy",
  href: "#academy"
}, {
  id: "nav-partners",
  label: "Partners",
  href: "#partners"
}, {
  id: "nav-contact",
  label: "Contact",
  href: "#contact"
}];
export const MainNavBar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100
  }}>
      <header style={{
      height: "68px",
      backgroundColor: "rgba(10,10,15,0.97)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      alignItems: "center",
      paddingLeft: "clamp(16px, 6vw, 80px)",
      paddingRight: "clamp(16px, 6vw, 80px)",
      position: "relative"
    }}>
        {/* Pink scroll progress bar */}
        <motion.div style={{
        scaleX,
        transformOrigin: "left",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1.5px",
        backgroundColor: "#FF2D87"
      }} />

        {/* Logo */}
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexShrink: 0
      }}>
          <div style={{
          width: "32px",
          height: "32px",
          backgroundColor: "#FF2D87",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}>
            <span style={{
            fontFamily: "Figtree",
            fontWeight: 700,
            fontSize: "13px",
            color: "#FFFFFF",
            letterSpacing: "0.02em"
          }}>
              EW
            </span>
          </div>
          <span style={{
          fontFamily: "Figtree",
          fontSize: "16px",
          fontWeight: 500,
          whiteSpace: "nowrap",
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

        {/* Centered nav links — desktop only */}
        <nav aria-label="Main navigation" style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0px"
      }} className="hidden md:flex">
          {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
              <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: link.isActive || hoveredLink === link.id ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
            textDecoration: "none",
            padding: "6px 12px",
            transition: "color 150ms ease-out",
            position: "relative",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3px"
          }}>
                <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px"
            }}>
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={11} style={{
                color: link.isActive || hoveredLink === link.id ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.25)",
                transition: "color 150ms ease-out",
                flexShrink: 0
              }} />}
                </span>
                {/* Pink underline scale animation */}
                <span style={{
              display: "block",
              height: "1.5px",
              width: "100%",
              backgroundColor: "#FF2D87",
              transformOrigin: "left",
              transform: link.isActive || hoveredLink === link.id ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 200ms ease-out"
            }} />
              </a>
              {idx < NAV_LINKS.length - 1 && <span style={{
            color: "rgba(255,255,255,0.15)",
            fontSize: "8px"
          }}>
                  ·
                </span>}
            </React.Fragment>)}
        </nav>

        {/* Right actions */}
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexShrink: 0,
        marginLeft: "auto"
      }}>
          <a href="#" className="hidden sm:inline-flex" style={{
          fontFamily: "Figtree",
          fontSize: "12px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          borderRadius: "999px",
          padding: "8px 20px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
          transition: "filter 200ms ease-out",
          position: "relative",
          overflow: "hidden",
          alignItems: "center"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
        }}>
            <span style={{
            position: "relative",
            zIndex: 1
          }}>Secure Your Seat</span>
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
          </a>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          padding: "4px"
        }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} style={{
        backgroundColor: "rgba(10,10,15,0.98)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "24px clamp(16px, 6vw, 80px) 32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
            {NAV_LINKS.map(link => <a key={link.id} href={link.href} onClick={() => setMobileOpen(false)} style={{
          fontFamily: "Figtree",
          fontSize: "16px",
          fontWeight: 400,
          letterSpacing: "0.08em",
          color: link.isActive ? "#FF2D87" : "rgba(255,255,255,0.70)",
          textDecoration: "none"
        }}>
                {link.label}
              </a>)}
            <a href="#" style={{
          fontFamily: "Figtree",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          borderRadius: "999px",
          padding: "12px 24px",
          textDecoration: "none",
          textAlign: "center"
        }}>
              Secure Your Seat
            </a>
          </motion.div>}
      </AnimatePresence>

      <style>{`
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
      `}</style>
    </div>;
};