import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

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
}} style={{
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  backgroundColor: dark ? "rgba(255,255,255,0.05)" : "rgba(255,45,135,0.08)",
  border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,45,135,0.15)",
  padding: "7px 14px",
  borderRadius: "999px",
  marginBottom: "20px"
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
    <span style={{
    fontFamily: "Figtree",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.18em",
    color: dark ? "rgba(255,255,255,0.55)" : "#FF2D87",
    textTransform: "uppercase"
  }}>
      {text}
    </span>
  </motion.div>;

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  return <section style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: "#0A0A0F",
    paddingBottom: "clamp(56px, 9vh, 96px)",
    zIndex: 1
  }}>
      {/* Background */}
      <div style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0
    }}>
        <motion.div style={{
        position: "absolute",
        inset: 0
      }} initial={{
        scale: 1.06,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 2.4,
        ease: "easeOut"
      }}>
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=85" alt="Broadcast media background" style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
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
      <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 45%)",
      pointerEvents: "none",
      zIndex: 2
    }} />

      {/* Content */}
      <div style={{
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "clamp(120px, 18vh, 220px)",
      paddingLeft: "clamp(16px, 5vw, 36px)",
      paddingRight: "clamp(16px, 5vw, 36px)",
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
      }} style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
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
        }} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "8px 16px",
          borderRadius: "999px",
          marginBottom: "28px"
        }}>
            <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#FF2D87",
            display: "inline-block",
            animation: "pulseDot 2s ease-in-out infinite"
          }} />
            <span style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.20em",
            color: "rgba(255,255,255,0.60)",
            textTransform: "uppercase"
          }}>
              MEDIA HUB
            </span>
          </motion.div>

          {/* Hero headline */}
          <h1 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(36px, 8vw, 96px)",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          color: "#FFFFFF",
          textAlign: "center",
          width: "100%",
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
        }} style={{
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2.2vw, 17px)",
          fontWeight: 400,
          color: "rgba(255,255,255,0.50)",
          maxWidth: "560px",
          margin: "0 auto 36px auto",
          lineHeight: 1.75,
          textAlign: "center"
        }}>
            Broadcast coverage, feature articles, press releases, and media accreditation — every
            platform, every story, every stage.
          </motion.p>

          {/* CTAs — side-by-side premium pill design */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.4
        }} style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "48px",
          width: "100%"
        }} className="media-hero-ctas">
            <a href="#accreditation" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 500,
            color: "#FFFFFF",
            backgroundColor: "#FF2D87",
            borderRadius: "999px",
            minHeight: "54px",
            width: "220px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "0.02em",
            textDecoration: "none",
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
            <a href="#accreditation" style={{
            fontFamily: "Figtree",
            fontSize: "clamp(13px, 2vw, 15px)",
            fontWeight: 400,
            color: "#FFFFFF",
            borderRadius: "999px",
            minHeight: "54px",
            width: "220px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.20)",
            letterSpacing: "0.02em",
            textDecoration: "none",
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
    </section>;
};

// ─── Broadcast Section ────────────────────────────────────────────────────────
const BroadcastSection = () => {
  return <section style={{
    width: "100%",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)",
    backgroundColor: "#0A0A0F"
  }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 8vw, 64px)" }}>
          <Eyebrow text="BROADCAST MEDIA" dark />
          <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
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

        <div className="media-broadcast-grid">
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
        }} className="media-card" style={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer"
        }}>
              <div className="relative overflow-hidden" style={{
            aspectRatio: "16/9",
            position: "relative"
          }}>
                <img src={item.image} alt={item.title} className="media-zoom-img" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} />
                <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.15)",
              pointerEvents: "none"
            }} />
                <div style={{
              position: "absolute",
              top: "14px",
              left: "14px"
            }}>
                  <span style={{
                fontFamily: "Figtree",
                fontSize: "10px",
                fontWeight: 700,
                color: "#FFFFFF",
                backgroundColor: item.tagColor,
                borderRadius: "999px",
                padding: "4px 10px",
                letterSpacing: "0.10em"
              }}>
                    {item.tagLabel}
                  </span>
                </div>
              </div>
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{
              fontFamily: "Figtree",
              fontSize: "15px",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.35,
              margin: "0 0 10px 0"
            }}>
                  {item.title}
                </h3>
                <p style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.65,
              margin: "0 0 18px 0"
            }}>
                  {item.description}
                </p>
                <div style={{
              marginTop: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 600,
              color: "#FF2D87"
            }}>
                  <span>{item.ctaLabel}</span>
                </div>
              </div>
            </motion.a>)}
        </div>
      </div>
    </section>;
};

