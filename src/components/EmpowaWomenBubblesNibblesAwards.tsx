import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, ShieldCheck, Sparkles, Mic2, Star, UtensilsCrossed, Trophy, Wine } from 'lucide-react';

// --- Types ---
interface TimelineItem {
  time: string;
  title: string;
  description: string;
}
interface AwardCategory {
  id: number;
  title: string;
  quote: string;
}
interface HeroStat {
  value: string;
  suffix: string;
  caption: string;
}
interface ExperienceMoment {
  id: number;
  time: string;
  title: string;
  body: string;
  icon: string;
}

// --- Data ---
const timelineData: TimelineItem[] = [{
  time: '16:00–16:20',
  title: 'Red Carpet Arrivals & Bubbles Reception™',
  description: 'Luxury hospitality, executive media interviews, curated introductions, and red carpet photography.'
}, {
  time: '16:20–16:40',
  title: 'World-Class Entertainment Showcase™',
  description: 'Immersive cultural and entertainment experiences engineered to inspire connection.'
}, {
  time: '16:40–17:10',
  title: "CXO Fireside™ 'Power, Position & Purpose'",
  description: 'Candid high-level conversations unpacking boardroom power, governance, and strategic positioning.'
}, {
  time: '17:10–17:50',
  title: 'EmpowaWomen Leadership Awards™ Ceremony',
  description: 'Prestigious platform honors recognizing exceptional systemic impact.'
}, {
  time: '17:50–18:00',
  title: 'The Leadership Toast™',
  description: 'Raising a Glass to the Women Reshaping Africa.'
}, {
  time: '18:00–20:00',
  title: 'Bubbles & Nibbles™ Executive Networking Experience',
  description: 'Curated integration where procurement choices are initiated and capital allocation is unlocked.'
}];
const awardCategories: AwardCategory[] = [{
  id: 1,
  title: 'ICON OF POWER™',
  quote: 'She Does Not Follow History. She Shapes It.'
}, {
  id: 2,
  title: 'TRAILBLAZER AWARD™',
  quote: 'She Creates the Path Others Never Thought Possible.'
}, {
  id: 3,
  title: 'WOMAN OF THE YEAR™',
  quote: 'The Defining Leader of Her Generation.'
}, {
  id: 4,
  title: 'IMPACT LAUREATE™',
  quote: 'Her Influence Extends Beyond Industries. It Shapes Economies.'
}, {
  id: 5,
  title: 'POWER & INFLUENCE AWARD™',
  quote: 'She Shapes Markets, Influences Decisions & Commands Change.'
}, {
  id: 6,
  title: 'HUMANITARIAN VANGUARD™',
  quote: 'Leadership Rooted in Humanity, Dignity & Transformation.'
}, {
  id: 7,
  title: 'MEDIA EXCELLENCE AWARD™',
  quote: 'She Owns the Narrative. She Shapes Culture.'
}, {
  id: 8,
  title: 'SUSTAINABILITY CHAMPION™',
  quote: 'She Builds Sustainable Futures That Outlive Generations.'
}, {
  id: 9,
  title: 'LEADERSHIP LAUREATE™',
  quote: 'The Benchmark of Leadership Excellence.'
}, {
  id: 10,
  title: 'MOST PROMISING FEMALE LEADER™',
  quote: 'The Future of Leadership Is Already Rising.'
}, {
  id: 11,
  title: 'CMO EXCELLENCE AWARD™',
  quote: 'Influence Is the Most Powerful Commercial Currency.'
}, {
  id: 12,
  title: 'ALLY AWARD™',
  quote: 'Leadership That Accelerates Equity, Inclusion & Opportunity.'
}];
const heroHeadlineWords = ['Welcome', 'to', 'the', 'Most', 'Powerful', 'Room', 'in', 'the', 'Country.'];
const heroStats: HeroStat[] = [{
  value: '200',
  suffix: 'Delegates',
  caption: 'Invitation Only'
}, {
  value: '12',
  suffix: 'Awards',
  caption: 'Leadership Categories'
}, {
  value: '6',
  suffix: 'Moments',
  caption: 'Programme Highlights'
}];
const EXPERIENCE_MOMENTS: ExperienceMoment[] = [{
  id: 1,
  time: '16:00',
  title: 'Arrival Reception',
  body: 'Champagne welcome, curated networking, and live jazz as delegates arrive.',
  icon: 'Sparkles'
}, {
  id: 2,
  time: '16:45',
  title: 'Opening Ceremony',
  body: 'A powerful opening address from EmpowaWomen leadership setting the tone.',
  icon: 'Mic2'
}, {
  id: 3,
  time: '17:15',
  title: 'Keynote Address',
  body: "An intimate leadership conversation with Africa's most transformational voice.",
  icon: 'Star'
}, {
  id: 4,
  time: '17:55',
  title: 'Nibbles and Dialogue',
  body: 'Structured roundtable conversations over curated culinary experiences.',
  icon: 'UtensilsCrossed'
}, {
  id: 5,
  time: '18:30',
  title: 'Awards Ceremony',
  body: 'Twelve categories. Twelve stories of impact. One extraordinary celebration.',
  icon: 'Trophy'
}, {
  id: 6,
  time: '20:00',
  title: 'Closing Toast',
  body: 'An intimate close with the evening toast, final networking, and departures.',
  icon: 'Wine'
}];
const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={20} color="#FF2D87" />,
  Mic2: <Mic2 size={20} color="#FF2D87" />,
  Star: <Star size={20} color="#FF2D87" />,
  UtensilsCrossed: <UtensilsCrossed size={20} color="#FF2D87" />,
  Trophy: <Trophy size={20} color="#FF2D87" />,
  Wine: <Wine size={20} color="#FF2D87" />
};

