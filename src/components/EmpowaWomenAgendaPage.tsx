import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowRight, Utensils } from 'lucide-react';

// --- Types ---
interface AgendaSession {
  num: string;
  time: string;
  type: string;
  title: string;
  description: string;
  pillarLink?: string;
  pillarLabel?: string;
  breakouts?: {
    label: string;
    href: string;
    color?: string;
  }[];
}
interface StatItem {
  value: string;
  label: string;
}
interface ChipSet {
  chips: string[];
}
interface DetailRow {
  color: string;
  text: string;
}

// --- Data ---
const SESSIONS: AgendaSession[] = [{
  num: '01',
  time: '08h00',
  type: 'OPENING',
  title: 'Registration & Welcome Coffee',
  description: 'Arrive, connect, and settle in. Registration desks open, networking begins.'
}, {
  num: '02',
  time: '09h00',
  type: 'OPENING KEYNOTE™',
  title: 'Leading Fearlessly. Accelerating Growth. Transforming Economies.',
  description: 'Setting the tone for a decade of fearless leadership and economic transformation.'
}, {
  num: '03',
  time: '09h45',
  type: 'EXECUTIVE CONVERSATIONS™',
  title: 'C-Suite Women on Scaling Power & Navigating Boards',
  description: 'C-Suite women on scaling power, navigating boards, and driving sector transformation.',
  pillarLink: "/executive-industry-series",
  pillarLabel: "Executive Series"
}, {
  num: '04',
  time: '10h30',
  type: 'WOMEN ON BOARDS & GOVERNANCE™',
  title: 'Boardroom Strategies, NED Pathways & Governance Excellence',
  description: 'NED pathways, boardroom strategy, and governance excellence for the next generation of directors.',
  pillarLink: "/leadership-governance-boards",
  pillarLabel: "Boards & Governance"
}, {
  num: '05',
  time: '11h15',
  type: 'ENTREPRENEURSHIP & FUNDING INSIGHTS™',
  title: 'Capital Pathways, Investor Roundtables & Scaling Frameworks',
  description: 'Capital pathways, investor roundtables, and frameworks for scaling women-led enterprises.',
  pillarLink: "/entrepreneurship-funding",
  pillarLabel: "Funding & Scaling"
}, {
  num: '06',
  time: '13h20',
  type: 'LEADERSHIP MASTERCLASS BREAKOUTS™',
  title: 'Choose Your Stage: Tech & AI / Green Economy / Finance / Media',
  description: 'Deep-dive tactical playbooks across four sector stages.',
  breakouts: [
    { label: "Green Economy", href: "/green-economy", color: "#00B4A6" },
    { label: "Creative Economy", href: "/creative-economy", color: "#6D28D9" },
    { label: "Funding & Finance", href: "/entrepreneurship-funding", color: "#D97706" },
    { label: "Media & Comms", href: "/communications-media", color: "#FF2D87" }
  ]
}, {
  num: '07',
  time: '14h30',
  type: 'HIGH-IMPACT BUSINESS MATCHMAKING™',
  title: 'Structured 1-on-1 Meetings with Investors & Corporates',
  description: 'Structured meetings with investors, corporates, and ecosystem partners. Deals are made here.',
  pillarLink: "/partnerships",
  pillarLabel: "Corporate Partnerships"
}, {
  num: '08',
  time: '15h15',
  type: 'CLOSING KEYNOTE & AWARDS™',
  title: 'Celebrating Women Transforming Economies',
  description: 'Celebrating women who are transforming industries, economies, and societies. Legacy in the making.',
  pillarLink: "/leadership-awards-gala",
  pillarLabel: "Awards Gala"
}, {
  num: '09',
  time: '15h50',
  type: 'SUMMIT CLOSE™',
  title: 'Evening Connections',
  description: 'The conversations continue. Informal networking close and delegate farewell.'
}];

const MORNING_SESSIONS = SESSIONS.slice(0, 5);
const AFTERNOON_SESSIONS = SESSIONS.slice(5);
const TIME_COLORS = ['#FF2D87', '#00B4A6', '#D97706'];

