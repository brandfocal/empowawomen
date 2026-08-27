// --- Types ---
export interface AgendaSession {
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

export interface StageData {
  id: string;
  name: string;
  shortName?: string;
  director?: string;
  color: string;
  bgGlow: string;
  sessions: AgendaSession[];
}

// --- Data for the 5 Stages (Main + 4 Breakaway Tracks) ---
export const STAGES: StageData[] = [
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
