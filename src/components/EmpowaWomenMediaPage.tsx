import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, ChevronUp, Printer } from "lucide-react";

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
  description: "In light of Transport Month, TETA will be hosting the Women in Transport Summit - a landmark moment for women in the sector.",
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
const HERO_SUBWORDS = ["We", "Don't", "Just", "Make", "News", "-", "We", "Make", "History."];
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
            Broadcast coverage, feature articles, press releases, and media accreditation - every
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
            <a href="#" style={{
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
          }} onClick={e => {
            e.preventDefault();
            document.getElementById("accreditation")?.scrollIntoView({ behavior: "smooth" });
          }}>
              <span>Media Accreditation</span>
            </a>
            <a href="#" style={{
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
          }} onClick={e => {
            e.preventDefault();
            document.getElementById("media-event-reels")?.scrollIntoView({ behavior: "smooth" });
          }}>
              <span>Watch Event Reels</span>
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

// ─── Official Press Releases Section ──────────────────────────────────────────
const PressReleasesSection = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      // Smooth scroll back to section header when collapsing
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  return (
    <section ref={containerRef} id="press-releases" style={{
      width: "100%",
      paddingTop: "clamp(64px, 8vw, 120px)",
      paddingBottom: "clamp(64px, 8vw, 120px)",
      paddingLeft: "clamp(24px, 6vw, 96px)",
      paddingRight: "clamp(24px, 6vw, 96px)",
      backgroundColor: "#F7F6F2",
      borderTop: "1px solid rgba(0,0,0,0.05)",
      position: "relative",
      zIndex: 10
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <Eyebrow text="OFFICIAL NEWSROOM" />
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
            OFFICIAL PRESS STATEMENTS
          </h2>
          <p style={{
            fontFamily: "Figtree",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            fontWeight: 400,
            color: "#64748b",
            maxWidth: "540px",
            lineHeight: 1.75,
            margin: "0 auto"
          }}>
            Official media updates, corporate announcements, and strategic press releases from the EmpowaWomen™ ecosystem.
          </p>
        </div>

        {/* Featured Press Release Card */}
        <div id="print-press-card" style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: "24px",
          padding: "clamp(24px, 5vw, 48px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Card Accent Bar */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#FF2D87"
          }} />

          {/* Release Meta */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "24px"
          }}>
            <span style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 700,
              color: "#FF2D87",
              backgroundColor: "rgba(255,45,135,0.08)",
              padding: "6px 14px",
              borderRadius: "999px",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              FOR IMMEDIATE RELEASE
            </span>
            <span style={{
              fontFamily: "Figtree",
              fontSize: "13px",
              color: "#64748b"
            }}>
              Saturday, 29 August 2026 · Johannesburg
            </span>
          </div>

          {/* Title block */}
          <h3 style={{
            fontFamily: "Figtree",
            fontSize: "clamp(20px, 3.5vw, 32px)",
            fontWeight: 700,
            color: "#0A0A0F",
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            margin: "0 0 12px 0"
          }}>
            10TH ANNUAL EMPOWAWOMEN LEADERSHIP SUMMIT 2026 SET TO CONVENE AFRICA’S MOST INFLUENTIAL WOMEN LEADERS
          </h3>
          
          <h4 style={{
            fontFamily: "Figtree",
            fontSize: "clamp(15px, 2vw, 18px)",
            fontWeight: 500,
            fontStyle: "italic",
            color: "#C9A84C",
            margin: "0 0 24px 0",
            lineHeight: 1.4
          }}>
            The Command Centre of Power, Capital and Control
          </h4>

          {/* Summary Preview */}
          <p style={{
            fontFamily: "Figtree",
            fontSize: "15px",
            color: "#475569",
            lineHeight: 1.75,
            margin: "0 0 28px 0"
          }}>
            EmpowaWomen™, one of Africa’s leading women-led leadership and economic empowerment ecosystems, has officially announced the 10th Annual EmpowaWomen Leadership Summit 2026, a landmark gathering that will bring together the continent’s most influential women leaders, entrepreneurs, investors, and future-focused decision-makers.
          </p>

          {/* Expandable Content Container */}
          <div style={{
            overflow: "hidden",
            height: isExpanded ? "auto" : "0px",
            opacity: isExpanded ? 1 : 0,
            transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
            marginBottom: isExpanded ? "32px" : "0px"
          }}>
            <div style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              paddingTop: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              {/* Introduction with Dropcap */}
              <p style={{
                fontFamily: "Figtree",
                fontSize: "15px",
                color: "#475569",
                lineHeight: 1.8,
                margin: 0
              }}>
                <span style={{
                  float: "left",
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: "36px",
                  paddingRight: "8px",
                  paddingTop: "4px",
                  color: "#FF2D87",
                  fontFamily: "Figtree"
                }}>J</span>ohannesburg, South Africa — Scheduled for Saturday, 29 August 2026 at The Forum | The Campus, Bryanston, Johannesburg, the summit marks a significant milestone in a decade-long journey of accelerating women’s leadership, economic participation, enterprise growth, and influence across Africa.
              </p>

              {/* Defining Question Callout */}
              <div style={{
                backgroundColor: "rgba(201,168,76,0.05)",
                borderLeft: "3px solid #C9A84C",
                borderRadius: "0 12px 12px 0",
                padding: "20px 24px",
                margin: "8px 0"
              }}>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#0A0A0F",
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Under the bold theme, “The Command Centre of Power, Capital and Control,” the 2026 Summit will explore one defining question:<br />
                  <strong>How do women move beyond participation to ownership, influence, capital allocation, governance leadership, and control of the economic levers shaping Africa’s future?</strong>
                </p>
              </div>

              {/* Decade Context */}
              <p style={{
                fontFamily: "Figtree",
                fontSize: "15px",
                color: "#475569",
                lineHeight: 1.8,
                margin: 0
              }}>
                For ten years, EmpowaWomen™ has remained committed to positioning women at the centre of Africa’s future economy. Through its ecosystem of leadership platforms, executive programmes, industry engagements, strategic partnerships, and economic empowerment initiatives, the platform has directly impacted and engaged close to 30,000 female executives, entrepreneurs, professionals, investors, innovators, and emerging leaders across South Africa and the continent.
              </p>

              <p style={{
                fontFamily: "Figtree",
                fontSize: "15px",
                color: "#475569",
                lineHeight: 1.8,
                margin: 0
              }}>
                As Africa enters a new era defined by artificial intelligence, climate transition, industrial transformation, demographic shifts, capital redistribution, and digital disruption, the role of women in shaping economic outcomes has never been more critical. The 10th Annual EmpowaWomen Leadership Summit is intentionally designed to serve as a strategic convening point where influence meets execution, leadership meets opportunity, and ambition translates into measurable economic impact.
              </p>

              {/* Simphiwe Quote Card */}
              <div style={{
                borderLeft: "4px solid #FF2D87",
                padding: "24px 0 24px 32px",
                backgroundColor: "rgba(255,45,135,0.02)",
                margin: "16px 0",
                borderRadius: "0 16px 16px 0",
                position: "relative"
              }}>
                <span style={{
                  position: "absolute",
                  left: "12px",
                  top: "-10px",
                  fontSize: "80px",
                  fontWeight: 700,
                  color: "rgba(255,45,135,0.06)",
                  fontFamily: "Georgia",
                  lineHeight: 1,
                  pointerEvents: "none"
                }}>“</span>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#0A0A0F",
                  lineHeight: 1.75,
                  margin: "0 0 16px 0",
                  position: "relative",
                  zIndex: 1
                }}>
                  “The future will belong to those who control capital, influence markets, shape policy, lead innovation, and build institutions. Women are no longer asking for a seat at the table. They are building the tables, funding the opportunities, shaping the industries, and leading the transformation. The 10th Annual EmpowaWomen Leadership Summit is where Africa’s next chapter of women-led growth, power, and economic influence will be written.”
                </p>
                <div>
                  <h5 style={{
                    fontFamily: "Figtree",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0A0A0F",
                    margin: "0 0 2px 0"
                  }}>
                    Simphiwe Masiza
                  </h5>
                  <p style={{
                    fontFamily: "Figtree",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#FF2D87",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0
                  }}>
                    Founder & Executive Producer, EmpowaWomen™
                  </p>
                </div>
              </div>

              {/* A Decade of Impact */}
              <div>
                <h4 style={{
                  fontFamily: "Figtree",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0A0A0F",
                  margin: "0 0 16px 0"
                }}>
                  A DECADE OF IMPACT
                </h4>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: 1.8,
                  margin: "0 0 16px 0"
                }}>
                  Over the past decade, EmpowaWomen™ has evolved into a trusted leadership and economic empowerment ecosystem, creating platforms that facilitate:
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "12px 24px",
                  marginBottom: "16px"
                }}>
                  {[
                    "Leadership acceleration and executive visibility",
                    "Enterprise growth and commercial expansion",
                    "Strategic partnerships and ecosystem collaboration",
                    "Investment and funding access",
                    "Board readiness and governance excellence",
                    "Innovation and future economy participation",
                    "Market access and procurement opportunities",
                    "Women-led economic transformation"
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#FF2D87", fontWeight: 700, fontSize: "14px", paddingTop: "1px" }}>✓</span>
                      <span style={{ fontFamily: "Figtree", fontSize: "14px", color: "#475569", lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: 1.8,
                  margin: 0
                }}>
                  Today, EmpowaWomen™ stands as a platform where conversations evolve into partnerships, ideas become enterprises, networks become opportunities, and leadership becomes legacy.
                </p>
              </div>

              {/* The Future Economy Growth Pillars */}
              <div>
                <h4 style={{
                  fontFamily: "Figtree",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0A0A0F",
                  margin: "0 0 16px 0"
                }}>
                  THE FUTURE ECONOMY GROWTH PILLARS™
                </h4>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: 1.8,
                  margin: "0 0 16px 0"
                }}>
                  The Summit will feature dedicated industry platforms focused on sectors expected to drive Africa’s next wave of economic growth and competitiveness:
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "12px",
                  marginBottom: "16px"
                }}>
                  {[
                    "Entrepreneurship & Funding",
                    "Leadership, Governance & Boards",
                    "Communications, Advertising, Marketing & Media",
                    "Agriculture & Food Security",
                    "The Creative Economy",
                    "Green Economy, Mining, Energy & Sustainability",
                    "Beauty, Fashion, Health & Wellness",
                    "Wholesale, Retail & Manufacturing"
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      backgroundColor: "rgba(0,0,0,0.02)",
                      border: "1px solid rgba(0,0,0,0.04)",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontFamily: "Figtree",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0A0A0F"
                    }}>
                      {item}
                    </div>
                  ))}
                </div>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#64748b",
                  margin: 0
                }}>
                  Each platform is intentionally curated to unlock executive intelligence, investment opportunities, commercial partnerships, market access, innovation collaboration, and measurable socio-economic impact.
                </p>
              </div>

              {/* What to Expect */}
              <div>
                <h4 style={{
                  fontFamily: "Figtree",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0A0A0F",
                  margin: "0 0 16px 0"
                }}>
                  WHAT TO EXPECT
                </h4>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: 1.8,
                  margin: "0 0 16px 0"
                }}>
                  The 10th Annual EmpowaWomen Leadership Summit 2026 will convene a high-calibre audience of women shaping industries, institutions, capital flows, policy, innovation, and culture. Delegates can expect:
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "10px",
                  marginBottom: "16px"
                }}>
                  {[
                    "High-impact keynote addresses from influential leaders",
                    "Executive masterclasses and industry intelligence sessions",
                    "Strategic boardroom-level conversations",
                    "Curated networking and partnership engagements",
                    "Investment and funding ecosystem access",
                    "Industry-specific future economy platforms",
                    "Executive leadership and governance insights",
                    "Cross-sector collaboration opportunities"
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#C9A84C", fontWeight: 700 }}>•</span>
                      <span style={{ fontFamily: "Figtree", fontSize: "14px", color: "#475569" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  color: "#64748b",
                  margin: 0
                }}>
                  The Summit is designed to create tangible outcomes, strategic relationships, and long-term opportunities that extend well beyond a single day.
                </p>
              </div>

              {/* Event Details Summary Grid */}
              <div style={{
                backgroundColor: "rgba(0,0,0,0.02)",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: "16px",
                padding: "24px",
                margin: "8px 0"
              }}>
                <h5 style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#0A0A0F",
                  margin: "0 0 16px 0",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase"
                }}>
                  Event Quick Summary
                </h5>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}>
                  {[
                    { label: "Event", val: "10th Annual EmpowaWomen Leadership Summit 2026" },
                    { label: "Theme", val: "The Command Centre of Power, Capital and Control" },
                    { label: "Date", val: "Saturday, 29 August 2026" },
                    { label: "Venue", val: "The Forum | The Campus, Bryanston, Johannesburg" },
                    { label: "Audience", val: "Female CXOs, Entrepreneurs, Investors, Board Members, Policymakers, Media Leaders, Executives, Professionals and Emerging Leaders" }
                  ].map((row, idx) => (
                    <div key={idx} style={{
                      display: "flex",
                      borderBottom: idx === 4 ? "none" : "1px solid rgba(0,0,0,0.04)",
                      paddingBottom: idx === 4 ? "0" : "12px",
                      flexWrap: "wrap",
                      gap: "8px"
                    }}>
                      <span style={{
                        fontFamily: "Figtree",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "#FF2D87",
                        width: "100px",
                        flexShrink: 0
                      }}>{row.label}</span>
                      <span style={{
                        fontFamily: "Figtree",
                        fontSize: "14px",
                        color: "#0A0A0F",
                        fontWeight: 500
                      }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About EmpowaWomen */}
              <div>
                <h4 style={{
                  fontFamily: "Figtree",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0A0A0F",
                  margin: "0 0 12px 0"
                }}>
                  ABOUT EMPOWAWOMEN™
                </h4>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#C9A84C",
                  fontWeight: 500,
                  margin: "0 0 12px 0"
                }}>
                  “Leading Fearlessly. Accelerating Growth. Transforming Economies.”
                </p>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  color: "#475569",
                  lineHeight: 1.75,
                  margin: 0
                }}>
                  EmpowaWomen™ is a high-impact leadership and economic empowerment ecosystem dedicated to accelerating the rise of women shaping Africa’s future industries, institutions, capital flows, innovation ecosystems, and economic growth. As the platform celebrates its 10th anniversary, it remains committed to building a future where women are not simply participants in the economy, but architects of industries, creators of opportunity, stewards of capital, and leaders of transformation.
                </p>
              </div>

              {/* Media Enquiries Details block */}
              <div style={{
                borderLeft: "3px solid #FF2D87",
                paddingLeft: "20px",
                marginTop: "16px"
              }}>
                <h5 style={{
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#0A0A0F",
                  margin: "0 0 10px 0",
                  textTransform: "uppercase"
                }}>
                  MEDIA ENQUIRIES
                </h5>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "13px",
                  color: "#64748b",
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  EmpowaWomen Media Office<br />
                  Website: <a href="https://empowawomen.co.za" target="_blank" rel="noopener noreferrer" style={{ color: "#FF2D87", textDecoration: "none", fontWeight: 600 }}>empowawomen.co.za</a><br />
                  Simphiwe Masiza (Founder & Executive Producer)<br />
                  Email: <a href="mailto:media@empowawomen.co.za" style={{ color: "#FF2D87", textDecoration: "none" }}>media@empowawomen.co.za</a>
                </p>
              </div>

              <div style={{
                textAlign: "center",
                fontFamily: "Figtree",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#64748b",
                marginTop: "16px"
              }}>
                ENDS
              </div>

            </div>
          </div>

          {/* Bottom Card Controls */}
          <div className="print-exclude" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            borderTop: isExpanded ? "1px solid rgba(0,0,0,0.08)" : "none",
            paddingTop: isExpanded ? "24px" : "0"
          }}>
            <button onClick={handleToggle} style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: 600,
              color: "#FFFFFF",
              backgroundColor: "#0A0A0F",
              border: "none",
              borderRadius: "999px",
              padding: "12px 28px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background-color 200ms ease-out"
            }} onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FF2D87"} onMouseLeave={e => e.currentTarget.style.backgroundColor = "#0A0A0F"}>
              <span>{isExpanded ? "Collapse Statement" : "Read Full Press Release"}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* {isExpanded && (
              <button onClick={handlePrint} style={{
                fontFamily: "Figtree",
                fontSize: "13px",
                fontWeight: 600,
                color: "#64748b",
                backgroundColor: "transparent",
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: "999px",
                padding: "10px 24px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 200ms"
              }} onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.03)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.25)";
              }} onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
              }}>
                <Printer size={14} />
                <span>Print Press Release</span>
              </button>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
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

  // Form State
  const [fullName, setFullName] = React.useState("");
  const [mediaHouse, setMediaHouse] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [designation, setDesignation] = React.useState("Journalist / Reporter");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mediaHouse || !email || !mobile || !message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          form_id: 16,
          input_values: {
            'input_10': fullName,
            'input_17': mediaHouse,
            'input_4': email,
            'input_12': mobile,
            'input_15': designation,
            'input_18': message
          }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit accreditation request.');
      }

      setSubmitted(true);
      setFullName("");
      setMediaHouse("");
      setEmail("");
      setMobile("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const INPUT_STYLE: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    outline: "none",
    fontFamily: "Figtree",
    fontSize: "14px",
    color: "#FFFFFF",
    transition: "all 200ms ease-out",
    boxSizing: "border-box"
  };

  const LABEL_STYLE: React.CSSProperties = {
    display: "block",
    fontFamily: "Figtree",
    fontSize: "10px",
    fontWeight: 600,
    color: "rgba(255,255,255,0.40)",
    marginBottom: "8px",
    letterSpacing: "0.15em",
    textTransform: "uppercase"
  };

  return <section id="accreditation" style={{
    width: "100%",
    paddingTop: "clamp(64px, 8vw, 120px)",
    paddingBottom: "clamp(64px, 8vw, 120px)",
    paddingLeft: "clamp(24px, 6vw, 96px)",
    paddingRight: "clamp(24px, 6vw, 96px)",
    backgroundColor: "#0A0A0F",
    position: "relative"
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

        {/* Event details card */}
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
          backgroundColor: "rgba(255,255,255,0.02)",
          borderRadius: "16px",
          padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 40px)",
          border: "1px solid rgba(255,255,255,0.06)",
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

        {/* Accreditation Form Section */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} style={{
          backgroundColor: "rgba(255,255,255,0.02)",
          borderRadius: "24px",
          padding: "clamp(24px, 5vw, 48px)",
          border: "1px solid rgba(255,255,255,0.04)",
          textAlign: "left",
          boxShadow: "0 24px 64px rgba(0,0,0,0.2)"
        }}>
          {submitted ? (
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "24px",
              padding: "24px 0"
            }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "rgba(255,45,135,0.12)",
                color: "#FF2D87",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,45,135,0.2)"
              }}>
                <ArrowRight size={24} style={{ transform: "rotate(-45deg)" }} />
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}>
                <h3 style={{
                  fontFamily: "Figtree",
                  fontWeight: 500,
                  fontSize: "24px",
                  color: "#FFFFFF",
                  margin: 0
                }}>
                  Application Submitted
                </h3>
                <p style={{
                  fontFamily: "Figtree",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  maxWidth: "400px",
                  margin: 0
                }}>
                  Thank you for applying. Your media accreditation request has been received by our media relations team and is currently under review.
                </p>
              </div>
              <button onClick={() => setSubmitted(false)} style={{
                fontFamily: "Figtree",
                fontSize: "14px",
                fontWeight: 500,
                color: "#FFFFFF",
                backgroundColor: "#FF2D87",
                padding: "12px 28px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                transition: "all 200ms ease-out"
              }} onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
              }} onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
              }}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px"
            }}>
              {error && (
                <div style={{
                  padding: "12px 16px",
                  backgroundColor: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: "12px",
                  color: "#EF4444",
                  fontSize: "13px",
                  fontFamily: "Figtree",
                  lineHeight: 1.4
                }}>
                  {error}
                </div>
              )}

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px"
              }}>
                {/* Full Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={LABEL_STYLE}>Full Name*</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    style={INPUT_STYLE}
                    onFocus={e => { e.currentTarget.style.borderColor = "#FF2D87"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
                  />
                </div>

                {/* Media House */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={LABEL_STYLE}>Media House / Outlet*</label>
                  <input
                    type="text"
                    required
                    value={mediaHouse}
                    onChange={e => setMediaHouse(e.target.value)}
                    placeholder="e.g. eNCA, Forbes Africa..."
                    style={INPUT_STYLE}
                    onFocus={e => { e.currentTarget.style.borderColor = "#FF2D87"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
                  />
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px"
              }}>
                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={LABEL_STYLE}>Press Email Address*</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="sarah@mediahouse.com"
                    style={INPUT_STYLE}
                    onFocus={e => { e.currentTarget.style.borderColor = "#FF2D87"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
                  />
                </div>

                {/* Mobile */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={LABEL_STYLE}>Direct Mobile / WhatsApp*</label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                    placeholder="082 000 0000"
                    style={INPUT_STYLE}
                    onFocus={e => { e.currentTarget.style.borderColor = "#FF2D87"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
                  />
                </div>
              </div>

              {/* Designation Select Dropdown */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={LABEL_STYLE}>Press Designation / Role*</label>
                <div style={{ position: "relative" }}>
                  <select
                    value={designation}
                    onChange={e => setDesignation(e.target.value)}
                    style={{
                      ...INPUT_STYLE,
                      appearance: "none",
                      cursor: "pointer",
                      backgroundColor: "rgba(255,255,255,0.03)"
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#FF2D87"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
                  >
                    <option value="Journalist / Reporter" style={{ backgroundColor: "#0A0A0F" }}>Journalist / Reporter</option>
                    <option value="Press Photographer" style={{ backgroundColor: "#0A0A0F" }}>Press Photographer</option>
                    <option value="Videographer / Camera Operator" style={{ backgroundColor: "#0A0A0F" }}>Videographer / Camera Operator</option>
                    <option value="Editor / Producer" style={{ backgroundColor: "#0A0A0F" }}>Editor / Producer</option>
                    <option value="Broadcaster / Anchor" style={{ backgroundColor: "#0A0A0F" }}>Broadcaster / Anchor</option>
                    <option value="Other" style={{ backgroundColor: "#0A0A0F" }}>Other</option>
                  </select>
                  <div style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "rgba(255,255,255,0.40)",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              {/* Coverage Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={LABEL_STYLE}>Coverage Plan & Special Requests*</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Please describe your planned coverage format (e.g., live television broadcast, feature column, photo essay) and any specific technical requirements or interview requests."
                  style={{
                    ...INPUT_STYLE,
                    resize: "none"
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#FF2D87"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"; }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  height: "54px",
                  backgroundColor: "#FF2D87",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "999px",
                  fontFamily: "Figtree",
                  fontWeight: 500,
                  fontSize: "15px",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 0 32px rgba(255,45,135,0.20)",
                  letterSpacing: "0.02em",
                  transition: "filter 200ms ease-out"
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.filter = "brightness(1.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.filter = "brightness(1)"; }}
              >
                <span>{loading ? "Submitting Request..." : "Submit Accreditation Request"}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </motion.div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginTop: "56px" }}>
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
            For media enquiries, accreditation, and press partnerships - get in touch.
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

// ─── Video Section ────────────────────────────────────────────────────────────
const VideoSection = () => {
  const playlist = ["s_RGYF3-fO4", "w5p9v_9Htes", "YdrNRk5IDiM"];
  const [currentVideoId, setCurrentVideoId] = React.useState(playlist[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isHoveringPlay, setIsHoveringPlay] = React.useState(false);
  const VIDEO_HEADLINE_WORDS = ["See", "what", "happened", "last", "year."];
  const STATS_DATA = [{
    id: "vs-1",
    value: "10,000+",
    label: "Delegates Connected"
  }, {
    id: "vs-2",
    value: "2,400+",
    label: "Live Attendees"
  }, {
    id: "vs-3",
    value: "3 Days",
    label: "Of Programming"
  }, {
    id: "vs-4",
    value: "92%",
    label: "Delegate Return Rate"
  }];
  return <section id="media-event-reels" style={{
    backgroundColor: "#F7F6F2",
    paddingTop: "clamp(80px,10vw,140px)",
    paddingBottom: "clamp(80px,10vw,140px)",
    position: "relative",
    overflow: "hidden"
  }}>
      <div style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      opacity: 0.4,
      backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
      backgroundSize: "28px 28px"
    }} />

      <div style={{
      maxWidth: "1400px",
      margin: "0 auto",
      paddingLeft: "clamp(24px,6vw,96px)",
      paddingRight: "clamp(24px,6vw,96px)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "clamp(40px,5vw,64px)",
      flexWrap: "wrap",
      gap: "40px",
      position: "relative",
      zIndex: 1
    }}>
          <div style={{
        maxWidth: "52%"
      }}>
              <div style={{
          width: "64px",
          height: "3px",
          backgroundColor: "#00B4A6"
        }} />
              <div style={{
          width: "24px",
          height: "1px",
          backgroundColor: "rgba(0,180,166,0.3)",
          marginTop: "4px"
        }} />
              <span style={{
          fontFamily: "Figtree",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.28em",
          color: "#64748b",
          textTransform: "uppercase",
          display: "block",
          marginTop: "32px"
        }}>
                  IN THE ROOM
              </span>
              <h2 style={{
          fontFamily: "Figtree",
          fontWeight: 300,
          fontSize: "clamp(40px,6vw,80px)",
          color: "#0A0A0F",
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          margin: "16px 0 0 0"
        }}>
                  {VIDEO_HEADLINE_WORDS.map((word, i) => <motion.span key={`vsw-${i}`} initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 16
          }} whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: i * 0.05,
            ease: "easeOut"
          }} style={{
            display: "inline-block",
            marginRight: "0.25em"
          }}>
                      {word === "happened" ? <span style={{
              color: "#00B4A6"
            }}>{word}</span> : word}
                  </motion.span>)}
              </h2>
          </div>

          <div style={{
        maxWidth: "38%",
        alignSelf: "flex-end",
        display: "flex",
        flexDirection: "column",
        gap: "0"
      }} className="video-header-right">
              <p style={{
          fontFamily: "Figtree",
          fontSize: "16px",
          color: "#64748b",
          lineHeight: 1.75,
          margin: 0
        }}>
                  Packed stages. Historic deals. Defining conversations. The EmpowaWomen Annual Leadership Summit - captured in two minutes.
              </p>
              <a href="#" style={{
          marginTop: "24px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "Figtree",
          fontWeight: 500,
          fontSize: "13px",
          color: "rgba(10,10,15,0.55)",
          textDecoration: "none",
          letterSpacing: "0.02em",
          transition: "color 150ms ease-out"
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLAnchorElement).style.color = "rgba(10,10,15,0.9)";
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.color = "rgba(10,10,15,0.55)";
        }} onClick={e => {
          e.preventDefault();
          document.getElementById("media-event-reels")?.scrollIntoView({ behavior: "smooth" });
        }}>
                  <span>Watch the full reel</span>
                  <ArrowRight size={14} />
              </a>
          </div>
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 32
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut"
    }} style={{
      maxWidth: "1100px",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "clamp(24px,6vw,96px)",
      paddingRight: "clamp(24px,6vw,96px)",
      position: "relative",
      zIndex: 1
    }}>
          <div style={{
        aspectRatio: "16/9",
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.15)"
      }}>
              {isPlaying ? <iframe src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} title="Summit highlight reel" allow="autoplay; fullscreen" style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none"
        }} /> : <div style={{
          position: "absolute",
          inset: 0
        }}>
                  <img src={`https://img.youtube.com/vi/${currentVideoId}/maxresdefault.jpg`} alt="Summit highlight reel" style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} />
                  <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,15,0.80) 100%)"
          }} />
                  <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(10,10,15,0.25) 0%, transparent 30%)"
          }} />
                  <div style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(10,10,15,0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.10)",
            padding: "6px 12px",
            borderRadius: "999px"
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
              fontWeight: 600,
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.50)"
            }}>
                          SUMMIT 2024 · HIGHLIGHT REEL
                      </span>
                  </div>
                  <div style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            fontFamily: "Figtree",
            fontSize: "12px",
            color: "rgba(255,255,255,0.40)"
          }}>
                      2:14
                  </div>
                  <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }} onClick={() => setIsPlaying(true)} onMouseEnter={() => setIsHoveringPlay(true)} onMouseLeave={() => setIsHoveringPlay(false)}>
                      <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: isHoveringPlay ? "2px solid rgba(255,255,255,0.40)" : "2px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(0,0,0,0.20)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 200ms ease-out",
              transform: isHoveringPlay ? "scale(1.05)" : "scale(1)",
              cursor: "pointer"
            }}>
                          <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#FF2D87",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                                  <path d="M3 2L13 8L3 14V2Z" />
                              </svg>
                          </div>
                      </div>
                  </div>
              </div>}
          </div>
      </motion.div>

      {/* Video Playlist */}
      <div style={{
      maxWidth: "1100px",
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "clamp(24px,6vw,96px)",
      paddingRight: "clamp(24px,6vw,96px)",
      marginTop: "24px",
      display: "flex",
      gap: "16px",
      overflowX: "auto",
      scrollbarWidth: "none",
      zIndex: 1,
      position: "relative"
    }}>
          {playlist.map((vid) => <div key={vid} onClick={() => {
        setCurrentVideoId(vid);
        setIsPlaying(true);
      }} style={{
        minWidth: "160px",
        width: "25%",
        aspectRatio: "16/9",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        border: currentVideoId === vid ? "2px solid #FF2D87" : "2px solid transparent",
        transition: "all 0.2s ease",
        position: "relative"
      }}>
                  <img src={`https://img.youtube.com/vi/${vid}/mqdefault.jpg`} alt="thumbnail" style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: currentVideoId === vid ? 1 : 0.6
        }} />
                  {currentVideoId !== vid && <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.2)"
        }} />}
              </div>)}
      </div>

      <div style={{
      maxWidth: "1100px",
      margin: "48px auto 0 auto",
      paddingLeft: "clamp(24px,6vw,96px)",
      paddingRight: "clamp(24px,6vw,96px)",
      position: "relative",
      zIndex: 1
    }}>
          <div style={{
        borderTop: "1px solid rgba(0,0,0,0.07)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        paddingTop: "32px",
        paddingBottom: "32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
      }} className="video-stats-strip">
              {STATS_DATA.map((stat, idx) => <motion.div key={stat.id} initial={{
          opacity: 0,
          y: 16
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: idx * 0.08,
          ease: "easeOut"
        }} style={{
          flex: 1,
          paddingLeft: idx === 0 ? "0" : "32px",
          paddingRight: "32px",
          borderLeft: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.07)",
          display: "flex",
          flexDirection: "column"
        }}>
                  <span style={{
            fontFamily: "Figtree",
            fontWeight: 200,
            fontSize: "clamp(36px,4vw,52px)",
            color: "#0A0A0F",
            letterSpacing: "-0.03em",
            lineHeight: 1
          }}>
                      {stat.value}
                  </span>
                  <span style={{
            fontFamily: "Figtree",
            fontSize: "12px",
            color: "#64748b",
            marginTop: "8px",
            display: "block"
          }}>
                      {stat.label}
                  </span>
              </motion.div>)}
          </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .video-header-right { max-width: 100% !important; }
          .video-stats-strip { flex-wrap: wrap !important; gap: 24px 0 !important; }
          .video-stats-strip > div { min-width: 50% !important; border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(0,0,0,0.07) !important; padding-top: 20px !important; }
          .video-stats-strip > div:nth-child(1), .video-stats-strip > div:nth-child(2) { border-top: none !important; padding-top: 0 !important; }
        }
      `}</style>
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
      <PressReleasesSection />
      <AccreditationSection />
      <VideoSection />
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
        @media print {
          /* Hide global outer navigation header and footer CTA */
          header, footer, nav, .navbar, .footer {
            display: none !important;
          }
          /* Hide all sibling elements of the press releases section to save vertical space */
          main > *:not(#press-releases) {
            display: none !important;
          }
          /* Hide section title/eyebrow inside press-releases section */
          #press-releases > div > *:not(#print-press-card) {
            display: none !important;
          }
          /* Reset backgrounds, heights, paddings, and margins for all main print-containers */
          body, html, #root, main, #press-releases, #press-releases > div {
            background: #FFFFFF !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            min-height: 0 !important;
            height: auto !important;
            overflow: visible !important;
          }
          /* Force the press statement card to start exactly on page 1 of print output */
          #print-press-card {
            display: block !important;
            position: relative !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            border: none !important;
            box-shadow: none !important;
            background: #FFFFFF !important;
          }
          .print-exclude {
            display: none !important;
          }
          #print-press-card p,
          #print-press-card span,
          #print-press-card h3,
          #print-press-card h4,
          #print-press-card h5,
          #print-press-card div {
            color: #0A0A0F !important;
            background: transparent !important;
          }
          #print-press-card strong,
          #print-press-card a {
            color: #FF2D87 !important;
          }
        }
      `}</style>
    </main>;
};
