import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  title: 'Red Carpet Arrivals & Bubbles Reception',
  description: 'Luxury hospitality, executive media interviews, curated introductions, and red carpet photography.'
}, {
  time: '16:20–16:40',
  title: 'World-Class Entertainment Showcase',
  description: 'Immersive cultural and entertainment experiences engineered to inspire connection.'
}, {
  time: '16:40–17:10',
  title: "CXO Fireside 'Power, Position & Purpose'",
  description: 'Candid high-level conversations unpacking boardroom power, governance, and strategic positioning.'
}, {
  time: '17:10–17:50',
  title: 'EmpowaWomen Leadership Awards Ceremony',
  description: 'Prestigious platform honors recognizing exceptional systemic impact.'
}, {
  time: '17:50–18:00',
  title: 'The Leadership Toast',
  description: 'Raising a Glass to the Women Reshaping Africa.'
}, {
  time: '18:00–20:00',
  title: 'Bubbles & Nibbles Executive Networking Experience',
  description: 'Curated integration where procurement choices are initiated and capital allocation is unlocked.'
}];
const awardCategories: AwardCategory[] = [{
  id: 1,
  title: 'ICON OF POWER',
  quote: 'She Does Not Follow History. She Shapes It.'
}, {
  id: 2,
  title: 'TRAILBLAZER AWARD',
  quote: 'She Creates the Path Others Never Thought Possible.'
}, {
  id: 3,
  title: 'WOMAN OF THE YEAR',
  quote: 'The Defining Leader of Her Generation.'
}, {
  id: 4,
  title: 'IMPACT LAUREATE',
  quote: 'Her Influence Extends Beyond Industries. It Shapes Economies.'
}, {
  id: 5,
  title: 'POWER & INFLUENCE AWARD',
  quote: 'She Shapes Markets, Influences Decisions & Commands Change.'
}, {
  id: 6,
  title: 'HUMANITARIAN VANGUARD',
  quote: 'Leadership Rooted in Humanity, Dignity & Transformation.'
}, {
  id: 7,
  title: 'MEDIA EXCELLENCE AWARD',
  quote: 'She Owns the Narrative. She Shapes Culture.'
}, {
  id: 8,
  title: 'SUSTAINABILITY CHAMPION',
  quote: 'She Builds Sustainable Futures That Outlive Generations.'
}, {
  id: 9,
  title: 'LEADERSHIP LAUREATE',
  quote: 'The Benchmark of Leadership Excellence.'
}, {
  id: 10,
  title: 'MOST PROMISING FEMALE LEADER',
  quote: 'The Future of Leadership Is Already Rising.'
}, {
  id: 11,
  title: 'CMO EXCELLENCE AWARD',
  quote: 'Influence Is the Most Powerful Commercial Currency.'
}, {
  id: 12,
  title: 'ALLY AWARD',
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
          Saturday, 29 August 2026. Every moment has a purpose.
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
const CTASection = ({ scrollToForm }: { scrollToForm: (nominateOption?: 'Yes' | 'No') => void }) => {
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
        <Link to="/partnerships" className="cta-btn-primary" style={{
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
          textDecoration: 'none',
          filter: ctaH1 ? 'brightness(1.1)' : 'brightness(1)'
        }} onMouseEnter={() => setCtaH1(true)} onMouseLeave={() => setCtaH1(false)}>
          <span>Request Executive Partnership Engagement</span>
          <ArrowRight size={16} />
        </Link>
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
        }} onMouseEnter={() => setCtaH2(true)} onMouseLeave={() => setCtaH2(false)} onClick={() => scrollToForm('Yes')}>
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
// --- SECTION 4: Request an Invitation Form ---
const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "16px",
    padding: "clamp(20px, 4vw, 32px)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
  }}>
    <h3 style={{
      fontFamily: "Figtree",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      color: "#C9A84C",
      textTransform: "uppercase",
      margin: 0,
      borderBottom: "1px solid rgba(201,168,76,0.15)",
      paddingBottom: "12px"
    }}>
      {title}
    </h3>
    {children}
  </div>
);

