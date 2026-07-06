import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, Utensils, Calendar, Clock, MapPin, Award } from 'lucide-react';

// --- Types ---
interface AgendaSession {
  num: string;
  time: string;
  type: string;
  title: string;
  description: string;
  chips: string[];
  pillarLink?: string;
  pillarLabel?: string;
  breakouts?: {
    label: string;
    href: string;
    color?: string;
  }[];
}

interface StageData {
  id: string;
  name: string;
  director?: string;
  color: string;
  bgGlow: string;
  sessions: AgendaSession[];
}

// --- Data for the 4 Stages ---
const STAGES: StageData[] = [
  {
    id: "main",
    name: "Main Stage",
    director: "Cathy Mohlahlana (Metro FM)",
    color: "#FF2D87",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,45,135,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "07h30",
        type: "ARRIVAL & IMMERSIVE OPENING",
        title: "All Delegates Arrival",
        description: "Arrive, connect, and settle in. Registration desks open and morning coffee networking begins at the exhibition area.",
        chips: ["Registration", "Networking", "Coffee"]
      },
      {
        num: "02",
        time: "08h00",
        type: "PROGRAMME DIRECTOR OPENING",
        title: "Opening by Cathy Mohlahlana",
        description: "Official welcome and opening of the EmpowaWomen Leadership Summit 2026 by Metro FM Broadcaster and Producer, Cathy Mohlahlana.",
        chips: ["Cathy Mohlahlana", "Metro FM", "Opening Ceremony"]
      },
      {
        num: "03",
        time: "09h00",
        type: "WELCOME ADDRESS",
        title: "Official Welcome by Simphiwe Masiza",
        description: "Introductory remarks outlining the summit objectives and welcoming delegates by Simphiwe Masiza, CEO & Founder of EmpowaWorx.",
        chips: ["Simphiwe Masiza", "EmpowaWorx", "Welcome"]
      },
      {
        num: "04",
        time: "09h05",
        type: "INTRODUCTORY ADDRESS",
        title: "Empowawomen Context and Direction",
        description: "Strategic insights into women economic empowerment and leadership pathways by Bonnie Maponya, Acting Managing Executive of Empowawomen.",
        chips: ["Bonnie Maponya", "Strategy", "Leadership"]
      },
      {
        num: "05",
        time: "09h10",
        type: "OFFICIAL KEYNOTE ADDRESS",
        title: "Ministerial Address: Mmamoloko Kubayi",
        description: "Keynote presentation on driving systemic change, governance, and economic inclusion by Ms Mmamoloko 'Nkhensani' Kubayi, Minister of Justice and Constitutional Development.",
        chips: ["Minister Keynote", "Governance", "Inclusion"]
      },
      {
        num: "06",
        time: "09h40",
        type: "PARTNER ADDRESS",
        title: "ABSA Representative Address",
        description: "A special message on building financial resilience, enterprise funding opportunities, and corporate ecosystems to accelerate women-led businesses.",
        chips: ["ABSA Group", "Keynote Partner", "Funding Ecosystems"]
      },
      {
        num: "07",
        time: "10h00",
        type: "EXECUTIVE PANEL / DIALOGUE",
        title: "The City of Her: Reimagining Women’s Power",
        description: "How connection, premium leadership circles, and economic channels can transform the boardroom and enterprise landscape. Facilitated by Cathy Mohlahlana. Panelists: Ipeleng Nonkululeko Mkhari (CEO & Co-Founder, Motseng Investment Holdings), Phuti Mahanyele-Dabengwa (CEO, Naspers), Mpumi Madisa (CEO, Bidvest Group), Lerato Sithole (Founder, Think & Grow Rich Africa), Magda Wierzycka (former CEO, Sygnia Limited).",
        chips: ["C-Suite Leaders", "Economic Power", "Strategic Dialogue"]
      },
      {
        num: "08",
        time: "11h00",
        type: "BREAKAWAY SESSION ANNOUNCEMENT",
        title: "Transition to Specialized Industry Stages",
        description: "Delegates transition from the plenary room to their chosen vertical sector stages for deep-dive playbooks and networking.",
        chips: ["Industry Tracks", "Specialized Breakouts"],
        breakouts: [
          { label: "Media & Creative Economy", href: "/creative-economy", color: "#00B4A6" },
          { label: "Entrepreneurship & Boards", href: "/entrepreneurship-funding", color: "#D97706" },
          { label: "Green Economy & Property", href: "/green-economy", color: "#FF2D87" }
        ]
      },
      {
        num: "09",
        time: "14h00",
        type: "PLENARY PANEL DISCUSSION",
        title: "Collaborating for Collective Sector Transformation",
        description: "Moderator: Khanyi Mlambo. High-impact insights on scaling up across industries. Panelists: Kululwa Muthwa (CEO, SAIBPP), Tryphosa Ramano, Delia Ndlovu, Brian Yuvi.",
        chips: ["Khanyi Mlambo", "Collective Action", "Sector Scaling"]
      },
      {
        num: "10",
        time: "14h30",
        type: "CLOSING KEYNOTE ADDRESS",
        title: "Building Lasting Legacies: Dr. Precious Moloi-Motsepe",
        description: "Closing inspirational address on sustainable development, philanthropy, and economic power by Precious Moloi-Motsepe, Chancellor of the University of Cape Town.",
        chips: ["Keynote", "Precious Moloi-Motsepe", "UCT Chancellor"]
      },
      {
        num: "11",
        time: "14h50",
        type: "VOTE OF THANKS",
        title: "Acknowledgements & Closing Comments",
        description: "Official wrap-up and vote of thanks to partners, speakers, and delegates by Simphiwe Masiza.",
        chips: ["Simphiwe Masiza", "Wrap-up", "Thank You"]
      },
      {
        num: "12",
        time: "15h00",
        type: "EXHIBITION & CLOSING NETWORKING",
        title: "Afternoon Reception & Connections",
        description: "Delegates enjoy desserts and networking in the main exhibition hall to seal partnerships and make connections.",
        chips: ["Networking", "Exhibition", "Afternoon Tea"]
      }
    ]
  },
  {
    id: "media",
    name: "Media & Creative",
    director: "Mr David G Nhlapo",
    color: "#00B4A6",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,180,166,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "11h00",
        type: "OPENING KEYNOTE",
        title: "Leading the Future of Africa's Influence & Media",
        description: "How will women shape consumer influence, media power, digital innovation, and brand narratives? Speakers: Nomsa Philiso (MultiChoice), Thanduxolo Nonqoba Jiyane (Mastercard Foundation), Melanie Ramjee (Tutone Communications), Nunu Ntshingila (Women for Women Int.), Viwe Ndongeni-Ntlebi (BONA Print), Ursula Mariani, Naledi Jarratt, Veli Ngubane.",
        chips: ["Consumer Influence", "Media Power", "Digital Innovation"]
      },
      {
        num: "02",
        time: "11h15",
        type: "HIGH-IMPACT PANEL",
        title: "Women, Media & the Future of Brand Power",
        description: "Why the future belongs to brands that leverage technology, consumer intelligence, storytelling, cultural relevance, and trust to build influence and drive sustainable growth.",
        chips: ["Storytelling", "Brand Power", "Consumer Trust"]
      },
      {
        num: "03",
        time: "11h45",
        type: "FIRECHAT",
        title: "Brand Commercialisation & Digital Influence",
        description: "How organisations and women-led brands transform visibility into commercial value through digital channels and market expansion. Speakers: Zibusiso Mkhwanazi (M&N Brands), Samantha Rech (EY), Shweshwe Tlhapane (Momentum Insure), Lauretta Ngakane (Primedia Group).",
        chips: ["Monetisation", "Visibility", "Strategic Partnerships"]
      },
      {
        num: "04",
        time: "12h15",
        type: "TEA BREAK",
        title: "Ecosystem Connections & Refreshments",
        description: "Midday breakaway networking and tea break in the sector zone.",
        chips: ["Break", "Refreshments"]
      },
      {
        num: "05",
        time: "12h30",
        type: "OPENING KEYNOTE ADDRESS",
        title: "Leading Africa's Creative & Cultural Economy",
        description: "Leveraging creativity, technology, and intellectual property to shape cultural influence and build globally competitive enterprises. Speaker: Kaye Ann Williams (Director: Series & Film, Netflix Africa).",
        chips: ["Netflix Africa", "Creative Assets", "Cultural Economy"]
      },
      {
        num: "06",
        time: "12h45",
        type: "EXECUTIVE PANEL DISCUSSION",
        title: "Women, Storytelling & Business of Cultural Influence",
        description: "How AI, streaming platforms, content creation, and digital innovation are transforming the economy and commercialising creativity. Speakers: Lulu Hela (Hela Media), Mbali Thabethe (Joburg Film Festival), Didintle Khunou (Joburg Theatre), Calvin Sefala (Urban Brew Studios), Ingrid Engelbrecht (Showrunner).",
        chips: ["Streaming", "Content Creation", "AI & Innovation"]
      },
      {
        num: "07",
        time: "13h30",
        type: "FIRESIDE CHAT",
        title: "Content Commercialisation & Global Market Access",
        description: "How women-led creative businesses can protect intellectual property, access global markets, and forge strategic partnerships. Speakers: Claire Morris (Black Swan Media), Viva Liles-Wilkin (Quizzical Pictures), Connie Ferguson (Ferguson Films), Amy Montalvo (ONEPASS), Zikona Anam Debese (Black Brain Pictures).",
        chips: ["Global Markets", "IP Protection", "Connie Ferguson"]
      }
    ]
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship & Boards",
    color: "#D97706",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(217,119,6,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "11h00",
        type: "OPENING KEYNOTE ADDRESS",
        title: "Leading the Future of Entrepreneurship & Growth",
        description: "How women entrepreneurs build, fund, innovate, and scale the next generation of high-growth enterprises that drive Africa's economic transformation. Speaker: Stella Ndabeni-Abrahams (Minister of Small Business Development).",
        chips: ["Stella Ndabeni-Abrahams", "Innovation", "Scaling Enterprises"]
      },
      {
        num: "02",
        time: "11h15",
        type: "EXECUTIVE PANEL DISCUSSION",
        title: "Women, Capital & Future of Economic Participation",
        description: "Positioning women to lead through access to capital, procurement opportunities, digital ecosystems, and market networks. Speakers: Mr. Mziwabantu Dayimani (NEF), Boitumelo Mosako (DBSA), Nkosikhona Mbatha (SEDFA), Ndumiso Kubheka (NYDA).",
        chips: ["Access to Capital", "DBSA & NEF", "Procurement Networks"]
      },
      {
        num: "03",
        time: "11h45",
        type: "FIRECHAT",
        title: "Investment, Market Access & Scaling",
        description: "Practical steps to get businesses investment-ready, commercialise innovation, and unlock global markets. Speakers: Kenny Fihla (Absa), Leila Fourie (JSE), Nolitha Fakude (Anglo American), Nonkululeko Nyembezi, Phuti Mahanyele-Dbengwa (Naspers).",
        chips: ["Leila Fourie", "JSE Limited", "Investment Readiness"]
      },
      {
        num: "04",
        time: "12h15",
        type: "TEA BREAK",
        title: "Ecosystem Connections & Refreshments",
        description: "Midday breakaway networking and tea break in the sector zone.",
        chips: ["Break", "Refreshments"]
      },
      {
        num: "05",
        time: "12h30",
        type: "OPENING KEYNOTE",
        title: "Leading from Within: Mastering the Mind & Aligning the Soul",
        description: "Cultivating mental strength, physical wellbeing, and inner alignment to lead organizations with authenticity and purpose. Speaker: Lerato Sithole.",
        chips: ["Lerato Sithole", "Mental Strength", "Inner Alignment"]
      },
      {
        num: "06",
        time: "12h45",
        type: "EXECUTIVE PANEL DISCUSSION",
        title: "Crucial Conversations: Turning Dialogue into Trust",
        description: "Navigating high-stakes conversations, building institutional trust, exercising strategic influence, and achieving positive outcomes. Speakers: Dr Khosi Jiyane (The Human Edge), Helene Vermaak (The Human Edge), Mr Terry Moore.",
        chips: ["Crucial Conversations", "The Human Edge", "Trust Building"]
      },
      {
        num: "07",
        time: "13h30",
        type: "FIRESIDE CHAT",
        title: "Resilient Leadership as a Strategic Driver of Sustainability",
        description: "Harnessing personal and organizational resilience to drive long-term business sustainability. Moderator: Judith Chinkumbi. Speaker: Cecile Feront.",
        chips: ["Resilience", "Sustainability", "Cecile Feront"]
      }
    ]
  },
  {
    id: "green",
    name: "Green Economy & Property",
    director: "Sis Khanyi Mlambo",
    color: "#10B981",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "11h00",
        type: "OPENING KEYNOTE ADDRESS",
        title: "Leading Africa's Green Transition & Energy Future",
        description: "How climate innovation, green energy transitions, and female leadership shape Africa's industrial competitiveness. Speaker: Portia (Presidential, Absa Group).",
        chips: ["Green Transition", "Energy Future", "Climate Innovation"]
      },
      {
        num: "02",
        time: "11h15",
        type: "MASTERCLASS",
        title: "Women, Energy & the Future of the Green Economy",
        description: "Accelerating sustainable growth and positioning women to lead Africa's green industrial transformation. Speakers: Christina Herden (HCLTech), Ronell Govender (NASPERS), Jayne Mammatt (EY), Loshni Naidoo (JSE), Monelisa Baleni (Prescient), Kuhle Sojola (Ninety One).",
        chips: ["Clean Energy", "ESG & Compliance", "Loshni Naidoo"]
      },
      {
        num: "03",
        time: "11h45",
        type: "MASTERCLASS",
        title: "Green Finance, Market Access & Scaling",
        description: "Unlocking green finance, forging strategic partnerships, and scaling impact across Africa's environmental sector. Speakers: Sibu Majozi (ARM), Dr. Andrea Campher (Standard Bank), Annelise Louw (Sasol).",
        chips: ["Green Finance", "Sibu Majozi", "ARM"]
      },
      {
        num: "04",
        time: "12h15",
        type: "TEA BREAK",
        title: "Ecosystem Connections & Refreshments",
        description: "Midday breakaway networking and tea break in the sector zone.",
        chips: ["Break", "Refreshments"]
      },
      {
        num: "05",
        time: "12h30",
        type: "OPENING KEYNOTE",
        title: "The Modern Portfolio: Property as Your Engine for Wealth",
        description: "Building resilient, multi-generational wealth through strategic property investment and real estate. Speaker: Azola Mayekiso (CEO, NHFC).",
        chips: ["Azola Mayekiso", "Real Estate", "Wealth Creation"]
      },
      {
        num: "06",
        time: "12h45",
        type: "EXECUTIVE PANEL DISCUSSION",
        title: "The Developer's Blueprint: Profitable Projects with Purpose",
        description: "Shaping sustainable, inclusive cities through urban innovation, ESG principles, and affordable housing. Speakers: Bongi Ntuli (DPWI), Thandeka Mlaza (City of Joburg), Justine Pieterse (Indigen Architects).",
        chips: ["Bongi Ntuli", "Affordable Housing", "Urban Development"]
      },
      {
        num: "07",
        time: "13h30",
        type: "FIRESIDE CHAT",
        title: "Future of Property: Wealth Through Collaboration",
        description: "Collaboration between investors, developers, and policymakers to unlock property opportunities. Speakers: Jabulani Fakazi (NHFC), Kululwa Muthwa (SAIBPP), Olebogeng Mokoena (PIC), Kehilwe Sibanda (Galencia Properties).",
        chips: ["SAIBPP", "Kululwa Muthwa", "Collaboration"]
      }
    ]
  }
];

