import * as React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Camera, MessageSquare, Video, Link as LinkIcon, Menu, X } from "lucide-react";

interface NavLinkItem {
    id: string;
    label: string;
    href: string;
    hasDropdown?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
    { id: "nav-home", label: "Home", href: "/" },
    { id: "nav-about", label: "About", href: "/about" },
    { id: "nav-summits", label: "Summits", href: "/summits-hub", hasDropdown: true },
    { id: "nav-pillars", label: "Pillars", href: "/#pillars", hasDropdown: true },
    { id: "nav-academy", label: "Academy", href: "/academy" },
    { id: "nav-partners", label: "Partners", href: "/partnerships" },
    { id: "nav-industry-series", label: "Industry Series", href: "/executive-industry-series" },
    { id: "nav-awards-gala", label: "Awards Gala", href: "/leadership-awards-gala" },
    { id: "nav-iwd-summit", label: "IWD Summit", href: "/iwd-summit" },
    { id: "nav-provincial-summits", label: "Provincial Summits", href: "/provincial-summits" },
    { id: "nav-contact", label: "Contact", href: "/contact" }
];

const FOOTER_SECTION_ROWS = [{
    id: "row-pages",
    label: "Pages",
    links: [
        { id: "fp-1", label: "About", href: "/about" },
        { id: "fp-2", label: "Summits", href: "/#summits" },
        { id: "fp-3", label: "Pillars", href: "/#pillars" },
        { id: "fp-4", label: "Academy", href: "/academy" },
        { id: "fp-5", label: "Partners", href: "/partnerships" },
        { id: "fp-6", label: "Contact", href: "/contact" }
    ]
}, {
    id: "row-programs",
    label: "Programs",
    links: [
        { id: "fp-7", label: "EmpowaHER", href: "/academy" },
        { id: "fp-8", label: "Partnerships", href: "/partnerships" },
        { id: "fp-9", label: "ESG Programs", href: "#" },
        { id: "fp-10", label: "Resources", href: "#" }
    ]
}, {
    id: "row-legal",
    label: "Legal",
    links: [
        { id: "fp-11", label: "Privacy Policy", href: "#" },
        { id: "fp-12", label: "Terms", href: "#" },
        { id: "fp-13", label: "FAQ", href: "#" }
    ]
}];

const FOOTER_HEADLINE_WORDS = ["Never", "miss", "what", "moves", "next."];