// --- SECTION 1: Experience Strategy ---
const ExperienceStrategy = () => {
  return <section style={{
    position: 'relative',
    backgroundColor: '#FAF7F2',
    paddingTop: 'clamp(64px, 8vw, 128px)',
    paddingBottom: 'clamp(64px, 8vw, 128px)',
    color: '#0A0A0F',
    overflow: 'hidden'
  }}>
      {/* Heading block */}
      <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      paddingLeft: 'clamp(20px, 3.75vw, 36px)',
      paddingRight: 'clamp(20px, 3.75vw, 36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      marginBottom: '48px'
    }}>
        <motion.span initial={{
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
        fontFamily: 'Figtree',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.3em',
        color: '#FF2D87',
        textTransform: 'uppercase',
        display: 'block'
      }}>
          THE EXPERIENCE
        </motion.span>

        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.1
      }} style={{
        fontFamily: 'Figtree',
        fontSize: 'clamp(32px, 5vw, 64px)',
        fontWeight: 300,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        color: '#0A0A0F',
        margin: 0
      }}>
          Six moments. One unforgettable evening.
        </motion.h2>

        <motion.p initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        delay: 0.2
      }} style={{
        fontFamily: 'Figtree',
        fontSize: 'clamp(15px, 2vw, 18px)',
        color: 'rgba(0,0,0,0.50)',
        lineHeight: 1.75,
        maxWidth: '560px',
        margin: 0
      }}>
          Every element of the Soiree is deliberately curated to inspire, connect, and accelerate.
        </motion.p>
      </div>

      {/* Horizontal scroll rail — desktop | Vertical stack — mobile */}
      <div className="experience-scroll-container" style={{
      position: 'relative',
      marginTop: '16px'
    }}>
        <div className="experience-inner hide-scrollbar" style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        paddingLeft: 'clamp(20px, 3.75vw, 36px)',
        paddingRight: 'clamp(20px, 3.75vw, 36px)',
        paddingBottom: '2px'
      }}>
          {EXPERIENCE_MOMENTS.map(moment => <motion.div key={moment.id} initial={{
          opacity: 0,
          y: 32
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: moment.id * 0.08
        }} className="experience-card" style={{
          flexShrink: 0,
          width: 'clamp(260px, 30vw, 320px)',
          minHeight: '380px',
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderTop: moment.id === 1 ? '2px solid #FF2D87' : '2px solid rgba(0,0,0,0.08)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(24px, 3.5vw, 40px)',
          cursor: 'default',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
        }}>
              {/* Ambient number */}
              <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            fontFamily: 'Figtree',
            fontSize: '80px',
            fontWeight: 700,
            color: 'rgba(0,0,0,0.04)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none'
          }}>
                {String(moment.id).padStart(2, '0')}
              </div>

              {/* Card top */}
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
                {/* Time row */}
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
                  <span style={{
                fontFamily: 'Figtree',
                fontSize: '13px',
                fontWeight: 500,
                color: '#FF2D87',
                letterSpacing: '0.05em'
              }}>
                    {moment.time}
                  </span>
                  <div style={{
                width: '24px',
                height: '1px',
                backgroundColor: 'rgba(255,45,135,0.30)'
              }} />
                </div>

                {/* Title */}
                <h3 style={{
              fontFamily: 'Figtree',
              fontSize: 'clamp(18px, 2vw, 26px)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#0A0A0F',
              margin: 0,
              lineHeight: 1.2
            }}>
                  {moment.title}
                </h3>

                {/* Body */}
                <p style={{
              fontFamily: 'Figtree',
              fontSize: '14px',
              color: 'rgba(0,0,0,0.45)',
              lineHeight: 1.75,
              margin: 0
            }}>
                  {moment.body}
                </p>
              </div>

              {/* Card bottom: icon */}
              <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'rgba(255,45,135,0.08)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,45,135,0.15)',
            marginTop: '32px',
            flexShrink: 0
          }}>
                {iconMap[moment.icon]}
              </div>
            </motion.div>)}
        </div>
      </div>

      {/* Scroll hint — hidden on mobile */}
      <div className="experience-scroll-hint" style={{
      maxWidth: '1400px',
      margin: '0 auto',
      paddingLeft: 'clamp(20px, 3.75vw, 36px)',
      marginTop: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <ArrowRight size={14} color="rgba(0,0,0,0.25)" />
        <span style={{
        fontFamily: 'Figtree',
        fontSize: '11px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.25)'
      }}>
          Scroll to explore all moments
        </span>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }

        @media (max-width: 767px) {
          .experience-inner {
            flex-direction: column !important;
            overflow-x: visible !important;
            padding-bottom: 0 !important;
          }
          .experience-card {
            width: 100% !important;
            min-height: unset !important;
          }
          .experience-scroll-hint {
            display: none !important;
          }
        }
      `}</style>
    </section>;
};

// --- SECTION 2: Gala Timeline ---
const GalaTimeline = () => {
  return <section id="gala" style={{
    position: 'relative',
    backgroundColor: '#0D1B35',
    paddingTop: 'clamp(64px, 8vw, 128px)',
    paddingBottom: 'clamp(64px, 8vw, 128px)',
    color: '#FFFFFF',
    overflow: 'hidden'
  }}>
      {/* Background */}
      <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }}>
        <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />
        <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '100%',
        background: 'linear-gradient(to bottom, transparent 0%, #C9A84C 20%, #C9A84C 80%, transparent 100%)',
        opacity: 0.15
      }} />
      </div>

      {/* Inner */}
      <div style={{
      position: 'relative',
      zIndex: 1,
      maxWidth: '1000px',
      margin: '0 auto',
      paddingLeft: 'clamp(20px, 3.75vw, 36px)',
      paddingRight: 'clamp(20px, 3.75vw, 36px)'
    }}>
        {/* Heading block */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px',
        marginBottom: 'clamp(48px, 8vw, 96px)'
      }}>
          <motion.span initial={{
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
          fontFamily: 'Figtree',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.3em',
          color: '#C9A84C',
          textTransform: 'uppercase',
          display: 'block'
        }}>
            GALA PROGRAMME
          </motion.span>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} style={{
          fontFamily: 'Figtree',
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          margin: 0
        }}>
            The Evening, Designed.
          </motion.h2>

          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} style={{
          fontFamily: 'Figtree',
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.75,
          maxWidth: '480px',
          margin: 0
        }}>
            28 August 2026. Every moment has a purpose.
          </motion.p>
        </div>

        {/* Timeline track — desktop: alternating, mobile: single column */}
        <div className="timeline-track" style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }}>
          {/* Continuous vertical line — desktop */}
          <div className="timeline-center-line" style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(255,255,255,0.10)',
          transform: 'translateX(-50%)',
          zIndex: 0
        }} />

          {/* Left line — mobile */}
          <div className="timeline-left-line" style={{
          position: 'absolute',
          left: '20px',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: 'rgba(255,255,255,0.10)',
          zIndex: 0,
          display: 'none'
        }} />

          {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return <div key={item.time} className="timeline-item" style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: isEven ? 'row' : 'row-reverse',
            paddingTop: '48px',
            paddingBottom: '48px',
            zIndex: 1
          }}>
                {/* Content half */}
                <div className="timeline-content" style={{
              flex: 1,
              display: 'flex',
              justifyContent: isEven ? 'flex-end' : 'flex-start',
              paddingRight: isEven ? '48px' : 0,
              paddingLeft: isEven ? 0 : '48px'
            }}>
                  <motion.div initial={{
                opacity: 0,
                x: isEven ? -30 : 30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.7,
                delay: index * 0.1
              }} style={{
                maxWidth: '380px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                    {/* Time badge */}
                    <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.20)',
                  borderRadius: '999px',
                  alignSelf: 'flex-start'
                }}>
                      <Clock size={12} color="#C9A84C" />
                      <span style={{
                    fontFamily: 'Figtree',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#C9A84C'
                  }}>
                        {item.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                  fontFamily: 'Figtree',
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  margin: 0,
                  lineHeight: 1.2
                }}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                  fontFamily: 'Figtree',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.75,
                  margin: 0
                }}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty mirrored side — hidden on mobile */}
                <div className="timeline-mirror" style={{
              flex: 1
            }} />

                {/* Centre dot */}
                <div className="timeline-dot" style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '12px',
              height: '12px',
              backgroundColor: '#C9A84C',
              borderRadius: '50%',
              border: '2px solid #0D1B35',
              boxShadow: '0 0 12px rgba(201,168,76,0.60)',
              zIndex: 2
            }} />
              </div>;
        })}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .timeline-center-line { display: none !important; }
          .timeline-left-line { display: block !important; }
          .timeline-item {
            flex-direction: column !important;
            padding-top: 0 !important;
            padding-bottom: 32px !important;
            padding-left: 48px !important;
          }
          .timeline-content {
            flex: unset !important;
            width: 100% !important;
            justify-content: flex-start !important;
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
          .timeline-content > div {
            max-width: 100% !important;
            transform: none !important;
          }
          .timeline-mirror { display: none !important; }
          .timeline-dot {
            left: 20px !important;
            top: 8px !important;
            transform: translate(-50%, 0) !important;
          }
        }
      `}</style>
    </section>;
};

