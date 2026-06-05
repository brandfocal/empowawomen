import * as React from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { ChevronDown, CheckCircle, Quote, Mail, Phone, MapPin, Shield, Download, MessageCircle, ArrowRight } from 'lucide-react';
import { Instagram, Linkedin, Twitter, Youtube } from "./BrandIcons";
import { cn } from '../lib/utils';

// ─── Types ─────────────────────────────────────────────────────────────────────

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}
interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatarUrl: string;
}
interface ProcessStep {
  id: string;
  number: string;
  title: string;
  desc: string;
  circleBg: string;
}
interface PillarItem {
  id: string;
  num: string;
  title: string;
  description: string;
  accent: string;
  bgImage: string;
}
interface TierCard {
  id: string;
  num: string;
  tier: string;
  tierColor: string;
  cardBg: string;
  topBorder: string;
  numColor: string;
  title: string;
  desc: string;
  benefits: string[];
  roiTag: string;
  ctaLabel: string;
  badge: string;
}
interface RoiMetric {
  id: string;
  value: string;
  label: string;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const JURISDICTION_TABS = [{
  id: 'township',
  label: 'Township Economy',
  description: 'Grassroots incubation setups, beauty/fashion labs, and procurement readiness bootcamps.'
}, {
  id: 'rural',
  label: 'Rural Inclusion',
  description: 'Climate-smart agribusiness labs, digital financial literacy, and cooperative infrastructure setups.'
}, {
  id: 'campus',
  label: 'Campus & Tertiary',
  description: 'Corporate readiness tracks, internships, and STEM integration networks for graduates.'
}];
const PROGRAMME_PILLARS: PillarItem[] = [{
  id: 'pillar-1',
  num: '01',
  title: 'Future Skills Lab',
  description: 'AI implementation, digital coding bootcamps, creator monetisation pathways, and professional CV/LinkedIn profiling.',
  accent: '#1655B5',
  bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=85'
}, {
  id: 'pillar-2',
  num: '02',
  title: 'Entrepreneurship & Enterprise Lab',
  description: 'Moving from baseline side-hustles to legally scalable, bankable corporate models with procurement matching.',
  accent: '#FF2D87',
  bgImage: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=85'
}, {
  id: 'pillar-3',
  num: '03',
  title: 'Leadership & Influence Academy',
  description: 'Personal branding, executive presence cultivation, civic governance, and strategic peer mentorship structures.',
  accent: '#D97706',
  bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=85'
}, {
  id: 'pillar-4',
  num: '04',
  title: 'Wellness, Life & Resilience',
  description: 'Emotional intelligence coaching, corporate mental health protocols, gender-based violence support systems, and personal growth spaces.',
  accent: '#00B4A6',
  bgImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=85'
}, {
  id: 'pillar-5',
  num: '05',
  title: 'Creative & Digital Economy Lab',
  description: 'Content creator optimisation, audio podcasting, digital video production skills, and brand sponsorship monetisation systems.',
  accent: '#6D28D9',
  bgImage: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=1920&q=85'
}, {
  id: 'pillar-6',
  num: '06',
  title: 'Careers & Employability Hub',
  description: 'Bridging the practical gap between academic transcripts, industry career showcases, learnership linkages, and corporate pathways.',
  accent: '#FF2D87',
  bgImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=85'
}, {
  id: 'pillar-7',
  num: '07',
  title: 'Summits & Activations',
  description: 'Access to high-energy, opportunity-driven environments, enterprise funding festivals, and national roadshow connectivity.',
  accent: '#1655B5',
  bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85'
}];
const IMPACT_STATS: StatItem[] = [{
  id: 'stat-1',
  value: 500,
  suffix: '+',
  label: 'Programme Graduates'
}, {
  id: 'stat-2',
  value: 47,
  suffix: '',
  label: 'Cities & Towns Reached'
}, {
  id: 'stat-3',
  value: 18,
  suffix: '–34',
  label: 'Target Age Range'
}, {
  id: 'stat-4',
  value: 2,
  suffix: 'M+',
  label: 'In Funding Unlocked',
  prefix: 'R'
}];
const TESTIMONIALS: TestimonialItem[] = [{
  id: 'testimonial-1',
  quote: 'EmpowaHER gave me the skills, the network, and the confidence to launch my business. Within 6 months of graduating I had my first corporate contract.',
  name: 'Naledi Dlamini',
  location: 'Soweto, Gauteng',
  avatarUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80'
}, {
  id: 'testimonial-2',
  quote: 'I came in as a student with no idea what I wanted. I left with a career roadmap, three mentors, and an internship at a top firm.',
  name: 'Amahle Zulu',
  location: 'Durban, KwaZulu-Natal',
  avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80'
}, {
  id: 'testimonial-3',
  quote: 'The Rural Inclusion track spoke directly to my reality. For the first time I had tools designed for where I actually live.',
  name: 'Thandi Mokoena',
  location: 'Limpopo',
  avatarUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&q=80'
}];
const WHY_APPLY_POINTS = ['Access to mentors, investors, and industry leaders', 'Practical skills labs and enterprise development tracks', 'Real pathways to employment, funding, and market access'];
const PROCESS_STEPS: ProcessStep[] = [{
  id: 'step-1',
  number: '01',
  title: 'Submit Application',
  desc: 'Complete the intake form. We review every submission personally.',
  circleBg: '#FF2D87'
}, {
  id: 'step-2',
  number: '02',
  title: 'Review & Interview',
  desc: 'Shortlisted applicants are contacted for a brief conversation.',
  circleBg: '#1655B5'
}, {
  id: 'step-3',
  number: '03',
  title: 'Cohort Onboarding',
  desc: 'Receive your cohort pack, schedule, and mentor match.',
  circleBg: '#00B4A6'
}];
const TIER_CARDS: TierCard[] = [{
  id: 'tier-1',
  num: '01',
  tier: 'TIER 1',
  tierColor: '#FF2D87',
  numColor: 'rgba(255,45,135,0.20)',
  cardBg: 'rgba(255,45,135,0.06)',
  topBorder: '#FF2D87',
  title: 'Title & Naming Rights Partner™',
  desc: 'Exclusive naming rights across all EmpowaHER™ touchpoints with full PR amplification and CXO access.',
  benefits: ['Exclusive naming rights', 'Opening keynote slot', 'Curated CXO introductions', 'PR & digital amplification', 'Full ESG reporting'],
  roiTag: 'R1M+ Brand Exposure',
  ctaLabel: 'Enquire About Title Partnership',
  badge: 'PREMIUM'
}, {
  id: 'tier-2',
  num: '02',
  tier: 'TIER 2',
  tierColor: '#00B4A6',
  numColor: 'rgba(0,180,166,0.20)',
  cardBg: 'rgba(0,180,166,0.05)',
  topBorder: '#00B4A6',
  title: 'Platinum Industry Partner™',
  desc: 'High-impact panel participation, premium exhibition space, and direct lead generation to an engaged audience.',
  benefits: ['High-impact panel position', 'Premium exhibition space', 'Lead generation pipeline', 'Category exclusivity', 'ESG impact certificate'],
  roiTag: '5,000+ Direct Impressions',
  ctaLabel: 'Enquire About Platinum Partnership',
  badge: 'FEATURED'
}, {
  id: 'tier-3',
  num: '03',
  tier: 'TIER 3',
  tierColor: '#D97706',
  numColor: 'rgba(217,119,6,0.20)',
  cardBg: 'rgba(217,119,6,0.05)',
  topBorder: '#D97706',
  title: 'Specialized Corporate Activation™',
  desc: 'Masterclass partner, category exclusivity, executive lounge rights, or CXO gifting partner. Customised packages available.',
  benefits: ['Masterclass partnership', 'Executive lounge rights', 'CXO gifting activation', 'Category exclusivity', 'Bespoke package options'],
  roiTag: 'Fully Customisable',
  ctaLabel: 'Explore Activation Modules',
  badge: 'FLEXIBLE'
}];
const ROI_METRICS: RoiMetric[] = [{
  id: 'roi-1',
  value: '5,000+',
  label: 'Activated Young Women'
}, {
  id: 'roi-2',
  value: '7',
  label: 'Programme Pillars'
}, {
  id: 'roi-3',
  value: '3',
  label: 'Activation Tracks'
}, {
  id: 'roi-4',
  value: 'R1.2B+',
  label: 'Economic Impact Goal'
}];

// ─── Helper Components ─────────────────────────────────────────────────────────

const CountUp = ({
  value,
  duration = 2,
  suffix = '',
  prefix = ''
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 60 * duration;
      const increment = end / totalSteps;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>;
};

// ─── ProgrammeArchitectureSection ─────────────────────────────────────────────

const ProgrammeArchitectureSection = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [hoveredPillar, setHoveredPillar] = React.useState<number | null>(null);
  const tabDescriptions = ['Grassroots incubation setups, beauty/fashion labs, and procurement readiness bootcamps.', 'Climate-smart agribusiness labs, digital financial literacy, and cooperative infrastructure setups.', 'Corporate readiness tracks, internships, and STEM integration networks for graduates.'];
  return <section style={{
    backgroundColor: '#0A0A0F',
    paddingTop: 'clamp(64px, 10vw, 128px)',
    paddingBottom: 'clamp(64px, 10vw, 128px)',
    position: 'relative',
    overflow: 'hidden'
  }} className="px-4 sm:px-6 lg:px-8">
      <div style={{
      position: 'relative',
      zIndex: 2
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true
      }} className="max-w-6xl mx-auto mb-12 sm:mb-20" style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(255,45,135,0.05)',
        border: '1px solid rgba(255,45,135,0.15)',
        borderRadius: 0,
        padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 40px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
          <div style={{
          position: 'absolute',
          right: -20,
          bottom: -30,
          fontSize: 'clamp(80px, 15vw, 180px)',
          fontWeight: 200,
          color: 'rgba(255,255,255,0.03)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          fontFamily: 'Figtree, sans-serif'
        }}>
            7
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div>
              <div style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#FF2D87',
              marginBottom: 12
            }}>
                THE 7 PROGRAMME PILLARS™
              </div>
              <h2 style={{
              fontWeight: 200,
              fontSize: 'clamp(28px, 5vw, 64px)',
              letterSpacing: '-0.04em',
              color: 'white',
              lineHeight: 1.05,
              margin: 0
            }}>
                Built to Activate<br />Every Young Woman.
              </h2>
            </div>

            <div style={{
            minWidth: 0,
            width: '100%',
            maxWidth: 340
          }} className="lg:min-w-[280px]">
              <div style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              marginBottom: 16
            }}>
                {JURISDICTION_TABS.map((tab, i) => <button key={tab.id} onClick={() => setActiveTab(i)} style={{
                height: 44,
                padding: '0 16px',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: 'Figtree, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.15s',
                flexShrink: 0,
                borderRadius: 0,
                backgroundColor: activeTab === i ? '#FF2D87' : 'transparent',
                border: activeTab === i ? 'none' : '1px solid rgba(255,255,255,0.15)',
                color: activeTab === i ? 'white' : 'rgba(255,255,255,0.50)'
              }}>
                    {tab.label}
                  </button>)}
              </div>
              <AnimatePresence mode="wait">
                <motion.p key={activeTab} initial={{
                opacity: 0,
                y: 6
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -6
              }} transition={{
                duration: 0.22
              }} style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: 13,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 340
              }}>
                  {tabDescriptions[activeTab]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {PROGRAMME_PILLARS.map((pillar, i) => {
          const isHovered = hoveredPillar === i;
          return <motion.div key={pillar.id} initial={{
            opacity: 0,
            x: -12
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: i * 0.08
          }} viewport={{
            once: true
          }} onMouseEnter={() => setHoveredPillar(i)} onMouseLeave={() => setHoveredPillar(null)} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'clamp(16px, 4vw, 40px)',
            paddingTop: 24,
            paddingBottom: 24,
            paddingLeft: 12,
            paddingRight: 12,
            marginLeft: -12,
            marginRight: -12,
            borderBottom: `1px solid ${isHovered ? pillar.accent + '40' : 'rgba(255,255,255,0.07)'}`,
            cursor: 'default',
            transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
            backgroundColor: isHovered ? 'rgba(255,255,255,0.07)' : 'transparent',
            borderRadius: 4,
            boxShadow: isHovered ? `0 0 0 2px ${pillar.accent}, 0 0 24px ${pillar.accent}66` : 'none',
            opacity: 1
          }}>
                <div style={{
              fontWeight: 200,
              fontSize: 'clamp(36px, 7vw, 80px)',
              letterSpacing: '-0.05em',
              width: 'clamp(44px, 8vw, 96px)',
              flexShrink: 0,
              lineHeight: 1,
              userSelect: 'none',
              color: pillar.accent,
              fontFamily: 'Figtree, sans-serif',
              transition: 'opacity 0.3s',
              opacity: isHovered ? 1 : 0.7
            }}>
                  {pillar.num}
                </div>

                <div style={{
              flex: 1,
              minWidth: 0
            }}>
                  <h3 style={{
                color: isHovered ? 'white' : 'rgba(255,255,255,0.85)',
                fontWeight: isHovered ? 600 : 500,
                fontSize: 'clamp(15px, 2.5vw, 20px)',
                lineHeight: 1.2,
                margin: '0 0 6px 0',
                transition: 'color 0.3s, font-weight 0.3s'
              }}>
                    {pillar.title}
                  </h3>
                  <p style={{
                color: isHovered ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.40)',
                fontSize: 'clamp(12px, 1.5vw, 13px)',
                lineHeight: 1.7,
                maxWidth: 520,
                margin: 0,
                transition: 'color 0.3s'
              }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{
              alignSelf: 'flex-start',
              marginTop: 8,
              flexShrink: 0,
              width: isHovered ? 32 : 24,
              height: 3,
              backgroundColor: pillar.accent,
              transition: 'width 0.3s, box-shadow 0.3s',
              boxShadow: isHovered ? `0 0 8px ${pillar.accent}` : 'none'
            }} />
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};