const DETAIL_ROWS = [
  { color: '#FF2D87', text: 'Saturday, 29 August 2026', icon: Calendar },
  { color: '#00B4A6', text: '08h00 – 16h00 · The Forum, Bryanston', icon: Clock },
  { color: '#D97706', text: 'R1,500 per Delegate', icon: Award }
];

const EASE_CUSTOM: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// --- Sub-components ---
interface SessionRowProps {
  session: AgendaSession;
  index: number;
  isActive: boolean;
  accentColor: string;
  onToggle: (num: string) => void;
}

const SessionRow = ({
  session,
  index,
  isActive,
  accentColor,
  onToggle
}: SessionRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: EASE_CUSTOM }}
      viewport={{ once: true, margin: '-20px' }}
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={() => onToggle(session.num)}
    >
      <motion.div
        layout
        whileHover={{ backgroundColor: 'rgba(255,255,255,0.015)' }}
        transition={{ duration: 0.2 }}
        style={{
          borderRadius: '12px',
          padding: '16px 20px',
          border: isActive ? `1px solid ${accentColor}30` : '1px solid rgba(255,255,255,0.04)',
          backgroundColor: isActive ? 'rgba(255,255,255,0.02)' : 'transparent',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '12px',
          transition: 'border 300ms, background-color 300ms'
        }}
      >
        {/* Left active indicator bar */}
        <motion.div
          animate={{ scaleY: isActive ? 1 : 0, backgroundColor: accentColor }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            transformOrigin: 'top',
            zIndex: 2
          }}
        />

        {/* Ghost session number (Hidden on very small screens to avoid clutter) */}
        <div 
          className="hidden sm:block"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            fontSize: 'clamp(48px,8vw,72px)',
            fontWeight: 200,
            color: 'white',
            opacity: isActive ? 0.06 : 0.02,
            letterSpacing: '-0.05em',
            lineHeight: 1,
            userSelect: 'none',
            zIndex: 1,
            transition: 'opacity 300ms'
          }}
        >
          {session.num}
        </div>

        {/* Main row content */}
        <div className="flex flex-row items-center gap-3 sm:gap-6 relative z-10">
          {/* TIME */}
          <div className="w-16 sm:w-20 shrink-0">
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: isActive ? accentColor : 'rgba(255,255,255,0.50)',
              fontFamily: 'Figtree, sans-serif',
              display: 'block',
              transition: 'color 300ms'
            }}>
              {session.time}
            </span>
          </div>

          {/* Divider */}
          <div className="h-6 w-[1px] bg-white/10 shrink-0" />

          {/* Content */}
          <div className="flex-1 min-w-0 pr-1">
            <span style={{
              textTransform: 'uppercase',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: accentColor,
              display: 'block',
              marginBottom: '4px'
            }}>
              {session.type}
            </span>
            <span style={{
              fontSize: 'clamp(13px, 1.8vw, 16px)',
              fontWeight: isActive ? 500 : 400,
              color: isActive ? 'white' : 'rgba(255,255,255,0.85)',
              lineHeight: 1.35,
              display: 'block',
              transition: 'color 300ms, font-weight 300ms'
            }}>
              {session.title}
            </span>
          </div>

          {/* Expand indicator */}
          <div style={{
            width: '24px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <motion.div
              animate={{ rotate: isActive ? 45 : 0 }}
              transition={{ duration: 0.3, ease: EASE_CUSTOM }}
              style={{ position: 'relative', width: '12px', height: '12px' }}
            >
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: '12px',
                height: '1.5px',
                backgroundColor: 'rgba(255,255,255,0.4)',
                transform: 'translateY(-50%)'
              }} />
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: '1.5px',
                height: '12px',
                backgroundColor: 'rgba(255,255,255,0.4)',
                transform: 'translateX(-50%)'
              }} />
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_CUSTOM }}
              style={{ overflow: 'hidden' }}
            >
              <div className="pl-0 sm:pl-[104px] pr-0 sm:pr-8 pt-4 pb-2 relative z-10">
                {/* Left line decorator - only visible on sm screen and up where we have left indent */}
                <div 
                  className="hidden sm:block"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: 0,
                    bottom: '20px',
                    width: '1px',
                    background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
                    opacity: 0.4,
                    borderRadius: '2px'
                  }} 
                />

                <p style={{
                  color: 'rgba(255,255,255,0.60)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  margin: '0 0 16px 0'
                }}>
                  {session.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {session.chips.map(chip => (
                    <span
                      key={chip}
                      style={{
                        backgroundColor: `${accentColor}10`,
                        border: `1px solid ${accentColor}30`,
                        borderRadius: '50px',
                        padding: '4px 12px',
                        fontSize: '10px',
                        fontWeight: 500,
                        color: accentColor,
                        letterSpacing: '0.04em',
                        display: 'inline-block'
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Router Link Integration */}
                {session.pillarLink && (
                  <div style={{ marginTop: "16px" }}>
                    <RouterLink
                      to={session.pillarLink}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        backgroundColor: `${accentColor}15`,
                        border: `1px solid ${accentColor}30`,
                        color: accentColor,
                        fontSize: "11px",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "all 250ms ease"
                      }}
                      onMouseEnter={e => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.backgroundColor = accentColor;
                        target.style.color = "#0A0A0F";
                      }}
                      onMouseLeave={e => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.backgroundColor = `${accentColor}15`;
                        target.style.color = accentColor;
                      }}
                    >
                      <span>View Stage Hub: {session.pillarLabel}</span>
                      <ArrowRight size={12} />
                    </RouterLink>
                  </div>
                )}

                {/* Masterclass Breakout Sub-Tracks */}
                {session.breakouts && (
                  <div style={{
                    marginTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}>
                    <span style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.30)",
                      textTransform: "uppercase"
                    }}>
                      Choose Your Breakout Stage to View details:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {session.breakouts.map((bo, boIdx) => (
                        <RouterLink
                          key={boIdx}
                          to={bo.href}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            backgroundColor: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.70)",
                            fontSize: "11px",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "all 200ms ease"
                          }}
                          onMouseEnter={e => {
                            const target = e.currentTarget as HTMLAnchorElement;
                            target.style.backgroundColor = `${bo.color}15`;
                            target.style.borderColor = bo.color || "#00B4A6";
                            target.style.color = bo.color || "#FFFFFF";
                          }}
                          onMouseLeave={e => {
                            const target = e.currentTarget as HTMLAnchorElement;
                            target.style.backgroundColor = "rgba(255,255,255,0.03)";
                            target.style.borderColor = "rgba(255,255,255,0.08)";
                            target.style.color = "rgba(255,255,255,0.70)";
                          }}
                        >
                          <span style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: bo.color,
                            display: "inline-block"
                          }} />
                          <span>{bo.label}</span>
                          <ArrowRight size={10} />
                        </RouterLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