// --- SECTION 3: Award Categories ---
const ACCENT_COLORS: Record<number, string> = {
  0: '#B5255A',
  1: '#B5255A',
  2: '#B5255A',
  3: '#B5255A',
  4: 'rgba(255,255,255,0.06)',
  5: 'rgba(255,255,255,0.06)',
  6: 'rgba(255,255,255,0.06)',
  7: 'rgba(255,255,255,0.06)',
  8: 'rgba(181,37,90,0.35)',
  9: 'rgba(181,37,90,0.35)',
  10: 'rgba(181,37,90,0.35)',
  11: 'rgba(181,37,90,0.35)'
};
const RAISED_INDICES = new Set([0, 2, 5, 8, 11]);
const AwardCategories = () => {
  return <section id="awards" style={{
    position: 'relative',
    backgroundColor: '#111118',
    padding: 'clamp(64px, 8vw, 128px) clamp(20px, 3.75vw, 36px)',
    color: '#FFFFFF'
  }}>
      <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '64px'
    }}>
        {/* Heading */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px'
      }}>
          <motion.span initial={{
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
          fontFamily: 'Figtree',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.3em',
          color: '#FF2D87',
          textTransform: 'uppercase',
          display: 'block'
        }}>
            THE AWARDS
          </motion.span>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} style={{
          fontFamily: 'Figtree',
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#FFFFFF',
          margin: 0
        }}>
            12 Awards. Infinite Impact.
          </motion.h2>

          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} style={{
          fontFamily: 'Figtree',
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.75,
          maxWidth: '560px',
          margin: 0
        }}>
            Honouring exceptional women who are rewriting the rules of leadership, influence, and
            economic transformation.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="awards-grid">
          {awardCategories.map((award, i) => <motion.div key={award.id} initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: i % 3 * 0.1
        }} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          paddingTop: RAISED_INDICES.has(i) ? '48px' : 0
        }}>
              {/* Top accent bar */}
              <div style={{
            height: '2px',
            width: '100%',
            backgroundColor: ACCENT_COLORS[i] ?? 'rgba(255,255,255,0.06)'
          }} />

              {/* Card body */}
              <div style={{
            padding: 'clamp(20px, 3vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
                {/* Number + title */}
                <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
                  <span style={{
                fontFamily: 'Figtree',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.20)',
                textTransform: 'uppercase'
              }}>
                    {String(award.id).padStart(2, '0')}
                  </span>
                  <h3 style={{
                fontFamily: 'Figtree',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.3
              }}>
                    {award.title}
                  </h3>
                </div>

                {/* Quote block */}
                <div style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              paddingTop: '16px',
              marginTop: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
                  <span style={{
                fontFamily: 'Figtree',
                fontSize: '20px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.15)',
                lineHeight: 1
              }}>
                    "
                  </span>
                  <p style={{
                fontFamily: 'Figtree',
                fontSize: '13px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.38)',
                lineHeight: 1.65,
                margin: 0
              }}>
                    {award.quote}
                  </p>
                </div>

                {/* Nominate CTA */}
                <div style={{
              paddingTop: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderTop: '1px solid rgba(255,255,255,0.06)'
            }}>
                  <span style={{
                fontFamily: 'Figtree',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(181,37,90,0.70)'
              }}>
                    Nominate
                  </span>
                  <ArrowRight size={12} color="rgba(181,37,90,0.70)" />
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>

      <style>{`
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 1023px) {
          .awards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 599px) {
          .awards-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>;
};

// --- CTA Section ---
const CTASection = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const [ctaH1, setCtaH1] = useState(false);
  const [ctaH2, setCtaH2] = useState(false);
  return <section style={{
    backgroundColor: '#0A0A0F',
    paddingTop: 'clamp(64px, 8vw, 128px)',
    paddingBottom: 'clamp(64px, 8vw, 128px)',
    paddingLeft: 'clamp(20px, 3.75vw, 36px)',
    paddingRight: 'clamp(20px, 3.75vw, 36px)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  }}>
      {/* Background layers */}
      <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
        <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }} />
        <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, #0A0A0F 0%, transparent 20%, transparent 80%, #0A0A0F 100%)'
      }} />
        <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,45,135,0.05) 0%, transparent 70%)'
      }} />
      </div>

      <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px'
    }}>
        <motion.h2 initial={{
        opacity: 0,
        y: 24,
        filter: 'blur(12px)'
      }} whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)'
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.9,
        delay: 0.1
      }} style={{
        fontFamily: 'Figtree',
        fontSize: 'clamp(36px, 5vw, 72px)',
        fontWeight: 300,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        color: '#FFFFFF',
        margin: 0
      }}>
          Be part of the room.
        </motion.h2>

        <motion.p initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7,
        delay: 0.25
      }} style={{
        fontFamily: 'Figtree',
        fontSize: 'clamp(15px, 2vw, 18px)',
        color: 'rgba(255,255,255,0.50)',
        lineHeight: 1.75,
        maxWidth: '560px',
        margin: 0
      }}>
          Limited to 200 invitation-only guests. Corporate partnership packages available for
          organizations looking to align with excellence.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="cta-button-row" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        width: '100%'
      }}>
          <button className="cta-btn-primary" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '0 28px',
          height: '50px',
          backgroundColor: '#FF2D87',
          color: '#FFFFFF',
          fontFamily: 'Figtree',
          fontSize: '15px',
          fontWeight: 500,
          border: 'none',
          borderRadius: '999px',
          cursor: 'pointer',
          transition: 'filter 200ms',
          boxShadow: '0 0 32px rgba(255,45,135,0.25)',
          letterSpacing: '0.02em',
          filter: ctaH1 ? 'brightness(1.1)' : 'brightness(1)'
        }} onMouseEnter={() => setCtaH1(true)} onMouseLeave={() => setCtaH1(false)} onClick={scrollToForm}>
            <span>Request Executive Partnership Engagement</span>
            <ArrowRight size={16} />
          </button>
          <button className="cta-btn-secondary" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '0 28px',
          height: '50px',
          backgroundColor: ctaH2 ? 'rgba(255,255,255,0.08)' : 'transparent',
          border: ctaH2 ? '1px solid rgba(255,255,255,0.40)' : '1px solid rgba(255,255,255,0.20)',
          borderRadius: '999px',
          color: 'rgba(255,255,255,0.80)',
          fontFamily: 'Figtree',
          fontSize: '15px',
          fontWeight: 400,
          cursor: 'pointer',
          transition: 'all 200ms'
        }} onMouseEnter={() => setCtaH2(true)} onMouseLeave={() => setCtaH2(false)}>
            Nominate a Candidate
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 599px) {
          .cta-button-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100% !important;
          }
        }
      `}</style>
    </section>;
};