const DETAIL_ROWS: DetailRow[] = [{
  color: '#FF2D87',
  text: 'Saturday, 29 August 2026'
}, {
  color: '#00B4A6',
  text: '08h00 – 16h00 · The Forum, Bryanston'
}, {
  color: '#D97706',
  text: 'R1,500 per Delegate'
}];

const STATS_RIGHT: StatItem[] = [{
  value: '08h00',
  label: 'Doors Open'
}, {
  value: '16h00',
  label: 'Summit Close'
}];

const SESSION_CHIPS: ChipSet[] = [{
  chips: ['Welcome Coffee', 'Registration Opens 08h00']
}, {
  chips: ['Main Stage', 'Keynote Address', 'Opening Ceremony']
}, {
  chips: ['Panel Conversation', 'C-Suite Leaders']
}, {
  chips: ['Board Readiness', 'Governance', 'NED Pathways']
}, {
  chips: ['Investors Present', 'Capital Access', 'Enterprise Funding']
}, {
  chips: ['Breakout Rooms', 'Choose Your Stage', '4 Streams']
}, {
  chips: ['Deals Made Here', '1-on-1 Meetings', 'Investor Matchmaking']
}, {
  chips: ['Awards Ceremony', 'Legacy Recognition', 'Main Stage']
}, {
  chips: ['Evening Close', 'Open Networking']
}];

const EASE_CUSTOM: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function getAccentColor(globalIndex: number): string {
  return TIME_COLORS[globalIndex % 3];
}

function getGlowForSession(activeSession: string | null): string {
  if (activeSession === null) {
    return 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,45,135,0.04) 0%, transparent 70%)';
  }
  const idx = SESSIONS.findIndex(s => s.num === activeSession);
  const accent = getAccentColor(idx);
  if (accent === '#FF2D87') {
    return 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,45,135,0.07) 0%, transparent 70%)';
  }
  if (accent === '#00B4A6') {
    return 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,180,166,0.07) 0%, transparent 70%)';
  }
  return 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(217,119,6,0.07) 0%, transparent 70%)';
}

// --- Session Row Sub-component ---
interface SessionRowProps {
  session: AgendaSession;
  indexInBlock: number;
  globalIndex: number;
  isActive: boolean;
  onToggle: (num: string) => void;
}