// ─── PartnershipSection ────────────────────────────────────────────────────────

const PartnershipSection = () => {
  const scrollToEnquiry = () => {
    const el = document.getElementById('partnership-enquiry');
    if (el) el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section style={{
    backgroundColor: '#0D0D14',
    paddingTop: 'clamp(64px, 10vw, 128px)',
    paddingBottom: 'clamp(64px, 10vw, 128px)',
    position: 'relative',
    overflow: 'hidden'
  }} className="px-4 sm:px-6 lg:px-8">
      <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 700,
      height: 700,
      background: 'radial-gradient(circle, rgba(255,45,135,0.07) 0%, transparent 70%)',
      pointerEvents: 'none',
      zIndex: 0
    }} />

      <div className="max-w-6xl mx-auto" style={{
      position: 'relative',
      zIndex: 1
    }}>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true
      }} style={{
        marginBottom: 48,
        maxWidth: 640
      }}>
          <div style={{
          width: 48,
          height: 3,
          backgroundColor: '#FF2D87',
          marginBottom: 16
        }} />
          <div style={{
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          marginBottom: 16
        }}>
            PARTNERSHIPS &amp; B2B ESG
          </div>
          <h2 style={{
          fontWeight: 200,
          fontSize: 'clamp(28px, 5vw, 64px)',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          margin: '0 0 20px 0'
        }}>
            <span style={{
            color: 'white'
          }}>Partner With </span>
            <span style={{
            color: '#FF2D87'
          }}>EmpowaHER™.</span>
          </h2>
          <p style={{
          color: 'rgba(255,255,255,0.50)',
          fontSize: 15,
          lineHeight: 1.8,
          margin: 0
        }}>
            Beyond event branding. Align your organisation with Africa's most ambitious youth leadership
            ecosystem and unlock measurable ESG impact, brand authority, and commercial access to the
            next generation of decision-makers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TIER_CARDS.map((card, i) => <motion.div key={card.id} initial={{
          opacity: 0,
          y: 24
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.55,
          delay: i * 0.14
        }} viewport={{
          once: true
        }} style={{
          backgroundColor: card.cardBg,
          border: `1px solid ${card.tierColor}25`,
          borderTop: `3px solid ${card.topBorder}`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          backdropFilter: 'blur(12px)'
        }}>
              <div style={{
            padding: '24px 24px 20px'
          }}>
                <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16
            }}>
                  <span style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: card.tierColor,
                backgroundColor: `${card.tierColor}18`,
                border: `1px solid ${card.tierColor}35`,
                padding: '4px 10px'
              }}>
                    {card.tier}
                  </span>
                  <span style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                border: '1px solid rgba(255,255,255,0.12)',
                padding: '4px 10px'
              }}>
                    {card.badge}
                  </span>
                </div>

                <div style={{
              fontWeight: 200,
              fontSize: 72,
              lineHeight: 0.9,
              color: card.numColor,
              fontFamily: 'Figtree, sans-serif',
              marginBottom: 8,
              userSelect: 'none',
              letterSpacing: '-0.05em'
            }}>
                  {card.num}
                </div>

                <h3 style={{
              color: 'white',
              fontWeight: 600,
              fontSize: 17,
              lineHeight: 1.3,
              margin: '0 0 8px 0'
            }}>
                  {card.title}
                </h3>
                <p style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 13,
              lineHeight: 1.65,
              margin: 0
            }}>
                  {card.desc}
                </p>
              </div>

              <div style={{
            height: 1,
            backgroundColor: `${card.tierColor}20`,
            margin: '0 24px'
          }} />

              <div style={{
            padding: '16px 24px 20px'
          }}>
                <div style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              marginBottom: 12
            }}>
                  WHAT'S INCLUDED
                </div>
                <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}>
                  {card.benefits.map(benefit => <div key={benefit} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}>
                      <div style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: card.tierColor,
                  flexShrink: 0
                }} />
                      <span style={{
                  color: 'rgba(255,255,255,0.60)',
                  fontSize: 13
                }}>{benefit}</span>
                    </div>)}
                </div>
              </div>

              <div style={{
            padding: '0 24px 20px'
          }}>
                <span style={{
              display: 'inline-block',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: card.tierColor,
              backgroundColor: `${card.tierColor}12`,
              border: `1px solid ${card.tierColor}30`,
              padding: '6px 14px'
            }}>
                  ROI: {card.roiTag}
                </span>
              </div>

              <div style={{
            padding: '0 24px 24px',
            marginTop: 'auto'
          }}>
                <button onClick={scrollToEnquiry} style={{
              width: '100%',
              height: 46,
              backgroundColor: 'transparent',
              border: `1px solid ${card.tierColor}`,
              color: card.tierColor,
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'background-color 0.2s, color 0.2s',
              borderRadius: 0,
              minHeight: 44
            }} onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = card.tierColor;
              (e.currentTarget as HTMLButtonElement).style.color = '#0A0A0F';
            }} onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = card.tierColor;
            }}>
                  <span>{card.ctaLabel}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>)}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-white/[0.06]">
          {ROI_METRICS.map((metric, i) => <motion.div key={metric.id} initial={{
          opacity: 0,
          y: 16
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: i * 0.1
        }} viewport={{
          once: true
        }}>
              <div style={{
            fontWeight: 200,
            fontSize: 'clamp(30px, 5vw, 56px)',
            color: 'white',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            fontFamily: 'Figtree, sans-serif'
          }}>
                {metric.value}
              </div>
              <div style={{
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.30)',
            marginTop: 8
          }}>
                {metric.label}
              </div>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{
        marginTop: 56,
        padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 48px)',
        backgroundColor: 'rgba(255,45,135,0.06)',
        border: '1px solid rgba(255,45,135,0.18)'
      }}>
          <div>
            <div style={{
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)',
            marginBottom: 8
          }}>
              READY TO PARTNER?
            </div>
            <p style={{
            color: 'white',
            fontWeight: 500,
            fontSize: 18,
            margin: 0,
            lineHeight: 1.4
          }}>
              Enquire today to receive our prospectus or speak directly to our partnerships team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button onClick={scrollToEnquiry} style={{
            height: 48,
            padding: '0 24px',
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'white',
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 500,
            fontSize: 14,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            textDecoration: 'none',
            borderRadius: 0,
            transition: 'border-color 0.2s, background-color 0.2s',
            whiteSpace: 'nowrap',
            minHeight: 44
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.35)';
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.10)';
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)';
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
          }}>
              <ArrowRight size={15} />
              <span>Request Partnership Package</span>
            </button>
            <button onClick={scrollToEnquiry} style={{
            height: 48,
            padding: '0 24px',
            backgroundColor: '#FF2D87',
            border: 'none',
            color: 'white',
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            borderRadius: 0,
            transition: 'background-color 0.2s',
            boxShadow: '0 0 24px rgba(255,45,135,0.25)',
            whiteSpace: 'nowrap',
            minHeight: 44
          }} onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#e0006f';
          }} onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#FF2D87';
          }}>
              <MessageCircle size={15} />
              <span>Speak to Our Partnerships Team</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>;
};

