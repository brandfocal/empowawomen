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
  shortName?: string;
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
    shortName: "Main Stage",
    director: "Cathy Mohlahlana (Broadcaster, Producer and Entrepreneur - Metro FM)",
    color: "#FF2D87",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,45,135,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "07:30 - 08:00",
        type: "Arrival & Immersive Opening",
        title: "Arrival & Immersive Opening",
        description: "All Delegates",
        chips: ["Plenary"]
      },
      {
        num: "02",
        time: "08:30 - 08:35",
        type: "Programme Director’s Opening",
        title: "Programme Director’s Opening",
        description: "Setting the Stage for Courageous Leadership and Economic Power",
        chips: ["Plenary"]
      },
      {
        num: "03",
        time: "08:35 - 08:40",
        type: "Opening Experience",
        title: "Opening Experience",
        description: "A Decade of Impact: Celebrating the Women Who Continue to Move Africa Forward",
        chips: ["Plenary"]
      },
      {
        num: "04",
        time: "08:40 - 08:50",
        type: "Official Welcome Address",
        title: "Official Welcome Address",
        description: "Ten Years of EmpowaWomen: From Building a Platform to Building an Economy",
        chips: ["Plenary"]
      },
      {
        num: "05",
        time: "08:50 - 08:55",
        type: "Partner address",
        title: "Partner address",
        description: "The Influence Factor",
        chips: ["Plenary"]
      },
      {
        num: "06",
        time: "08:50 - 09:00",
        type: "Introductory Address",
        title: "Introductory Address",
        description: "The Future Is Female, but Leadership Must Be Intentional",
        chips: ["Plenary"]
      },
      {
        num: "07",
        time: "09:00 - 09:15",
        type: "Strategic Partner Address",
        title: "Strategic Partner Address",
        description: "Banking on Women: Turning Financial Inclusion into Enterprise Growth and Economic Ownership",
        chips: ["Plenary"]
      },
      {
        num: "08",
        time: "09:15 - 09:35",
        type: "Partner Dialogue",
        title: "Partner Dialogue",
        description: "Beyond Inclusion: Building Economies Where Women Lead, Own and Influence",
        chips: ["Plenary"]
      },
      {
        num: "09",
        time: "09:35 - 09:50",
        type: "Partner address",
        title: "Partner address",
        description: "The Skills to Lead: Building Women’s Economic Power",
        chips: ["Plenary"]
      },
      {
        num: "10",
        time: "09:50 - 10:00",
        type: "Partner Keynote Address",
        title: "Partner Keynote Address",
        description: "The Modern Portfolio: Property as Your Engine for Wealth",
        chips: ["Plenary"]
      },
      {
        num: "11",
        time: "10:00 - 10:45",
        type: "Property & Spatial Transformation Panel",
        title: "Property & Spatial Transformation Panel",
        description: "The Future of Property: Building Wealth Through Collaboration & Urban Transformation",
        chips: ["Plenary"]
      },
      {
        num: "12",
        time: "10:45 - 11:00",
        type: "Transition to Industry Stages",
        title: "Transition to Industry Stages",
        description: "From Conversation to Commercial Opportunity",
        chips: ["Transition"]
      },
      {
        num: "13",
        time: "11:00 - 14:00",
        type: "Industry Breakaway Sessions",
        title: "Industry Breakaway Sessions",
        description: "Six Industries. Six Leadership Conversations. One Women-Led Economy.",
        chips: ["Breakout Tracks"],
        breakouts: [
          { label: "Entrepreneurship, Innovation & Funding", href: "/entrepreneurship-funding", color: "#D97706" },
          { label: "Green Economy, Energy & Sustainability", href: "/green-economy", color: "#10B981" },
          { label: "Communications, Advertising, Marketing & Media", href: "/communications-media", color: "#00B4A6" },
          { label: "Leadership, Governance & Boards", href: "/leadership-governance-boards", color: "#FF2D87" }
        ]
      },
      {
        num: "14",
        time: "14:00 - 15:00",
        type: "Lunch, Exhibition & Networking",
        title: "Lunch, Exhibition & Networking",
        description: "Connect. Collaborate. Procure. Invest.",
        chips: ["Networking"]
      }
    ]
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship, Innovation & Funding",
    shortName: "Entrepreneurship",
    color: "#D97706",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(217,119,6,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "---",
        type: "Programme Director",
        title: "Programme Director",
        description: "Stage Introduction & Proceedings",
        chips: ["Moderator"]
      },
      {
        num: "02",
        time: "11:00 - 11:15",
        type: "Opening Keynote Address",
        title: "Opening Keynote Address",
        description: "The Architect of Enterprise: Designing Businesses That Transform Economies",
        chips: ["Keynote"]
      },
      {
        num: "03",
        time: "11:15 - 11:30",
        type: "TED-Style Talk I",
        title: "TED-Style Talk I",
        description: "What It Actually Takes to Fund a Woman-Led Business in SA",
        chips: ["Talk"]
      },
      {
        num: "04",
        time: "11:30 - 12:00",
        type: "High Impact Leadership Dialogue",
        title: "High Impact Leadership Dialogue",
        description: "Building a Capital System That Works for Women",
        chips: ["Dialogue"]
      },
      {
        num: "05",
        time: "12:00 - 12:30",
        type: "Fireside Chat I",
        title: "Fireside Chat I",
        description: "From Funding Applications to Investable Enterprises",
        chips: ["Fireside"]
      },
      {
        num: "06",
        time: "12:30 - 12:40",
        type: "TED-Style Talk II",
        title: "TED-Style Talk II",
        description: "What VCs Actually Look For",
        chips: ["Talk"]
      },
      {
        num: "07",
        time: "12:40 - 12:50",
        type: "Tea Break",
        title: "Tea Break",
        description: "Short Break",
        chips: ["Break"]
      },
      {
        num: "08",
        time: "12:50 - 13:20",
        type: "Fireside Chat II",
        title: "Fireside Chat II",
        description: "Capital Is Not Enough: Markets, Procurement and Scale",
        chips: ["Fireside"]
      },
      {
        num: "09",
        time: "13:20 - 13:40",
        type: "Masterclass",
        title: "Masterclass",
        description: "From Business to Bankable: Preparing Women-Led Businesses for Investment",
        chips: ["Masterclass"]
      },
      {
        num: "10",
        time: "13:40 - 13:50",
        type: "Call to Action",
        title: "Call to Action",
        description: "Women’s Enterprise Investment Commitment",
        chips: ["Call to Action"]
      },
      {
        num: "11",
        time: "13:50 - 13:55",
        type: "Closing Capital Commitment",
        title: "Closing Capital Commitment",
        description: "Women’s Enterprise Investment Compact",
        chips: ["Commitment"]
      },
      {
        num: "12",
        time: "13:55 - 14:00",
        type: "Close & Handover",
        title: "Close & Handover",
        description: "Transition to Leadership & Governance Stage",
        chips: ["Close"]
      }
    ]
  },
  {
    id: "green",
    name: "Green Economy, Energy & Sustainability",
    shortName: "Green Economy",
    color: "#10B981",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "---",
        type: "Programme Director",
        title: "Programme Director",
        description: "Stage Introduction & Proceedings",
        chips: ["Moderator"]
      },
      {
        num: "02",
        time: "11:00 - 11:20",
        type: "Opening Keynote Address",
        title: "Opening Keynote Address",
        description: "Green Finance, Market Access & Scaling Women-Led Sustainable Enterprises",
        chips: ["Keynote"]
      },
      {
        num: "03",
        time: "11:20 - 11:40",
        type: "Masterclass",
        title: "Masterclass",
        description: "Powering Africa’s Green Future: Why Women’s Leadership Matters Now",
        chips: ["Masterclass"]
      },
      {
        num: "04",
        time: "11:40 - 12:20",
        type: "Panel Discussion",
        title: "Panel Discussion",
        description: "Women, Energy & the Future of the Green Economy",
        chips: ["Panel"]
      },
      {
        num: "05",
        time: "12:20 - 12:40",
        type: "Masterclass",
        title: "Masterclass",
        description: "Green Finance, Market Access & Scaling Women-Led Sustainable Enterprises",
        chips: ["Masterclass"]
      },
      {
        num: "06",
        time: "12:40 - 12:50",
        type: "Short Break",
        title: "Short Break",
        description: "Short Break",
        chips: ["Break"]
      }
    ]
  },
  {
    id: "communications",
    name: "Communications, Advertising, Marketing & Media",
    shortName: "Media & Comms",
    color: "#00B4A6",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,180,166,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "---",
        type: "Programme Director",
        title: "Programme Director",
        description: "Stage Introduction & Proceedings",
        chips: ["Moderator"]
      },
      {
        num: "02",
        time: "12:50 - 13:00",
        type: "Opening Keynote",
        title: "Opening Keynote",
        description: "Women Must Lead the Future of Africa's Influence, Media & Communications Economy",
        chips: ["Keynote"]
      },
      {
        num: "03",
        time: "13:00 - 13:30",
        type: "High-Impact Panel",
        title: "High-Impact Panel",
        description: "Women, Media & the Future of Brand Power",
        chips: ["Panel"]
      },
      {
        num: "04",
        time: "13:30 - 14:00",
        type: "Firechat",
        title: "Firechat",
        description: "Brand Commercialisation, Digital Influence & Market Expansion",
        chips: ["Fireside"]
      }
    ]
  },
  {
    id: "leadership",
    name: "Leadership, Governance & Boards",
    shortName: "Leadership & Boards",
    color: "#FF2D87",
    bgGlow: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,45,135,0.08) 0%, transparent 70%)",
    sessions: [
      {
        num: "01",
        time: "11:00 - 14:00",
        type: "Programme Director",
        title: "Programme Director",
        description: "Welcome, Opening Remarks",
        chips: ["Moderator"]
      },
      {
        num: "02",
        time: "11:00 - 11:45",
        type: "Opening Keynote",
        title: "Opening Keynote",
        description: "Pillars of Financial Resilience",
        chips: ["Keynote"]
      },
      {
        num: "03",
        time: "11:45 - 12:00",
        type: "Q&A Session",
        title: "Q&A Session",
        description: "Q&A with Mr Johan Gouws",
        chips: ["Q&A"]
      },
      {
        num: "04",
        time: "12:00 - 12:40",
        type: "High-Impact Panel",
        title: "High-Impact Panel",
        description: "Building personal resilience through financial planning",
        chips: ["Panel"]
      },
      {
        num: "05",
        time: "12:40 - 12:50",
        type: "Short Break",
        title: "Short Break",
        description: "Short Break",
        chips: ["Break"]
      },
      {
        num: "06",
        time: "12:50 - 13:30",
        type: "Masterclass",
        title: "Masterclass",
        description: "Crucial Conversations: Turning High-Stakes Dialogue into Trust, Influence and Positive Outcomes",
        chips: ["Masterclass"]
      },
      {
        num: "07",
        time: "13:30 - 14:00",
        type: "Leadership Conversation",
        title: "Leadership Conversation",
        description: "Leading from Within: Mastering the Mind, Strengthening the Body, and Aligning the Soul for Purposeful Living",
        chips: ["Conversation"]
      }
    ]
  }
];

const DETAIL_ROWS = [
  { color: '#FF2D87', text: 'Saturday, 29 August 2026', icon: Calendar },
  { color: '#00B4A6', text: '08h00 – 16h00 · Empowaworx House, Randburg', icon: Clock },
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
                  {stage.shortName || stage.name}
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
              {/* Full Stage Name Header */}
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h3 style={{
                  fontFamily: "Figtree",
                  fontWeight: 300,
                  fontSize: "clamp(20px, 3vw, 32px)",
                  color: "#FFFFFF",
                  margin: "0"
                }}>
                  {activeStage.name}
                </h3>
              </div>
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