// --- Main Component ---
export const EmpowaWomenAgendaPage: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>("main");
  const [activeSession, setActiveSession] = useState<string | null>(null);

  const activeStage = STAGES.find(s => s.id === activeStageId) || STAGES[0];

  const handleToggle = (num: string) => {
    setActiveSession(prev => prev === num ? null : num);
  };

  const handleStageChange = (stageId: string) => {
    setActiveStageId(stageId);
    setActiveSession(null); // Reset open sessions when switching stages
  };

  return (
    <section
      id="programme"
      style={{
        backgroundColor: "#0A0A0F",
        backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/06/34706.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 10,
        position: "relative",
        overflow: "hidden"
      }}
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      {/* Scrollbar suppression style injected locally */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(10,10,15,0.96)",
        zIndex: 1
      }} />

      {/* Ambient background glow based on active stage */}
      <motion.div
        animate={{ background: activeStage.bgGlow }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      <div className="max-w-5xl mx-auto" style={{ position: "relative", zIndex: 3 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <div style={{
            width: "48px",
            height: "3px",
            backgroundColor: "#FF2D87",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto"
          }} />
          <span className="uppercase block mb-4" style={{
            fontFamily: "Figtree",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.35)"
          }}>
            SUMMIT PROGRAMME
          </span>
          <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(26px, 4.5vw, 54px)",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 16px 0"
          }}>
            Multi-Stage Experience
          </h2>
          <p style={{
            fontFamily: "Figtree",
            color: "rgba(255,255,255,0.40)",
            fontSize: "15px",
            maxWidth: "600px",
            margin: "0 auto 24px auto"
          }}>
            Explore our specialized breakaway tracks and plenary presentations designed to drive African women economic leadership.
          </p>

          {/* Event Details Quick Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginTop: '20px'
          }}>
            {DETAIL_ROWS.map((row, rIdx) => {
              const Icon = row.icon;
              return (
                <div key={rIdx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '50px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#FFFFFF'
                }}>
                  <Icon size={12} style={{ color: row.color, flexShrink: 0 }} />
                  <span>{row.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Horizontal Tab Buttons */}
        <div style={{
          position: "relative",
          zIndex: 10,
          marginBottom: "40px",
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}>
          <div
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: "8px",
              padding: "6px",
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "999px",
              overflowX: "auto",
              maxWidth: "100%",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
            }}
          >
            {STAGES.map(stage => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => handleStageChange(stage.id)}
                  style={{
                    position: "relative",
                    padding: "10px 24px",
                    borderRadius: "999px",
                    fontFamily: "Figtree",
                    fontSize: "13px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#0A0A0F" : "rgba(255,255,255,0.60)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    outline: "none",
                    whiteSpace: "nowrap",
                    transition: "color 300ms ease"
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeStageTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: stage.color,
                        borderRadius: "999px",
                        zIndex: -1
                      }}
                    />
                  )}
                  {stage.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Director Info (if present) */}
        {activeStage.director && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeStage.id + "-director"}
            transition={{ duration: 0.3 }}
            style={{
              textAlign: "center",
              marginBottom: "24px"
            }}
          >
            <span style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.30)",
              textTransform: "uppercase"
            }}>
              Programme Director:
            </span>
            <span style={{
              fontSize: "12px",
              fontWeight: 500,
              color: activeStage.color,
              marginLeft: "6px"
            }}>
              {activeStage.director}
            </span>
          </motion.div>
        )}

        {/* Sessions list */}
        <div className="max-w-3xl mx-auto" style={{ minHeight: "400px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Special Plenary Sessions vs breakaway split indicator */}
              {activeStage.id !== "main" && (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px 16px",
                  backgroundColor: "rgba(0,180,166,0.04)",
                  border: "1px solid rgba(0,180,166,0.12)",
                  borderRadius: "8px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.50)",
                  marginBottom: "24px",
                  textAlign: "center"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: activeStage.color
                  }} />
                  <span>Breakaway Tracks run in parallel from 11h00 to 14h00.</span>
                </div>
              )}

              {/* Render Stage Sessions */}
              {activeStage.sessions.map((session, idx) => (
                <React.Fragment key={session.num}>
                  {/* Lunch break indicator specifically for Plenary/Main Stage */}
                  {activeStage.id === "main" && session.num === "09" && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,180,166,0.04)',
                      border: '1px solid rgba(0,180,166,0.15)',
                      padding: '14px 20px',
                      borderRadius: '10px',
                      marginBottom: '16px',
                      gap: '12px'
                    }}>
                      <Utensils size={14} color="#00B4A6" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'white', fontWeight: 600, fontSize: '13px' }}>12h50</span>
                      <div style={{ width: '1px', height: '14px', backgroundColor: 'rgba(0,180,166,0.25)' }} />
                      <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px' }}>Executive Networking Lunch</span>
                      <span style={{
                        marginLeft: 'auto',
                        backgroundColor: 'rgba(0,180,166,0.15)',
                        borderRadius: '50px',
                        padding: '2px 8px',
                        fontSize: '9px',
                        color: '#00B4A6',
                        fontWeight: 700
                      }}>INCLUDED</span>
                    </div>
                  )}

                  <SessionRow
                    session={session}
                    index={idx}
                    accentColor={activeStage.color}
                    isActive={activeSession === session.num}
                    onToggle={handleToggle}
                  />
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Tagline */}
        <div style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)'
        }}>
          <p style={{
            fontStyle: 'italic',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.25)',
            textAlign: 'center',
            margin: 0,
            letterSpacing: '0.08em'
          }}>
            Lead Fearlessly. · Accelerate Growth. · Transform Economies.
          </p>
        </div>
      </div>
    </section>
  );
};