// ─── SponsorshipEnquirySection ─────────────────────────────────────────
const SponsorshipEnquirySection = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [jobTitle, setJobTitle] = React.useState('');
  const [organisation, setOrganisation] = React.useState('');
  const [partnershipTier, setPartnershipTier] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [budgetStream, setBudgetStream] = React.useState('');
  const [goals, setGoals] = React.useState('');
  const [agreed, setAgreed] = React.useState(false);
  const [focusedField, setFocusedField] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const inputStyle = (field: string): React.CSSProperties => ({
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: focusedField === field ? '1px solid #FF2D87' : '1px solid rgba(255,255,255,0.10)',
    borderRadius: 8,
    padding: '13px 16px',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Figtree, sans-serif',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    minHeight: 48
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };
  const resetForm = () => {
    setSubmitted(false);
    setFirstName('');
    setLastName('');
    setJobTitle('');
    setOrganisation('');
    setPartnershipTier('');
    setEmail('');
    setPhone('');
    setBudgetStream('');
    setGoals('');
    setAgreed(false);
  };
  return <section id="partnership-enquiry" style={{
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#0A0A0F',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: 'clamp(64px, 10vw, 128px)',
    paddingBottom: 'clamp(64px, 10vw, 128px)'
  }}>
      <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      height: 800,
      background: 'radial-gradient(circle, rgba(255,45,135,0.08) 0%, transparent 68%)',
      pointerEvents: 'none',
      zIndex: 0
    }} />
      <div style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(10,10,15,0.85)',
      pointerEvents: 'none',
      zIndex: 1
    }} />

      <div id="partnership-form" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
        <div className="w-full lg:w-[60%]">
          <div style={{
          width: 48,
          height: 3,
          backgroundColor: '#FF2D87',
          marginBottom: 16
        }} />
          <div style={{
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          marginBottom: 16
        }}>
            SPONSORSHIP FORM
          </div>
          <h3 style={{
          fontWeight: 300,
          fontSize: 'clamp(24px, 3.5vw, 40px)',
          letterSpacing: '-0.03em',
          color: 'white',
          margin: '0 0 10px 0'
        }}>
            Become a Partner.
          </h3>
          <p style={{
          color: 'rgba(255,255,255,0.45)',
          fontSize: 14,
          lineHeight: 1.75,
          margin: '0 0 32px 0'
        }}>
            Complete the form below and Bonnie Maponya will be in touch within 24 hours to discuss
            your partnership options.
          </p>

          {submitted ? <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          paddingTop: 48,
          paddingBottom: 48
        }}>
              <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15
          }} style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,45,135,0.10)',
            border: '2px solid #FF2D87',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
                <CheckCircle size={36} color="#FF2D87" />
              </motion.div>
              <h3 style={{
            fontWeight: 300,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            color: 'white',
            margin: 0,
            textAlign: 'center'
          }}>
                Enquiry Submitted!
              </h3>
              <p style={{
            color: 'rgba(255,255,255,0.50)',
            fontSize: 15,
            textAlign: 'center',
            maxWidth: 420,
            lineHeight: 1.75,
            margin: 0
          }}>
                Thank you! Bonnie Maponya will be in touch within 24 hours.
              </p>
              <button onClick={resetForm} style={{
            height: 44,
            padding: '0 24px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.50)',
            fontFamily: 'Figtree, sans-serif',
            fontSize: 14,
            cursor: 'pointer',
            borderRadius: '999px'
          }}>
                Back to Form
              </button>
            </div> : <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
              <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '24px',
                  width: '100%'
              }} className="form-fields-grid-container">
                  <style>{`
                      @media (min-width: 641px) {
                          .form-fields-grid-container {
                              grid-template-columns: 1fr 1fr !important;
                          }
                          .form-field-full-width {
                              grid-column: 1 / -1 !important;
                          }
                      }
                  `}</style>
                  <div>
                    <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} onFocus={() => setFocusedField('firstName')} onBlur={() => setFocusedField('')} style={inputStyle('firstName')} />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} onFocus={() => setFocusedField('lastName')} onBlur={() => setFocusedField('')} style={inputStyle('lastName')} />
                  </div>
                  <div>
                    <input type="text" placeholder="Job Title / Designation" value={jobTitle} onChange={e => setJobTitle(e.target.value)} onFocus={() => setFocusedField('jobTitle')} onBlur={() => setFocusedField('')} style={inputStyle('jobTitle')} />
                  </div>
                  <div>
                    <input type="text" placeholder="Organisation / Company" value={organisation} onChange={e => setOrganisation(e.target.value)} onFocus={() => setFocusedField('organisation')} onBlur={() => setFocusedField('')} style={inputStyle('organisation')} />
                  </div>
                  <div style={{ position: "relative" }}>
                    <select value={partnershipTier} onChange={e => setPartnershipTier(e.target.value)} onFocus={() => setFocusedField('partnershipTier')} onBlur={() => setFocusedField('')} style={{
                      ...inputStyle('partnershipTier'),
                      appearance: 'none' as const,
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='rgba(255,255,255,0.4)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 16px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '20px 20px',
                      paddingRight: '40px'
                    }}>
                      <option value="" disabled style={{ backgroundColor: '#0A0A0F' }}>Partnership Tier</option>
                      <option value="tier1" style={{ backgroundColor: '#0A0A0F' }}>Tier 1 — Title &amp; Naming Rights Partner™</option>
                      <option value="tier2" style={{ backgroundColor: '#0A0A0F' }}>Tier 2 — Platinum Industry Partner™</option>
                      <option value="tier3" style={{ backgroundColor: '#0A0A0F' }}>Tier 3 — Specialized Corporate Activation™</option>
                      <option value="general" style={{ backgroundColor: '#0A0A0F' }}>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField('')} style={inputStyle('email')} />
                  </div>
                  <div>
                    <input type="tel" placeholder="+27 ..." value={phone} onChange={e => setPhone(e.target.value)} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField('')} style={inputStyle('phone')} />
                  </div>
                  <div style={{ position: "relative" }}>
                    <select value={budgetStream} onChange={e => setBudgetStream(e.target.value)} onFocus={() => setFocusedField('budgetStream')} onBlur={() => setFocusedField('')} style={{
                      ...inputStyle('budgetStream'),
                      appearance: 'none' as const,
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='rgba(255,255,255,0.4)' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 16px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '20px 20px',
                      paddingRight: '40px'
                    }}>
                      <option value="" disabled style={{ backgroundColor: '#0A0A0F' }}>Budget Stream</option>
                      <option value="esg" style={{ backgroundColor: '#0A0A0F' }}>Corporate ESG Budget</option>
                      <option value="esd" style={{ backgroundColor: '#0A0A0F' }}>Enterprise Supplier Development</option>
                      <option value="marketing" style={{ backgroundColor: '#0A0A0F' }}>Brand Marketing Budget</option>
                      <option value="sdl" style={{ backgroundColor: '#0A0A0F' }}>Skills Development Levy</option>
                      <option value="unsure" style={{ backgroundColor: '#0A0A0F' }}>Unsure — Need Guidance</option>
                    </select>
                  </div>
                  <div className="form-field-full-width">
                    <textarea rows={4} placeholder="Briefly describe your partnership goals and how you'd like to support EmpowaHER™..." value={goals} onChange={e => setGoals(e.target.value)} onFocus={() => setFocusedField('goals')} onBlur={() => setFocusedField('')} style={{
                      ...inputStyle('goals'),
                      resize: 'vertical'
                    }} />
                  </div>
              </div>
              <label style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            cursor: 'pointer'
          }}>
                <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{
              marginTop: 2,
              accentColor: '#FF2D87',
              flexShrink: 0
            }} />
                <span style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 12,
              lineHeight: 1.6
            }}>
                  I agree to the EmpowaWomen™ Privacy Policy and consent to being contacted regarding
                  partnership opportunities.
                </span>
              </label>
              <button type="submit" disabled={loading} style={{
            width: '100%',
            height: 52,
            backgroundColor: '#FF2D87',
            color: 'white',
            border: 'none',
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: '0.02em',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 200ms ease-out',
            borderRadius: '999px',
            minHeight: 52,
            opacity: loading ? 0.7 : 1,
            boxShadow: '0 0 32px rgba(255,45,135,0.25)'
          }} onMouseEnter={e => {
            if (!loading) {
              e.currentTarget.style.filter = 'brightness(1.1)';
              e.currentTarget.style.boxShadow = '0 0 48px rgba(255,45,135,0.40)';
            }
          }} onMouseLeave={e => {
            e.currentTarget.style.filter = 'brightness(1)';
            e.currentTarget.style.boxShadow = '0 0 32px rgba(255,45,135,0.25)';
          }}>
                {loading ? "Submitting..." : "Submit Partnership Enquiry →"}
              </button>
            </form>}
        </div>

        <div className="w-full lg:w-[40%] shrink-0 lg:sticky lg:top-8 bg-white/[0.03] border border-white/[0.08] overflow-hidden">
          <div style={{
          height: 180,
          position: 'relative',
          overflow: 'hidden'
        }}>
            <img src="https://empowawomen.co.za/wp-content/uploads/2025/10/DSC_2948.jpg" alt="Bonnie Maponya" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%'
          }} />
            <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,15,0.85) 100%)'
          }} />
          </div>

          <div style={{
          padding: 28
        }}>
            <div style={{
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.30)',
            marginBottom: 12
          }}>
              YOUR PARTNERSHIP CONTACT
            </div>
            <div style={{
            color: 'white',
            fontWeight: 600,
            fontSize: 18,
            marginBottom: 4
          }}>
              Bonnie Maponya
            </div>
            <div style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: 13,
            marginBottom: 16
          }}>
              Acting Managing Executive - EmpowaWomen™
            </div>
            <div style={{
            height: 1,
            backgroundColor: 'rgba(255,45,135,0.25)',
            marginBottom: 4
          }} />
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            paddingTop: 12,
            paddingBottom: 12,
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
              <Mail size={14} color="#FF2D87" style={{
              flexShrink: 0
            }} />
              <a href="mailto:bonnie@empowaworx.co.za" style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none'
            }} onMouseEnter={e => e.currentTarget.style.color = '#FF2D87'} onMouseLeave={e => e.currentTarget.style.color = 'white'}>
                bonnie@empowaworx.co.za
              </a>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            paddingTop: 12,
            paddingBottom: 12,
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
              <Phone size={14} color="#00B4A6" style={{
              flexShrink: 0
            }} />
              <span style={{
              color: 'rgba(255,255,255,0.60)',
              fontSize: 13
            }}>011 482 7256 / 7257</span>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            paddingTop: 12,
            paddingBottom: 12,
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
              <MapPin size={14} color="#D97706" style={{
              flexShrink: 0
            }} />
              <span style={{
              color: 'rgba(255,255,255,0.60)',
              fontSize: 13
            }}>
                EmpowaWorx House, Johannesburg
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// ─── ImpactStats ───────────────────────────────────────────────────────────────