export const TopNav = () => {
    const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const navHeight = 68;
    const location = useLocation();

    return <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <header style={{
            height: `${navHeight}px`,
            backgroundColor: "rgba(10,10,15,0.97)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "clamp(16px, 6vw, 80px)",
            paddingRight: "clamp(16px, 6vw, 80px)",
            position: "relative"
        }}>
            <motion.div style={{
                scaleX,
                transformOrigin: "left",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "1.5px",
                backgroundColor: "#FF2D87"
            }} />

            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <img src="/logo.png" alt="EmpowaWomen logo mark" style={{ height: "32px", width: "auto" }} />
                </Link>
            </div>

            {/* Nav links */}
            <nav aria-label="Main navigation" style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0px"
            }} className="hidden md:flex">
                {NAV_LINKS.map((link, idx) => {
                    // Consider it active if we are on the exact path, or if we're not on home and the current path starts with the link's href.
                    const isActive = link.href === '/' ? location.pathname === '/' : (link.href.startsWith('/#') ? false : location.pathname.startsWith(link.href));
                    const isHoveredOrActive = isActive || hoveredLink === link.id;

                    return (
                        <React.Fragment key={link.id}>
                            {link.href.startsWith('/#') ? (
                                <a href={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} style={{
                                    fontFamily: "Figtree", fontSize: "12px", fontWeight: 400, letterSpacing: "0.08em",
                                    color: isHoveredOrActive ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
                                    textDecoration: "none", padding: "6px 12px", transition: "color 150ms ease-out",
                                    position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "3px"
                                }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                        <span>{link.label}</span>
                                        {link.hasDropdown && <ChevronDown size={11} style={{ color: isHoveredOrActive ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.25)", transition: "color 150ms ease-out", flexShrink: 0 }} />}
                                    </span>
                                    <span style={{ display: "block", height: "1.5px", width: "100%", backgroundColor: "#FF2D87", transformOrigin: "left", transform: isHoveredOrActive ? "scaleX(1)" : "scaleX(0)", transition: "transform 200ms ease-out" }} />
                                </a>
                            ) : (
                                <Link to={link.href} onMouseEnter={() => setHoveredLink(link.id)} onMouseLeave={() => setHoveredLink(null)} style={{
                                    fontFamily: "Figtree", fontSize: "12px", fontWeight: 400, letterSpacing: "0.08em",
                                    color: isHoveredOrActive ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.40)",
                                    textDecoration: "none", padding: "6px 12px", transition: "color 150ms ease-out",
                                    position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "3px"
                                }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
                                        <span>{link.label}</span>
                                        {link.hasDropdown && <ChevronDown size={11} style={{ color: isHoveredOrActive ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.25)", transition: "color 150ms ease-out", flexShrink: 0 }} />}
                                    </span>
                                    <span style={{ display: "block", height: "1.5px", width: "100%", backgroundColor: "#FF2D87", transformOrigin: "left", transform: isHoveredOrActive ? "scaleX(1)" : "scaleX(0)", transition: "transform 200ms ease-out" }} />
                                </Link>
                            )}
                            {idx < NAV_LINKS.length - 1 && <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "8px" }}>·</span>}
                        </React.Fragment>
                    );
                })}
            </nav>

            {/* Right actions */}
            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <a href="#" style={{
                    fontFamily: "Figtree", fontSize: "12px", fontWeight: 500, color: "#FFFFFF", backgroundColor: "#FF2D87",
                    borderRadius: "999px", padding: "8px 20px", textDecoration: "none", whiteSpace: "nowrap",
                    letterSpacing: "0.02em", transition: "filter 200ms ease-out", position: "relative", overflow: "hidden", display: "inline-flex", alignItems: "center"
                }} onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
                }} onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
                }} className="hidden md:inline-flex">
                    <span style={{ position: "relative", zIndex: 1 }}>Secure Your Seat</span>
                    <span style={{
                        position: "absolute", top: 0, left: 0, height: "100%", width: "40%", background: "rgba(255,255,255,0.15)",
                        transform: "skewX(-20deg) translateX(-100%)", animation: "shimmerSlide 3s linear infinite", pointerEvents: "none"
                    }} />
                </a>

                <button className="md:hidden text-white p-2 ml-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" style={{ background: "transparent", border: "none" }}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
        </header>

        <AnimatePresence>
            {isOpen && <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{
                backgroundColor: "rgba(10,10,15,0.97)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "24px clamp(16px, 6vw, 80px)",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
            }}>
                {NAV_LINKS.map(link => (
                    link.href.startsWith('/#') ? 
                    <a key={link.id} href={link.href} style={{
                        fontFamily: "Figtree", fontSize: "16px", fontWeight: 400, color: "rgba(255,255,255,0.70)", textDecoration: "none"
                    }} onClick={() => setIsOpen(false)}>
                        {link.label}
                    </a> : 
                    <Link key={link.id} to={link.href} style={{
                        fontFamily: "Figtree", fontSize: "16px", fontWeight: 400, color: (link.href === '/' ? location.pathname === '/' : location.pathname.startsWith(link.href)) ? "#FF2D87" : "rgba(255,255,255,0.70)", textDecoration: "none"
                    }} onClick={() => setIsOpen(false)}>
                        {link.label}
                    </Link>
                ))}
                <a href="#" style={{
                    marginTop: "8px", fontFamily: "Figtree", fontSize: "14px", fontWeight: 500, color: "#FFFFFF",
                    backgroundColor: "#FF2D87", borderRadius: "999px", padding: "10px 24px", textDecoration: "none",
                    display: "inline-block", textAlign: "center"
                }}>
                    Secure Your Seat
                </a>
            </motion.div>}
        </AnimatePresence>

        <style>{`
        @keyframes shimmerSlide {
          0%   { transform: skewX(-20deg) translateX(-100%); }
          30%  { transform: skewX(-20deg) translateX(250%); }
          100% { transform: skewX(-20deg) translateX(250%); }
        }
      `}</style>
    </div>;
};

