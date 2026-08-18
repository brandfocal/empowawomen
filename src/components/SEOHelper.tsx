import * as React from "react";
import { useLocation } from "react-router-dom";

interface Metadata {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    schema?: Record<string, any>;
    robots?: string;
}

const SITE_URL = "https://empowawomen.co.za";

const METADATA_MAP: Record<string, Metadata> = {
    "/": {
        title: "EmpowaWomen | Leading Fearlessly, Accelerating Growth & Transforming Economies",
        description: "EmpowaWomen™ is a high-impact leadership and economic empowerment ecosystem accelerating the rise of women shaping Africa's future industries, institutions, capital flows, and global influence.",
        keywords: "EmpowaWomen, Women Leadership Africa, Female Entrepreneurship, EmpowaHER, Women in STEM, Green Economy Africa",
        canonical: SITE_URL + "/",
        schema: {
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "@id": `${SITE_URL}/#organization`,
            "name": "EmpowaWomen",
            "url": SITE_URL,
            "logo": `${SITE_URL}/empowawomen-logo-wh.png`,
            "description": "High-impact leadership and economic empowerment ecosystem accelerating the rise of women shaping Africa's future.",
            "sameAs": [
                "https://twitter.com/empowawomen",
                "https://linkedin.com/company/empowawomen",
                "https://instagram.com/empowawomen"
            ]
        }
    },
    "/about": {
        title: "About Us | EmpowaWomen",
        description: "Discover the vision, mission, and leadership team behind EmpowaWomen. Empowering African women across industries, capital flows, and global markets.",
        keywords: "About EmpowaWomen, Women Leadership Team, Mission, Vision, Female Leaders Africa",
        canonical: `${SITE_URL}/about`,
        schema: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `${SITE_URL}/about#webpage`,
            "url": `${SITE_URL}/about`,
            "name": "About Us - EmpowaWomen",
            "description": "Discover the vision, mission, and leadership team behind EmpowaWomen."
        }
    },
    "/contact": {
        title: "Contact Us | Get In Touch | EmpowaWomen",
        description: "Connect with the EmpowaWomen team. Inquire about partnerships, summit attendance, speaking opportunities, and sponsorship.",
        keywords: "Contact EmpowaWomen, Partner with Us, Event Sponsorship, Speaker Registration",
        canonical: `${SITE_URL}/contact`,
        schema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${SITE_URL}/contact#webpage`,
            "url": `${SITE_URL}/contact`,
            "name": "Contact Us - EmpowaWomen",
            "description": "Connect with the EmpowaWomen team for partnerships, summit attendance, or speaking opportunities."
        }
    },
    "/academy": {
        title: "EmpowaHER Academy | Women Leadership & Upskilling | EmpowaWomen",
        description: "Accelerate your professional and leadership growth with the EmpowaHER Academy. Access elite mentoring, governance boards training, and industry-focused masterclasses.",
        keywords: "EmpowaHER Academy, Leadership Masterclass, Board Training, Mentorship for Women, Female Executives Africa",
        canonical: `${SITE_URL}/academy`,
        schema: {
            "@context": "https://schema.org",
            "@type": "Course",
            "@id": `${SITE_URL}/academy#course`,
            "name": "EmpowaHER Academy Leadership Development Program",
            "description": "Elite mentoring, governance boards training, and industry-focused masterclasses for female leaders.",
            "provider": {
                "@type": "Organization",
                "name": "EmpowaWomen",
                "url": SITE_URL
            }
        }
    },
    "/academy-enhanced": {
        title: "EmpowaHER Academy Elite | EmpowaWomen",
        description: "Access our premium corporate governance and board readiness training suites designed for Africa's leading executives.",
        keywords: "EmpowaHER Academy, Board Readiness, Board Training, Corporate Governance",
        canonical: `${SITE_URL}/academy-enhanced`
    },
    "/partnerships": {
        title: "Strategic Partnerships & Collaborations | EmpowaWomen",
        description: "Join leading corporate, civil society, and government institutions in partnering with EmpowaWomen to accelerate female economic empowerment across Africa.",
        keywords: "EmpowaWomen Partners, Corporate Sponsors, Female Empowerment Collaboration, Economic Empowerment Partnerships",
        canonical: `${SITE_URL}/partnerships`
    },
    "/executive-industry-series": {
        title: "Executive Industry Series | Leadership Training | EmpowaWomen",
        description: "High-level industry-focused executive masterclasses and summits designed for senior female leaders and board members.",
        keywords: "Executive Industry Series, Female Board Members, Industry Masterclass",
        canonical: `${SITE_URL}/executive-industry-series`
    },
    "/leadership-awards-gala": {
        title: "Bubbles & Nibbles Soirée & Leadership Awards | EmpowaWomen",
        description: "Celebrating the achievements of outstanding female leaders transforming African economies and setting new benchmarks of excellence.",
        keywords: "Leadership Awards, Bubbles and Nibbles Soiree, Empowering Women Gala, African Business Awards",
        canonical: `${SITE_URL}/leadership-awards-gala`,
        schema: {
            "@context": "https://schema.org",
            "@type": "Event",
            "@id": `${SITE_URL}/leadership-awards-gala#event`,
            "name": "Bubbles & Nibbles Soirée & Leadership Awards",
            "description": "Celebrating the achievements of outstanding female leaders transforming African economies.",
            "organizer": {
                "@type": "Organization",
                "name": "EmpowaWomen",
                "url": SITE_URL
            }
        }
    },
    "/what-we-do": {
        title: "What We Do | Programs & Summits Hub | EmpowaWomen",
        description: "Explore EmpowaWomen's comprehensive portfolio of leadership summits, capacity building academy, executive roundtables, and policy advocacy.",
        keywords: "What We Do, Summits Hub, EmpowaWomen Initiatives, Female Leadership Programs",
        canonical: `${SITE_URL}/what-we-do`
    },
    "/iwd-summit": {
        title: "International Women's Day Summit | EmpowaWomen",
        description: "Join the annual EmpowaWomen International Women's Day Summit. Celebrate leadership achievements, discuss policy, and network with global industry shapers.",
        keywords: "IWD Summit, International Womens Day Event, Women Leadership Summit",
        canonical: `${SITE_URL}/iwd-summit`,
        schema: {
            "@context": "https://schema.org",
            "@type": "Event",
            "@id": `${SITE_URL}/iwd-summit#event`,
            "name": "International Women's Day Summit",
            "description": "Annual Summit celebrating leadership achievements and policy discussion for female empowerment.",
            "organizer": {
                "@type": "Organization",
                "name": "EmpowaWomen",
                "url": SITE_URL
            }
        }
    },
    "/provincial-summits": {
        title: "Provincial Summit Series | Grassroots Impact | EmpowaWomen",
        description: "Bringing economic empowerment and leadership summits directly to local communities and municipalities across South African provinces.",
        keywords: "Provincial Summits, Local Economic Empowerment, Grassroots Leadership, South Africa Municipalities",
        canonical: `${SITE_URL}/provincial-summits`
    },
    "/green-economy": {
        title: "Green Economy, Mining, Energy & Sustainability | EmpowaWomen",
        description: "Fostering leadership, technology transition, and investment opportunities for women in green energy, sustainable mining, and carbon markets.",
        keywords: "Green Economy, Mining for Women, Renewable Energy Africa, Sustainability",
        canonical: `${SITE_URL}/green-economy`
    },
    "/infrastructure-property": {
        title: "Infrastructure, Property & Transport Pillar | EmpowaWomen",
        description: "Advancing female representation, developer funding, and engineering leadership in property, construction, and transport logistics.",
        keywords: "Infrastructure, Property Development, Female Engineers, Transport Logistics Africa",
        canonical: `${SITE_URL}/infrastructure-property`
    },
    "/agriculture-manufacturing": {
        title: "Agriculture & Food Security Pillar | EmpowaWomen",
        description: "Empowering female agritech developers, smallholder cooperatives, and value chain leaders in agriculture and food security systems.",
        keywords: "Agriculture, Food Security, Agritech, Female Farmers, Cooperatives Africa",
        canonical: `${SITE_URL}/agriculture-manufacturing`
    },
    "/creative-economy": {
        title: "The Creative Economy Pillar | Production & Media | EmpowaWomen",
        description: "Driving investment, capacity building, and intellectual property ownership for women in film, television, visual arts, and digital content creation.",
        keywords: "Creative Economy, Film Production, Digital Content, Intellectual Property, Media Women",
        canonical: `${SITE_URL}/creative-economy`
    },
    "/beauty-fashion-wellness": {
        title: "Beauty, Fashion, Health & Wellness Pillar | EmpowaWomen",
        description: "Supporting female entrepreneurs scaling brands, retail chains, and manufacturing systems in the cosmetics, design, and health sectors.",
        keywords: "Beauty, Fashion, Health and Wellness, Female Retailers, Cosmetics Industry Africa",
        canonical: `${SITE_URL}/beauty-fashion-wellness`
    },
    "/entrepreneurship-funding": {
        title: "Entrepreneurship & Venture Funding Pillar | EmpowaWomen",
        description: "Unlocking venture capital, private equity, and credit lines for scalable, female-led enterprises driving African development.",
        keywords: "Entrepreneurship, Venture Capital, Funding for Women, Private Equity, Small Business Africa",
        canonical: `${SITE_URL}/entrepreneurship-funding`
    },
    "/wholesale-retail-manufacturing": {
        title: "Wholesale, Retail & Manufacturing Pillar | EmpowaWomen",
        description: "Integrating female-owned manufacturing plants, distribution networks, and retail brands into major local and global supply chains.",
        keywords: "Wholesale, Retail, Manufacturing, Supply Chain Integration, Local Brands Africa",
        canonical: `${SITE_URL}/wholesale-retail-manufacturing`
    },
    "/leadership-governance-boards": {
        title: "Leadership, Governance & Boards Pillar | EmpowaWomen",
        description: "Preparing female executives for high-impact board appointments, corporate governance, ESG oversight, and fiduciary excellence.",
        keywords: "Board Readiness, Corporate Governance, ESG Oversight, Board Appointments Women",
        canonical: `${SITE_URL}/leadership-governance-boards`
    },
    "/communications-media": {
        title: "Communications, Advertising, Marketing & Media | EmpowaWomen",
        description: "Shaping narratives and promoting female executive voices across public relations, advertising networks, journalism, and broadcasting channels.",
        keywords: "Communications, Advertising, Marketing, PR, Media Narratives Africa",
        canonical: `${SITE_URL}/communications-media`
    },
    "/media": {
        title: "Media Hub, News & Gallery | EmpowaWomen",
        description: "Read the latest press releases, view official summit galleries, watch video highlight reels, and stay updated with the EmpowaWomen newsroom.",
        keywords: "Media News, Photo Gallery, Highlight Reels, Press Release, EmpowaWomen News",
        canonical: `${SITE_URL}/media`
    },
    "/summit": {
        title: "Annual Leadership Summit | EmpowaWomen",
        description: "EmpowaWomen's premier annual gathering bringing together policymakers, institutional investors, and captains of industry.",
        keywords: "Annual Summit, Leadership Summit, Policy Makers, Captains of Industry",
        canonical: `${SITE_URL}/summit`
    },
    "/privacy": {
        title: "Privacy Policy | EmpowaWomen",
        description: "Read the EmpowaWomen Privacy Policy detailing how we handle, collect, and protect user data.",
        keywords: "Privacy Policy, Data Protection, User Data Security",
        canonical: `${SITE_URL}/privacy`
    },
    "/terms": {
        title: "Terms of Service | EmpowaWomen",
        description: "Read the Terms and Conditions of service for the EmpowaWomen platform, summits, events, and training.",
        keywords: "Terms and Conditions, Terms of Service, User Agreement",
        canonical: `${SITE_URL}/terms`
    },
    "/empowawomen-leadership-summit-2026-absa": {
        title: "EmpowaWomen Leadership Summit 2026 - ABSA",
        description: "Register for the private EmpowaWomen Leadership Summit 2026 - ABSA event.",
        keywords: "EmpowaWomen, ABSA, Leadership Summit 2026",
        canonical: `${SITE_URL}/empowawomen-leadership-summit-2026-absa`,
        robots: "noindex, nofollow"
    }
};