const SessionRow = ({
  session,
  indexInBlock,
  globalIndex,
  isActive,
  onToggle
}: SessionRowProps) => {
  const accentColor = getAccentColor(globalIndex);
  const chipSet = SESSION_CHIPS[globalIndex];
  const isKeynote = session.num === '02';

  return <motion.div initial={{
    opacity: 0,
    y: 16,
    filter: 'blur(6px)'
  }} whileInView={{
    opacity: 1,
    y: 0,
    filter: 'blur(0px)'
  }} transition={{
    duration: 0.5,
    delay: indexInBlock * 0.07,
    ease: EASE_CUSTOM
  }} viewport={{
    once: true,
    margin: '-30px'
  }} style={{
    position: 'relative',
    cursor: 'pointer'
  }} onClick={() => onToggle(session.num)}>
      <motion.div layout whileHover={{
      backgroundColor: 'rgba(255,255,255,0.018)'
    }} transition={{
      duration: 0.2
    }} style={{
      borderRadius: '4px',
      marginLeft: '-4px',
      marginRight: '-4px',
      paddingLeft: '4px',
      paddingRight: '4px',
      position: 'relative',
      overflow: 'hidden'
    }}>
        {/* Left active indicator bar */}
        <motion.div animate={{
        scaleY: isActive ? 1 : 0,
        backgroundColor: accentColor
      }} initial={{
        scaleY: 0
      }} transition={{
        duration: 0.3
      }} style={{
        position: 'absolute',
        left: '4px',
        top: 0,
        bottom: 0,
        width: '3px',
        transformOrigin: 'top',
        borderRadius: '0 2px 2px 0',
        zIndex: 2
      }} />

        {/* Ghost session number */}
        <motion.div animate={{
        opacity: isActive ? 0.06 : 0.03,
        scale: isActive ? 1.1 : 1.0
      }} transition={{
        duration: 0.3
      }} style={{
        position: 'absolute',
        right: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        fontSize: 'clamp(48px,8vw,80px)',
        fontWeight: 200,
        color: 'white',
        letterSpacing: '-0.05em',
        lineHeight: 1,
        userSelect: 'none',
        zIndex: 1
      }}>
          {session.num}
        </motion.div>

        {/* Main row content */}
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '24px',
        paddingRight: '16px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        zIndex: 3
      }}>
          {/* TIME */}
          <div style={{
          width: '72px',
          flexShrink: 0
        }}>
            <motion.span animate={{
            color: isActive ? accentColor : 'rgba(255,255,255,0.40)'
          }} transition={{
            duration: 0.3
          }} style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            fontFamily: 'Figtree, sans-serif',
            display: 'block'
          }}>
              {session.time}
            </motion.span>
          </div>

          {/* Divider */}
          <div style={{
          width: '1px',
          height: '32px',
          backgroundColor: 'rgba(255,255,255,0.07)',
          flexShrink: 0,
          marginLeft: '16px',
          marginRight: '16px'
        }} />

          {/* Session num */}
          <div style={{
          width: '28px',
          flexShrink: 0
        }}>
            <span style={{
            fontSize: '10px',
            fontWeight: 200,
            color: 'rgba(255,255,255,0.12)',
            letterSpacing: '0.12em'
          }}>
              {session.num}
            </span>
          </div>

          {/* Content */}
          <div style={{
          flex: 1,
          paddingLeft: '16px',
          paddingRight: '16px'
        }}>
            <motion.span animate={{
            color: isActive ? accentColor : 'rgba(255,255,255,0.25)'
          }} transition={{
            duration: 0.3
          }} style={{
            textTransform: 'uppercase',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            display: 'block',
            marginBottom: '4px'
          }}>
              {session.type}
            </motion.span>
            <motion.span animate={{
            color: isActive ? 'white' : 'rgba(255,255,255,0.75)'
          }} transition={{
            duration: 0.3
          }} style={{
            fontSize: 'clamp(13px,1.8vw,15px)',
            fontWeight: isActive ? 500 : 400,
            lineHeight: 1.35,
            display: 'block'
          }}>
              {session.title}
            </motion.span>
          </div>

          {/* Expand indicator */}
          <div style={{
          width: '32px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <motion.div animate={{
            rotate: isActive ? 45 : 0
          }} transition={{
            duration: 0.3,
            ease: EASE_CUSTOM
          }} style={{
            position: 'relative',
            width: '14px',
            height: '14px'
          }}>
              {/* Horizontal bar */}
              <motion.div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '14px',
              height: '1.5px',
              backgroundColor: 'rgba(255,255,255,0.25)',
              transform: 'translateY(-50%)'
            }} />
              {/* Vertical bar */}
              <motion.div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: '1.5px',
              height: '14px',
              backgroundColor: 'rgba(255,255,255,0.25)',
              transform: 'translateX(-50%)'
            }} />
            </motion.div>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isActive && <motion.div key="expanded" initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.4,
          ease: EASE_CUSTOM
        }} style={{
          overflow: 'hidden'
        }}>
              <div style={{
            position: 'relative',
            paddingLeft: '24px',
            paddingRight: '16px',
            paddingBottom: '32px',
            paddingTop: '0'
          }}>
                {/* Left glow line */}
                <div style={{
              position: 'absolute',
              left: '7px',
              top: 0,
              bottom: '20px',
              width: '1px',
              background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
              opacity: 0.4,
              borderRadius: '2px'
            }} />

                {/* Content */}
                <div style={{
              marginLeft: '40px'
            }}>
                  <motion.p initial={{
                opacity: 0,
                y: 8
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.1,
                duration: 0.35
              }} style={{
                color: 'rgba(255,255,255,0.60)',
                fontSize: '14px',
                lineHeight: 1.85,
                margin: '0 0 20px 0'
              }}>
                    {session.description}
                  </motion.p>

                  <motion.div initial={{
                opacity: 0,
                y: 6
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2,
                duration: 0.35
              }} style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                    {chipSet.chips.map((chip, ci) => <motion.span key={chip} initial={{
                  opacity: 0,
                  scale: 0.92
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: ci * 0.05,
                  duration: 0.25
                }} style={{
                  backgroundColor: `${accentColor}14`,
                  border: `1px solid ${accentColor}40`,
                  borderRadius: '50px',
                  padding: '4px 12px',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: accentColor,
                  letterSpacing: '0.08em',
                  display: 'inline-block'
                }}>
                        {chip}
                      </motion.span>)}
                  </motion.div>

                  {/* Growth Pillar Routing Integration */}
                  {session.pillarLink && (
                    <div style={{ marginTop: "20px" }}>
                      <RouterLink
                        to={session.pillarLink}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "5px 14px",
                          borderRadius: "999px",
                          backgroundColor: "rgba(255, 45, 135, 0.08)",
                          border: "1px solid rgba(255, 45, 135, 0.2)",
                          color: "#FF2D87",
                          fontSize: "11px",
                          fontFamily: "Figtree, sans-serif",
                          fontWeight: 500,
                          textDecoration: "none",
                          transition: "all 250ms ease"
                        }}
                        onMouseEnter={e => {
                          const target = e.currentTarget as HTMLAnchorElement;
                          target.style.backgroundColor = "#FF2D87";
                          target.style.color = "#FFFFFF";
                          target.style.boxShadow = "0 0 16px rgba(255,45,135,0.3)";
                        }}
                        onMouseLeave={e => {
                          const target = e.currentTarget as HTMLAnchorElement;
                          target.style.backgroundColor = "rgba(255, 45, 135, 0.08)";
                          target.style.color = "#FF2D87";
                          target.style.boxShadow = "none";
                        }}
                      >
                        <span>View Programme: {session.pillarLabel}</span>
                        <ArrowRight size={12} />
                      </RouterLink>
                    </div>
                  )}

                  {/* Masterclass Breakout Sub-Tracks */}
                  {session.breakouts && (
                    <div style={{
                      marginTop: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}>
                      <span style={{
                        fontFamily: "Figtree, sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.30)",
                        textTransform: "uppercase"
                      }}>
                        Select a masterclass track to view details:
                      </span>
                      <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px"
                      }}>
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
                              fontFamily: "Figtree, sans-serif",
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

                  {isKeynote && <a href="#" onClick={e => e.preventDefault()} style={{
                color: accentColor,
                fontSize: '12px',
                fontWeight: 600,
                marginTop: '16px',
                display: 'block',
                textDecoration: 'none',
                opacity: 1,
                transition: 'opacity 0.2s'
              }} onMouseEnter={e => e.currentTarget.style.opacity = '0.8'} onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      Secure Your Seat — R1,500 →
                    </a>}
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </motion.div>
    </motion.div>;
};

