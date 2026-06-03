import * as React from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, Calendar, Globe, Zap, MessageSquare, Award, Users, ShieldCheck, Smartphone, TrendingUp, Tv, Mic, Cpu, Target } from "lucide-react";
import { MainNavBar } from "./MainNavBar";
import { ROIMetricBlock } from "./ROIMetricBlock";
import { GlobalFooter } from "./GlobalFooter";
import { CommunicationsRegistrationSection } from "./CommunicationsRegistrationSection";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FocusArea {
  id: string;
  icon: React.ElementType;
  title: string;
  accentColor: string;
}
interface ROIMetric {
  label: string;
  value: string;
  description: string;
}
interface ProgrammeSession {
  id: string;
  time: string;
  format: string;
  title: string;
  subtitle: string;
  accentColor: string;
  accentRgb: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FOCUS_AREAS: FocusArea[] = [{
  id: "fa-1",
  icon: Cpu,
  title: "AI-Powered Marketing",
  accentColor: "#FF2D87"
}, {
  id: "fa-2",
  icon: Users,
  title: "Consumer Behaviour & Intelligence",
  accentColor: "#00B4A6"
}, {
  id: "fa-3",
  icon: MessageSquare,
  title: "Strategic Communications",
  accentColor: "#FF2D87"
}, {
  id: "fa-4",
  icon: Award,
  title: "Brand Leadership",
  accentColor: "#D4AF37"
}, {
  id: "fa-5",
  icon: Smartphone,
  title: "Creator & Influencer Economies",
  accentColor: "#FF2D87"
}, {
  id: "fa-6",
  icon: ShieldCheck,
  title: "Digital PR & Reputation Management",
  accentColor: "#00B4A6"
}, {
  id: "fa-7",
  icon: Tv,
  title: "Media Innovation",
  accentColor: "#D4AF37"
}, {
  id: "fa-8",
  icon: TrendingUp,
  title: "Commercial Brand Expansion",
  accentColor: "#00B4A6"
}];
const ROI_METRICS: ROIMetric[] = [{
  label: "Brand Visibility & Executive Positioning",
  value: "88%+",
  description: "Enhanced global market presence and executive voice for women-led brands."
}, {
  label: "Strategic Media Partnerships",
  value: "150+",
  description: "High-value cross-border media and advertising collaboration agreements."
}, {
  label: "Consumer Intelligence Insights",
  value: "Tier 1",
  description: "Access to priority data and predictive analytics for African market landscapes."
}, {
  label: "Commercial Brand Expansion",
  value: "R6.5B+",
  description: "Projected economic impact and revenue growth within the media ecosystem."
}];
const PROGRAMME_SESSIONS: ProgrammeSession[] = [{
  id: "ps-1",
  time: "11:00",
  format: "OPENING KEYNOTE™",
  title: "Women Must Lead the Future of Africa's Influence, Media & Communications Economy",
  subtitle: "Who Will Shape Africa's Consumer Influence, Brand Narratives & Media Power in the Digital Era?",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-2",
  time: "11:20",
  format: "EXECUTIVE MASTERCLASS™",
  title: "AI, Digital Media & the Future of Brand Influence™",
  subtitle: "Technology, Consumer Intelligence & Digital Platforms Will Define the Next Era of Brand Growth.",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-3",
  time: "12:00",
  format: "HIGH-IMPACT PANEL™",
  title: "Women, Media & the Future of Brand Power™",
  subtitle: "The Future of Marketing Will Belong to Brands That Build Trust, Influence & Cultural Relevance.",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-4",
  time: "12:50",
  format: "NETWORKING LUNCH™",
  title: "Cultivating Influence, Partnerships & Brand Growth™",
  subtitle: "Which Strategic Relationships Will Accelerate Your Media, Marketing & Brand Leadership Journey?",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-5",
  time: "13:20",
  format: "FIRECHAT™",
  title: "Brand Commercialisation, Digital Influence & Market Expansion™",
  subtitle: "Visibility Without Commercial Strategy Is a Missed Growth Opportunity.",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-6",
  time: "14:00",
  format: "STRATEGIC WORKSHOP™",
  title: "The Business of Consumer Influence, Storytelling & Brand Monetisation™",
  subtitle: "The Future of Brand Growth Will Belong to Organisations That Understand Culture, Data & Consumer Trust.",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}, {
  id: "ps-7",
  time: "14:40",
  format: "HIGH-IMPACT INDUSTRY PANEL™",
  title: "Advertising, Digital Culture & the Future of Consumer Engagement™",
  subtitle: "Consumer Attention, Culture & Digital Influence Are Becoming High-Value Commercial Assets.",
  accentColor: "#D4AF37",
  accentRgb: "212,175,55"
}, {
  id: "ps-8",
  time: "15:20",
  format: "FUTURE ECONOMY CONVERSATION™",
  title: "The Future of Africa's Communications, Media & Influence Economy™",
  subtitle: "Innovation, Storytelling & Women Leadership Will Shape Africa's Global Brand Influence.",
  accentColor: "#FF2D87",
  accentRgb: "255,45,135"
}, {
  id: "ps-9",
  time: "15:50",
  format: "CLOSING KEYNOTE™",
  title: "Africa's Communications & Influence Economy Will Be Led by Women Who Build, Influence & Transform",
  subtitle: "Will You Be One of the Women Defining Africa's Future Brand, Media & Consumer Economy?",
  accentColor: "#00B4A6",
  accentRgb: "0,180,166"
}];
const HERO_LINES = [{
  id: "hl-1",
  words: ["Shape", "Africa's"]
}, {
  id: "hl-2",
  words: ["Brand", "Narrative"]
}, {
  id: "hl-3",
  words: ["Now."]
}];
const UNDERLINED_WORDS = new Set(["Brand", "Narrative", "Now."]);
const CTA_HEADLINE_WORDS = ["Shape", "Africa's", "Brand", "Narrative", "Now."];
const AVATAR_URLS = [{
  id: "av-1",
  url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80"
}, {
  id: "av-2",
  url: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&q=80"
}, {
  id: "av-3",
  url: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&q=80"
}, {
  id: "av-4",
  url: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&q=80"
}, {
  id: "av-5",
  url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80"
}, {
  id: "av-6",
  url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80"
}];

// ─── Sub-components ────────────────────────────────────────────────────────────
const SectionLabel: React.FC<{
  children: React.ReactNode;
  color?: string;
}> = ({
  children,
  color = "#FF2D87"
}) => <p style={{
  fontFamily: "Figtree, sans-serif",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: color,
  margin: "0 0 16px 0",
  display: "flex",
  alignItems: "center",
  gap: "10px"
}}>
    <span style={{
    display: "inline-block",
    width: "24px",
    height: "1.5px",
    backgroundColor: color,
    flexShrink: 0
  }} />
    <span>{children}</span>
  </p>;
const CommunicationsHero: React.FC = () => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  let wordIndex = 0;
  return <section id="home" style={{
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0A0A0F",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "68px",
    paddingBottom: "clamp(48px, 8vw, 80px)"
  }}>
      {/* Grain noise overlay */}
      <div aria-hidden="true" style={{
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      zIndex: 3,
      opacity: 0.04,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      backgroundSize: "256px 256px"
    }} />

      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
          <motion.div style={{
          y: imageY,
          position: "absolute",
          inset: 0
        }}>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80" alt="" aria-hidden="true" className="w-full h-full object-cover" style={{
            objectFit: "cover",
            objectPosition: "center 40%"
          }} />
          </motion.div>
        </motion.div>
        <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(10,10,15,0.7) 0%, rgba(10,10,15,0.4) 40%, rgba(10,10,15,0.95) 100%)"
      }} />
      </div>

      <div style={{
      position: "relative",
      zIndex: 10,
      width: "100%",
      maxWidth: "1400px",
      paddingLeft: "clamp(16px, 5vw, 36px)",
      paddingRight: "clamp(16px, 5vw, 36px)",
      paddingTop: "clamp(48px, 8vw, 128px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 90
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }} style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
          <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "clamp(32px, 5vw, 48px)"
        }}>
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
            textAlign: "center"
          }}>
              <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#FF2D87",
              display: "inline-block"
            }} />
              <span style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(9px, 2vw, 11px)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.60)",
              textTransform: "uppercase"
            }}>
                Communications, Advertising, Marketing & Media™
              </span>
            </motion.div>

            <motion.h1 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(40px, 9vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 24px auto"
          }}>
              {HERO_LINES.map(line => <span key={line.id} style={{
              display: "block"
            }}>
                  {line.words.map(word => {
                const currentIndex = wordIndex++;
                const isUnderlined = UNDERLINED_WORDS.has(word);
                return <motion.span key={`hero-word-${currentIndex}`} style={{
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
                  delay: 0.4 + currentIndex * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}>
                        {isUnderlined ? <span style={{
                    textDecoration: "underline",
                    textDecorationColor: "#FF2D87",
                    textDecorationThickness: "3px",
                    textUnderlineOffset: "6px",
                    color: "#FFFFFF"
                  }}>
                            {word}
                          </span> : word}
                      </motion.span>;
              })}
                </span>)}
            </motion.h1>

            <motion.div initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 1.1
          }} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
            gap: "12px",
            color: "rgba(255,255,255,0.40)",
            textTransform: "uppercase",
            fontSize: "clamp(10px, 2vw, 13px)",
            letterSpacing: "0.18em"
          }}>
              <span>'Brands That Shape Culture Will Shape Markets.'</span>
            </motion.div>

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
            fontFamily: "Figtree, sans-serif",
            fontSize: "clamp(14px, 2vw, 16px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.60)",
            maxWidth: "780px",
            margin: "0 auto 36px auto",
            textAlign: "center",
            lineHeight: 1.75
          }}>
              As consumer behaviour, technology, media consumption, and digital ecosystems continue to evolve, strategic communications, storytelling, brand influence, and reputation management have become central to commercial growth and market leadership. This platform explores the future of media, strategic communications, digital influence, AI-powered marketing, consumer intelligence, and brand leadership within a rapidly changing global marketplace.
            </motion.p>

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
            justifyContent: "center",
            gap: "12px",
            width: "100%"
          }}>
              <a href="#" style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 500,
              color: "#FFFFFF",
              backgroundColor: "#FF2D87",
              height: "50px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              borderRadius: "0",
              boxShadow: "0 0 32px rgba(255,45,135,0.25)",
              transition: "all 200ms"
            }}>
                <span>Secure Your Seat</span> <ArrowRight size={16} />
              </a>
              <a href="#" style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "clamp(13px, 2vw, 15px)",
              fontWeight: 400,
              color: "#FFFFFF",
              backgroundColor: "rgba(255,255,255,0.05)",
              height: "50px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.10)",
              letterSpacing: "0.02em"
            }}>
                Explore Sessions
              </a>
            </motion.div>

            <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "clamp(24px, 4vw, 40px)"
          }}>
              <div style={{
              position: "relative",
              display: "flex"
            }}>
                {AVATAR_URLS.map((avatar, index) => <img key={avatar.id} src={avatar.url} alt="" style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "2px solid #0A0A0F",
                objectFit: "cover",
                marginLeft: index === 0 ? 0 : -10
              }} />)}
              </div>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px"
            }}>
                <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF"
              }}>10,000+ Women</span>
                <span style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)"
              }}>shaping Africa's media landscape</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
      pointerEvents: "none",
      zIndex: 2
    }} />
    </section>;
};