export const SEOHelper = () => {
    const location = useLocation();

    React.useEffect(() => {
        // Find matching metadata, default to home configuration if path is unknown
        const path = location.pathname;
        const meta = METADATA_MAP[path] || METADATA_MAP["/"];

        // 1. Update Document Title
        document.title = meta.title;

        // 2. Helper to find or create a meta tag
        const setMetaTag = (nameAttr: string, nameValue: string, contentValue: string) => {
            let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(nameAttr, nameValue);
                document.head.appendChild(element);
            }
            element.setAttribute("content", contentValue);
        };

        // Update Meta Tags
        setMetaTag("name", "description", meta.description);
        setMetaTag("name", "keywords", meta.keywords);
        
        // Update Robots Meta Tag (e.g. noindex, nofollow for private pages)
        if (meta.robots) {
            setMetaTag("name", "robots", meta.robots);
        } else {
            const existingRobots = document.querySelector('meta[name="robots"]');
            if (existingRobots) {
                existingRobots.setAttribute("content", "index, follow");
            }
        }
        
        // Open Graph Meta Tags
        setMetaTag("property", "og:title", meta.title);
        setMetaTag("property", "og:description", meta.description);
        setMetaTag("property", "og:url", window.location.href);

        // Twitter Meta Tags
        setMetaTag("property", "twitter:title", meta.title);
        setMetaTag("property", "twitter:description", meta.description);
        setMetaTag("property", "twitter:url", window.location.href);

        // 3. Update Canonical link
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (!canonicalLink) {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute("href", meta.canonical);

        // 4. Inject or update JSON-LD structured schema script
        const schemaScriptId = "empowawomen-jsonld-schema";
        let script = document.getElementById(schemaScriptId) as HTMLScriptElement | null;

        if (meta.schema) {
            if (!script) {
                script = document.createElement("script");
                script.id = schemaScriptId;
                script.type = "application/ld+json";
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(meta.schema, null, 2);
        } else {
            // If no specific schema matches, check if we can remove a previous schema or fall back to generic webpage
            if (script) {
                script.textContent = JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": `${window.location.href}#webpage`,
                    "url": window.location.href,
                    "name": meta.title,
                    "description": meta.description
                }, null, 2);
            } else {
                script = document.createElement("script");
                script.id = schemaScriptId;
                script.type = "application/ld+json";
                document.head.appendChild(script);
                script.textContent = JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "@id": `${window.location.href}#webpage`,
                    "url": window.location.href,
                    "name": meta.title,
                    "description": meta.description
                }, null, 2);
            }
        }
    }, [location]);

    return null;
};