// --- Block Label Sub-component ---
interface BlockLabelProps {
  label: string;
  pill: string;
  pillColor: string;
  lineColor: string;
  textColor: string;
}

const BlockLabel = ({
  label,
  pill,
  pillColor,
  lineColor,
  textColor
}: BlockLabelProps) => <motion.div initial={{
  opacity: 0,
  x: -16
}} whileInView={{
  opacity: 1,
  x: 0
}} transition={{
  duration: 0.5
}} viewport={{
  once: true
}} style={{
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '12px',
  marginTop: '16px'
}}>
    <div style={{
    flex: 1,
    height: '1px',
    background: `linear-gradient(to right, ${lineColor}, transparent)`
  }} />
    <span style={{
    textTransform: 'uppercase',
    fontSize: '9px',
    fontWeight: 700,
    letterSpacing: '0.28em',
    color: textColor,
    flexShrink: 0
  }}>
      {label}
    </span>
    <span style={{
    fontSize: '9px',
    letterSpacing: '0.15em',
    color: pillColor,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: '20px',
    padding: '4px 12px',
    flexShrink: 0
  }}>
      {pill}
    </span>
  </motion.div>;

// --- Main Component ---
export const EmpowaWomenAgendaPage: React.FC = () => {
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const handleToggle = (num: string) => {
    setActiveSession(prev => prev === num ? null : num);
  };
  const computedGlow = getGlowForSession(activeSession);

  return <section style={{
    backgroundColor: "#0A0A0F",
    backgroundImage: "url('https://empowawomen.co.za/wp-content/uploads/2025/06/34706.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: 10,
    position: "relative",
    overflow: "hidden"
  }} className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(10,10,15,0.94)",
        zIndex: 1
      }} />

      {/* Confined Ambient glow layer */}
      <motion.div animate={{
        background: computedGlow
      }} transition={{
        duration: 0.8
      }} style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2
      }} />

      <div className="max-w-5xl mx-auto" style={{
        position: "relative",
        zIndex: 3
      }}>
        {/* Section header */}
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-80px"
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }} className="mb-14" style={{ textAlign: 'center' }}>
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
            SUMMIT AGENDA
          </span>
          <h2 style={{
            fontFamily: "Figtree",
            fontWeight: 300,
            fontSize: "clamp(26px, 4.5vw, 60px)",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 16px 0"
          }}>
            A Day Designed for Impact
          </h2>

          {/* Event details strip */}
          <div style={{
            marginTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {DETAIL_ROWS.map(row => <div key={row.text} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '50px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 500
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: row.color,
                flexShrink: 0
              }} />
              <span style={{ color: 'white' }}>{row.text}</span>
            </div>)}
          </div>

          {/* Session dot tracker */}
          <div style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {SESSIONS.map((session, i) => {
              const accentColor = getAccentColor(i);
              const isActiveDot = activeSession === session.num;
              return <React.Fragment key={session.num}>
                {i === 5 && <div style={{
                  width: '20px',
                  height: '1px',
                  backgroundColor: 'rgba(0,180,166,0.30)',
                  alignSelf: 'center',
                  flexShrink: 0
                }} />}
                <motion.button onClick={() => handleToggle(session.num)} title={session.time} animate={{
                  scale: isActiveDot ? 1.5 : 1,
                  backgroundColor: isActiveDot ? accentColor : 'rgba(255,255,255,0.15)',
                  boxShadow: isActiveDot ? `0 0 8px ${accentColor}` : 'none'
                }} transition={{
                  duration: 0.2
                }} style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.10)',
                  cursor: 'pointer',
                  padding: 0,
                  outline: 'none',
                  flexShrink: 0,
                  display: 'block',
                  background: 'none'
                }} />
              </React.Fragment>;
            })}
          </div>
        </motion.div>

        {/* Agenda list */}
        <div className="max-w-3xl mx-auto" style={{ paddingBottom: '32px' }}>
          {/* MORNING BLOCK LABEL */}
          <BlockLabel label="MORNING SESSIONS" pill="08h00 – 12h00" pillColor="rgba(255,255,255,0.25)" lineColor="#FF2D87" textColor="rgba(255,45,135,0.60)" />

          {MORNING_SESSIONS.map((session, i) => <SessionRow key={session.num} session={session} indexInBlock={i} globalIndex={i} isActive={activeSession === session.num} onToggle={handleToggle} />)}

          {/* LUNCH DIVIDER */}
          <motion.div initial={{
            opacity: 0,
            scaleX: 0.96
          }} whileInView={{
            opacity: 1,
            scaleX: 1
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} style={{
            margin: '12px 0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              backgroundColor: 'rgba(0,180,166,0.06)',
              border: '1px solid rgba(0,180,166,0.20)',
              padding: '16px 24px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px'
            }}>
              {/* Left glow line */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '3px',
                backgroundColor: '#00B4A6'
              }} />
              <Utensils size={14} color="#00B4A6" style={{
                flexShrink: 0,
                marginLeft: '12px'
              }} />
              <span style={{
                color: 'white',
                fontWeight: 500,
                fontSize: '15px',
                flexShrink: 0,
                marginLeft: '12px'
              }}>
                12h50
              </span>
              <div style={{
                width: '1px',
                height: '18px',
                backgroundColor: 'rgba(0,180,166,0.25)',
                flexShrink: 0,
                marginLeft: '12px',
                marginRight: '12px'
              }} />
              <span style={{
                color: 'white',
                fontWeight: 400,
                fontSize: '14px',
                flexShrink: 0
              }}>
                Executive Networking Lunch™
              </span>
              <span style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: '12px',
                flex: 1,
                marginLeft: '4px'
              }} className="hidden md:inline">
                — Cultivating Partnerships, Investment & Sustainable Growth
              </span>
              <span style={{
                backgroundColor: 'rgba(0,180,166,0.15)',
                border: '1px solid rgba(0,180,166,0.35)',
                borderRadius: '50px',
                padding: '4px 12px',
                fontSize: '9px',
                color: '#00B4A6',
                fontWeight: 700,
                letterSpacing: '0.15em',
                flexShrink: 0,
                marginLeft: '12px'
              }}>
                INCLUDED ✔
              </span>
            </div>
          </motion.div>

          {/* AFTERNOON BLOCK LABEL */}
          <BlockLabel label="AFTERNOON SESSIONS" pill="13h20 – 16h00" pillColor="rgba(255,255,255,0.25)" lineColor="#D97706" textColor="rgba(217,119,6,0.60)" />

          {AFTERNOON_SESSIONS.map((session, i) => <SessionRow key={session.num} session={session} indexInBlock={i} globalIndex={i + 5} isActive={activeSession === session.num} onToggle={handleToggle} />)}
        </div>

        {/* 3-stat footer row */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '48px',
          maxWidth: '896px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '40px'
          }} className="sm:flex-row sm:items-end">
            {/* LEFT: Ghost big number */}
            <motion.div initial={{
              opacity: 0,
              scale: 0.88
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.9,
              ease: EASE_CUSTOM
            }} viewport={{
              once: true
            }} style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 0,
              lineHeight: 1,
              overflow: 'hidden'
            }}>
              <span style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 200,
                fontSize: 'clamp(96px,16vw,160px)',
                letterSpacing: '-0.07em',
                lineHeight: 0.9,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                9
              </span>
              <span style={{
                fontFamily: "'Figtree', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(20px,3vw,32px)',
                letterSpacing: '-0.02em',
                color: 'white',
                marginLeft: '16px',
                marginRight: '12px',
                alignSelf: 'flex-end'
              }}>
                Sessions
              </span>
            </motion.div>

            {/* RIGHT: Two stat blocks */}
            <div style={{
              display: 'flex',
              gap: '48px',
              alignItems: 'flex-end'
            }} className="sm:gap-16">
              {STATS_RIGHT.map((stat, i) => <React.Fragment key={stat.value}>
                {i > 0 && <div style={{
                  width: '1px',
                  height: '40px',
                  backgroundColor: 'rgba(255,255,255,0.10)',
                  alignSelf: 'center',
                  flexShrink: 0
                }} />}
                <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: i * 0.15
                }} viewport={{
                  once: true
                }} style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <span style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontWeight: 200,
                    fontSize: 'clamp(32px,5vw,52px)',
                    letterSpacing: '-0.04em',
                    color: 'white',
                    lineHeight: 1
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontSize: '9px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.24em',
                    color: 'rgba(255,255,255,0.25)',
                    marginTop: '8px',
                    display: 'block'
                  }}>
                    {stat.label}
                  </span>
                </motion.div>
              </React.Fragment>)}
            </div>
          </div>

          {/* Tagline */}
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} viewport={{
            once: true
          }} style={{
            marginTop: '40px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.06)'
          }}>
            <p style={{
              fontStyle: 'italic',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.20)',
              textAlign: 'center',
              margin: 0
            }}>
              Lead Fearlessly. · Accelerate Growth. · Transform Economies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
