import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Camera, ChevronDown, Download, Instagram, Linkedin, Menu, Twitter, X, Youtube } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
}
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
interface BroadcastItem {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  ctaLabel: string;
  tagLabel: string;
  tagColor: string;
}
interface FeatureArticle {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
  tagLabel: string;
  tagColor: string;
}
interface SocialIconItem {
  id: string;
  label: string;
  Icon: React.ComponentType<{
    size?: number;
  }>;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLinkItem[] = [{
  id: "nav-home",
  label: "Home",
  href: "#"
}, {
  id: "nav-about",
  label: "About",
  href: "#"
}, {
  id: "nav-media",
  label: "Media",
  href: "#",
  active: true
}, {
  id: "nav-summits",
  label: "Summits",
  href: "#",
  hasDropdown: true
}, {
  id: "nav-pillars",
  label: "Pillars",
  href: "#",
  hasDropdown: true
}, {
  id: "nav-academy",
  label: "Academy",
  href: "#"
}, {
  id: "nav-partners",
  label: "Partners",
  href: "#"
}, {
  id: "nav-contact",
  label: "Contact",
  href: "#"
}];
const FOOTER_SECTION_ROWS: SectionLinkRow[] = [{
  id: "row-pages",
  label: "Pages",
  links: [{
    id: "fp-1",
    label: "About",
    href: "#"
  }, {
    id: "fp-2",
    label: "Summits",
    href: "#"
  }, {
    id: "fp-3",
    label: "Pillars",
    href: "#"
  }, {
    id: "fp-4",
    label: "Academy",
    href: "#"
  }, {
    id: "fp-5",
    label: "Partners",
    href: "#"
  }, {
    id: "fp-6",
    label: "Contact",
    href: "#"
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
const SOCIAL_ICONS: SocialIconItem[] = [{
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
const BROADCAST_ITEMS: BroadcastItem[] = [{
  id: "b-1",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/Masisizane-Fund-and-AgriSETA-at-EmpowaWomen-in-Agriculture-Summit.jpg",
  title: "Masisizane Fund and AgriSETA at EmpowaWomen in Agriculture Summit",
  description: "Masisizane Fund's Head of Post Investment, Esther Mukumbo was at the AgriSETA EmpowaWomen in Agriculture Summit where 200 women converged to have meaningful discussions.",
  link: "https://www.youtube.com/watch?v=NEBGlpmMXfg",
  ctaLabel: "Watch on YouTube",
  tagLabel: "YOUTUBE",
  tagColor: "#DD6236"
}, {
  id: "b-2",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/Womens-Day-Empowering-women-in-manufacturing-sector.jpg",
  title: "Women's Day | Empowering Women in Manufacturing Sector",
  description: "As South Africa commemorates Women's Day, the question of transformation and inclusion in the manufacturing sector is in the spotlight.",
  link: "https://www.enca.com/business/womens-day-empowering-women-manufacturing-sector",
  ctaLabel: "Watch on eNCA",
  tagLabel: "eNCA",
  tagColor: "#1655B5"
}, {
  id: "b-3",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/Womens-Month-Empowering-women-across-industries-with-Empowawomen-Summit.jpg",
  title: "Women's Month | Empowering Women Across Industries with Empowawomen Summit",
  description: "Empowawomen is a platform dedicated to uplifting women through events, programs, and initiatives offering thought leadership and masterclass experiences.",
  link: "https://www.youtube.com/watch?v=mogQIhL5jTk",
  ctaLabel: "Watch on YouTube",
  tagLabel: "YOUTUBE",
  tagColor: "#DD6236"
}, {
  id: "b-4",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/Transport-Month-TETA-Empowawomen-in-Transport-Summit---Sabelo-Mbuku.jpg",
  title: "Transport Month | TETA Empowawomen in Transport Summit: Sabelo Mbuku",
  description: "In light of Transport Month, TETA will be hosting the Women in Transport Summit — a landmark moment for women in the sector.",
  link: "https://www.youtube.com/watch?v=65MWmkZqlGo",
  ctaLabel: "Watch on YouTube",
  tagLabel: "YOUTUBE",
  tagColor: "#DD6236"
}];
const FEATURE_ARTICLES: FeatureArticle[] = [{
  id: "f-1",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/Empowawomen-Leadership-Summit-Returns-For-Its-9th-Year-Bigger-Bolder-And-More-Impactful.jpg",
  title: "Empowawomen Leadership Summit Returns For Its 9th Year, Bigger, Bolder, And More Impactful",
  description: "As Women's Month approaches, Johannesburg's most influential women-led leadership movement returns for its 9th consecutive year on Saturday, 30 August 2025.",
  link: "https://lifestyleandtech.co.za/just-life/article/2025-07-29/empowawomen-leadership-summit-returns-for-its-9th-year-bigger-bolder-and-more-impactful",
  tagLabel: "LIFESTYLE & TECH",
  tagColor: "#FD5732"
}, {
  id: "f-2",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/Women-drive-change-in-property-and-cities.jpg",
  title: "Women Drive Change in Property and Cities",
  description: "The Women in Property and Built Environment Summit showcased how women are shaping cities, driving economic inclusion, and fostering collaboration.",
  link: "https://www.citizen.co.za/randburg-sun/news-headlines/2025/04/29/women-drive-change-in-property-and-cities/",
  tagLabel: "THE CITIZEN",
  tagColor: "#1655B5"
}, {
  id: "f-3",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/AgriSETA-reflects-on-achievements-and-aims-higher-for-2025-Food-For-Mzansi.jpg",
  title: "AgriSETA Reflects on Achievements and Aims Higher for 2025",
  description: "AgriSETA closed 2024 with a clean audit, stronger support for women in agriculture, and a renewed focus on skills development.",
  link: "https://www.foodformzansi.co.za/agriseta-reflects-on-achievements-and-aims-higher-for-2025/",
  tagLabel: "FOOD FOR MZANSI",
  tagColor: "#DD6236"
}, {
  id: "f-4",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/EmpowaWomen,-TETA-to-host-transformative-summit-for-women-in-transport.jpg",
  title: "EmpowaWomen, TETA to Host Transformative Summit for Women in Transport",
  description: "EmpowaWomen, in partnership with TETA, will host the next Women in Transport Summit at the Graceland Hotel Casino in Secunda, Mpumalanga.",
  link: "https://www.bizcommunity.com/article/empowawomen-and-teta-to-host-transformative-summit-for-women-in-transport-811193a",
  tagLabel: "BIZ COMMUNITY",
  tagColor: "#FD5732"
}, {
  id: "f-5",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/EmpowaWomen-in-Transport-Summit-A-Transformative-Gathering-of-Women-Leaders-in-Transport.jpg",
  title: "EmpowaWomen in Transport Summit: A Transformative Gathering of Women Leaders",
  description: "The EmpowaWomen in Transport Summit brought together over 200 women leaders, professionals, and innovators at the Graceland Hotel in Mpumalanga.",
  link: "https://www.abrbuzz.co.za/mobility/25381-empowawomen-in-transport-summit-a-transformative-gathering-of-women-leaders-in-transport",
  tagLabel: "ABR BUZZ",
  tagColor: "#1655B5"
}, {
  id: "f-6",
  image: "https://empowawomen.co.za/wp-content/uploads/2025/10/EmpowaWomen-in-Transport-Summit-set-to-Empower-Women-Leaders-in-the-Industry.jpg",
  title: "EmpowaWomen in Transport Summit Set to Empower Women Leaders in the Industry",
  description: "EmpowaWomen and TETA announce the next Women in Transport Summit on November 14, 2024, at Graceland Hotel Casino and Country Club.",
  link: "https://www.saprofilemagazine.co.za/business-news/empowawomen-in-transport-summit-set-to-empower-women-leaders-in-the-industry/",
  tagLabel: "SA PROFILE",
  tagColor: "#DD6236"
}];
const HASHTAG_ITEMS = [{
  id: "ht-1",
  label: "#EmpowaWomen2026"
}, {
  id: "ht-2",
  label: "#HerStoryInTheMaking"
}, {
  id: "ht-3",
  label: "#PowerRedefined"
}];
const HERO_WORDS = ["The", "Narrative", "Is", "Ours"];
const HERO_SUBWORDS = ["We", "Don't", "Just", "Make", "News", "—", "We", "Make", "History."];
const PRE_FOOTER_HEADLINE_WORDS = ["The", "story", "isn't", "over.", "It's", "just", "getting", "started."];

// ─── Eyebrow (body sections – pink) ──────────────────────────────────────────
const Eyebrow = ({
  text,
  dark = false
}: {
  text: string;
  dark?: boolean;
}) => <motion.div initial={{
  opacity: 0,
  y: 10
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.5
}} className="inline-flex items-center gap-2.5 rounded-full mb-5" style={{
  backgroundColor: dark ? "rgba(255,255,255,0.05)" : "rgba(255,45,135,0.08)",
  border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,45,135,0.15)",
  padding: "7px 14px"
}}>
    <span style={{
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#FF2D87",
    display: "inline-block",
    flexShrink: 0,
    animation: "pulseDot 2s ease-in-out infinite"
  }} />
    <span className="uppercase" style={{
    fontFamily: "Figtree",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.18em",
    color: dark ? "rgba(255,255,255,0.55)" : "#FF2D87"
  }}>
      {text}
    </span>
  </motion.div>;

// ─── Top Navigation ───────────────────────────────────────────────────────────
const TopNav = () => {
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <div className="fixed top-0 left-0 right-0 z-[100]">
      <header className="relative flex items-center" style={{
      height: "68px",
      backgroundColor: "rgba(10,10,15,0.96)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      paddingLeft: "clamp(16px, 5vw, 80px)",
      paddingRight: "clamp(16px, 5vw, 80px)"
    }}>
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
        <div className="flex items-center gap-2.5 shrink-0">
          <img src="https://empowawomen.co.za/wp-content/uploads/2025/06/logo.png" alt="EmpowaWomen logo mark" style={{
          height: "32px",
          width: "auto",
          objectFit: "contain"
        }} />
          <span className="text-base font-medium whitespace-nowrap" style={{
          fontFamily: "Figtree",
          letterSpacing: "0.02em"
        }}>
            <span className="text-white">Empowa</span>
            <span style={{
            color: "#FF2D87"
          }}>Women</span>
          </span>
        </div>

        {/* Desktop nav — hidden on mobile */}
        <nav aria-label="Main navigation" className="hidden md:flex flex-1 justify-center items-center">
          {NAV_LINKS.map((link, idx) => <React.Fragment key={link.id}>
              <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} className="inline-flex flex-col items-center gap-[3px] px-3 py-1.5 no-underline transition-colors duration-150" style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: link.active || hoveredLink === link.id ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)"
          }}>
                <span className="inline-flex items-center gap-[3px]">
                  <span>{link.label}</span>
                  {link.hasDropdown && <ChevronDown size={11} style={{
                color: hoveredLink === link.id ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.25)",
                transition: "color 150ms ease-out",
                flexShrink: 0
              }} />}
                </span>
                <span style={{
              display: "block",
              height: "1.5px",
              width: "100%",
              backgroundColor: "#FF2D87",
              transformOrigin: "left",
              transform: link.active || hoveredLink === link.id ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 200ms ease-out"
            }} />
              </a>
              {idx < NAV_LINKS.length - 1 && <span style={{
            color: "rgba(255,255,255,0.15)",
            fontSize: "8px"
          }}>·</span>}
            </React.Fragment>)}
        </nav>

        {/* Desktop CTA + hamburger */}
        <div className="flex items-center shrink-0 ml-auto md:ml-0">
          <a href="mailto:media@empowawomen.co.za" className="hidden md:inline-flex items-center overflow-hidden" style={{
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
          position: "relative"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
        }}>
            <span style={{
            position: "relative",
            zIndex: 1
          }}>Media Enquiries</span>
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

          {/* Hamburger — visible only on mobile */}
          <button className="md:hidden text-white p-2 ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.22,
        ease: "easeOut"
      }} className="flex flex-col gap-4 px-5 py-6 md:hidden" style={{
        backgroundColor: "rgba(10,10,15,0.97)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
            {NAV_LINKS.map(link => <a key={link.id} href={link.href} className="no-underline text-base" style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          color: link.active ? "#FF2D87" : "rgba(255,255,255,0.70)"
        }} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>)}
            <a href="mailto:media@empowawomen.co.za" className="mt-2 text-sm font-medium text-white text-center no-underline rounded-full py-2.5 px-6 inline-block" style={{
          backgroundColor: "#FF2D87",
          fontFamily: "Figtree"
        }}>
              Media Enquiries
            </a>
          </motion.div>}
      </AnimatePresence>

      <style>{`
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>;
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  return <section className="relative w-full flex flex-col items-center justify-end overflow-hidden" style={{
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    paddingBottom: "clamp(56px, 9vh, 96px)",
    zIndex: 1
  }}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div className="absolute inset-0" initial={{
        scale: 1.06,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 2.4,
        ease: "easeOut"
      }}>
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=85" alt="Broadcast media background" className="w-full h-full object-cover" style={{
          objectPosition: "center 40%"
        }} />
        </motion.div>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.70) 0%, rgba(10,10,15,0.40) 40%, rgba(10,10,15,0.88) 100%)"
      }} />
      </div>

      {/* Bottom fade to next section */}
      <div className="pointer-events-none" style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 45%)",
      zIndex: 2
    }} />

      {/* Content */}
      <div className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8" style={{
      zIndex: 10,
      maxWidth: "1400px"
    }}>
        <motion.div initial={{
        y: 90
      }} animate={{
        y: 0
      }} transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }} className="w-full flex flex-col items-center">
          {/* Hero eyebrow */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="inline-flex items-center gap-2.5 rounded-full mb-6 sm:mb-7" style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "8px 16px"
        }}>
            <span className="shrink-0 rounded-full" style={{
            width: "6px",
            height: "6px",
            backgroundColor: "#FF2D87",
            display: "inline-block",
            animation: "pulseDot 2s ease-in-out infinite"
          }} />
            <span className="uppercase" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.20em",
            color: "rgba(255,255,255,0.60)"
          }}>
              MEDIA HUB
            </span>
          </motion.div>

          {/* Hero headline */}
          <h1 className="text-white text-center w-full mx-auto" style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(36px, 8vw, 96px)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          maxWidth: "900px",
          margin: "0 auto 20px auto"
        }}>
            {HERO_WORDS.map((word, i) => {
            const isLast = i === HERO_WORDS.length - 1;
            return <motion.span key={`hw-${word}-${i}`} style={{
              display: "inline-block",
              marginRight: "0.25em"
            }} initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 20
            }} animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4 + i * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}>
                {isLast ? <span>
                  <span style={{
                  textDecoration: "underline",
                  textDecorationColor: "#FF2D87",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                  color: "#FFFFFF"
                }}>
                    {word}
                  </span>
                  <span style={{
                  color: "#FF2D87"
                }}>.</span>
                </span> : word}
              </motion.span>;
          })}
            <br />
            {HERO_SUBWORDS.map((word, i) => <motion.span key={`hs-${word}-${i}`} style={{
            display: "inline-block",
            marginRight: "0.25em",
            fontWeight: 300,
            opacity: 0.75
          }} initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: 20
          }} animate={{
            opacity: 0.75,
            filter: "blur(0px)",
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4 + (HERO_WORDS.length + i) * 0.08,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}>
                {word}
              </motion.span>)}
          </h1>

          {/* Sub-copy */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.2
        }} className="text-center mx-auto" style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2.2vw, 17px)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.50)",
          maxWidth: "560px",
          margin: "0 auto 36px auto",
          lineHeight: 1.75
        }}>
            Broadcast coverage, feature articles, press releases, and media accreditation — every
            platform, every story, every stage.
          </motion.p>

          {/* CTAs — flex-col w-full on mobile, flex-row on sm+ */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12 w-full sm:w-auto px-4 sm:px-0">
            <a href="#accreditation" className="inline-flex items-center justify-center no-underline font-medium w-full sm:w-auto" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            color: "#FFFFFF",
            backgroundColor: "#FF2D87",
            borderRadius: "999px",
            height: "48px",
            padding: "0 28px",
            letterSpacing: "0.02em",
            transition: "all 200ms ease-out",
            boxShadow: "0 0 32px rgba(255,45,135,0.25)"
          }} onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.filter = "brightness(1.1)";
            el.style.boxShadow = "0 0 48px rgba(255,45,135,0.40)";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.filter = "brightness(1)";
            el.style.boxShadow = "0 0 32px rgba(255,45,135,0.25)";
          }}>
              <span>Media Accreditation</span>
            </a>
            <a href="#press-kit" className="inline-flex items-center justify-center no-underline w-full sm:w-auto" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 400,
            color: "#FFFFFF",
            borderRadius: "999px",
            height: "48px",
            padding: "0 28px",
            border: "1px solid rgba(255,255,255,0.20)",
            letterSpacing: "0.02em",
            transition: "all 200ms ease-out"
          }} onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "rgba(255,255,255,0.08)";
            el.style.borderColor = "rgba(255,255,255,0.40)";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.borderColor = "rgba(255,255,255,0.20)";
          }}>
              <span>Download Press Kit</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2" style={{
      transform: "translateX(-50%)",
      zIndex: 10
    }} initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 2
    }}>
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} style={{
        width: "1px",
        height: "40px",
        background: "linear-gradient(to bottom, rgba(255,45,135,0.8), transparent)",
        margin: "0 auto"
      }} />
      </motion.div>
    </section>;
};

// ─── Broadcast Section ────────────────────────────────────────────────────────
const BroadcastSection = () => {
  return <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{
    backgroundColor: "#0A0A0F"
  }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-14">
          <Eyebrow text="BROADCAST MEDIA" dark />
          <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 800,
          fontSize: "clamp(24px, 4.5vw, 56px)",
          color: "#FFFFFF",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: "0 0 16px 0",
          textTransform: "uppercase"
        }}>
            WHEN THE CAMERAS ROLL,
            <br />
            WE COMMAND THE STORY.
          </h2>
          <p style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.50)",
          maxWidth: "520px",
          lineHeight: 1.75,
          margin: 0
        }}>
            Watch EmpowaWomen on national and continental broadcast platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BROADCAST_ITEMS.map((item, idx) => <motion.a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: idx * 0.08,
          duration: 0.6
        }} className="group flex flex-col no-underline" style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "12px",
          overflow: "hidden"
        }}>
              <div className="relative overflow-hidden" style={{
            aspectRatio: "16/9"
          }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="transition-opacity duration-300 group-hover:opacity-0" style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.20)"
            }} />
                <div style={{
              position: "absolute",
              top: "14px",
              left: "14px"
            }}>
                  <span className="px-3 py-1 text-white font-bold tracking-wider" style={{
                fontFamily: "Figtree",
                fontSize: "10px",
                backgroundColor: item.tagColor,
                borderRadius: "999px",
                letterSpacing: "0.10em"
              }}>
                    {item.tagLabel}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="group-hover:text-[#FF2D87] transition-colors duration-200 line-clamp-2" style={{
              fontFamily: "Figtree",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.35,
              margin: "0 0 10px 0"
            }}>
                  {item.title}
                </h3>
                <p className="line-clamp-3 flex-1" style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.65,
              margin: "0 0 18px 0"
            }}>
                  {item.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-1.5 group-hover:text-[#FF2D87] transition-colors duration-200" style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 600,
              color: "#FF2D87"
            }}>
                  <span>{item.ctaLabel}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.a>)}
        </div>
      </div>
    </section>;
};

// ─── Feature Articles Section ─────────────────────────────────────────────────
const FeaturesSection = () => {
  return <section className="relative w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{
    backgroundColor: "#F7F6F2",
    borderRadius: "40px 40px 0 0",
    marginTop: "-40px",
    zIndex: 10
  }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-14">
          <Eyebrow text="FEATURE ARTICLES" />
          <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 800,
          fontSize: "clamp(24px, 4.5vw, 56px)",
          color: "#0A0A0F",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          margin: "0 0 16px 0",
          textTransform: "uppercase"
        }}>
            THE PRESS THAT
            <br />
            MOVES THE NEEDLE.
          </h2>
          <p style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 1.8vw, 17px)",
          fontWeight: 400,
          color: "#64748b",
          maxWidth: "520px",
          lineHeight: 1.75,
          margin: 0
        }}>
            Read how EmpowaWomen is reshaping the national conversation around women, power, and
            progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_ARTICLES.map((item, idx) => <motion.a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: idx * 0.08,
          duration: 0.6
        }} className="group flex flex-col no-underline bg-white" style={{
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "12px",
          overflow: "hidden",
          transition: "box-shadow 250ms ease-out"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
        }}>
              <div className="relative overflow-hidden" style={{
            aspectRatio: "16/9"
          }}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div style={{
              position: "absolute",
              top: "14px",
              left: "14px"
            }}>
                  <span className="text-white font-bold tracking-wider" style={{
                fontFamily: "Figtree",
                fontSize: "10px",
                backgroundColor: item.tagColor,
                borderRadius: "999px",
                padding: "5px 12px",
                letterSpacing: "0.10em"
              }}>
                    {item.tagLabel}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="group-hover:text-[#FF2D87] transition-colors duration-200" style={{
              fontFamily: "Figtree",
              fontSize: "17px",
              fontWeight: 600,
              color: "#0A0A0F",
              lineHeight: 1.35,
              margin: "0 0 10px 0"
            }}>
                  {item.title}
                </h3>
                <p className="line-clamp-3 flex-1" style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 400,
              color: "#64748b",
              lineHeight: 1.65,
              margin: "0 0 20px 0"
            }}>
                  {item.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-1.5 transition-opacity duration-200 group-hover:opacity-70" style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 600,
              color: "#FD5732"
            }}>
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.a>)}
        </div>
      </div>
    </section>;
};

// ─── Accreditation Section ────────────────────────────────────────────────────
const AccreditationSection = () => {
  const accredRows = [{
    label: "Event",
    value: "EmpowaWomen Leadership Summit 2026"
  }, {
    label: "Date",
    value: "Saturday, 29 August 2026"
  }, {
    label: "Venue",
    value: "The Forum, The Campus Bryanston"
  }, {
    label: "Contact",
    value: "media@empowawomen.co.za · 011 482 7256/7"
  }];
  return <section id="accreditation" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{
    backgroundColor: "#0A0A0F"
  }}>
      <div className="max-w-4xl mx-auto text-center">
        <Eyebrow text="MEDIA ACCREDITATION" dark />
        <h2 style={{
        fontFamily: "Figtree",
        fontWeight: 800,
        fontSize: "clamp(24px, 4.5vw, 56px)",
        color: "#FFFFFF",
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        textTransform: "uppercase",
        margin: "0 0 20px 0"
      }}>
          IN THIS ROOM, YOUR LENS
          <br />
          CAPTURES HISTORY.
        </h2>
        <p style={{
        fontFamily: "Figtree",
        fontSize: "clamp(14px, 1.8vw, 17px)",
        fontWeight: 400,
        color: "rgba(255,255,255,0.50)",
        maxWidth: "540px",
        lineHeight: 1.75,
        margin: "0 auto 48px auto"
      }}>
          Apply for press accreditation to cover the EmpowaWomen Leadership Summit 2026. Limited
          accreditation passes available.
        </p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-left mb-12" style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        borderRadius: "16px",
        padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderLeftWidth: "3px",
        borderLeftColor: "#FF2D87"
      }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-white">
            {accredRows.map(row => <div key={row.label}>
                <p className="uppercase" style={{
              fontFamily: "Figtree",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.40)",
              margin: "0 0 6px 0"
            }}>
                  {row.label}
                </p>
                <p style={{
              fontFamily: "Figtree",
              fontSize: "16px",
              fontWeight: 500,
              color: "#FFFFFF",
              margin: 0
            }}>
                  {row.value}
                </p>
              </div>)}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a href="mailto:media@empowawomen.co.za" className="inline-flex items-center justify-center gap-2 rounded-full no-underline font-medium w-full sm:w-auto" style={{
          fontFamily: "Figtree",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          height: "48px",
          padding: "0 28px",
          letterSpacing: "0.02em",
          transition: "all 200ms ease-out",
          boxShadow: "0 0 32px rgba(255,45,135,0.20)"
        }} onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.filter = "brightness(1.1)";
        }} onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.filter = "brightness(1)";
        }}>
            <span>Apply for Accreditation</span>
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full no-underline w-full sm:w-auto" style={{
          fontFamily: "Figtree",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FD5732",
          height: "48px",
          padding: "0 28px",
          border: "1px solid #FD5732",
          letterSpacing: "0.02em",
          transition: "all 200ms ease-out"
        }} onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "rgba(253,87,50,0.10)";
        }} onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "transparent";
        }}>
            <span>Visit Website</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {HASHTAG_ITEMS.map(tag => <span key={tag.id} className="rounded-full" style={{
          fontFamily: "Figtree",
          fontSize: "12px",
          fontWeight: 600,
          color: "#FF2D87",
          backgroundColor: "rgba(255,45,135,0.10)",
          border: "1px solid rgba(255,45,135,0.20)",
          padding: "6px 16px",
          letterSpacing: "0.04em"
        }}>
              {tag.label}
            </span>)}
        </div>
      </div>
    </section>;
};

// ─── Pre-Footer Editorial CTA ─────────────────────────────────────────────────
const PreFooterCTA = () => {
  return <section className="w-full px-4 sm:px-6 lg:px-8" style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "clamp(64px, 10vw, 120px)",
    paddingBottom: "clamp(48px, 8vw, 80px)"
  }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-5 sm:gap-6">
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
        }} className="m-0 uppercase" style={{
          fontFamily: "Figtree",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.10em",
          color: "rgba(255,255,255,0.60)"
        }}>
            MEDIA &amp; PRESS
          </motion.p>

          <div className="max-w-[720px]">
            <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(28px, 5vw, 72px)",
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0
          }}>
              {PRE_FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`pfw-${i}`} initial={{
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
              delay: i * 0.08,
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
        }} className="max-w-[448px]" style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(15px, 2vw, 18px)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.55)",
          margin: "16px 0 0 0"
        }}>
            For media enquiries, accreditation, and press partnerships — get in touch.
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
      }} className="flex flex-col sm:flex-row gap-4">
          <a href="#accreditation" className="inline-flex items-center justify-center gap-2 no-underline cursor-pointer w-full sm:w-auto" style={{
          padding: "16px 36px",
          backgroundColor: "#FF2D87",
          color: "#FFFFFF",
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 500,
          borderRadius: "0",
          transition: "filter 200ms ease-out"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
        }}>
            <span>Media Accreditation</span>
            <ArrowRight size={16} />
          </a>
          <a href="#press-kit" className="inline-flex items-center justify-center gap-2 no-underline cursor-pointer w-full sm:w-auto" style={{
          padding: "16px 36px",
          backgroundColor: "rgba(255,255,255,0.06)",
          color: "#FFFFFF",
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 500,
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "0",
          transition: "background-color 200ms ease-out"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.10)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.06)";
        }}>
            <Download size={16} />
            <span>Download Press Kit</span>
          </a>
        </motion.div>
      </div>
    </section>;
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => {
  return <footer className="w-full" style={{
    backgroundColor: "#0A0A0F",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    position: "relative",
    overflow: "hidden"
  }}>
      {/* Background image */}
      <div style={{
      position: "absolute",
      inset: 0,
      opacity: 0.3,
      pointerEvents: "none"
    }}>
        <div className="w-full h-full" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maskImage: "linear-gradient(to top, transparent 0%, black 35%)",
        WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 35%)"
      }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" style={{
      paddingTop: "clamp(48px, 8vw, 80px)",
      paddingBottom: "clamp(24px, 5vw, 40px)",
      position: "relative",
      zIndex: 1
    }}>
        {/* Footer nav rows — grid on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full mb-12 md:mb-16">
          {FOOTER_SECTION_ROWS.map(row => <div key={row.id} className="flex flex-col gap-3">
              <span className="shrink-0" style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.50)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            whiteSpace: "nowrap"
          }}>
                {row.label}
              </span>
              <div className="flex flex-col gap-2">
                {row.links.map(link => <a key={link.id} href={link.href} className="no-underline whitespace-nowrap transition-colors duration-200 w-fit" style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)"
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)";
            }}>
                    {link.label}
                  </a>)}
              </div>
            </div>)}
        </div>

        {/* Bottom bar — stacks vertically on mobile */}
        <div className="pt-6 sm:pt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between flex-wrap w-full" style={{
        borderTop: "1px solid rgba(255,255,255,0.06)"
      }}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <div className="flex items-center gap-3">
              <img src="https://empowawomen.co.za/wp-content/uploads/2025/06/logo.png" alt="EmpowaWomen logo mark" style={{
              height: "28px",
              width: "auto",
              objectFit: "contain"
            }} />
              <span style={{
              fontFamily: "Figtree",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "0.02em"
            }}>
                <span className="text-white">Empowa</span>
                <span style={{
                color: "#FF2D87"
              }}>Women</span>
              </span>
            </div>
            <span style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.20)"
          }}>
              © {new Date().getFullYear()} EmpowaWomen.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map(({
            id,
            label,
            Icon
          }) => <a key={id} href="#" aria-label={label} className="flex items-center justify-center rounded-full text-white no-underline transition-all duration-300" style={{
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.10)"
          }} onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "#FFFFFF";
            el.style.color = "#0A0A0F";
          }} onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "rgba(255,255,255,0.05)";
            el.style.color = "#FFFFFF";
          }}>
                <Icon size={16} />
              </a>)}
          </div>
        </div>

        <p className="mt-1 mb-0 text-center italic" style={{
        fontFamily: "Figtree",
        fontWeight: 300,
        fontSize: "14px",
        color: "#FF2D87",
        marginTop: "24px"
      }}>
          Ignite Passion | Foster Growth | Drive Change
        </p>
      </div>
    </footer>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const MediaPage = () => {
  return <main className="selection:bg-[#FF2D87]/30" style={{
    minHeight: "100vh",
    fontFamily: "Figtree",
    backgroundColor: "#0A0A0F"
  }}>
      <TopNav />
      <HeroSection />
      <BroadcastSection />
      <FeaturesSection />
      <AccreditationSection />
      <PreFooterCTA />
      <Footer />
    </main>;
};