// --- SECTION 4: Request an Invitation Form ---
const InvitationFormSection = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [optIn, setOptIn] = useState(''); // 'Yes' or 'No'
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !company || !designation || !email || !phone || !optIn) {
      setError('Please fill in all fields to submit your request.');
      return;
    }
    setError('');
    setLoading(true);
    // Gravity Forms payload mapping:
    // Form ID: 12
    // NAME (divided into First and Last) ID: 1
    // COMPANY ID: 2
    // DESIGNATION ID: 18
    // EMAIL ID: 4
    // CELL PHONE ID: 19
    // OPT-IN ID: 19
    const payload = {
      form_id: 12,
      input_values: {
        '1.3': firstName,
        '1.6': lastName,
        '2': company,
        '18': designation,
        '4': email,
        '19': phone,
        '19_optin': optIn
      }
    };
    console.log('Submitting invitation request to Gravity Forms (ID 12):', payload);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const INPUT_STYLE: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "8px",
    padding: "14px 16px",
    fontFamily: "Figtree",
    fontSize: "14px",
    color: "#FFFFFF",
    outline: "none",
    transition: "border-color 200ms",
    boxSizing: "border-box"
  };

  const SELECT_STYLE: React.CSSProperties = {
    ...INPUT_STYLE,
    appearance: "none",
    WebkitAppearance: "none",
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "20px"
  };

  const OPTION_STYLE: React.CSSProperties = {
    backgroundColor: "#111118", // Crucial: non-white dropdown option background to prevent white-on-white text masking
    color: "#FFFFFF"
  };

  return (
    <section ref={ref} style={{
      backgroundColor: '#0A0A0F',
      paddingTop: 'clamp(64px, 8vw, 128px)',
      paddingBottom: 'clamp(64px, 8vw, 128px)',
      paddingLeft: 'clamp(20px, 3.75vw, 36px)',
      paddingRight: 'clamp(20px, 3.75vw, 36px)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle 400px at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 80%)'
        }} />
      </div>

      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Title Block */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '16px',
          marginBottom: '48px'
        }}>
          <span style={{
            fontFamily: 'Figtree',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.3em',
            color: '#C9A84C',
            textTransform: 'uppercase'
          }}>
            REQUEST AN INVITATION
          </span>
          <h2 style={{
            fontFamily: 'Figtree',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            margin: 0
          }}>
            Secure Your Seat in the Room
          </h2>
          <p style={{
            fontFamily: 'Figtree',
            fontSize: '15px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
            maxWidth: '520px',
            margin: 0
          }}>
            Strictly invitation-only. Please submit your details below for delegate vetting and confirmation by our relations team.
          </p>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(201,168,76,0.30)',
            borderRadius: '24px',
            padding: '48px 32px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(201,168,76,0.10)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(201,168,76,0.30)',
              color: '#C9A84C'
            }}>
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 style={{
                fontFamily: 'Figtree',
                fontSize: '24px',
                fontWeight: 300,
                color: '#FFFFFF',
                margin: '0 0 12px 0'
              }}>
                Invitation Request Received
              </h3>
              <p style={{
                fontFamily: 'Figtree',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.50)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '440px'
              }}>
                Thank you, {firstName}. Your request has been queued in our delegate relations system. Our team will review your application and confirm your invitation credentials within 24 hours.
              </p>
            </div>
            <button onClick={() => setSubmitted(false)} style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.60)',
              borderRadius: '999px',
              padding: '10px 28px',
              fontFamily: 'Figtree',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 200ms'
            }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '24px',
            padding: 'clamp(20px, 5vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}>
            {error && (
              <div style={{
                color: '#ff8a8a',
                fontSize: '13px',
                backgroundColor: 'rgba(255,138,138,0.06)',
                border: '1px solid rgba(255,138,138,0.20)',
                borderRadius: '8px',
                padding: '12px 16px',
                fontFamily: 'Figtree'
              }}>
                {error}
              </div>
            )}

            <div className="form-row-2col" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>First Name</label>
                <input type="text" placeholder="Jane" value={firstName} onChange={e => setFirstName(e.target.value)} style={INPUT_STYLE} onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Last Name</label>
                <input type="text" placeholder="Doe" value={lastName} onChange={e => setLastName(e.target.value)} style={INPUT_STYLE} onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'} />
              </div>
            </div>

            <div className="form-row-2col" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Company</label>
                <input type="text" placeholder="Acme Corporation" value={company} onChange={e => setCompany(e.target.value)} style={INPUT_STYLE} onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Designation</label>
                <input type="text" placeholder="Managing Director, CEO..." value={designation} onChange={e => setDesignation(e.target.value)} style={INPUT_STYLE} onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'} />
              </div>
            </div>

            <div className="form-row-2col" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Email Address</label>
                <input type="email" placeholder="jane@company.com" value={email} onChange={e => setEmail(e.target.value)} style={INPUT_STYLE} onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'} />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Cell Phone</label>
                <input type="tel" placeholder="+27 82 000 0000" value={phone} onChange={e => setPhone(e.target.value)} style={INPUT_STYLE} onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>I would like to receive information and updates relating to the EmpowaWomen Annual Summit</label>
              <select value={optIn} onChange={e => setOptIn(e.target.value)} style={SELECT_STYLE} onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'}>
                <option value="" disabled style={OPTION_STYLE}>Select an option...</option>
                <option value="Yes" style={OPTION_STYLE}>Yes</option>
                <option value="No" style={OPTION_STYLE}>No</option>
              </select>
            </div>

            <button type="submit" disabled={loading} style={{
              marginTop: '8px',
              width: '100%',
              height: '52px',
              backgroundColor: '#FF2D87',
              color: '#FFFFFF',
              fontFamily: 'Figtree',
              fontSize: '15px',
              fontWeight: 500,
              border: 'none',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'filter 200ms',
              boxShadow: '0 0 32px rgba(255,45,135,0.25)'
            }} onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}>
              {loading ? (
                <span>Processing Vetting...</span>
              ) : (
                <>
                  <span>Submit Request for Vetting</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 599px) {
          .form-row-2col {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
});

// --- Hero Section ---
const HeroSection = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const {
    scrollY
  } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], ['0%', '20%']);
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);
  return <section style={{
    position: 'relative',
    zIndex: 1,
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#0A0A0F',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '68px',
    paddingBottom: '80px'
  }}>
      {/* Film Grain Overlay */}
      <div style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 3,
      opacity: 0.04,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      backgroundSize: '256px 256px',
      animation: 'grainShift 0.8s steps(1) infinite'
    }} />

      {/* Background Image with Parallax */}
      <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
        <motion.div initial={{
        scale: 1.06,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 2.4,
        ease: 'easeOut'
      }} style={{
        position: 'absolute',
        inset: 0
      }}>
          <motion.div style={{
          y: imageY,
          position: 'absolute',
          inset: 0
        }}>
            <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=90" alt="" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
          </motion.div>
        </motion.div>
        <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,15,0.72) 0%, rgba(10,10,15,0.42) 38%, rgba(10,10,15,0.82) 100%)'
      }} />
      </div>

      {/* Content Wrapper */}
      <div style={{
      position: 'relative',
      zIndex: 10,
      width: '100%',
      maxWidth: '1400px',
      paddingLeft: 'clamp(20px, 3.75vw, 36px)',
      paddingRight: 'clamp(20px, 3.75vw, 36px)',
      paddingTop: 'clamp(80px, 10vw, 128px)',
      paddingBottom: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
        {/* Eyebrow */}
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
          <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#FF2D87',
          display: 'inline-block',
          flexShrink: 0
        }} />
          <p style={{
          fontFamily: 'Figtree',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.60)',
          margin: 0
        }}>
            3RD ANNUAL SOIREE AND LEADERSHIP AWARDS · 28 AUGUST 2026
          </p>
        </motion.div>

        {/* Headline */}
        <h1 style={{
        fontFamily: 'Figtree',
        fontWeight: 300,
        fontSize: 'clamp(40px, 8vw, 112px)',
        letterSpacing: '-0.04em',
        lineHeight: 1.0,
        color: '#FFFFFF',
        textAlign: 'center',
        margin: 0,
        marginBottom: '40px'
      }}>
          {heroHeadlineWords.map((word, i) => <motion.span key={`hero-word-${i}`} initial={{
          opacity: 0,
          filter: 'blur(12px)',
          y: 20
        }} animate={{
          opacity: 1,
          filter: 'blur(0px)',
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4 + i * 0.1,
          ease: [0.21, 0.47, 0.32, 0.98]
        }} style={{
          display: 'inline-block',
          marginRight: '0.2em'
        }}>
              {word === 'Powerful' ? <span style={{
            position: 'relative'
          }}>
                  {word}
                  <motion.span initial={{
              scaleX: 0
            }} animate={{
              scaleX: 1
            }} transition={{
              delay: 1.5,
              duration: 0.8
            }} style={{
              position: 'absolute',
              bottom: '-2px',
              left: 0,
              width: '100%',
              height: '1.5px',
              backgroundColor: '#FF2D87',
              transformOrigin: 'left',
              display: 'block'
            }} />
                </span> : word === 'Country.' ? <span>
                  Country<span style={{
              color: '#FF2D87'
            }}>.</span>
                </span> : word}
            </motion.span>)}
        </h1>

        {/* Sub-description */}
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
        fontFamily: 'Figtree',
        fontSize: 'clamp(15px, 2vw, 18px)',
        color: 'rgba(255,255,255,0.55)',
        maxWidth: '600px',
        lineHeight: 1.75,
        textAlign: 'center',
        margin: 0,
        marginBottom: '40px'
      }}>
          3rd Annual EmpowaWomen Bubbles and Nibbles Soiree and Leadership Awards.
        </motion.p>

        {/* Meta Strip */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.3
      }} className="hero-meta-strip" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '40px'
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
            <Calendar size={14} color="#FF2D87" />
            <span style={{
            fontFamily: 'Figtree',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.60)',
            letterSpacing: '0.02em'
          }}>
              28 August 2026
            </span>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
            <Clock size={14} color="#FF2D87" />
            <span style={{
            fontFamily: 'Figtree',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.60)',
            letterSpacing: '0.02em'
          }}>
              16:00 to 20:00
            </span>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
            <MapPin size={14} color="#FF2D87" />
            <span style={{
            fontFamily: 'Figtree',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.60)',
            letterSpacing: '0.02em'
          }}>
              EmpowaWorx House Johannesburg
            </span>
          </div>
        </motion.div>

        {/* Invite Notice */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 0.45
      }} transition={{
        duration: 1,
        delay: 1.6
      }} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '40px',
        textAlign: 'center',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}>
          <ShieldCheck size={14} color="#FFFFFF" style={{
          flexShrink: 0
        }} />
          <span style={{
          fontFamily: 'Figtree',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#FFFFFF'
        }}>
            Strictly Invitation-Only | Limited to 200 Female CXOs, Board Chairs, Founders, Investors
            and Policymakers
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.8
      }} className="hero-cta-row" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
        width: '100%'
      }}>
          <button className="hero-btn-primary" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '0 32px',
          height: '50px',
          backgroundColor: '#FF2D87',
          color: '#FFFFFF',
          fontFamily: 'Figtree',
          fontSize: '15px',
          fontWeight: 500,
          border: 'none',
          borderRadius: '999px',
          cursor: 'pointer',
          transition: 'filter 200ms',
          boxShadow: '0 0 32px rgba(255,45,135,0.25)',
          letterSpacing: '0.02em',
          filter: primaryHover ? 'brightness(1.1)' : 'brightness(1)'
        }} onMouseEnter={() => setPrimaryHover(true)} onMouseLeave={() => setPrimaryHover(false)} onClick={scrollToForm}>
            Request Invitation
          </button>
          <button className="hero-btn-secondary" style={{
          padding: '0 32px',
          height: '50px',
          backgroundColor: secondaryHover ? 'rgba(255,255,255,0.08)' : 'transparent',
          border: secondaryHover ? '1px solid rgba(255,255,255,0.40)' : '1px solid rgba(255,255,255,0.20)',
          borderRadius: '999px',
          color: 'rgba(255,255,255,0.80)',
          fontFamily: 'Figtree',
          fontSize: '15px',
          fontWeight: 400,
          cursor: 'pointer',
          transition: 'background-color 200ms, border-color 200ms'
        }} onMouseEnter={() => setSecondaryHover(true)} onMouseLeave={() => setSecondaryHover(false)}>
            Nominate for Award
          </button>
        </motion.div>

        {/* Hero Stats Strip */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 2.0
      }} className="hero-stats-strip" style={{
        marginTop: '56px',
        paddingTop: '40px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 0,
        width: '100%',
        maxWidth: '800px',
        alignSelf: 'center'
      }}>
          {heroStats.map((stat, i) => <div key={stat.suffix} className="hero-stat-item" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: 'clamp(20px, 4vw, 40px)',
          paddingRight: 'clamp(20px, 4vw, 40px)',
          paddingBottom: '16px',
          borderRight: i < heroStats.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none'
        }}>
              <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px'
          }}>
                <span style={{
              fontFamily: 'Figtree',
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 300,
              color: '#FFFFFF',
              letterSpacing: '-0.04em',
              lineHeight: 1.0
            }}>
                  {stat.value}
                </span>
                <span style={{
              fontFamily: 'Figtree',
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.50)',
              letterSpacing: '0.05em',
              marginLeft: '6px',
              alignSelf: 'flex-end',
              paddingBottom: '6px'
            }}>
                  {stat.suffix}
                </span>
              </div>
              <p style={{
            fontFamily: 'Figtree',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            margin: 0,
            marginTop: '8px'
          }}>
                {stat.caption}
              </p>
            </div>)}
        </motion.div>
      </div>

      <style>{`
        @keyframes grainShift {
          0%   { background-position: 0% 0%; }
          10%  { background-position: -5% -10%; }
          20%  { background-position: -15% 5%; }
          30%  { background-position: 7% -25%; }
          40%  { background-position: -5% 25%; }
          50%  { background-position: -15% 10%; }
          60%  { background-position: 15% 0%; }
          70%  { background-position: 0% 15%; }
          80%  { background-position: 3% 35%; }
          90%  { background-position: -10% 10%; }
          100% { background-position: 0% 0%; }
        }

        @media (max-width: 599px) {
          .hero-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100% !important;
            padding: 0 20px !important;
          }
          .hero-stats-strip {
            gap: 0 !important;
          }
          .hero-stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08) !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .hero-stat-item:last-child {
            border-bottom: none !important;
          }
        }

        @media (max-width: 399px) {
          .hero-meta-strip {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>;
};
export const LeadershipAwardsGala = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  void scaleX;
  return <main className="min-h-screen bg-[#0A0A0F] selection:bg-[#FF2D87]/30 selection:text-white">
      <HeroSection scrollToForm={scrollToForm} />
      <ExperienceStrategy />
      <GalaTimeline />
      <AwardCategories />
      <CTASection scrollToForm={scrollToForm} />
      <InvitationFormSection ref={formRef} />
    </main>;
};