const CustomCheckbox = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
  <label style={{
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    cursor: "pointer",
    userSelect: "none",
    fontFamily: "Figtree",
    fontSize: "14px",
    color: checked ? "#FFFFFF" : "rgba(255,255,255,0.6)",
    transition: "color 200ms ease"
  }}>
    <span onClick={onChange} style={{
      width: "18px",
      height: "18px",
      borderRadius: "4px",
      border: "1px solid rgba(255,255,255,0.2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: checked ? "#FF2D87" : "transparent",
      borderColor: checked ? "#FF2D87" : "rgba(255,255,255,0.2)",
      transition: "all 200ms ease",
      marginTop: "2px",
      flexShrink: 0
    }}>
      {checked && (
        <span style={{
          width: "4px",
          height: "8px",
          border: "solid white",
          borderWidth: "0 2px 2px 0",
          transform: "rotate(45deg)",
          display: "block",
          marginTop: "-2px"
        }} />
      )}
    </span>
    <span onClick={onChange} style={{ lineHeight: 1.4 }}>{label}</span>
  </label>
);

const CustomRadio = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
  <label style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    userSelect: "none",
    fontFamily: "Figtree",
    fontSize: "14px",
    color: checked ? "#FFFFFF" : "rgba(255,255,255,0.6)",
    transition: "color 200ms ease"
  }}>
    <span onClick={onChange} style={{
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      borderColor: checked ? "#C9A84C" : "rgba(255,255,255,0.2)",
      transition: "all 200ms ease",
      flexShrink: 0
    }}>
      {checked && (
        <span style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#C9A84C",
          display: "block"
        }} />
      )}
    </span>
    <span onClick={onChange}>{label}</span>
  </label>
);

const LEADERSHIP_ROLES = [
  "Chief Executive Officer (CEO)",
  "Founder / Entrepreneur",
  "Board Chairperson",
  "Executive Director",
  "Non-Executive Director",
  "Investor / Venture Capital Executive",
  "Government Executive",
  "C-Suite Executive (CFO, COO, CIO, CHRO, CMO, etc.)",
  "Media Executive",
  "Professional Services Leader",
  "Other"
];

const EMPLOYEE_SCALES = [
  "1–10",
  "11–50",
  "51–250",
  "251–1,000",
  "1,000+"
];

const STRATEGIC_INTERESTS_LIST = [
  "Executive Networking & Relationship Capital",
  "Strategic Partnerships & Alliances",
  "Investment & Capital Opportunities",
  "Procurement & Supply Chain Opportunities",
  "Market Expansion & Growth",
  "Board & Governance Opportunities",
  "Thought Leadership & Industry Influence",
  "Brand Positioning & Visibility",
  "Policy & Public Sector Engagement",
  "Innovation & Future Economy Insights",
  "Women Leadership Advancement",
  "Enterprise Development Opportunities"
];

const MATCHMAKING_STAKEHOLDERS_LIST = [
  "Corporate Leaders & Decision-Makers",
  "Board Chairs & Directors",
  "Investors & Venture Capital Leaders",
  "Development Finance Institutions (DFIs)",
  "Government Leaders & Policymakers",
  "Women Entrepreneurs & Founders",
  "Media & Communications Executives",
  "Industry Influencers & Thought Leaders",
  "Strategic Partners & Ecosystem Builders"
];

const DECLARATION_ITEMS_LIST = [
  "The EmpowaWomen Bubbles & Nibbles Soirée & Leadership Awards is an invitation-only executive platform.",
  "Submission of this form constitutes an expression of interest and does not guarantee attendance.",
  "All applications are reviewed by the EmpowaWomen Executive Selection Committee.",
  "Participation is based on leadership influence, strategic relevance, executive standing, and ecosystem value.",
  "Approved guests will receive a formal invitation and confirmation from the EmpowaWomen Executive Office."
];