// ─── Feature Articles Section ─────────────────────────────────────────────────
const FeaturesSection = () => {
  return <section style={{
    position: "relative",
    width: "100%",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)",
    backgroundColor: "#F7F6F2",
    borderRadius: "40px 40px 0 0",
    marginTop: "-40px",
    zIndex: 10
  }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 8vw, 64px)" }}>
          <Eyebrow text="FEATURE ARTICLES" />
          <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
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

        <div className="media-features-grid">
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
        }} className="media-card" style={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer"
        }}>
              <div className="relative overflow-hidden" style={{
            aspectRatio: "16/9",
            position: "relative"
          }}>
                <img src={item.image} alt={item.title} className="media-zoom-img" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} />
                <div style={{
              position: "absolute",
              top: "14px",
              left: "14px"
            }}>
                  <span style={{
                fontFamily: "Figtree",
                fontSize: "10px",
                fontWeight: 750,
                color: "#FFFFFF",
                backgroundColor: item.tagColor,
                borderRadius: "999px",
                padding: "5px 12px",
                letterSpacing: "0.10em"
              }}>
                    {item.tagLabel}
                  </span>
                </div>
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{
              fontFamily: "Figtree",
              fontSize: "17px",
              fontWeight: 600,
              color: "#0A0A0F",
              lineHeight: 1.35,
              margin: "0 0 10px 0"
            }}>
                  {item.title}
                </h3>
                <p style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 400,
              color: "#64748b",
              lineHeight: 1.65,
              margin: "0 0 20px 0"
            }}>
                  {item.description}
                </p>
                <div style={{
              marginTop: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "Figtree",
              fontSize: "13px",
              fontWeight: 600,
              color: "#FD5732"
            }}>
                  <span>Read Article</span>
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
  return <section id="accreditation" style={{
    width: "100%",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)",
    backgroundColor: "#0A0A0F"
  }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <Eyebrow text="MEDIA ACCREDITATION" dark />
        <h2 style={{
        fontFamily: "Figtree",
        fontWeight: 300,
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
      }} style={{
        textAlign: "left",
        marginBottom: "48px",
        backgroundColor: "rgba(255,255,255,0.04)",
        borderRadius: "16px",
        padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderLeftWidth: "3px",
        borderLeftColor: "#FF2D87"
      }}>
          <div className="media-accred-grid" style={{ color: "#FFFFFF" }}>
            {accredRows.map(row => <div key={row.label}>
                <p style={{
              fontFamily: "Figtree",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "rgba(255,255,255,0.40)",
              margin: "0 0 6px 0",
              textTransform: "uppercase"
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

        {/* Action buttons with consistent pill sizes */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginBottom: "56px" }} className="media-hero-ctas">
          <a href="mailto:media@empowawomen.co.za" style={{
          fontFamily: "Figtree",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FFFFFF",
          backgroundColor: "#FF2D87",
          height: "48px",
          minHeight: "54px",
          width: "220px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "0.02em",
          textDecoration: "none",
          borderRadius: "999px",
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
          <a href="#" style={{
          fontFamily: "Figtree",
          fontSize: "14px",
          fontWeight: 500,
          color: "#FD5732",
          height: "48px",
          minHeight: "54px",
          width: "220px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #FD5732",
          letterSpacing: "0.02em",
          borderRadius: "999px",
          textDecoration: "none",
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

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {HASHTAG_ITEMS.map(tag => <span key={tag.id} style={{
          fontFamily: "Figtree",
          fontSize: "12px",
          fontWeight: 600,
          color: "#FF2D87",
          backgroundColor: "rgba(255,45,135,0.10)",
          border: "1px solid rgba(255,45,135,0.20)",
          padding: "6px 16px",
          borderRadius: "999px",
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
  return <section style={{
    width: "100%",
    backgroundColor: "#0A0A0F",
    paddingTop: "clamp(64px, 10vw, 120px)",
    paddingBottom: "clamp(48px, 8vw, 80px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)"
  }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
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
          letterSpacing: "0.10em",
          color: "rgba(255,255,255,0.60)",
          margin: 0,
          textTransform: "uppercase"
        }}>
            MEDIA &amp; PRESS
          </motion.p>

          <div style={{ maxWidth: "720px" }}>
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
        }} style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(15px, 2vw, 18px)",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.55)",
          margin: "16px 0 0 0",
          maxWidth: "448px"
        }}>
            For media enquiries, accreditation, and press partnerships — get in touch.
          </motion.p>
        </div>

        {/* Standardized B2B/Media Pill Buttons */}
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
      }} className="media-hero-ctas">
          <a href="#accreditation" style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "12px 36px",
          backgroundColor: "#FF2D87",
          color: "#FFFFFF",
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 500,
          borderRadius: "999px",
          minHeight: "54px",
          width: "220px",
          textDecoration: "none",
          transition: "filter 200ms ease-out"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
        }}>
            <span>Media Accreditation</span>
          </a>
          <a href="#" style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "12px 36px",
          backgroundColor: "rgba(255,255,255,0.06)",
          color: "#FFFFFF",
          fontFamily: "Figtree",
          fontSize: "clamp(14px, 2vw, 16px)",
          fontWeight: 500,
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "999px",
          minHeight: "54px",
          width: "220px",
          textDecoration: "none",
          transition: "background-color 200ms ease-out"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.10)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.06)";
        }}>
            <span>Download Press Kit</span>
          </a>
        </motion.div>
      </div>
    </section>;
};

// ─── Main Export ──────────────────────────────────────────────────────────────
export const MediaPage = () => {
  return <main style={{
    minHeight: "100vh",
    fontFamily: "Figtree",
    backgroundColor: "#0A0A0F"
  }}>
      <HeroSection />
      <BroadcastSection />
      <FeaturesSection />
      <AccreditationSection />
      <PreFooterCTA />

      <style>{`
        .media-broadcast-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .media-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .media-accred-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .media-card {
          transition: all 300ms ease-out;
        }
        .media-card:hover {
          border-color: rgba(255, 45, 135, 0.3) !important;
          box-shadow: 0 8px 32px rgba(255, 45, 135, 0.08) !important;
        }
        .media-card:hover .media-zoom-img {
          transform: scale(1.04);
        }
        .media-zoom-img {
          transition: transform 500ms ease-out;
        }
        @media (max-width: 1024px) {
          .media-broadcast-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .media-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .media-broadcast-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
          .media-features-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
          .media-accred-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
          .media-hero-ctas {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
          .media-hero-ctas a,
          .media-hero-ctas button {
            width: 220px !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </main>;
};