export const FooterCTA = () => {
    return <footer id="contact" style={{
        position: "relative",
        backgroundColor: "#0A0A0F",
        color: "#FFFFFF",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "96px",
        paddingBottom: "48px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 96px)",
        marginTop: "auto"
    }}>
        {/* Background image overlay */}
        <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "1400px",
            aspectRatio: "2/1", pointerEvents: "none", opacity: 0.3, userSelect: "none"
        }}>
            <div style={{
                width: "100%", height: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=1400&q=80')",
                backgroundSize: "cover", backgroundPosition: "center", maskImage: "linear-gradient(to top, transparent 0%, black 35%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 35%)"
            }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1200px", display: "flex", flexDirection: "column", gap: "0" }}>
            {/* CTA Section */}
            <section style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{
                        fontFamily: "Figtree", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.60)", margin: 0
                    }}>
                        Get Started
                    </motion.p>
                    <div style={{ maxWidth: "672px" }}>
                        <h2 style={{ fontFamily: "Figtree", fontWeight: 300, fontSize: "clamp(44px, 7vw, 96px)", color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.04em", margin: 0 }}>
                            {FOOTER_HEADLINE_WORDS.map((word, i) => <motion.span key={`footer-word-${i}`} initial={{ opacity: 0, filter: "blur(10px)", y: 20 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }} style={{ display: "inline-block", marginRight: "0.2em" }}>
                                {word}
                            </motion.span>)}
                        </h2>
                    </div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} style={{
                        fontFamily: "Figtree", fontSize: "18px", color: "rgba(255,255,255,0.45)", maxWidth: "448px", lineHeight: 1.75, margin: 0
                    }}>
                        Summit invitations, leadership insights, and curated opportunities for Africa's most ambitious women — delivered directly to you.
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1.0 }} style={{
                    display: "flex", flexWrap: "wrap", gap: "20px"
                }}>
                    <button style={{
                        display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 32px", backgroundColor: "#FF2D87", color: "#FFFFFF", fontFamily: "Figtree", fontSize: "18px", fontWeight: 500, border: "none", cursor: "pointer", transition: "filter 200ms ease-out"
                    }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)"; }}>
                        <span>Secure Your Seat</span>
                        <ArrowRight size={18} />
                    </button>
                    <Link to="/about" style={{
                        padding: "16px 32px", backgroundColor: "rgba(255,255,255,0.05)", color: "#FFFFFF", fontFamily: "Figtree", fontSize: "18px", fontWeight: 500, border: "1px solid rgba(255,255,255,0.10)", textDecoration: "none", cursor: "pointer", transition: "background-color 200ms ease-out", display: "inline-flex", alignItems: "center"
                    }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.10)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.05)"; }}>
                        About EmpowaWomen
                    </Link>
                </motion.div>
            </section>

            {/* Section link rows */}
            <section style={{ display: "flex", flexDirection: "column", gap: "32px", width: "100%", marginTop: "60px" }}>
                {FOOTER_SECTION_ROWS.map(row => <div key={row.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", width: "100%" }} className="footer-section-row">
                    <span style={{ fontFamily: "Figtree", fontSize: "14px", fontWeight: 500, color: "#FFFFFF", whiteSpace: "nowrap", minWidth: "80px" }}>
                        {row.label}
                    </span>
                    <div style={{ height: "1px", flexGrow: 1, backgroundColor: "rgba(255,255,255,0.10)" }} />
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px", justifyContent: "flex-end" }}>
                        {row.links.map(link => (
                            link.href.startsWith('/#') || link.href.startsWith('#') ? 
                            <a key={link.id} href={link.href} style={{ fontFamily: "Figtree", fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 200ms ease-out", whiteSpace: "nowrap" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}>
                                {link.label}
                            </a> : 
                            <Link key={link.id} to={link.href} style={{ fontFamily: "Figtree", fontSize: "14px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 200ms ease-out", whiteSpace: "nowrap" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>)}

                {/* Bottom bar */}
                <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }} className="footer-bottom-bar">
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", width: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img src="/logo.png" alt="EmpowaWomen logo mark" style={{ height: "28px", width: "auto" }} />
                            </div>
                            <p style={{ fontFamily: "Figtree", fontSize: "14px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
                                © {new Date().getFullYear()} EmpowaWomen. All rights reserved.
                            </p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            {[{ id: "s-instagram", label: "Instagram", Icon: Camera }, { id: "s-linkedin", label: "LinkedIn", Icon: LinkIcon }, { id: "s-x", label: "X", Icon: MessageSquare }, { id: "s-youtube", label: "YouTube", Icon: Video }].map(({ id, label, Icon }) => <a key={id} href="#" aria-label={label} style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "#FFFFFF", textDecoration: "none", transition: "background-color 300ms, color 300ms" }} onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "#FFFFFF"; el.style.color = "#0A0A0F"; }} onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = "rgba(255,255,255,0.05)"; el.style.color = "#FFFFFF"; }}>
                                <Icon size={18} />
                            </a>)}
                        </div>
                    </div>
                    <p style={{ fontFamily: "Figtree", fontWeight: 300, fontStyle: "italic", fontSize: "13px", color: "rgba(255,255,255,0.25)", textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
                        Ignite Passion | Foster Growth | Drive Change
                    </p>
                </div>
            </section>
        </div>
        <style>{`
        @media (max-width: 767px) {
          .footer-section-row { flex-direction: column !important; align-items: flex-start !important; }
          .footer-bottom-bar { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>;
};

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0A0A0F' }}>
            <ScrollToTop />
            <TopNav />
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>
            <FooterCTA />
        </div>
    );
};
