import * as React from "react";
import { motion } from "framer-motion";
interface ROIMetric {
  id: string;
  label: string;
  value: string;
  description: string;
}
const CREATIVE_METRICS: ROIMetric[] = [{
  id: "rm-1",
  label: "IP Commercialisation",
  value: "$100B+",
  description: "Global creative economy generating over $100B annually, growing rapidly across Africa."
}, {
  id: "rm-2",
  label: "Content Funding & Investment",
  value: "R28B+",
  description: "South Africa's creative industries are among the continent's most commercially advanced."
}, {
  id: "rm-3",
  label: "Strategic Media Partnerships",
  value: "120+",
  description: "Active media collaboration agreements established within the EmpowaWomen ecosystem."
}, {
  id: "rm-4",
  label: "Global Distribution & Market Access",
  value: "9",
  description: "High-impact executive sessions curated from 11:00 to 16:00."
}];
export const CreativeROIMetricBlock: React.FC = () => {
  return <section style={{
    backgroundColor: "#0A0A0F",
    paddingTop: "clamp(48px, 8vw, 96px)",
    paddingBottom: "clamp(48px, 8vw, 96px)",
    paddingLeft: "clamp(16px, 5vw, 96px)",
    paddingRight: "clamp(16px, 5vw, 96px)",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    borderBottom: "1px solid rgba(255,255,255,0.05)"
  }}>
      <div style={{
      maxWidth: "1400px",
      margin: "0 auto"
    }}>
        <div className="creative-metrics-grid">
          {CREATIVE_METRICS.map((metric, idx) => {
          const accent = idx === 0 ? "#FF2D87" : idx === 1 ? "#00B4A6" : idx === 2 ? "#D4AF37" : "#FF2D87";
          return <motion.div key={metric.id} initial={{
            opacity: 0,
            y: 24
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-80px"
          }} transition={{
            duration: 0.6,
            delay: idx * 0.1
          }} style={{
            backgroundColor: "#111118",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 0,
            padding: "clamp(20px, 3vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
                {/* Top accent line */}
                <div style={{
              height: "2px",
              width: "32px",
              backgroundColor: accent,
              marginBottom: "12px",
              flexShrink: 0
            }} />

                {/* Category label */}
                <span style={{
              fontFamily: "Figtree",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "8px",
              lineHeight: 1.3
            }}>
                  {metric.label}
                </span>

                {/* Large display value */}
                <span style={{
              fontFamily: "Figtree",
              fontWeight: 300,
              fontSize: "clamp(36px, 6vw, 64px)",
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              lineHeight: 1.0
            }}>
                  {metric.value}
                </span>

                {/* Descriptor */}
                <p style={{
              fontFamily: "Figtree",
              fontSize: "clamp(13px, 1.5vw, 15px)",
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.6,
              maxWidth: "240px",
              margin: 0
            }}>
                  {metric.description}
                </p>
              </motion.div>;
        })}
        </div>
      </div>

      <style>{`
        .creative-metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2.5vw, 32px);
        }
        @media (min-width: 480px) {
          .creative-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .creative-metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>;
};