const ImpactStats = () => {
  return <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0A0A0F] text-center">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1920&q=85" className="w-full h-full object-cover opacity-20 grayscale" alt="Impact" />
        <div className="absolute inset-0 bg-[#0A0A0F]/80" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-[1px] w-full bg-white/5 mb-12 sm:mb-20" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {IMPACT_STATS.map((stat, i) => <div key={stat.id} className={cn('flex flex-col items-center lg:items-start lg:px-8 xl:px-12', i !== 0 && 'lg:border-l lg:border-white/10')}>
              <div className="text-5xl sm:text-6xl lg:text-7xl text-white mb-2 text-center lg:text-left" style={{ fontWeight: 200, fontFamily: 'Figtree, sans-serif' }}>
                <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-xs uppercase tracking-widest text-[#FF2D87] text-center lg:text-left" style={{ fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>)}
        </div>
        <div className="h-[1px] w-full bg-white/5 mt-12 sm:mt-20" />
      </div>
    </section>;
};

// ─── TestimonialsCarousel ──────────────────────────────────────────────────────

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return <section className="py-24 sm:py-32 bg-[#F7F6F2] overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF2D87] mb-4 block">
            Cohort Voices
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-[#0A0A0F]">
            From the Cohort<span className="text-[#FF2D87]">.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] bg-[#0A0A0F] p-8 sm:p-12 lg:p-20 shadow-2xl">
            <Quote className="absolute top-6 left-6 sm:top-10 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 text-[#FF2D87]/10 -rotate-12" />
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} exit={{
              opacity: 0,
              x: -20
            }} transition={{
              duration: 0.5
            }} className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-8 sm:mb-10">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(255,45,135,0.3)] mx-auto">
                    <img src={TESTIMONIALS[activeIndex].avatarUrl} className="w-full h-full object-cover" alt={TESTIMONIALS[activeIndex].name} />
                  </div>
                  <div className="absolute inset-0 rounded-full border border-[#FF2D87] animate-pulse" />
                </div>
                <p className="text-lg sm:text-2xl lg:text-3xl text-white/90 font-light italic leading-relaxed mb-8 sm:mb-10 max-w-3xl">
                  {TESTIMONIALS[activeIndex].quote}
                </p>
                <div>
                  <h4 className="text-white text-base sm:text-lg font-bold">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="text-white/40 text-sm">{TESTIMONIALS[activeIndex].location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              {TESTIMONIALS.map((_, i) => <button key={`dot-${i}`} onClick={() => setActiveIndex(i)} className={cn('h-2 rounded-full transition-all duration-300 min-w-[8px]', activeIndex === i ? 'bg-[#FF2D87] w-8' : 'bg-white/20 w-2')} aria-label={`Testimonial ${i + 1}`} style={{
              minHeight: 8
            }} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// ─── ProcessSteps ──────────────────────────────────────────────────────────────

const ProcessSteps = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: '-100px'
  });
  return <section ref={containerRef} className="py-24 sm:py-32 bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1920&q=80" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#FF2D87] mb-6 block">
              Join the Mission
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-8 sm:mb-10 leading-tight">
              Why Apply?
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {WHY_APPLY_POINTS.map((point, i) => <motion.div key={`why-${i}`} initial={{
              opacity: 0,
              x: -30
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}} transition={{
              delay: 0.2 + i * 0.15,
              duration: 0.6
            }} className="flex gap-5 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#FF2D87]/20 border border-[#FF2D87]/50 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-[#FF2D87]" />
                  </div>
                  <p className="text-lg sm:text-xl text-white/60 font-light leading-relaxed">{point}</p>
                </motion.div>)}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-10 sm:mb-12 flex items-center gap-4">
              Process Steps <span className="h-[1px] flex-1 bg-white/10" />
            </h2>
            <div className="relative space-y-10 sm:space-y-12">
              <div className="absolute left-7 top-10 bottom-10 w-[2px] hidden md:block">
                <div className="w-full h-full border-l-2 border-dashed border-white/10" />
                <motion.div initial={{
                height: 0
              }} animate={isInView ? {
                height: '100%'
              } : {}} transition={{
                duration: 1.5,
                delay: 0.5
              }} className="absolute top-0 left-[-1px] w-[3px] bg-[#FF2D87]" />
              </div>
              {PROCESS_STEPS.map((step, i) => <motion.div key={step.id} initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              delay: 0.4 + i * 0.2
            }} className="relative flex gap-6 sm:gap-8 group">
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 border-white/5 transition-all duration-500 group-hover:scale-110 relative bg-[#0A0A0F]">
                      <span className="text-base sm:text-lg font-black text-white relative z-20">
                        {step.number}
                      </span>
                      <div className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_3s_linear_infinite]" style={{
                    background: `conic-gradient(from 0deg, transparent, ${step.circleBg}, transparent)`
                  }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-medium text-white mb-2">{step.title}</h4>
                    <p className="text-white/40 leading-relaxed max-w-sm text-sm sm:text-base">{step.desc}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// ─── Main Export ───────────────────────────────────────────────────────────────

export const EnhancedEmpowaHerAcademy = () => {
  return <div className="min-h-screen bg-[#0A0A0F] font-['Figtree'] text-white selection:bg-[#FF2D87]/30 selection:text-[#FF2D87]" style={{
    overflowX: 'hidden'
  }}>
      <main>
        <ProgrammeArchitectureSection />
        <PartnershipSection />
        <SponsorshipEnquirySection />
        <ImpactStats />
        {/* <TestimonialsCarousel /> - Hiding Cohort Voices section as per request */}
        <ProcessSteps />
      </main>
    </div>;
};