// ─── Main Component ────────────────────────────────────────────────────────────
export const CommunicationsPillarPage: React.FC = () => {
  const bentoRef = React.useRef<HTMLDivElement>(null);
  const bentoInView = useInView(bentoRef, {
    once: true,
    margin: "-80px"
  });
  const programmeRef = React.useRef<HTMLDivElement>(null);
  const programmeInView = useInView(programmeRef, {
    once: true,
    margin: "-80px"
  });
  return <div style={{
    width: "100%",
    backgroundColor: "#0A0A0F",
    color: "#FFFFFF",
    overflowX: "hidden"
  }}>
      <MainNavBar />

      <main>
        <CommunicationsHero />

        {/* ── Bento Grid Section ── */}
        <section ref={bentoRef} style={{
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        paddingLeft: "clamp(16px, 5vw, 96px)",
        paddingRight: "clamp(16px, 5vw, 96px)",
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
          <SectionLabel>Focus Areas & Commercial Impact</SectionLabel>
          <h2 style={{
          fontFamily: "Figtree, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(24px, 4vw, 52px)",
          color: "#FFFFFF",
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          margin: "0 0 clamp(32px, 5vw, 56px) 0",
          maxWidth: "800px"
        }}>
            Driving Market Leadership through Cultural Influence
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Column A: Focus Areas */}
            <motion.div initial={{
            opacity: 0,
            x: -40
          }} animate={bentoInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }} style={{
            backgroundColor: "#0D0D14",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "clamp(20px, 3vw, 40px)"
          }}>
              <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px"
            }}>
                <div style={{
                width: "3px",
                height: "28px",
                backgroundColor: "#FF2D87",
                flexShrink: 0
              }} />
                <h3 style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                margin: 0
              }}>Strategic Focus Pillars</h3>
              </div>
              <div className="flex flex-col gap-1">
                {FOCUS_AREAS.map(area => <motion.div key={area.id} whileHover={{
                x: 8
              }} style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer"
              }}>
                    <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: area.accentColor,
                  flexShrink: 0
                }} />
                    <area.icon size={18} style={{
                  color: "rgba(255,255,255,0.3)",
                  flexShrink: 0
                }} />
                    <span style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.7)",
                  transition: "color 0.2s"
                }} className="hover:text-white">
                      {area.title}
                    </span>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Column B: ROI Metrics */}
            <motion.div initial={{
            opacity: 0,
            x: 40
          }} animate={bentoInView ? {
            opacity: 1,
            x: 0
          } : {}} transition={{
            duration: 0.7,
            delay: 0.2
          }} style={{
            borderTop: "4px solid #D4AF37"
          }}>
              <ROIMetricBlock title="Commercial ROI & Brand Growth" metrics={ROI_METRICS} />
            </motion.div>
          </div>
        </section>

        {/* ── Visual Break ── */}
        <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 clamp(16px, 5vw, 96px)"
      }}>
          <div style={{
          height: "1px",
          background: "linear-gradient(to right, rgba(255,45,135,0.5), rgba(212,175,55,0.2) 50%, rgba(0,180,166,0.5))"
        }} />
        </div>

        {/* ── Programme Section (Green Economy format) ── */}
        <section style={{
        backgroundColor: "#0A0A0F",
        paddingTop: "128px",
        paddingBottom: "128px",
        paddingLeft: "clamp(16px, 6px, 32px)",
        paddingRight: "clamp(16px, 6px, 32px)",
        position: "relative"
      }}>
          {/* Ambient venue bg */}
          <div aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          pointerEvents: "none"
        }} />

          <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "80rem",
          margin: "0 auto"
        }}>
            {/* Section header */}
            <div style={{
            marginBottom: "56px"
          }}>
              <div style={{
              width: "48px",
              height: "3px",
              backgroundColor: "#FF2D87",
              marginBottom: "20px"
            }} />
              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              margin: "0 0 16px 0"
            }}>
                HIGH-IMPACT EXECUTIVE PROGRAMME
              </p>
              <h2 style={{
              fontFamily: "Figtree, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              margin: "0 0 16px 0"
            }}>
                A Day of Influence, Brand Power &amp; Media Leadership
              </h2>
              <p style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "720px"
            }}>
                11:00 – 16:00 · Curated for Female CXOs, Marketing Executives, Media Leaders, Entrepreneurs, Creatives, Investors, Academia, Policymakers &amp; Future-Focused Professionals
              </p>
            </div>

            {/* Programme list */}
            <div ref={programmeRef} style={{
            maxWidth: "48rem",
            margin: "0 auto"
          }}>
              {PROGRAMME_SESSIONS.map((session, i) => <motion.div key={session.id} initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: "-40px"
            }} transition={{
              duration: 0.5,
              delay: i * 0.06
            }} whileHover={{
              backgroundColor: "rgba(255,255,255,0.025)"
            }} style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              borderRadius: session.id === "ps-4" ? "8px" : undefined,
              backgroundColor: session.id === "ps-4" ? "rgba(0,180,166,0.04)" : undefined,
              border: session.id === "ps-4" ? "1px solid rgba(0,180,166,0.12)" : undefined,
              padding: session.id === "ps-4" ? "12px 16px" : undefined,
              margin: session.id === "ps-4" ? "4px 0" : undefined,
              transition: "background-color 200ms"
            }}>
                  {/* Col 1: Time */}
                  <div style={{
                width: "80px",
                flexShrink: 0
              }}>
                    {session.id === "ps-4" ? <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                        <div style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#00B4A6",
                    flexShrink: 0
                  }} />
                        <span style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: session.accentColor
                  }}>
                          {session.time}
                        </span>
                      </div> : <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: session.accentColor
                }}>
                        {session.time}
                      </span>}
                  </div>

                  {/* Col 2: Content */}
                  <div style={{
                flex: 1,
                minWidth: 0
              }}>
                    <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap"
                }}>
                      <span style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: session.accentColor
                  }}>
                        {session.format}
                      </span>
                      {session.id === "ps-4" && <span style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#00B4A6",
                    border: "1px solid rgba(0,180,166,0.40)",
                    borderRadius: "4px",
                    padding: "2px 7px"
                  }}>
                          INCLUDED
                        </span>}
                    </div>
                    <p style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  margin: "4px 0 4px 0",
                  lineHeight: 1.35
                }}>
                      {session.title}
                    </p>
                    <p style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.35)",
                  margin: 0,
                  lineHeight: 1.55
                }}>
                      {session.subtitle}
                    </p>
                  </div>

                  {/* Col 3: Number */}
                  <div style={{
                width: "36px",
                flexShrink: 0,
                textAlign: "right"
              }}>
                    <span style={{
                  fontFamily: "Figtree, sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.12)",
                  fontVariantNumeric: "tabular-nums"
                }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>)}
            </div>

            {/* Stats footer */}
            <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(32px, 6vw, 80px)",
            marginTop: "56px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}>
              {[{
              id: "stat-1",
              value: "9 Sessions",
              label: "Full Programme"
            }, {
              id: "stat-2",
              value: "11:00 Start",
              label: "Morning Kickoff"
            }, {
              id: "stat-3",
              value: "16:00 Close",
              label: "Afternoon Wrap"
            }].map(stat => <div key={stat.id} style={{
              textAlign: "center"
            }}>
                  <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "clamp(18px, 3vw, 28px)",
                fontWeight: 600,
                color: "#FF2D87",
                margin: "0 0 4px 0"
              }}>
                    {stat.value}
                  </p>
                  <p style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.30)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                margin: 0
              }}>
                    {stat.label}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        {/* ── Final CTA Section ── */}
        <section style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A0A0F",
        padding: "clamp(80px, 12vw, 160px) clamp(16px, 5vw, 96px)",
        textAlign: "center"
      }}>
          <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1400px",
          aspectRatio: "2/1",
          opacity: 0.2,
          pointerEvents: "none"
        }}>
            <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
            backgroundSize: "cover",
            maskImage: "linear-gradient(to top, transparent, black)"
          }} />
          </div>

          <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
            <SectionLabel color="#D4AF37">Collaborate & Expand</SectionLabel>
            <h2 style={{
            fontFamily: "Figtree, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(32px, 8vw, 88px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            marginBottom: "32px"
          }}>
              {CTA_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-cta-${i}`} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: i * 0.1
            }} style={{
              display: "inline-block",
              marginRight: "0.2em",
              ...(word === "Now." ? {
                color: "#FF2D87",
                fontWeight: 700
              } : {})
            }}>
                  {word}
                </motion.span>)}
            </h2>
            <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "640px",
            margin: "0 auto 48px auto",
            lineHeight: 1.6
          }}>
              Join the most influential network of women shaping Africa's communications, media, and digital marketing landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button style={{
              backgroundColor: "#FF2D87",
              color: "#FFFFFF",
              padding: "20px 40px",
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 40px rgba(255,45,135,0.3)"
            }}>
                Register for Stage Access
              </button>
              <button style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              padding: "20px 40px",
              fontSize: "16px",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer"
            }}>
                Become a Partner
              </button>
            </div>
          </div>
        </section>
      </main>

      <CommunicationsRegistrationSection />
      <GlobalFooter />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;900&display=swap');
        
        body {
          background-color: #0A0A0F;
          font-family: 'Figtree', sans-serif;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(24px, 3vw, 40px);
        }

        @media (min-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>;
};