interface InvitationFormSectionProps {
  initialNominate?: string;
}

const InvitationFormSection = React.forwardRef<HTMLDivElement, InvitationFormSectionProps>((props, ref) => {
  const { initialNominate } = props;
  // Executive Information
  const [fullName, setFullName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [title, setTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [website, setWebsite] = useState('');

  // Leadership Profile
  const [leadershipRole, setLeadershipRole] = useState('');
  const [otherRoleText, setOtherRoleText] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');

  // Strategic Interests
  const [strategicInterests, setStrategicInterests] = useState<string[]>([]);

  // Executive Matchmaking
  const [matchmakingStakeholders, setMatchmakingStakeholders] = useState<string[]>([]);

  // Leadership Impact Statement
  const [impactStatement, setImpactStatement] = useState('');

  // Awards & Recognition
  const [awardsInfo, setAwardsInfo] = useState(''); // 'Yes' or 'No'
  const [nominateLeader, setNominateLeader] = useState(''); // 'Yes' or 'No'

  // Executive Declaration
  const [declaration1, setDeclaration1] = useState(false);
  const [declaration2, setDeclaration2] = useState(false);
  const [declaration3, setDeclaration3] = useState(false);
  const [declaration4, setDeclaration4] = useState(false);
  const [declaration5, setDeclaration5] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (initialNominate) {
      setNominateLeader(initialNominate);
      if (initialNominate === 'Yes') {
        setAwardsInfo('Yes');
      } else {
        setAwardsInfo('No');
      }
    }
  }, [initialNominate]);

  const wordCount = impactStatement.trim() === '' ? 0 : impactStatement.trim().split(/\s+/).length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !organisation || !title || !industry || !mobile || !email) {
      setError('Please fill in all required fields in the Executive Information section.');
      return;
    }
    if (!leadershipRole) {
      setError('Please select the category that best describes your current leadership role.');
      return;
    }
    if (leadershipRole === 'Other' && !otherRoleText.trim()) {
      setError('Please specify your other leadership role.');
      return;
    }
    if (strategicInterests.length === 0) {
      setError('Please select at least one Strategic Interest.');
      return;
    }
    if (!impactStatement.trim()) {
      setError('Please provide your Leadership Impact Statement.');
      return;
    }
    if (wordCount > 200) {
      setError('Your Leadership Impact Statement exceeds the 200-word limit.');
      return;
    }
    if (!awardsInfo || !nominateLeader) {
      setError('Please answer the Awards & Recognition questions.');
      return;
    }
    if (!declaration1 || !declaration2 || !declaration3 || !declaration4 || !declaration5) {
      setError('Please read and check all items in the Executive Declaration to submit your expression of interest.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          form_id: 12,
          input_values: {
            'input_21': fullName,
            'input_2': organisation,
            'input_18': title,
            'input_22': industry,
            'input_19': mobile,
            'input_4': email,
            'input_23': linkedin || 'Not Provided',
            'input_24': website || 'Not Provided',
            'input_27': leadershipRole === 'Other' ? `Other: ${otherRoleText}` : leadershipRole,
            'input_28': employeeCount || 'Not Provided',
            'input_30': strategicInterests.join(', '),
            'input_29': matchmakingStakeholders.join(', '),
            'input_31': impactStatement,
            'input_32': awardsInfo,
            'input_33': nominateLeader,
            'input_34': 'Accepted'
          }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit expression of interest.');
      }

      setLoading(false);
      setSubmitted(true);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || 'An error occurred while submitting. Please try again.');
    }
  };

  const INPUT_STYLE: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    padding: "14px 16px",
    fontFamily: "Figtree",
    fontSize: "14px",
    color: "#FFFFFF",
    outline: "none",
    transition: "all 200ms ease",
    boxSizing: "border-box"
  };

  const toggleInterest = (interest: string) => {
    if (strategicInterests.includes(interest)) {
      setStrategicInterests(strategicInterests.filter(i => i !== interest));
    } else {
      setStrategicInterests([...strategicInterests, interest]);
    }
  };

  const toggleStakeholder = (stakeholder: string) => {
    if (matchmakingStakeholders.includes(stakeholder)) {
      setMatchmakingStakeholders(matchmakingStakeholders.filter(s => s !== stakeholder));
    } else {
      setMatchmakingStakeholders([...matchmakingStakeholders, stakeholder]);
    }
  };

  return (
    <section ref={ref} id="invitation-form-section" style={{
      backgroundColor: '#0A0A0F',
      paddingTop: 'clamp(64px, 8vw, 128px)',
      paddingBottom: 'clamp(64px, 8vw, 128px)',
      paddingLeft: 'clamp(20px, 3.75vw, 36px)',
      paddingRight: 'clamp(20px, 3.75vw, 36px)',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
      {/* Background radial overlay */}
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
          background: 'radial-gradient(circle 500px at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 80%)'
        }} />
      </div>

      <div style={{
        maxWidth: '1200px',
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
          marginBottom: '64px'
        }}>
          <span style={{
            fontFamily: 'Figtree',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.3em',
            color: '#C9A84C',
            textTransform: 'uppercase'
          }}>
            EXECUTIVE REGISTRATION
          </span>
          <h2 style={{
            fontFamily: 'Figtree',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            margin: 0
          }}>
            Expression of Interest Soirée &amp; Awards
          </h2>
          <p style={{
            fontFamily: 'Figtree',
            fontSize: '15px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: 0
          }}>
            Strictly invitation-only. Please submit your executive profile below to express interest in participating in this high-level room.
          </p>
        </div>

        {/* Two-Column Form and Sidebar Grid */}
        <div className="form-main-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'start'
        }}>

          {/* Left Column: Form / Success state */}
          <div>
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
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)'
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
                    Expression of Interest Received
                  </h3>
                  <p style={{
                    fontFamily: 'Figtree',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.50)',
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: '440px'
                  }}>
                    Thank you, {fullName}. Your expression of interest has been queued in our delegate relations system. Our Selection Committee will review your application and confirm your invitation credentials shortly.
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
                  Submit Another Expression of Interest
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '24px',
                padding: 'clamp(20px, 4vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
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

                {/* Section 1: Executive Information */}
                <SectionCard title="Executive Information">
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Full Name*</label>
                      <input type="text" placeholder="Sarah Jenkins" value={fullName} onChange={e => setFullName(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Organisation*</label>
                      <input type="text" placeholder="Standard Bank Group" value={organisation} onChange={e => setOrganisation(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                  </div>

                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Current Position / Title*</label>
                      <input type="text" placeholder="Chief Financial Officer" value={title} onChange={e => setTitle(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Industry / Sector*</label>
                      <input type="text" placeholder="Financial Services, Technology..." value={industry} onChange={e => setIndustry(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                  </div>

                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Mobile Number*</label>
                      <input type="tel" placeholder="082 000 0000" value={mobile} onChange={e => setMobile(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Email Address*</label>
                      <input type="email" placeholder="sarah.jenkins@company.com" value={email} onChange={e => setEmail(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                  </div>

                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>LinkedIn Profile</label>
                      <input type="url" placeholder="https://linkedin.com/in/sarahjenkins" value={linkedin} onChange={e => setLinkedin(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Organisation Website</label>
                      <input type="url" placeholder="https://www.company.com" value={website} onChange={e => setWebsite(e.target.value)} style={INPUT_STYLE} onFocus={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; }} />
                    </div>
                  </div>
                </SectionCard>

                {/* Section 2: Leadership Profile */}
                <SectionCard title="Leadership Profile">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                      Please select the category that best describes your current leadership role.*
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {LEADERSHIP_ROLES.map(role => (
                        <CustomRadio
                          key={role}
                          label={role === 'Other' ? 'Other' : role}
                          checked={leadershipRole === role}
                          onChange={() => {
                            setLeadershipRole(role);
                            if (role !== 'Other') setOtherRoleText('');
                          }}
                        />
                      ))}
                    </div>
                    {leadershipRole === 'Other' && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '16px' }}>
                        <input
                          type="text"
                          placeholder="Please specify your other leadership role..."
                          value={otherRoleText}
                          onChange={e => setOtherRoleText(e.target.value)}
                          style={INPUT_STYLE}
                          onFocus={e => e.currentTarget.style.borderColor = '#C9A84C'}
                          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                        />
                      </motion.div>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Number of Employees Within Your Organisation
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                      {EMPLOYEE_SCALES.map(scale => (
                        <CustomRadio
                          key={scale}
                          label={scale}
                          checked={employeeCount === scale}
                          onChange={() => setEmployeeCount(scale)}
                        />
                      ))}
                    </div>
                  </div>
                </SectionCard>

                  {/* Section 3: Strategic Interests */}
                <SectionCard title="Strategic Interests">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                      What outcomes would you most like to achieve through your participation?* (Select all applicable)
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '14px'
                    }} className="form-interests-grid">
                      {STRATEGIC_INTERESTS_LIST.map(interest => (
                        <CustomCheckbox
                          key={interest}
                          label={interest}
                          checked={strategicInterests.includes(interest)}
                          onChange={() => toggleInterest(interest)}
                        />
                      ))}
                    </div>
                  </div>
                </SectionCard>

                {/* Section 4: Executive Matchmaking */}
                <SectionCard title="Executive Matchmaking">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.45 }}>
                      One of the defining features of the EmpowaWomen ecosystem is intentional relationship-building. Which stakeholders would you most value connecting with?
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '14px'
                    }} className="form-matchmaking-grid">
                      {MATCHMAKING_STAKEHOLDERS_LIST.map(stakeholder => (
                        <CustomCheckbox
                          key={stakeholder}
                          label={stakeholder}
                          checked={matchmakingStakeholders.includes(stakeholder)}
                          onChange={() => toggleStakeholder(stakeholder)}
                        />
                      ))}
                    </div>
                  </div>
                </SectionCard>

                {/* Section 5: Leadership Impact Statement */}
                <SectionCard title="Leadership Impact Statement">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0 }}>
                        Impact Statement*
                      </label>
                      <span style={{
                        fontFamily: 'Figtree',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: wordCount > 200 ? '#ff8a8a' : 'rgba(255,255,255,0.30)',
                        letterSpacing: '0.02em'
                      }}>
                        {wordCount} / 200 words
                      </span>
                    </div>
                    <p style={{ fontFamily: 'Figtree', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                      In no more than 200 words, please share why you believe you should be part of this invitation-only executive experience and how your leadership contributes to economic growth, innovation, transformation, or societal impact.
                    </p>
                    <textarea
                      placeholder="My leadership focuses on driving industrial transformation and supporting women innovators in access to capital..."
                      value={impactStatement}
                      onChange={e => setImpactStatement(e.target.value)}
                      style={{
                        ...INPUT_STYLE,
                        height: '140px',
                        resize: 'none',
                        lineHeight: 1.6
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = wordCount > 200 ? '#ff8a8a' : '#C9A84C'}
                      onBlur={e => e.currentTarget.style.borderColor = wordCount > 200 ? '#ff8a8a' : 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                </SectionCard>

                {/* Section 6: Awards & Recognition */}
                <SectionCard title="Awards &amp; Recognition">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                        Would you like to receive information regarding the EmpowaWomen Leadership Awards?*
                      </label>
                      <div style={{ display: 'flex', gap: '24px' }}>
                        <CustomRadio
                          label="Yes"
                          checked={awardsInfo === 'Yes'}
                          onChange={() => setAwardsInfo('Yes')}
                        />
                        <CustomRadio
                          label="No"
                          checked={awardsInfo === 'No'}
                          onChange={() => setAwardsInfo('No')}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '12px', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                        Would you like to nominate an exceptional woman leader for consideration?*
                      </label>
                      <div style={{ display: 'flex', gap: '24px' }}>
                        <CustomRadio
                          label="Yes"
                          checked={nominateLeader === 'Yes'}
                          onChange={() => setNominateLeader('Yes')}
                        />
                        <CustomRadio
                          label="No"
                          checked={nominateLeader === 'No'}
                          onChange={() => setNominateLeader('No')}
                        />
                      </div>
                    </div>
                  </div>
                </SectionCard>

                {/* Section 7: Executive Declaration */}
                <SectionCard title="Executive Declaration">
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Figtree', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.40)', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                      By submitting this registration, I acknowledge and understand that:*
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <CustomCheckbox
                        label={DECLARATION_ITEMS_LIST[0]}
                        checked={declaration1}
                        onChange={() => setDeclaration1(!declaration1)}
                      />
                      <CustomCheckbox
                        label={DECLARATION_ITEMS_LIST[1]}
                        checked={declaration2}
                        onChange={() => setDeclaration2(!declaration2)}
                      />
                      <CustomCheckbox
                        label={DECLARATION_ITEMS_LIST[2]}
                        checked={declaration3}
                        onChange={() => setDeclaration3(!declaration3)}
                      />
                      <CustomCheckbox
                        label={DECLARATION_ITEMS_LIST[3]}
                        checked={declaration4}
                        onChange={() => setDeclaration4(!declaration4)}
                      />
                      <CustomCheckbox
                        label={DECLARATION_ITEMS_LIST[4]}
                        checked={declaration5}
                        onChange={() => setDeclaration5(!declaration5)}
                      />
                    </div>
                  </div>
                </SectionCard>

                <button type="submit" disabled={loading} style={{
                  marginTop: '8px',
                  width: '100%',
                  height: '54px',
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
                    <span>Processing Executive Vetting...</span>
                  ) : (
                    <>
                      <span>Submit Expression of Interest</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Expectations and Vetting Criteria sidebar */}
          <div style={{
            position: 'sticky',
            top: '90px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }} className="form-sidebar-container">

            {/* Expect Card */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255,45,135,0.15)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                backgroundColor: '#FF2D87'
              }} />
              <h3 style={{
                fontFamily: 'Figtree',
                fontSize: '14px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                margin: '0 0 8px 0'
              }}>
                WHAT SELECTED LEADERS CAN EXPECT
              </h3>
              <p style={{ fontFamily: 'Figtree', fontSize: '12px', color: '#FF2D87', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
                Exclusive Access To:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  "Africa’s Most Influential Women Leaders",
                  "Executive-Level Networking & Relationship Capital",
                  "Strategic Partnerships & Collaboration Opportunities",
                  "Investment, Procurement & Commercial Engagement Opportunities",
                  "High-Level Leadership & Industry Conversations",
                  "Premium Brand Association & Positioning",
                  "Curated Executive Introductions",
                  "A Powerful Ecosystem of Influence, Capital & Opportunity"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#FF2D87', fontWeight: 700, fontSize: '13px', paddingTop: '1px' }}>✓</span>
                    <span style={{ fontFamily: 'Figtree', fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Criteria Card */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                backgroundColor: '#C9A84C'
              }} />
              <h3 style={{
                fontFamily: 'Figtree',
                fontSize: '14px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                margin: '0 0 8px 0'
              }}>
                FINAL SELECTION CRITERIA
              </h3>
              <p style={{ fontFamily: 'Figtree', fontSize: '12px', color: '#C9A84C', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
                Assessed based on:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  "Executive Leadership Influence",
                  "Industry Impact & Achievements",
                  "Strategic Decision-Making Authority",
                  "Ecosystem Contribution",
                  "Innovation & Transformation Leadership",
                  "Commercial, Economic or Social Impact",
                  "Alignment with the EmpowaWomen Vision"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: '14px', paddingTop: '1px' }}>•</span>
                    <span style={{ fontFamily: 'Figtree', fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'Figtree', fontSize: '11px', fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', marginTop: '24px', marginBottom: 0, lineHeight: 1.5 }}>
                Participation is intentionally limited to preserve the quality of engagement, relevance of conversations, and calibre of leadership represented in the room.
              </p>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 991px) {
          .form-main-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .form-sidebar-container {
            position: static !important;
          }
        }
        @media (max-width: 599px) {
          .form-row-2col {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .form-interests-grid,
          .form-matchmaking-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
});

// --- Hero Section ---
const HeroSection = ({ scrollToForm }: { scrollToForm: (nominateOption?: 'Yes' | 'No') => void }) => {
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
          <img src="/features-20.jpg" alt="" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.42
          }} />
        </motion.div>
      </motion.div>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,15,0.78) 0%, rgba(10,10,15,0.50) 40%, rgba(10,10,15,0.88) 100%)'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 10%, rgba(10,10,15,0.75) 90%)'
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
          3RD ANNUAL SOIREE AND LEADERSHIP AWARDS · SATURDAY, 29 AUGUST 2026
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
            Saturday, 29 August 2026
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
        }} onMouseEnter={() => setPrimaryHover(true)} onMouseLeave={() => setPrimaryHover(false)} onClick={() => scrollToForm('No')}>
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
        }} onMouseEnter={() => setSecondaryHover(true)} onMouseLeave={() => setSecondaryHover(false)} onClick={() => scrollToForm('Yes')}>
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

    <style dangerouslySetInnerHTML={{ __html: `
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
    ` }} />
  </section>;
};

// ─── Bubbles & Nibbles Video Gallery (Copied & Customised) ────────────────────
const BubblesNibblesVideoSection = () => {
  const playlist = [
    "meAMF4aPZl4",
    "YdrNRk5IDiM",
    "2P_GtCkhS9Q",
    "TQXrrRdUcac",
    "ur-TCxziR3U",
    "AeodFhnuUyQ",
    "iTeO8OVZUQ0",
    "w5p9v_9Htes",
    "rJ3_6lnOPcI"
  ];
  const [currentVideoId, setCurrentVideoId] = React.useState(playlist[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isHoveringPlay, setIsHoveringPlay] = React.useState(false);
  const VIDEO_HEADLINE_WORDS = ["Experience", "the", "Magic", "and", "Influence."];
  const STATS_DATA = [{
    id: "vs-1",
    value: "200+",
    label: "Exclusive Guests"
  }, {
    id: "vs-2",
    value: "12",
    label: "Awards Conferred"
  }, {
    id: "vs-3",
    value: "R2.4M+",
    label: "Sponsorship Value"
  }, {
    id: "vs-4",
    value: "100%",
    label: "Executive Focus"
  }];
  return <section id="nibbles-event-reels" style={{
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
          backgroundColor: "#FF2D87"
        }} />
              <div style={{
          width: "24px",
          height: "1px",
          backgroundColor: "rgba(255,45,135,0.3)",
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
                  EVENT HIGHLIGHTS &amp; REELS
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
              {VIDEO_HEADLINE_WORDS.map((word, i) => <motion.span key={"vsw-bn-" + i} initial={{
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
              {word === "Magic" || word === "Influence." ? <span style={{
              color: "#FF2D87"
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
                  Step inside Africa's most prestigious room. Exclusive masterclasses, top-tier networking, and powerful business alliances captured live.
              </p>
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
              {isPlaying ? <iframe src={"https://www.youtube.com/embed/" + currentVideoId + "?autoplay=1"} title="Bubbles & Nibbles highlight reel" allow="autoplay; fullscreen" style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none"
        }} /> : <div style={{
          position: "absolute",
          inset: 0
        }}>
                  <img src={"https://img.youtube.com/vi/" + currentVideoId + "/maxresdefault.jpg"} alt="Bubbles & Nibbles highlight reel" style={{
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
              flexShrink: 0
            }} />
                      <span style={{
              fontFamily: "Figtree",
              fontWeight: 600,
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.50)"
            }}>
                          BUBBLES &amp; NIBBLES · EVENT GALLERY
                      </span>
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
                  <img src={"https://img.youtube.com/vi/" + vid + "/mqdefault.jpg"} alt="thumbnail" style={{
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

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 767px) {
          .video-header-right { max-width: 100% !important; }
          .video-stats-strip { flex-wrap: wrap !important; gap: 24px 0 !important; }
          .video-stats-strip > div { min-width: 50% !important; border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(0,0,0,0.07) !important; padding-top: 20px !important; }
          .video-stats-strip > div:nth-child(1), .video-stats-strip > div:nth-child(2) { border-top: none !important; padding-top: 0 !important; }
        }
      ` }} />
  </section>;
};

export const LeadershipAwardsGala = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const [initialNominate, setInitialNominate] = React.useState<string>('');

  const scrollToForm = (nominateOption?: 'Yes' | 'No') => {
    if (nominateOption) {
      setInitialNominate(nominateOption);
    }
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#invitation-form-section') {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else if (hash === '#awards') {
      setTimeout(() => {
        document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, []);

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
    <BubblesNibblesVideoSection />
    <CTASection scrollToForm={scrollToForm} />
    <InvitationFormSection ref={formRef} initialNominate={initialNominate} />
    {/* ── Corporate Partnerships Section ── */}
    <section style={{
        position: 'relative',
        backgroundColor: '#0A0A0F',
        paddingTop: 'clamp(64px, 10vw, 120px)',
        paddingBottom: 'clamp(64px, 10vw, 120px)',
        paddingLeft: 'clamp(16px, 5vw, 96px)',
        paddingRight: 'clamp(16px, 5vw, 96px)',
        borderTop: '1px solid rgba(255,255,255,0.06)'
    }}>
        <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
            flexWrap: 'wrap'
        }} className="summits-flex-container">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ maxWidth: '600px', flex: '1 1 50%', minWidth: '300px' }}>
                <span style={{ display: 'block', fontSize: '9px', fontWeight: 600, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
                    CORPORATE PARTNERSHIPS
                </span>
                <h2 style={{ fontFamily: 'Figtree', fontWeight: 300, color: '#FFFFFF', fontSize: 'clamp(24px, 3.5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: '16px', marginBottom: 0 }}>
                    Partner with Africa's most influential women's executive platform.
                </h2>
                <p style={{ fontFamily: 'Figtree', fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '32rem', marginTop: '16px', marginBottom: 0 }}>
                    Unlock strategic visibility, thought leadership positioning, and direct access to senior decision-makers across our 2026–2027 summit calendar.
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1 1 30%', minWidth: '240px' }} className="summits-cta-container">
                <Link to="/partnerships" style={{ textDecoration: 'none', width: '100%' }}>
                    <button style={{ width: '100%', fontFamily: 'Figtree', fontSize: 'clamp(14px, 1.5vw, 15px)', fontWeight: 500, color: '#FFFFFF', backgroundColor: '#FF2D87', borderRadius: '999px', padding: '16px 32px', border: 'none', cursor: 'pointer', transition: 'filter 200ms ease-out' }} onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}>
                        Explore Partnership Packages →
                    </button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                    <button style={{ width: '100%', fontFamily: 'Figtree', fontSize: 'clamp(13px, 1.5vw, 14px)', fontWeight: 400, color: 'rgba(255,255,255,0.60)', backgroundColor: 'transparent', borderRadius: '999px', padding: '12px 32px', border: '1px solid rgba(255,255,255,0.20)', cursor: 'pointer', transition: 'background-color 200ms ease-out' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                        Contact Our Partnerships Team
                    </button>
                </Link>
            </motion.div>
        </div>
    </section>
  </main>;
};